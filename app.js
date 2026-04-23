/* جدد حياتك — RENEW YOUR LIFE — app.js v2.0 */
/* Based on "Jaddid Hayatak" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'جدد حياتك',
    splashSub: 'حكمة إسلامية لتجديد الحياة',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الشرح ٩٤: ٥-٦',
    tabHome: 'الرئيسية', tabPrinciples: 'المبادئ', tabAnxiety: 'السكينة',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    principlesTitle: 'مبادئ التجديد',
    principlesDesc: 'كل مبدأ يجمع بين حكمة كارنيجي العملية وتعاليم الإسلام الخالدة — بلغة بسيطة للجميع',
    anxietyTitle: 'من القلق إلى السكينة',
    anxietyDesc: 'كيف عالج الإسلام القلق قبل كتب التنمية البشرية بـ ١٤٠٠ سنة',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من الكتاب — تتبّع تقدمك يومياً',
    quizTitle: 'اختبر حياتك',
    quizDesc: 'هل حياتك بحاجة للتجديد؟ أجب بصدق',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الصباح والمساء',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ فكرة اليوم',
    carnegie: 'كارنيجي',
    ghazali: 'الغزالي',
    problem: '😰 المشكلة',
    solution: '😌 الحل الإسلامي',
    action: '💡 طبّق الآن',
    quizAgain: 'أعد الاختبار',
    verse: 'الآية',
    chapter: 'الفصل',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في المبادئ...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    splashFeatures: [
      '٢٦ مبدأ من كتاب جدد حياتك',
      'من القلق إلى السكينة — ٨ حلول إسلامية',
      'عادات يومية مع تتبع مستمر',
      'اختبار ذاتي + أدعية يومية'
    ],
  },
  en: {
    appTitle: 'Renew Your Life',
    splashSub: 'Islamic wisdom for a renewed life',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Ash-Sharh 94:5-6',
    tabHome: 'Home', tabPrinciples: 'Principles', tabAnxiety: 'Peace',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    principlesTitle: 'Renewal Principles',
    principlesDesc: 'Each principle pairs Carnegie\'s practical wisdom with Islam\'s timeless teachings — in simple language for everyone',
    anxietyTitle: 'From Anxiety to Peace',
    anxietyDesc: 'How Islam addressed anxiety 1,400 years before modern self-help books',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by the book — track your daily progress',
    quizTitle: 'Test Your Life',
    quizDesc: 'Does your life need renewal? Answer honestly',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Morning & Evening Duas',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Insight',
    carnegie: 'Carnegie',
    ghazali: 'Al-Ghazali',
    problem: '😰 The Problem',
    solution: '😌 The Islamic Solution',
    action: '💡 Apply Now',
    quizAgain: 'Retake Quiz',
    verse: 'Verse',
    chapter: 'Chapter',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    share: 'Share',
    searchPlaceholder: 'Search principles...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    splashFeatures: [
      '26 principles from Renew Your Life',
      'From anxiety to peace — 8 Islamic solutions',
      'Daily habits with streak tracking',
      'Self-quiz + daily duas'
    ],
  },
  fr: {
    appTitle: 'Renouvelle ta Vie',
    splashSub: 'Sagesse islamique pour une vie renouvelée',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Ash-Sharh 94:5-6',
    tabHome: 'Accueil', tabPrinciples: 'Principes', tabAnxiety: 'Paix',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    principlesTitle: 'Principes de Renouveau',
    principlesDesc: 'Chaque principe associe la sagesse pratique de Carnegie aux enseignements éternels de l\'Islam — en langage simple pour tous',
    anxietyTitle: 'De l\'Anxiété à la Paix',
    anxietyDesc: 'Comment l\'Islam a traité l\'anxiété 1 400 ans avant les livres de développement personnel',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspirées du livre — suivez vos progrès',
    quizTitle: 'Testez Votre Vie',
    quizDesc: 'Votre vie a-t-elle besoin de renouveau ? Répondez honnêtement',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas du Matin et du Soir',
    resetBtn: 'Réinitialiser',
    submitQuiz: 'Voir les Résultats',
    dailyLabel: '✨ Pensée du Jour',
    carnegie: 'Carnegie',
    ghazali: 'Al-Ghazali',
    problem: '😰 Le Problème',
    solution: '😌 La Solution Islamique',
    action: '💡 Appliquez Maintenant',
    quizAgain: 'Refaire le Quiz',
    verse: 'Verset',
    chapter: 'Chapitre',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les principes...',
    streakMsg: 'jours consécutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    splashFeatures: [
      '26 principes de Renouvelle ta Vie',
      'De l\'anxiété à la paix — 8 solutions islamiques',
      'Habitudes quotidiennes avec suivi',
      'Quiz + duas quotidiennes'
    ],
  }
};

// ═══════════════ PRINCIPLES DATA (all 26 chapters) ═══════════════
const PRINCIPLES = [
  {
    id:1, emoji:'🌅',
    ar:{title:'جدد حياتك',desc:'يدعو الغزالي في "جدد حياتك": التجديد يبدأ من الداخل. عندما تواجه الحياة ببصيرة وعزيمة، لا تستطيع الظروف كسرك مهما كانت قاسية.',carnegie:'كارنيجي يقول: "ابدأ كل يوم كأنه يوم جديد"',ghazali:'الغزالي يقول: الإسلام دين الفطرة، وكل حكمة وصل إليها كارنيجي بالتجربة، علّمها الإسلام بالوحي قبل ١٤٠٠ سنة',action:'ابدأ صباحك بنية واضحة: ماذا ستجدد اليوم؟'},
    en:{title:'Renew Your Life',desc:'Al-Ghazali calls in "Renew Your Life": Renewal starts from within. When you face life with insight and resolve, no circumstances can break you, no matter how harsh.',carnegie:'Carnegie says: "Start each day as if it were a new day"',ghazali:'Al-Ghazali says: Islam is the religion of natural disposition. Every wisdom Carnegie discovered through experience, Islam taught through revelation 1,400 years earlier',action:'Start your morning with a clear intention: what will you renew today?'},
    fr:{title:'Renouvelle ta Vie',desc:'Al-Ghazali appelle dans "Renouvelle ta Vie": Le renouveau commence de l\'intérieur. Face à la vie avec clairvoyance et détermination, aucune circonstance ne peut vous briser.',carnegie:'Carnegie dit : « Commencez chaque jour comme un jour nouveau »',ghazali:'Al-Ghazali dit : L\'Islam est la religion de la nature humaine. Chaque sagesse que Carnegie a découverte par l\'expérience, l\'Islam l\'a enseignée par la révélation il y a 1 400 ans',action:'Commencez votre matin avec une intention claire : que renouvellerez-vous aujourd\'hui ?'}
  },
  {
    id:2, emoji:'📅',
    ar:{title:'عش في حدود يومك',desc:'يدعو الغزالي في "جدد حياتك": لا تحمل هموم الغد ولا أحزان الأمس. عش يومك الحاضر بكل طاقتك.',carnegie:'كارنيجي يقول: "أغلق أبواب الأمس والغد، وعش في حدود اليوم"',ghazali:'الغزالي يذكر حديث: "من أصبح آمناً في سربه، معافى في بدنه، عنده قوت يومه، فكأنما حيزت له الدنيا بحذافيرها"',action:'قبل النوم اكتب ٣ أشياء جيدة حدثت اليوم — لا تفكر في الغد'},
    en:{title:'Live Within Your Day',desc:'Al-Ghazali calls in "Renew Your Life": Don\'t carry tomorrow\'s worries or yesterday\'s sorrows. Live today with all your energy.',carnegie:'Carnegie says: "Shut the iron doors on the past and future — live in day-tight compartments"',ghazali:'Al-Ghazali cites the hadith: "Whoever wakes up safe, healthy, and with today\'s provision — it is as if the whole world has been gathered for them"',action:'Before sleep, write 3 good things that happened today — don\'t think about tomorrow'},
    fr:{title:'Vis dans les Limites de ta Journée',desc:'Al-Ghazali appelle dans "Renouvelle ta Vie": Ne portez pas les soucis de demain ni les chagrins d\'hier. Vivez aujourd\'hui avec toute votre énergie.',carnegie:'Carnegie dit : « Fermez les portes sur le passé et le futur — vivez jour par jour »',ghazali:'Al-Ghazali cite le hadith : « Celui qui se réveille en sécurité, en bonne santé, avec la nourriture du jour — c\'est comme si le monde entier lui avait été donné »',action:'Avant de dormir, écrivez 3 bonnes choses qui se sont passées aujourd\'hui'}
  },
  {
    id:3, emoji:'💪',
    ar:{title:'الثبات والأناة',desc:'يدعو الغزالي في "جدد حياتك": الثبات ليس عناداً. هو أن تستمر في الطريق الصحيح رغم الصعوبات، بصبر وحكمة.',carnegie:'كارنيجي يقول: "اجعل قرارك ثم انطلق ولا تلتفت"',ghazali:'الغزالي يقول: المسلم يجمع بين الحزم والرفق — يقرر بعقل ويمضي بتوكل على الله',action:'حدد مشكلة واحدة تؤجلها — اتخذ قراراً بشأنها الآن'},
    en:{title:'Steadfastness and Patience',desc:'Al-Ghazali calls in "Renew Your Life": Steadfastness isn\'t stubbornness. It\'s continuing on the right path despite difficulties, with patience and wisdom.',carnegie:'Carnegie says: "Make your decision, then move forward without looking back"',ghazali:'Al-Ghazali says: A Muslim combines firmness with gentleness — decides with reason and proceeds with trust in God',action:'Identify one problem you\'ve been postponing — make a decision about it now'},
    fr:{title:'Constance et Patience',desc:'Al-Ghazali appelle dans "Renouvelle ta Vie": La constance n\'est pas de l\'obstination. C\'est continuer sur le bon chemin malgré les difficultés, avec patience et sagesse.',carnegie:'Carnegie dit : « Prenez votre décision, puis avancez sans regarder en arrière »',ghazali:'Al-Ghazali dit : Le musulman combine fermeté et douceur — décide avec raison et avance avec confiance en Dieu',action:'Identifiez un problème que vous reportez — prenez une décision maintenant'}
  },
  {
    id:4, emoji:'🧪',
    ar:{title:'هموم وسموم',desc:'يدعو الغزالي في "جدد حياتك": القلق يحوّل عصارات المعدة إلى سموم حقيقية. الهموم لا تدمر الروح فقط بل الجسد أيضاً.',carnegie:'كارنيجي يقول: "القلق يسبب أمراضاً جسدية حقيقية"',ghazali:'الغزالي يقول: الإيمان بالله هو الدواء الأول — "ألا بذكر الله تطمئن القلوب"',action:'عندما تشعر بالقلق، توقف وتنفس ٥ مرات عميقة مع ذكر الله'},
    en:{title:'Worries and Toxins',desc:'Al-Ghazali calls in "Renew Your Life": Anxiety literally turns digestive juices into toxins. Worries destroy not just the soul but the body too.',carnegie:'Carnegie says: "Worry causes real physical diseases"',ghazali:'Al-Ghazali says: Faith in God is the first remedy — "Truly, in the remembrance of God hearts find peace" (Quran 13:28)',action:'When you feel anxious, stop and take 5 deep breaths while remembering God'},
    fr:{title:'Soucis et Toxines',desc:'Al-Ghazali appelle dans "Renouvelle ta Vie": L\'anxiété transforme littéralement les sucs digestifs en toxines. Les soucis détruisent non seulement l\'âme mais aussi le corps.',carnegie:'Carnegie dit : « L\'inquiétude cause de vraies maladies physiques »',ghazali:'Al-Ghazali dit : La foi en Dieu est le premier remède — « C\'est dans le rappel de Dieu que les cœurs trouvent la paix » (Coran 13:28)',action:'Quand vous êtes anxieux, arrêtez-vous et prenez 5 respirations profondes en vous souvenant de Dieu'}
  },
  {
    id:5, emoji:'🔑',
    ar:{title:'كيف نزيل أسباب القلق؟',desc:'يدعو الغزالي في "جدد حياتك": حلّل المشكلة بعقل، اتخذ قراراً شجاعاً، ثم امضِ ولا تلتفت.',carnegie:'كارنيجي يقول: "اسأل نفسك: ما أسوأ ما يمكن أن يحدث؟ ثم استعد لقبوله"',ghazali:'الغزالي يقول: التوكل على الله ليس كسلاً — هو أن تبذل جهدك ثم تفوض أمرك لله',action:'اكتب مشكلة تقلقك الآن. ما أسوأ نتيجة؟ هل يمكنك تقبلها؟ ما أول خطوة عملية؟'},
    en:{title:'How to Eliminate Worry',desc:'Al-Ghazali calls in "Renew Your Life": Analyze the problem rationally, make a courageous decision, then move forward without looking back.',carnegie:'Carnegie says: "Ask yourself: what\'s the worst that can happen? Then prepare to accept it"',ghazali:'Al-Ghazali says: Trusting God isn\'t laziness — it\'s doing your best, then entrusting your affairs to God',action:'Write down a worry. What\'s the worst outcome? Can you accept it? What\'s the first practical step?'},
    fr:{title:'Comment Éliminer l\'Inquiétude',desc:'Al-Ghazali appelle dans "Renouvelle ta Vie": Analysez le problème rationnellement, prenez une décision courageuse, puis avancez sans regarder en arrière.',carnegie:'Carnegie dit : « Demandez-vous : quel est le pire qui puisse arriver ? Puis préparez-vous à l\'accepter »',ghazali:'Al-Ghazali dit : La confiance en Dieu n\'est pas de la paresse — c\'est faire de son mieux, puis confier ses affaires à Dieu',action:'Écrivez une inquiétude. Quel est le pire résultat ? Pouvez-vous l\'accepter ? Quelle est la première étape ?'}
  },
  {
    id:6, emoji:'🌱',
    ar:{title:'علم أثمره العمل',desc:'يدعو الغزالي في "جدد حياتك": العلم بلا عمل كالشجرة بلا ثمر. لا تجمع المعرفة دون أن تطبقها.',carnegie:'كارنيجي يقول: "المعرفة بلا تطبيق لا قيمة لها"',ghazali:'الغزالي يقول: الصلوات الخمس هي تطبيق يومي للإيمان — ليست مجرد طقوس بل محطات تجديد',action:'اختر شيئاً واحداً تعلمته هذا الأسبوع وطبقه اليوم'},
    en:{title:'Knowledge Through Action',desc:'Al-Ghazali calls in "Renew Your Life": Knowledge without action is like a tree without fruit. Don\'t accumulate knowledge without applying it.',carnegie:'Carnegie says: "Knowledge without application has no value"',ghazali:'Al-Ghazali says: The five daily prayers are daily application of faith — not mere rituals but renewal stations',action:'Choose one thing you learned this week and apply it today'},
    fr:{title:'Le Savoir par l\'Action',desc:'Al-Ghazali appelle dans "Renouvelle ta Vie": Le savoir sans action est comme un arbre sans fruit. N\'accumulez pas les connaissances sans les appliquer.',carnegie:'Carnegie dit : « Le savoir sans application n\'a aucune valeur »',ghazali:'Al-Ghazali dit : Les cinq prières quotidiennes sont l\'application quotidienne de la foi — pas de simples rituels mais des stations de renouveau',action:'Choisissez une chose apprise cette semaine et appliquez-la aujourd\'hui'}
  },
  {
    id:7, emoji:'⏰',
    ar:{title:'آفات الفراغ',desc:'الفراغ حاضنة لألف رذيلة. العاطل عن العمل ميت روحياً حتى لو كان حياً جسدياً.',carnegie:'كارنيجي يقول: "اشغل نفسك — العقل المشغول لا يقلق"',ghazali:'الغزالي يستدل بآية: "ما جعل الله لرجل من قلبين في جوفه" — لا يمكنك أن تقلق وتعمل في نفس الوقت',action:'إذا شعرت بالفراغ الآن: قم بترتيب مكتبك، أو اتصل بصديق، أو اقرأ صفحة من كتاب'},
    en:{title:'The Afflictions of Idleness',desc:'Idleness is an incubator for a thousand vices. The idle person is spiritually dead even while physically alive.',carnegie:'Carnegie says: "Keep busy — a busy mind cannot worry at the same time"',ghazali:'Al-Ghazali cites the verse: "God has not made for any person two hearts within their body" (33:4) — you cannot worry and work simultaneously',action:'If you feel idle right now: organize your desk, call a friend, or read a page of a book'},
    fr:{title:'Les Fléaux de l\'Oisiveté',desc:'L\'oisiveté est un incubateur de mille vices. L\'oisif est spirituellement mort même s\'il est physiquement vivant.',carnegie:'Carnegie dit : « Restez occupé — un esprit occupé ne peut pas s\'inquiéter en même temps »',ghazali:'Al-Ghazali cite le verset : « Dieu n\'a pas mis deux cœurs dans la poitrine de l\'homme » (33:4) — on ne peut pas s\'inquiéter et travailler en même temps',action:'Si vous êtes oisif maintenant : rangez votre bureau, appelez un ami, ou lisez une page d\'un livre'}
  },
  {
    id:8, emoji:'🎯',
    ar:{title:'لا تدع التوافه تغلبك',desc:'لا تضيع طاقتك على أشياء صغيرة لا تستحق. ركز على ما يهم حقاً.',carnegie:'كارنيجي يقول: "لا تنشر الخشب بمنشار صغير"',ghazali:'الغزالي يقول: المسلم يعرف أولوياته — الأمور الكبرى أولاً، والتوافه لا تستحق همك',action:'اسأل نفسك: هل سيهمني هذا بعد سنة؟ إن لم يكن، فلا تعطه من وقتك'},
    en:{title:'Don\'t Let Trivialities Win',desc:'Don\'t waste your energy on small things that don\'t matter. Focus on what truly counts.',carnegie:'Carnegie says: "Don\'t try to saw sawdust"',ghazali:'Al-Ghazali says: A Muslim knows their priorities — major matters first, trivialities don\'t deserve your worry',action:'Ask yourself: will this matter in a year? If not, don\'t give it your time'},
    fr:{title:'Ne Laissez Pas les Futilités Gagner',desc:'Al-Ghazali appelle dans "Renouvelle ta Vie": Ne gaspillez pas votre énergie sur des petites choses sans importance. Concentrez-vous sur ce qui compte vraiment.',carnegie:'Carnegie dit : « N\'essayez pas de scier de la sciure »',ghazali:'Al-Ghazali dit : Le musulman connaît ses priorités — les grandes choses d\'abord, les futilités ne méritent pas votre inquiétude',action:'Demandez-vous : est-ce que cela comptera dans un an ? Si non, n\'y consacrez pas votre temps'}
  },
  {
    id:9, emoji:'🙏',
    ar:{title:'قضاء وقدر',desc:'ما حدث قد حدث. القبول بقدر الله ليس ضعفاً بل قوة. الإيمان بالقدر يحرر القلب من ثقل الماضي ويفتح باب الأمل في المستقبل. المسلم يفرّق بين الاستسلام السلبي والرضا الإيجابي — فالرضا يعني بذل الجهد ثم تفويض الأمر لله.',carnegie:'كارنيجي يقول: "تعاون مع الحتمي — لا تقاوم ما لا يمكن تغييره"',ghazali:'الغزالي يقول: الإيمان بالقدر يمنحك سلاماً لا يجده من يعتمد على نفسه فقط. "ما أصاب من مصيبة في الأرض ولا في أنفسكم إلا في كتاب من قبل أن نبرأها" — كل شيء بتدبير الحكيم العليم',action:'فكر في شيء تقاومه ولا تستطيع تغييره — قل: "قدّر الله وما شاء فعل" وامضِ'},
    en:{title:'Divine Will and Destiny',desc:'What happened, happened. Accepting God\'s decree isn\'t weakness but strength. Belief in divine destiny frees the heart from the weight of the past and opens the door to hope. A Muslim distinguishes between passive surrender and positive acceptance — acceptance means doing your best, then entrusting the outcome to God.',carnegie:'Carnegie says: "Cooperate with the inevitable — don\'t fight what cannot be changed"',ghazali:'Al-Ghazali says: Belief in destiny gives you a peace that those who rely only on themselves can never find. "No disaster strikes upon the earth or among yourselves except that it is in a register before We bring it into being" — everything is by the decree of the All-Wise',action:'Think of something you\'re resisting but can\'t change — say "God decreed it and what He willed happened" and move on'},
    fr:{title:'Volonté et Destin Divin',desc:'Al-Ghazali appelle dans "Renouvelle ta Vie": Ce qui est arrivé est arrivé. Accepter le décret de Dieu n\'est pas une faiblesse mais une force. La croyance au destin divin libère le coeur du poids du passé et ouvre la porte de l\'espoir.',carnegie:'Carnegie dit : « Coopérez avec l\'inévitable — ne combattez pas ce qui ne peut être changé »',ghazali:'Al-Ghazali dit : La croyance au destin vous donne une paix que ceux qui ne comptent que sur eux-mêmes ne trouvent jamais. Tout est par le décret du Sage Omniscient',action:'Pensez à quelque chose que vous résistez mais ne pouvez changer — dites « Dieu l\'a décrété » et avancez'}
  },
  {
    id:10, emoji:'😢',
    ar:{title:'لا تبكِ على فائت',desc:'البكاء على الماضي مضيعة للحاضر. تعلّم من أخطائك ثم أغلق ذلك الباب.',carnegie:'كارنيجي يقول: "لا تبكِ على اللبن المسكوب"',ghazali:'الغزالي يقول: الحزن على الماضي نوع من الجحود بنعم الله الحاضرة',action:'اكتب درساً واحداً تعلمته من خطأ قديم — ثم اشكر الله عليه وامضِ'},
    en:{title:'Don\'t Cry Over the Past',desc:'Crying over the past wastes the present. Learn from your mistakes, then close that door.',carnegie:'Carnegie says: "Don\'t cry over spilt milk"',ghazali:'Al-Ghazali says: Grieving over the past is a form of ingratitude toward God\'s present blessings',action:'Write one lesson you learned from an old mistake — then thank God for it and move on'},
    fr:{title:'Ne Pleurez Pas le Passé',desc:'Pleurer le passé gaspille le présent. Apprenez de vos erreurs, puis fermez cette porte.',carnegie:'Carnegie dit : « Ne pleurez pas sur le lait renversé »',ghazali:'Al-Ghazali dit : Se lamenter sur le passé est une forme d\'ingratitude envers les bénédictions présentes de Dieu',action:'Écrivez une leçon tirée d\'une vieille erreur — puis remerciez Dieu et avancez'}
  },
  {
    id:11, emoji:'🧠',
    ar:{title:'حياتك من صنع أفكارك',desc:'سعادتك أو تعاستك تبدأ من داخل عقلك. غيّر أفكارك تتغير حياتك.',carnegie:'كارنيجي يقول: "أفكارنا هي التي تصنع عالمنا"',ghazali:'الغزالي يربط هذا بحسن الظن بالله — "أنا عند ظن عبدي بي" — فكّر بالله خيراً يأتِك الخير',action:'استبدل فكرة سلبية واحدة اليوم بأخرى إيجابية'},
    en:{title:'Your Life Is Your Thoughts',desc:'Your happiness or misery starts inside your mind. Change your thoughts and your life changes.',carnegie:'Carnegie says: "Our thoughts make our world"',ghazali:'Al-Ghazali links this to thinking well of God — "I am as My servant thinks of Me" (hadith) — think well of God and good will come',action:'Replace one negative thought today with a positive one'},
    fr:{title:'Votre Vie Est Vos Pensées',desc:'Votre bonheur ou malheur commence dans votre esprit. Changez vos pensées et votre vie change.',carnegie:'Carnegie dit : « Nos pensées créent notre monde »',ghazali:'Al-Ghazali lie cela au bon présage de Dieu — « Je suis tel que Mon serviteur pense de Moi » — pensez du bien de Dieu et le bien viendra',action:'Remplacez une pensée négative aujourd\'hui par une pensée positive'}
  },
  {
    id:12, emoji:'🍋',
    ar:{title:'اصنع من الليمون شراباً حلواً',desc:'لا تشتكِ من المصاعب — حوّلها إلى فرص. كل أنبياء الله حولوا المعاناة إلى انتصار.',carnegie:'كارنيجي يقول: "عندما تعطيك الحياة ليموناً، اصنع عصير ليمون"',ghazali:'الغزالي يستشهد بقصص الأنبياء الذين حولوا المحن إلى انتصارات بالصبر والتوكل',action:'حدد تحدياً تواجهه الآن — ما الفرصة المختبئة فيه؟'},
    en:{title:'Make Lemonade from Lemons',desc:'Don\'t complain about hardships — transform them into opportunities. All of God\'s prophets turned suffering into triumph.',carnegie:'Carnegie says: "When life gives you lemons, make lemonade"',ghazali:'Al-Ghazali cites stories of prophets who turned trials into triumphs through patience and trust in God',action:'Identify a challenge you face now — what opportunity is hidden within it?'},
    fr:{title:'Faites de la Limonade avec des Citrons',desc:'Ne vous plaignez pas des difficultés — transformez-les en opportunités. Tous les prophètes ont transformé la souffrance en triomphe.',carnegie:'Carnegie dit : « Quand la vie vous donne des citrons, faites de la limonade »',ghazali:'Al-Ghazali cite les histoires de prophètes qui ont transformé les épreuves en triomphes par la patience et la confiance en Dieu',action:'Identifiez un défi actuel — quelle opportunité se cache à l\'intérieur ?'}
  },
  {
    id:13, emoji:'🌟',
    ar:{title:'أنت نسيج وحدك',desc:'لا تقارن نفسك بغيرك. الله خلقك فريداً برسالة خاصة. اكتشف تميزك.',carnegie:'كارنيجي يقول: "كن نفسك — لأن كل شخص آخر مأخوذ بالفعل"',ghazali:'الغزالي يقول: كل إنسان خُلق بفطرة فريدة وقدرات خاصة — اكتشفها واستثمرها',action:'اكتب ٣ أشياء تجيدها ولا يجيدها معظم من حولك'},
    en:{title:'You Are Unique',desc:'Don\'t compare yourself to others. God created you unique with a special purpose. Discover your uniqueness.',carnegie:'Carnegie says: "Be yourself — because everyone else is already taken"',ghazali:'Al-Ghazali says: Every person was created with a unique nature and special abilities — discover and invest in them',action:'Write 3 things you\'re good at that most people around you aren\'t'},
    fr:{title:'Vous Êtes Unique',desc:'Ne vous comparez pas aux autres. Dieu vous a créé unique avec un but spécial. Découvrez votre unicité.',carnegie:'Carnegie dit : « Soyez vous-même — car tout le monde est déjà pris »',ghazali:'Al-Ghazali dit : Chaque personne est créée avec une nature unique et des capacités spéciales — découvrez-les et investissez-y',action:'Écrivez 3 choses que vous faites bien et que la plupart des gens autour de vous ne font pas'}
  },
  {
    id:14, emoji:'🤲',
    ar:{title:'لا تنتظر الشكر',desc:'افعل الخير لله وحده. إذا انتظرت شكر الناس ستُحبط دائماً.',carnegie:'كارنيجي يقول: "الجحود طبيعة بشرية — لا تتوقع الامتنان"',ghazali:'الغزالي يأصّل هذا في الإخلاص لله — "إنما نطعمكم لوجه الله لا نريد منكم جزاءً ولا شكوراً"',action:'افعل شيئاً طيباً لشخص اليوم دون أن تنتظر شكراً أو حتى اعترافاً'},
    en:{title:'Don\'t Expect Gratitude',desc:'Do good for God\'s sake alone. If you wait for people\'s thanks, you\'ll always be disappointed.',carnegie:'Carnegie says: "Ingratitude is human nature — don\'t expect gratitude"',ghazali:'Al-Ghazali grounds this in sincerity to God — "We feed you only for the face of God, seeking no reward or thanks from you" (Quran 76:9)',action:'Do something kind for someone today without expecting thanks or even acknowledgment'},
    fr:{title:'N\'Attendez Pas la Gratitude',desc:'Faites le bien pour Dieu seul. Si vous attendez les remerciements des gens, vous serez toujours déçu.',carnegie:'Carnegie dit : « L\'ingratitude est dans la nature humaine — n\'attendez pas la gratitude »',ghazali:'Al-Ghazali fonde cela dans la sincérité envers Dieu — « Nous ne vous nourrissons que pour le visage de Dieu, sans attendre de vous récompense ni remerciement » (Coran 76:9)',action:'Faites quelque chose de gentil pour quelqu\'un aujourd\'hui sans attendre de remerciement'}
  },
  {
    id:15, emoji:'💎',
    ar:{title:'هل تستبدل مليون جنيه بما تملك؟',desc:'هل تبيع بصرك بمليون؟ صحتك؟ أولادك؟ أنت أغنى مما تظن — فقط توقف واحسب نعمك.',carnegie:'كارنيجي يقول: "عُد نعمك لا همومك"',ghazali:'الغزالي يقول: الشكر أساس السعادة في الإسلام — والشاكر يُزاد والجاحد يُحرم',action:'اكتب ٥ نعم تملكها لا تشتريها بكل أموال العالم'},
    en:{title:'Would You Trade What You Have for a Million?',desc:'Would you sell your eyesight for a million? Your health? Your children? You\'re richer than you think — just stop and count your blessings.',carnegie:'Carnegie says: "Count your blessings, not your troubles"',ghazali:'Al-Ghazali says: Gratitude is the foundation of happiness in Islam — the grateful will be given more, and the ungrateful will be deprived',action:'Write 5 blessings you have that all the money in the world couldn\'t buy'},
    fr:{title:'Échangeriez-Vous Ce Que Vous Avez pour un Million ?',desc:'Vendriez-vous votre vue pour un million ? Votre santé ? Vos enfants ? Vous êtes plus riche que vous ne le pensez.',carnegie:'Carnegie dit : « Comptez vos bénédictions, pas vos soucis »',ghazali:'Al-Ghazali dit : La gratitude est le fondement du bonheur en Islam — le reconnaissant recevra plus, et l\'ingrat sera privé',action:'Écrivez 5 bénédictions que tout l\'argent du monde ne pourrait acheter'}
  },
  {
    id:16, emoji:'📝',
    ar:{title:'حاسب نفسك',desc:'المحاسبة الذاتية كالتدقيق المحاسبي — راجع نفسك بانتظام وبصدق. الصلوات الخمس نقاط مراجعة يومية.',carnegie:'كارنيجي يقول: "راجع أخطاءك بانتظام"',ghazali:'الغزالي يقول: عمر بن الخطاب كان يقول "حاسبوا أنفسكم قبل أن تُحاسبوا" — والصلوات الخمس محطات يومية للمراجعة',action:'قبل النوم: ماذا فعلت جيداً اليوم؟ ماذا أخطأت؟ ماذا سأحسّن غداً؟'},
    en:{title:'Hold Yourself Accountable',desc:'Self-accountability is like a business audit — review yourself regularly and honestly. The five daily prayers are daily checkpoints.',carnegie:'Carnegie says: "Review your mistakes regularly"',ghazali:'Al-Ghazali says: Umar ibn al-Khattab used to say "Hold yourselves accountable before you are held accountable" — the five prayers are daily review stations',action:'Before sleep: What did I do well today? What mistakes did I make? What will I improve tomorrow?'},
    fr:{title:'Tenez-Vous Responsable',desc:'L\'auto-responsabilité est comme un audit — examinez-vous régulièrement et honnêtement. Les cinq prières quotidiennes sont des points de contrôle.',carnegie:'Carnegie dit : « Révisez vos erreurs régulièrement »',ghazali:'Al-Ghazali dit : Omar ibn al-Khattab disait « Tenez-vous responsables avant d\'être tenus responsables » — les cinq prières sont des stations quotidiennes de révision',action:'Avant de dormir : Qu\'ai-je bien fait ? Quelles erreurs ? Que vais-je améliorer demain ?'}
  },
  // === NEW PRINCIPLES 17-26 ===
  {
    id:17, emoji:'🕊️',
    ar:{title:'بين الإيمان والإلحاد',desc:'الإيمان بالله ليس رفاهية بل ضرورة نفسية وعقلية. من فقد الإيمان فقد البوصلة الداخلية التي توجه حياته. الملحد يعيش في فراغ وجودي لا يملؤه شيء.',carnegie:'كارنيجي يقول: "الدين يمنح الإنسان هدفاً وسكينة لا يجدهما في مكان آخر"',ghazali:'الغزالي يقول: الفطرة السليمة تدل على الله — والإلحاد انحراف عن الطبيعة البشرية. "فأقم وجهك للدين حنيفاً فطرت الله التي فطر الناس عليها"',action:'تأمل في آية من القرآن اليوم وتفكر في عظمة الخالق من خلال مخلوقاته'},
    en:{title:'Between Faith and Atheism',desc:'Faith in God is not a luxury but a psychological and intellectual necessity. One who loses faith loses the inner compass that guides life. The atheist lives in an existential void nothing can fill.',carnegie:'Carnegie says: "Religion gives a person purpose and tranquility found nowhere else"',ghazali:'Al-Ghazali says: Sound human nature points to God — atheism is a deviation from human nature. "Set your face toward the religion of pure nature, the nature made by God in which He created mankind"',action:'Contemplate a verse from the Quran today and reflect on the Creator\'s greatness through His creation'},
    fr:{title:'Entre la Foi et l\'Athéisme',desc:'La foi en Dieu n\'est pas un luxe mais une nécessité psychologique et intellectuelle. Celui qui perd la foi perd la boussole intérieure qui guide sa vie.',carnegie:'Carnegie dit : « La religion donne un but et une tranquillité introuvables ailleurs »',ghazali:'Al-Ghazali dit : La nature humaine saine mène à Dieu — l\'athéisme est une déviation de la nature humaine. « Dirige ton visage vers la religion en pur monothéisme, nature que Dieu a donnée aux hommes »',action:'Contemplez un verset du Coran aujourd\'hui et réfléchissez à la grandeur du Créateur'}
  },
  {
    id:18, emoji:'✨',
    ar:{title:'روحانية الرسول',desc:'النبي محمد ﷺ كان أكثر الناس تجديداً لحياته. كان يجمع بين العبادة والعمل، بين الزهد والأخذ بالأسباب. روحانيته لم تكن انعزالاً بل كانت طاقة دفعته لتغيير العالم.',carnegie:'كارنيجي يقول: "القدوة الحسنة أقوى من ألف نصيحة"',ghazali:'الغزالي يقول: النبي ﷺ كان يذكر الله في كل حال — في فرحه وحزنه، في سلمه وحربه. روحانيته كانت عملية لا نظرية',action:'اختر سنة نبوية واحدة وطبقها اليوم: ابتسم في وجه كل من تقابله'},
    en:{title:'The Prophet\'s Spirituality',desc:'Prophet Muhammad (peace be upon him) was the most renewed person in his life. He combined worship with work, asceticism with taking practical means. His spirituality was not isolation but energy that drove him to change the world.',carnegie:'Carnegie says: "A good example is stronger than a thousand pieces of advice"',ghazali:'Al-Ghazali says: The Prophet remembered God in every state — in joy and sorrow, in peace and war. His spirituality was practical, not theoretical',action:'Choose one prophetic practice and apply it today: smile at everyone you meet'},
    fr:{title:'La Spiritualité du Prophète',desc:'Le Prophète Muhammad (paix sur lui) était la personne la plus renouvelée dans sa vie. Il combinait l\'adoration et le travail, l\'ascétisme et les moyens pratiques. Sa spiritualité n\'était pas de l\'isolement mais une énergie qui l\'a poussé à changer le monde.',carnegie:'Carnegie dit : « Un bon exemple est plus fort que mille conseils »',ghazali:'Al-Ghazali dit : Le Prophète se souvenait de Dieu en tout état — dans la joie et la tristesse, en paix et en guerre. Sa spiritualité était pratique, pas théorique',action:'Choisissez une pratique prophétique et appliquez-la aujourd\'hui : souriez à tous ceux que vous rencontrez'}
  },
  {
    id:19, emoji:'🛡️',
    ar:{title:'بقدر قيمتك يكون النقد الموجه لك',desc:'كلما ارتفعت قيمتك زاد النقد الموجه إليك. لا تخف من النقد فهو دليل على أنك تفعل شيئاً مهماً. الشجرة المثمرة هي التي يُرمى عليها الحجر.',carnegie:'كارنيجي يقول: "لن يركل أحد كلباً ميتاً — النقد يأتي فقط للناجحين"',ghazali:'الغزالي يقول: كل الأنبياء نُقدوا وأُوذوا، وهم خير البشر. فلا تحزن إن نُقدت — بل استقم واستمر',action:'تذكر آخر نقد تلقيته: هل هو بنّاء فاستفد منه، أم هدّام فتجاوزه؟'},
    en:{title:'Criticism Is Proportional to Your Worth',desc:'The higher your value, the more criticism you face. Don\'t fear criticism — it proves you\'re doing something meaningful. The fruitful tree is the one that gets stones thrown at it.',carnegie:'Carnegie says: "Nobody kicks a dead dog — criticism comes only to the successful"',ghazali:'Al-Ghazali says: All prophets were criticized and harmed, yet they were the best of humanity. Don\'t grieve when criticized — stay upright and keep going',action:'Recall the last criticism you received: was it constructive (learn from it) or destructive (move past it)?'},
    fr:{title:'La Critique Est Proportionnelle à Votre Valeur',desc:'Plus votre valeur est grande, plus la critique est forte. Ne craignez pas la critique — elle prouve que vous faites quelque chose d\'important. L\'arbre fruitier est celui sur lequel on jette des pierres.',carnegie:'Carnegie dit : « Personne ne donne un coup de pied à un chien mort — la critique ne vient qu\'aux gens qui réussissent »',ghazali:'Al-Ghazali dit : Tous les prophètes ont été critiqués et blessés, et pourtant ils étaient les meilleurs des hommes. Ne soyez pas triste quand on vous critique — restez droit et continuez',action:'Rappelez-vous la dernière critique reçue : constructive (apprenez-en) ou destructive (passez outre) ?'}
  },
  {
    id:20, emoji:'💪',
    ar:{title:'كن عصياً على النقد',desc:'لا تجعل كلام الناس يوقفك. تعلّم أن تميز بين النقد البنّاء والنقد الحاقد. خذ من النقد ما ينفعك واترك ما يضرك.',carnegie:'كارنيجي يقول: "افعل ما تعتقد أنه صواب — فسوف تُنتقد في كل حال"',ghazali:'الغزالي يقول: الثقة بالنفس مع التوكل على الله درع لا يُخترق. "واصبر على ما يقولون واهجرهم هجراً جميلاً"',action:'اكتب قراراً أخرت اتخاذه خوفاً من النقد — اتخذه اليوم بتوكل على الله'},
    en:{title:'Be Resilient Against Criticism',desc:'Don\'t let people\'s words stop you. Learn to distinguish between constructive and malicious criticism. Take what benefits you and leave what harms you.',carnegie:'Carnegie says: "Do what you believe is right — you\'ll be criticized either way"',ghazali:'Al-Ghazali says: Self-confidence combined with trust in God is an impenetrable shield. "Be patient over what they say and avoid them with gracious avoidance"',action:'Write a decision you\'ve delayed out of fear of criticism — make it today with trust in God'},
    fr:{title:'Soyez Résilient Face à la Critique',desc:'Ne laissez pas les paroles des gens vous arrêter. Apprenez à distinguer entre critique constructive et malveillante. Prenez ce qui vous profite et laissez ce qui vous nuit.',carnegie:'Carnegie dit : « Faites ce que vous croyez juste — vous serez critiqué de toute façon »',ghazali:'Al-Ghazali dit : La confiance en soi avec la confiance en Dieu est un bouclier impénétrable. « Sois patient face à ce qu\'ils disent et éloigne-toi d\'eux d\'un bel éloignement »',action:'Écrivez une décision retardée par peur de la critique — prenez-la aujourd\'hui avec confiance en Dieu'}
  },
  {
    id:21, emoji:'🤝',
    ar:{title:'العمل بين الأثرة والإيثار',desc:'لا تكن أنانياً فتخسر الناس، ولا تكن مُضحياً بلا حدود فتخسر نفسك. الإسلام يعلمنا التوازن: ابدأ بنفسك ثم أهلك ثم المجتمع.',carnegie:'كارنيجي يقول: "اهتم بالآخرين بصدق — وسيهتمون بك"',ghazali:'الغزالي يقول: الإيثار من أعلى مراتب الأخلاق في الإسلام — "ويؤثرون على أنفسهم ولو كان بهم خصاصة". لكن الإيثار الحقيقي يبدأ من نفس قوية لا ضعيفة',action:'ساعد شخصاً اليوم بشيء لا يكلفك كثيراً: نصيحة، ابتسامة، أو دعاء'},
    en:{title:'Work Between Selfishness and Altruism',desc:'Don\'t be selfish and lose people, nor sacrifice without limits and lose yourself. Islam teaches balance: start with yourself, then your family, then society.',carnegie:'Carnegie says: "Be genuinely interested in others — and they\'ll be interested in you"',ghazali:'Al-Ghazali says: Altruism is among the highest virtues in Islam — "They prefer others over themselves even when they are in need." But true altruism starts from a strong self, not a weak one',action:'Help someone today with something that costs you little: advice, a smile, or a prayer'},
    fr:{title:'Le Travail entre Égoïsme et Altruisme',desc:'Ne soyez pas égoïste au point de perdre les gens, ni sacrifié sans limites au point de vous perdre. L\'Islam enseigne l\'équilibre.',carnegie:'Carnegie dit : « Intéressez-vous sincèrement aux autres — et ils s\'intéresseront à vous »',ghazali:'Al-Ghazali dit : L\'altruisme est parmi les plus hautes vertus en Islam — « Ils préfèrent les autres à eux-mêmes même s\'ils sont dans le besoin ». Mais le vrai altruisme part d\'un soi fort, pas faible',action:'Aidez quelqu\'un aujourd\'hui avec quelque chose qui ne vous coûte pas cher : un conseil, un sourire, ou une prière'}
  },
  {
    id:22, emoji:'🔮',
    ar:{title:'نقاء السر والعلانية',desc:'كن نفسك في السر والعلن. لا تكن ذا وجهين — فالنفاق أخطر أمراض القلب. من صفا سره صفت علانيته.',carnegie:'كارنيجي يقول: "الصدق مع النفس أساس كل فضيلة"',ghazali:'الغزالي يقول: الإخلاص هو أن يكون سرك كعلانيتك. "إن الله لا ينظر إلى صوركم ولا إلى أجسادكم ولكن ينظر إلى قلوبكم وأعمالكم"',action:'راجع نيّتك في عمل واحد تفعله اليوم: هل تفعله لله أم للناس؟'},
    en:{title:'Purity of Inner and Outer Self',desc:'Be the same person in private and public. Don\'t be two-faced — hypocrisy is the deadliest disease of the heart. Whoever purifies their inner self will have a pure outward life.',carnegie:'Carnegie says: "Honesty with yourself is the foundation of every virtue"',ghazali:'Al-Ghazali says: Sincerity means your private life matches your public life. "God does not look at your forms or bodies but looks at your hearts and deeds"',action:'Review your intention in one thing you do today: are you doing it for God or for people?'},
    fr:{title:'Pureté de l\'Intérieur et de l\'Extérieur',desc:'Soyez la même personne en privé et en public. Ne soyez pas à deux visages — l\'hypocrisie est la maladie la plus mortelle du coeur.',carnegie:'Carnegie dit : « L\'honnêteté envers soi-même est le fondement de toute vertu »',ghazali:'Al-Ghazali dit : La sincérité signifie que votre vie privée correspond à votre vie publique. « Dieu ne regarde pas vos formes ni vos corps mais regarde vos coeurs et vos actes »',action:'Révisez votre intention dans une chose que vous faites aujourd\'hui : la faites-vous pour Dieu ou pour les gens ?'}
  },
  {
    id:23, emoji:'📜',
    ar:{title:'بالحق أنزلناه وبالحق نزل',desc:'القرآن نزل بالحق ليغيّر حياة الناس حقاً. ليس كتاباً للتبرك فقط بل منهج حياة كامل. من عمل بالقرآن تجددت حياته تلقائياً.',carnegie:'كارنيجي يقول: "الكتب العظيمة تغيّر حياة من يقرأها — لكن فقط إذا طبّقها"',ghazali:'الغزالي يقول: القرآن ليس للتلاوة فحسب بل للتدبر والعمل. "أفلا يتدبرون القرآن أم على قلوب أقفالها" — اجعل القرآن دستور حياتك اليومية',action:'اقرأ صفحة من القرآن اليوم بتدبر — توقف عند آية وتأمل معناها وكيف تطبقها'},
    en:{title:'In Truth We Sent It Down',desc:'The Quran was sent down in truth to truly change people\'s lives. It\'s not just a book for blessings but a complete life methodology. Whoever lives by the Quran will find their life renewed automatically.',carnegie:'Carnegie says: "Great books change the lives of those who read them — but only if applied"',ghazali:'Al-Ghazali says: The Quran is not just for recitation but for reflection and action. "Do they not reflect upon the Quran, or are there locks upon their hearts?" — make the Quran your daily constitution',action:'Read a page of the Quran today with reflection — pause at a verse and contemplate its meaning and application'},
    fr:{title:'C\'est en Vérité que Nous l\'Avons Fait Descendre',desc:'Le Coran a été révélé en vérité pour changer vraiment la vie des gens. Ce n\'est pas seulement un livre de bénédictions mais une méthodologie de vie complète.',carnegie:'Carnegie dit : « Les grands livres changent la vie de ceux qui les lisent — mais seulement s\'ils sont appliqués »',ghazali:'Al-Ghazali dit : Le Coran n\'est pas seulement pour la récitation mais pour la réflexion et l\'action. « Ne méditent-ils pas sur le Coran ou y a-t-il des verrous sur leurs coeurs ? » — faites du Coran votre constitution quotidienne',action:'Lisez une page du Coran aujourd\'hui avec réflexion — arrêtez-vous sur un verset et contemplez son sens et son application'}
  },
  {
    id:24, emoji:'⚖️',
    ar:{title:'الثمن الباهظ للقصاص',desc:'الانتقام يدمر صاحبه قبل عدوه. حمل الضغينة كحمل جمرة — أنت من يحترق. المسامحة ليست ضعفاً بل هي أعلى درجات القوة.',carnegie:'كارنيجي يقول: "عندما نكره أعداءنا فإننا نمنحهم سلطة علينا — سلطة على نومنا وشهيتنا وصحتنا"',ghazali:'الغزالي يقول: الإسلام يدعو للعفو عند المقدرة. "وأن تعفوا أقرب للتقوى". المسامح ينال السلام الداخلي الذي لا يناله المنتقم أبداً',action:'فكر في شخص تحمل عليه ضغينة — سامحه في قلبك اليوم وحرر نفسك'},
    en:{title:'The Heavy Price of Revenge',desc:'Revenge destroys the avenger before the enemy. Carrying a grudge is like holding a burning coal — you\'re the one who gets burned. Forgiveness isn\'t weakness but the highest degree of strength.',carnegie:'Carnegie says: "When we hate our enemies, we give them power over us — power over our sleep, appetite, and health"',ghazali:'Al-Ghazali says: Islam calls for pardoning when able. "To pardon is closer to righteousness." The forgiving person achieves inner peace the avenger can never attain',action:'Think of someone you hold a grudge against — forgive them in your heart today and free yourself'},
    fr:{title:'Le Prix Lourd de la Vengeance',desc:'La vengeance détruit celui qui se venge avant son ennemi. Porter rancune c\'est comme tenir un charbon ardent — c\'est vous qui brûlez. Le pardon n\'est pas une faiblesse mais le plus haut degré de force.',carnegie:'Carnegie dit : « Quand nous haïssons nos ennemis, nous leur donnons pouvoir sur nous — pouvoir sur notre sommeil, notre appétit et notre santé »',ghazali:'Al-Ghazali dit : L\'Islam appelle au pardon quand on en est capable. « Pardonner est plus proche de la piété ». Celui qui pardonne atteint une paix intérieure que le vengeur n\'atteindra jamais',action:'Pensez à quelqu\'un contre qui vous gardez rancune — pardonnez-lui dans votre coeur aujourd\'hui et libérez-vous'}
  },
  {
    id:25, emoji:'🌍',
    ar:{title:'رسالتك في الحياة',desc:'كل إنسان له رسالة في هذه الحياة. اكتشف رسالتك واعمل بها. لا تمت وفي صدرك كنز لم يخرج.',carnegie:'كارنيجي يقول: "أسعد الناس هم الذين يشعرون بأن لحياتهم معنى ورسالة"',ghazali:'الغزالي يقول: الله لم يخلقنا عبثاً — "أفحسبتم أنما خلقناكم عبثاً". لكل إنسان دور فريد في هذا الكون، واكتشاف هذا الدور هو أول خطوة لتجديد الحياة',action:'اسأل نفسك: لو بقي لي عام واحد في الحياة، ماذا سأفعل؟ — الإجابة هي رسالتك'},
    en:{title:'Your Life\'s Mission',desc:'Every person has a mission in this life. Discover your mission and work toward it. Don\'t die with a treasure still locked in your chest.',carnegie:'Carnegie says: "The happiest people are those who feel their lives have meaning and purpose"',ghazali:'Al-Ghazali says: God did not create us in vain — "Did you think We created you purposelessly?" Every person has a unique role in this universe, and discovering that role is the first step to renewing life',action:'Ask yourself: if I had one year to live, what would I do? — The answer is your mission'},
    fr:{title:'Votre Mission dans la Vie',desc:'Chaque personne a une mission dans cette vie. Découvrez votre mission et travaillez-y. Ne mourez pas avec un trésor encore enfermé dans votre poitrine.',carnegie:'Carnegie dit : « Les gens les plus heureux sont ceux qui sentent que leur vie a un sens et un but »',ghazali:'Al-Ghazali dit : Dieu ne nous a pas créés en vain — « Pensiez-vous que Nous vous avions créés sans but ? » Chaque personne a un rôle unique dans cet univers, et découvrir ce rôle est la première étape pour renouveler la vie',action:'Demandez-vous : s\'il me restait un an à vivre, que ferais-je ? — La réponse est votre mission'}
  },
  {
    id:26, emoji:'🕌',
    ar:{title:'خاتمة: جدد حياتك الآن',desc:'لا تنتظر الظروف المثالية لتبدأ التجديد. ابدأ الآن من حيث أنت. كل يوم جديد فرصة جديدة. الغزالي ينهي كتابه برسالة أمل: التجديد ممكن دائماً مادمت حياً.',carnegie:'كارنيجي يقول: "أفضل وقت للبدء هو الآن — لا تنتظر اللحظة المثالية"',ghazali:'الغزالي يختم بقوله: الإسلام دين التجديد الدائم. كل صلاة تجديد، كل توبة تجديد، كل صباح تجديد. "قل يا عبادي الذين أسرفوا على أنفسهم لا تقنطوا من رحمة الله" — باب الله مفتوح دائماً',action:'اختر مبدأً واحداً من هذا الكتاب وابدأ تطبيقه الآن — ليس غداً، الآن'},
    en:{title:'Conclusion: Renew Your Life Now',desc:'Don\'t wait for perfect conditions to start renewal. Start now from where you are. Every new day is a new opportunity. Al-Ghazali ends his book with a message of hope: renewal is always possible as long as you\'re alive.',carnegie:'Carnegie says: "The best time to start is now — don\'t wait for the perfect moment"',ghazali:'Al-Ghazali concludes: Islam is the religion of perpetual renewal. Every prayer is renewal, every repentance is renewal, every morning is renewal. "Say, O My servants who have transgressed against themselves, do not despair of the mercy of God" — God\'s door is always open',action:'Choose one principle from this book and start applying it now — not tomorrow, now'},
    fr:{title:'Conclusion : Renouvelle ta Vie Maintenant',desc:'N\'attendez pas les conditions parfaites pour commencer le renouveau. Commencez maintenant là où vous êtes. Chaque nouveau jour est une nouvelle opportunité. Al-Ghazali termine son livre avec un message d\'espoir : le renouveau est toujours possible tant que vous êtes en vie.',carnegie:'Carnegie dit : « Le meilleur moment pour commencer est maintenant — n\'attendez pas le moment parfait »',ghazali:'Al-Ghazali conclut : L\'Islam est la religion du renouveau perpétuel. Chaque prière est un renouveau, chaque repentir est un renouveau, chaque matin est un renouveau. « Dis : Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde de Dieu » — la porte de Dieu est toujours ouverte',action:'Choisissez un principe de ce livre et commencez à l\'appliquer maintenant — pas demain, maintenant'}
  }
];

// ═══════════════ ANXIETY DATA ═══════════════
const ANXIETY_DATA = [
  {
    emoji:'😰',
    ar:{title:'القلق من المستقبل',problem:'نقلق مما لم يحدث بعد — نتخيل كوارث قد لا تقع أبداً',solution:'الإسلام يعلمنا التوكل: ابذل جهدك ثم فوّض أمرك لله. النبي ﷺ كان يدعو: "اللهم إني أعوذ بك من الهم والحزن"',verse:'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',verseRef:'الطلاق ٦٥: ٣'},
    en:{title:'Fear of the Future',problem:'We worry about things that haven\'t happened — imagining disasters that may never occur',solution:'Islam teaches tawakkul (trust): do your best, then entrust your affairs to God. The Prophet (peace be upon him) used to pray: "O God, I seek refuge in You from worry and grief"',verse:'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',verseRef:'At-Talaq 65:3'},
    fr:{title:'Peur de l\'Avenir',problem:'On s\'inquiète de ce qui n\'est pas encore arrivé — imaginant des catastrophes qui ne se produiront peut-être jamais',solution:'L\'Islam enseigne le tawakkul (confiance) : faites de votre mieux, puis confiez vos affaires à Dieu',verse:'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',verseRef:'At-Talaq 65:3'}
  },
  {
    emoji:'😔',
    ar:{title:'الحزن على الماضي',problem:'نعيش في الماضي ونبكي على ما فات — نضيع حاضرنا في ذكريات لا يمكن تغييرها',solution:'الإسلام يعلمنا: "لا تبكِ على فائت". ما مضى مضى — تعلّم منه واشكر الله على الحاضر',verse:'لِّكَيْلَا تَأْسَوْا عَلَىٰ مَا فَاتَكُمْ وَلَا تَفْرَحُوا بِمَا آتَاكُمْ',verseRef:'الحديد ٥٧: ٢٣'},
    en:{title:'Grief Over the Past',problem:'We live in the past, crying over what\'s gone — wasting our present on memories we can\'t change',solution:'Islam teaches: "Don\'t cry over what has passed." What\'s gone is gone — learn from it and thank God for the present',verse:'لِّكَيْلَا تَأْسَوْا عَلَىٰ مَا فَاتَكُمْ وَلَا تَفْرَحُوا بِمَا آتَاكُمْ',verseRef:'Al-Hadid 57:23'},
    fr:{title:'Chagrin du Passé',problem:'On vit dans le passé, pleurant ce qui est parti — gaspillant notre présent sur des souvenirs immuables',solution:'L\'Islam enseigne : « Ne pleurez pas ce qui est passé ». Ce qui est parti est parti — apprenez-en et remerciez Dieu pour le présent',verse:'لِّكَيْلَا تَأْسَوْا عَلَىٰ مَا فَاتَكُمْ وَلَا تَفْرَحُوا بِمَا آتَاكُمْ',verseRef:'Al-Hadid 57:23'}
  },
  {
    emoji:'😤',
    ar:{title:'الغضب والانتقام',problem:'نحمل الضغينة ونريد الانتقام — والثمن الباهظ نحن من يدفعه صحياً ونفسياً',solution:'الإسلام يعلمنا: "والكاظمين الغيظ والعافين عن الناس". المسامحة تحررك أنت أولاً',verse:'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',verseRef:'آل عمران ٣: ١٣٤'},
    en:{title:'Anger and Revenge',problem:'We hold grudges and want revenge — the heavy price is paid by us in health and mental peace',solution:'Islam teaches: "Those who restrain anger and pardon people." Forgiveness frees you first',verse:'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',verseRef:'Aal-Imran 3:134'},
    fr:{title:'Colère et Vengeance',problem:'On garde rancune et on veut se venger — le prix lourd est payé par nous en santé et en paix mentale',solution:'L\'Islam enseigne : « Ceux qui dominent leur rage et pardonnent aux gens ». Le pardon vous libère en premier',verse:'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',verseRef:'Aal-Imran 3:134'}
  },
  {
    emoji:'😞',
    ar:{title:'الفراغ وفقدان المعنى',problem:'نشعر بالفراغ وانعدام الهدف — الأيام تمر بلا معنى ولا إنجاز',solution:'الإسلام يملأ الفراغ: خمس صلوات، أذكار الصباح والمساء، عمل نافع، خدمة الناس. لا مجال للفراغ في حياة المسلم الحقيقي',verse:'أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا',verseRef:'المؤمنون ٢٣: ١١٥'},
    en:{title:'Emptiness and Loss of Meaning',problem:'We feel empty and purposeless — days pass without meaning or achievement',solution:'Islam fills the void: five prayers, morning and evening remembrance, useful work, serving others. There\'s no room for emptiness in a true Muslim\'s life',verse:'أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا',verseRef:'Al-Mu\'minun 23:115'},
    fr:{title:'Vide et Perte de Sens',problem:'On se sent vide et sans but — les jours passent sans sens ni accomplissement',solution:'L\'Islam comble le vide : cinq prières, rappels du matin et du soir, travail utile, service aux autres. Il n\'y a pas de place pour le vide dans la vie d\'un vrai musulman',verse:'أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا',verseRef:'Al-Mu\'minun 23:115'}
  },
  {
    emoji:'😣',
    ar:{title:'النقد اللاذع',problem:'نهتز من أي نقد ونفقد ثقتنا — نعيش لنرضي الناس',solution:'الغزالي يقول: النقد بقدر قيمتك — كلما ارتفعت زاد النقد. كن عصياً على النقد الهدّام وتقبّل البنّاء',verse:'وَاصْبِرْ عَلَىٰ مَا يَقُولُونَ',verseRef:'المزمل ٧٣: ١٠'},
    en:{title:'Harsh Criticism',problem:'We crumble from any criticism and lose confidence — living to please others',solution:'Al-Ghazali says: Criticism is proportional to your worth — the higher you rise, the more criticism you face. Be resilient against destructive criticism and accept constructive ones',verse:'وَاصْبِرْ عَلَىٰ مَا يَقُولُونَ',verseRef:'Al-Muzzammil 73:10'},
    fr:{title:'Critique Sévère',problem:'On s\'effondre à la moindre critique et on perd confiance — vivant pour plaire aux autres',solution:'Al-Ghazali dit : La critique est proportionnelle à votre valeur — plus vous montez, plus les critiques augmentent. Soyez résilient face aux critiques destructives et acceptez les constructives',verse:'وَاصْبِرْ عَلَىٰ مَا يَقُولُونَ',verseRef:'Al-Muzzammil 73:10'}
  },
  // === 3 NEW ANXIETY CARDS ===
  {
    emoji:'😶',
    ar:{title:'الوحدة والعزلة الاجتماعية',problem:'نشعر بالوحدة حتى وسط الناس — العزلة تأكل الروح وتزيد القلق والاكتئاب',solution:'الإسلام دين الجماعة: صلاة الجماعة، صلة الرحم، حق الجار. النبي ﷺ قال: "المؤمن الذي يخالط الناس ويصبر على أذاهم خير من الذي لا يخالط الناس". المسجد مكان للتواصل الاجتماعي والروحي معاً',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ٣: ١٠٣'},
    en:{title:'Loneliness and Social Isolation',problem:'We feel lonely even among people — isolation eats the soul and increases anxiety and depression',solution:'Islam is the religion of community: congregational prayer, family ties, neighbor\'s rights. The Prophet (peace be upon him) said: "The believer who mixes with people and bears their harm is better than one who doesn\'t." The mosque is a place for both social and spiritual connection',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'Aal-Imran 3:103'},
    fr:{title:'Solitude et Isolement Social',problem:'On se sent seul même au milieu des gens — l\'isolement ronge l\'âme et augmente l\'anxiété et la dépression',solution:'L\'Islam est la religion de la communauté : prière en groupe, liens familiaux, droits du voisin. Le Prophète (paix sur lui) a dit : « Le croyant qui se mêle aux gens et supporte leur tort est meilleur que celui qui ne se mêle pas ». La mosquée est un lieu de connexion sociale et spirituelle',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'Aal-Imran 3:103'}
  },
  {
    emoji:'😩',
    ar:{title:'الكمالية والشعور بعدم الكفاية',problem:'نسعى للكمال في كل شيء ولا نرضى أبداً عن أنفسنا — نشعر دائماً بأننا لسنا كافيين',solution:'الإسلام يعلمنا أن الكمال لله وحده. المطلوب منك الإحسان والاجتهاد لا الكمال. "لا يكلف الله نفساً إلا وسعها". كل بني آدم خطّاء وخير الخطائين التوابون',verse:'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',verseRef:'البقرة ٢: ٢٨٦'},
    en:{title:'Perfectionism and Never Feeling Good Enough',problem:'We strive for perfection in everything and are never satisfied with ourselves — always feeling inadequate',solution:'Islam teaches that perfection belongs to God alone. What\'s required of you is excellence and effort, not perfection. "God does not burden a soul beyond its capacity." All children of Adam err, and the best of those who err are those who repent',verse:'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',verseRef:'Al-Baqarah 2:286'},
    fr:{title:'Perfectionnisme et Ne Jamais se Sentir Suffisant',problem:'On vise la perfection en tout et on n\'est jamais satisfait de soi — on se sent toujours insuffisant',solution:'L\'Islam enseigne que la perfection appartient à Dieu seul. Ce qui est requis de vous est l\'excellence et l\'effort, pas la perfection. « Dieu n\'impose à aucune âme une charge supérieure à sa capacité ». Tous les fils d\'Adam se trompent, et les meilleurs sont ceux qui se repentent',verse:'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',verseRef:'Al-Baqarah 2:286'}
  },
  {
    emoji:'💀',
    ar:{title:'الخوف من الموت والمجهول',problem:'نخاف من الموت ومما بعده — هذا الخوف يشل حركتنا ويمنعنا من الاستمتاع بالحياة',solution:'الإسلام يجعل الموت جسراً لا نهاية. المؤمن لا يخاف الموت بل يستعد له بالعمل الصالح. "كل نفس ذائقة الموت". الموت ليس عدماً بل انتقال لحياة أفضل عند الله',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ',verseRef:'آل عمران ٣: ١٨٥'},
    en:{title:'Fear of Death and the Unknown',problem:'We fear death and what comes after — this fear paralyzes us and prevents us from enjoying life',solution:'Islam makes death a bridge, not an end. The believer doesn\'t fear death but prepares for it through good deeds. "Every soul will taste death." Death is not nothingness but a transition to a better life with God',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ',verseRef:'Aal-Imran 3:185'},
    fr:{title:'Peur de la Mort et de l\'Inconnu',problem:'On craint la mort et ce qui vient après — cette peur nous paralyse et nous empêche de profiter de la vie',solution:'L\'Islam fait de la mort un pont, pas une fin. Le croyant ne craint pas la mort mais s\'y prépare par les bonnes actions. « Toute âme goûtera la mort ». La mort n\'est pas le néant mais une transition vers une vie meilleure auprès de Dieu',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ',verseRef:'Aal-Imran 3:185'}
  }
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'🌅',ar:{label:'أذكار الصباح',source:'عش في حدود يومك'},en:{label:'Morning remembrance',source:'Live within your day'},fr:{label:'Rappels du matin',source:'Vis dans ta journée'}},
  {emoji:'🙏',ar:{label:'الصلوات الخمس في وقتها',source:'علم أثمره العمل'},en:{label:'Five prayers on time',source:'Knowledge through action'},fr:{label:'Cinq prières à l\'heure',source:'Le savoir par l\'action'}},
  {emoji:'📖',ar:{label:'قراءة صفحة من القرآن',source:'جدد حياتك'},en:{label:'Read a page of Quran',source:'Renew your life'},fr:{label:'Lire une page du Coran',source:'Renouvelle ta vie'}},
  {emoji:'💡',ar:{label:'تطبيق شيء تعلمته',source:'علم أثمره العمل'},en:{label:'Apply something you learned',source:'Knowledge through action'},fr:{label:'Appliquer quelque chose appris',source:'Le savoir par l\'action'}},
  {emoji:'🍋',ar:{label:'تحويل مشكلة إلى فرصة',source:'اصنع من الليمون شراباً'},en:{label:'Turn a problem into opportunity',source:'Make lemonade from lemons'},fr:{label:'Transformer un problème en opportunité',source:'Faire de la limonade'}},
  {emoji:'💎',ar:{label:'كتابة ٣ نعم أشكر الله عليها',source:'هل تستبدل مليون بما تملك؟'},en:{label:'Write 3 blessings to thank God for',source:'Would you trade what you have?'},fr:{label:'Écrire 3 bénédictions pour remercier Dieu',source:'Échangeriez-vous ce que vous avez ?'}},
  {emoji:'📝',ar:{label:'محاسبة النفس قبل النوم',source:'حاسب نفسك'},en:{label:'Self-review before sleep',source:'Hold yourself accountable'},fr:{label:'Auto-examen avant le sommeil',source:'Tenez-vous responsable'}},
  {emoji:'🌙',ar:{label:'أذكار المساء',source:'عش في حدود يومك'},en:{label:'Evening remembrance',source:'Live within your day'},fr:{label:'Rappels du soir',source:'Vis dans ta journée'}}
];

// ═══════════════ QUIZ DATA (12 questions) ═══════════════
const QUIZ = [
  {ar:'هل تستيقظ كل يوم بنية واضحة لما تريد إنجازه؟',en:'Do you wake up every day with a clear intention for what you want to accomplish?',fr:'Vous réveillez-vous chaque jour avec une intention claire ?'},
  {ar:'هل تقلق كثيراً مما لم يحدث بعد؟',en:'Do you worry a lot about things that haven\'t happened yet?',fr:'Vous inquiétez-vous beaucoup de ce qui n\'est pas encore arrivé ?'},
  {ar:'هل تشعر بأن حياتك لها معنى وهدف واضح؟',en:'Do you feel your life has clear meaning and purpose?',fr:'Sentez-vous que votre vie a un sens et un but clairs ?'},
  {ar:'هل تقارن نفسك بالآخرين كثيراً؟',en:'Do you frequently compare yourself to others?',fr:'Vous comparez-vous souvent aux autres ?'},
  {ar:'هل تحاسب نفسك يومياً قبل النوم؟',en:'Do you review yourself daily before sleep?',fr:'Faites-vous un auto-examen quotidien avant de dormir ?'},
  {ar:'هل تشغل وقت فراغك بأشياء مفيدة؟',en:'Do you fill your free time with useful activities?',fr:'Remplissez-vous votre temps libre avec des activités utiles ?'},
  {ar:'هل تستطيع أن تسامح من أساء إليك؟',en:'Can you forgive those who wronged you?',fr:'Pouvez-vous pardonner ceux qui vous ont fait du tort ?'},
  {ar:'هل تشكر الله على نعمه يومياً؟',en:'Do you thank God for His blessings daily?',fr:'Remerciez-vous Dieu pour Ses bénédictions quotidiennement ?'},
  // 4 NEW questions
  {ar:'هل تطبق ما تتعلمه أم تكتفي بالقراءة فقط؟',en:'Do you apply what you learn or just read without action?',fr:'Appliquez-vous ce que vous apprenez ou vous contentez-vous de lire ?'},
  {ar:'هل تشعر بالسكينة عند ذكر الله والصلاة؟',en:'Do you feel peace when remembering God and praying?',fr:'Ressentez-vous la paix en vous souvenant de Dieu et en priant ?'},
  {ar:'هل تتقبل قضاء الله وقدره في الأمور التي لا تستطيع تغييرها؟',en:'Do you accept God\'s decree in matters you cannot change?',fr:'Acceptez-vous le décret de Dieu dans les choses que vous ne pouvez pas changer ?'},
  {ar:'هل لديك عادات يومية ثابتة تلتزم بها؟',en:'Do you have consistent daily habits that you stick to?',fr:'Avez-vous des habitudes quotidiennes constantes que vous respectez ?'}
];

// ═══════════════ DUAS DATA (8 total) ═══════════════
const DUAS = [
  {ar:{label:'دعاء الصباح',text:'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ',tr:'أصبحنا وأصبح الملك لله'},en:{label:'Morning Dua',text:'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ',tr:'We have reached the morning and the kingdom belongs to God'},fr:{label:'Dua du Matin',text:'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ',tr:'Nous avons atteint le matin et le royaume appartient à Dieu'}},
  {ar:{label:'دعاء القلق',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',tr:'اللهم إني أعوذ بك من الهم والحزن'},en:{label:'Dua for Worry',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',tr:'O God, I seek refuge in You from worry and grief'},fr:{label:'Dua contre le Souci',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',tr:'O Dieu, je cherche refuge aupres de Toi contre le souci et la tristesse'}},
  {ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ',tr:'حسبي الله لا إله إلا هو عليه توكلت'},en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ',tr:'God is sufficient for me, there is no god but Him, in Him I place my trust'},fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ',tr:'Dieu me suffit, il n\'y a de dieu que Lui, en Lui je place ma confiance'}},
  {ar:{label:'دعاء المساء',text:'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ',tr:'أمسينا وأمسى الملك لله'},en:{label:'Evening Dua',text:'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ',tr:'We have reached the evening and the kingdom belongs to God'},fr:{label:'Dua du Soir',text:'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ',tr:'Nous avons atteint le soir et le royaume appartient a Dieu'}},
  // 4 NEW duas
  {ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'اللهم اهدني وسددني'},en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O God, guide me and keep me on the right path'},fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Dieu, guide-moi et maintiens-moi sur le droit chemin'}},
  {ar:{label:'دعاء قبل النوم',text:'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',tr:'باسمك اللهم أموت وأحيا'},en:{label:'Dua Before Sleep',text:'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',tr:'In Your name, O God, I die and I live'},fr:{label:'Dua Avant le Sommeil',text:'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',tr:'En Ton nom, O Dieu, je meurs et je vis'}},
  {ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'ربنا أفرغ علينا صبراً وثبت أقدامنا'},en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet'},fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, accorde-nous patience et affermis nos pas'}},
  {ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'رب أوزعني أن أشكر نعمتك التي أنعمت علي'},en:{label:'Dua for Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor which You bestowed upon me'},fr:{label:'Dua pour la Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi d\'etre reconnaissant pour Ta faveur que Tu m\'as accordee'}}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('jh-lang') || 'ar';
let theme = localStorage.getItem('jh-theme') || 'sunrise';
const themes = ['sunrise','night','garden'];
const themeIcons = ['🌅','🌙','🌿'];
const themeNames = {sunrise:'شروق',night:'ليل هادئ',garden:'حديقة'};
let currentPrincipleIdx = -1; // for keyboard nav

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderPrinciples();
  renderAnxiety();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH with guide items ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  // Render splash features
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    const features = T[lang].splashFeatures;
    featuresEl.innerHTML = features.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('jh-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabPrinciples', t.tabPrinciples); set('tabAnxiety', t.tabAnxiety);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('principlesTitle', t.principlesTitle); set('principlesDesc', t.principlesDesc);
  set('anxietyTitle', t.anxietyTitle); set('anxietyDesc', t.anxietyDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderPrinciples(); renderAnxiety(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  // Update splash features if visible
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('jh-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % PRINCIPLES.length;
  const p = PRINCIPLES[dayIdx];
  const pd = p[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${pd.title}</div>
    <div class="daily-body">${pd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=principles]').click()">${t.tabPrinciples} &#8594;</div>
  `;
  const sections = [
    {icon:'🔄',tab:'principles',title:t.tabPrinciples,desc:lang==='ar'?'٢٦ مبدأ للتجديد':lang==='fr'?'26 principes':'26 principles'},
    {icon:'😌',tab:'anxiety',title:t.tabAnxiety,desc:lang==='ar'?'من القلق للسكينة':lang==='fr'?'De l\'anxiete a la paix':'From anxiety to peace'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر نفسك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: PRINCIPLES (with search + share) ═══════════════
function renderPrinciples() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="principlesSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterPrinciples(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = PRINCIPLES.map((p, i) => {
    const d = p[lang];
    return `
    <div class="principle-card scroll-reveal" id="principle-${p.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('principle-${p.id}')">
        <span class="principle-num">${p.id}</span>
        <span class="principle-emoji">${p.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="comparison-box">
            <div class="comparison-side carnegie-side">
              <div class="comp-label">🇺🇸 ${t.carnegie}</div>
              <div class="comp-text">${d.carnegie}</div>
            </div>
            <div class="comparison-side ghazali-side">
              <div class="comp-label">☪️ ${t.ghazali}</div>
              <div class="comp-text">${d.ghazali}</div>
            </div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();sharePrinciple(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('principlesContainer')||{}).innerHTML= searchBar + cards;
}

function filterPrinciples(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

// ═══════════════ SHARE PRINCIPLE ═══════════════
async function sharePrinciple(idx) {
  const p = PRINCIPLES[idx];
  const d = p[lang];
  const text = `${p.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.action}\n\n— جدد حياتك | Renew Your Life`;
  if (navigator.share) {
    try {
      await navigator.share({ title: d.title, text: text });
    } catch(e) { /* user cancelled */ }
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!');
    } catch(e) {
      showToast('Could not copy');
    }
  }
}

