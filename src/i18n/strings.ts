import type { Lang } from '../types';

export type Strings = {
  appName: string;
  appTagline: string;
  langName: string;
  tabs: { overview: string; map: string; news: string; learn: string; parents: string; community: string };
  community: {
    title: string;
    subtitle: string;
    submitButton: string;
    disclaimerBanner: string;
    officialChannels: string;
    all: string;
    drugUse: string;
    drugDistribution: string;
    other: string;
    sortTop: string;
    sortNew: string;
    votes: string;
    rank: string;
    statusNew: string;
    statusReviewing: string;
    statusActioned: string;
    categoryLabel: string;
    pincodeLabel: string;
    pincodePlaceholder: string;
    mapsTo: string;
    descriptionLabel: string;
    descriptionPlaceholder: string;
    submit: string;
    submitSuccess: string;
    invalidPincode: string;
    approxLocationNote: string;
    showing: string;
    reportsWord: string;
    noResults: string;
    demoNote: string;
    mapView: string;
    listView: string;
    viewDetails: string;
  };
  overview: {
    title: string;
    subtitle: string;
    asOf: string;
    viewSource: string;
    reportButton: string;
    cases: string;
    arrests: string;
    districtsActive: string;
    mdmaSeized: string;
    cannabisSeized: string;
    casesByDistrict: string;
    viewFullMap: string;
    momentumTitle: string;
    illustrative: string;
    seizuresTitle: string;
    beedis: string;
    pillarsTitle: string;
    latestCoverage: string;
    viewAllNews: string;
    transparency: string;
  };
  map: {
    title: string;
    subtitle: string;
    legendTitle: string;
    high: string;
    medium: string;
    low: string;
    all: string;
    rankedTitle: string;
    cases: string;
    asOf: string;
    viewSource: string;
    transparency: string;
    stateTotals: string;
    arrests: string;
    casesRegistered: string;
    mdmaSeized: string;
    cannabisSeized: string;
    searchPlaceholder: string;
    selectHint: string;
    noResults: string;
    showing: string;
    districtsWord: string;
    lastUpdated: string;
    rankLabel: string;
    arrestsMade: string;
    shareOfCases: string;
    severityTitle: string;
  };
  report: {
    button: string;
    title: string;
    subtitle: string;
    call: string;
    whatsapp: string;
    line1: string;
    line2: string;
    whatsappLabel: string;
    disclaimer: string;
  };
  news: {
    title: string;
    subtitle: string;
    readAtSource: string;
    relevant: string;
    featured: string;
    all: string;
    enforcement: string;
    policy: string;
    awareness: string;
    explainer: string;
    searchPlaceholder: string;
    showing: string;
    storiesWord: string;
    noResults: string;
    sourcesTracked: string;
    reportsTracked: string;
    lastUpdated: string;
  };
  learn: {
    title: string;
    subtitle: string;
    all: string;
    substances: string;
    'warning-signs': string;
    myths: string;
    'help-friend': string;
    'getting-help': string;
    legal: string;
    searchPlaceholder: string;
    showing: string;
    topicsWord: string;
    noResults: string;
    readMore: string;
    helpTitle: string;
    helpText: string;
    callNow: string;
  };
  parents: {
    title: string;
    subtitle: string;
    talkToCopilot: string;
    /** Section badge labels — keyed to ParentSection values for direct lookup. */
    'warning-signs': string;
    conversation: string;
    'what-to-avoid': string;
    readMore: string;
    helpTitle: string;
    helpText: string;
    callNow: string;
    helplinesTitle: string;
    vimukthiLabel: string;
    dishaLabel: string;
    toofanLabel: string;
    emergencyLabel: string;
    learnCtaText: string;
  };
};

