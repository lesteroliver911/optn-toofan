# AGENTS.md — Toofan Companion

A mobile-first public-awareness web app supporting Kerala's Operation Toofan anti-drug campaign. Citizen education tool, NOT an enforcement or surveillance tool. Read this fully before writing code.

## What this app is (and is not)

- IS: a public, citizen-facing education and awareness companion. Trilingual (English, Malayalam, Hindi). Free, no login required to read.
- IS NOT: a police tool, a tip-collection system, or a source of secret "drug hotspot" intelligence. We never claim to know where drugs are beyond what is officially and publicly reported.
- Tone of all content: calm, factual, non-sensational, non-stigmatising. Harm-reduction and help-seeking framing, never fear-mongering or moralising.

## Stack

- Frontend: React + Vite + TypeScript + Tailwind. Functional components and hooks only, no class components.
- Backend: Supabase (Postgres + Auth + Edge Functions, Deno runtime).
- LLM: OpenRouter (single API key, multi-model). Default model set via `OPENROUTER_MODEL` env, defaulting to a Claude model for Malayalam quality. Never call OpenRouter from the browser.
- Web scraping: Firecrawl, called only from a scheduled Edge Function for the news feed.
- Maps: Leaflet with OpenStreetMap tiles. No Google Maps key.

## Non-negotiable security rules

- NEVER put `OPENROUTER_API_KEY`, `FIRECRAWL_API_KEY`, or the Supabase `service_role` key in any frontend file, Vite env prefixed `VITE_`, or committed code. These live ONLY as Supabase Edge Function secrets.
- Frontend may use ONLY the Supabase anon key and public URL (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`).
- All LLM and Firecrawl calls go: browser -> Supabase Edge Function -> external API -> back. The browser never touches OpenRouter or Firecrawl directly.
- Enable Row Level Security on every table. Public read where intended; all writes via `service_role` inside Edge Functions only.
- Never log full user copilot messages with identifying data. The app collects no personal accusations and stores no user-submitted reports (see Page 1 reporting rule below).
- If you find a secret committed anywhere, STOP and report it before continuing.

## Commands

```
npm install            # install deps
npm run dev            # local dev server
npm run build          # production build
npm run lint           # eslint + type check, must pass before commit
supabase start         # local supabase stack
supabase functions serve   # run edge functions locally
supabase db push       # apply migrations
```

Verify a package is installed (`npm list <pkg>`) before importing it. Never assume a package exists from memory.

## Data model (Supabase)

```sql
-- districts: powers the map. District-level ONLY. Every row must cite a public source.
districts(id text pk, name_en text, name_ml text, name_hi text,
          lat double precision, lng double precision,
          case_count int, severity text /* high|medium|low */,
          source_url text, as_of date)

-- news_items: powers the news feed. AI-gated to Toofan relevance.
news_items(id uuid pk default gen_random_uuid(), headline text,
           ai_summary text /* one line, AI-generated */,
           source_name text, source_url text, published_at timestamptz,
           is_toofan_relevant boolean default false, created_at timestamptz default now())

-- education_content: static educational entries for the Learn and Parents pages.
education_content(id uuid pk default gen_random_uuid(),
                  topic text, audience text /* youth|parent */,
                  lang text /* en|ml|hi */, title text, body text)
```

RLS: public `select` on all three. No public `insert/update/delete` anywhere.

## The four pages

Bottom tab bar, four tabs, mobile-first. Dark indigo (#12183A) headers, white surfaces, flat design.

### 1. Map — "Live transparency map"
- Leaflet map of Kerala, district-level markers sized and coloured by `case_count` (red=high, amber=medium, grey=low) from `districts`.
- Tap a district: shows name (in active language), case count, source link, `as_of` date.
- Ranked district list below the map.
- CRITICAL: markers are DISTRICT-level only. Never render street-level or precise pins — we do not have that data and implying precision is a credibility risk.
- "Report safely" button: opens the OFFICIAL Kerala Police Toofan channels — call 9497979794 or 9497927797, WhatsApp 9995966666. The app itself MUST NOT collect, store, or transmit any user tip or accusation. It only routes users to the official numbers. Do not build a tip form.

### 2. News — "Operation Toofan: official coverage"
- Feed from `news_items` where `is_toofan_relevant = true`, newest first.
- Each card: headline, one-line AI summary, source name, date. Tap opens `source_url` externally.
- Copyright: store and show ONLY headline + a short original AI summary + link out. NEVER store or display full article text or long verbatim excerpts.
- Population is via the `news-refresh` Edge Function (Firecrawl + an AI relevance classifier). For the POC, the table may be seeded manually with real items.

### 3. Learn — trilingual AI copilot
- Chat UI with a language switcher: English / മലയാളം / हिन्दी. Replies render in the selected language.
- Quick-suggestion chips: "What is MDMA?", "Warning signs", "Get help".
- Sends messages to the `claude-copilot` Edge Function with `{ messages, lang, persona: 'youth' }`.
- Streaming responses preferred.

### 4. Parents — "Understand the signs"
- Green-themed. Scrollable, expandable behavioral warning-sign cards (sleep changes, secretive new friends, mood swings, missing money/items, school issues). Content from `education_content` where `audience='parent'`.
- "Talk to the parent copilot" button: opens the same copilot with `persona: 'parent'`.

## Edge Functions (Deno)

- `claude-copilot`: receives `{ messages, lang, persona }`, calls OpenRouter, returns the reply. Two system prompts:
  - `youth`: drug-education and harm-reduction only; calm, factual, non-judgemental; respond strictly in `lang`; for help-seeking, surface real Kerala resources, not platitudes.
  - `parent`: calm, non-accusatory guidance for worried parents; never tells a parent to confront or punish; emphasises observation, conversation, and professional help.
  - Both: refuse out-of-scope requests politely; never give instructions for obtaining, making, or using drugs; never diagnose.
- `news-refresh`: scheduled. Firecrawl scrapes a fixed allowlist of Kerala news sources, an AI classifier sets `is_toofan_relevant`, writes via `service_role`. Generates the one-line `ai_summary`. Dedupe by `source_url`.

## Code style

- TypeScript strict mode. No `any` as an escape hatch — type it or use `unknown` and narrow.
- Prefer `type` over `interface` for component props. Use `const` objects over `enum`.
- Tailwind for styling; extract a component when a class string repeats 3+ times.
- All user-facing strings go through an i18n layer keyed by `lang` (en/ml/hi). No hardcoded English in JSX. Malayalam and Hindi render in native script.
- Be concise in code and comments. Do not comment standard patterns. Comment only non-obvious decisions (e.g. why district-only on the map).

## Agent boundaries

- NEVER commit without user review.
- NEVER delete or overwrite `.env`, migrations, or config without explicit confirmation.
- When adding a feature, state the interface (types, function signatures, file paths) and wait for approval before large multi-file implementations.
- If a change is effectively identical to existing code, say "no changes needed" rather than rewriting.
- Do not introduce a new dependency or external service beyond OpenRouter, Supabase, Firecrawl, and Leaflet without flagging it first.

## Commit / PR

- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`.
- `npm run lint` must pass before any commit.
- One logical change per PR. Reference the page or function touched in the title.
