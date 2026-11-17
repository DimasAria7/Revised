/* ==========================================================================
   LEXIVIBE — Colorful Neo-Brutalist & Scannable English Lab (Group 11)
   ========================================================================== */

// Crisp Inline SVG Icons (OS-Independent)
const ICONS = {
  speaker: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
  stop: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1"></rect></svg>`,
  bulb: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>`,
  check: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  cross: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
};

// 0. Random Quotes (Loaded on Open)
const QUOTES_DATA = [
  { text: "The limits of my language mean the limits of my world.", author: "Wittgenstein" },
  { text: "A different language is a different vision of life.", author: "Federico Fellini" },
  { text: "To have another language is to possess a second soul.", author: "Charlemagne" },
  { text: "Raise your words, not your voice. It is rain that grows flowers.", author: "Rumi" },
  { text: "The art of conversation lies in listening.", author: "Malcolm Forbes" },
  { text: "Words infuse thought with clarity and life.", author: "Maya Angelou" }
];

// 1. Units 09–14 Syllabus Data (Concise, Scannable & Practical)
const UNITS_DATA = [
  {
    unit: 9,
    colorClass: "bg-yellow",
    shortLabel: "Social Situations",
    headerLabel: "UNIT 09 // SOCIAL SITUATIONS",
    title: "Having a Conversation: What to Say in Social Situations",
    summary: "Start natural small talk, keep conversations flowing, share opinions politely, and exit smoothly.",
    subtopics: [
      {
        title: "Opening a Conversation",
        tag: "ICEBREAKERS",
        tip: "Use a friendly greeting + shared context question.",
        phrases: [
          "Hi! Mind if I join you? I'm [Name], by the way.",
          "Great session today—what did you think of the main topic?"
        ]
      },
      {
        title: "Making & Sustaining Chat",
        tag: "FOLLOW-UP",
        tip: "Ask open 'What/How' questions to keep momentum.",
        phrases: [
          "That's interesting—what got you into that field?",
          "Speaking of which, have you tried using it in your project?"
        ]
      },
      {
        title: "Closing a Conversation",
        tag: "POLITE EXIT",
        tip: "Thank them + give a clear reason for leaving.",
        phrases: [
          "It was great chatting with you, though I should head to class now.",
          "Let's stay in touch—feel free to reach out anytime!"
        ]
      },
      {
        title: "Sharing Opinions",
        tag: "VIEWPOINTS",
        tip: "Acknowledge their point before adding yours.",
        phrases: [
          "From my perspective, real speaking practice beats memorizing rules.",
          "I see your point, although I'd argue timing also matters."
        ]
      }
    ],
    dialogueTitle: "Campus Workshop Mixer",
    dialogue: [
      { speaker: "ARIF", text: "Hi! Great turnout today. What brought you to this workshop?" },
      { speaker: "SINTA", text: "I wanted more speaking practice. From my perspective, real practice helps most." },
      { speaker: "ARIF", text: "Agreed! I need to join my group now—great chatting with you!" }
    ],
    practicePrompt: "Write 2 lines: open a chat with a classmate and share one opinion."
  },
  {
    unit: 10,
    colorClass: "bg-mint",
    shortLabel: "Story & News Report",
    headerLabel: "UNIT 10 // STORY & NEWS REPORT",
    title: "Story (Re-)Telling and News Report",
    summary: "Tell engaging stories in sequence and report events clearly using What, When, Where, How, and Why.",
    subtopics: [
      {
        title: "Re-telling Stories",
        tag: "SEQUENCE",
        tip: "Hook the listener -> build tension -> share the ending.",
        phrases: [
          "You won't believe what happened on my way to campus yesterday...",
          "At first everything seemed normal, until suddenly the lights went out."
        ]
      },
      {
        title: "What Happened? (Headline)",
        tag: "CORE EVENT",
        tip: "State the main event clearly in one sentence.",
        phrases: [
          "Student researchers just launched a solar-powered study kiosk.",
          "Over 300 students tested the new app during its first week."
        ]
      },
      {
        title: "When & Where?",
        tag: "TIME & PLACE",
        tip: "Anchor your report with exact time and location.",
        phrases: [
          "The event took place at 9 AM outside the main auditorium.",
          "According to witnesses, it happened right after the morning lecture."
        ]
      },
      {
        title: "How & Why?",
        tag: "CAUSE & METHOD",
        tip: "Use 'because' or 'as a result' to explain reasons.",
        phrases: [
          "It succeeded because the team tested three prototypes first.",
          "Due to heavy rain, the outdoor showcase moved indoors."
        ]
      }
    ],
    dialogueTitle: "60-Second Campus News Brief",
    dialogue: [
      { speaker: "ANCHOR", text: "At 9 AM today in the Student Center, Group 11 launched a speaking practice web app." },
      { speaker: "REPORTER", text: "They built it because students wanted a clean tool for real conversation drills." },
      { speaker: "ANCHOR", text: "Over fifty classmates tried it during the live demo." }
    ],
    practicePrompt: "Report a recent event in 2 sentences (What, When/Where, Why)."
  },
  {
    unit: 11,
    colorClass: "bg-sky",
    shortLabel: "Recent Changes",
    headerLabel: "UNIT 11 // RECENT CHANGES",
    title: "Talking about Recent Changes",
    summary: "Compare past habits and conditions with today's reality using clear contrast patterns.",
    subtopics: [
      {
        title: "Past vs. Present Habits",
        tag: "USED TO vs NOW",
        tip: "Pair 'used to + verb' with 'whereas now...'",
        phrases: [
          "We used to carry heavy dictionaries, whereas now we check audio online.",
          "Compared to five years ago, online teamwork is second nature."
        ]
      },
      {
        title: "Describing Ongoing Trends",
        tag: "CURRENT SHIFTS",
        tip: "Use 'More and more...' + present continuous.",
        phrases: [
          "More and more students are using interactive apps to practice English.",
          "What has changed most is how fast teams share feedback."
        ]
      }
    ],
    dialogueTitle: "How Study Habits Changed",
    dialogue: [
      { speaker: "DINA", text: "Group projects feel way smoother than in our first semester." },
      { speaker: "REZA", text: "True! We used to meet only in the library, whereas now we co-edit online first." },
      { speaker: "DINA", text: "And as a result, our live discussions are much faster." }
    ],
    practicePrompt: "Compare one habit today with how you used to do it 3 years ago."
  },
  {
    unit: 12,
    colorClass: "bg-coral",
    shortLabel: "Job Interviews",
    headerLabel: "UNIT 12 // JOB INTERVIEWS",
    title: "Hypothetical Situations/Questions in Job Interviews",
    summary: "Answer 'What if...' interview questions calmly using 2nd Conditionals and neutral, nonjudgmental language.",
    subtopics: [
      {
        title: "Hypothetical Situations",
        tag: "IF I WERE... I WOULD...",
        tip: "Use 'If I were...' + 'I would...' for imagined scenarios.",
        phrases: [
          "If I were faced with a sudden deadline shift, I would reprioritize key tasks first.",
          "Suppose two teammates disagreed—I would host a quick 5-minute alignment chat."
        ]
      },
      {
        title: "Nonjudgmental Responding",
        tag: "OBJECTIVE TONE",
        tip: "Focus on obstacles and solutions rather than blaming people.",
        phrases: [
          "Rather than assuming carelessness, I would ask what blocked their progress.",
          "Clarifying expectations early helps different working styles click."
        ]
      }
    ],
    dialogueTitle: "Interview Scenario Check",
    dialogue: [
      { speaker: "HR", text: "What would you do if a teammate missed a deadline before a presentation?" },
      { speaker: "CANDIDATE", text: "I would check in without judgment to spot the bottleneck, then split remaining tasks." },
      { speaker: "HR", text: "Great—calm, fair, and solution-focused." }
    ],
    practicePrompt: "Complete: 'If a teammate fell behind on a group task, I would...'"
  },
  {
    unit: 13,
    colorClass: "bg-lilac",
    shortLabel: "Dealing with Complaints",
    headerLabel: "UNIT 13 // COMPLAINTS",
    title: "Dealing with Complaints",
    summary: "Calm upset people by apologizing directly, showing genuine sympathy, and offering a clear fix.",
    subtopics: [
      {
        title: "Apologizing Sincerely",
        tag: "OWNERSHIP",
        tip: "Apologize directly without making defensive excuses.",
        phrases: [
          "I sincerely apologize for the delay and any inconvenience caused.",
          "That fell short of our standard, and I'll fix it right away."
        ]
      },
      {
        title: "Showing Sympathy",
        tag: "EMPATHY FIRST",
        tip: "Validate their frustration before explaining the solution.",
        phrases: [
          "I completely understand why you're frustrated—I'd feel the same way.",
          "Thank you for flagging this early so we can make it right."
        ]
      }
    ],
    dialogueTitle: "Handling a Late Delivery",
    dialogue: [
      { speaker: "CLIENT", text: "Our printed handouts arrived late, and the session already started." },
      { speaker: "STAFF", text: "I completely understand how stressful that is, and I sincerely apologize." },
      { speaker: "STAFF", text: "I'm bringing the remaining copies straight to your room right now." }
    ],
    practicePrompt: "Write 1 polite sentence apologizing and showing sympathy for a late reply."
  },
  {
    unit: 14,
    colorClass: "bg-peach",
    shortLabel: "Conflict Resolution",
    headerLabel: "UNIT 14 // CONFLICT RESOLUTION",
    title: "Conflict Resolution",
    summary: "Resolve disagreements constructively with practical suggestions, logical arguments, and clear explanations.",
    subtopics: [
      {
        title: "Giving Advice & Suggestions",
        tag: "COLLABORATIVE",
        tip: "Frame suggestions as 'Have you considered...?'",
        phrases: [
          "Have you considered combining both ideas into a two-part layout?",
          "One practical compromise is to keep the design clean and test it with peers."
        ]
      },
      {
        title: "Making Arguments",
        tag: "CLAIM + REASON",
        tip: "State your point + support it with user benefit.",
        phrases: [
          "I recommend shorter text because readers scan key points in seconds.",
          "While color adds energy, keeping white space prevents visual clutter."
        ]
      },
      {
        title: "Explaining Clearly",
        tag: "SIMPLIFY",
        tip: "Use 'To put it simply...' or numbered steps.",
        phrases: [
          "To put it simply: define the issue, pick a compromise, and move forward.",
          "Just to recap, we agreed to keep 6 units and add color accents."
        ]
      }
    ],
    dialogueTitle: "Team Design Compromise",
    dialogue: [
      { speaker: "ARIEL", text: "I think keeping it simple with less text makes the website easier to read." },
      { speaker: "DIMS", text: "Good point. To put it simply, we want color energy without walls of text." },
      { speaker: "ARIEL", text: "Yes! Soft color accents + short bullet points works best." }
    ],
    practicePrompt: "Write 1 suggestion using 'Have you considered...' to solve a group disagreement."
  }
];

// 2. Rare Words Dataset (16 Words — Crisp & Scannable)
const VOCAB_DATA = [
  {
    id: "petrichor",
    word: "Petrichor",
    ipa: "/ˈpet.rɪ.kɔːr/",
    pos: "NOUN",
    category: "Nature & Atmosphere",
    badgeColor: "bg-mint",
    definition: "The pleasant, earthy smell after rain falls on dry ground.",
    basicAlt: "Nice smell when it rains",
    origin: "Greek 'petra' (stone) + 'ichor' (ethereal fluid).",
    example: "The evening drizzle released a wave of fresh petrichor."
  },
  {
    id: "sonder",
    word: "Sonder",
    ipa: "/ˈsɒn.dər/",
    pos: "NOUN",
    category: "Emotion & Mind",
    badgeColor: "bg-yellow",
    definition: "Realizing that every stranger around you has a life as complex as your own.",
    basicAlt: "Realizing strangers also have deep lives",
    origin: "Coined in The Dictionary of Obscure Sorrows.",
    example: "Watching commuters at the station gave Maya a quiet moment of sonder."
  },
  {
    id: "ineffable",
    word: "Ineffable",
    ipa: "/ɪnˈef.ə.bəl/",
    pos: "ADJECTIVE",
    category: "Emotion & Mind",
    badgeColor: "bg-yellow",
    definition: "Too great or beautiful to be described in words.",
    basicAlt: "Impossible to put into words",
    origin: "Latin 'ineffabilis' (unutterable).",
    example: "Sunrise above the clouds filled us with an ineffable sense of awe."
  },
  {
    id: "mellifluous",
    word: "Mellifluous",
    ipa: "/məˈlɪf.lu.əs/",
    pos: "ADJECTIVE",
    category: "Nature & Atmosphere",
    badgeColor: "bg-mint",
    definition: "A voice or sound that is sweet, smooth, and pleasant to hear.",
    basicAlt: "Very smooth sounding",
    origin: "Latin 'mel' (honey) + 'fluere' (to flow).",
    example: "The speaker's mellifluous voice kept the whole room listening."
  },
  {
    id: "luminous",
    word: "Luminous",
    ipa: "/ˈluː.mɪ.nəs/",
    pos: "ADJECTIVE",
    category: "Nature & Atmosphere",
    badgeColor: "bg-mint",
    definition: "Full of light; glowing brightly in the dark.",
    basicAlt: "Very bright and glowing",
    origin: "Latin 'lumen' (light).",
    example: "Jellyfish drifted like luminous lanterns under the night waves."
  },
  {
    id: "wanderlust",
    word: "Wanderlust",
    ipa: "/ˈwɒn.də.lʌst/",
    pos: "NOUN",
    category: "Emotion & Mind",
    badgeColor: "bg-yellow",
    definition: "A strong, irresistible desire to travel and explore the world.",
    basicAlt: "Strong urge to travel",
    origin: "German 'wandern' (roam) + 'Lust' (desire).",
    example: "Looking at railway maps always sparks her wanderlust."
  },
  {
    id: "euphoria",
    word: "Euphoria",
    ipa: "/juːˈfɔː.ri.ə/",
    pos: "NOUN",
    category: "Emotion & Mind",
    badgeColor: "bg-yellow",
    definition: "A feeling of intense excitement and overwhelming happiness.",
    basicAlt: "Feeling extremely happy",
    origin: "Greek 'euphoros' (bearing well).",
    example: "A wave of euphoria hit the team when they won first place."
  },
  {
    id: "enigmatic",
    word: "Enigmatic",
    ipa: "/ˌen.ɪɡˈmæt.ɪk/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    badgeColor: "bg-sky",
    definition: "Mysterious and difficult to interpret or understand.",
    basicAlt: "Mysterious and hard to read",
    origin: "Greek 'ainigma' (riddle).",
    example: "She gave an enigmatic smile before opening the envelope."
  },
  {
    id: "serene",
    word: "Serene",
    ipa: "/səˈriːn/",
    pos: "ADJECTIVE",
    category: "Nature & Atmosphere",
    badgeColor: "bg-mint",
    definition: "Calm, peaceful, and completely untroubled.",
    basicAlt: "Very calm and peaceful",
    origin: "Latin 'serenus' (clear, cloudless).",
    example: "At dawn, the mountain lake looked completely serene."
  },
  {
    id: "audacious",
    word: "Audacious",
    ipa: "/ɔːˈdeɪ.ʃəs/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    badgeColor: "bg-sky",
    definition: "Willing to take bold risks; fearless and daring.",
    basicAlt: "Very bold and fearless",
    origin: "Latin 'audere' (to dare).",
    example: "Launching a student studio in semester one was an audacious move."
  },
  {
    id: "ephemeral",
    word: "Ephemeral",
    ipa: "/ɪˈfem.ər.əl/",
    pos: "ADJECTIVE",
    category: "Time & Society",
    badgeColor: "bg-lilac",
    definition: "Lasting for only a very short time; fleeting.",
    basicAlt: "Lasting a short moment",
    origin: "Greek 'ephemeros' (lasting a day).",
    example: "Cherry blossoms are special because their beauty is ephemeral."
  },
  {
    id: "serendipity",
    word: "Serendipity",
    ipa: "/ˌser.ənˈdɪp.ə.ti/",
    pos: "NOUN",
    category: "Time & Society",
    badgeColor: "bg-lilac",
    definition: "Finding valuable or happy things by pure lucky chance.",
    basicAlt: "A lucky coincidence",
    origin: "Coined by Horace Walpole in 1754.",
    example: "Finding that rare book in a tiny alley shop was pure serendipity."
  },
  {
    id: "eloquent",
    word: "Eloquent",
    ipa: "/ˈel.ə.kwənt/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    badgeColor: "bg-sky",
    definition: "Fluent, persuasive, and expressive when speaking or writing.",
    basicAlt: "Speaking persuasively",
    origin: "Latin 'eloqui' (to speak out).",
    example: "Her eloquent speech convinced every judge in the room."
  },
  {
    id: "resilient",
    word: "Resilient",
    ipa: "/rɪˈzɪl.jənt/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    badgeColor: "bg-sky",
    definition: "Able to recover quickly from setbacks or tough conditions.",
    basicAlt: "Bounces back fast",
    origin: "Latin 'resilire' (to spring back).",
    example: "Great teams stay resilient even when plans change last minute."
  },
  {
    id: "nostalgia",
    word: "Nostalgia",
    ipa: "/nɒsˈtæl.dʒə/",
    pos: "NOUN",
    category: "Time & Society",
    badgeColor: "bg-lilac",
    definition: "A warm, sentimental longing for memories from the past.",
    basicAlt: "Missing good past memories",
    origin: "Greek 'nostos' (homecoming) + 'algos' (ache).",
    example: "That old song filled the room with instant childhood nostalgia."
  },
  {
    id: "quintessential",
    word: "Quintessential",
    ipa: "/ˌkwɪn.tɪˈsen.ʃəl/",
    pos: "ADJECTIVE",
    category: "Time & Society",
    badgeColor: "bg-lilac",
    definition: "Representing the most perfect or classic example of something.",
    basicAlt: "The most classic example",
    origin: "Medieval Latin 'quinta essentia' (fifth essence).",
    example: "Rainy coffee shop reading is the quintessential autumn vibe."
  }
];

// 3. Idioms (8 Crisp Entries)
const IDIOMS_DATA = [
  {
    idiom: "Bite the bullet",
    tag: "COURAGE",
    color: "bg-coral",
    meaning: "Force yourself to do something tough you've been delaying.",
    example: "I bit the bullet and gave my whole presentation in English."
  },
  {
    idiom: "Burn the midnight oil",
    tag: "STUDY",
    color: "bg-yellow",
    meaning: "Study or work late into the night.",
    example: "Group 11 burned the midnight oil to polish the project."
  },
  {
    idiom: "Read between the lines",
    tag: "INSIGHT",
    color: "bg-sky",
    meaning: "Understand the hidden meaning behind someone's words.",
    example: "Reading between the lines, her message meant she needed help."
  },
  {
    idiom: "Once in a blue moon",
    tag: "RARE",
    color: "bg-lilac",
    meaning: "Something that happens very rarely.",
    example: "He lives abroad now, so we meet once in a blue moon."
  },
  {
    idiom: "A penny for your thoughts",
    tag: "CHAT",
    color: "bg-mint",
    meaning: "Friendly way to ask someone what they're thinking about.",
    example: "You've been quiet for ten minutes—a penny for your thoughts?"
  },
  {
    idiom: "Cut to the chase",
    tag: "DIRECT",
    color: "bg-peach",
    meaning: "Get straight to the main point without wasting time.",
    example: "We only have five minutes left, so let's cut to the chase."
  },
  {
    idiom: "Walking on air",
    tag: "JOY",
    color: "bg-yellow",
    meaning: "Feeling extraordinarily happy after great news.",
    example: "She was walking on air after passing her interview."
  },
  {
    idiom: "Every cloud has a silver lining",
    tag: "HOPE",
    color: "bg-mint",
    meaning: "Every tough situation still has a positive side.",
    example: "Missing the bus led me to a great café—every cloud has a silver lining."
  }
];

// 4. Basic vs Natural Table
const UPGRADES_DATA = [
  { context: "TIRED", basic: "I am very tired today.", natural: "I'm completely burned out today." },
  { context: "AGREE", basic: "I agree with you 100%.", natural: "We're completely on the same page." },
  { context: "EASY", basic: "The test was very easy.", natural: "That test was a walk in the park." },
  { context: "START", basic: "Let's start the project.", natural: "Let's get the ball rolling." },
  { context: "UNDECIDED", basic: "I haven't decided yet.", natural: "I'm still on the fence about it." },
  { context: "EMPATHY", basic: "I understand your view.", natural: "I see where you're coming from." }
];

// 5. Short Stories (2 Crisp Paragraphs Each)
const STORIES_DATA = [
  {
    id: "story-1",
    tabTitle: "01. NIGHT TRAIN",
    title: "Midnight Train to the Highlands",
    author: "NADIA // TRAVEL NOTE",
    tag: "TRAVEL",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'wanderlust', 'serene', or 'petrichor'.",
    paragraphs: [
      "After weeks of {wanderlust} at my study desk, I booked a Friday night sleeper train to the highlands. At midnight, the quiet mountain station looked completely {serene} under a {luminous} full moon.",
      "Minutes later, cool raindrops hit the window and filled the air with fresh {petrichor}, washing all my exam stress away."
    ]
  },
  {
    id: "story-2",
    tabTitle: "02. VIOLINIST",
    title: "The Street Violinist at Dusk",
    author: "RAFI // CAMPUS LOG",
    tag: "CITY LIFE",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'sonder', 'mellifluous', or 'ineffable'.",
    paragraphs: [
      "Walking past the old stone plaza at sunset, a {mellifluous} violin melody stopped me in my tracks. Dozens of strangers paused around the musician, lost in their own worlds.",
      "Watching their faces gave me a sudden wave of {sonder} and an {ineffable} sense of calm before heading home."
    ]
  },
  {
    id: "story-3",
    tabTitle: "03. OPEN MIC",
    title: "Stepping Onto the Open-Mic Stage",
    author: "TARI // CREATIVE CLUB",
    tag: "COURAGE",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'audacious' or 'euphoria'.",
    paragraphs: [
      "Signing up to read my poem in front of two hundred people felt like an {audacious} leap. Behind the curtain, the host gave me an {enigmatic} nod and whispered, 'You've got this.'",
      "When the crowd erupted into applause at the final line, a rush of pure {euphoria} replaced every bit of stage fright."
    ]
  },
  {
    id: "story-4",
    tabTitle: "04. BOOKSHOP",
    title: "Rainy Afternoon in an Old Bookshop",
    author: "ARYA // READING CLUB",
    tag: "MOMENTS",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'serendipity' or 'nostalgia'.",
    paragraphs: [
      "Escaping a sudden downpour, I stepped into the {quintessential} second-hand bookshop behind campus. Inside a worn novel, a 1998 postcard slipped out—pure {serendipity}.",
      "Reading that tiny note sparked a warm wave of {nostalgia}, turning an {ephemeral} rainstorm into my favorite memory of the week."
    ]
  }
];

// 6. Quiz Decks (4 Crisp Options A-D per Question)
const QUIZ_DECKS = {
  units: [
    {
      clue: "[UNIT 09] Which line politely closes a social conversation?",
      options: [
        "That's interesting—what got you into that?",
        "It was great chatting with you, though I should head to class now. Let's stay in touch!",
        "You won't believe what happened yesterday.",
        "I sincerely apologize for the delay."
      ],
      answer: "It was great chatting with you, though I should head to class now. Let's stay in touch!",
      detail: "UNIT 09: Combines appreciation, a clear reason to leave, and a warm sign-off."
    },
    {
      clue: "[UNIT 09] How do you politely share a different opinion?",
      options: [
        "You're totally wrong about that.",
        "I see your point, although I'd argue timing also matters.",
        "The event took place at 9 AM.",
        "Let's close this discussion now."
      ],
      answer: "I see your point, although I'd argue timing also matters.",
      detail: "UNIT 09: Acknowledges the other person's view before adding yours."
    },
    {
      clue: "[UNIT 10] Which news report line covers When, Where, and Why?",
      options: [
        "Mind if I join you? I'm Arif.",
        "At 9 AM today in the Student Center, Group 11 launched the app because students needed speaking practice.",
        "Have you considered splitting the slides?",
        "We used to rely on printed books."
      ],
      answer: "At 9 AM today in the Student Center, Group 11 launched the app because students needed speaking practice.",
      detail: "UNIT 10: Gives When (9 AM), Where (Student Center), and Why (because...)."
    },
    {
      clue: "[UNIT 10] Which sentence works best to hook listeners when re-telling a story?",
      options: [
        "You won't believe what happened on my way to campus yesterday...",
        "Just to recap what we agreed on.",
        "I take full responsibility for the delay.",
        "If I were in charge, I would reprioritize."
      ],
      answer: "You won't believe what happened on my way to campus yesterday...",
      detail: "UNIT 10: Grabs attention immediately before telling the sequence."
    },
    {
      clue: "[UNIT 11] Which sentence compares a past habit to present life?",
      options: [
        "We used to carry heavy dictionaries, whereas now we check audio online.",
        "I sincerely apologize for the inconvenience.",
        "What did you think of the speaker?",
        "To put it simply, there are three steps."
      ],
      answer: "We used to carry heavy dictionaries, whereas now we check audio online.",
      detail: "UNIT 11: Uses 'used to... whereas now...' to contrast past and present."
    },
    {
      clue: "[UNIT 11] Which line describes an active ongoing trend?",
      options: [
        "More and more students are using interactive apps to practice English.",
        "The meeting started at 8 AM.",
        "I completely understand your frustration.",
        "Suppose two teammates disagreed."
      ],
      answer: "More and more students are using interactive apps to practice English.",
      detail: "UNIT 11: 'More and more...' + present continuous shows ongoing change."
    },
    {
      clue: "[UNIT 12] Which response uses the 2nd Conditional for a job interview?",
      options: [
        "If I were faced with a sudden deadline shift, I would reprioritize key tasks first.",
        "Yesterday I had a deadline and finished it.",
        "We used to work on weekends.",
        "Sorry your package arrived late."
      ],
      answer: "If I were faced with a sudden deadline shift, I would reprioritize key tasks first.",
      detail: "UNIT 12: Uses 'If I were... I would...' for hypothetical scenarios."
    },
    {
      clue: "[UNIT 12] Which line shows nonjudgmental responding when a peer is late?",
      options: [
        "They obviously didn't care about the team.",
        "Rather than assuming carelessness, I would ask what blocked their progress.",
        "I'd report them right away.",
        "Let's skip the details."
      ],
      answer: "Rather than assuming carelessness, I would ask what blocked their progress.",
      detail: "UNIT 12: Focuses objectively on obstacles without blame."
    },
    {
      clue: "[UNIT 13] Which phrase shows genuine sympathy during a complaint?",
      options: [
        "I completely understand why you're frustrated—I'd feel the same way.",
        "That's not really my problem.",
        "If I were you, I wouldn't worry.",
        "Speaking of which, have you seen the schedule?"
      ],
      answer: "I completely understand why you're frustrated—I'd feel the same way.",
      detail: "UNIT 13: Validates feelings empathetically before fixing the issue."
    },
    {
      clue: "[UNIT 13] Which sentence gives a sincere apology without excuses?",
      options: [
        "I sincerely apologize for the delay and any inconvenience caused.",
        "Sorry you're upset, even though traffic wasn't our fault.",
        "We used to deliver faster last year.",
        "Have you considered waiting until tomorrow?"
      ],
      answer: "I sincerely apologize for the delay and any inconvenience caused.",
      detail: "UNIT 13: Direct, accountable apology."
    },
    {
      clue: "[UNIT 14] Which phrase offers a collaborative suggestion in a conflict?",
      options: [
        "Have you considered combining both ideas into a two-part layout?",
        "You have to do it my way.",
        "The event happened outside the library.",
        "Nice meeting you today!"
      ],
      answer: "Have you considered combining both ideas into a two-part layout?",
      detail: "UNIT 14: Frames a win-win compromise as a polite question."
    },
    {
      clue: "[UNIT 14] Which phrase simplifies a resolution clearly?",
      options: [
        "To put it simply: define the issue, pick a compromise, and move forward.",
        "You won't believe how messy this got.",
        "If I were on another team, it'd be easier.",
        "Mind if I join your table?"
      ],
      answer: "To put it simply: define the issue, pick a compromise, and move forward.",
      detail: "UNIT 14: Uses 'To put it simply' + clear steps."
    }
  ],
  words: [
    {
      clue: "The pleasant, earthy smell after rain falls on dry ground.",
      options: ["luminous", "petrichor", "serene", "sonder"],
      answer: "petrichor",
      detail: "PETRICHOR (/ˈpet.rɪ.kɔːr/) — Earthy post-rain scent."
    },
    {
      clue: "Realizing every stranger has a life as complex as your own.",
      options: ["sonder", "wanderlust", "audacious", "mellifluous"],
      answer: "sonder",
      detail: "SONDER (/ˈsɒn.dər/) — Deep awareness of others' inner lives."
    },
    {
      clue: "Too great or beautiful to be described in words.",
      options: ["serene", "ineffable", "petrichor", "audacious"],
      answer: "ineffable",
      detail: "INEFFABLE (/ɪnˈef.ə.bəl/) — Beyond words."
    },
    {
      clue: "A voice or sound that is sweet, smooth, and pleasant to hear.",
      options: ["enigmatic", "euphoria", "mellifluous", "sonder"],
      answer: "mellifluous",
      detail: "MELLIFLUOUS (/məˈlɪf.lu.əs/) — Flowing like honey."
    },
    {
      clue: "Lasting for only a very short time; fleeting.",
      options: ["resilient", "ephemeral", "quintessential", "luminous"],
      answer: "ephemeral",
      detail: "EPHEMERAL (/ɪˈfem.ər.əl/) — Short-lived."
    },
    {
      clue: "Finding valuable or happy things by pure lucky chance.",
      options: ["nostalgia", "serendipity", "wanderlust", "sonder"],
      answer: "serendipity",
      detail: "SERENDIPITY (/ˌser.ənˈdɪp.ə.ti/) — Happy accidental discovery."
    },
    {
      clue: "Fluent, persuasive, and expressive in speaking or writing.",
      options: ["enigmatic", "eloquent", "serene", "ephemeral"],
      answer: "eloquent",
      detail: "ELOQUENT (/ˈel.ə.kwənt/) — Persuasive and well-spoken."
    },
    {
      clue: "Able to recover quickly from setbacks or tough conditions.",
      options: ["resilient", "luminous", "nostalgia", "petrichor"],
      answer: "resilient",
      detail: "RESILIENT (/rɪˈzɪl.jənt/) — Bouncing back strong."
    }
  ],
  idioms: [
    {
      clue: "Force yourself to do something tough you've been delaying.",
      options: ["Cut to the chase", "Bite the bullet", "Walking on air", "Once in a blue moon"],
      answer: "Bite the bullet",
      detail: "BITE THE BULLET — Facing a tough task head-on."
    },
    {
      clue: "Study or work late into the night.",
      options: ["Burn the midnight oil", "A penny for your thoughts", "Read between the lines", "Bite the bullet"],
      answer: "Burn the midnight oil",
      detail: "BURN THE MIDNIGHT OIL — Working late at night."
    },
    {
      clue: "Understand the hidden meaning behind someone's words.",
      options: ["Once in a blue moon", "Walking on air", "Read between the lines", "Cut to the chase"],
      answer: "Read between the lines",
      detail: "READ BETWEEN THE LINES — Catching implicit meaning."
    },
    {
      clue: "Something that happens very rarely.",
      options: ["Once in a blue moon", "Burn the midnight oil", "A penny for your thoughts", "Cut to the chase"],
      answer: "Once in a blue moon",
      detail: "ONCE IN A BLUE MOON — Almost never."
    },
    {
      clue: "Get straight to the main point without wasting time.",
      options: ["Once in a blue moon", "Cut to the chase", "Walking on air", "Bite the bullet"],
      answer: "Cut to the chase",
      detail: "CUT TO THE CHASE — Skipping fluff."
    },
    {
      clue: "Feeling extraordinarily happy after great news.",
      options: ["Walking on air", "Burn the midnight oil", "Read between the lines", "Cut to the chase"],
      answer: "Walking on air",
      detail: "WALKING ON AIR — Overjoyed."
    }
  ]
};

// ==========================================================================
// State
// ==========================================================================
const state = {
  activePage: "home",
  theme: localStorage.getItem("lexivibe_v6_theme") || "light",
  currentQuoteIndex: 0,
  spotlightIndex: 0,
  activeUnitNumber: 9,
  unitSearchQuery: "",
  accent: "en-US",
  rate: 1,
  searchQuery: "",
  selectedCategory: "All",
  idiomSearchQuery: "",
  masteredIds: JSON.parse(localStorage.getItem("lexivibe_v6_mastered") || "[]"),
  activeStoryIndex: 0,
  storyFontSize: 1.04,
  isReadingStory: false,
  quizMode: "units",
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizHistory: [],
  modalWordId: null,
  lastFocusedElement: null
};

// ==========================================================================
// Init
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(state.theme);
  pickRandomQuoteOnOpen();
  setupQuoteControls();
  setupSpotlightControls();
  setupNavigation();
  setupGlobalAudioDelegation();
  setupThemeToggle();
  setupSpeechControls();
  renderVocabGrid();
  setupVocabFilters();
  renderUnitsLab();
  setupUnitControls();
  renderIdiomsAndUpgrades();
  setupIdiomFilters();
  renderStories();
  setupStoryControls();
  renderQuizQuestion();
  setupQuizControls();
  setupModalControls();
  updateProgressStats();
});

function setupGlobalAudioDelegation() {
  document.addEventListener("click", (e) => {
    const speakBtn = e.target.closest("[data-speak-text]");
    if (speakBtn) speakText(speakBtn.getAttribute("data-speak-text"));
  });
}

function escAttr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ==========================================================================
// Random Quote
// ==========================================================================
function pickRandomQuoteOnOpen() {
  const lastIdx = parseInt(sessionStorage.getItem("lexivibe_last_q6") || "-1", 10);
  let nextIdx = Math.floor(Math.random() * QUOTES_DATA.length);
  if (QUOTES_DATA.length > 1 && nextIdx === lastIdx) {
    nextIdx = (nextIdx + 1) % QUOTES_DATA.length;
  }
  state.currentQuoteIndex = nextIdx;
  sessionStorage.setItem("lexivibe_last_q6", String(nextIdx));
  const q = QUOTES_DATA[state.currentQuoteIndex];
  document.getElementById("randomQuoteText").textContent = `“${q.text}”`;
  document.getElementById("randomQuoteAuthor").textContent = `— ${q.author}`;
}

function setupQuoteControls() {
  document.getElementById("newQuoteBtn").addEventListener("click", () => {
    pickRandomQuoteOnOpen();
    showToast("NEW QUOTE");
  });
  document.getElementById("speakQuoteBtn").addEventListener("click", () => {
    const q = QUOTES_DATA[state.currentQuoteIndex];
    speakText(`${q.text} — ${q.author}`);
  });
}

// ==========================================================================
// Spotlight Word
// ==========================================================================
function renderSpotlightWord() {
  const item = VOCAB_DATA[state.spotlightIndex];
  document.getElementById("spotlightCat").textContent = `${item.pos} // ${item.category.toUpperCase()}`;
  document.getElementById("spotlightIpa").textContent = item.ipa;
  document.getElementById("spotlightWord").textContent = item.word.toUpperCase();
  document.getElementById("spotlightDef").textContent = item.definition;
  document.getElementById("spotlightOld").innerHTML = `${ICONS.cross} <span>BASIC: "${item.basicAlt}"</span>`;
  document.getElementById("spotlightNew").innerHTML = `${ICONS.check} <span>UPGRADE: "${item.example}"</span>`;
}

