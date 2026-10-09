import React, { useState, useRef, useEffect, useMemo } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./CommunicationSkills.css";

// ==========================================================================
// 1. GRAMMAR PRACTICE DATA
// ==========================================================================
const grammarQuestions = [
  {
    id: 1,
    category: "Parts of Speech",
    question: "Identify the part of speech of the word 'rapidly' in: 'The team completed the project rapidly.'",
    options: ["Noun", "Adjective", "Adverb", "Preposition"],
    correct: 2,
    explanation: "'Rapidly' describes HOW the action was done (modifies the verb 'completed'), making it an Adverb."
  },
  {
    id: 2,
    category: "Tenses",
    question: "Choose the correct tense form: 'I _____ in this software company for two years.'",
    options: ["have worked", "am working", "has worked", "worked since"],
    correct: 0,
    explanation: "Use Present Perfect ('have worked') for an action that started in the past and continues into the present."
  },
  {
    id: 3,
    category: "Articles",
    question: "Fill in the blank: 'She is _____ honest and hardworking developer.'",
    options: ["a", "an", "the", "no article"],
    correct: 1,
    explanation: "Use 'an' before 'honest' because the initial 'h' is silent and the word begins with a vowel sound (O-nest)."
  },
  {
    id: 4,
    category: "Prepositions",
    question: "Select the correct preposition: 'The team meeting is scheduled _____ 10:00 AM _____ Monday.'",
    options: ["in, on", "at, on", "on, at", "at, in"],
    correct: 1,
    explanation: "Use 'at' for precise times of day (at 10:00 AM) and 'on' for specific days of the week (on Monday)."
  },
  {
    id: 5,
    category: "Subject-Verb Agreement",
    question: "Choose the correct verb: 'Neither the manager nor the developers _____ available right now.'",
    options: ["is", "are", "was", "be"],
    correct: 1,
    explanation: "When subjects are joined by 'neither... nor', the verb agrees with the closer subject ('developers' is plural, so 'are')."
  },
  {
    id: 6,
    category: "Common Mistakes",
    question: "Identify the grammatically correct sentence:",
    options: [
      "Their going to submit they're report there.",
      "They're going to submit their report there.",
      "There going to submit their report they're.",
      "They're going to submit there report their."
    ],
    correct: 1,
    explanation: "'They're' = They are; 'their' = possessive pronoun; 'there' = location."
  },
  {
    id: 7,
    category: "Parts of Speech",
    question: "Which word is an Adjective in: 'The innovative startup launched a scalable platform.'?",
    options: ["startup", "launched", "innovative", "platform"],
    correct: 2,
    explanation: "'Innovative' is an adjective that describes the noun 'startup'."
  },
  {
    id: 8,
    category: "Subject-Verb Agreement",
    question: "Choose the correct verb: 'Each of the team members _____ a certificate.'",
    options: ["receive", "receives", "have received", "are receiving"],
    correct: 1,
    explanation: "'Each' is an indefinite singular pronoun, requiring the singular verb 'receives'."
  }
];

// ==========================================================================
// 2. VOCABULARY DATA
// ==========================================================================
const vocabularyList = [
  {
    id: 1,
    category: "Workplace",
    word: "Collaborate",
    pos: "Verb",
    meaning: "To work jointly with others on an activity or project to achieve a common goal.",
    synonyms: "Cooperate, team up, coordinate",
    antonyms: "Compete, oppose, work alone",
    example: "Frontend and backend engineers collaborate closely during each sprint."
  },
  {
    id: 2,
    category: "Workplace",
    word: "Prioritize",
    pos: "Verb",
    meaning: "To designate something as more important than other things and treat it first.",
    synonyms: "Order, rank, emphasize",
    antonyms: "Neglect, postpone, disregard",
    example: "We must prioritize critical bug fixes before releasing the update to users."
  },
  {
    id: 3,
    category: "Workplace",
    word: "Feasible",
    pos: "Adjective",
    meaning: "Possible and practical to do easily or conveniently.",
    synonyms: "Achievable, viable, workable",
    antonyms: "Impossible, impractical, unfeasible",
    example: "The manager confirmed that completing the module by Friday is feasible."
  },
  {
    id: 4,
    category: "Daily Use",
    word: "Articulate",
    pos: "Adjective / Verb",
    meaning: "Having or showing the ability to speak fluently and express thoughts coherently.",
    synonyms: "Clear, expressive, eloquent",
    antonyms: "Unclear, hesitant, inarticulate",
    example: "He gave an articulate explanation of his final year college project."
  },
  {
    id: 5,
    category: "Daily Use",
    word: "Diligent",
    pos: "Adjective",
    meaning: "Having or showing care and conscientiousness in one's work or duties.",
    synonyms: "Hardworking, dedicated, meticulous",
    antonyms: "Lazy, careless, negligent",
    example: "Her diligent practice helped her clear the technical interview on her first attempt."
  },
  {
    id: 6,
    category: "Workplace",
    word: "Escalate",
    pos: "Verb",
    meaning: "To refer a problem or issue to higher-level authorities or management for resolution.",
    synonyms: "Raise, elevate, step up",
    antonyms: "De-escalate, diminish, resolve",
    example: "If the server issue persists for over 15 minutes, please escalate it to the DevOps lead."
  },
  {
    id: 7,
    category: "Daily Use",
    word: "Resilient",
    pos: "Adjective",
    meaning: "Able to withstand or recover quickly from difficult conditions or setbacks.",
    synonyms: "Tough, adaptable, strong",
    antonyms: "Fragile, vulnerable, weak",
    example: "A successful software developer is resilient when encountering complex bugs."
  },
  {
    id: 8,
    category: "Workplace",
    word: "Bandwidth",
    pos: "Noun (Professional Slang)",
    meaning: "The mental capacity, time, or availability required to deal with extra work.",
    synonyms: "Capacity, availability, scope",
    antonyms: "Overload, unavailability",
    example: "I currently don't have the bandwidth to take on an additional assignment this week."
  }
];

