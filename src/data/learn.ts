import type { LearnTopic } from '../types';

/**
 * Education library content.
 * Tone: calm, factual, non-stigmatising, harm-reduction framing.
 * No em dashes. Trilingual: English / Malayalam / Hindi.
 * Help resources cited: Vimukthi 14405, DISHA 1056, Toofan helpline.
 */
export const learnTopics: LearnTopic[] = [
  // ── SUBSTANCES ────────────────────────────────────────────────────────────
  {
    id: 'what-is-mdma',
    category: 'substances',
    icon: '💊',
    title: {
      en: 'What is MDMA?',
      ml: 'എംഡിഎംഎ എന്താണ്?',
      hi: 'MDMA क्या है?',
    },
    summary: {
      en: 'A synthetic stimulant found in tablets and powder. Street versions are often mixed with unknown substances.',
      ml: 'ഗുളികകളിലും പൊടിയിലും കാണുന്ന ഒരു കൃത്രിമ ഉത്തേജകം. തെരുവ് പതിപ്പുകള്‍ പലപ്പോഴും അജ്ഞാത വസ്തുക്കളുമായി ചേര്‍ന്നിരിക്കും.',
      hi: 'गोलियों और पाउडर में पाया जाने वाला एक सिंथेटिक उत्तेजक। बाजार के संस्करण अक्सर अज्ञात पदार्थों के साथ मिले होते हैं।',
    },
    body: {
      en: 'MDMA (also called ecstasy or molly) speeds up the brain and body, raising heart rate, blood pressure, and body temperature. At high doses it can cause overheating, organ failure, or death. The effects wear off in 3 to 6 hours, but low mood and fatigue can last for days after. Street pills sold as MDMA are almost never pure. Tests in Kerala have found fentanyl, methamphetamine, and rat poison in tablets sold as ecstasy. There is no safe dose.',
      ml: 'എംഡിഎംഎ (എക്‌സ്റ്റസി അല്ലെങ്കില്‍ മോളി എന്നും അറിയപ്പെടുന്നു) മസ്തിഷ്‌കത്തേയും ശരീരത്തേയും വേഗതയേറ്റുന്നു, ഹൃദയമിടിപ്പ്, രക്തസമ്മര്‍ദ്ദം, ശരീര താപനില എന്നിവ ഉയര്‍ത്തുന്നു. ഉയര്‍ന്ന ഡോസില്‍ ഇത് അമിത ചൂട്, അവയവ തകരാര്‍ അല്ലെങ്കില്‍ മരണം ഉണ്ടാക്കാം. ഫലങ്ങള്‍ 3 മുതല്‍ 6 മണിക്കൂര്‍ വരെ നീണ്ടു നില്‍ക്കും, പക്ഷേ മോശം മനോഭാവവും ക്ഷീണവും ദിവസങ്ങളോളം തുടരാം. കേരളത്തിലെ ഗുളികകളില്‍ ഫെന്‍റ്റനൈല്‍, മെത്ത്, എലി വിഷം ഉള്‍പ്പടെ കണ്ടെത്തിയിട്ടുണ്ട്. സുരക്ഷിതമായ ഒരു ഡോസുമില്ല.',
      hi: 'MDMA (एक्स्टसी या मॉली भी कहलाती है) दिमाग और शरीर को तेज करती है, दिल की धड़कन, रक्तचाप और शरीर का तापमान बढ़ाती है। अधिक मात्रा में यह ओवरहीटिंग, अंग विफलता या मौत का कारण बन सकती है। प्रभाव 3 से 6 घंटे तक रहते हैं, लेकिन खराब मूड और थकान कई दिनों तक रह सकती है। केरल में एक्स्टसी के रूप में बेची जाने वाली गोलियों में फेंटानाइल, मेथ और चूहे का जहर पाया गया है। कोई सुरक्षित खुराक नहीं है।',
    },
  },
  {
    id: 'cannabis',
    category: 'substances',
    icon: '🌿',
    title: {
      en: 'Cannabis (Ganja)',
      ml: 'കഞ്ചാവ്',
      hi: 'गांजा (Cannabis)',
    },
    summary: {
      en: 'The most seized drug in Kerala. Regular use, especially as a teenager, increases the risk of anxiety and psychosis.',
      ml: 'കേരളത്തില്‍ ഏറ്റവും കൂടുതല്‍ പിടിച്ചെടുക്കുന്ന മയക്കുമരുന്ന്. കൗമാരക്കാര്‍ക്ക് പതിവ് ഉപയോഗം ഉത്കണ്ഠ, മനോ-ഭ്രംശം ഇവ വര്‍ദ്ധിപ്പിക്കുന്നു.',
      hi: 'केरल में सबसे ज्यादा जब्त की जाने वाली दवा। किशोरावस्था में नियमित उपयोग से चिंता और मनोविकृति का खतरा बढ़ता है।',
    },
    body: {
      en: 'Cannabis affects memory, concentration, and mood. The stronger strains now available in India are very different from what existed a decade ago. For teenagers whose brains are still developing, regular use is linked to lasting memory problems, lower motivation, and a higher risk of psychosis. Mixing cannabis with tobacco adds nicotine dependence on top. Being in possession of cannabis is an offence under the NDPS Act, with penalties that can include prison time.',
      ml: 'കഞ്ചാവ് ഓര്‍മ്മ, ശ്രദ്ധ, മനോഭാവം ഇവ ബാധിക്കുന്നു. ഇന്ത്യയില്‍ ഇപ്പോള്‍ ലഭ്യമായ ശക്തിയേറിയ ഇനങ്ങള്‍ ഒരു ദശകം മുമ്പ് ഉണ്ടായിരുന്നതില്‍ നിന്ന് വളരെ വ്യത്യസ്തമാണ്. തലച്ചോര്‍ ഇനിയും വളരുന്ന കൗമാരക്കാര്‍ക്ക്, പതിവ് ഉപയോഗം ദീര്‍ഘകാല ഓര്‍മ്മ പ്രശ്‌നങ്ങള്‍, കുറഞ്ഞ പ്രചോദനം, മനോ-ഭ്രംശ സാധ്യത ഇവ വര്‍ദ്ധിപ്പിക്കും. NDPS ആക്ട് പ്രകാരം കഞ്ചാവ് കൈവശം വയ്ക്കുന്നത് കുറ്റകരമാണ്.',
      hi: 'गांजा याददाश्त, एकाग्रता और मूड को प्रभावित करता है। भारत में अब उपलब्ध मजबूत किस्में एक दशक पहले की तुलना में बहुत अलग हैं। किशोरों के लिए, जिनका दिमाग अभी विकसित हो रहा है, नियमित उपयोग स्थायी याददाश्त की समस्याओं, कम प्रेरणा और मनोविकृति के बढ़े जोखिम से जुड़ा है। NDPS अधिनियम के तहत गांजा रखना एक अपराध है।',
    },
  },
  {
    id: 'new-synthetic-drugs',
    category: 'substances',
    icon: '⚗️',
    title: {
      en: 'New synthetic drugs',
      ml: 'പുതിയ കൃത്രിമ മരുന്നുകള്‍',
      hi: 'नई सिंथेटिक दवाएं',
    },
    summary: {
      en: 'Chemical compounds designed to mimic controlled drugs. They change faster than the law and are often far more dangerous.',
      ml: 'നിയന്ത്രിത മരുന്നുകളെ അനുകരിക്കാന്‍ രൂപകല്‍പ്പന ചെയ്ത രാസ സംയുക്തങ്ങള്‍. ഇവ നിയമത്തെക്കാള്‍ വേഗത്തില്‍ മാറുകയും പലപ്പോഴും വളരെ അപകടകരവുമാണ്.',
      hi: 'नियंत्रित दवाओं की नकल के लिए बनाए गए रासायनिक यौगिक। ये कानून से तेज बदलते हैं और अक्सर कहीं अधिक खतरनाक होते हैं।',
    },
    body: {
      en: 'Synthetic cannabinoids ("K2", "spice"), synthetic opioids like fentanyl, and designer stimulants are made in labs to mimic the effect of banned drugs while staying technically legal for a short window. Because the chemistry changes constantly, users have no idea what they are taking or how strong it is. Overdose can happen with tiny amounts. Fentanyl is now found mixed into many drugs sold in Kerala, including tablets sold as MDMA or painkillers. There is no way to know by looking or tasting.',
      ml: 'സിന്‍തറ്റിക് കഞ്ചാവ് ("K2", "spice"), ഫെന്‍റ്റനൈല്‍ പോലുള്ള സിന്‍തറ്റിക് ഒപ്പിയോയിഡുകള്‍, ഡിസൈനര്‍ ഉത്തേജകങ്ങള്‍ ഇവ നിരോധിത മരുന്നുകളുടെ ഫലം അനുകരിക്കാന്‍ ലാബില്‍ നിര്‍മ്മിക്കുന്നതാണ്. രസതന്ത്രം നിരന്തരം മാറുന്നതിനാല്‍ ഉപഭോക്താക്കള്‍ക്ക് അവര്‍ എടുക്കുന്നത് എന്താണെന്നോ ശക്തി എത്രയാണെന്നോ അറിയില്ല. ഫെന്‍റ്റനൈല്‍ ഇപ്പോള്‍ കേരളത്തില്‍ MDMA ആയോ വേദനസംഹാരികളായോ വിറ്റഴിക്കുന്ന ഗുളികകളില്‍ കലര്‍ന്ന് കണ്ടെത്തിയിട്ടുണ്ട്.',
      hi: 'सिंथेटिक कैनबिनोइड्स, फेंटानाइल जैसे सिंथेटिक ओपिओइड और डिजाइनर उत्तेजक प्रतिबंधित दवाओं के प्रभाव की नकल के लिए बनाए जाते हैं। रसायन विज्ञान लगातार बदलता है, इसलिए उपयोगकर्ताओं को नहीं पता कि वे क्या ले रहे हैं। केरल में MDMA या दर्दनाशक के रूप में बेची जाने वाली गोलियों में फेंटानाइल पाया गया है। देखकर या चखकर पहचानने का कोई तरीका नहीं है।',
    },
  },

  // ── WARNING SIGNS ─────────────────────────────────────────────────────────
  {
    id: 'signs-of-struggle',
    category: 'warning-signs',
    icon: '👁️',
    title: {
      en: 'Signs someone may be struggling',
      ml: 'ആരോ ബുദ്ധിമുട്ടുന്നതിന്‍റെ ലക്ഷണങ്ങള്‍',
      hi: 'किसी के संघर्ष के संकेत',
    },
    summary: {
      en: 'Changes in sleep, mood, appetite, friendships, or school are worth noticing. One sign alone rarely means anything.',
      ml: 'ഉറക്കം, മനോഭാവം, ഭക്ഷണം, സൗഹൃദം, പഠനം ഇവയിലുള്ള മാറ്റങ്ങള്‍ ശ്രദ്ധിക്കേണ്ടതാണ്. ഒരു ലക്ഷണം മാത്രം പ്രശ്‌നത്തിന്‍റെ തെളിവല്ല.',
      hi: 'नींद, मूड, भूख, दोस्ती या पढ़ाई में बदलाव ध्यान देने योग्य हैं। अकेला एक संकेत शायद ही कभी कुछ मतलब रखता है।',
    },
    body: {
      en: 'No single sign confirms drug use. But a cluster of the following, especially if they appeared suddenly, is worth a calm conversation. Watch for: extreme tiredness or sleeplessness; loss of interest in things they once loved; mood swings that seem out of proportion; new secretive friendships; frequently asking for or taking money; bloodshot eyes, unusual smell, or slurred speech; and missing school or work without explanation. The most useful thing you can do is stay close without interrogating. Asking "how are you doing lately?" is a better starting point than an accusation.',
      ml: 'ഒറ്റ ലക്ഷണം കൊണ്ട് ഒന്നും ഉറപ്പിക്കാനാകില്ല. പക്ഷേ പ്രത്യേകിച്ച് പെട്ടെന്ന് കണ്ടുതുടങ്ങിയ ലക്ഷണങ്ങളുടെ ഒരു കൂട്ടം ശ്രദ്ധിക്കേണ്ടതാണ്: അമിത ക്ഷീണം അല്ലെങ്കില്‍ ഉറക്കക്കുറവ്; ഇഷ്ടകാര്യങ്ങളോടുള്ള താല്‍പ്പര്യക്കുറവ്; കൂടുതലായ മൂഡ് ഏറ്റക്കുറച്ചില്‍; രഹസ്യ സൗഹൃദങ്ങള്‍; ആവര്‍ത്തിച്ചുള്ള പണ ആവശ്യം; ചുവന്ന കണ്ണ്, അസാധാരണ ഗന്ധം; അറിയിക്കാതെ ക്ലാസ് മുടക്കല്‍. ചോദ്യം ചെയ്യാതെ അടുത്തിരിക്കുക. "അടുത്തിടെ എങ്ങനെ ഉണ്ട്?" എന്ന് ചോദിക്കുന്നത് കുറ്റ ആരോപണത്തെക്കാള്‍ ഫലപ്രദം.',
      hi: 'अकेला कोई संकेत कुछ भी सिद्ध नहीं करता। लेकिन निम्नलिखित संकेतों का एक समूह, खासकर अगर वे अचानक आए, शांत बातचीत के योग्य है: अत्यधिक थकान या नींद न आना; पसंदीदा चीजों में रुचि खोना; अनुपातहीन मूड स्विंग; नए गुप्त दोस्त; बार-बार पैसे मांगना; लाल आंखें, असामान्य गंध; बिना बताए स्कूल या काम छोड़ना। पूछताछ के बिना करीब रहें। "हाल में कैसे हो?" पूछना आरोप लगाने से बेहतर शुरुआत है।',
    },
  },

  // ── MYTHS ─────────────────────────────────────────────────────────────────
  {
    id: 'myth-herbal-safe',
    category: 'myths',
    icon: '🚫',
    title: {
      en: 'Myth: "Herbal or natural means safe"',
      ml: 'മിഥ്യ: "ഹെര്‍ബല്‍ അല്ലെങ്കില്‍ പ്രകൃതിദത്ത ആണ് അതിനാല്‍ സുരക്ഷിതം"',
      hi: 'मिथक: "हर्बल या प्राकृतिक मतलब सुरक्षित"',
    },
    summary: {
      en: 'Cannabis is a plant. Opium is a plant. Arsenic is natural. Being natural says nothing about safety.',
      ml: 'കഞ്ചാവ് ഒരു സസ്യം. അഫിം ഒരു സസ്യം. ആഴ്‌സെനിക് പ്രകൃതിദത്തം. "പ്രകൃതിദത്തം" എന്നത് സുരക്ഷയെ കുറിച്ച് ഒന്നും പറയുന്നില്ല.',
      hi: 'गांजा एक पौधा है। अफीम एक पौधा है। आर्सेनिक प्राकृतिक है। प्राकृतिक होना सुरक्षा के बारे में कुछ नहीं कहता।',
    },
    body: {
      en: 'The word "herbal" is used in marketing to make a substance sound harmless. Many of the most dangerous drugs come from plants, and many products sold as "herbal highs" are actually synthetic chemicals sprayed onto plant matter. What matters is the effect on your brain and body, not where the ingredient started. If someone is selling something as "natural" or "herbal" and promising it will get you high, that is a sales pitch, not a safety guarantee.',
      ml: '"ഹെര്‍ബല്‍" എന്ന വാക്ക് ഒരു വസ്തുവിനെ നിരുപദ്രവകരമെന്ന് തോന്നിപ്പിക്കാന്‍ ഉപയോഗിക്കുന്ന ഒരു വിപണന തന്ത്രം. ഏറ്റവും അപകടകരമായ പല മരുന്നുകളും സസ്യങ്ങളില്‍ നിന്ന് ഉത്ഭവിക്കുന്നു. "ഹെര്‍ബല്‍ ഹൈ" ആയി വിറ്റഴിക്കപ്പെടുന്ന ഉല്‍പ്പന്നങ്ങള്‍ യഥാര്‍ത്ഥത്തില്‍ സസ്യ ദ്രവ്യങ്ങളില്‍ തളിക്കപ്പെട്ട കൃത്രിമ രാസ വസ്തുക്കളാണ്. പ്രധാനപ്പെട്ടത് ഘടകം എവിടെ നിന്ന് ഉത്ഭവിച്ചു എന്നല്ല, നിങ്ങളുടെ തലച്ചോറിലും ശരീരത്തിലും ഉള്ള ഫലം.',
      hi: '"हर्बल" शब्द किसी पदार्थ को हानिरहित दिखाने के लिए विपणन में इस्तेमाल किया जाता है। कई सबसे खतरनाक दवाएं पौधों से आती हैं। "हर्बल हाई" के रूप में बेचे जाने वाले उत्पाद वास्तव में पौधे के पदार्थ पर छिड़के गए सिंथेटिक रसायन हो सकते हैं। मायने यह नहीं रखता कि सामग्री कहाँ से आई, बल्कि यह कि यह आपके दिमाग और शरीर पर क्या करती है।',
    },
  },
  {
    id: 'myth-stop-anytime',
    category: 'myths',
    icon: '🚫',
    title: {
      en: 'Myth: "I can stop whenever I want"',
      ml: 'മിഥ്യ: "എനിക്ക് തോന്നുമ്പോള്‍ നിര്‍ത്താം"',
      hi: 'मिथक: "जब चाहूं रुक सकता हूं"',
    },
    summary: {
      en: 'Dependence does not feel like dependence until you try to stop. The brain adapts faster than most people expect.',
      ml: 'ആശ്രിതത്വം നിര്‍ത്താന്‍ ശ്രമിക്കുന്നത് വരെ ആശ്രിതത്വം പോലെ തോന്നില്ല. മിക്കവരും പ്രതീക്ഷിക്കുന്നതിലും വേഗം തലച്ചോര്‍ പൊരുത്തപ്പെടുന്നു.',
      hi: 'निर्भरता तब तक निर्भरता जैसी नहीं लगती जब तक आप रुकने की कोशिश नहीं करते। दिमाग अधिकांश लोगों की अपेक्षा से तेज अनुकूलित होता है।',
    },
    body: {
      en: 'Every drug that produces a high does so by changing brain chemistry. Over time the brain adjusts, and you need more of the substance to feel normal, not just high. That process is dependence. The feeling of "I could stop if I really wanted to" is a normal thought that comes with early use, but it is not an accurate prediction of what will happen later. Seeking help early, before use becomes dependence, is much easier than treating dependence after it forms. Reaching out to a counsellor does not mean you are an addict. It means you are being thoughtful.',
      ml: 'ഉയര്‍ന്ന അവസ്ഥ ഉണ്ടാക്കുന്ന ഓരോ മരുന്നും തലച്ചോറിന്‍റെ രസതന്ത്രം മാറ്റി ഉണ്ടാക്കുന്നു. കാലക്രമേണ തലച്ചോര്‍ ക്രമീകരിക്കപ്പെടുന്നു, ഉയര്‍ന്ന ഒരവസ്ഥ മാത്രമല്ല, സ്വാഭാവികം തോന്നാന്‍ കൂടുതല്‍ ആവശ്യമാകും. "ഞാന്‍ ശരിക്കും ആഗ്രഹിച്ചാല്‍ നിര്‍ത്താം" എന്ന ആശയം ആദ്യ ഉപയോഗത്തോടൊപ്പം വരുന്ന ഒരു സ്വാഭാവിക ചിന്ത. ആശ്രിതത്വം ഉണ്ടാകുന്നതിന് മുമ്പ് ഒരു കൗണ്‍സിലറെ സമീപിക്കുന്നത് ചികിത്സിക്കുന്നതിനേക്കാള്‍ എളുപ്പം. കൗണ്‍സിലറെ ബന്ധപ്പെടുന്നത് നിങ്ങള്‍ "അഡിക്ടഡ്" ആണ് എന്ന് അര്‍ത്ഥമല്ല.',
      hi: 'हर वह दवा जो नशा देती है, मस्तिष्क रसायन विज्ञान बदलकर करती है। समय के साथ मस्तिष्क अनुकूलित होता है और सामान्य महसूस करने के लिए भी अधिक पदार्थ की जरूरत पड़ती है। "जब चाहूं रुक सकता हूं" यह विचार सामान्य है लेकिन सटीक भविष्यवाणी नहीं। निर्भरता बनने से पहले मदद मांगना बाद में उपचार से बहुत आसान है। काउंसलर से मिलने का मतलब नहीं कि आप एडिक्ट हैं।',
    },
  },
  {
    id: 'myth-everyone-does-it',
    category: 'myths',
    icon: '🚫',
    title: {
      en: 'Myth: "Everyone my age is doing it"',
      ml: 'മിഥ്യ: "എന്‍റെ പ്രായത്തിലുള്ള എല്ലാവരും ഇത് ചെയ്യുന്നുണ്ട്"',
      hi: 'मिथक: "मेरी उम्र के सब यही करते हैं"',
    },
    summary: {
      en: 'Surveys consistently show most young people do not use drugs. The idea that "everyone" uses is a social pressure tactic.',
      ml: 'സര്‍വേകള്‍ നിരന്തരം കാണിക്കുന്നത് ഭൂരിഭാഗം യുവജനങ്ങളും മയക്കുമരുന്ന് ഉപയോഗിക്കുന്നില്ല എന്നാണ്. "എല്ലാവരും" ഉപയോഗിക്കുന്നു എന്ന ആശയം സാമൂഹ്യ സമ്മര്‍ദ്ദ തന്ത്രം.',
      hi: 'सर्वेक्षण लगातार दिखाते हैं कि अधिकांश युवा लोग नशीली दवाएं नहीं लेते। "सभी करते हैं" का विचार एक सामाजिक दबाव की चाल है।',
    },
    body: {
      en: 'Most young people in Kerala do not use drugs. The impression that "everyone is doing it" often comes from the loudest voices in a group, social media posts showing a curated version of life, or someone who wants company for something they are doing. Data from school and college surveys in Kerala show that the majority of students have never tried illegal drugs. You are not unusual for not using. You are the norm. It is fine to simply say "not for me" and leave it there.',
      ml: 'കേരളത്തിലെ ഭൂരിഭാഗം യുവജനങ്ങളും മയക്കുമരുന്ന് ഉപയോഗിക്കുന്നില്ല. "എല്ലാവരും ചെയ്യുന്നു" എന്ന ധാരണ ഒരു ഗ്രൂപ്പിലെ ഉച്ചത്തിലുള്ള ശബ്ദങ്ങളില്‍ നിന്നോ സോഷ്യല്‍ മീഡിയയില്‍ നിന്നോ ഉദ്ഭവിക്കുന്നു. ഉപയോഗിക്കാത്തത് കൊണ്ട് നിങ്ങള്‍ അസ്ഥാനത്തല്ല. "ഇത് എനിക്ക് ഇഷ്ടമില്ല" എന്ന് പറഞ്ഞ് മാറുന്നത് ശരി.',
      hi: 'केरल में अधिकांश युवा लोग नशीली दवाएं नहीं लेते। "सभी करते हैं" की धारणा अक्सर समूह में सबसे ऊंची आवाजों या सोशल मीडिया से आती है। केरल के स्कूल और कॉलेज सर्वेक्षणों के डेटा दिखाते हैं कि अधिकांश छात्रों ने कभी अवैध दवाएं नहीं आजमाई हैं। "यह मेरे लिए नहीं है" कहना और आगे बढ़ना बिल्कुल सही है।',
    },
  },

  // ── HELP A FRIEND ─────────────────────────────────────────────────────────
  {
    id: 'talk-to-friend',
    category: 'help-friend',
    icon: '🤝',
    title: {
      en: 'How to talk to a friend who may be using',
      ml: 'ഉപയോഗിക്കുന്നു എന്ന് സംശയിക്കുന്ന ഒരു സുഹൃത്തിനോട് എങ്ങനെ സംസാരിക്കാം',
      hi: 'किसी मित्र से कैसे बात करें जो शायद नशा कर रहा हो',
    },
    summary: {
      en: 'Leading with care, not accusation, is what actually opens the door to a real conversation.',
      ml: 'ആരോപണം കൂടാതെ പരിചരണം മുന്‍നിര്‍ത്തുക, ഇതാണ് യഥാര്‍ത്ഥ സംഭാഷണത്തിലേക്കുള്ള വാതില്‍ തുറക്കുന്നത്.',
      hi: 'आरोप के बिना देखभाल के साथ शुरू करना ही असल बातचीत का दरवाजा खोलता है।',
    },
    body: {
      en: 'Choose a quiet moment when neither of you is rushed or upset. Start with what you have noticed, not what you think it means. "I have noticed you seem really tired lately and I have been worried about you" is very different from "I think you are using drugs." Listen more than you talk. You do not need to have answers. Let them know you care and that you are not going to judge them. If they ask for help or information, point them toward real resources like Vimukthi (toll-free 14405) or DISHA (1056). You cannot force someone to get help. But being a consistent, non-judgmental presence is the most powerful thing you can do.',
      ml: 'ഒരു ശാന്തമായ നിമിഷം തിരഞ്ഞെടുക്കുക. നിങ്ങള്‍ ശ്രദ്ധിച്ചത് ഉപയോഗിക്കൂ, അത് എന്ത് അര്‍ത്ഥമാക്കുന്നു എന്ന് അല്ല. "അടുത്തിടെ നിനക്ക് ക്ഷീണം ഉള്ളതുപോലെ കാണുന്നു, ഞാന്‍ ആശങ്കപ്പെടുന്നു" എന്നത് "നീ ഡ്രഗ് ഉപയോഗിക്കുന്നതായി ഞാന്‍ കരുതുന്നു" എന്നതില്‍ നിന്ന് വളരെ വ്യത്യസ്തം. സംസാരിക്കുന്നതിനേക്കാള്‍ കൂടുതല്‍ ശ്രദ്ധിക്കൂ. ഉത്തരങ്ങള്‍ ആവശ്യമില്ല. വിമുക്തി (14405) അല്ലെങ്കില്‍ ദിശ (1056) ഇവ ചൂണ്ടിക്കാണിക്കുക. ആര്‍ക്കും സഹായം ഒരുക്കാന്‍ നിര്‍ബ്ബന്ധിക്കാനാകില്ല, പക്ഷേ നിരന്തരം ഒപ്പം ഉണ്ടാകുന്നതാണ് ഏറ്റവും ശക്തമായ കാര്യം.',
      hi: 'एक शांत पल चुनें। आपने जो देखा है उससे शुरू करें, उसका अर्थ क्या है उससे नहीं। "मैंने देखा है कि हाल ही में तुम काफी थके हुए लग रहे हो और मैं चिंतित हूं" बहुत अलग है "मुझे लगता है तुम ड्रग्स ले रहे हो" से। सुनें ज्यादा, बोलें कम। Vimukthi (14405) या DISHA (1056) की ओर इशारा करें। किसी को मदद लेने के लिए मजबूर नहीं किया जा सकता, लेकिन निरंतर, गैर-न्यायिक उपस्थिति सबसे शक्तिशाली काम है।',
    },
  },
  {
    id: 'overdose-emergency',
    category: 'help-friend',
    icon: '🚨',
    title: {
      en: 'What to do in an emergency',
      ml: 'അടിയന്തരഘട്ടത്തില്‍ എന്ത് ചെയ്യണം',
      hi: 'आपातकाल में क्या करें',
    },
    summary: {
      en: 'If someone is unresponsive, breathing very slowly, or turning blue: call 112 immediately. Stay with them.',
      ml: 'ആരെങ്കിലും ബോധക്ഷയം, വളരെ മന്ദഗതിയിലുള്ള ശ്വാസോച്ഛ്വാസം, അല്ലെങ്കില്‍ നീലയായി: ഉടന്‍ 112 വിളിക്കൂ. ഒപ്പം ഉണ്ടായിരിക്കൂ.',
      hi: 'अगर कोई बेहोश है, बहुत धीरे सांस ले रहा है, या नीला पड़ रहा है: तुरंत 112 पर कॉल करें। उनके साथ रहें।',
    },
    body: {
      en: 'Overdose signs: unresponsive or difficult to wake; very slow, shallow, or stopped breathing; lips or fingertips turning blue; choking or gurgling sounds; seizure. What to do: call 112 immediately. Do not leave the person alone. If they are unconscious but breathing, turn them onto their side (recovery position) to prevent choking. Do not give water or food. Do not try to make them vomit. Tell the emergency responders everything you know, including what substances may have been taken. Good Samaritan protection: in most cases, calling for medical help during a drug emergency will not result in a criminal case against you. Saving a life comes first.',
      ml: 'ഓവര്‍ഡോസ് ലക്ഷണങ്ങള്‍: ഉണര്‍ത്താന്‍ ബുദ്ധിമുട്ടുള്ള; വളരെ മന്ദഗതിയിലോ നില്‍ക്കുന്നതോ ആയ ശ്വാസോച്ഛ്വാസം; ചുണ്ടുകള്‍ അല്ലെങ്കില്‍ വിരല്‍ത്തുമ്പ് നീലയാകുന്നു; ഗുരുഗ്‌ഗ് ശബ്ദം; അപസ്മാരം. ചെയ്യേണ്ടത്: ഉടന്‍ 112 വിളിക്കൂ. ഒറ്റ്ടേ ഉപേക്ഷിക്കരുത്. ബോധക്ഷയം ഉണ്ടെങ്കില്‍ ശ്വാസം ഉണ്ടെങ്കില്‍ ഒരു ഭാഗത്തേക്ക് ചരിക്കൂ. ഛര്‍ദ്ദി ഉണ്ടാക്കാന്‍ ശ്രമിക്കരുത്. എന്ത് വസ്തുക്കള്‍ ഉള്‍പ്പെട്ടിരിക്കാം എന്ന് അടിയന്തിര ഉദ്യോഗസ്ഥരോട് പറയൂ.',
      hi: 'ओवरडोज के संकेत: जागना मुश्किल; बहुत धीमी, उथली या रुकी हुई सांस; होंठ या उंगलियां नीली पड़ना; घुटन की आवाज; दौरा। क्या करें: तुरंत 112 पर कॉल करें। अकेला न छोड़ें। बेहोश लेकिन सांस ले रहे हो तो करवट दिलाएं। उल्टी कराने की कोशिश न करें। आपातकालीन कर्मियों को बताएं कि क्या लिया गया हो सकता है।',
    },
    helplines: [
      {
        label: { en: 'Emergency services', ml: 'അടിയന്തര സേവനങ്ങള്‍', hi: 'आपातकालीन सेवाएं' },
        number: '112',
      },
    ],
  },

  // ── GETTING HELP ──────────────────────────────────────────────────────────
  {
    id: 'free-help-kerala',
    category: 'getting-help',
    icon: '📞',
    title: {
      en: 'Free help available in Kerala',
      ml: 'കേരളത്തില്‍ ലഭ്യമായ സൗജന്യ സഹായം',
      hi: 'केरल में उपलब्ध मुफ्त सहायता',
    },
    summary: {
      en: 'Three free, official channels: Vimukthi de-addiction (14405), DISHA health helpline (1056), and the Toofan helpline. All are confidential.',
      ml: 'മൂന്ന് സൗജന്യ, ഔദ്യോഗിക ചാനലുകള്‍: വിമുക്തി (14405), ദിശ (1056), തൂഫാന്‍ ഹെല്‍പ്‌ലൈന്‍. എല്ലാം രഹസ്യാത്മകം.',
      hi: 'तीन मुफ्त, आधिकारिक चैनल: Vimukthi (14405), DISHA (1056), और Toofan हेल्पलाइन। सभी गोपनीय हैं।',
    },
    body: {
      en: 'Vimukthi is the Kerala Excise Department de-addiction mission. It provides free counselling and treatment, with centres in Thiruvananthapuram, Ernakulam, and Kozhikode. Call toll-free 14405 or WhatsApp 9061178000. You can call for yourself or on behalf of someone you are worried about. DISHA (1056) is the Kerala Health Department 24-hour helpline. It covers physical health, mental health, and de-addiction counselling. Operation Toofan helplines (9497979794 and 9497927797, WhatsApp 9995966666) connect you to the official police campaign. All three are free and you do not need to give your name. Asking for help is the most courageous thing you can do.',
      ml: 'വിമുക്തി കേരള എക്‌സൈസ് ഡിപ്പാര്‍ട്ട്‌മെന്‍റ്റിന്‍റെ ഡീ-അഡിക്ഷന്‍ മിഷന്‍. തിരുവനന്തപുരം, എറണാകുളം, കോഴിക്കോട് ഇവിടങ്ങളിലെ കേന്ദ്രങ്ങളില്‍ സൗജന്യ കൗണ്‍സിലിംഗ്. ടോള്‍ ഫ്രീ 14405 അല്ലെങ്കില്‍ WhatsApp 9061178000. ദിശ (1056) 24 മണിക്കൂര്‍ ആരോഗ്യ ഹെല്‍പ്‌ലൈന്‍. തൂഫാന്‍ ഹെല്‍പ്‌ലൈന്‍ 9497979794, 9497927797. മൂന്നും സൗജന്യവും പേര് ആവശ്യമില്ലാത്തതും. സഹായം ചോദിക്കുന്നത് ഏറ്റവും ധൈര്യശാലിത്വം.',
      hi: 'Vimukthi केरल उत्पाद शुल्क विभाग का de-addiction मिशन है। तिरुवनंतपुरम, एर्णाकुलम और कोझिकोड में केंद्र हैं। टोल-फ्री 14405 या WhatsApp 9061178000। DISHA (1056) 24 घंटे का स्वास्थ्य हेल्पलाइन है। Toofan हेल्पलाइन 9497979794 और 9497927797। तीनों मुफ्त हैं और नाम देना जरूरी नहीं। मदद मांगना सबसे साहसी काम है।',
    },
    helplines: [
      {
        label: { en: 'Vimukthi de-addiction (toll-free)', ml: 'വിമുക്തി ഡീ-അഡിക്ഷന്‍ (ടോള്‍ ഫ്രീ)', hi: 'Vimukthi de-addiction (टोल-फ्री)' },
        number: '14405',
      },
      {
        label: { en: 'DISHA health helpline', ml: 'ദിശ ആരോഗ്യ ഹെല്‍പ്‌ലൈന്‍', hi: 'DISHA स्वास्थ्य हेल्पलाइन' },
        number: '1056',
      },
      {
        label: { en: 'Toofan helpline 1', ml: 'തൂഫാന്‍ ഹെല്‍പ്‌ലൈന്‍ 1', hi: 'Toofan हेल्पलाइन 1' },
        number: '9497979794',
      },
    ],
  },
  {
    id: 'what-is-counselling',
    category: 'getting-help',
    icon: '💬',
    title: {
      en: 'What does counselling actually look like?',
      ml: 'കൗണ്‍സിലിംഗ് എന്താണ് യഥാര്‍ത്ഥത്തില്‍?',
      hi: 'काउंसलिंग वास्तव में कैसी होती है?',
    },
    summary: {
      en: 'Counselling is a private conversation with a trained person. There is no prescription, no judgment, and nothing to sign.',
      ml: 'കൗണ്‍സിലിംഗ് ഒരു പരിശീലനം ലഭിച്ച വ്യക്തിയുമായുള്ള ഒരു സ്വകാര്യ സംഭാഷണം. കുറിപ്പടിയില്ല, വിധിയില്ല, ഒപ്പിടേണ്ടതില്ല.',
      hi: 'काउंसलिंग एक प्रशिक्षित व्यक्ति के साथ एक निजी बातचीत है। कोई नुस्खा नहीं, कोई निर्णय नहीं, कुछ भी हस्ताक्षर करने की जरूरत नहीं।',
    },
    body: {
      en: 'Many people put off getting help because they imagine counselling means being labelled, hospitalised, or reported. In reality, a counselling session is a private conversation. A counsellor listens without judging and helps you think through what is going on and what options you have. They do not prescribe medication (a psychiatrist does that if needed), they do not tell your family without your permission, and they do not call the police. At Vimukthi centres, the first call is completely anonymous. You can even call just to understand what your options are, without committing to anything.',
      ml: 'കൗണ്‍സിലിംഗ് അര്‍ത്ഥം ലേബല്‍ ചെയ്യപ്പെടുകയോ ആശുപത്രിയില്‍ ആകുകയോ ആണ് എന്ന് പലരും ആശങ്കിക്കുന്നു. യഥാര്‍ത്ഥത്തില്‍ ഒരു കൗണ്‍സിലിംഗ് സെഷന്‍ ഒരു സ്വകാര്യ സംഭാഷണം. കൗണ്‍സിലര്‍ വിധിക്കാതെ ശ്രദ്ധിക്കുന്നു, ഓപ്ഷനുകള്‍ ചിന്തിക്കാന്‍ സഹായിക്കുന്നു. നിങ്ങളുടെ അനുവാദം കൂടാതെ കുടുംബത്തോടോ പോലീസിനോടോ പറയില്ല. വിമുക്തിയിലെ ആദ്യ കോള്‍ പൂര്‍ണ്ണ അജ്ഞാതം.',
      hi: 'बहुत से लोग मदद लेने में देरी करते हैं क्योंकि उन्हें लगता है काउंसलिंग का मतलब लेबल लगाना, अस्पताल में भर्ती होना, या रिपोर्ट होना है। वास्तव में, काउंसलिंग सत्र एक निजी बातचीत है। काउंसलर बिना निर्णय के सुनता है और विकल्पों के बारे में सोचने में मदद करता है। आपकी अनुमति के बिना परिवार या पुलिस को नहीं बताया जाएगा। Vimukthi में पहली कॉल पूरी तरह गुमनाम है।',
    },
  },

  // ── LEGAL ─────────────────────────────────────────────────────────────────
  {
    id: 'ndps-law',
    category: 'legal',
    icon: '⚖️',
    title: {
      en: 'The NDPS Act: what you need to know',
      ml: 'NDPS ആക്ട്: അറിഞ്ഞിരിക്കേണ്ടത്',
      hi: 'NDPS अधिनियम: आपको क्या जानना चाहिए',
    },
    summary: {
      en: 'India\'s Narcotic Drugs and Psychotropic Substances Act covers possession, sale, and use. Penalties depend heavily on the quantity.',
      ml: 'ഇന്ത്യയുടെ നാര്‍ക്കോട്ടിക് ഡ്രഗ്‌സ് ആക്ട് കൈവശം, വില്‍പ്പന, ഉപയോഗം ഇവ ഉള്‍ക്കൊള്ളുന്നു. ശിക്ഷ അളവിനെ ആശ്രയിക്കുന്നു.',
      hi: 'भारत का नारकोटिक ड्रग्स एंड साइकोट्रोपिक सबस्टेंसेज एक्ट कब्जे, बिक्री और उपयोग को कवर करता है। सजा मात्रा पर निर्भर करती है।',
    },
    body: {
      en: 'The NDPS Act 1985 makes it illegal to produce, possess, sell, or consume narcotic or psychotropic substances without a licence. Penalties depend on the quantity found. Small quantity: up to 1 year in prison. Commercial quantity (large amounts): up to 20 years and a heavy fine. There is no concept of "personal use only" as a full legal defence for possession. First-time offenders caught with small quantities can sometimes access treatment diversion programmes instead of criminal prosecution, especially for minors. If you or someone you know is facing a legal situation, the first step is to speak to a lawyer or approach a legal aid centre.',
      ml: 'NDPS ആക്ട് 1985 ലൈസന്‍സ് ഇല്ലാതെ നിര്‍മ്മാണം, കൈവശം, വില്‍പ്പന, ഉപഭോഗം ഇവ നിയമ വിരുദ്ധമാക്കുന്നു. ശിക്ഷ അളവിനെ ആശ്രയിക്കുന്നു: ചെറിയ അളവ്: 1 വര്‍ഷം വരെ ജയില്‍; വ്യാവസായിക അളവ്: 20 വര്‍ഷം വരെ. ആദ്യ കുറ്റക്കാര്‍ ചെറിയ അളവ് കൈവശം ഉള്ളവര്‍ക്ക് ചിലപ്പോള്‍ ചികിത്സ ഡൈവേര്‍ഷന്‍ ലഭ്യം. നിയമ സഹായ കേന്ദ്രം ബന്ധപ്പെടൂ.',
      hi: 'NDPS अधिनियम 1985 लाइसेंस के बिना निर्माण, कब्जे, बिक्री या उपभोग को अवैध बनाता है। छोटी मात्रा: 1 साल तक जेल; व्यावसायिक मात्रा: 20 साल तक। पहली बार अपराधियों के लिए छोटी मात्रा में उपचार डायवर्जन कार्यक्रम उपलब्ध हो सकते हैं। कानूनी स्थिति में वकील से बात करें या कानूनी सहायता केंद्र जाएं।',
    },
  },
];