// ═══════════════ RENDER: ANXIETY ═══════════════
function renderAnxiety() {
  const t = T[lang];
  (document.getElementById('anxietyContainer')||{}).innerHTML= ANXIETY_DATA.map(a => {
    const d = a[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${a.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="anxiety-problem">
        <span class="anxiety-label">${t.problem}</span>
        ${d.problem}
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${t.solution}</span>
        ${d.solution}
      </div>
      <div class="verse-box">
        <div class="verse-arabic">${d.verse}</div>
        <div class="verse-ref">${d.verseRef}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS (with streak) ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('jh-habits') || '{}');
  if (habitsState.date !== today) {
    // Update streak before resetting
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('jh-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  const container = document.getElementById('habitsContainer');
  if (!container) return;
  container.innerHTML = HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div>
        <div class="habit-label">${d.label}</div>
        <div class="habit-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  // Insert streak before container
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('jh-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('jh-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  // Check if all done -> confetti
  if (hs.done.length === HABITS.length) {
    launchConfetti();
    showToast(T[lang].allDone);
  }
}

function resetHabits() {
  localStorage.setItem('jh-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Reinitialise' : 'Reset');
}

function updateHabitsProgress(hs) {
  const done = hs.done.length;
  const total = HABITS.length;
  const pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

// ═══════════════ STREAK SYSTEM ═══════════════
function updateStreak(prevState) {
  // Called when a new day starts, check if previous day had all habits done
  let streakData = JSON.parse(localStorage.getItem('jh-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) {
      streakData.count++;
    } else if (prevState.date !== new Date().toDateString()) {
      // Gap detected
      streakData.count = prevState.done.length === HABITS.length ? 1 : 0;
    }
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) {
    streakData.count = 0;
    streakData.lastDate = prevState.date;
  }
  localStorage.setItem('jh-streak', JSON.stringify(streakData));
}

function getStreak() {
  const streakData = JSON.parse(localStorage.getItem('jh-streak') || '{"count":0,"lastDate":""}');
  return streakData.count;
}

// ═══════════════ CONFETTI ANIMATION ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#FF8C61','#4FC3F7','#66BB6A','#E8A040','#E57373','#B388FF','#FFD54F'];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 120) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
    }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  container.innerHTML = QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  const opts = document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`);
  opts.forEach((o, oi) => {
    const optVal = [2,1,0][oi];
    o.classList.toggle('selected', optVal === val);
  });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang === 'ar' ? 'أجب على جميع الأسئلة' : lang === 'fr' ? 'Repondez a toutes les questions' : 'Answer all questions');
    return;
  }
  // Questions 2, 4 are inverted (worry/compare = bad)
  const invertedQs = [1, 3];
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => {
    score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v;
  });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji = '🌟'; title = lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
    desc = lang==='ar'?'حياتك متجددة ومليئة بالمعنى. استمر على هذا الطريق!':lang==='fr'?'Votre vie est renouvelee et pleine de sens. Continuez !':'Your life is renewed and full of meaning. Keep going!';
  } else if (pct >= 50) {
    emoji = '🌅'; title = lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc = lang==='ar'?'أنت على الطريق الصحيح لكن هناك مجال للتجديد. راجع المبادئ التي تحتاج تطوير.':lang==='fr'?'Vous etes sur la bonne voie mais il y a place pour le renouveau.':'You\'re on the right track but there\'s room for renewal.';
  } else {
    emoji = '🔄'; title = lang==='ar'?'حان وقت التجديد':lang==='fr'?'Il est temps de renouveler':'Time to Renew';
    desc = lang==='ar'?'حياتك بحاجة لتجديد حقيقي. ابدأ بمبدأ واحد من القائمة وطبّقه هذا الأسبوع.':lang==='fr'?'Votre vie a besoin d\'un vrai renouveau. Commencez par un principe cette semaine.':'Your life needs real renewal. Start with one principle this week.';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${pct}%</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${desc}</div>
    <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>
  `;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"جدد حياتك" هو رد الشيخ الغزالي الإسلامي على كتاب ديل كارنيجي "دع القلق وابدأ الحياة". قرأ الغزالي كتاب كارنيجي وأعجب به، ثم قرر "إعادة الكتاب إلى أصوله الإسلامية" — موضحاً أن كل حكمة توصل إليها كارنيجي بالتجربة، علّمها الإسلام بالوحي قبل ١٤٠٠ سنة. الكتاب يضم ٢٦ فصلاً تغطي: العيش في الحاضر، التغلب على القلق، قوة العمل، محاسبة النفس، والتفرد.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "جدد حياتك" — الشيخ محمد الغزالي — دار نهضة مصر','القرآن الكريم','صحيح البخاري ومسلم','كتاب "دع القلق وابدأ الحياة" — ديل كارنيجي'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending women\'s rights in Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"Renew Your Life" is Sheikh al-Ghazali\'s Islamic response to Dale Carnegie\'s "How to Stop Worrying and Start Living." Al-Ghazali read Carnegie\'s book, admired it, then decided to "return the book to its Islamic origins" — showing that every wisdom Carnegie discovered through experience, Islam taught through revelation 1,400 years earlier. The book has 26 chapters covering: living in the present, overcoming anxiety, the power of action, self-accountability, and uniqueness.',
      sourcesTitle: 'Sources',
      sources: ['"Renew Your Life" (Jaddid Hayatak) — Sheikh Mohammed al-Ghazali — Dar Nahdet Misr','The Holy Quran','Sahih al-Bukhari and Muslim','"How to Stop Worrying and Start Living" — Dale Carnegie'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme « Le Litteraire de la Predication ». Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal. Connu pour le renouveau, la lutte contre la rigidite et la defense des droits des femmes en Islam.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« Renouvelle ta Vie » est la reponse islamique du Sheikh al-Ghazali au livre de Dale Carnegie « Comment arreter de s\'inquieter et commencer a vivre ». Al-Ghazali a lu le livre de Carnegie, l\'a admire, puis a decide de « ramener le livre a ses origines islamiques » — montrant que chaque sagesse que Carnegie a decouverte par l\'experience, l\'Islam l\'a enseignee par la revelation il y a 1 400 ans. Le livre comprend 26 chapitres.',
      sourcesTitle: 'Sources',
      sources: ['« Renouvelle ta Vie » (Jaddid Hayatak) — Sheikh Mohammed al-Ghazali — Dar Nahdet Misr','Le Saint Coran','Sahih al-Bukhari et Muslim','« Comment arreter de s\'inquieter et commencer a vivre » — Dale Carnegie'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "جدد حياتك" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٦ مبدأ، ٨ حلول للقلق، تتبع العادات، اختبار ذاتي، ٨ أدعية.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم (يمين/يسار) للتنقل بين المبادئ. اضغط Escape لإغلاق اللوحات.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/jaddid-hayatak'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Renew Your Life" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 26 principles, 8 anxiety solutions, habit tracker with streaks, self-quiz, 8 duas.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys (left/right) to navigate between principles. Press Escape to close panels.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/jaddid-hayatak'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« Renouvelle ta Vie » par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah Prophetique.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 26 principes, 8 solutions anxiete, suivi habitudes, quiz, 8 duas.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les fleches (gauche/droite) pour naviguer entre les principes. Echap pour fermer les panneaux.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/jaddid-hayatak'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `
    <div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL (IntersectionObserver) ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  function observeAll() {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el));
  }
  observeAll();
  // Re-observe when panels change
  const origInitTabs = initTabs;
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(observeAll, 100));
  });
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    // Escape closes panels
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      // Close any open principle
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    // Arrow keys for principles navigation
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const principlesPanel = document.getElementById('panel-principles');
      if (!principlesPanel || !principlesPanel.classList.contains('active')) return;
      // Don't navigate if search is focused
      if (document.activeElement && document.activeElement.id === 'principlesSearch') return;
      e.preventDefault();
      const cards = document.querySelectorAll('.principle-card');
      const visibleCards = Array.from(cards).filter(c => c.style.display !== 'none');
      if (visibleCards.length === 0) return;
      // Close current
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < visibleCards.length) {
        visibleCards[currentPrincipleIdx].classList.remove('open');
      }
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentPrincipleIdx = Math.max(0, Math.min(visibleCards.length - 1, currentPrincipleIdx + dir));
      visibleCards[currentPrincipleIdx].classList.add('open');
      visibleCards[currentPrincipleIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() {
  document.getElementById('helpPanel').classList.toggle('hidden');
  playSound('click');
}
function toggleDuaPanel() {
  document.getElementById('duaPanel').classList.toggle('hidden');
  playSound('click');
}
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (btn) btn.classList.toggle('visible', window.scrollY > 300);
  });
}

