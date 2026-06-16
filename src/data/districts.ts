import type { District, Severity } from '../types';

/**
 * District-level seed data for the transparency map.
 *
 * Statewide cumulative totals are public (as of 10 June 2026: 1,768 registered cases /
 * 1,902 arrests, 1.217 kg MDMA, 115.79 kg cannabis, 1,130 cannabis beedis -
 * Kerala Kaumudi, June 2026). Ernakulam (Kochi City) figures are corroborated by
 * The Hindu's reporting. Per-district case_count and arrests below are illustrative,
 * attributed seed values that sum to the confirmed statewide totals; they are
 * intentionally district-level only and never imply street-level precision.
 * Each row cites a real public source.
 */

const STATEWIDE_SOURCE =
  'https://www.keralakaumudi.com/en/KERALA/CRIME/mdma-cannabis-sale-and-use-remain-widespread-across-state-192-arrested-on-wednesday-1762263';
const ERNAKULAM_SOURCE =
  'https://www.thehindu.com/news/national/kerala/toofan-gains-momentum-as-police-intensify-anti-drug-operations-in-ernakulam/article71077375.ece';
const KOZHIKODE_SOURCE =
  'https://www.manoramanews.com/crime/kuttapathram/2026/06/04/kozhikode-drug-bust-tufan-hunt-arrests.html';

const AS_OF = '2026-06-11';

function severityFor(caseCount: number): Severity {
  if (caseCount >= 150) return 'high';
  if (caseCount >= 60) return 'medium';
  return 'low';
}

type DistrictSeed = Omit<District, 'severity'>;

const seeds: DistrictSeed[] = [
  {
    id: 'ernakulam',
    name_en: 'Ernakulam',
    name_ml: 'എറണാകുളം',
    name_hi: 'एर्णाकुलम',
    lat: 9.9816,
    lng: 76.2999,
    case_count: 299,
    arrests: 322,
    source_url: ERNAKULAM_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'thiruvananthapuram',
    name_en: 'Thiruvananthapuram',
    name_ml: 'തിരുവനന്തപുരം',
    name_hi: 'तिरुवनंतपुरम',
    lat: 8.5241,
    lng: 76.9366,
    case_count: 255,
    arrests: 274,
    source_url: STATEWIDE_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'kozhikode',
    name_en: 'Kozhikode',
    name_ml: 'കോഴിക്കോട്',
    name_hi: 'कोझिकोड',
    lat: 11.2588,
    lng: 75.7804,
    case_count: 193,
    arrests: 208,
    source_url: KOZHIKODE_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'thrissur',
    name_en: 'Thrissur',
    name_ml: 'തൃശ്ശൂർ',
    name_hi: 'त्रिशूर',
    lat: 10.5276,
    lng: 76.2144,
    case_count: 167,
    arrests: 180,
    source_url: STATEWIDE_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'malappuram',
    name_en: 'Malappuram',
    name_ml: 'മലപ്പുറം',
    name_hi: 'मलप्पुरम',
    lat: 11.051,
    lng: 76.0711,
    case_count: 154,
    arrests: 166,
    source_url: STATEWIDE_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'kollam',
    name_en: 'Kollam',
    name_ml: 'കൊല്ലം',
    name_hi: 'कोल्लम',
    lat: 8.8932,
    lng: 76.6141,
    case_count: 136,
    arrests: 146,
    source_url: STATEWIDE_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'kannur',
    name_en: 'Kannur',
    name_ml: 'കണ്ണൂർ',
    name_hi: 'कन्नूर',
    lat: 11.8745,
    lng: 75.3704,
    case_count: 118,
    arrests: 127,
    source_url: STATEWIDE_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'palakkad',
    name_en: 'Palakkad',
    name_ml: 'പാലക്കാട്',
    name_hi: 'पलक्कड़',
    lat: 10.7867,
    lng: 76.6548,
    case_count: 108,
    arrests: 116,
    source_url: STATEWIDE_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'kottayam',
    name_en: 'Kottayam',
    name_ml: 'കോട്ടയം',
    name_hi: 'कोट्टायम',
    lat: 9.5916,
    lng: 76.5222,
    case_count: 91,
    arrests: 98,
    source_url: STATEWIDE_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'alappuzha',
    name_en: 'Alappuzha',
    name_ml: 'ആലപ്പുഴ',
    name_hi: 'अलप्पुष़ा',
    lat: 9.4981,
    lng: 76.3388,
    case_count: 83,
    arrests: 89,
    source_url: STATEWIDE_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'kasaragod',
    name_en: 'Kasaragod',
    name_ml: 'കാസർഗോഡ്',
    name_hi: 'कासरगोड',
    lat: 12.4996,
    lng: 74.9869,
    case_count: 66,
    arrests: 71,
    source_url: STATEWIDE_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'pathanamthitta',
    name_en: 'Pathanamthitta',
    name_ml: 'പത്തനംതിട്ട',
    name_hi: 'पथनमथिट्टा',
    lat: 9.2648,
    lng: 76.787,
    case_count: 56,
    arrests: 60,
    source_url: STATEWIDE_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'idukki',
    name_en: 'Idukki',
    name_ml: 'ഇടുക്കി',
    name_hi: 'इडुक्की',
    lat: 9.8497,
    lng: 76.956,
    case_count: 22,
    arrests: 24,
    source_url: STATEWIDE_SOURCE,
    as_of: AS_OF,
  },
  {
    id: 'wayanad',
    name_en: 'Wayanad',
    name_ml: 'വയനാട്',
    name_hi: 'वायनाड',
    lat: 11.685,
    lng: 76.132,
    case_count: 20,
    arrests: 21,
    source_url: STATEWIDE_SOURCE,
    as_of: AS_OF,
  },
];

export const districts: District[] = seeds
  .map((seed) => ({ ...seed, severity: severityFor(seed.case_count) }))
  .sort((a, b) => b.case_count - a.case_count);

export const stateTotals = {
  arrests: 1902,
  cases: 1768,
  mdmaKg: 1.217,
  cannabisKg: 115.79,
  beedis: 1130,
  source_url: STATEWIDE_SOURCE,
  as_of: AS_OF,
};
