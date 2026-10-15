export const initialResources = [
  {
    id: "pmegp-scheme",
    title: {
      en: "Prime Minister Employment Generation Programme (PMEGP)",
      hi: "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP)"
    },
    description: {
      en: "Credit-linked subsidy programme by Ministry of MSME offering 25% to 35% government subsidy for rural women setting up manufacturing or service micro-enterprises.",
      hi: "सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय का क्रेडिट-लिंक्ड सब्सिडी कार्यक्रम, जिसमें ग्रामीण महिलाओं को नया व्यवसाय शुरू करने पर 25% से 35% तक सरकारी सब्सिडी मिलती है।"
    },
    category: "starting-business",
    categoryLabel: {
      en: "Starting a Small Business",
      hi: "छोटा व्यवसाय शुरू करना"
    },
    type: "government-scheme",
    typeLabel: {
      en: "Government Scheme",
      hi: "सरकारी योजना"
    },
    sourceName: "Khadi and Village Industries Commission (KVIC), Ministry of MSME",
    sourceUrl: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
    isVerifiedOfficial: true,
    isSampleDemo: false,
    verifiedDate: "October 2026",
    icon: "Award",
    featured: true,
    tags: ["subsidy", "bank-loan", "rural-women", "manufacturing", "kvic", "msme"],
    eligibility: {
      en: "Any individual above 18 years of age. For rural women and special category beneficiaries, project cost up to ₹50 Lakhs (Manufacturing) and ₹20 Lakhs (Service) is eligible with 35% rural subsidy.",
      hi: "18 वर्ष से अधिक आयु की कोई भी महिला। ग्रामीण महिलाओं के लिए विनिर्माण में ₹50 लाख और सेवा क्षेत्र में ₹20 लाख तक के प्रोजेक्ट पर 35% ग्रामीण सरकारी अनुदान (सब्सिडी) देय है।"
    },
    benefits: {
      en: "35% subsidy on project cost in rural areas. Only 5% own beneficiary contribution required for women entrepreneurs.",
      hi: "ग्रामीण क्षेत्रों में कुल लागत पर 35% सरकारी सब्सिडी। महिला उद्यमियों के लिए केवल 5% अपनी पूंजी लगाना आवश्यक है।"
    },
    requiredDocuments: [
      { en: "Aadhaar Card and PAN Card", hi: "आधार कार्ड और पैन कार्ड" },
      { en: "Educational Qualification Certificate (8th pass for projects above ₹10L)", hi: "शैक्षिक योग्यता प्रमाण पत्र (10 लाख से अधिक के प्रोजेक्ट हेतु 8वीं पास)" },
      { en: "Detailed Project Report (DPR) / Business Plan", hi: "प्रोजेक्ट रिपोर्ट (DPR) / व्यवसाय योजना" },
      { en: "Rural Area Certificate / Gram Panchayat Certificate", hi: "ग्रामीण क्षेत्र प्रमाण पत्र / ग्राम पंचायत प्रमाण पत्र" },
      { en: "Passport size photographs and Bank Passbook", hi: "पासपोर्ट साइज फोटो और बैंक पासबुक" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Prepare Your Project Report", hi: "अपनी प्रोजेक्ट रिपोर्ट तैयार करें" },
        detail: { en: "Outline the raw materials, machinery, operating expenses, and expected sales of your proposed enterprise.", hi: "अपने प्रस्तावित व्यवसाय के कच्चे माल, मशीनरी, परिचालन खर्च और अपेक्षित बिक्री का विवरण तैयार करें।" }
      },
      {
        stepNumber: 2,
        title: { en: "Apply Online on KVIC Portal", hi: "KVIC आधिकारिक पोर्टल पर ऑनलाइन आवेदन करें" },
        detail: { en: "Visit the official PMEGP e-Portal, select 'Apply Online', fill in personal details, Aadhaar, and upload required documents.", hi: "PMEGP आधिकारिक ई-पोर्टल पर जाएं, व्यक्तिगत विवरण और आधार दर्ज करें और जरूरी दस्तावेज अपलोड करें।" }
      },
      {
        stepNumber: 3,
        title: { en: "Application Scrutiny & Bank Sanction", hi: "जांच एवं बैंक द्वारा ऋण स्वीकृति" },
        detail: { en: "District Task Force Committee reviews the application and forwards it to your preferred rural financing bank.", hi: "जिला टास्क फोर्स कमेटी आवेदन की जांच कर इसे आपके चुने हुए ग्रामीण बैंक को ऋण स्वीकृति हेतु भेजती है।" }
      },
      {
        stepNumber: 4,
        title: { en: "EDP Training & Subsidy Credit", hi: "EDP उद्यमिता प्रशिक्षण और सब्सिडी क्रेडिट" },
        detail: { en: "Complete mandatory online/offline Entrepreneurship Development Training (EDP) before loan disbursement.", hi: "ऋण वितरण से पूर्व अनिवार्य उद्यमिता विकास प्रशिक्षण (EDP) पूरा करें। सब्सिडी राशि आपके बैंक खाते में जमा होती है।" }
      }
    ]
  },
  {
    id: "mudra-loan-women",
    title: {
      en: "Pradhan Mantri Mudra Yojana (PMMY) - Shishu & Kishore Loans",
      hi: "प्रधानमंत्री मुद्रा योजना (PMMY) - शिशु एवं किशोर ऋण"
    },
    description: {
      en: "Collateral-free business loans up to ₹50,000 (Shishu) and up to ₹5,00,000 (Kishore) through commercial, regional rural, and cooperative banks for small village shops, tailors, food stalls, and crafts.",
      hi: "बिना किसी गारंटी (कोलैटरल-फ्री) के ₹50,000 (शिशु) और ₹5,00,000 (किशोर) तक का आसान व्यापार ऋण। ग्रामीण सिलाई, किराना दुकान, खाद्य सामग्री और हस्तशिल्प के लिए उपलब्ध।"
    },
    category: "finance-pricing",
    categoryLabel: {
      en: "Pricing & Finance Basics",
      hi: "मूल्य निर्धारण और वित्त"
    },
    type: "government-scheme",
    typeLabel: {
      en: "Government Scheme",
      hi: "सरकारी योजना"
    },
    sourceName: "Micro Units Development & Refinance Agency (MUDRA), Dept of Financial Services",
    sourceUrl: "https://www.mudra.org.in/",
    isVerifiedOfficial: true,
    isSampleDemo: false,
    verifiedDate: "October 2026",
    icon: "TrendingUp",
    featured: true,
    tags: ["collateral-free", "micro-loan", "shishu", "kishore", "mudra-card", "finance"],
    eligibility: {
      en: "Any woman micro-entrepreneur running or starting a non-farm revenue-generating micro business (tailoring, food processing, handicrafts, village retail, poultry/dairy allied services).",
      hi: "गैर-कृषि लघु व्यवसाय चलाने या शुरू करने वाली कोई भी महिला उद्यमी (सिलाई, खाद्य प्रसंस्करण, हस्तशिल्प, ग्रामीण खुदरा दुकान, किराना आदि)।"
    },
    benefits: {
      en: "No collateral or third-party guarantee required. Low interest rates, zero processing fee for Shishu loans, and Mudra Debit Card for working capital.",
      hi: "किसी भी संपत्ति को गिरवी रखने या गारंटर की आवश्यकता नहीं। कम ब्याज दर, शिशु ऋण पर शून्य प्रोसेसिंग शुल्क और कार्यशील पूंजी हेतु मुद्रा डेबिट कार्ड।"
    },
    requiredDocuments: [
      { en: "Proof of Identity (Voter ID / Aadhaar / Driving License)", hi: "पहचान प्रमाण (आधार कार्ड / मतदाता पहचान पत्र)" },
      { en: "Proof of Residence (Ration Card / Electricity bill / Gram Panchayat certificate)", hi: "निवास प्रमाण (राशन कार्ड / बिजली बिल / पंचायत प्रमाण पत्र)" },
      { en: "Quotation of machinery/items to be purchased", hi: "खरीदी जाने वाली मशीनरी या माल का कोटेशन / बिल" },
      { en: "Recent bank statement (last 6 months if account exists)", hi: "बैंक खाते का पिछले 6 महीने का स्टेटमेंट (यदि उपलब्ध हो)" },
      { en: "Two passport size photographs", hi: "दो पासपोर्ट साइज फोटो" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Select Loan Category", hi: "ऋण श्रेणी चुनें" },
        detail: { en: "Choose 'Shishu' (up to ₹50,000 for starting) or 'Kishore' (₹50,000 to ₹5,00,000 for expanding).", hi: "शुरुआत हेतु 'शिशु' (₹50,000 तक) या व्यवसाय विस्तार हेतु 'किशोर' (₹50,000 से ₹5 लाख) चुनें।" }
      },
      {
        stepNumber: 2,
        title: { en: "Visit Your Local Rural/Cooperative Bank or Udyamimitra", hi: "नजदीकी ग्रामीण/सहकारी बैंक शाखा अथवा उद्यमीमित्र पोर्टल पर जाएं" },
        detail: { en: "Submit the simple 1-page Mudra loan application form at your local bank branch or online on udyamimitra.in.", hi: "अपनी नजदीकी बैंक शाखा में 1-पेज का आसान मुद्रा फॉर्म जमा करें या udyamimitra.in पर ऑनलाइन भरें।" }
      },
      {
        stepNumber: 3,
        title: { en: "Loan Sanction & Mudra Card", hi: "ऋण स्वीकृति एवं मुद्रा कार्ड प्राप्ति" },
        detail: { en: "Bank verifies simple business details and issues the loan amount along with a Mudra RuPay card for withdrawal.", hi: "बैंक विवरण की पुष्टि करता है और राशि स्वीकृत कर जरूरत के अनुसार निकासी हेतु मुद्रा रुपे कार्ड जारी करता है।" }
      }
    ]
  },
  {
    id: "lakhpati-didi-initiative",
    title: {
      en: "Lakhpati Didi Initiative — Deendayal Antyodaya Yojana (DAY-NRLM)",
      hi: "लखपति दीदी योजना — दीनदयाल अंत्योदय योजना (DAY-NRLM)"
    },
    description: {
      en: "National mission empowering Self-Help Group (SHG) women to earn sustainable annual incomes of at least ₹1 Lakh through multi-livelihood interventions, micro-credit linkages, and market access.",
      hi: "राष्ट्रीय ग्रामीण आजीविका मिशन की विशेष पहल, जिसमें स्वयं सहायता समूह (SHG) की दीदियों को कम से कम ₹1 लाख की वार्षिक आय अर्जित करने हेतु कौशल, वित्तीय सहायता और बाजार से जोड़ा जाता है।"
    },
    category: "starting-business",
    categoryLabel: {
      en: "Starting a Small Business",
      hi: "छोटा व्यवसाय शुरू करना"
    },
    type: "government-scheme",
    typeLabel: {
      en: "Government Scheme",
      hi: "सरकारी योजना"
    },
    sourceName: "Ministry of Rural Development (MoRD), Government of India",
    sourceUrl: "https://aajeevika.gov.in/",
    isVerifiedOfficial: true,
    isSampleDemo: false,
    verifiedDate: "October 2026",
    icon: "Users",
    featured: true,
    tags: ["shg", "lakhpati-didi", "rural-livelihood", "community-cadre", "market-linkage"],
    eligibility: {
      en: "Active members of women Self-Help Groups (SHGs) under DAY-NRLM in rural blocks across all states.",
      hi: "DAY-NRLM के तहत पंजीकृत ग्रामीण महिला स्वयं सहायता समूह (SHG) की सक्रिय सदस्य।"
    },
    benefits: {
      en: "Community Investment Fund (CIF), interest subvention on bank credit, livelihood planning support, drone and toolbank access, and direct institutional market linkages.",
      hi: "सामुदायिक निवेश कोष (CIF), रियायती ब्याज दर पर ऋण, आजीविका योजना सहायता, ड्रोन दीदी और टूलबैंक सुविधा, और सीधे संस्थागत बाजार से जुड़ाव।"
    },
    requiredDocuments: [
      { en: "SHG Membership Passbook / Resolution Copy", hi: "स्वयं सहायता समूह सदस्यता पासबुक / प्रस्ताव प्रति" },
      { en: "Aadhaar Card and Mobile Number", hi: "आधार कार्ड और चालू मोबाइल नंबर" },
      { en: "SHG Individual Savings Bank Account Passbook", hi: "बैंक बचत खाता पासबुक" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Contact Your Village Organization (VO) / CLF", hi: "ग्राम संगठन (VO) या संकुल स्तरीय संघ (CLF) से संपर्क करें" },
        detail: { en: "Inform your SHG animator / Krishi Sakhi / Pashu Sakhi about your business aspirations.", hi: "अपनी समूह सखी, कृषि सखी या पशु सखी को बताएं कि आप कौन सा आजीविका कार्य शुरू या बढ़ाना चाहती हैं।" }
      },
      {
        stepNumber: 2,
        title: { en: "Prepare Household Livelihood Plan", hi: "पारिवारिक आजीविका योजना (HLP) बनाएं" },
        detail: { en: "Community Resource Persons (CRPs) help assess income streams across farming, livestock, enterprise, and local services.", hi: "कम्युनिटी रिसोर्स पर्सन (CRP) आपकी खेती, पशुपालन या लघु व्यवसाय की आय बढ़ाने की योजना बनाने में मदद करेंगे।" }
      },
      {
        stepNumber: 3,
        title: { en: "Avail SHG Credit & Capacity Building", hi: "समूह ऋण और तकनीकी प्रशिक्षण प्राप्त करें" },
        detail: { en: "Receive enterprise skill training at RSETI/KVK and access low-cost revolving credit from your SHG cluster.", hi: "RSETI या कृषि विज्ञान केंद्र से निशुल्क हुनर सीखें और समूह के माध्यम से आसान किश्तों पर पूंजी प्राप्त करें।" }
      }
    ]
  },
  {
    id: "rseti-skill-training",
    title: {
      en: "Rural Self Employment Training Institutes (RSETI) Free Skill Programs",
      hi: "ग्रामीण स्वरोजगार प्रशिक्षण संस्थान (RSETI) निःशुल्क कौशल प्रशिक्षण"
    },
    description: {
      en: "Government & lead-bank supported residential training institutes operating in almost every Indian district, providing free practical business skills, food & lodging, and post-training bank loan facilitation for rural youth and women.",
      hi: "भारत के लगभग हर जिले में स्थापित सरकारी व लीड बैंक समर्थित संस्थान। ग्रामीण महिलाओं के लिए निःशुल्क भोजन, आवास, व्यावहारिक व्यापारिक हुनर और प्रशिक्षण उपरांत बैंक लोन सुविधा।"
    },
    category: "business-planning",
    categoryLabel: {
      en: "Business Planning",
      hi: "व्यवसाय योजना"
    },
    type: "training-program",
    typeLabel: {
      en: "Training Program",
      hi: "प्रशिक्षण कार्यक्रम"
    },
    sourceName: "National Academy of RUDSETI & Ministry of Rural Development",
    sourceUrl: "https://rudsetiindia.org/",
    isVerifiedOfficial: true,
    isSampleDemo: false,
    verifiedDate: "October 2026",
    icon: "BookOpen",
    featured: true,
    tags: ["free-training", "hostel-facility", "district-level", "sewing", "food-processing", "rseti"],
    eligibility: {
      en: "Rural women and youth aged between 18 and 45 years possessing motivation to start self-employment or micro-businesses. Priority to BPL / SHG families.",
      hi: "18 से 45 वर्ष की ग्रामीण महिलाएं व युवतियां जो अपना स्वरोजगार शुरू करना चाहती हैं। SHG और बीपीएल परिवारों को प्राथमिकता।"
    },
    benefits: {
      en: "100% free course, free hostel boarding & lodging, toolkits guidance, government certificate, and 2-year escort services for bank credit linkage.",
      hi: "100% निःशुल्क प्रशिक्षण, निःशुल्क हॉस्टल और भोजन, सरकारी प्रमाणपत्र, और प्रशिक्षण के बाद 2 साल तक बैंक से लोन कराने में हैंड-होल्डिंग सहायता।"
    },
    requiredDocuments: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Passport photos (4 copies)", hi: "पासपोर्ट साइज 4 फोटो" },
      { en: "Ration Card / BPL card (if available)", hi: "राशन कार्ड / बीपीएल कार्ड (यदि उपलब्ध हो)" },
      { en: "School leaving certificate or basic education proof", hi: "स्कूल प्रमाण पत्र या सामान्य साक्षरता प्रमाण" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Identify District RSETI Center", hi: "अपने जिले के RSETI केंद्र की जानकारी लें" },
        detail: { en: "Locate the nearest RSETI center usually managed by your district's Lead Bank (SBI, PNB, Canara Bank, BOB, etc.).", hi: "अपने जिले के लीड बैंक (SBI, PNB, केनरा बैंक, बैंक ऑफ बड़ौदा आदि) द्वारा संचालित RSETI केंद्र का पता करें।" }
      },
      {
        stepNumber: 2,
        title: { en: "Select a Course of Your Interest", hi: "अपनी पसंद का कोर्स चुनें" },
        detail: { en: "Popular courses: Women's Tailoring & Boutique, Papad/Pickle/Masala Making, Beauty Parlour Management, Dairy & Vermicompost, Mobile Repairing, and Agarbatti Making.", hi: "लोकप्रिय कोर्स: सिलाई व बुटीक, पापड़-अचार-मसाला निर्माण, ब्यूटी पार्लर, डेयरी व केंचुआ खाद, मोमबत्ती व अगरबत्ती निर्माण।" }
      },
      {
        stepNumber: 3,
        title: { en: "Attend Residential Course & Graduate", hi: "प्रशिक्षण पूरा करें और प्रमाण पत्र पाएं" },
        detail: { en: "Participate in the 10 to 30 day intensive training covering both technical crafting and business bookkeeping.", hi: "10 से 30 दिनों का व्यावहारिक कोर्स पूरा करें जिसमें हुनर के साथ-साथ हिसाब-किताब और बैंक बातचीत भी सिखाई जाती है।" }
      }
    ]
  },
  {
    id: "gem-saras-collection",
    title: {
      en: "Government e-Marketplace (GeM) — Saras Collection for SHGs",
      hi: "गवर्नमेंट ई-मार्केटप्लेस (GeM) — स्वयं सहायता समूहों हेतु 'सरस कलेक्शन'"
    },
    description: {
      en: "Direct institutional market channel enabling women SHGs to showcase and sell handicrafts, handlooms, office consumables, packaged snacks, and crafts directly to Central and State Government departments across India.",
      hi: "केंद्र व राज्य सरकार के विभागों को सीधे उत्पाद बेचने का आधिकारिक मंच। ग्रामीण SHG महिलाएं अपने हस्तशिल्प, हथकरघा, फाइल फोल्डर और खाद्य उत्पाद बिना बिचौलियों के सीधे सरकारी दफ्तरों को बेच सकती हैं।"
    },
    category: "digital-selling",
    categoryLabel: {
      en: "Digital Selling",
      hi: "डिजिटल बिक्री"
    },
    type: "market-opportunity",
    typeLabel: {
      en: "Market Opportunity",
      hi: "बाजार का अवसर"
    },
    sourceName: "GeM (Ministry of Commerce and Industry) & MoRD",
    sourceUrl: "https://gem.gov.in/",
    isVerifiedOfficial: true,
    isSampleDemo: false,
    verifiedDate: "October 2026",
    icon: "ShoppingBag",
    featured: true,
    tags: ["b2g", "government-procurement", "shg-selling", "gem-portal", "saras-collection"],
    eligibility: {
      en: "Registered women Self-Help Groups (SHGs) and Producer Groups under State Rural Livelihood Missions (SRLM).",
      hi: "राज्य ग्रामीण आजीविका मिशन (SRLM) के अंतर्गत पंजीकृत महिला स्वयं सहायता समूह और उत्पादक समूह।"
    },
    benefits: {
      en: "Exemption from Earnest Money Deposit (EMD). Direct order access from thousands of government offices, schools, and armed forces canteens with assured online payment.",
      hi: "बिना किसी बयाना राशि (EMD) के रजिस्ट्रेशन। देश भर के सरकारी कार्यालयों से सीधे बड़े ऑर्डर पाने का अवसर और समय पर ऑनलाइन भुगतान।"
    },
    requiredDocuments: [
      { en: "SRLM SHG Registration code and certificate", hi: "SRLM समूह पंजीकरण कोड व प्रमाण पत्र" },
      { en: "PAN Card of the SHG / Lead Representative", hi: "समूह या अध्यक्ष का पैन कार्ड" },
      { en: "Bank Account Details (Account No, IFSC, Cheque leaf)", hi: "बैंक खाता विवरण (खाता नंबर, आईएफएससी कोड, रद्द चेक)" },
      { en: "FSSAI registration (for packaged food items)", hi: "खाद्य उत्पादों हेतु एफएसएसएआई (FSSAI) पंजीकरण" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Onboard via District SRLM Nodal Officer", hi: "जिला SRLM नोडल अधिकारी के जरिए पंजीकरण कराएं" },
        detail: { en: "Your district livelihood mission coordinator helps create your verified GeM seller profile under the Saras Collection tab.", hi: "आपके जिले के आजीविका मिशन समन्वयक GeM पोर्टल के 'सरस कलेक्शन' टैब में समूह का मुफ्त विक्रेता खाता बनवाते हैं।" }
      },
      {
        stepNumber: 2,
        title: { en: "Catalog Products with Photos and Prices", hi: "उत्पादों की फोटो और दाम जोड़ें" },
        detail: { en: "Upload clean product photos, dimensions, specifications, and realistic delivery lead times.", hi: "अपने उत्पाद की स्पष्ट फोटो, आकार, वजन और तैयार करने में लगने वाला समय दर्ज करें।" }
      },
      {
        stepNumber: 3,
        title: { en: "Receive Orders and Dispatch", hi: "ऑर्डर प्राप्त करें और डाक/कूरियर से भेजें" },
        detail: { en: "Pack items securely, generate online dispatch slip, and receive direct bank settlement upon delivery confirmation.", hi: "ऑर्डर आने पर अच्छी पैकिंग करें, पोर्टल से रसीद निकालें और डिलीवरी होते ही बैंक खाते में भुगतान पाएं।" }
      }
    ]
  },
  {
    id: "pmfme-micro-food-processing",
    title: {
      en: "PM Formalisation of Micro food processing Enterprises (PMFME)",
      hi: "प्रधानमंत्री सूक्ष्म खाद्य उद्योग उन्नयन योजना (PMFME)"
    },
    description: {
      en: "Financial, technical, and business support for micro food processing units (pickles, spices, juices, pulses, bakeries, papads) with 35% credit-linked capital subsidy up to ₹10 Lakhs.",
      hi: "ग्रामीण खाद्य प्रसंस्करण इकाइयों (अचार, मसाले, पापड़, दाल मिल, बेकरी, जूस, आटा चक्की आदि) के लिए 35% क्रेडिट-लिंक्ड सब्सिडी (अधिकतम ₹10 लाख) और पैकेजिंग-ब्रांडिंग सहायता।"
    },
    category: "product-packaging",
    categoryLabel: {
      en: "Product Improvement & Packaging",
      hi: "उत्पाद सुधार और पैकेजिंग"
    },
    type: "government-scheme",
    typeLabel: {
      en: "Government Scheme",
      hi: "सरकारी योजना"
    },
    sourceName: "Ministry of Food Processing Industries (MoFPI)",
    sourceUrl: "https://pmfme.mofpi.gov.in/",
    isVerifiedOfficial: true,
    isSampleDemo: false,
    verifiedDate: "October 2026",
    icon: "Package",
    featured: false,
    tags: ["food-processing", "machinery-subsidy", "fssai-support", "odop", "one-district-one-product"],
    eligibility: {
      en: "Existing or aspiring micro food processors, individual women entrepreneurs, SHG members, and farmer producer groups.",
      hi: "मौजूदा या नए खाद्य प्रसंस्करण उद्यमी, ग्रामीण महिलाएं, स्वयं सहायता समूह (SHG) और किसान उत्पादक संगठन।"
    },
    benefits: {
      en: "35% capital subsidy up to ₹10 Lakhs on machinery. Seed capital of ₹40,000 per SHG member for small equipment and working capital.",
      hi: "मशीनरी खरीद पर 35% तक सब्सिडी (अधिकतम ₹10 लाख)। स्वयं सहायता समूह की प्रत्येक सदस्य को छोटे औजार व कार्यशील पूंजी हेतु ₹40,000 का सीड कैपिटल।"
    },
    requiredDocuments: [
      { en: "Aadhaar Card and Electricity Bill", hi: "आधार कार्ड और कार्यस्थल का बिजली बिल" },
      { en: "Machinery quotation from authorized manufacturer", hi: "अधिकृत मशीन निर्माता से कोटेशन" },
      { en: "Bank Passbook of active account", hi: "सक्रिय बैंक खाते की पासबुक" },
      { en: "FSSAI Basic Registration (guidance provided by DRP)", hi: "एफएसएसएआई बेसिक रजिस्ट्रेशन (DRP द्वारा सहायता उपलब्ध)" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Connect with District Resource Person (DRP)", hi: "जिला रिसोर्स पर्सन (DRP) से संपर्क करें" },
        detail: { en: "Every district has appointed DRPs who provide free assistance in making business plans and FSSAI applications.", hi: "हर जिले में नियुक्त DRP अधिकारी मुफ्त में आपकी प्रोजेक्ट रिपोर्ट बनाने और FSSAI आवेदन में मदद करते हैं।" }
      },
      {
        stepNumber: 2,
        title: { en: "Submit Application on PMFME Portal", hi: "PMFME ऑनलाइन पोर्टल पर आवेदन करें" },
        detail: { en: "Fill the application with machinery details and choose your preferred local lending bank.", hi: "मशीन की जानकारी दर्ज कर अपने बैंक का चयन करें और ऑनलाइन फॉर्म सबमिट करें।" }
      }
    ]
  },
  {
    id: "saras-mela-exhibitions",
    title: {
      en: "SARAS Mela & Hunar Haat National Exhibitions",
      hi: "सरस मेला एवं हुनर हाट राष्ट्रीय प्रदर्शनियां"
    },
    description: {
      en: "Premier national and state-level exhibitions organised by Ministry of Rural Development, offering free stalls to rural artisan women to sell directly to metro and urban consumers without intermediaries.",
      hi: "ग्रामीण विकास मंत्रालय द्वारा आयोजित भव्य राष्ट्रीय व राज्य स्तरीय प्रदर्शनियां। ग्रामीण महिला दस्तकारों को बड़े शहरों में सीधे ग्राहकों को उत्पाद बेचने हेतु निशुल्क स्टॉल, यात्रा और रहने की सुविधा।"
    },
    category: "branding-marketing",
    categoryLabel: {
      en: "Branding & Marketing",
      hi: "ब्रांडिंग और मार्केटिंग"
    },
    type: "market-opportunity",
    typeLabel: {
      en: "Market Opportunity",
      hi: "बाजार का अवसर"
    },
    sourceName: "Ministry of Rural Development (MoRD) / CAPART",
    sourceUrl: "https://aajeevika.gov.in/",
    isVerifiedOfficial: true,
    isSampleDemo: false,
    verifiedDate: "October 2026",
    icon: "Share2",
    featured: false,
    tags: ["exhibition", "urban-market", "handicrafts", "food-festivals", "direct-cash-sales"],
    eligibility: {
      en: "Artisans, weavers, and food producers associated with registered SHGs or Village Organizations under State Livelihood Missions.",
      hi: "राज्य आजीविका मिशन के तहत पंजीकृत SHG, ग्राम संगठन से जुड़ी दस्तकार, बुनकर और खाद्य उत्पादक दीदियां।"
    },
    benefits: {
      en: "Free exhibition stall, daily transport allowance, free safe dormitory stay, and 100% direct cash/UPI sales retention.",
      hi: "मुफ्त स्टॉल, आने-जाने का यात्रा भत्ता, सुरक्षित आवास और भोजन व्यवस्था, और 100% सीधी नकद/UPI बिक्री आय।"
    },
    requiredDocuments: [
      { en: "SHG Recommendation letter from Block Mission Manager (BMM)", hi: "ब्लॉक मिशन मैनेजर (BMM) से अनुशंसा पत्र" },
      { en: "Artisan Card / Pehchan Card (if handicraft/handloom)", hi: "दस्तकार पहचान पत्र (हथकरघा/हस्तशिल्प हेतु यदि उपलब्ध हो)" },
      { en: "Aadhaar Card and Bank details", hi: "आधार कार्ड और बैंक खाता विवरण" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Apply via Block Livelihood Mission (BMM)", hi: "ब्लॉक आजीविका मिशन (BMM) कार्यालय में आवेदन दें" },
        detail: { en: "Submit sample product photos to your Block Coordinator 6-8 weeks before scheduled seasonal SARAS melas.", hi: "आगामी मेलों के कैलेंडर के अनुसार अपने उत्पाद के नमूने ब्लॉक समन्वयक को दिखाकर नाम नामांकित कराएं।" }
      },
      {
        stepNumber: 2,
        title: { en: "Prepare Adequate Inventory and Packaging", hi: "पर्याप्त माल और आकर्षक पैकेजिंग तैयार करें" },
        detail: { en: "Stock enough finished goods, price tags, visiting cards, and UPI QR code standees.", hi: "सटीक मूल्य पर्ची, विजिटिंग कार्ड और यूपीआई क्यूआर कोड स्टैंडी के साथ पर्याप्त तैयार माल पैक करें।" }
      }
    ]
  },
  {
    id: "ondc-rural-selling",
    title: {
      en: "Selling on ONDC (Open Network for Digital Commerce)",
      hi: "ONDC (ओपन नेटवर्क फॉर डिजिटल कॉमर्स) पर ग्रामीण उत्पादों की बिक्री"
    },
    description: {
      en: "Government-backed open network allowing rural producers to sell products across buyer apps like Paytm, Mystore, and Pincode without heavy commission cuts.",
      hi: "भारत सरकार की खुली डिजिटल कॉमर्स व्यवस्था, जिसके जरिए ग्रामीण उत्पादक बिना भारी कमीशन दिए पेटीएम, मायस्टोर आदि ऐप्स पर पूरे देश के ग्राहकों को सामान बेच सकते हैं।"
    },
    category: "digital-selling",
    categoryLabel: {
      en: "Digital Selling",
      hi: "डिजिटल बिक्री"
    },
    type: "market-opportunity",
    typeLabel: {
      en: "Market Opportunity",
      hi: "बाजार का अवसर"
    },
    sourceName: "Department for Promotion of Industry and Internal Trade (DPIIT)",
    sourceUrl: "https://ondc.org/",
    isVerifiedOfficial: true,
    isSampleDemo: false,
    verifiedDate: "October 2026",
    icon: "ShoppingBag",
    featured: false,
    tags: ["ondc", "ecommerce", "zero-middlemen", "pan-india-sales", "digital-india"],
    eligibility: {
      en: "Rural micro-entrepreneurs, craftswomen, SHG collectives with a bank account and GST or Udyam registration (exemption thresholds apply for small sellers).",
      hi: "ग्रामीण लघु उद्यमी, हस्तशिल्प निर्माता, SHG समूह जिनके पास बैंक खाता और उद्यम रजिस्ट्रेशन उपलब्ध है।"
    },
    benefits: {
      en: "Reach nationwide buyers without locking yourself to a single corporate marketplace. Extremely low transaction commissions.",
      hi: "किसी एक निजी कंपनी के भरोसे रहे बिना पूरे भारत के खरीदारों तक सीधी पहुंच। नाममात्र का कमीशन और लॉजिस्टिक्स पार्टनर की सीधी सुविधा।"
    },
    requiredDocuments: [
      { en: "Udyam Registration Certificate (Free 5-min online registration)", hi: "उद्यम रजिस्ट्रेशन प्रमाण पत्र (मुफ्त ऑनलाइन)" },
      { en: "PAN Card and Bank Account", hi: "पैन कार्ड और बैंक खाता विवरण" },
      { en: "Product photos with transparent weights & prices", hi: "उत्पाद के वजन व मूल्य के साथ स्पष्ट तस्वीरें" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Register with an ONDC Seller App (e.g., Mystore, SellerApp)", hi: "किसी ONDC सेलर ऐप पर मुफ्त खाता बनाएं" },
        detail: { en: "Download the seller application or request SRLM / CSC VLE center to assist in signup.", hi: "सेलर ऐप डाउनलोड करें या नजदीकी सीएससी (CSC) सेंटर की सहायता से सेलर आईडी बनाएं।" }
      },
      {
        stepNumber: 2,
        title: { en: "List Your Items", hi: "सामान की सूची और फोटो जोड़ें" },
        detail: { en: "Upload details of your hand-made items, set fair prices, and specify courier pickup address.", hi: "हाथ से बने सामान की सूची डालें, सही दाम रखें और कूरियर पिकअप का पता दर्ज करें।" }
      }
    ]
  },
  {
    id: "pricing-and-profit-basics",
    title: {
      en: "Simple Pricing & Profit Calculation Guide for Village Businesses",
      hi: "ग्रामीण व्यवसाय के लिए सही मूल्य निर्धारण और मुनाफा गणना गाइड"
    },
    description: {
      en: "A step-by-step practical guide to calculating production cost, labor wage, transport, wastage, and healthy 20-30% profit margin so you never sell at a loss.",
      hi: "कच्चे माल की लागत, अपनी मेहनत की मजदूरी, भाड़ा, टूट-फूट और 20-30% सही मुनाफा जोड़कर सही दाम तय करने की आसान मार्गदर्शिका।"
    },
    category: "finance-pricing",
    categoryLabel: {
      en: "Pricing & Finance Basics",
      hi: "मूल्य निर्धारण और वित्त"
    },
    type: "learning-resource",
    typeLabel: {
      en: "Learning Resource",
      hi: "सीखने की सामग्री"
    },
    sourceName: "UdaanSaheli Business Literacy Toolkit",
    sourceUrl: "https://www.dcmsme.gov.in/",
    isVerifiedOfficial: false,
    isSampleDemo: false,
    verifiedDate: "October 2026",
    icon: "TrendingUp",
    featured: true,
    tags: ["pricing-formula", "profit-margin", "bookkeeping", "cost-management"],
    eligibility: {
      en: "Applicable to any micro-entrepreneur making food items, apparel, handicrafts, or offering services.",
      hi: "खाद्य उत्पाद, कपड़े, हस्तशिल्प या स्थानीय सेवाएं देने वाली प्रत्येक महिला उद्यमी के लिए उपयोगी।"
    },
    benefits: {
      en: "Avoid under-pricing your hard work. Understand hidden costs like electricity, fuel, delivery, and personal time.",
      hi: "अपनी मेहनत को कम कीमत पर बेचने से बचें। बिजली, ईंधन, मजदूरी और पैकेजिंग के छिपे खर्चों को समझकर सही बचत करें।"
    },
    requiredDocuments: [
      { en: "Simple notebook and pencil for daily ledger", hi: "दैनिक हिसाब-किताब के लिए एक सादी कॉपी और पेंसिल" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Calculate Direct Material Cost", hi: "कच्चे माल की सटीक लागत निकालें" },
        detail: { en: "Add up every rupee spent on fabric, thread, flour, oil, spices, or containers per unit batch.", hi: "एक बैच में लगे कपड़े, धागे, तेल, मसाले या डिब्बों के एक-एक रुपये का हिसाब जोड़ें।" }
      },
      {
        stepNumber: 2,
        title: { en: "Always Pay Yourself a Fair Labor Wage", hi: "अपनी मेहनत का मेहनताना (मजदूरी) अवश्य जोड़ें" },
        detail: { en: "If you work 4 hours on a garment or batch, calculate your wage at prevailing local rate (e.g. ₹60-₹80/hr). Rural women often forget to pay themselves!", hi: "यदि आपने किसी काम में 4 घंटे लगाए, तो अपनी मजदूरी अवश्य जोड़ें। ग्रामीण महिलाएं अक्सर अपनी मेहनत का पैसा जोड़ना भूल जाती हैं!" }
      },
      {
        stepNumber: 3,
        title: { en: "Add 10% for Overhead & Wastage", hi: "10% ऊपरी खर्च और टूट-फूट के लिए जोड़ें" },
        detail: { en: "Factor in fuel/gas, electricity, transport to town, and packaging bags.", hi: "गैस, बिजली, बाजार जाने का टेम्पो भाड़ा और पैकिंग थैली का खर्च जोड़ें।" }
      },
      {
        stepNumber: 4,
        title: { en: "Add 20% to 25% Pure Profit Margin", hi: "20% से 25% शुद्ध मुनाफा जोड़ें" },
        detail: { en: "Formula: Final Selling Price = (Material + Labor + Overhead) × 1.25. This profit funds your business growth and savings.", hi: "सूत्र: बिक्री मूल्य = (कच्चा माल + मजदूरी + अन्य खर्च) × 1.25। यही मुनाफा आपके व्यापार को बढ़ाएगा।" }
      }
    ]
  },
  {
    id: "low-cost-packaging-guide",
    title: {
      en: "Smart, Hygienic & Eco-Friendly Packaging on a Budget",
      hi: "कम लागत में सुरक्षित, स्वच्छ और आकर्षक ईको-फ्रेंडली पैकेजिंग"
    },
    description: {
      en: "Learn how to use moisture-proof food pouches, handmade paper labels, jute tags, and tamper-evident seals to increase product value by 2x.",
      hi: "सीखें कि कैसे साधारण हस्तनिर्मित कागज, जूट डोरी, स्वच्छ नमी-रोधी पाउच और सुंदर लेबल लगाकर अपने उत्पाद की कीमत और ग्राहकों का भरोसा दोगुना करें।"
    },
    category: "product-packaging",
    categoryLabel: {
      en: "Product Improvement & Packaging",
      hi: "उत्पाद सुधार और पैकेजिंग"
    },
    type: "learning-resource",
    typeLabel: {
      en: "Learning Resource",
      hi: "सीखने की सामग्री"
    },
    sourceName: "Indian Institute of Packaging (IIP) Guidelines",
    sourceUrl: "https://www.iip-in.com/",
    isVerifiedOfficial: false,
    isSampleDemo: false,
    verifiedDate: "October 2026",
    icon: "Package",
    featured: false,
    tags: ["packaging", "hygiene", "eco-friendly", "branding", "product-presentation"],
    eligibility: {
      en: "Artisans, rural food makers, handloom weavers, organic farmers.",
      hi: "हस्तशिल्पी, ग्रामीण खाद्य निर्माता, हथकरघा बुनकर, जैविक उत्पादक।"
    },
    benefits: {
      en: "Products look professional and fetch premium prices in weekly haats and city exhibitions.",
      hi: "उत्पाद बाजार में पेशेवर दिखते हैं और हाट-मेलों में ग्राहक खुशी से अच्छा दाम देते हैं।"
    },
    requiredDocuments: [],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Use Food-Grade Stand-Up Pouches for Edibles", hi: "खाने की वस्तुओं के लिए फूड-ग्रेड स्टैंड-अप पाउच का प्रयोग करें" },
        detail: { en: "Zipper pouches prevent moisture and keep snacks crispy for months.", hi: "जिपर पाउच सीलन रोकते हैं और नमकीन-पापड़-अचार को महीनों तक ताजा व कुरकुरा रखते हैं।" }
      },
      {
        stepNumber: 2,
        title: { en: "Affix a Clear Information Label", hi: "स्पष्ट सूचना वाला लेबल लगाएं" },
        detail: { en: "Label must clearly state: Brand Name, Ingredients, Net Weight, Packing Date, Best Before, and Contact Phone/WhatsApp.", hi: "लेबल पर नाम, सामग्री, शुद्ध वजन, पैकिंग तारीख, उपयोग की अंतिम तिथि और फोन/व्हाट्सएप नंबर जरूर लिखें।" }
      }
    ]
  },
  {
    id: "digital-selling-whatsapp-upi",
    title: {
      en: "Mastering WhatsApp Business & Safe UPI Payments for Village Sellers",
      hi: "ग्रामीण विक्रेताओं के लिए व्हाट्सएप बिजनेस और सुरक्षित यूपीआई से बिक्री"
    },
    description: {
      en: "Set up a professional product catalog on WhatsApp Business, share photos with customers, receive instant orders, and accept payments safely via PhonePe/GPay/BHIM QR code without payment fraud.",
      hi: "व्हाट्सएप बिजनेस पर अपने सामान का कैटलॉग बनाएं, ग्राहकों को फोटो भेजें, नए ऑर्डर लें और धोखाधड़ी से बचते हुए फोनपे/गूगल-पे/भीम क्यूआर कोड से सुरक्षित भुगतान लें।"
    },
    category: "digital-selling",
    categoryLabel: {
      en: "Digital Selling",
      hi: "डिजिटल बिक्री"
    },
    type: "learning-resource",
    typeLabel: {
      en: "Learning Resource",
      hi: "सीखने की सामग्री"
    },
    sourceName: "National Payments Corporation of India (NPCI) & Digital Sakhi",
    sourceUrl: "https://www.npci.org.in/",
    isVerifiedOfficial: false,
    isSampleDemo: false,
    verifiedDate: "October 2026",
    icon: "Smartphone",
    featured: true,
    tags: ["whatsapp-business", "upi-safety", "digital-payments", "qr-code", "catalog"],
    eligibility: {
      en: "Any woman entrepreneur with an Android smartphone and basic internet connection.",
      hi: "एंड्रॉइड स्मार्टफोन और सामान्य इंटरनेट का उपयोग करने वाली कोई भी महिला उद्यमी।"
    },
    benefits: {
      en: "Receive payment directly into your bank account. Avoid lending on credit and eliminate physical cash handling hassles.",
      hi: "सीधे बैंक खाते में पैसा प्राप्त करें। उधारी से मुक्ति पाएं और नकली नोट या छुट्टे पैसों के झंझट से बचें।"
    },
    requiredDocuments: [
      { en: "Aadhaar-linked Bank Account and Mobile number", hi: "आधार से जुड़ा बैंक खाता और चालू सिम कार्ड" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Download WhatsApp Business from Google Play Store", hi: "गूगल प्ले स्टोर से 'व्हाट्सएप बिजनेस' डाउनलोड करें" },
        detail: { en: "Set up your business profile with your craft/business name, shop address, and working hours.", hi: "अपनी दुकान या काम के नाम, पते और काम के समय के साथ अपना बिजनेस प्रोफाइल बनाएं।" }
      },
      {
        stepNumber: 2,
        title: { en: "Create a Product Catalog", hi: "प्रोडक्ट कैटलॉग (सामान की सूची) बनाएं" },
        detail: { en: "Take well-lit photos of your items on a clean white cloth or wooden table, add price and description.", hi: "साफ सफेद कपड़े या मेज पर रखकर सामान की अच्छी तस्वीरें लें, मूल्य और विवरण जोड़ें।" }
      },
      {
        stepNumber: 3,
        title: { en: "Golden Rule of UPI Safety", hi: "सुरक्षित यूपीआई का सुनहरा नियम" },
        detail: { en: "NEVER enter your UPI PIN to receive money! A PIN is ONLY entered when YOU are sending money to someone else.", hi: "पैसा प्राप्त करने के लिए कभी भी अपना यूपीआई पिन (PIN) दर्ज न करें! पिन केवल तब डाला जाता है जब आप किसी को पैसे भेज रहे हों।" }
      }
    ]
  },
  {
    id: "starting-lean-business",
    title: {
      en: "How to Start a Micro-Business with Low Initial Capital",
      hi: "कम पूंजी में छोटा व्यवसाय कैसे शुरू करें"
    },
    description: {
      en: "Practical techniques for validating customer demand, borrowing equipment before buying, taking advance orders, and starting small without getting into high-interest debt.",
      hi: "भारी कर्ज लिए बिना अग्रिम (एडवांस) ऑर्डर लेकर, मशीन खरीदने से पहले किराए पर लेकर और छोटे स्तर से मांग परखकर सुरक्षित शुरुआत करने के नियम।"
    },
    category: "starting-business",
    categoryLabel: {
      en: "Starting a Small Business",
      hi: "छोटा व्यवसाय शुरू करना"
    },
    type: "learning-resource",
    typeLabel: {
      en: "Learning Resource",
      hi: "सीखने की सामग्री"
    },
    sourceName: "National Institute for Micro, Small and Medium Enterprises (ni-msme)",
    sourceUrl: "https://www.nimsme.org/",
    isVerifiedOfficial: false,
    isSampleDemo: false,
    verifiedDate: "October 2026",
    icon: "BookOpen",
    featured: false,
    tags: ["lean-startup", "debt-free", "advance-orders", "risk-management"],
    eligibility: {
      en: "First-time women entrepreneurs in villages and semi-urban clusters.",
      hi: "गांवों और कस्बों में पहली बार व्यापार शुरू करने वाली महिलाएं।"
    },
    benefits: {
      en: "Protects family savings and avoids predatory local moneylenders charging high compound interest.",
      hi: "परिवार की जमा पूंजी सुरक्षित रहती है और महंगे सूदखोरों के भारी ब्याज चक्र से बचाव होता है।"
    },
    requiredDocuments: [],
    steps: [
      {
        stepNumber: 1,
        title: { en: "Test with Friends, Family & Weekly Haat", hi: "सहेलियों, परिवार और स्थानीय हाट में पहले टेस्ट करें" },
        detail: { en: "Make a small batch of 10-20 pieces first. Ask for honest feedback on taste, durability, and price.", hi: "शुरुआत में केवल 10-20 पीस बनाएं। स्वाद, मजबूती और कीमत पर खरीदारों से सच्ची राय लें।" }
      },
      {
        stepNumber: 2,
        title: { en: "Take 50% Advance on Custom Orders", hi: "बड़े ऑर्डर पर 50% पेशगी (एडवांस) लें" },
        detail: { en: "Use customer advance to purchase raw materials rather than taking loans from outside.", hi: "ग्राहक से मिले एडवांस से ही कच्चा माल खरीदें, ताकि आपको बाहर से ब्याज पर पैसा न लेना पड़े।" }
      }
    ]
  }
];