// ═══════════════ SOUND EFFECTS (Web Audio API) ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ GENIUS FEATURE 1: TYPEWRITER QUOTE EFFECT ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  const isRTL = document.documentElement.dir === 'rtl';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) {
      dailyTitle.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    } else {
      setTimeout(() => dailyTitle.classList.add('tw-done'), 1500);
    }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ GENIUS FEATURE 4: PAGE TRANSITIONS ═══════════════
(function upgradeTabTransitions() {
  const origInitTabs = initTabs;
  initTabs = function() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const isRTL = document.documentElement.dir === 'rtl';
        const exitClass = isRTL ? 'panel-exit-rtl' : 'panel-exit-ltr';
        const enterClass = isRTL ? 'panel-enter-rtl' : 'panel-enter-ltr';
        const currentPanel = document.querySelector('.panel.active');
        if (currentPanel) {
          currentPanel.classList.add(exitClass);
          setTimeout(() => {
            currentPanel.classList.remove('active', exitClass);
          }, 280);
        }
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const newPanel = document.getElementById('panel-' + tab.dataset.tab);
        if (newPanel) {
          setTimeout(() => {
            newPanel.classList.add('active', enterClass);
            setTimeout(() => newPanel.classList.remove(enterClass), 300);
          }, currentPanel ? 280 : 0);
        }
        window.scrollTo({top: 0, behavior: 'smooth'});
        playSound('click');
        // Feature 8: Haptic
        try { navigator.vibrate && navigator.vibrate(10); } catch(e) {}
        // Feature 12: Skeleton loading for first visit
        if (newPanel && !newPanel.dataset.loaded) {
          showSkeletonLoading(newPanel);
          newPanel.dataset.loaded = '1';
        }
        // Re-init scroll reveal
        setTimeout(() => {
          document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
            if (window._scrollObserver) window._scrollObserver.observe(el);
          });
          initTypewriter();
        }, 350);
      });
    });
  };
})();

