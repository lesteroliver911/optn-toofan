import type { LocalizedText } from '../types';

/**
 * Command intelligence snapshot for the Overview dashboard.
 *
 * Value provenance is documented per field.
 * "Real" = sourced from public reporting.
 * "Illustrative" = no public figure exists; value is internally consistent
 *   with verified daily patterns but is not an official statistic.
 */

/**
 * Today's operational snapshot.
 * raids / arrests: illustrative, consistent with reported daily drives
 *   (Jun 9 drive: 215 cases / 233 arrests; Jun 11 drive: 182 / 192).
 * kingpins: REAL — 2 alleged foreign kingpins arrested in Delhi &
 *   Bengaluru (The Hindu, 5 Jun 2026).
 */
export const todaySnapshot = {
  raids: 47,
  arrests: 198,
  kingpins: 2,
} as const;

/**
 * Worsening district — the district whose trajectory warrants the most
 * attention based on publicly reported figures.
 * districtId: REAL — Ernakulam leads all districts with 299 cases and
 *   the single largest MDMA seizure (437 g, The Hindu 8 Jun 2026).
 * deltaPct: illustrative week-on-week change, consistent with Ernakulam's
 *   documented heavy caseload and 60-kg ganja haul in two weeks (The Hindu
 *   13 Jun 2026). Official per-district weekly deltas have not been published.
 */
export const worseningDistrict = {
  districtId: 'ernakulam',
  deltaPct: 18,
} as const;

/**
 * Youth awareness coverage.
 * Reframed from "school clusters high risk" to a safe, positive metric.
 * All values illustrative — the Kerala Police / Vimukthi awareness programme
 * scope has not been fully reported publicly (the announcement mentioned
 * school programmes without specifics). Values are proportionate to 14
 * districts and reported school-level outreach.
 * Source context: The Hindu launch article (2 Jun 2026) mentioned outreach
 *   to Cotton Hill Girls' School and a broader school-programme component.
 */
export const awarenessCoverage = {
  schoolsReached: 312,
  programmesRun: 89,
  districtsCovered: 14,
} as const;

export type SubstanceKind = 'mdma' | 'cannabis';
export type TransportMode = 'rail' | 'air' | 'road';

export type EmergingRoute = {
  id: string;
  substance: SubstanceKind;
  origin: LocalizedText;
  entry: LocalizedText;
  mode: TransportMode;
};

/**
 * Publicly identified trafficking routes.
 * Source: State Police Chief Ravada A Chandrasekhar, New Indian Express
 *   4 Jun 2026 — "Ganja is mostly procured from the Odisha–Andhra border.
 *   MDMA is procured via multiple channels — from Muscat via
 *   Thiruvananthapuram and Karipur airports, and from Bengaluru."
 * The Aluva/Angamaly rail interceptions are REAL — The Hindu & TOI, Jun 2026.
 */
export const emergingRoutes: EmergingRoute[] = [
  {
    id: 'route-ganja-rail',
    substance: 'cannabis',
    origin: {
      en: 'Odisha – Andhra border',
      ml: 'ഒഡിഷ–ആന്ധ്ര അതിർത്തി',
      hi: 'ओडिशा–आंध्र सीमा',
    },
    entry: {
      en: 'Aluva / Angamaly rail stations',
      ml: 'ആലുവ / അങ്കമാലി റെയിൽ നിലയം',
      hi: 'अलुवा / अंगमाली रेल स्टेशन',
    },
    mode: 'rail',
  },
  {
    id: 'route-mdma-air-tvpm',
    substance: 'mdma',
    origin: {
      en: 'Muscat, Oman',
      ml: 'മസ്കത്ത്, ഒമാൻ',
      hi: 'मस्कट, ओमान',
    },
    entry: {
      en: 'Thiruvananthapuram International Airport',
      ml: 'തിരുവനന്തപുരം അന്തർദ്ദേശീയ വിമാനത്താവളം',
      hi: 'तिरुवनंतपुरम अंतर्राष्ट्रीय हवाई अड्डा',
    },
    mode: 'air',
  },
  {
    id: 'route-mdma-air-karipur',
    substance: 'mdma',
    origin: {
      en: 'Muscat, Oman',
      ml: 'മസ്കത്ത്, ഒമാൻ',
      hi: 'मस्कट, ओमान',
    },
    entry: {
      en: 'Karipur International Airport',
      ml: 'കാരിപ്പൂർ അന്തർദ്ദേശീയ വിമാനത്താവളം',
      hi: 'कालीकट अंतर्राष्ट्रीय हवाई अड्डा',
    },
    mode: 'air',
  },
  {
    id: 'route-mdma-road-bengaluru',
    substance: 'mdma',
    origin: {
      en: 'Bengaluru (distribution hub)',
      ml: 'ബെംഗളൂരു (വിതരണ കേന്ദ്രം)',
      hi: 'बेंगलुरु (वितरण केंद्र)',
    },
    entry: {
      en: 'Northern Kerala (road)',
      ml: 'വടക്കൻ കേരളം (റോഡ്)',
      hi: 'उत्तरी केरल (सड़क)',
    },
    mode: 'road',
  },
];

/**
 * Public sentiment split — illustrative.
 * Derived from editorial tone analysis of coverage in The Hindu, The Week,
 * Kerala Kaumudi, Mathrubhumi (Jun 2026): overwhelmingly supportive of the
 * crackdown, with a minority expressing concern about due process / user
 * criminalisation. Sums to 100. Not an official survey.
 */
export const publicSentiment = {
  supportive: 71,
  concerned: 22,
  critical: 7,
} as const;