function setupSpotlightControls() {
  renderSpotlightWord();
  document.getElementById("spotlightSpeakBtn").addEventListener("click", () => {
    speakText(VOCAB_DATA[state.spotlightIndex].word);
  });
  document.getElementById("spotlightShuffleBtn").addEventListener("click", () => {
    state.spotlightIndex = (state.spotlightIndex + 1) % VOCAB_DATA.length;
    renderSpotlightWord();
  });
}

// ==========================================================================
// Theme & Navigation
// ==========================================================================
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("lexivibe_v6_theme", theme);
  const label = document.getElementById("themeLabel");
  if (label) label.textContent = theme === "dark" ? "LIGHT" : "DARK";
}

function setupThemeToggle() {
  document.getElementById("themeToggle").addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme(state.theme);
  });
}

function navigateTo(pageId) {
  state.activePage = pageId;
  stopSpeech();

  document.querySelectorAll(".page").forEach((sec) => {
    sec.classList.toggle("active", sec.id === `page-${pageId}`);
  });

  document.querySelectorAll("[data-nav]").forEach((btn) => {
    if (btn.classList.contains("nav-tab") || btn.classList.contains("dock-btn")) {
      btn.classList.toggle("active", btn.dataset.nav === pageId);
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupNavigation() {
  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(el.dataset.nav);
    });
  });

  document.querySelectorAll("[data-open-unit]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeUnitNumber = parseInt(btn.dataset.openUnit, 10);
      state.unitSearchQuery = "";
      const unitSearchEl = document.getElementById("unitSearchInput");
      if (unitSearchEl) unitSearchEl.value = "";
      renderUnitsLab();
      navigateTo("units");
    });
  });
}