// ═══════════════ GENIUS FEATURE 5: FLOATING PARTICLES ═══════════════
function initParticles() {
  const canvas = document.createElement('canvas');
  canvas.className = 'particles-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 20;
  // jaddid-hayatak: warm sunrise dots (peach/gold)
  const colors = ['rgba(255,140,97,0.15)', 'rgba(232,160,64,0.12)', 'rgba(255,213,79,0.1)', 'rgba(255,180,120,0.13)'];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4 + 2,
      vy: -(Math.random() * 0.3 + 0.1),
      vx: (Math.random() - 0.5) * 0.2,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.vy;
      p.x += p.vx;
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ═══════════════ GENIUS FEATURE 6: ANIMATED NUMBER COUNTERS ═══════════════
function initNumberCounters() {
  const counterEls = document.querySelectorAll('[data-count-to]');
  if (!counterEls.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.countTo, 10);
        animateCounter(el, 0, target, 1200);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  counterEls.forEach(el => observer.observe(el));
}

function animateCounter(el, start, end, duration) {
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * eased);
    el.textContent = current;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ═══════════════ GENIUS FEATURE 7: SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0;
  let touchStartY = 0;
  const tabOrder = ['home', 'principles', 'anxiety', 'habits', 'quiz', 'about'];

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 50 || Math.abs(dy) > Math.abs(dx)) return;
    const isRTL = document.documentElement.dir === 'rtl';
    const activeTab = document.querySelector('.tab.active');
    if (!activeTab) return;
    const currentIdx = tabOrder.indexOf(activeTab.dataset.tab);
    if (currentIdx < 0) return;
    let nextIdx;
    if (isRTL) {
      nextIdx = dx > 0 ? currentIdx + 1 : currentIdx - 1;
    } else {
      nextIdx = dx < 0 ? currentIdx + 1 : currentIdx - 1;
    }
    if (nextIdx >= 0 && nextIdx < tabOrder.length) {
      const nextTab = document.querySelector(`.tab[data-tab="${tabOrder[nextIdx]}"]`);
      if (nextTab) nextTab.click();
    }
  }, { passive: true });
}