// ==========================================================================
// 3. SENTENCE FORMATION DATA
// ==========================================================================
const scrambleExercises = [
  {
    id: 1,
    hint: "Arrange the words to form a polite meeting invitation.",
    words: ["You", "are", "invited", "to", "attend", "the", "team", "meeting", "tomorrow."],
    target: "You are invited to attend the team meeting tomorrow."
  },
  {
    id: 2,
    hint: "Arrange the words to describe completing an assignment on time.",
    words: ["I", "have", "successfully", "submitted", "my", "project", "before", "the", "deadline."],
    target: "I have successfully submitted my project before the deadline."
  },
  {
    id: 3,
    hint: "Arrange the words to ask for assistance politely.",
    words: ["Could", "you", "please", "help", "me", "with", "this", "code", "issue?"],
    target: "Could you please help me with this code issue?"
  }
];

// ==========================================================================
// 4. READING PRACTICE DATA
// ==========================================================================
const readingPassages = [
  {
    id: 1,
    title: "Active Listening in the Workplace",
    wordCount: 140,
    text: `Active listening is one of the most vital communication skills in modern tech companies. It involves giving your full attention to the speaker, understanding their perspective, and responding thoughtfully rather than simply waiting for your turn to talk. 

In engineering standup meetings, active listening prevents misunderstandings and saves valuable development hours. When a teammate explains a technical roadblock, an active listener asks clarifying questions, maintains eye contact, and takes brief notes. Furthermore, summarizing what you heard by saying, 'To confirm, you need the API response formatted as JSON?' demonstrates respect and ensures alignment across the team. Developing this habit early makes freshers stand out as mature, reliable professionals.`,
    questions: [
      {
        q: "What is active listening according to the passage?",
        options: [
          "Speaking quickly to save meeting time",
          "Giving full attention, understanding, and responding thoughtfully",
          "Waiting silently until the meeting finishes",
          "Arguing with teammates about code"
        ],
        correct: 1
      },
      {
        q: "How does summarizing what you heard help a team?",
        options: [
          "It confuses teammates",
          "It proves you are smarter than others",
          "It demonstrates respect and ensures alignment",
          "It lengthens the meeting unnecessarily"
        ],
        correct: 2
      }
    ]
  },
  {
    id: 2,
    title: "Professional Email Etiquette for Freshers",
    wordCount: 155,
    text: `Writing clear, professional emails is essential for building credibility in your workplace. A well-crafted business email begins with a specific, concise subject line that informs the recipient of the email's purpose, such as 'Project Update: Sprint 4 Delivery'.

Always begin with a courteous salutation like 'Dear Mr. Sharma' or 'Hi Priya', depending on the formality of your team. The body should be structured into brief paragraphs, using bullet points for key items. Avoid writing in all capital letters, as this feels like shouting, and eliminate informal text abbreviations such as 'u' or 'thx'. Before hitting send, proofread your message once to catch spelling or grammatical slips. Conclude with a warm sign-off like 'Best regards' followed by your name and designation.`,
    questions: [
      {
        q: "Why should you avoid writing emails in all capital letters?",
        options: [
          "Because it is difficult to type",
          "Because it feels like shouting and appears unprofessional",
          "Because email servers block capital letters",
          "Because fonts do not support capital letters"
        ],
        correct: 1
      },
      {
        q: "What is recommended before clicking the send button?",
        options: [
          "Forward it to all contacts",
          "Delete the subject line",
          "Proofread the message to catch spelling or grammar errors",
          "Add informal emojis"
        ],
        correct: 2
      }
    ]
  }
];

// ==========================================================================
// 5. WRITING PRACTICE PROMPTS
// ==========================================================================
const writingPrompts = [
  {
    id: 1,
    type: "Email Writing",
    title: "Write an Email Requesting Sick Leave",
    desc: "Draft a formal email to your manager requesting 1 day of sick leave for tomorrow. Include subject line, reason, and an offer to check urgent emails.",
    minWords: 30,
    modelAnswer: `Subject: Leave Application - Sick Leave for October 8th

Dear Manager,

I am writing to inform you that I am feeling unwell today with a fever and will be unable to attend work tomorrow, October 8th. 

I have informed my teammate Rahul about the ongoing tasks, and he will cover any urgent updates. I will check urgent emails if my health permits.

Thank you for your understanding.

Best regards,
Amit Kumar
Software Developer Trainee`
  },
  {
    id: 2,
    type: "Self-Introduction",
    title: "Introduce Yourself for an Interview",
    desc: "Write a short 3-5 sentence self-introduction highlighting your degree, key technical skills, and excitement to start your career.",
    minWords: 25,
    modelAnswer: `Hello, my name is Priya Sharma. I recently completed my Bachelor's degree in Computer Science from XYZ University. I have a strong foundation in Web Development with HTML, CSS, JavaScript, and React.js. I am passionate about creating clean, user-friendly applications and eager to contribute my skills to your engineering team.`
  },
  {
    id: 3,
    type: "Career Goal",
    title: "Describe Your Short-Term and Long-Term Goals",
    desc: "Describe where you see yourself professionally in the next 1-2 years and what skills you aim to master.",
    minWords: 25,
    modelAnswer: `My short-term goal is to secure an entry-level software developer role where I can contribute to real-world projects and refine my full-stack skills. In the long term, I aspire to grow into a senior technical lead who mentors junior engineers and architectures scalable systems.`
  }
];