// ==========================================================================
// Speech Engine
// ==========================================================================
function speakText(text, onEndCallback = null) {
  if (!("speechSynthesis" in window)) {
    showToast("AUDIO NOT SUPPORTED");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.accent;
  utterance.rate = state.rate;

  const voices = window.speechSynthesis.getVoices();
  const matched = voices.find((v) => v.lang.startsWith(state.accent));
  if (matched) utterance.voice = matched;

  utterance.onend = () => { if (onEndCallback) onEndCallback(); };
  utterance.onerror = () => { if (onEndCallback) onEndCallback(); };

  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  state.isReadingStory = false;
  const readBtn = document.getElementById("readStoryAloudBtn");
  if (readBtn) readBtn.innerHTML = `${ICONS.speaker} READ ALOUD`;
}

function setupSpeechControls() {
  document.querySelectorAll("[data-accent]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.accent = btn.dataset.accent;
      document.querySelectorAll("[data-accent]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      showToast(`ACCENT: ${state.accent}`);
    });
  });

  document.querySelectorAll("[data-rate]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.rate = parseFloat(btn.dataset.rate);
      document.querySelectorAll("[data-rate]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      showToast(`SPEED: ${state.rate}X`);
    });
  });
}

// ==========================================================================
// Page 01: Rare Words (Concise Cards)
// ==========================================================================
function renderVocabGrid() {
  const grid = document.getElementById("vocabGrid");
  const filtered = VOCAB_DATA.filter((item) => {
    let matchesCat = true;
    if (state.selectedCategory === "Mastered") {
      matchesCat = state.masteredIds.includes(item.id);
    } else if (state.selectedCategory !== "All") {
      matchesCat = item.category === state.selectedCategory;
    }

    const q = state.searchQuery.toLowerCase();
    const matchesSearch =
      item.word.toLowerCase().includes(q) ||
      item.definition.toLowerCase().includes(q) ||
      item.basicAlt.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="os-window" style="grid-column: 1/-1; padding: 18px;"><strong>NO MATCHING WORDS FOUND.</strong></div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((item, index) => {
      const isMastered = state.masteredIds.includes(item.id);
      const num = String(index + 1).padStart(2, "0");
      return `
        <article class="vocab-card">
          <div class="vocab-card-head ${item.badgeColor}">
            <span>[${num}] ${item.category.toUpperCase()}</span>
            <span>${item.pos}</span>
          </div>
          <div class="vocab-card-body">
            <div class="vocab-title-row">
              <div>
                <h2 class="vocab-word">${item.word}</h2>
                <p class="vocab-ipa">${item.ipa}</p>
              </div>
              <button class="brutal-btn-sm bg-sky" data-speak-text="${escAttr(item.word)}">
                ${ICONS.speaker} WORD
              </button>
            </div>
            <p class="vocab-def">${item.definition}</p>
            <div class="vocab-alt-box">
              <strong>BASIC:</strong> "${item.basicAlt}"
            </div>
            <p class="vocab-example">"${item.example}"</p>
            <div class="vocab-footer">
              <button class="brutal-btn-sm" data-speak-text="${escAttr(item.example)}">
                ${ICONS.speaker} EXAMPLE
              </button>
              <button class="brutal-btn-sm ${isMastered ? "bg-mint" : ""}" onclick="toggleMastered('${item.id}')">
                ${isMastered ? `${ICONS.check} MASTERED` : "+ MASTERED"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function setupVocabFilters() {
  document.getElementById("wordSearchInput").addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim();
    renderVocabGrid();
  });

  document.querySelectorAll(".cat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.selectedCategory = pill.dataset.cat;
      document.querySelectorAll(".cat-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderVocabGrid();
    });
  });
}

function toggleMastered(wordId) {
  const idx = state.masteredIds.indexOf(wordId);
  if (idx > -1) {
    state.masteredIds.splice(idx, 1);
    showToast("REMOVED");
  } else {
    state.masteredIds.push(wordId);
    showToast("MASTERED");
  }
  localStorage.setItem("lexivibe_v6_mastered", JSON.stringify(state.masteredIds));
  renderVocabGrid();
  updateProgressStats();
}

function updateProgressStats() {
  document.getElementById("navMasteryCount").textContent = `${state.masteredIds.length}/${VOCAB_DATA.length}`;
  document.getElementById("homeMasteredStat").textContent = `${state.masteredIds.length} / ${VOCAB_DATA.length} WORDS`;
}

// ==========================================================================
// Page 02: Units 09–14 Speaking Lab (Clean, Scannable & Searchable)
// ==========================================================================
function renderUnitsLab() {
  const tabsBar = document.getElementById("unitTabsBar");
  const dialogueBox = document.getElementById("unitDialogueBox");
  const practicePanel = document.getElementById("unitPracticePanel");
  const bar = document.getElementById("unitWindowBar");
  const q = state.unitSearchQuery.toLowerCase();

  // Cross-Unit Search Mode
  if (q) {
    tabsBar.classList.add("hidden");
    dialogueBox.classList.add("hidden");
    practicePanel.classList.add("hidden");

    const matches = [];
    UNITS_DATA.forEach((u) => {
      const unitNumStr = String(u.unit).padStart(2, "0");
      u.subtopics.forEach((sub) => {
        const isMatch =
          u.title.toLowerCase().includes(q) ||
          u.shortLabel.toLowerCase().includes(q) ||
          `unit ${unitNumStr}`.includes(q) ||
          sub.title.toLowerCase().includes(q) ||
          sub.tag.toLowerCase().includes(q) ||
          sub.tip.toLowerCase().includes(q) ||
          sub.phrases.some((p) => p.toLowerCase().includes(q));

        if (isMatch) {
          matches.push({ unit: u, unitNumStr, sub });
        }
      });
    });

    bar.className = "os-titlebar bg-sky";
    document.getElementById("unitWindowCode").textContent = "SEARCH // UNITS 09–14";
    document.getElementById("unitTopicCount").textContent = `${matches.length} MATCHING SKILLS`;
    document.getElementById("unitTitle").textContent = `Results for “${state.unitSearchQuery}”`;
    document.getElementById("unitSummary").textContent =
      "Clear the search bar to return to the unit tabs and practice dialogues.";

    if (matches.length === 0) {
      document.getElementById("unitSubtopicsGrid").innerHTML =
        `<div style="grid-column: 1/-1; padding: 12px 0;"><strong>NO MATCHING PHRASES OR SKILLS FOUND.</strong></div>`;
      return;
    }

    document.getElementById("unitSubtopicsGrid").innerHTML = matches
      .map(({ unit, unitNumStr, sub }) => {
        const phrasesHtml = sub.phrases
          .map(
            (p) => `
              <div class="phrase-item">
                <span class="phrase-en">“${p}”</span>
                <button class="brutal-btn-sm bg-sky" data-speak-text="${escAttr(p)}" title="Listen" aria-label="Listen to phrase">
                  ${ICONS.speaker}
                </button>
              </div>
            `
          )
          .join("");

        return `
          <div class="subtopic-card">
            <div class="subtopic-card-header">
              <h3>${sub.title}</h3>
              <span class="tag-pill ${unit.colorClass}">UNIT ${unitNumStr} · ${sub.tag}</span>
            </div>
            <p class="formula-tip">${ICONS.bulb} <span>${sub.tip}</span></p>
            <div class="phrase-list">${phrasesHtml}</div>
          </div>
        `;
      })
      .join("");
    return;
  }

  // Standard Unit Tab Mode
  tabsBar.classList.remove("hidden");
  dialogueBox.classList.remove("hidden");
  practicePanel.classList.remove("hidden");

  tabsBar.innerHTML = UNITS_DATA.map((u) => {
    const numStr = String(u.unit).padStart(2, "0");
    const isActive = u.unit === state.activeUnitNumber;
    return `
      <button
        type="button"
        class="unit-tab-btn ${isActive ? u.colorClass : ""}"
        onclick="selectUnit(${u.unit})"
      >
        <span class="unit-tab-num">UNIT ${numStr}</span>
        <span class="unit-tab-label">${u.shortLabel}</span>
      </button>
    `;
  }).join("");

  const current = UNITS_DATA.find((u) => u.unit === state.activeUnitNumber) || UNITS_DATA[0];
  bar.className = `os-titlebar ${current.colorClass}`;

  document.getElementById("unitWindowCode").textContent = current.headerLabel;
  document.getElementById("unitTopicCount").textContent = `${current.subtopics.length} SKILLS`;
  document.getElementById("unitTitle").textContent = current.title;
  document.getElementById("unitSummary").textContent = current.summary;

  document.getElementById("unitSubtopicsGrid").innerHTML = current.subtopics
    .map((sub) => {
      const phrasesHtml = sub.phrases
        .map(
          (p) => `
            <div class="phrase-item">
              <span class="phrase-en">“${p}”</span>
              <button class="brutal-btn-sm bg-sky" data-speak-text="${escAttr(p)}" title="Listen" aria-label="Listen to phrase">
                ${ICONS.speaker}
              </button>
            </div>
          `
        )
        .join("");

      return `
        <div class="subtopic-card">
          <div class="subtopic-card-header">
            <h3>${sub.title}</h3>
            <span class="tag-pill ${current.colorClass}">${sub.tag}</span>
          </div>
          <p class="formula-tip">${ICONS.bulb} <span>${sub.tip}</span></p>
          <div class="phrase-list">${phrasesHtml}</div>
        </div>
      `;
    })
    .join("");

  document.getElementById("unitDialogueTitle").textContent = current.dialogueTitle;
  document.getElementById("unitDialogueLines").innerHTML = current.dialogue
    .map(
      (line) => `
        <div class="dialogue-row">
          <span class="speaker-tag">${line.speaker}</span>
          <span>${line.text}</span>
        </div>
      `
    )
    .join("");

  document.getElementById("unitPracticePrompt").textContent = current.practicePrompt;
  const savedPractice = localStorage.getItem(`lexivibe_u6_${current.unit}`) || "";
  document.getElementById("unitPracticeInput").value = savedPractice;
  document.getElementById("unitPracticeSavedMsg").innerHTML = "";
}

function selectUnit(unitNum) {
  stopSpeech();
  state.activeUnitNumber = unitNum;
  renderUnitsLab();
}

function setupUnitControls() {
  document.getElementById("unitSearchInput").addEventListener("input", (e) => {
    state.unitSearchQuery = e.target.value.trim();
    renderUnitsLab();
  });

  document.getElementById("playUnitDialogueBtn").addEventListener("click", () => {
    const current = UNITS_DATA.find((u) => u.unit === state.activeUnitNumber) || UNITS_DATA[0];
    const fullDialogue = current.dialogue.map((d) => `${d.speaker}: ${d.text}`).join(". ");
    speakText(fullDialogue);
  });

  document.getElementById("saveUnitPracticeBtn").addEventListener("click", () => {
    const current = UNITS_DATA.find((u) => u.unit === state.activeUnitNumber) || UNITS_DATA[0];
    const text = document.getElementById("unitPracticeInput").value.trim();
    localStorage.setItem(`lexivibe_u6_${current.unit}`, text);
    document.getElementById("unitPracticeSavedMsg").innerHTML = `${ICONS.check} <span>Saved!</span>`;
  });
}

// ==========================================================================
// Page 03: Idioms & Upgrades (With Search)
// ==========================================================================
function renderIdiomsAndUpgrades() {
  const q = state.idiomSearchQuery.toLowerCase();

  const filteredIdioms = IDIOMS_DATA.filter(
    (item) =>
      item.idiom.toLowerCase().includes(q) ||
      item.meaning.toLowerCase().includes(q) ||
      item.example.toLowerCase().includes(q) ||
      item.tag.toLowerCase().includes(q)
  );

  const idiomsGrid = document.getElementById("idiomsGrid");
  if (filteredIdioms.length === 0) {
    idiomsGrid.innerHTML = `<div class="os-window" style="grid-column: 1/-1; padding: 18px;"><strong>NO MATCHING IDIOMS FOUND.</strong></div>`;
  } else {
    idiomsGrid.innerHTML = filteredIdioms
      .map((item, idx) => {
        const num = String(idx + 1).padStart(2, "0");
        return `
          <article class="vocab-card">
            <div class="vocab-card-head ${item.color}">
              <span>[IDIOM ${num}]</span>
              <span>${item.tag}</span>
            </div>
            <div class="vocab-card-body">
              <div class="vocab-title-row">
                <h3 class="vocab-word">${item.idiom}</h3>
                <button class="brutal-btn-sm bg-sky" data-speak-text="${escAttr(item.idiom)}" aria-label="Listen to idiom">
                  ${ICONS.speaker}
                </button>
              </div>
              <p class="vocab-def">${item.meaning}</p>
              <p class="vocab-example">"${item.example}"</p>
            </div>
          </article>
        `;
      })
      .join("");
  }

  const filteredUpgrades = UPGRADES_DATA.filter(
    (row) =>
      row.context.toLowerCase().includes(q) ||
      row.basic.toLowerCase().includes(q) ||
      row.natural.toLowerCase().includes(q)
  );

  document.getElementById("upgradesCountBadge").textContent = `${filteredUpgrades.length} PATTERNS`;
  const tbody = document.getElementById("upgradesTableBody");

  if (filteredUpgrades.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4"><strong>NO MATCHING PHRASE UPGRADES FOUND.</strong></td></tr>`;
  } else {
    tbody.innerHTML = filteredUpgrades
      .map(
        (row) => `
          <tr>
            <td><strong>${row.context}</strong></td>
            <td class="basic-cell">"${row.basic}"</td>
            <td class="native-cell">"${row.natural}"</td>
            <td>
              <button class="brutal-btn-sm bg-sky" data-speak-text="${escAttr(row.natural)}" aria-label="Listen to natural phrase">
                ${ICONS.speaker}
              </button>
            </td>
          </tr>
        `
      )
      .join("");
  }
}

function setupIdiomFilters() {
  document.getElementById("idiomSearchInput").addEventListener("input", (e) => {
    state.idiomSearchQuery = e.target.value.trim();
    renderIdiomsAndUpgrades();
  });
}

// ==========================================================================
// Page 04: Stories
// ==========================================================================
function renderStories() {
  const tabsContainer = document.getElementById("storyTabs");
  tabsContainer.innerHTML = STORIES_DATA.map(
    (s, idx) => `
      <button class="story-tab ${idx === state.activeStoryIndex ? "active" : ""}" onclick="selectStory(${idx})">
        ${s.tabTitle}
      </button>
    `
  ).join("");

  const story = STORIES_DATA[state.activeStoryIndex];
  document.getElementById("storyWindowFile").textContent = story.tabTitle;
  document.getElementById("storyReadTime").textContent = story.readTime;
  document.getElementById("storyTag").textContent = story.tag;
  document.getElementById("storyTitle").textContent = story.title;
  document.getElementById("storyAuthor").textContent = story.author;
  document.getElementById("storyPrompt").textContent = story.prompt;

  const bodyEl = document.getElementById("storyBody");
  bodyEl.style.fontSize = `${state.storyFontSize}rem`;
  bodyEl.innerHTML = story.paragraphs
    .map((p) => {
      const parsed = p.replace(/\{(\w+)\}/g, (_, wordId) => {
        const entry = VOCAB_DATA.find((v) => v.id === wordId);
        const label = entry ? entry.word.toLowerCase() : wordId;
        return `<button type="button" class="story-word-chip" onclick="openWordModal('${wordId}')">${label}</button>`;
      });
      return `<p>${parsed}</p>`;
    })
    .join("");

  const savedNote = localStorage.getItem(`lexivibe_s6_${story.id}`) || "";
  document.getElementById("reflectionInput").value = savedNote;
  document.getElementById("reflectionSavedMsg").innerHTML = "";
}

function selectStory(index) {
  stopSpeech();
  state.activeStoryIndex = index;
  renderStories();
}

function setupStoryControls() {
  document.getElementById("fontIncreaseBtn").addEventListener("click", () => {
    state.storyFontSize = Math.min(1.3, +(state.storyFontSize + 0.08).toFixed(2));
    document.getElementById("storyBody").style.fontSize = `${state.storyFontSize}rem`;
  });

  document.getElementById("fontDecreaseBtn").addEventListener("click", () => {
    state.storyFontSize = Math.max(0.92, +(state.storyFontSize - 0.08).toFixed(2));
    document.getElementById("storyBody").style.fontSize = `${state.storyFontSize}rem`;
  });

  document.getElementById("readStoryAloudBtn").addEventListener("click", () => {
    const btn = document.getElementById("readStoryAloudBtn");
    if (state.isReadingStory) {
      stopSpeech();
      return;
    }
    const story = STORIES_DATA[state.activeStoryIndex];
    const cleanText = story.paragraphs.join(" ").replace(/\{|\}/g, "");
    state.isReadingStory = true;
    btn.innerHTML = `${ICONS.stop} STOP`;
    speakText(cleanText, () => {
      state.isReadingStory = false;
      btn.innerHTML = `${ICONS.speaker} READ ALOUD`;
    });
  });

  document.getElementById("saveReflectionBtn").addEventListener("click", () => {
    const story = STORIES_DATA[state.activeStoryIndex];
    const text = document.getElementById("reflectionInput").value.trim();
    localStorage.setItem(`lexivibe_s6_${story.id}`, text);
    document.getElementById("reflectionSavedMsg").innerHTML = `${ICONS.check} <span>Saved!</span>`;
  });
}

// ==========================================================================
// Word Modal (With Escape Key, Focus Trap & Focus Restoration)
// ==========================================================================
function openWordModal(wordId) {
  const entry = VOCAB_DATA.find((v) => v.id === wordId);
  if (!entry) return;

  state.lastFocusedElement = document.activeElement;
  state.modalWordId = wordId;

  document.getElementById("modalWordCat").textContent = `${entry.category.toUpperCase()} // ${entry.pos}`;
  document.getElementById("modalWordTitle").textContent = entry.word;
  document.getElementById("modalWordIpa").textContent = entry.ipa;
  document.getElementById("modalWordDef").textContent = entry.definition;
  document.getElementById("modalWordOrigin").innerHTML = `<strong>Origin:</strong> ${entry.origin}`;
  document.getElementById("modalWordEx").textContent = `"${entry.example}"`;

  updateModalMasterBtn();

  const backdrop = document.getElementById("wordModalBackdrop");
  backdrop.classList.remove("hidden");
  document.getElementById("closeModalBtn").focus();

  speakText(entry.word);
}

function closeWordModal() {
  const backdrop = document.getElementById("wordModalBackdrop");
  if (backdrop.classList.contains("hidden")) return;

  backdrop.classList.add("hidden");
  if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
    state.lastFocusedElement.focus();
  }
}

function updateModalMasterBtn() {
  const isMastered = state.masteredIds.includes(state.modalWordId);
  const btn = document.getElementById("modalMasterBtn");
  btn.innerHTML = isMastered ? `${ICONS.check} MASTERED` : "+ MASTERED";
}

function setupModalControls() {
  const backdrop = document.getElementById("wordModalBackdrop");

  document.getElementById("closeModalBtn").addEventListener("click", closeWordModal);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeWordModal();
  });

  document.getElementById("modalSpeakBtn").addEventListener("click", () => {
    const entry = VOCAB_DATA.find((v) => v.id === state.modalWordId);
    if (entry) speakText(entry.word);
  });

  document.getElementById("modalMasterBtn").addEventListener("click", () => {
    if (state.modalWordId) {
      toggleMastered(state.modalWordId);
      updateModalMasterBtn();
    }
  });

  // Keyboard Accessibility: Escape to close & Tab focus trap inside modal
  document.addEventListener("keydown", (e) => {
    if (backdrop.classList.contains("hidden")) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeWordModal();
      return;
    }

    if (e.key === "Tab") {
      const focusableEls = Array.from(
        backdrop.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusableEls.length === 0) return;

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  });
}