export const initialCategories = [
  {
    id: "starting-business",
    name: { en: "Starting a Small Business", hi: "छोटा व्यवसाय शुरू करना" },
    description: { en: "Idea validation, lean setup, and initial steps for rural micro-enterprises.", hi: "व्यापार का विचार, कम पूंजी में शुरुआत और पहले महत्वपूर्ण कदम।" },
    icon: "Award",
    color: "bg-orange-500 text-white"
  },
  {
    id: "business-planning",
    name: { en: "Business Planning", hi: "व्यवसाय योजना बनाना" },
    description: { en: "Step-by-step roadmaps, inventory management, and free vocational training.", hi: "कदम-दर-कदम रोडमैप, माल प्रबंधन और मुफ्त सरकारी प्रशिक्षण।" },
    icon: "BookOpen",
    color: "bg-amber-600 text-white"
  },
  {
    id: "finance-pricing",
    name: { en: "Pricing & Finance Basics", hi: "मूल्य निर्धारण और वित्त" },
    description: { en: "Cost formulas, bank loans without collateral, Mudra, and bookkeeping.", hi: "सटीक मूल्य सूत्र, बिना गारंटी सरकारी ऋण, मुद्रा योजना और हिसाब-किताब।" },
    icon: "TrendingUp",
    color: "bg-emerald-600 text-white"
  },
  {
    id: "product-packaging",
    name: { en: "Product Improvement & Packaging", hi: "उत्पाद सुधार और पैकेजिंग" },
    description: { en: "Quality enhancement, food safety guidelines, and eco-friendly packaging.", hi: "गुणवत्ता सुधार, खाद्य सुरक्षा नियम और कम लागत में आकर्षक पैकेजिंग।" },
    icon: "Package",
    color: "bg-stone-700 text-white"
  },
  {
    id: "branding-marketing",
    name: { en: "Branding & Marketing", hi: "ब्रांडिंग और मार्केटिंग" },
    description: { en: "Creating an identity, customer trust, and national exhibition stalls.", hi: "अपनी पहचान बनाना, ग्राहकों का भरोसा और राष्ट्रीय हाट-मेलों में भागीदारी।" },
    icon: "Share2",
    color: "bg-rose-600 text-white"
  },
  {
    id: "digital-selling",
    name: { en: "Digital Selling", hi: "डिजिटल बिक्री" },
    description: { en: "Selling via WhatsApp Business, QR code payments, GeM, and ONDC.", hi: "व्हाट्सएप, क्यूआर कोड, सरकारी GeM पोर्टल और ONDC से सीधी बिक्री।" },
    icon: "Smartphone",
    color: "bg-blue-600 text-white"
  }
];