// ==========================================================================
// 6. SPEAKING PRACTICE TOPICS (10 Topics)
// ==========================================================================
const speakingTopics = [
  {
    id: 1,
    title: "Introduce Yourself",
    guide: "Mention your name, your educational background, your core technical interests, and a personal strength.",
    expected: "Hello, my name is John. I have completed my Bachelor's degree in Computer Science. I am very passionate about web development and building responsive applications. My key strength is my quick learning ability and dedication to teamwork."
  },
  {
    id: 2,
    title: "Talk About Your Education",
    guide: "Share where you studied, your major subjects, and an academic achievement or favorite course.",
    expected: "I completed my degree in Information Technology with distinction. During my studies, I enjoyed subjects like Data Structures, Web Technologies, and Database Management, which gave me a solid technical foundation."
  },
  {
    id: 3,
    title: "Talk About Your Skills",
    guide: "Highlight 2-3 technical skills and 1-2 soft skills that make you an effective team member.",
    expected: "My key technical skills include HTML5, CSS3, JavaScript, and React. In addition, I have strong problem-solving skills, active listening, and clear communication when working in cross-functional teams."
  },
  {
    id: 4,
    title: "Talk About Your Hobbies",
    guide: "Describe what you enjoy doing in your free time and how it helps you recharge or stay creative.",
    expected: "In my leisure time, I enjoy reading technology blogs, solving coding puzzles on LeetCode, and playing badminton. These activities keep my mind sharp and help me maintain a healthy work-life balance."
  },
  {
    id: 5,
    title: "Describe Your Daily Routine",
    guide: "Describe how you organize your day, study schedule, coding practice, and relaxation.",
    expected: "I start my day early with some exercise and planning. During the day, I dedicate several hours to coding practice, learning new web frameworks, and reviewing interview questions. In the evening, I relax with family."
  },
  {
    id: 6,
    title: "Talk About Your Career Goal",
    guide: "Explain what you want to achieve as a software engineer in the next two to five years.",
    expected: "My career goal is to start as a junior frontend developer, gain hands-on experience on live client projects, and eventually grow into a full-stack engineer leading impactful software solutions."
  },
  {
    id: 7,
    title: "Explain Your Project",
    guide: "State your project title, the problem it solves, technologies used, and your individual role.",
    expected: "I built a student career portal called Career Craft using React and modern CSS. The application helps freshers practice coding, explore IT careers, and prepare for interviews with role-specific technical questions."
  },
  {
    id: 8,
    title: "Talk About Your Strengths",
    guide: "Share your top two positive attributes with a brief practical example.",
    expected: "My greatest strengths are consistency and adaptability. When learning React hooks, I practiced daily until I mastered state management, and I adapt quickly to new development tools and feedback."
  },
  {
    id: 9,
    title: "Talk About Your Learning Experience",
    guide: "Explain how you learn new technical concepts when facing a difficult problem.",
    expected: "Whenever I encounter a difficult concept, I break it down into small steps, read official documentation, build hands-on mini projects, and seek guidance from mentors and developer forums."
  },
  {
    id: 10,
    title: "Simple Workplace Conversation",
    guide: "Practice asking a colleague for a status update on a shared assignment politely.",
    expected: "Good morning Sarah. I hope you are having a productive week. Could you please give me a brief update on the database schema so I can proceed with the API integration today? Thank you."
  }
];

// ==========================================================================
// 7. WORKPLACE COMMUNICATION DATA
// ==========================================================================
const workplaceTopics = [
  {
    title: "Greetings & Introductions",
    icon: "🤝",
    desc: "Make an outstanding professional first impression in office meetings and email threads.",
    phrases: [
      "Good morning team, hope you all had a restful weekend.",
      "Hello everyone, I am excited to join the team as an associate developer.",
      "It is a pleasure to meet you. I look forward to collaborating with you."
    ]
  },
  {
    title: "Making Polite Requests",
    icon: "🙏",
    desc: "Ask teammates or managers for help, code reviews, or resources with courteous language.",
    phrases: [
      "Could you please review my pull request when you have a free moment?",
      "Would you mind sharing the design Figma link with me?",
      "May I request access to the staging server credentials?"
    ]
  },
  {
    title: "Asking for Clarification",
    icon: "❓",
    desc: "Avoid assumptions and verify requirements politely when an assignment is unclear.",
    phrases: [
      "Could you please elaborate on the second requirement to ensure we are aligned?",
      "Just to confirm, should this button redirect to the dashboard or the profile screen?",
      "Pardon me, could you please repeat that last point about the deadline?"
    ]
  },
  {
    title: "Agreeing & Disagreeing Politely",
    icon: "⚖️",
    desc: "Express your professional opinions constructively without causing conflict.",
    phrases: [
      "I completely agree with your proposal; that will optimize load time.",
      "I see your perspective, however, another factor we should consider is mobile responsiveness.",
      "That is a valid point. Perhaps we could test both approaches and compare outcomes."
    ]
  },
  {
    title: "Online Meeting Etiquette",
    icon: "💻",
    desc: "Best practices for Zoom, Microsoft Teams, and Google Meet video calls.",
    phrases: [
      "Apologies, I was on mute. Can everyone hear me clearly now?",
      "I am going to share my screen now; please let me know once it is visible.",
      "Thank you everyone for your time today. I will circulate the meeting notes shortly."
    ]
  },
  {
    title: "Telephone & Audio Calls",
    icon: "📞",
    desc: "Handle voice calls with clarity, confidence, and professional courtesy.",
    phrases: [
      "Hello, this is David from the development team. How may I assist you today?",
      "May I put you on a brief hold for one minute while I check that record?",
      "Thank you for calling. Have a wonderful rest of your day."
    ]
  }
];