// ═══════════════ GENIUS FEATURE 8: HAPTIC FEEDBACK ═══════════════
function initHapticFeedback() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('button') || e.target.closest('.home-card') || e.target.closest('.principle-head')) {
      try { navigator.vibrate && navigator.vibrate(10); } catch(e2) {}
    }
  });
}

// ═══════════════ GENIUS FEATURE 9: AUTO DARK MODE ═══════════════
function initAutoDarkMode() {
  if (!localStorage.getItem('jh-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('night');
  }
}

// ═══════════════ GENIUS FEATURE 10: READING MODE ═══════════════
function initReadingMode() {
  // Add reading mode button to header
  const controls = document.querySelector('.header-controls');
  if (!controls) return;
  const btn = document.createElement('button');
  btn.className = 'reading-toggle';
  btn.innerHTML = '<span style="font-size:1.1rem">&#128214;</span>';
  btn.title = 'Reading Mode';
  btn.onclick = toggleReadingMode;
  controls.insertBefore(btn, controls.firstChild);
}

function toggleReadingMode() {
  const isActive = document.body.classList.toggle('reading-mode');
  if (isActive) {
    const exitBtn = document.createElement('button');
    exitBtn.className = 'reading-exit';
    exitBtn.id = 'readingExitBtn';
    exitBtn.innerHTML = '&#10005;';
    exitBtn.onclick = toggleReadingMode;
    document.body.appendChild(exitBtn);
  } else {
    const exitBtn = document.getElementById('readingExitBtn');
    if (exitBtn) exitBtn.remove();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.body.classList.contains('reading-mode')) {
    toggleReadingMode();
  }
});

