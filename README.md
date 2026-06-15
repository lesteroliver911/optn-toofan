# Toofan Companion

A mobile-first, trilingual (English / Malayalam / Hindi) public-awareness web app supporting Kerala's **Operation Toofan: The Narco Hunt** anti-drug campaign.

This is a citizen education and awareness companion. It is **not** a police tool, a tip-collection system, or a source of secret intelligence. All content is calm, factual, and harm-reduction framed.

## This build: UI-first clickable demo

This repository currently contains the **front end only**, as a fully clickable prototype:

- Data (map districts, news, education content) is **seeded statically** in `src/data/`, shaped to match the eventual Supabase schema so it is trivially swappable for live data later.
- The Learn/Parents copilot uses **scripted trilingual responses** behind a `sendMessage()` interface (`src/data/copilot.ts`), so it can be swapped for the real `claude-copilot` Edge Function with a one-file change.
- No secrets, no backend calls. The map uses Leaflet + OpenStreetMap tiles.

## Stack

React + Vite + TypeScript + Tailwind, Leaflet for the map.

## Commands

```
npm install   # install dependencies
npm run dev    # start the local dev server
npm run build  # production build
npm run lint   # type check + eslint
```

## The four pages

1. **Map** - district-level transparency map (markers sized/coloured by case count) + ranked list + "Report safely" routing to official Kerala Police channels.
2. **News** - feed of Operation Toofan coverage; headline + one-line summary + link out only.
3. **Learn** - trilingual chat copilot (youth persona) with suggestion chips.
4. **Parents** - behavioural warning-sign cards + entry to the copilot in parent persona.

## Data sources

District and statewide figures are seeded from public reporting (The Hindu, Kerala Kaumudi, The Week, Mathrubhumi, Manorama) on Operation Toofan, launched June 1, 2026. Each district row cites a public `source_url`. Statewide week-one figures: ~1,559 arrests across 1,442 registered cases.
