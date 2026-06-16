import type { NewsItem } from '../types';

/**
 * Seed news feed.
 * Copyright rule: store ONLY headline + original one-line summary + source + date + link.
 * Never full article text or long verbatim excerpts.
 * All items are real Operation Toofan coverage from May–June 2026.
 */
export const newsItems: NewsItem[] = [
  // ── FEATURED milestone ─────────────────────────────────────────────────────
  {
    id: 'tmv-1500-cases-72hr',
    headline:
      'Kerala Police book 1,500 drug cases and arrest 1,000 in 72 hours under Operation Toofan',
    ai_summary:
      'Built around four pillars — Toofan Strike, Toofan Care, Toofan Warriors, and public awareness — the operation hit 1,500 registered cases and 1,000 arrests within its first 72 hours.',
    source_name: 'The Morning Voice',
    source_url:
      'https://tmv.in/article/kerala-police-launch-operation-toofan-book-1500-drug-cases-and-arrest-1000-in-72-hours-date=2026-06-12',
    published_at: '2026-06-12T10:00:00+05:30',
    is_toofan_relevant: true,
    category: 'enforcement',
    featured: true,
  },

  // ── ENFORCEMENT ────────────────────────────────────────────────────────────
  {
    id: 'hindu-rural-60kg-ganja',
    headline: 'Operation Toofan: rural police seize 60 kg of suspected ganja in two weeks',
    ai_summary:
      'Ernakulam Rural police registered 60 NDPS cases and arrested 73 people in under two weeks, seizing nearly 60 kg ganja, 780 g hashish oil and 5 g MDMA; the largest single haul was 34 kg of ganja from West Bengal natives.',
    source_name: 'The Hindu',
    source_url:
      'https://www.thehindu.com/news/national/kerala/operation-toofan-rural-police-seize-60-kg-of-suspected-ganja-in-two-weeks/article71097876.ece',
    published_at: '2026-06-13T19:34:00+05:30',
    is_toofan_relevant: true,
    category: 'enforcement',
  },
  {
    id: 'toi-perumbavoor-heroin',
    headline: 'Operation Toofan: police seize 60 vials of heroin in Perumbavoor raids, 12 in custody',
    ai_summary:
      'A sniffer-dog-assisted rural police drive around Perumbavoor town recovered 60 vials of heroin and took 12 people into custody, part of a special investigation tracing each seizure back to its source.',
    source_name: 'Times of India',
    source_url:
      'https://timesofindia.indiatimes.com/city/kochi/operation-toofan-police-seize-60-vials-of-heroin-during-raids-in-perumbavoor-12-in-custody/articleshow/131725109.cms',
    published_at: '2026-06-14T09:30:00+05:30',
    is_toofan_relevant: true,
    category: 'enforcement',
  },
  {
    id: 'kk-192-wednesday',
    headline: 'MDMA and cannabis sale remain widespread; 192 arrested on Wednesday alone',
    ai_summary:
      'A Wednesday special drive registered 182 cases and arrested 192 people, seizing 31 g MDMA and 3.6 kg cannabis, bringing the cumulative total to 1,768 cases and 1,902 arrests.',
    source_name: 'Kerala Kaumudi',
    source_url:
      'https://www.keralakaumudi.com/en/KERALA/CRIME/mdma-cannabis-sale-and-use-remain-widespread-across-state-192-arrested-on-wednesday-1762263',
    published_at: '2026-06-11T12:00:00+05:30',
    is_toofan_relevant: true,
    category: 'enforcement',
  },
  {
    id: 'kk-1559-week',
    headline: "'Toofan' hurricane: 1,559 arrests and 1,442 cases recorded in the first week",
    ai_summary:
      'Week-one totals: 1,442 registered cases, 1,559 arrests, 1.13 kg MDMA and 111.58 kg cannabis seized statewide, including two alleged foreign-syndicate operatives arrested in Delhi and Bengaluru.',
    source_name: 'Kerala Kaumudi',
    source_url:
      'https://keralakaumudi.com/en/kerala/general/toofan-hurricane-in-kerala-1559-arrests-recorded-in-past-week-1761250',
    published_at: '2026-06-10T17:31:00+05:30',
    is_toofan_relevant: true,
    category: 'enforcement',
  },
  {
    id: 'hindu-ernakulam-momentum',
    headline: 'Toofan gains momentum: 145 arrests and 437 g MDMA seized in Ernakulam',
    ai_summary:
      'Kochi City police recorded 129 cases and 145 arrests in the first week; the biggest single seizure was 437 g of suspected MDMA from an apartment in Thrikkakara during raids at 90 locations.',
    source_name: 'The Hindu',
    source_url:
      'https://www.thehindu.com/news/national/kerala/toofan-gains-momentum-as-police-intensify-anti-drug-operations-in-ernakulam/article71077375.ece',
    published_at: '2026-06-08T19:15:00+05:30',
    is_toofan_relevant: true,
    category: 'enforcement',
  },
  {
    id: 'mathrubhumi-monday-215',
    headline: '215 cases and 233 arrests in a single day of Operation Toofan raids',
    ai_summary:
      'A Monday special drive produced 215 cases and 233 arrests statewide, seizing 45.49 g MDMA and 36.88 kg cannabis in one day.',
    source_name: 'Mathrubhumi',
    source_url:
      'https://www.mathrubhumi.com/crime/news/kerala-operation-toofan-drug-raids-arrests-ketvvtsa',
    published_at: '2026-06-09T08:15:00+05:30',
    is_toofan_relevant: true,
    category: 'enforcement',
  },
  {
    id: 'hindu-795-foreign-nationals',
    headline: 'Two foreign nationals among 795 arrested; narcotics worth ₹60 lakh seized',
    ai_summary:
      'Home Minister Chennithala reported 728 cases and 795 arrests in the first three days, including two alleged foreign drug-racket kingpins arrested in Delhi and Bengaluru.',
    source_name: 'The Hindu',
    source_url:
      'https://www.thehindu.com/news/national/kerala/two-foreign-nationals-among-795-arrested-in-operation-toofan-against-drug-menace-in-kerala/article71066626.ece',
    published_at: '2026-06-05T20:49:00+05:30',
    is_toofan_relevant: true,
    category: 'enforcement',
  },
  {
    id: 'kk-368-arrested',
    headline: '368 arrested and major drug quantities seized in day-three raids',
    ai_summary:
      'Surprise raids across all districts on day three yielded 368 arrests and 340 registered cases, including 0.55 kg MDMA, 16.8 kg cannabis and hashish oil.',
    source_name: 'Kerala Kaumudi',
    source_url:
      'https://keralakaumudi.com/en/kerala/general/operation-toofan-368-arrested-large-quantities-of-drugs-seized-1758708',
    published_at: '2026-06-04T18:20:00+05:30',
    is_toofan_relevant: true,
    category: 'enforcement',
  },
  {
    id: 'asianet-kochi-36',
    headline: 'Kochi Operation Toofan: 36 arrested, 437 g MDMA and luxury car seized',
    ai_summary:
      'Police arrested 36 persons during a major Kochi raid, recovering 437.28 g MDMA along with ₹1 lakh cash and a luxury vehicle linked to the drug network.',
    source_name: 'Asianet News',
    source_url:
      'https://www.asianetnews.com/kerala-news/36-arrested-in-kochi-operation-thoofan-mdma-seized-articleshow-idpyoo4',
    published_at: '2026-06-04T14:00:00+05:30',
    is_toofan_relevant: true,
    category: 'enforcement',
  },
  {
    id: 'manorama-kozhikode-51',
    headline: 'Toofan Hunt in Kozhikode: 51 held in two-day intensive drug crackdown',
    ai_summary:
      'A two-day search in Kozhikode netted 51 arrests; the district has seen 415 cases and 513 arrests over five months, with 2.65 kg MDMA and 51 kg cannabis seized in that period.',
    source_name: 'Manorama News',
    source_url:
      'https://www.manoramanews.com/crime/kuttapathram/2026/06/04/kozhikode-drug-bust-tufan-hunt-arrests.html',
    published_at: '2026-06-04T20:00:00+05:30',
    is_toofan_relevant: true,
    category: 'enforcement',
  },

  // ── POLICY / ANNOUNCEMENT ──────────────────────────────────────────────────
  {
    id: 'hindu-launch-june2',
    headline: "Kerala CM launches 'Operation Toofan' calling drugs the state's gravest threat",
    ai_summary:
      "Chief Minister Satheesan launched the drive at Cotton Hill Girls' School on June 2, warning that an organised drug mafia directly threatens Kerala's youth and social progress.",
    source_name: 'The Hindu',
    source_url:
      'https://www.thehindu.com/news/national/kerala/kerala-launches-operation-toofan-to-combat-growing-drug-menace/article71053162.ece',
    published_at: '2026-06-02T20:20:00+05:30',
    is_toofan_relevant: true,
    category: 'policy',
  },
  {
    id: 'toi-chennithala-announce',
    headline:
      "Home Minister Chennithala announces 'Operation Toofan: The Narco Hunt' to overhaul drug mafia",
    ai_summary:
      'Following a high-level meeting with senior police officers, Chennithala declared one of South India\'s largest anti-narcotics campaigns, promising asset seizures, school protection, and inter-state coordination.',
    source_name: 'Times of India',
    source_url:
      'https://timesofindia.indiatimes.com/city/thiruvananthapuram/ramesh-chennithala-announces-operation-toofan-the-narco-hunt-to-crack-down-on-drug-mafia-across-kerala/articleshow/131454299.cms',
    published_at: '2026-05-23T18:00:00+05:30',
    is_toofan_relevant: true,
    category: 'policy',
  },
  {
    id: 'hindu-prelaunch-may23',
    headline:
      'Major police reforms and Operation Toofan announced; launch set for June 1 in Kerala',
    ai_summary:
      'After a statewide SP-level meeting, Chennithala announced Operation Toofan alongside reforms to all 484 police stations, earmarking ₹15 crore for anti-narcotics and ₹9.43 crore for Vimukthi rehabilitation.',
    source_name: 'The Hindu',
    source_url:
      'https://www.thehindu.com/news/national/kerala/major-changes-announced-in-policing-kerala-operation-toofan-to-be-launched-on-june-1/article71014033.ece',
    published_at: '2026-05-23T12:00:00+05:30',
    is_toofan_relevant: true,
    category: 'policy',
  },

  // ── AWARENESS / EDUCATION ──────────────────────────────────────────────────
  {
    id: 'week-health-concern',
    headline:
      'What is Operation Toofan and why is drug abuse a growing public health concern in Kerala?',
    ai_summary:
      "The Week's health explainer covers Toofan's three pillars — enforcement, awareness, rehabilitation — and the mental health, educational, and family consequences of the drug crisis.",
    source_name: 'The Week',
    source_url:
      'https://www.theweek.in/news/health/2026/06/15/what-is-operation-toofan-and-why-is-drug-abuse-emerging-as-a-major-public-health-concern-in-kerala.html',
    published_at: '2026-06-15T10:00:00+05:30',
    is_toofan_relevant: true,
    category: 'awareness',
  },

  // ── EXPLAINER / ANALYSIS ───────────────────────────────────────────────────
  {
    id: 'national-herald-allout-war',
    headline: "Kerala's all-out war: assessing Operation Toofan's mission-mode response to drugs",
    ai_summary:
      "National Herald argues Kerala's narcotics challenge is now a social crisis, noting Toofan moved from 137 arrests on day one to 368 within three days, and that 2025 saw nearly 19,000 offenders caught in anti-narcotics drives.",
    source_name: 'National Herald',
    source_url:
      'https://www.nationalheraldindia.com/opinion/operation-toofan-kerala-war-against-drugs',
    published_at: '2026-06-13T09:00:00+05:30',
    is_toofan_relevant: true,
    category: 'explainer',
  },
  {
    id: 'biospectrum-analysis',
    headline:
      "Operation Toofan: Why Kerala is launching its biggest anti-drug crackdown now — an analysis",
    ai_summary:
      "Biospectrum traces how synthetic drugs replaced traditional narcotics in Kerala's trafficking networks, and why the state's coastline, Gulf connectivity, and 36,314 NDPS cases in 2025 made a major campaign inevitable.",
    source_name: 'Biospectrum India',
    source_url:
      'https://www.biospectrumindia.com/views/112/27921/operation-toofan-why-kerala-is-launching-its-biggest-anti-drug-crackdown-now.html',
    published_at: '2026-06-09T00:00:00+05:30',
    is_toofan_relevant: true,
    category: 'explainer',
  },
  {
    id: 'week-explainer',
    headline: "What is Operation Toofan? Kerala Police's 'narco hunt' — the full explainer",
    ai_summary:
      'The Week explains the campaign scope: dismantling youth-targeting gangs, cracking down on synthetic-drug supply chains, and coordinating with other states to break interstate syndicates.',
    source_name: 'The Week',
    source_url:
      'https://www.theweek.in/news/india/2026/05/23/operation-toofan-kerala-drug-crackdown-police-narco-hunt-launch.html',
    published_at: '2026-05-23T12:00:00+05:30',
    is_toofan_relevant: true,
    category: 'explainer',
  },
];