export const strings: Record<Lang, Strings> = {
  en: {
    appName: 'Toofan Companion',
    appTagline: 'Operation Toofan: The Narco Hunt',
    langName: 'English',
    tabs: { overview: 'Overview', map: 'Map', news: 'News', learn: 'Learn', parents: 'Parents', community: 'Community' },
    overview: {
      title: 'Operation Toofan',
      subtitle: 'Live command view. Statewide cumulative, district-level breakdown.',
      asOf: 'As of',
      viewSource: 'Official source',
      reportButton: 'Report safely',
      cases: 'Cases registered',
      arrests: 'Arrests made',
      districtsActive: 'High / medium districts',
      mdmaSeized: 'MDMA seized',
      cannabisSeized: 'Cannabis seized',
      casesByDistrict: 'Cases by district',
      viewFullMap: 'View full map',
      momentumTitle: 'Weekly momentum',
      illustrative: 'Illustrative trend',
      seizuresTitle: 'Seizures breakdown',
      beedis: 'Cannabis beedis',
      pillarsTitle: 'Four pillars of the operation',
      latestCoverage: 'Latest coverage',
      viewAllNews: 'View all news',
      transparency:
        'All figures are officially reported, district-level data only. Street-level locations are never shown. Source: Kerala Kaumudi, 10 Jun 2026.',
    },
    community: {
      title: 'Community Board',
      subtitle: 'Citizens share area-level concerns. Most-voted spots surface for government review.',
      submitButton: 'Submit a concern',
      disclaimerBanner:
        'All reports are approximate and district-level only. For actionable intelligence contact official channels.',
      officialChannels: 'Official channels',
      all: 'All reports',
      drugUse: 'Drug use',
      drugDistribution: 'Drug distribution',
      other: 'Other concern',
      sortTop: 'Top voted',
      sortNew: 'Newest',
      votes: 'votes',
      rank: 'Rank',
      statusNew: 'New',
      statusReviewing: 'Under review',
      statusActioned: 'Actioned',
      categoryLabel: 'Category',
      pincodeLabel: 'Pincode',
      pincodePlaceholder: 'e.g. 682020',
      mapsTo: 'Maps to',
      descriptionLabel: 'Description',
      descriptionPlaceholder: 'Describe what you have observed (area-level only, no personal details or street addresses).',
      submit: 'Submit concern',
      submitSuccess: 'Your concern has been added to the board.',
      invalidPincode: 'Enter a valid 6-digit Kerala pincode (670000 to 695999).',
      approxLocationNote: 'Location is approximate and district-level only. No street addresses are stored or shown.',
      showing: 'Showing',
      reportsWord: 'reports',
      noResults: 'No reports match your filter.',
      demoNote: 'Demo mode: data is stored locally on this device only. No information is sent to any server.',
      mapView: 'Map',
      listView: 'List',
      viewDetails: 'View details',
    },
    map: {
      title: 'Live transparency map',
      subtitle: 'Officially reported, district-level figures.',
      legendTitle: 'Caseload',
      high: 'High',
      medium: 'Medium',
      low: 'Lower',
      all: 'All',
      rankedTitle: 'Districts by registered cases',
      cases: 'cases',
      asOf: 'As of',
      viewSource: 'View official source',
      transparency:
        'This map shows only officially reported, district-level figures. It never pinpoints individuals or exact locations.',
      stateTotals: 'Statewide cumulative',
      arrests: 'Arrests',
      casesRegistered: 'Cases',
      mdmaSeized: 'MDMA seized',
      cannabisSeized: 'Cannabis seized',
      searchPlaceholder: 'Search district...',
      selectHint: 'Select a district on the map or list for details.',
      noResults: 'No districts match your search.',
      showing: 'Showing',
      districtsWord: 'districts',
      lastUpdated: 'Updated',
      rankLabel: 'Rank',
      arrestsMade: 'Arrests made',
      shareOfCases: 'Share of state cases',
      severityTitle: 'Severity distribution',
    },
    report: {
      button: 'Report safely',
      title: 'Report safely',
      subtitle: 'Share information through the official Kerala Police Toofan channels.',
      call: 'Call',
      whatsapp: 'WhatsApp',
      line1: 'Toofan helpline 1',
      line2: 'Toofan helpline 2',
      whatsappLabel: 'Toofan WhatsApp',
      disclaimer:
        'This app does not collect or store any report. It only connects you to the official channels.',
    },
    news: {
      title: 'Official coverage',
      subtitle: 'Operation Toofan in the news, newest first.',
      readAtSource: 'Read at source',
      relevant: 'Toofan',
      featured: 'Featured',
      all: 'All',
      enforcement: 'Enforcement',
      policy: 'Policy',
      awareness: 'Awareness',
      explainer: 'Explainer',
      searchPlaceholder: 'Search stories…',
      showing: 'Showing',
      storiesWord: 'stories',
      noResults: 'No stories match your search.',
      sourcesTracked: 'Sources tracked',
      reportsTracked: 'Reports indexed',
      lastUpdated: 'Updated',
    },
    learn: {
      title: 'Learn',
      subtitle: 'Honest, calm information about drugs, risks, and getting help.',
      all: 'All topics',
      substances: 'Substances',
      'warning-signs': 'Warning signs',
      myths: 'Myths',
      'help-friend': 'Help a friend',
      'getting-help': 'Getting help',
      legal: 'Legal',
      searchPlaceholder: 'Search topics...',
      showing: 'Showing',
      topicsWord: 'topics',
      noResults: 'No topics match your search.',
      readMore: 'Read more',
      helpTitle: 'Need help right now?',
      helpText: 'Free, confidential support is available 24 hours a day.',
      callNow: 'Call',
    },
    parents: {
      title: 'Understand the signs',
      subtitle: 'Calm, practical guidance for worried parents.',
      talkToCopilot: 'Explore the Learn library',
      'warning-signs': 'Warning signs',
      conversation: 'Starting a conversation',
      'what-to-avoid': 'What to avoid',
      readMore: 'Read more',
      helpTitle: 'Worried about someone?',
      helpText: 'Free, confidential support is available 24 hours a day.',
      callNow: 'Call',
      helplinesTitle: 'Kerala helplines',
      vimukthiLabel: 'Vimukthi de-addiction (toll-free)',
      dishaLabel: 'DISHA health helpline',
      toofanLabel: 'Operation Toofan helpline',
      emergencyLabel: 'Emergency services',
      learnCtaText:
        'The Learn library has calm, factual guides on warning signs, starting a conversation, and finding professional support in Kerala.',
    },
  },
  ml: {
    appName: 'തൂഫാൻ കമ്പാനിയൻ',
    appTagline: 'ഓപ്പറേഷൻ തൂഫാൻ: ദ നാർക്കോ ഹണ്ട്',
    langName: 'മലയാളം',
    tabs: { overview: 'ആകെ', map: 'മാപ്പ്', news: 'വാർത്ത', learn: 'പഠിക്കാം', parents: 'രക്ഷിതാക്കൾ', community: 'സമൂഹം' },
    overview: {
      title: 'ഓപ്പറേഷൻ തൂഫാൻ',
      subtitle: 'തത്സമയ കമാൻഡ് വ്യൂ. സംസ്ഥാന വ്യാപകം, ജില്ലാതല വിശദാംശം.',
      asOf: 'അവലംബ തീയതി',
      viewSource: 'ഔദ്യോഗിക ഉറവിടം',
      reportButton: 'സുരക്ഷിതമായി അറിയിക്കുക',
      cases: 'രജിസ്റ്റർ ചെയ്ത കേസുകൾ',
      arrests: 'അറസ്റ്റുകൾ',
      districtsActive: 'ഉയർന്ന / ഇടത്തരം ജില്ലകൾ',
      mdmaSeized: 'എംഡിഎംഎ പിടിച്ചെടുത്തു',
      cannabisSeized: 'കഞ്ചാവ് പിടിച്ചെടുത്തു',
      casesByDistrict: 'ജില്ലാ അനുസരിച്ച് കേസുകൾ',
      viewFullMap: 'പൂർണ മാപ്പ് കാണുക',
      momentumTitle: 'വാരാന്ത്യ ഗതി',
      illustrative: 'ദൃഷ്ടാന്ത ട്രെൻഡ്',
      seizuresTitle: 'പിടിച്ചെടുക്കൽ വിശദാംശം',
      beedis: 'കഞ്ചാവ് ബീഡികൾ',
      pillarsTitle: 'ഓപ്പറേഷന്‍റെ നാല് സ്തംഭങ്ങൾ',
      latestCoverage: 'പുതിയ വാർത്തകൾ',
      viewAllNews: 'എല്ലാ വാർത്തകളും കാണുക',
      transparency:
        'എല്ലാ കണക്കുകളും ഔദ്യോഗികമായി റിപ്പോർട്ട് ചെയ്ത ജില്ലാ തല ഡാറ്റ മാത്രം. തെരുവ് തല ലൊക്കേഷനുകൾ ഒരിക്കലും കാണിക്കില്ല. ഉറവിടം: കേരള കൗമുദി, 10 ജൂൺ 2026.',
    },
    community: {
      title: 'സമൂഹ ബോർഡ്',
      subtitle: 'പൗരന്മാർ ഏകദേശ പ്രദേശ ആശങ്കകൾ പങ്കിടുന്നു. ഏറ്റവും കൂടുതൽ വോട്ട് കിട്ടിയ സ്ഥലങ്ങൾ സർക്കാർ അവലോകനത്തിനായി ഉയർന്ന് വരുന്നു.',
      submitButton: 'ആശങ്ക സമർപ്പിക്കുക',
      disclaimerBanner:
        'എല്ലാ റിപ്പോർട്ടുകളും ഏകദേശവും ജില്ലാ തലത്തിൽ മാത്രമുള്ളതുമാണ്. ഔദ്യോഗിക ചാനലുകൾ വഴി ബന്ധപ്പെടുക.',
      officialChannels: 'ഔദ്യോഗിക ചാനലുകൾ',
      all: 'എല്ലാ റിപ്പോർട്ടുകളും',
      drugUse: 'ലഹരി ഉപയോഗം',
      drugDistribution: 'ലഹരി വിതരണം',
      other: 'മറ്റ് ആശങ്ക',
      sortTop: 'ഏറ്റവും കൂടുതൽ വോട്ട്',
      sortNew: 'പുതിയത്',
      votes: 'വോട്ടുകൾ',
      rank: 'റാങ്ക്',
      statusNew: 'പുതിയത്',
      statusReviewing: 'അവലോകനത്തിൽ',
      statusActioned: 'നടപടി സ്വീകരിച്ചു',
      categoryLabel: 'വിഭാഗം',
      pincodeLabel: 'പിൻകോഡ്',
      pincodePlaceholder: 'ഉദാ: 682020',
      mapsTo: 'ജില്ല',
      descriptionLabel: 'വിവരണം',
      descriptionPlaceholder: 'നിങ്ങൾ നിരീക്ഷിച്ചത് വിവരിക്കുക (ഏകദേശ പ്രദേശ മാത്രം, വ്യക്തിഗത വിവരങ്ങൾ ഇല്ല).',
      submit: 'ആശങ്ക സമർപ്പിക്കുക',
      submitSuccess: 'നിങ്ങളുടെ ആശങ്ക ബോർഡിൽ ചേർത്തു.',
      invalidPincode: 'ഒരു സാധുവായ 6 അക്ക കേരള പിൻകോഡ് നൽകുക (670000 മുതൽ 695999 വരെ).',
      approxLocationNote: 'ലൊക്കേഷൻ ഏകദേശവും ജില്ലാ തലത്തിൽ മാത്രവുമാണ്. തെരുവ് വിലാസങ്ങൾ സംഭരിക്കില്ല.',
      showing: 'കാണിക്കുന്നത്',
      reportsWord: 'റിപ്പോർട്ടുകൾ',
      noResults: 'നിങ്ങളുടെ ഫിൽറ്ററിന് അനുയോജ്യമായ റിപ്പോർട്ടുകൾ ഇല്ല.',
      demoNote: 'ഡെമോ മോഡ്: ഡേറ്റ ഈ ഉപകരണത്തിൽ മാത്രം ലോക്കൽ ആയി സൂക്ഷിക്കുന്നു.',
      mapView: 'മാപ്പ്',
      listView: 'പട്ടിക',
      viewDetails: 'വിശദാംശങ്ങൾ കാണുക',
    },
    map: {
      title: 'സുതാര്യതാ ഭൂപടം',
      subtitle: 'ഔദ്യോഗികമായി റിപ്പോർട്ട് ചെയ്ത ജില്ലാതല കണക്കുകൾ.',
      legendTitle: 'കേസുകളുടെ എണ്ണം',
      high: 'കൂടുതൽ',
      medium: 'ഇടത്തരം',
      low: 'കുറവ്',
      all: 'എല്ലാം',
      rankedTitle: 'രജിസ്റ്റർ ചെയ്ത കേസുകൾ പ്രകാരം ജില്ലകൾ',
      cases: 'കേസുകൾ',
      asOf: 'അവലംബ തീയതി',
      viewSource: 'ഔദ്യോഗിക ഉറവിടം കാണുക',
      transparency:
        'ഈ ഭൂപടത്തിൽ ഔദ്യോഗികമായി റിപ്പോർട്ട് ചെയ്ത ജില്ലാതല കണക്കുകൾ മാത്രമേ കാണിക്കുന്നുള്ളൂ. വ്യക്തികളെയോ കൃത്യമായ സ്ഥലങ്ങളെയോ ഇത് സൂചിപ്പിക്കുന്നില്ല.',
      stateTotals: 'സംസ്ഥാന വ്യാപകം ആകെ',
      arrests: 'അറസ്റ്റുകൾ',
      casesRegistered: 'കേസുകൾ',
      mdmaSeized: 'എംഡിഎംഎ പിടിച്ചെടുത്തു',
      cannabisSeized: 'കഞ്ചാവ് പിടിച്ചെടുത്തു',
      searchPlaceholder: 'ജില്ല തിരയുക...',
      selectHint: 'വിശദാംശങ്ങൾക്ക് ഭൂപടത്തിലോ പട്ടികയിലോ ഒരു ജില്ല തിരഞ്ഞെടുക്കുക.',
      noResults: 'നിങ്ങളുടെ തിരയലുമായി ജില്ലകളൊന്നും പൊരുത്തപ്പെടുന്നില്ല.',
      showing: 'കാണിക്കുന്നു',
      districtsWord: 'ജില്ലകൾ',
      lastUpdated: 'പുതുക്കിയത്',
      rankLabel: 'റാങ്ക്',
      arrestsMade: 'അറസ്റ്റുകൾ',
      shareOfCases: 'സംസ്ഥാന കേസുകളിലെ വിഹിതം',
      severityTitle: 'തീവ്രതാ വിതരണം',
    },
    report: {
      button: 'സുരക്ഷിതമായി അറിയിക്കുക',
      title: 'സുരക്ഷിതമായി അറിയിക്കുക',
      subtitle: 'ഔദ്യോഗിക കേരള പോലീസ് തൂഫാൻ ചാനലുകൾ വഴി വിവരം പങ്കിടുക.',
      call: 'വിളിക്കുക',
      whatsapp: 'വാട്സ്ആപ്പ്',
      line1: 'തൂഫാൻ ഹെൽപ്പ്‌ലൈൻ 1',
      line2: 'തൂഫാൻ ഹെൽപ്പ്‌ലൈൻ 2',
      whatsappLabel: 'തൂഫാൻ വാട്സ്ആപ്പ്',
      disclaimer:
        'ഈ ആപ്പ് ഒരു വിവരവും ശേഖരിക്കുകയോ സൂക്ഷിക്കുകയോ ചെയ്യുന്നില്ല. ഔദ്യോഗിക ചാനലുകളിലേക്ക് ബന്ധിപ്പിക്കുക മാത്രമേ ചെയ്യുന്നുള്ളൂ.',
    },
    news: {
      title: 'ഔദ്യോഗിക വാർത്തകൾ',
      subtitle: 'വാർത്തകളിൽ ഓപ്പറേഷൻ തൂഫാൻ, ഏറ്റവും പുതിയത് ആദ്യം.',
      readAtSource: 'ഉറവിടത്തിൽ വായിക്കുക',
      relevant: 'തൂഫാൻ',
      featured: 'ഫീച്ചർ',
      all: 'എല്ലാം',
      enforcement: 'നിയമനടപടി',
      policy: 'നയം',
      awareness: 'അവബോധം',
      explainer: 'വിശദീകരണം',
      searchPlaceholder: 'വാർത്തകൾ തിരയുക…',
      showing: 'കാണിക്കുന്നു',
      storiesWord: 'വാർത്തകൾ',
      noResults: 'തിരയലുമായി ഒരു വാർത്തയും പൊരുത്തപ്പെടുന്നില്ല.',
      sourcesTracked: 'ഉറവിടങ്ങൾ',
      reportsTracked: 'ലേഖനങ്ങൾ',
      lastUpdated: 'പുതുക്കിയത്',
    },
    learn: {
      title: 'പഠിക്കാം',
      subtitle: 'മയക്കുമരുന്ന്, അപകടങ്ങൾ, സഹായം ഇവയെക്കുറിച്ച് ആത്മാർഥവും ശാന്തവുമായ വിവരങ്ങൾ.',
      all: 'എല്ലാ വിഷയങ്ങൾ',
      substances: 'ഉപദ്രവ വസ്തുക്കൾ',
      'warning-signs': 'മുന്നറിയിപ്പ് ലക്ഷണങ്ങൾ',
      myths: 'മിഥ്യകൾ',
      'help-friend': 'സുഹൃത്തിനെ സഹായിക്കാം',
      'getting-help': 'സഹായം നേടുക',
      legal: 'നിയമം',
      searchPlaceholder: 'വിഷയങ്ങൾ തിരയുക...',
      showing: 'കാണിക്കുന്നു',
      topicsWord: 'വിഷയങ്ങൾ',
      noResults: 'തിരയലുമായി ഒരു വിഷയവും പൊരുത്തപ്പെടുന്നില്ല.',
      readMore: 'കൂടുതൽ വായിക്കുക',
      helpTitle: 'ഇപ്പോൾ സഹായം വേണോ?',
      helpText: 'ദിവസം 24 മണിക്കൂറും സൗജന്യ, രഹസ്യ പിന്തുണ ലഭ്യമാണ്.',
      callNow: 'വിളിക്കുക',
    },
    parents: {
      title: 'ലക്ഷണങ്ങൾ തിരിച്ചറിയുക',
      subtitle: 'ആശങ്കയുള്ള രക്ഷിതാക്കൾക്ക് ശാന്തവും പ്രായോഗികവുമായ മാർഗനിർദേശം.',
      talkToCopilot: 'ലേൺ ലൈബ്രറി കാണുക',
      'warning-signs': 'മുന്നറിയിപ്പ് ലക്ഷണങ്ങൾ',
      conversation: 'സംഭാഷണം ആരംഭിക്കൽ',
      'what-to-avoid': 'ഒഴിവാക്കേണ്ടത്',
      readMore: 'കൂടുതൽ വായിക്കുക',
      helpTitle: 'ആരെക്കുറിച്ചെങ്കിലും ആശങ്കയുണ്ടോ?',
      helpText: 'ദിവസം 24 മണിക്കൂറും സൗജന്യ, രഹസ്യ പിന്തുണ ലഭ്യമാണ്.',
      callNow: 'വിളിക്കുക',
      helplinesTitle: 'കേരള ഹെൽപ്‌ലൈനുകൾ',
      vimukthiLabel: 'വിമുക്തി ഡീ-അഡിക്ഷൻ (ടോൾ ഫ്രീ)',
      dishaLabel: 'ദിശ ആരോഗ്യ ഹെൽപ്‌ലൈൻ',
      toofanLabel: 'ഓപ്പറേഷൻ തൂഫാൻ ഹെൽപ്‌ലൈൻ',
      emergencyLabel: 'അടിയന്തര സേവനങ്ങൾ',
      learnCtaText:
        'ലേൺ ലൈബ്രറിയിൽ മുന്നറിയിപ്പ് ലക്ഷണങ്ങൾ, സംഭാഷണം ആരംഭിക്കൽ, കേരളത്തിൽ പ്രൊഫഷണൽ സഹായം ഇവ കണ്ടെത്തുന്നതിനുള്ള ശാന്തവും വസ്തുനിഷ്ഠവുമായ ഗൈഡുകൾ ഉണ്ട്.',
    },
  },
  hi: {
    appName: 'तूफ़ान कम्पैनियन',
    appTagline: 'ऑपरेशन तूफ़ान: द नार्को हंट',
    langName: 'हिन्दी',
    tabs: { overview: 'सारांश', map: 'मानचित्र', news: 'समाचार', learn: 'सीखें', parents: 'अभिभावक', community: 'समुदाय' },
    overview: {
      title: 'ऑपरेशन तूफ़ान',
      subtitle: 'लाइव कमांड व्यू। राज्यव्यापी संचयी, जिला-स्तरीय विवरण।',
      asOf: 'तारीख तक',
      viewSource: 'आधिकारिक स्रोत',
      reportButton: 'सुरक्षित रूप से रिपोर्ट करें',
      cases: 'दर्ज मामले',
      arrests: 'गिरफ्तारियां',
      districtsActive: 'उच्च / मध्यम जिले',
      mdmaSeized: 'MDMA जब्त',
      cannabisSeized: 'कैनाबिस जब्त',
      casesByDistrict: 'जिले के अनुसार मामले',
      viewFullMap: 'पूरा नक्शा देखें',
      momentumTitle: 'साप्ताहिक गति',
      illustrative: 'दृष्टांत प्रवृत्ति',
      seizuresTitle: 'जब्ती विवरण',
      beedis: 'कैनाबिस बीड़ी',
      pillarsTitle: 'ऑपरेशन के चार स्तंभ',
      latestCoverage: 'ताज़ा कवरेज',
      viewAllNews: 'सभी समाचार देखें',
      transparency:
        'सभी आंकड़े आधिकारिक रूप से रिपोर्ट किए गए जिला-स्तरीय डेटा हैं। सड़क-स्तरीय स्थान कभी नहीं दिखाए जाते। स्रोत: केरल कौमुदी, 10 जून 2026।',
    },
    community: {
      title: 'सामुदायिक बोर्ड',
      subtitle: 'नागरिक क्षेत्र-स्तरीय चिंताएं साझा करते हैं। सबसे ज्यादा वोट पाए स्थान सरकारी समीक्षा के लिए उभरते हैं।',
      submitButton: 'चिंता सबमिट करें',
      disclaimerBanner:
        'सभी रिपोर्ट अनुमानित और केवल जिला-स्तरीय हैं। कार्रवाई योग्य जानकारी के लिए आधिकारिक चैनलों से संपर्क करें।',
      officialChannels: 'आधिकारिक चैनल',
      all: 'सभी रिपोर्ट',
      drugUse: 'नशे का उपयोग',
      drugDistribution: 'नशे का वितरण',
      other: 'अन्य चिंता',
      sortTop: 'सर्वाधिक वोट',
      sortNew: 'नवीनतम',
      votes: 'वोट',
      rank: 'रैंक',
      statusNew: 'नई',
      statusReviewing: 'समीक्षा में',
      statusActioned: 'कार्रवाई हुई',
      categoryLabel: 'श्रेणी',
      pincodeLabel: 'पिनकोड',
      pincodePlaceholder: 'जैसे: 682020',
      mapsTo: 'जिला',
      descriptionLabel: 'विवरण',
      descriptionPlaceholder: 'आपने जो देखा उसका वर्णन करें (केवल क्षेत्र-स्तर, कोई व्यक्तिगत विवरण नहीं)।',
      submit: 'चिंता सबमिट करें',
      submitSuccess: 'आपकी चिंता बोर्ड में जोड़ दी गई है।',
      invalidPincode: 'एक वैध 6-अंकीय केरल पिनकोड दर्ज करें (670000 से 695999)।',
      approxLocationNote: 'स्थान अनुमानित और केवल जिला-स्तरीय है। कोई सड़क पता संग्रहीत या दिखाया नहीं जाता।',
      showing: 'दिखा रहे हैं',
      reportsWord: 'रिपोर्ट',
      noResults: 'आपके फ़िल्टर से कोई रिपोर्ट मेल नहीं खाती।',
      demoNote: 'डेमो मोड: डेटा केवल इस डिवाइस पर स्थानीय रूप से संग्रहीत है।',
      mapView: 'मानचित्र',
      listView: 'सूची',
      viewDetails: 'विवरण देखें',
    },
    map: {
      title: 'पारदर्शिता मानचित्र',
      subtitle: 'आधिकारिक रूप से रिपोर्ट किए गए ज़िला-स्तरीय आंकड़े।',
      legendTitle: 'मामलों की संख्या',
      high: 'अधिक',
      medium: 'मध्यम',
      low: 'कम',
      all: 'सभी',
      rankedTitle: 'दर्ज मामलों के अनुसार ज़िले',
      cases: 'मामले',
      asOf: 'जैसा कि',
      viewSource: 'आधिकारिक स्रोत देखें',
      transparency:
        'यह मानचित्र केवल आधिकारिक रूप से रिपोर्ट किए गए ज़िला-स्तरीय आंकड़े दिखाता है। यह कभी भी व्यक्तियों या सटीक स्थानों की पहचान नहीं करता।',
      stateTotals: 'राज्यभर संचयी',
      arrests: 'गिरफ्तारियाँ',
      casesRegistered: 'मामले',
      mdmaSeized: 'MDMA ज़ब्त',
      cannabisSeized: 'कैनबिस ज़ब्त',
      searchPlaceholder: 'ज़िला खोजें...',
      selectHint: 'विवरण के लिए मानचित्र या सूची में कोई ज़िला चुनें।',
      noResults: 'आपकी खोज से कोई ज़िला मेल नहीं खाता।',
      showing: 'दिखा रहे हैं',
      districtsWord: 'ज़िले',
      lastUpdated: 'अपडेट किया गया',
      rankLabel: 'रैंक',
      arrestsMade: 'गिरफ्तारियाँ',
      shareOfCases: 'राज्य के मामलों में हिस्सा',
      severityTitle: 'गंभीरता वितरण',
    },
    report: {
      button: 'सुरक्षित रूप से सूचित करें',
      title: 'सुरक्षित रूप से सूचित करें',
      subtitle: 'आधिकारिक केरल पुलिस तूफ़ान चैनलों के माध्यम से जानकारी साझा करें।',
      call: 'कॉल करें',
      whatsapp: 'व्हाट्सऐप',
      line1: 'तूफ़ान हेल्पलाइन 1',
      line2: 'तूफ़ान हेल्पलाइन 2',
      whatsappLabel: 'तूफ़ान व्हाट्सऐप',
      disclaimer:
        'यह ऐप कोई भी रिपोर्ट एकत्र या संग्रहीत नहीं करता। यह केवल आपको आधिकारिक चैनलों से जोड़ता है।',
    },
    news: {
      title: 'आधिकारिक कवरेज',
      subtitle: 'समाचारों में ऑपरेशन तूफ़ान, नवीनतम पहले।',
      readAtSource: 'स्रोत पर पढ़ें',
      relevant: 'तूफ़ान',
      featured: 'विशेष',
      all: 'सभी',
      enforcement: 'प्रवर्तन',
      policy: 'नीति',
      awareness: 'जागरूकता',
      explainer: 'व्याख्या',
      searchPlaceholder: 'खबरें खोजें…',
      showing: 'दिखा रहे हैं',
      storiesWord: 'खबरें',
      noResults: 'आपकी खोज से कोई खबर मेल नहीं खाती।',
      sourcesTracked: 'स्रोत',
      reportsTracked: 'रिपोर्ट',
      lastUpdated: 'अपडेट',
    },
    learn: {
      title: 'सीखें',
      subtitle: 'नशीले पदार्थ, जोखिम और सहायता के बारे में ईमानदारी से जानकारी।',
      all: 'सभी विषय',
      substances: 'पदार्थ',
      'warning-signs': 'चेतावनी के संकेत',
      myths: 'मिथक',
      'help-friend': 'मित्र की मदद',
      'getting-help': 'सहायता पाना',
      legal: 'कानूनी',
      searchPlaceholder: 'विषय खोजें...',
      showing: 'दिखा रहे हैं',
      topicsWord: 'विषय',
      noResults: 'आपकी खोज से कोई विषय मेल नहीं खाता।',
      readMore: 'और पढ़ें',
      helpTitle: 'अभी मदद चाहिए?',
      helpText: 'दिन के 24 घंटे मुफ्त, गोपनीय सहायता उपलब्ध है।',
      callNow: 'कॉल करें',
    },
    parents: {
      title: 'संकेतों को समझें',
      subtitle: 'चिंतित अभिभावकों के लिए शांत, व्यावहारिक मार्गदर्शन।',
      talkToCopilot: 'Learn लाइब्रेरी देखें',
      'warning-signs': 'चेतावनी के संकेत',
      conversation: 'बातचीत शुरू करना',
      'what-to-avoid': 'क्या न करें',
      readMore: 'और पढ़ें',
      helpTitle: 'किसी के बारे में चिंतित हैं?',
      helpText: 'दिन के 24 घंटे मुफ्त, गोपनीय सहायता उपलब्ध है।',
      callNow: 'कॉल करें',
      helplinesTitle: 'केरल हेल्पलाइन',
      vimukthiLabel: 'Vimukthi de-addiction (टोल-फ्री)',
      dishaLabel: 'DISHA स्वास्थ्य हेल्पलाइन',
      toofanLabel: 'ऑपरेशन Toofan हेल्पलाइन',
      emergencyLabel: 'आपातकालीन सेवाएं',
      learnCtaText:
        'Learn लाइब्रेरी में चेतावनी के संकेत, बातचीत शुरू करने और केरल में पेशेवर सहायता खोजने के लिए शांत, तथ्यात्मक गाइड हैं।',
    },
  },
};

export function useStrings(lang: Lang): Strings {
  return strings[lang];
}
