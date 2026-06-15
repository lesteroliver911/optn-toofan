import type { ParentTopic } from '../types';

/**
 * Content for the Parents page.
 * Tone: calm, non-accusatory, harm-reduction. Never tells a parent to confront,
 * search or punish. Focuses on observation, conversation and professional help.
 * No em dashes. Trilingual: English / Malayalam / Hindi.
 */
export const parentTopics: ParentTopic[] = [
  // ── WARNING SIGNS ─────────────────────────────────────────────────────────
  {
    id: 'signs-sleep',
    section: 'warning-signs',
    icon: '😴',
    title: {
      en: 'Changes in sleep or energy',
      ml: 'ഉറക്കത്തിലോ ഊര്‍ജ്ജത്തിലോ മാറ്റം',
      hi: 'नींद या ऊर्जा में बदलाव',
    },
    summary: {
      en: 'Sleeping far more or less than usual, odd-hour wakefulness, or sudden tiredness can all have many causes.',
      ml: 'പതിവിലും കൂടുതലോ കുറവോ ഉറങ്ങുക, അസമയത്ത് ഉണർന്നിരിക്കുക, പെട്ടെന്നുള്ള ക്ഷീണം ഇവയ്ക്ക് പല കാരണങ്ങളുണ്ടാകാം.',
      hi: 'सामान्य से बहुत अधिक या बहुत कम सोना, अजीब समय पर जागना, या अचानक थकान के कई कारण हो सकते हैं।',
    },
    body: {
      en: 'Sleeping far more or far less than usual, being awake at odd hours, or sudden tiredness can have many causes. Notice the change calmly over time rather than reacting to a single night, and gently ask how they are feeling. If the pattern continues for weeks, or is combined with other changes, it is worth a calm conversation. Avoid framing it as an accusation.',
      ml: 'പതിവിലും കൂടുതലോ കുറവോ ഉറങ്ങുക, അസമയത്ത് ഉണർന്നിരിക്കുക, പെട്ടെന്നുള്ള ക്ഷീണം എന്നിവയ്ക്ക് പല കാരണങ്ങളുണ്ടാകാം. ഒരു രാത്രിയിലെ മാറ്റത്തിന് പ്രതികരിക്കാതെ, കാലക്രമേണ ശാന്തമായി ശ്രദ്ധിക്കുക, അവര്‍ക്ക് എങ്ങനെ തോന്നുന്നു എന്ന് സൌമ്യമായി ചോദിക്കുക. ആഴ്ചകളോളം ഈ ശൈലി തുടരുകയോ മറ്റ് മാറ്റങ്ങളോടൊപ്പം ഉണ്ടാകുകയോ ചെയ്‍താൽ ശാന്തമായ ഒരു സംഭാഷണം ആവശ്യമാണ്.',
      hi: 'सामान्य से बहुत अधिक या बहुत कम सोना, अजीब समय पर जागना, या अचानक थकान के कई कारण हो सकते हैं। एक रात पर प्रतिक्रिया देने के बजाय समय के साथ शांति से बदलाव को देखें और धीरे से पूछें कि वे कैसा महसूस कर रहे हैं। अगर यह पैटर्न हफ्तों तक जारी रहे या दूसरे बदलावों के साथ हो, तो शांत बातचीत करना उपयुक्त है।',
    },
  },
  {
    id: 'signs-friends',
    section: 'warning-signs',
    icon: '👥',
    title: {
      en: 'New, secretive friendships',
      ml: 'പുതിയ, രഹസ്യ സൌഹൃദങ്ങള്‍',
      hi: 'नए, गुप्त दोस्त',
    },
    summary: {
      en: 'A sudden new circle or secrecy about whereabouts can simply be part of growing up. Staying curious without interrogating keeps the door open.',
      ml: 'പെട്ടെന്നുള്ള പുതിയ കൂട്ടുകെട്ട് അല്ലെങ്കില്‍ എവിടെ പോകുന്നു എന്നതിലെ രഹസ്യാത്മകത വളര്‍ച്ചയുടെ ഭാഗവുമാകാം.',
      hi: 'अचानक नए दोस्त या कहाँ जाते हैं इस बारे में गोपनीयता बड़े होने का हिस्सा भी हो सकती है।',
    },
    body: {
      en: 'A sudden new circle, secrecy about where they go, or hiding their phone can simply be part of growing up. Stay interested without interrogating; keeping the relationship open matters more than knowing every detail. If you notice the new friendships combined with other changes (mood, money, energy), that cluster is more meaningful than any single sign. The most useful approach is gentle curiosity, not surveillance.',
      ml: 'പെട്ടെന്നുള്ള പുതിയ കൂട്ടുകെട്ട്, എവിടെ പോകുന്നു എന്നതിലെ രഹസ്യാത്മകത, ഫോണ്‍ ഒളിപ്പിക്കല്‍ എന്നിവ വളര്‍ച്ചയുടെ ഭാഗവുമാകാം. ചോദ്യം ചെയ്യാതെ താല്‍പ്പര്യം കാണിക്കുക; ഓരോ വിശദാംശവും അറിയുന്നതിനെക്കാള്‍ ബന്ധം തുറന്നു നിലനിര്‍ത്തുന്നതാണ് പ്രധാനം. പുതിയ സൌഹൃദങ്ങള്‍ മറ്റ് മാറ്റങ്ങളോടൊപ്പം ഉണ്ടെങ്കില്‍ ആ സമ്മേളനം ശ്രദ്ധിക്കേണ്ടതുണ്ട്.',
      hi: 'अचानक नए दोस्तों का समूह, कहाँ जाते हैं इस बारे में गोपनीयता, या फोन छिपाना बड़े होने का हिस्सा भी हो सकता है। पूछताछ किए बिना रुचि बनाए रखें; हर बात जानने से ज़्यादा रिश्ते को खुला रखना मायने रखता है। अगर नए दोस्त दूसरे बदलावों के साथ हों, तो वह संयोजन अधिक अर्थपूर्ण है।',
    },
  },
  {
    id: 'signs-mood',
    section: 'warning-signs',
    icon: '🌡️',
    title: {
      en: 'Sudden mood swings',
      ml: 'പെട്ടെന്നുള്ള മാനസിക മാറ്റങ്ങള്‍',
      hi: 'अचानक मिज़ाज में बदलाव',
    },
    summary: {
      en: 'Sharp shifts between irritability, withdrawal, and bursts of energy can be a sign of stress, mental health changes, or substance use.',
      ml: 'ദേഷ്യം, ഉള്‍വലിയൽ, ഊര്‍ജ്ജം ഇവ തമ്മിലുള്ള പെട്ടെന്നുള്ള മാറ്റങ്ങള്‍ സമ്മര്‍ദ്ദം, മാനസികാരോഗ്യ മാറ്റം, ലഹരി ഉപയോഗം ഇവ സൂചിപ്പിക്കാം.',
      hi: 'चिड़चिड़ापन, अलगाव और ऊर्जा के बीच तेज बदलाव तनाव, मानसिक स्वास्थ्य या नशे का संकेत हो सकते हैं।',
    },
    body: {
      en: 'Sharp shifts between irritability, withdrawal and bursts of energy can be a sign of stress, mental health, or substance use. Avoid accusations. Naming what you observe rather than what you assume opens a conversation more safely. "You have seemed really low lately, and I wanted to check in" is a better opening than any accusation. If mood shifts are severe or sudden, consider reaching out to a counsellor or calling DISHA on 1056.',
      ml: 'ദേഷ്യം, ഉള്‍വലിയൽ, പെട്ടെന്നുള്ള ഊര്‍ജ്ജം ഇവ തമ്മിലുള്ള മൂര്‍ഛ മാറ്റങ്ങള്‍ സമ്മര്‍ദ്ദത്തിന്‍റെയോ മാനസികാരോഗ്യ മാറ്റത്തിന്‍റെയോ ലഹരി ഉപയോഗത്തിന്‍റെയോ സൂചനയാകാം. കുറ്റപ്പെടുത്തരുത്. നിങ്ങള്‍ അനുമാനിക്കുന്നതല്ല, കാണുന്നത് പറയൂ. "അടുത്തിടെ നിനക്ക് വിഷമം ഉള്ളതുപോലെ, ഞാന്‍ ചോദിക്കണം എന്ന് തോന്നി" എന്ന് ആരംഭിക്കൂ.',
      hi: 'चिड़चिड़ापन, अलगाव और अचानक ऊर्जा के बीच तेज़ बदलाव तनाव, मानसिक स्वास्थ्य या नशे का संकेत हो सकते हैं। आरोप लगाने से बचें। जो आप देखते हैं उसे बताएं, जो मानते हैं उसे नहीं। "तुम हाल ही में उदास लग रहे हो, मैं बस पूछना चाहता था" ऐसे शुरू करें। अगर मूड बदलाव गंभीर हों तो DISHA 1056 से सहायता लें।',
    },
  },
  {
    id: 'signs-money',
    section: 'warning-signs',
    icon: '💸',
    title: {
      en: 'Missing money or belongings',
      ml: 'പണമോ സാധനങ്ങളോ കാണാതാകല്‍',
      hi: 'पैसे या सामान का गायब होना',
    },
    summary: {
      en: 'Money or items disappearing without explanation is worth noticing as one piece of a larger picture.',
      ml: 'വിശദീകരണമില്ലാതെ പണം അല്ലെങ്കില്‍ സാധനങ്ങള്‍ കാണാതാകുന്നത് ശ്രദ്ധിക്കേണ്ടതാണ്.',
      hi: 'बिना कारण पैसे या सामान का गायब होना ध्यान देने योग्य है।',
    },
    body: {
      en: 'Money or items disappearing, or frequent requests for cash without explanation, can be worth noticing. Approach it as a shared problem to understand together, not a theft to punish. Ask open questions: "Have you needed extra money for something lately?" Leave space for an honest answer. Acting calm and curious, rather than angry, keeps the conversation going.',
      ml: 'പണമോ സാധനങ്ങളോ കാണാതാകുന്നത്, അല്ലെങ്കില്‍ വിശദീകരണമില്ലാതെ ഇടയ്ക്കിടെ പണം ചോദിക്കുന്നത് ശ്രദ്ധിക്കാവുന്നതാണ്. ഇത് ശിക്ഷിക്കേണ്ട ഒരു മോഷണമായല്ല, ഒരുമിച്ച് മനസ്സിലാക്കേണ്ട ഒരു പ്രശ്‌നമായി സമീപിക്കുക. "അടുത്തിടെ എന്തിനെങ്കിലും അധിക പണം ആവശ്യമായിരുന്നോ?" എന്ന് തുറന്ന ചോദ്യം ചോദിക്കൂ.',
      hi: 'पैसे या चीज़ों का गायब होना, या बिना कारण बार-बार पैसे माँगना ध्यान देने योग्य हो सकता है। इसे दंडित करने योग्य चोरी के रूप में नहीं, बल्कि साथ मिलकर समझने वाली समस्या के रूप में देखें। खुले सवाल पूछें: "हाल में किसी चीज़ के लिए अतिरिक्त पैसे चाहिए थे?" शांत और जिज्ञासु रहने से बातचीत जारी रहती है।',
    },
  },
  {
    id: 'signs-school',
    section: 'warning-signs',
    icon: '📚',
    title: {
      en: 'Slipping at school or work',
      ml: 'പഠനത്തിലോ ജോലിയിലോ പിന്നോട്ട്',
      hi: 'पढ़ाई या काम में पिछड़ना',
    },
    summary: {
      en: 'Falling grades, missed classes, or fading interest in things they once loved can have many roots beyond substance use.',
      ml: 'മാര്‍ക്ക് കുറയൽ, ക്ലാസ് ഒഴിവാക്കൽ, ഇഷ്ടപ്പെട്ടവയിലെ താല്‍പ്പര്യ ക്ഷയം ഇവയ്ക്ക് ലഹരി ഉപയോഗം കൂടാതെ പല കാരണങ്ങളുണ്ടാകാം.',
      hi: 'अंकों का गिरना, कक्षाएँ छोड़ना या पसंदीदा चीज़ों में रुचि खोना नशे के अलावा कई कारणों से हो सकता है।',
    },
    body: {
      en: 'Falling grades, skipped classes or lost interest in things they once loved can have many roots. Talk with teachers calmly and, if worry persists, reach out to a counsellor or the help resources below. Before assuming the cause, ask directly but gently. A child who feels heard is more likely to open up than one who feels accused.',
      ml: 'മാര്‍ക്ക് കുറയൽ, ക്ലാസ്സ് ഒഴിവാക്കൽ, ഇഷ്ടപ്പെട്ട കാര്യങ്ങളിലെ താല്‍പ്പര്യ ക്ഷയം ഇവയ്ക്ക് പല കാരണങ്ങളുണ്ടാകാം. അദ്ധ്യാപകരുമായി ശാന്തമായി സംസാരിക്കൂ; ആശങ്ക തുടരുകയാണെങ്കില്‍ ഒരു കൗണ്‍സിലറെ സമീപിക്കൂ. കാരണം അനുമാനിക്കുന്നതിന് മുമ്പ് ശാന്തമായി ചോദിക്കൂ. ആരോപണം ഇല്ലാതെ കേക്കുക.',
      hi: 'अंकों का गिरना, कक्षाएँ छोड़ना या पसंदीदा चीज़ों में रुचि खोना कई कारणों से हो सकता है। शिक्षकों से शांति से बात करें और यदि चिंता बनी रहे तो काउंसलर से संपर्क करें। कारण मानने से पहले शांति से पूछें। जो बच्चा सुना हुआ महसूस करता है वह आरोप से ज़्यादा खुलता है।',
    },
  },

  // ── CONVERSATION ──────────────────────────────────────────────────────────
  {
    id: 'conv-start-gently',
    section: 'conversation',
    icon: '🗣️',
    title: {
      en: 'Start gently, not with accusations',
      ml: 'ആരോപണമില്ലാതെ ശാന്തമായി തുടങ്ങുക',
      hi: 'आरोप के बिना, शांति से शुरू करें',
    },
    summary: {
      en: 'A question that starts with what you have noticed, not what you suspect, keeps the door open rather than slamming it shut.',
      ml: 'നിങ്ങള്‍ സംശയിക്കുന്നതില്‍ നിന്നല്ല, ശ്രദ്ധിച്ചതില്‍ നിന്ന് ആരംഭിക്കുന്ന ഒരു ചോദ്യം വാതില്‍ തുറന്നിടുന്നു.',
      hi: 'जो आप संदेह करते हैं उससे नहीं, जो आपने देखा है उससे शुरू होने वाला सवाल दरवाज़ा खुला रखता है।',
    },
    body: {
      en: 'Choose a quiet, unhurried moment, not a time when either of you is already stressed. Start with what you have observed, not what you believe is happening. "I have noticed you seem more tired than usual lately, and I wanted to check in" is a much softer entry point than "Are you taking drugs?" The goal of the first conversation is to let them know you are available and not angry. You do not need to solve anything in that first conversation.',
      ml: 'ഒരു ശാന്തമായ, ധൃതിയില്ലാത്ത നിമിഷം തിരഞ്ഞെടുക്കൂ. നിങ്ങള്‍ ശ്രദ്ധിച്ചതില്‍ നിന്ന് ആരംഭിക്കൂ, സംഭവിക്കുന്നത് എന്ത് എന്ന് കരുതുന്നതില്‍ നിന്നല്ല. "അടുത്തിടെ നിനക്ക് ക്ഷീണം ഉള്ളതുപോലെ കാണുന്നു, ഞാന്‍ ചോദിക്കണം എന്ന് തോന്നി" എന്നത് ആദ്യ ചോദ്യത്തിന് മൃദുവായ ഒരു പ്രവേശനം. ആദ്യ സംഭാഷണത്തില്‍ ഒന്നും പരിഹരിക്കേണ്ടതില്ല.',
      hi: 'एक शांत, बिना जल्दी वाला पल चुनें। जो आपने देखा है उससे शुरू करें, जो हो रहा है वह मानते हैं उससे नहीं। "मैंने देखा है कि तुम हाल में काफी थके हुए लग रहे हो, मैं बस पूछना चाहता था" पहले सवाल के लिए नरम प्रवेश बिंदु है। पहली बातचीत में कुछ भी हल करना ज़रूरी नहीं है।',
    },
  },
  {
    id: 'conv-listen',
    section: 'conversation',
    icon: '👂',
    title: {
      en: 'Listen more than you talk',
      ml: 'സംസാരിക്കുന്നതിനേക്കാള്‍ കൂടുതല്‍ ശ്രദ്ധിക്കൂ',
      hi: 'बोलने से ज़्यादा सुनें',
    },
    summary: {
      en: 'Silence and space give a young person the room to share things they cannot say if they feel they are being lectured.',
      ml: 'നിശ്ശബ്ദതയും ഇടവേളയും ഒരു യുവ വ്യക്തിക്ക് പ്രഭാഷണം കേള്‍ക്കുകയാണ് എന്ന് തോന്നുകയില്ലെങ്കില്‍ പറയാന്‍ കഴിഞ്ഞേക്കാത്ത കാര്യങ്ങള്‍ പങ്കുവയ്ക്കാന്‍ ഇടം നല്‍കുന്നു.',
      hi: 'चुप्पी और जगह एक युवा को वे बातें साझा करने का अवसर देती हैं जो व्याख्यान महसूस होने पर वे नहीं कह सकते।',
    },
    body: {
      en: 'When a child does start talking, resist the urge to immediately advise, correct, or express fear. Nod, ask short follow-up questions ("what happened then?", "how did that feel?"), and let them finish. Showing that you can hear something without panicking or punishing is the single most powerful thing you can do to keep communication alive. You can share your concern after they have finished, calmly and briefly.',
      ml: 'കുട്ടി സംസാരിക്കാന്‍ ആരംഭിക്കുമ്പോള്‍ ഉടനെ ഉപദേശിക്കാനോ തിരുത്താനോ ഭയം പ്രകടിപ്പിക്കാനോ ഉള്ള പ്രലോഭനം ചെറുക്കൂ. തലയാട്ടുക, ചെറിയ ഫോളോ-അപ് ചോദ്യങ്ങള്‍ ചോദിക്കൂ, അവര്‍ക്ക് തീര്‍ക്കാന്‍ ഇടം നല്‍കൂ. ഭയപ്പെടാതെ ശ്രദ്ധിക്കാന്‍ കഴിയും എന്ന് കാണിക്കുന്നതാണ് ആശയ വിനിമയം നിലനിര്‍ത്തുന്ന ഏറ്റവും ശക്തമായ കാര്യം.',
      hi: 'जब बच्चा बात करना शुरू करे, तो तुरंत सलाह देने, सुधारने या डर व्यक्त करने की इच्छा को रोकें। सिर हिलाएं, छोटे फॉलो-अप सवाल पूछें और उन्हें खत्म करने दें। यह दिखाना कि आप बिना घबराए या दंड दिए सुन सकते हैं, संवाद को जीवित रखने की सबसे शक्तिशाली चीज़ है।',
    },
  },
  {
    id: 'conv-stay-calm',
    section: 'conversation',
    icon: '🤝',
    title: {
      en: 'Keep the door open and stay consistent',
      ml: 'വാതില്‍ തുറന്നിടൂ, ഉറച്ചു നില്‍ക്കൂ',
      hi: 'दरवाज़ा खुला रखें और स्थिर रहें',
    },
    summary: {
      en: 'One conversation rarely solves everything. A calm, steady presence over time matters more than any single breakthrough talk.',
      ml: 'ഒരു സംഭാഷണം ഒറ്റ ദിവസം ഒന്നും പരിഹരിക്കില്ല. കാലക്രമേണ ശാന്തവും സ്ഥിരതയുള്ളതുമായ സാന്നിദ്ധ്യമാണ് ഒരൊറ്റ സംഭാഷണത്തേക്കാള്‍ ഫലപ്രദം.',
      hi: 'एक बातचीत शायद ही कुछ हल करती है। समय के साथ शांत, स्थिर उपस्थिति किसी एक सफलता की बातचीत से अधिक मायने रखती है।',
    },
    body: {
      en: 'If the first conversation does not go well, or if they shut down, that is not the end. Your goal is to be consistently available, not to achieve a single breakthrough. Check in again after a few days, casually. Over time, if a child believes that you will not overreact, they are more likely to come to you when they are in real trouble. Being reliable and calm matters far more than being perfectly right once.',
      ml: 'ആദ്യ സംഭാഷണം നന്നാകില്ലെങ്കില്‍, അല്ലെങ്കില്‍ അവര്‍ അടഞ്ഞുപോകുന്നെങ്കില്‍, അത് അവസാനമല്ല. നിങ്ങളുടെ ലക്ഷ്യം ഒരൊറ്റ ഒരു കണ്ടെത്തൽ അല്ല, നിരന്തരം ലഭ്യമായിരിക്കുക. ഏതാനും ദിവസം കഴിഞ്ഞ് പതിവ് ചോദ്യമായി ചോദിക്കൂ. കാലക്രമേണ, അമിതമായി പ്രതികരിക്കില്ല എന്ന് കുട്ടിക്ക് ബോദ്ധ്യം ഉണ്ടെങ്കില്‍ ശരിക്കുള്ള ബുദ്ധിമുട്ടില്‍ നിങ്ങളെ സമീപിക്കും.',
      hi: 'अगर पहली बातचीत अच्छी न हो, या वे बंद हो जाएं, तो यह अंत नहीं है। आपका लक्ष्य एक सफलता नहीं, बल्कि लगातार उपलब्ध रहना है। कुछ दिनों बाद फिर से पूछें, सहजता से। समय के साथ, अगर बच्चे को लगे कि आप अत्यधिक प्रतिक्रिया नहीं करेंगे, तो वे असली मुश्किल में आपके पास आएंगे।',
    },
  },

  // ── WHAT TO AVOID ─────────────────────────────────────────────────────────
  {
    id: 'avoid-confrontation',
    section: 'what-to-avoid',
    icon: '🚫',
    title: {
      en: 'Avoid confrontation and ultimatums',
      ml: 'ഏറ്റുമുട്ടലും അന്ത്യശാസനവും ഒഴിവാക്കൂ',
      hi: 'टकराव और अल्टीमेटम से बचें',
    },
    summary: {
      en: 'Confrontational approaches push young people away and close off communication at the moment it is most needed.',
      ml: 'ഏറ്റുമുട്ടൽ ശൈലി യുവജനങ്ങളെ അകറ്റുകയും ഏറ്റവും ആവശ്യമായ നിമിഷത്തില്‍ ആശയ വിനിമയം അടയ്ക്കുകയും ചെയ്യുന്നു.',
      hi: 'टकराव का तरीका युवाओं को दूर धकेलता है और सबसे ज़रूरी पल में संवाद बंद कर देता है।',
    },
    body: {
      en: 'Issuing ultimatums, threatening to cut off support, or staging a confrontation in front of others tends to produce two outcomes: the young person becomes more secretive, or they leave. Neither is what you want. If you are very worried and feel a firm conversation is necessary, choose a private, calm moment. Express what you are afraid of losing, not what you are angry about. "I am scared of losing you" lands differently from "You are destroying your life."',
      ml: 'അന്ത്യശാസനം നല്‍കൽ, പിന്തുണ നിര്‍ത്തുമെന്ന ഭീഷണി, മറ്റുള്ളവരുടെ മുമ്പില്‍ ഏറ്റുമുട്ടല്‍ ഇവ മൂന്ന് ഫലം ഉണ്ടാക്കും: കുട്ടി കൂടുതല്‍ രഹസ്യ ശൈലി സ്വീകരിക്കൂം, അല്ലെങ്കില്‍ മാറും. ഒന്നും നിങ്ങള്‍ ആഗ്രഹിക്കുന്നതല്ല. വളരെ ആശങ്കയുണ്ടെങ്കില്‍ ഒരു ശാന്തമായ, സ്വകാര്യ നിമിഷം തിരഞ്ഞെടുക്കൂ. ദേഷ്യമല്ല, ഭയം പ്രകടിപ്പിക്കൂ.',
      hi: 'अल्टीमेटम देना, समर्थन काटने की धमकी, या दूसरों के सामने टकराव कराना दो परिणाम देता है: बच्चा और गुप्त हो जाता है, या चला जाता है। दोनों आप नहीं चाहते। अगर बहुत चिंतित हैं तो एक निजी, शांत पल चुनें। गुस्से के बारे में नहीं, जो खोने से डरते हैं उसके बारे में बात करें।',
    },
  },
  {
    id: 'avoid-snooping',
    section: 'what-to-avoid',
    icon: '🔍',
    title: {
      en: 'Do not secretly search their things',
      ml: 'രഹസ്യമായി സാധനങ്ങള്‍ പരിശോധിക്കരുത്',
      hi: 'चुपके से उनका सामान न खोजें',
    },
    summary: {
      en: 'Searching a child\'s phone or belongings without their knowledge, if discovered, destroys trust and closes the door on honesty.',
      ml: 'കുട്ടിയുടെ ഫോണോ സാധനങ്ങളോ അറിയിക്കാതെ പരിശോധിക്കുന്നത് കണ്ടുപിടിക്കപ്പെട്ടാല്‍ വിശ്വാസം ഇല്ലാതാകും.',
      hi: 'बिना जाने फोन या सामान खोजना, अगर पकड़ा जाए, तो विश्वास नष्ट करता है और ईमानदारी का दरवाज़ा बंद करता है।',
    },
    body: {
      en: 'Searching a phone, bag or room without permission feels like a massive violation to a young person, even if you are genuinely worried. If discovered, it almost always causes the young person to become more hidden, not more open. If your concern is severe enough that you feel you need to search, that is a sign the worry has reached a level where a professional should be involved. Call Vimukthi on 14405 to talk through what to do next.',
      ml: 'ഫോണ്‍, ബാഗ് അല്ലെങ്കില്‍ മുറി അനുവാദമില്ലാതെ പരിശോധിക്കുന്നത് ഒരു യുവ വ്യക്തിക്ക് ഒരു വലിയ ലംഘനമായി തോന്നുന്നു. കണ്ടെത്തുകയാണെങ്കില്‍ ഇത് ഏതാണ്ട് എല്ലായ്‌പ്പോഴും കൂടുതല്‍ ഗൂഢരീതിക്ക് കാരണമാകും. ആശങ്ക ഇത്രത്തോളം ഉണ്ടെങ്കില്‍ ഒരു പ്രൊഫഷണലിനെ ഉള്‍പ്പെടുത്തേണ്ട സമയം ആകുന്നു. വിമുക്തി 14405 ല്‍ ബന്ധപ്പെടൂ.',
      hi: 'बिना अनुमति फोन, बैग या कमरा खोजना एक युवा व्यक्ति को भारी उल्लंघन लगता है। पकड़ा जाने पर यह लगभग हमेशा उन्हें और छिपाने की ओर ले जाता है। अगर आपकी चिंता इस स्तर तक पहुंच गई है, यह संकेत है कि एक पेशेवर को शामिल करने का समय आ गया है। Vimukthi 14405 पर कॉल करें।',
    },
  },
  {
    id: 'avoid-alone',
    section: 'what-to-avoid',
    icon: '🏥',
    title: {
      en: 'Do not try to handle it entirely alone',
      ml: 'ഇത് പൂര്‍ണ്ണമായും ഒറ്റ്ടേ കൈകാര്യം ചെയ്യാന്‍ ശ്രമിക്കരുത്',
      hi: 'इसे पूरी तरह अकेले संभालने की कोशिश न करें',
    },
    summary: {
      en: 'Worried parents often carry this alone for too long. Professional counsellors exist precisely for these situations and asking for their help is a sign of good parenting.',
      ml: 'ആശങ്കയുള്ള മാതാപിതാക്കള്‍ ഇത് പലപ്പോഴും വളരെ നേരം ഒറ്റ്ടേ വഹിക്കുന്നു. ഈ സന്ദര്‍ഭങ്ങള്‍ക്ക് വേണ്ടിത്തന്നെ ആണ് പ്രൊഫഷണൽ കൗണ്‍സിലര്‍മാര്‍ ഉള്ളത്.',
      hi: 'चिंतित माता-पिता अक्सर इसे अकेले बहुत देर तक उठाते हैं। पेशेवर काउंसलर इन्हीं परिस्थितियों के लिए होते हैं और उनसे मदद माँगना अच्छे पालन-पोषण की निशानी है।',
    },
    body: {
      en: 'Many parents try to manage a child\'s substance use privately, out of fear of shame or family stigma. This usually means waiting too long. Professional counsellors can guide you on how to approach the conversation, what signs are serious, and what steps to take. Calling for advice does not commit you to anything, and it does not mean your child will be labelled or hospitalised. Vimukthi (14405) and DISHA (1056) take calls from worried parents, not just from people who use substances. You can call for yourself.',
      ml: 'പല മാതാപിതാക്കളും അപമാനഭയം കൊണ്ടോ കുടുംബ കളങ്കം കൊണ്ടോ ഇത് രഹസ്യമായി കൈകാര്യം ചെയ്യാന്‍ ശ്രമിക്കുന്നു. ഇത് പൊതുവে വൈകുന്നതിലേക്ക് നയിക്കുന്നു. കൌണ്‍സിലര്‍ക്ക് സംഭാഷണം ആരംഭിക്കേണ്ടത് എങ്ങനെ, ഏതൊക്കെ ലക്ഷണം ഗൌരവമേറിയതാണ് ഇവ നിര്‍ദ്ദേശിക്കാം. ഉപദേശം ചോദിക്കുന്നത് ഒന്നിനും പ്രതിജ്ഞ ചെയ്യലല്ല. വിമുക്തി (14405) ഉം ദിശ (1056) ഉം ആശങ്കയുള്ള മാതാപിതാക്കളില്‍ നിന്ന് കൂടി കോള്‍ സ്വീകരിക്കും.',
      hi: 'कई माता-पिता शर्म या कलंक के डर से इसे निजी तौर पर संभालने की कोशिश करते हैं। इससे आमतौर पर बहुत देर हो जाती है। काउंसलर बता सकते हैं कि बातचीत कैसे करें, कौन से संकेत गंभीर हैं और क्या कदम उठाने चाहिए। Vimukthi (14405) और DISHA (1056) चिंतित माता-पिता से भी कॉल लेते हैं, न सिर्फ नशा करने वालों से।',
    },
  },
];