// ==========================================================================
// Page 05: Quiz
// ==========================================================================
function getCurrentDeck() {
  return QUIZ_DECKS[state.quizMode];
}

function renderQuizQuestion() {
  const deck = getCurrentDeck();
  const q = deck[state.quizIndex];
  state.quizAnswered = false;

  document.getElementById("quizQuestionArea").classList.remove("hidden");
  document.getElementById("quizResultArea").classList.add("hidden");

  const qNum = String(state.quizIndex + 1).padStart(2, "0");
  const totalStr = String(deck.length).padStart(2, "0");
  document.getElementById("quizCounter").textContent = `QUESTION ${qNum} / ${totalStr}`;
  document.getElementById("quizScoreBadge").textContent = `SCORE: ${state.quizScore}`;
  document.getElementById("quizProgressBar").style.width = `${((state.quizIndex + 1) / deck.length) * 100}%`;

  const clueLabels = {
    units: "SPEAKING SCENARIO:",
    words: "WORD DEFINITION:",
    idioms: "IDIOM MEANING:"
  };
  document.getElementById("quizClueLabel").textContent = clueLabels[state.quizMode];
  document.getElementById("quizDefinition").textContent = q.clue;

  const letters = ["A", "B", "C", "D"];
  const optionsEl = document.getElementById("quizOptions");
  optionsEl.innerHTML = q.options
    .map((opt, idx) => `
      <button class="quiz-opt-btn" data-opt-idx="${idx}">
        <span class="opt-key">${letters[idx]}</span>
        <span>${opt}</span>
      </button>
    `)
    .join("");

  optionsEl.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const optIdx = parseInt(btn.getAttribute("data-opt-idx"), 10);
      handleQuizAnswer(q.options[optIdx], btn);
    });
  });

  const feedbackEl = document.getElementById("quizFeedback");
  feedbackEl.className = "feedback-box hidden";
  document.getElementById("nextQuestionBtn").classList.add("hidden");
}

