import type { CampaignPillar } from '../types';

/**
 * Verified cumulative registered-case checkpoints, each from public reporting.
 * Every value is a real reported cumulative figure on the given date:
 *   Jun 2  104  - New Indian Express (day-1, 24 hours)
 *   Jun 4  340  - Kerala Kaumudi / Times of India (day-3 statewide)
 *   Jun 5  728  - The Hindu (first three days)
 *   Jun 10 1442 - Kerala Kaumudi (first week)
 *   Jun 11 1768 - Kerala Kaumudi (cumulative to date)
 * These are reported figures, not illustrative.
 */
export const caseProgression: { label: string; date: string; value: number }[] = [
  { label: 'Jun 2', date: '2026-06-02', value: 104 },
  { label: 'Jun 4', date: '2026-06-04', value: 340 },
  { label: 'Jun 5', date: '2026-06-05', value: 728 },
  { label: 'Jun 10', date: '2026-06-10', value: 1442 },
  { label: 'Jun 11', date: '2026-06-11', value: 1768 },
];

/**
 * Verified operational facts about Operation Toofan, each from public reporting.
 * - launchDate: statewide launch (Kerala Kaumudi / Times of India).
 * - subdivisions: 84 police subdivisions, four special squads each (Times of India).
 * - jurisdictionStates / jurisdictionUTs: 5 states + 2 UTs (Times of India).
 * - foreignArrests: 2 alleged foreign kingpins held in Delhi & Bengaluru (The Hindu).
 * - valueSeizedLakhFirst3Days: narcotics worth over Rs 60 lakh in first 3 days (The Hindu).
 */
export const operationFacts = {
  launchDate: '2026-06-02',
  subdivisions: 84,
  squadsPerSubdivision: 4,
  jurisdictionStates: 5,
  jurisdictionUTs: 2,
  foreignArrests: 2,
  valueSeizedLakhFirst3Days: 60,
} as const;

/** Whole days elapsed since the statewide launch (always-true elapsed time). */
export function daysSinceLaunch(now: Date = new Date()): number {
  const launch = new Date(`${operationFacts.launchDate}T00:00:00+05:30`);
  const ms = now.getTime() - launch.getTime();
  return Math.max(1, Math.floor(ms / (1000 * 60 * 60 * 24)));
}

/**
 * The four official pillars of Operation Toofan.
 * Source: Kerala Police press release and The Morning Voice, June 2026.
 */
export const campaignPillars: CampaignPillar[] = [
  {
    id: 'strike',
    icon: '⚡',
    title: {
      en: 'Toofan Strike',
      ml: 'തൂഫാൻ സ്ട്രൈക്ക്',
      hi: 'तूफ़ान स्ट्राइक',
    },
    desc: {
      en: 'Rapid enforcement operations: seizures, arrests, and dismantling supply networks.',
      ml: 'വേഗത്തിലുള്ള നടപടി: പിടിച്ചെടുക്കൽ, അറസ്റ്റ്, വിതരണ ശൃംഖല തകർക്കൽ.',
      hi: 'तेज प्रवर्तन: जब्ती, गिरफ्तारी, और आपूर्ति नेटवर्क को ध्वस्त करना।',
    },
  },
  {
    id: 'care',
    icon: '🏥',
    title: {
      en: 'Toofan Care',
      ml: 'തൂഫാൻ കെയർ',
      hi: 'तूफ़ान केयर',
    },
    desc: {
      en: 'Rehabilitation and de-addiction support for those struggling with substance use.',
      ml: 'ലഹരി ഉപയോഗം നേരിടുന്നവർക്ക് പുനരധിവാസവും ഡീ-അഡിക്ഷൻ സഹായവും.',
      hi: 'नशे से जूझ रहे लोगों के लिए पुनर्वास और डी-एडिक्शन सहायता।',
    },
  },
  {
    id: 'warriors',
    icon: '🛡️',
    title: {
      en: 'Toofan Warriors',
      ml: 'തൂഫാൻ വാരിയേഴ്സ്',
      hi: 'तूफ़ान वॉरियर्स',
    },
    desc: {
      en: 'Community volunteers and youth champions mobilised to resist drug culture.',
      ml: 'മയക്കുമരുന്ന് സംസ്കാരത്തെ ചെറുക്കാൻ സജ്ജരാക്കിയ സമൂഹ സന്നദ്ധർ.',
      hi: 'ड्रग संस्कृति का विरोध करने के लिए जुटाए गए सामुदायिक स्वयंसेवक।',
    },
  },
  {
    id: 'awareness',
    icon: '📣',
    title: {
      en: 'Public Awareness',
      ml: 'പൊതു ബോധവൽക്കരണം',
      hi: 'जन जागरूकता',
    },
    desc: {
      en: 'School programmes, parent outreach, and media campaigns to prevent first use.',
      ml: 'ആദ്യ ഉപയോഗം തടയാൻ സ്കൂൾ പരിപാടി, രക്ഷിതൃ ബന്ധം, മാധ്യമ ക്യാമ്പെയ്ൻ.',
      hi: 'पहले उपयोग को रोकने के लिए स्कूल कार्यक्रम, अभिभावक आउटरीच, मीडिया अभियान।',
    },
  },
];