// ═══════════════ GENIUS FEATURE 11: PULL-TO-REFRESH ═══════════════
function initPullToRefresh() {
  const indicator = document.createElement('div');
  indicator.className = 'ptr-indicator';
  indicator.innerHTML = '&#8635;';
  document.body.appendChild(indicator);
  let startY = 0;
  let pulling = false;

  document.addEventListener('touchstart', (e) => {
    if (window.scrollY === 0) {
      startY = e.touches[0].clientY;
      pulling = true;
    }
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!pulling) return;
    const dy = e.touches[0].clientY - startY;
    if (dy > 30 && dy < 150 && window.scrollY === 0) {
      indicator.classList.add('ptr-visible');
    }
  }, { passive: true });

  document.addEventListener('touchend', () => {
    if (indicator.classList.contains('ptr-visible')) {
      indicator.classList.add('ptr-refreshing');
      // Refresh daily content
      renderHome();
      initTypewriter();
      setTimeout(() => {
        indicator.classList.remove('ptr-visible', 'ptr-refreshing');
      }, 800);
    }
    pulling = false;
  }, { passive: true });
}

// ═══════════════ GENIUS FEATURE 12: SKELETON LOADING ═══════════════
function showSkeletonLoading(panel) {
  const container = panel.querySelector('[id$="Container"]');
  if (!container || container.children.length === 0) return;
  const savedHTML = container.innerHTML;
  const skeletonCount = Math.min(container.children.length, 4);
  let skeletonHTML = '';
  for (let i = 0; i < skeletonCount; i++) {
    skeletonHTML += '<div class="skeleton skeleton-card"></div>';
  }
  container.innerHTML = skeletonHTML;
  setTimeout(() => {
    container.innerHTML = savedHTML;
  }, 300);
}