function handleQuizAnswer(choice, btnEl) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const deck = getCurrentDeck();
  const q = deck[state.quizIndex];
  const isCorrect = choice === q.answer;

  document.querySelectorAll(".quiz-opt-btn").forEach((btn, idx) => {
    btn.disabled = true;
    if (q.options[idx] === q.answer) {
      btn.classList.add("correct");
    } else if (btn === btnEl && !isCorrect) {
      btn.classList.add("wrong");
    }
  });

  if (isCorrect) {
    state.quizScore++;
    document.getElementById("quizScoreBadge").textContent = `SCORE: ${state.quizScore}`;
    if (state.quizMode !== "units") speakText(q.answer);
  }

  state.quizHistory.push({ target: q.answer, isCorrect });

  const feedbackEl = document.getElementById("quizFeedback");
  feedbackEl.className = `feedback-box ${isCorrect ? "correct" : "wrong"}`;
  feedbackEl.innerHTML = isCorrect
    ? `<strong>CORRECT!</strong> ${q.detail}`
    : `<strong>NOT QUITE.</strong> ${q.detail}`;

  const nextBtn = document.getElementById("nextQuestionBtn");
  nextBtn.textContent = state.quizIndex === deck.length - 1 ? "SEE SCORE →" : "NEXT →";
  nextBtn.classList.remove("hidden");
}