export default function CommunicationSkills() {
  // Navigation active tab:
  // 'grammar' | 'vocab' | 'sentence' | 'reading' | 'writing' | 'speaking' | 'workplace'
  const [activeTab, setActiveTab] = useState("grammar");

  // ==========================================
  // Section 1: Grammar state
  // ==========================================
  const [selectedGrammarCat, setSelectedGrammarCat] = useState("All");
  const [grammarAnswers, setGrammarAnswers] = useState({});

  const filteredGrammar = useMemo(() => {
    if (selectedGrammarCat === "All") return grammarQuestions;
    return grammarQuestions.filter((q) => q.category === selectedGrammarCat);
  }, [selectedGrammarCat]);

  const grammarScore = useMemo(() => {
    let score = 0;
    Object.keys(grammarAnswers).forEach((qId) => {
      const q = grammarQuestions.find((item) => item.id === Number(qId));
      if (q && grammarAnswers[qId] === q.correct) {
        score++;
      }
    });
    return score;
  }, [grammarAnswers]);

  const handleSelectOption = (qId, optionIdx) => {
    setGrammarAnswers((prev) => ({
      ...prev,
      [qId]: optionIdx
    }));
  };

  // ==========================================
  // Section 2: Vocabulary state
  // ==========================================
  const [vocabSearch, setVocabSearch] = useState("");
  const [vocabFilter, setVocabFilter] = useState("All");

  const filteredVocab = useMemo(() => {
    return vocabularyList.filter((item) => {
      const matchesCat = vocabFilter === "All" || item.category === vocabFilter;
      const matchesSearch =
        vocabSearch.trim() === "" ||
        item.word.toLowerCase().includes(vocabSearch.toLowerCase()) ||
        item.meaning.toLowerCase().includes(vocabSearch.toLowerCase()) ||
        item.synonyms.toLowerCase().includes(vocabSearch.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [vocabFilter, vocabSearch]);

  // ==========================================
  // Section 3: Sentence Formation state
  // ==========================================
  const [scrambleIdx, setScrambleIdx] = useState(0);
  const activeScramble = scrambleExercises[scrambleIdx];
  const [selectedWords, setSelectedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);
  const [scrambleStatus, setScrambleStatus] = useState(null); // 'correct' | 'incorrect'

  useEffect(() => {
    // Shuffle words for active exercise
    if (activeScramble) {
      const shuffled = [...activeScramble.words].sort(() => Math.random() - 0.5);
      setAvailableWords(shuffled);
      setSelectedWords([]);
      setScrambleStatus(null);
    }
  }, [scrambleIdx, activeScramble]);

  const handleAddWord = (word, index) => {
    setSelectedWords((prev) => [...prev, word]);
    setAvailableWords((prev) => prev.filter((_, idx) => idx !== index));
    setScrambleStatus(null);
  };

  const handleRemoveWord = (word, index) => {
    setAvailableWords((prev) => [...prev, word]);
    setSelectedWords((prev) => prev.filter((_, idx) => idx !== index));
    setScrambleStatus(null);
  };

  const checkSentence = () => {
    const constructed = selectedWords.join(" ");
    if (constructed === activeScramble.target) {
      setScrambleStatus("correct");
    } else {
      setScrambleStatus("incorrect");
    }
  };

  const resetScramble = () => {
    const shuffled = [...activeScramble.words].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSelectedWords([]);
    setScrambleStatus(null);
  };

  // ==========================================
  // Section 4: Reading Practice state
  // ==========================================
  const [activePassageIdx, setActivePassageIdx] = useState(0);
  const activePassage = readingPassages[activePassageIdx];
  const [readingAnswers, setReadingAnswers] = useState({});
  const [readingSubmitted, setReadingSubmitted] = useState(false);

  const readingScore = useMemo(() => {
    let score = 0;
    activePassage.questions.forEach((q, idx) => {
      if (readingAnswers[idx] === q.correct) {
        score++;
      }
    });
    return score;
  }, [activePassage, readingAnswers]);

  // ==========================================
  // Section 5: Writing Practice state
  // ==========================================
  const [activeWritingPromptIdx, setActiveWritingPromptIdx] = useState(0);
  const activeWritingPrompt = writingPrompts[activeWritingPromptIdx];
  const [writingDraft, setWritingDraft] = useState("");
  const [showModelAnswer, setShowModelAnswer] = useState(false);

  // Deterministic rule-based analysis (NO AI)
  const writingFeedback = useMemo(() => {
    const text = writingDraft.trim();
    if (!text) return null;

    const words = text.split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    // Check sentence endings
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    const hasPunctuation = /[.!?]$/.test(text);

    // Common spelling errors check
    const commonMisspellings = {
      teh: "the",
      recieve: "receive",
      seperate: "separate",
      definately: "definitely",
      alot: "a lot",
      tommorow: "tomorrow",
      untill: "until",
      goverment: "government"
    };

    const detectedSpellingIssues = [];
    words.forEach((w) => {
      const cleanW = w.toLowerCase().replace(/[^a-z]/g, "");
      if (commonMisspellings[cleanW]) {
        detectedSpellingIssues.push(`"${cleanW}" (suggested: "${commonMisspellings[cleanW]}")`);
      }
    });

    // Capitalization check
    const lowercaseSentences = sentences.filter((s) => {
      const trimmed = s.trim();
      return trimmed.length > 0 && trimmed[0] === trimmed[0].toLowerCase() && /[a-z]/.test(trimmed[0]);
    });

    return {
      wordCount,
      sentenceCount: sentences.length,
      hasPunctuation,
      detectedSpellingIssues,
      hasLowercaseStart: lowercaseSentences.length > 0
    };
  }, [writingDraft]);

  // ==========================================
  // Section 6: Speaking Practice state (Speech Recognition + MediaRecorder)
  // ==========================================
  const [activeTopicIdx, setActiveTopicIdx] = useState(0);
  const activeTopic = speakingTopics[activeTopicIdx];

  const [isRecording, setIsRecording] = useState(false);
  const [speechTranscript, setSpeechTranscript] = useState("");
  const [recordedAudioUrl, setRecordedAudioUrl] = useState(null);
  const [isSpeechSupported, setIsSpeechSupported] = useState(true);
  const [recordingSeconds, setRecordingSeconds] = useState(0);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const speechRecognitionRef = useRef(null);
  const timerIntervalRef = useRef(null);

  // Check Web Speech API support on mount
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSpeechSupported(false);
    }
  }, []);

  // Timer while recording
  useEffect(() => {
    if (isRecording) {
      timerIntervalRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      setRecordingSeconds(0);
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isRecording]);

  // Start Voice Recording
  const startRecording = async () => {
    setSpeechTranscript("");
    setRecordedAudioUrl(null);
    audioChunksRef.current = [];

    try {
      // 1. Microphone capture via MediaRecorder
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(audioUrl);

        // Stop all tracks to release microphone hardware
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();

      // 2. Speech-to-Text via Web Speech API
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        speechRecognitionRef.current = recognition;
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onresult = (event) => {
          let currentTrans = "";
          for (let i = 0; i < event.results.length; i++) {
            currentTrans += event.results[i][0].transcript + " ";
          }
          setSpeechTranscript(currentTrans.trim());
        };

        recognition.onerror = (err) => {
          console.warn("Speech recognition notice:", err.error);
        };

        recognition.start();
      }

      setIsRecording(true);
    } catch (err) {
      alert("Microphone permission was denied or microphone is not available. Please allow microphone access in your browser to practice speaking.");
      console.error(err);
    }
  };

  // Stop Voice Recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    if (speechRecognitionRef.current) {
      speechRecognitionRef.current.stop();
    }
    setIsRecording(false);
  };

  // Delete Recording
  const deleteRecording = () => {
    setRecordedAudioUrl(null);
    setSpeechTranscript("");
    audioChunksRef.current = [];
  };

  // Compute deterministic speaking evaluation feedback
  const speakingAnalysis = useMemo(() => {
    if (!speechTranscript) return null;

    const spokenWords = speechTranscript.toLowerCase().split(/\s+/).filter(Boolean);
    const expectedWords = activeTopic.expected.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean);

    // Find key matched words
    const matched = [];
    const missing = [];

    expectedWords.forEach((word) => {
      if (word.length > 3) {
        // Evaluate key words of significant length
        if (spokenWords.includes(word)) {
          if (!matched.includes(word)) matched.push(word);
        } else {
          if (!missing.includes(word)) missing.push(word);
        }
      }
    });

    const keyExpectedCount = matched.length + missing.length;
    const matchPercentage = keyExpectedCount > 0 ? Math.round((matched.length / keyExpectedCount) * 100) : 0;

    return {
      wordCount: spokenWords.length,
      matchedWords: matched,
      missingWords: missing.slice(0, 5),
      matchPercentage: Math.min(Math.max(matchPercentage, 10), 100)
    };
  }, [speechTranscript, activeTopic]);

  return (
    <div className="cs-page-container">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Content Area */}
      <main className="cs-main-content">
        {/* Top Hero Banner */}
        <section className="cs-hero-banner">
          <div className="cs-hero-left">
            <span className="cs-hero-badge">🗣️ English Communication Track</span>
            <h1 className="cs-hero-title">
              Communication <span>Skills Lab</span>
            </h1>
            <p className="cs-hero-subtitle">
              Enhance your English proficiency for campus placements and technical
              interviews. Practice grammar, vocabulary, sentence formation, reading,
              writing, browser-based speaking with voice recording, and workplace communication.
            </p>
          </div>

          <div className="cs-hero-stats">
            <div className="cs-hero-stat-box">
              <span className="cs-hero-stat-number">7</span>
              <span className="cs-hero-stat-label">Practice Modules</span>
            </div>
            <div className="cs-hero-stat-box">
              <span className="cs-hero-stat-number">10</span>
              <span className="cs-hero-stat-label">Speaking Topics</span>
            </div>
            <div className="cs-hero-stat-box">
              <span className="cs-hero-stat-number">100%</span>
              <span className="cs-hero-stat-label">Free Practice</span>
            </div>
          </div>
        </section>

        {/* 3. Section Navigation Tabs */}
        <nav className="cs-tabs-wrapper">
          <button
            className={`cs-tab-btn ${activeTab === "grammar" ? "active" : ""}`}
            onClick={() => setActiveTab("grammar")}
          >
            <span className="cs-tab-icon">📖</span>
            <span>Grammar Practice</span>
          </button>

          <button
            className={`cs-tab-btn ${activeTab === "vocab" ? "active" : ""}`}
            onClick={() => setActiveTab("vocab")}
          >
            <span className="cs-tab-icon">📚</span>
            <span>Vocabulary</span>
          </button>

          <button
            className={`cs-tab-btn ${activeTab === "sentence" ? "active" : ""}`}
            onClick={() => setActiveTab("sentence")}
          >
            <span className="cs-tab-icon">🧩</span>
            <span>Sentence Formation</span>
          </button>

          <button
            className={`cs-tab-btn ${activeTab === "reading" ? "active" : ""}`}
            onClick={() => setActiveTab("reading")}
          >
            <span className="cs-tab-icon">📰</span>
            <span>Reading Practice</span>
          </button>

          <button
            className={`cs-tab-btn ${activeTab === "writing" ? "active" : ""}`}
            onClick={() => setActiveTab("writing")}
          >
            <span className="cs-tab-icon">✍️</span>
            <span>Writing Practice</span>
          </button>

          <button
            className={`cs-tab-btn ${activeTab === "speaking" ? "active" : ""}`}
            onClick={() => setActiveTab("speaking")}
          >
            <span className="cs-tab-icon">🎙️</span>
            <span>Speaking Practice</span>
          </button>

          <button
            className={`cs-tab-btn ${activeTab === "workplace" ? "active" : ""}`}
            onClick={() => setActiveTab("workplace")}
          >
            <span className="cs-tab-icon">💼</span>
            <span>Workplace Communication</span>
          </button>
        </nav>

        {/* ==========================================================
            MODULE 1: GRAMMAR PRACTICE
            ========================================================== */}
        {activeTab === "grammar" && (
          <div className="cs-card">
            <div className="cs-card-header">
              <div className="cs-card-title-group">
                <h2><span>📖</span> English Grammar Exercises</h2>
                <p>
                  Master foundational grammar: Parts of Speech, Tenses, Articles,
                  Prepositions, and Subject-Verb Agreement.
                </p>
              </div>
              <span className="cs-score-pill">
                Score: {grammarScore} / {filteredGrammar.length}
              </span>
            </div>

            {/* Filter by Topic */}
            <div className="cs-filter-row">
              {["All", "Parts of Speech", "Tenses", "Articles", "Prepositions", "Subject-Verb Agreement", "Common Mistakes"].map((cat) => (
                <button
                  key={cat}
                  className={`cs-filter-chip ${selectedGrammarCat === cat ? "active" : ""}`}
                  onClick={() => setSelectedGrammarCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grammar Questions List */}
            <div className="cs-grammar-grid">
              {filteredGrammar.map((q, idx) => {
                const userSelected = grammarAnswers[q.id];
                const isAnswered = userSelected !== undefined;

                return (
                  <div key={q.id} className="cs-question-box">
                    <div className="cs-question-meta">
                      <span className="cs-q-topic-tag">{q.category}</span>
                      <span className="cs-q-num">Question {idx + 1}</span>
                    </div>

                    <p className="cs-question-text">{q.question}</p>

                    <div className="cs-options-list">
                      {q.options.map((opt, optIdx) => {
                        let btnClass = "cs-option-btn";
                        if (isAnswered) {
                          if (optIdx === q.correct) btnClass += " correct";
                          else if (optIdx === userSelected) btnClass += " incorrect";
                        }

                        return (
                          <button
                            key={optIdx}
                            className={btnClass}
                            disabled={isAnswered}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                          >
                            <span>{String.fromCharCode(65 + optIdx)}.</span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="cs-explanation-box">
                        <strong>💡 Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==========================================================
            MODULE 2: VOCABULARY
            ========================================================== */}
        {activeTab === "vocab" && (
          <div className="cs-card">
            <div className="cs-card-header">
              <div className="cs-card-title-group">
                <h2><span>📚</span> English Vocabulary &amp; Word Meanings</h2>
                <p>
                  Explore daily-use English words, workplace terminology, synonyms,
                  antonyms, and practical example sentences.
                </p>
              </div>
              <span className="cs-score-pill">
                Showing {filteredVocab.length} Words
              </span>
            </div>

            {/* Search and Category Filter */}
            <div className="cs-vocab-search-bar">
              <input
                type="text"
                className="cs-vocab-input"
                placeholder="Search words by keyword, meaning, or synonym..."
                value={vocabSearch}
                onChange={(e) => setVocabSearch(e.target.value)}
              />
            </div>

            <div className="cs-filter-row">
              {["All", "Workplace", "Daily Use"].map((cat) => (
                <button
                  key={cat}
                  className={`cs-filter-chip ${vocabFilter === cat ? "active" : ""}`}
                  onClick={() => setVocabFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Vocabulary Cards Grid */}
            <div className="cs-vocab-cards-grid">
              {filteredVocab.map((item) => (
                <div key={item.id} className="cs-vocab-card">
                  <div className="cs-vocab-header">
                    <h3 className="cs-vocab-word">{item.word}</h3>
                    <span className="cs-vocab-pos">{item.pos}</span>
                  </div>

                  <p className="cs-vocab-meaning">{item.meaning}</p>

                  <div className="cs-vocab-example">
                    <strong>Example: </strong>"{item.example}"
                  </div>

                  <div className="cs-vocab-pairs">
                    <div className="cs-vocab-pair-item">
                      <strong>Synonyms: </strong>{item.synonyms}
                    </div>
                    <div className="cs-vocab-pair-item">
                      <strong>Antonyms: </strong>{item.antonyms}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==========================================================
            MODULE 3: SENTENCE FORMATION
            ========================================================== */}
        {activeTab === "sentence" && (
          <div className="cs-card">
            <div className="cs-card-header">
              <div className="cs-card-title-group">
                <h2><span>🧩</span> Sentence Formation Activity</h2>
                <p>
                  Click and arrange the jumbled word chips in grammatical order
                  to construct a complete English sentence.
                </p>
              </div>
              <span className="cs-score-pill">
                Exercise {scrambleIdx + 1} of {scrambleExercises.length}
              </span>
            </div>

            <div className="cs-scramble-box">
              <p className="cs-scramble-hint">
                <strong>💡 Scenario / Hint: </strong>
                {activeScramble.hint}
              </p>

              {/* Word Chips Pool */}
              <div className="cs-chips-pool">
                {availableWords.map((word, idx) => (
                  <button
                    key={idx}
                    className="cs-word-chip"
                    onClick={() => handleAddWord(word, idx)}
                  >
                    + {word}
                  </button>
                ))}
              </div>

              {/* Formed Sentence Dropzone */}
              <div className="cs-sentence-dropzone">
                {selectedWords.length === 0 ? (
                  <span className="cs-dropzone-placeholder">
                    Click word chips above to build your sentence here...
                  </span>
                ) : (
                  selectedWords.map((word, idx) => (
                    <button
                      key={idx}
                      className="cs-word-chip"
                      onClick={() => handleRemoveWord(word, idx)}
                    >
                      {word} ✕
                    </button>
                  ))
                )}
              </div>

              {/* Action Buttons */}
              <div className="cs-scramble-actions">
                <button
                  className="cs-btn-primary"
                  onClick={checkSentence}
                  disabled={selectedWords.length === 0}
                >
                  ✓ Check Sentence
                </button>
                <button className="cs-btn-outline" onClick={resetScramble}>
                  ↺ Reset Words
                </button>
                {scrambleIdx < scrambleExercises.length - 1 && (
                  <button
                    className="cs-btn-outline"
                    onClick={() => setScrambleIdx((prev) => prev + 1)}
                  >
                    Next Exercise →
                  </button>
                )}
              </div>

              {/* Validation Feedback */}
              {scrambleStatus === "correct" && (
                <div className="cs-explanation-box">
                  🎉 <strong>Excellent!</strong> Your sentence is grammatically correct and fluent.
                </div>
              )}

              {scrambleStatus === "incorrect" && (
                <div className="cs-explanation-box" style={{ background: "#fef2f2", borderColor: "#fecaca", color: "#b91c1c" }}>
                  ⚠️ <strong>Not quite correct.</strong> The correct sentence order is:
                  <br />
                  <em>"{activeScramble.target}"</em>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==========================================================
            MODULE 4: READING PRACTICE
            ========================================================== */}
        {activeTab === "reading" && (
          <div className="cs-card">
            <div className="cs-card-header">
              <div className="cs-card-title-group">
                <h2><span>📰</span> Reading Comprehension Practice</h2>
                <p>
                  Read the short English workplace passage carefully and answer
                  the comprehension questions below.
                </p>
              </div>
              <span className="cs-score-pill">
                Passage {activePassageIdx + 1} of {readingPassages.length}
              </span>
            </div>

            {/* Passage Selector Tabs */}
            <div className="cs-filter-row">
              {readingPassages.map((p, idx) => (
                <button
                  key={p.id}
                  className={`cs-filter-chip ${activePassageIdx === idx ? "active" : ""}`}
                  onClick={() => {
                    setActivePassageIdx(idx);
                    setReadingAnswers({});
                    setReadingSubmitted(false);
                  }}
                >
                  {p.title}
                </button>
              ))}
            </div>

            {/* Passage Content */}
            <div className="cs-passage-wrapper">
              <div className="cs-passage-header">
                <h3 className="cs-passage-title">{activePassage.title}</h3>
                <span className="cs-passage-meta">{activePassage.wordCount} words &bull; ~1 min read</span>
              </div>
              <p className="cs-passage-text">{activePassage.text}</p>
            </div>

            {/* Comprehension Questions */}
            <div className="cs-grammar-grid">
              {activePassage.questions.map((q, qIdx) => {
                const userAns = readingAnswers[qIdx];

                return (
                  <div key={qIdx} className="cs-question-box">
                    <div className="cs-question-meta">
                      <span className="cs-q-topic-tag">Comprehension Question</span>
                      <span className="cs-q-num">Q{qIdx + 1}</span>
                    </div>

                    <p className="cs-question-text">{q.q}</p>

                    <div className="cs-options-list">
                      {q.options.map((opt, optIdx) => {
                        let btnClass = "cs-option-btn";
                        if (readingSubmitted) {
                          if (optIdx === q.correct) btnClass += " correct";
                          else if (optIdx === userAns) btnClass += " incorrect";
                        } else if (userAns === optIdx) {
                          btnClass += " correct";
                        }

                        return (
                          <button
                            key={optIdx}
                            className={btnClass}
                            disabled={readingSubmitted}
                            onClick={() =>
                              setReadingAnswers((prev) => ({
                                ...prev,
                                [qIdx]: optIdx
                              }))
                            }
                          >
                            <span>{String.fromCharCode(65 + optIdx)}.</span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "1.25rem", display: "flex", gap: "1rem", alignItems: "center" }}>
              {!readingSubmitted ? (
                <button
                  className="cs-btn-primary"
                  onClick={() => setReadingSubmitted(true)}
                  disabled={Object.keys(readingAnswers).length < activePassage.questions.length}
                >
                  Submit Reading Answers
                </button>
              ) : (
                <div className="cs-score-pill" style={{ fontSize: "1rem" }}>
                  Your Score: {readingScore} / {activePassage.questions.length} (
                  {Math.round((readingScore / activePassage.questions.length) * 100)}%)
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==========================================================
            MODULE 5: WRITING PRACTICE
            ========================================================== */}
        {activeTab === "writing" && (
          <div className="cs-card">
            <div className="cs-card-header">
              <div className="cs-card-title-group">
                <h2><span>✍️</span> Writing Practice &amp; Grammar Feedback</h2>
                <p>
                  Compose short professional paragraphs, emails, and self-introductions.
                  Receive deterministic grammar and structure feedback (No AI).
                </p>
              </div>
              <span className="cs-score-pill">
                Task: {activeWritingPrompt.type}
              </span>
            </div>

            {/* Prompt Selector */}
            <div className="cs-filter-row">
              {writingPrompts.map((prompt, idx) => (
                <button
                  key={prompt.id}
                  className={`cs-filter-chip ${activeWritingPromptIdx === idx ? "active" : ""}`}
                  onClick={() => {
                    setActiveWritingPromptIdx(idx);
                    setWritingDraft("");
                    setShowModelAnswer(false);
                  }}
                >
                  {prompt.title}
                </button>
              ))}
            </div>

            <div className="cs-writing-layout">
              {/* Left Column: Input */}
              <div>
                <div className="cs-writing-prompt-box">
                  <h3 className="cs-writing-prompt-title">{activeWritingPrompt.title}</h3>
                  <p className="cs-writing-prompt-desc">{activeWritingPrompt.desc}</p>
                </div>

                <textarea
                  className="cs-writing-textarea"
                  placeholder="Type your draft here..."
                  value={writingDraft}
                  onChange={(e) => setWritingDraft(e.target.value)}
                />

                <div className="cs-writing-stats-row">
                  <span>Words: {writingFeedback ? writingFeedback.wordCount : 0} / {activeWritingPrompt.minWords} min target</span>
                  <span>Sentences: {writingFeedback ? writingFeedback.sentenceCount : 0}</span>
                </div>
              </div>

              {/* Right Column: Rule-Based Evaluation */}
              <div className="cs-writing-feedback-card">
                <h3 className="cs-feedback-header">
                  <span>🔍</span> Structure &amp; Grammar Checklist
                </h3>

                {writingDraft.trim() === "" ? (
                  <p className="cs-transcript-empty">
                    Start typing your response on the left to view immediate grammar,
                    spelling, and structure feedback.
                  </p>
                ) : (
                  <div className="cs-feedback-list">
                    {/* Word count check */}
                    <div className={`cs-feedback-item ${writingFeedback.wordCount >= activeWritingPrompt.minWords ? "success" : "tip"}`}>
                      <span>{writingFeedback.wordCount >= activeWritingPrompt.minWords ? "✓" : "ℹ"}</span>
                      <span>
                        Length: {writingFeedback.wordCount} words (Target: {activeWritingPrompt.minWords}+ words).
                      </span>
                    </div>

                    {/* Punctuation check */}
                    <div className={`cs-feedback-item ${writingFeedback.hasPunctuation ? "success" : "tip"}`}>
                      <span>{writingFeedback.hasPunctuation ? "✓" : "ℹ"}</span>
                      <span>
                        {writingFeedback.hasPunctuation
                          ? "Proper ending punctuation (. or ?) detected."
                          : "Remember to conclude your final sentence with a period (.) or question mark."}
                      </span>
                    </div>

                    {/* Capitalization check */}
                    <div className={`cs-feedback-item ${!writingFeedback.hasLowercaseStart ? "success" : "tip"}`}>
                      <span>{!writingFeedback.hasLowercaseStart ? "✓" : "ℹ"}</span>
                      <span>
                        {!writingFeedback.hasLowercaseStart
                          ? "Sentences begin with capital letters."
                          : "Check that every sentence begins with a capital letter."}
                      </span>
                    </div>

                    {/* Spelling issues check */}
                    {writingFeedback.detectedSpellingIssues.length > 0 && (
                      <div className="cs-feedback-item tip">
                        <span>⚠️</span>
                        <span>
                          Potential spelling corrections: {writingFeedback.detectedSpellingIssues.join(", ")}.
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <button
                  className="cs-btn-outline"
                  onClick={() => setShowModelAnswer(!showModelAnswer)}
                >
                  {showModelAnswer ? "Hide Model Answer" : "💡 View Reference Model Answer"}
                </button>

                {showModelAnswer && (
                  <div className="cs-model-answer-box">
                    <div className="cs-model-answer-title">Reference Model Answer:</div>
                    <div className="cs-model-answer-text">{activeWritingPrompt.modelAnswer}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==========================================================
            MODULE 6: SPEAKING PRACTICE (Web Speech & Audio Recording)
            ========================================================== */}
        {activeTab === "speaking" && (
          <div className="cs-card">
            <div className="cs-card-header">
              <div className="cs-card-title-group">
                <h2><span>🎙️</span> Browser-Based Speaking Practice</h2>
                <p>
                  Record your voice using your microphone, play back your audio,
                  and inspect your transcribed speech text.
                </p>
              </div>
              <span className="cs-score-pill">
                10 Speaking Topics Available
              </span>
            </div>

            {!isSpeechSupported && (
              <div className="cs-unsupported-msg">
                ⚠️ Speech recognition is not supported in this browser. Please use a supported
                browser (such as Google Chrome or Microsoft Edge) for speech-to-text transcription.
                Audio voice recording via microphone will still function.
              </div>
            )}

            <div className="cs-speaking-layout">
              {/* Left Column: Topic & Recording Control */}
              <div className="cs-speaking-card">
                <label style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--cs-text-muted)", display: "block", marginBottom: "0.5rem" }}>
                  Select a Speaking Topic:
                </label>
                <select
                  className="cs-topic-selector-select"
                  value={activeTopicIdx}
                  onChange={(e) => {
                    setActiveTopicIdx(Number(e.target.value));
                    deleteRecording();
                  }}
                >
                  {speakingTopics.map((topic, idx) => (
                    <option key={topic.id} value={idx}>
                      #{topic.id}: {topic.title}
                    </option>
                  ))}
                </select>

                <div className="cs-speaking-prompt-box">
                  <h3 className="cs-speaking-prompt-title">{activeTopic.title}</h3>
                  <p className="cs-speaking-prompt-guide">
                    <strong>Guide points to cover: </strong>
                    {activeTopic.guide}
                  </p>
                </div>

                <div className="cs-expected-answer-box">
                  <div className="cs-expected-answer-title">💡 Example / Practice Benchmark Answer:</div>
                  <p className="cs-expected-answer-text">"{activeTopic.expected}"</p>
                </div>

                {/* Recording Controls */}
                <div className="cs-recording-controls-box">
                  {isRecording ? (
                    <div>
                      <div className="cs-recording-status-text" style={{ color: "#ef4444" }}>
                        <span className="cs-recording-pulse"></span>
                        Recording in progress... (00:{recordingSeconds < 10 ? `0${recordingSeconds}` : recordingSeconds})
                      </div>
                      <button className="cs-btn-mic-stop" onClick={stopRecording}>
                        ⏹ Stop Recording
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p style={{ margin: "0 0 1rem", fontSize: "0.88rem", color: "var(--cs-text-muted)" }}>
                        Click below to grant microphone access and start speaking in English.
                      </p>
                      <button className="cs-btn-mic-start" onClick={startRecording}>
                        🎙️ Start Recording
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Recording Playback & Feedback */}
              <div className="cs-speaking-result-card">
                <h3 className="cs-feedback-header">
                  <span>🎧</span> Speaking Practice Result
                </h3>

                {/* Audio Player */}
                <div className="cs-audio-player-box">
                  <div className="cs-audio-player-title">
                    <span>Your Recorded Audio</span>
                    {recordedAudioUrl && <span style={{ color: "var(--cs-accent)", fontWeight: "600" }}>✓ Audio Ready</span>}
                  </div>

                  {recordedAudioUrl ? (
                    <div>
                      <audio controls src={recordedAudioUrl} />
                      <div className="cs-audio-actions">
                        <button className="cs-btn-outline" onClick={deleteRecording}>
                          🗑️ Delete
                        </button>
                        <button className="cs-btn-primary" onClick={startRecording}>
                          ↺ Try Again
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="cs-transcript-empty" style={{ margin: 0 }}>
                      No voice recording captured yet. Click "Start Recording" to speak.
                    </p>
                  )}
                </div>

                {/* Transcribed Speech Text */}
                <div className="cs-transcript-box">
                  <div className="cs-transcript-title">Transcribed Speech Text:</div>
                  {speechTranscript ? (
                    <p className="cs-transcript-text">"{speechTranscript}"</p>
                  ) : (
                    <p className="cs-transcript-empty">
                      Transcribed words will appear here as you speak.
                    </p>
                  )}
                </div>

                {/* Practice Feedback Area */}
                {speakingAnalysis && (
                  <div className="cs-speech-feedback-box">
                    <div className="cs-feedback-stats-grid">
                      <div className="cs-feedback-stat-item">
                        <span className="cs-feedback-stat-val">{speakingAnalysis.wordCount}</span>
                        <span className="cs-feedback-stat-lbl">Words Spoken</span>
                      </div>
                      <div className="cs-feedback-stat-item">
                        <span className="cs-feedback-stat-val">{speakingAnalysis.matchedWords.length}</span>
                        <span className="cs-feedback-stat-lbl">Key Vocabulary Used</span>
                      </div>
                      <div className="cs-feedback-stat-item">
                        <span className="cs-feedback-stat-val">{speakingAnalysis.matchPercentage}%</span>
                        <span className="cs-feedback-stat-lbl">Content Match</span>
                      </div>
                    </div>

                    <div style={{ fontSize: "0.85rem", color: "var(--cs-text-body)", lineHeight: "1.5" }}>
                      {speakingAnalysis.matchedWords.length > 0 && (
                        <p style={{ margin: "0 0 0.5rem" }}>
                          ✅ <strong>Key vocabulary used:</strong> {speakingAnalysis.matchedWords.join(", ")}
                        </p>
                      )}
                      {speakingAnalysis.missingWords.length > 0 && (
                        <p style={{ margin: "0 0 0.5rem", color: "#92400e" }}>
                          💡 <strong>Suggested words to practice saying:</strong> {speakingAnalysis.missingWords.join(", ")}
                        </p>
                      )}
                      <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--cs-text-muted)", fontStyle: "italic" }}>
                        Note: Feedback generated by speech recognition comparison (Not AI generated).
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==========================================================
            MODULE 7: WORKPLACE COMMUNICATION
            ========================================================== */}
        {activeTab === "workplace" && (
          <div className="cs-card">
            <div className="cs-card-header">
              <div className="cs-card-title-group">
                <h2><span>💼</span> Workplace &amp; Professional Communication</h2>
                <p>
                  Learn polite phrases, business email standards, meeting etiquette,
                  and professional phrases for freshers.
                </p>
              </div>
              <span className="cs-score-pill">
                6 Workplace Scenarios
              </span>
            </div>

            <div className="cs-workplace-grid">
              {workplaceTopics.map((topic, idx) => (
                <div key={idx} className="cs-workplace-card">
                  <div className="cs-wp-card-header">
                    <span className="cs-wp-icon">{topic.icon}</span>
                    <h3 className="cs-wp-title">{topic.title}</h3>
                  </div>

                  <p className="cs-wp-desc">{topic.desc}</p>

                  <div className="cs-phrase-list">
                    {topic.phrases.map((phrase, pIdx) => (
                      <div key={pIdx} className="cs-phrase-item">
                        "{phrase}"
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
