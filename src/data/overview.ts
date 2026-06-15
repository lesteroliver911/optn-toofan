import type { CampaignPillar } from '../types';

/**
 * Illustrative weekly cumulative case totals for the sparkline.
 * These are directionally consistent: the final value equals the verified
 * statewide cumulative (1,768). All intermediate points are illustrative
 * and labelled as such in the UI. Do NOT cite these as official figures.
 * Source for endpoint: Kerala Kaumudi, 10 Jun 2026.
 */
export const weeklyTrend: { label: string; value: number }[] = [
  { label: 'W1', value: 112 },
  { label: 'W2', value: 380 },
  { label: 'W3', value: 690 },
  { label: 'W4', value: 1050 },
  { label: 'W5', value: 1420 },
  { label: 'W6', value: 1768 },
];

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