function setupQuizControls() {
  document.querySelectorAll("[data-quiz-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.quizMode = btn.dataset.quizMode;
      document.querySelectorAll("[data-quiz-mode]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizHistory = [];
      renderQuizQuestion();
    });
  });

  document.getElementById("nextQuestionBtn").addEventListener("click", () => {
    const deck = getCurrentDeck();
    if (state.quizIndex < deck.length - 1) {
      state.quizIndex++;
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  });

  document.getElementById("retakeQuizBtn").addEventListener("click", () => {
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizHistory = [];
    renderQuizQuestion();
  });
}

function showQuizResults() {
  const deck = getCurrentDeck();
  document.getElementById("quizQuestionArea").classList.add("hidden");
  document.getElementById("quizResultArea").classList.remove("hidden");

  const pct = Math.round((state.quizScore / deck.length) * 100);
  document.getElementById("resultBadge").textContent = `${state.quizScore}/${deck.length}`;
  document.getElementById("resultHeading").textContent = `SCORE: ${pct}%`;
  document.getElementById("resultSummary").textContent =
    pct >= 80
      ? "Great job! Group 11 approves your English fluency."
      : "Nice try! Check the missed items below and practice again.";

  document.getElementById("resultReviewList").innerHTML = state.quizHistory
    .map(
      (item, idx) => `
        <div class="review-row">
          <span>${String(idx + 1).padStart(2, "0")}. ${item.target}</span>
          <span>${item.isCorrect ? ICONS.check : ICONS.cross}</span>
        </div>
      `
    )
    .join("");
}

// ==========================================================================
// Toast
// ==========================================================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}