// ═══════════════ GENIUS FEATURE 13: EASTER EGG ═══════════════
let _easterEggShown = false;
function checkEasterEgg() {
  if (_easterEggShown) return;
  // Check if all quiz answers are given (quiz completed)
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length >= QUIZ.length) {
    const result = document.getElementById('quizResult');
    if (result && !result.classList.contains('hidden')) {
      // Check if score >= 75%
      const invertedQs = [1, 3];
      let score = 0;
      Object.entries(answers).forEach(([qi, v]) => {
        score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v;
      });
      const max = QUIZ.length * 2;
      const pct = Math.round(score / max * 100);
      if (pct >= 75) {
        showEasterEgg();
      }
    }
  }
}

function showEasterEgg() {
  if (_easterEggShown) return;
  _easterEggShown = true;
  const overlay = document.createElement('div');
  overlay.className = 'easter-egg-overlay';
  const messages = {
    ar: {
      calligraphy: 'بارك الله فيك',
      message: 'لقد أظهرت فهماً عميقاً لمبادئ التجديد. أنت على طريق التميز. استمر في تطبيق ما تعلمت، فكل يوم فرصة جديدة لتجديد حياتك.',
      close: 'جزاك الله خيراً'
    },
    en: {
      calligraphy: 'May God Bless You',
      message: 'You have shown a deep understanding of the principles of renewal. You are on the path of excellence. Keep applying what you have learned, for every day is a new opportunity to renew your life.',
      close: 'Thank You'
    },
    fr: {
      calligraphy: 'Que Dieu vous benisse',
      message: 'Vous avez montre une comprehension profonde des principes de renouveau. Vous etes sur le chemin de l\'excellence. Continuez a appliquer ce que vous avez appris.',
      close: 'Merci'
    }
  };
  const m = messages[lang] || messages.en;
  overlay.innerHTML = `<div class="easter-egg-card">
    <div class="ee-calligraphy">${m.calligraphy}</div>
    <div class="ee-message">${m.message}</div>
    <button class="ee-close" onclick="this.closest('.easter-egg-overlay').remove()">${m.close}</button>
  </div>`;
  document.body.appendChild(overlay);
  launchConfetti();
}

// Hook easter egg check into submitQuiz
const _origSubmitQuiz = submitQuiz;
submitQuiz = function() {
  _origSubmitQuiz();
  setTimeout(checkEasterEgg, 500);
};

// ═══════════════ ENHANCED SCROLL REVEAL (store observer ref) ═══════════════
(function() {
  const origInitScrollReveal = initScrollReveal;
  initScrollReveal = function() {
    if (!('IntersectionObserver' in window)) return;
    window._scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          window._scrollObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => setTimeout(() => {
        document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
      }, 100));
    });
  };
})();

// ═══════════════ ADD COUNTER ATTRIBUTES TO HOME CARDS ═══════════════
const _origRenderHome = renderHome;
renderHome = function() {
  _origRenderHome();
  // Add count-to attributes to home card descriptions that have numbers
  const descriptions = document.querySelectorAll('.home-card .hc-desc');
  descriptions.forEach(desc => {
    const text = desc.textContent;
    const match = text.match(/(\d+)/);
    if (match) {
      const num = parseInt(match[1]);
      const before = text.substring(0, text.indexOf(match[1]));
      const after = text.substring(text.indexOf(match[1]) + match[1].length);
      desc.innerHTML = `${before}<span class="counter-animate" data-count-to="${num}">0</span>${after}`;
    }
  });
  initNumberCounters();
  // Start typewriter after render
  setTimeout(initTypewriter, 600);
};

// ═══════════════ MASTER INIT: ALL GENIUS FEATURES ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  initAutoDarkMode();
  initParticles();
  initSwipeGestures();
  initHapticFeedback();
  initReadingMode();
  initPullToRefresh();
});

/* TICKER — rich trilingual content */
function startTicker(){
  var el=document.getElementById('tickerText');
  if(!el)return;
  var tips={
    ar:['🌅 ٢٦ مبدأ لتجديد حياتك','😌 من القلق إلى السكينة','📋 تتبع عاداتك اليومية','📖 كارنيجي قاله بالتجربة.. الإسلام قاله بالوحي','🤲 اللّهُمّ جَدِّد حَياتَنا','💡 Powered by workshop-diy.org'],
    en:['🌅 26 principles to renew your life','😌 From anxiety to peace','📋 Track your daily habits','📖 Carnegie said it by experience.. Islam said it by revelation','🤲 O God, renew our lives','💡 Powered by workshop-diy.org'],
    fr:['🌅 26 principes pour renouveler votre vie','😌 De l\'anxiété à la paix','📋 Suivez vos habitudes quotidiennes','📖 Carnegie l\'a dit par expérience.. l\'Islam l\'a dit par révélation','🤲 Ô Dieu, renouvelle nos vies','💡 Powered by workshop-diy.org']
  };
  var lang=document.documentElement.lang||'ar';
  var msgs=tips[lang]||tips.ar;
  var txt=msgs.join('  ✦  ');
  el.innerHTML='<span class="tc">'+txt+'  ✦  </span><span class="tc" aria-hidden="true">'+txt+'  ✦  </span>';
  el.style.animation='tickerMarquee '+Math.max(25,txt.length*0.12)+'s linear infinite';
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',startTicker)}else{startTicker()}
