// CareerCraft - Communication Skills Data & Interactive Practice Prompts for Freshers

export const communicationTopics = [
  {
    id: "self-intro",
    title: "Self Introduction",
    tagline: "How to introduce yourself confidently in 60-90 seconds",
    icon: "👋",
    tips: [
      "Follow the 4-part formula: Greeting & Name -> Educational Background -> Technical Skills & Projects -> Career Goal & Enthusiasm.",
      "Keep it professional and concise (under 90 seconds). Avoid talking about primary schooling or unrelated hobbies.",
      "Smile, maintain eye contact (or look into the webcam for online interviews), and speak at a steady pace.",
      "End with a clear, confident hand-off: 'Thank you, I would be happy to answer any questions!'"
    ],
    sampleScript: "Good morning / afternoon! My name is [Your Name], and I am currently pursuing my final year in Computer Science / Information Technology at [Your College Name]. During my academic journey, I developed a strong interest in Web Development and modern IT technologies like HTML, CSS, JavaScript, and React.js. I have built several projects, including 'CareerCraft', a career development platform for college students where I implemented interactive coding tools and practice assessments. I am eager to apply my technical skills, learn from experienced mentors, and contribute to your team as a fresher software engineer. Thank you!",
    practicePrompt: "Practice: Deliver your 60-second Self Introduction out loud using the template above."
  },
  {
    id: "explaining-project",
    title: "Explaining a Project",
    tagline: "Use the simple Problem-Solution-Tech-Role framework",
    icon: "📂",
    tips: [
      "Use the 4-step framework: 1) What problem does the project solve? 2) What technologies did you choose and why? 3) What are the main features? 4) What was your individual role and biggest learning?",
      "Mention specific challenges you faced and how you solved them (e.g., 'Initially, state management across components was tricky, but using React hooks solved it').",
      "Avoid memorized robotic answers; explain it like you are showing your work to a senior teammate.",
      "Be ready to show your live project or explain your database structure on a whiteboard."
    ],
    sampleScript: "For my final-year project, I built 'CareerCraft', an IT career guidance platform for college freshers. The problem we identified was that freshers often get confused about which IT skills to learn and how to prepare for interviews. To solve this, I designed a clean React web application with 10 IT career pathways, interactive HTML/CSS/JS coding practice, and technical MCQ tests. I was responsible for frontend component architecture, routing, and practice test logic. This project gave me solid hands-on experience in component lifecycle, React state management, and responsive CSS.",
    practicePrompt: "Practice: Summarize your best college project in under 2 minutes covering Problem, Tech, Features, and Your Role."
  },
  {
    id: "explaining-skills",
    title: "Explaining Technical Skills",
    tagline: "Connecting technical knowledge with practical examples",
    icon: "💡",
    tips: [
      "Never just list buzzwords. When you say 'I know React', immediately back it up with what you built with it.",
      "Rate your confidence honestly: 'On a scale of 1-10, I would rate my JavaScript as 8 and backend as 6, as I am actively learning Node.js.'",
      "Explain the 'why' behind tools (e.g., 'I chose React because its reusable components made building the 10 career cards modular and maintainable').",
      "If you don't know a technology mentioned by the interviewer, be honest: 'I haven't worked with that specific tool yet, but I have a strong foundation in [related skill] and can learn it quickly.'"
    ],
    sampleScript: "My primary technical strengths are in frontend web technologies—specifically JavaScript and React. I am comfortable building responsive user interfaces, managing component state with useState, and communicating with REST APIs. For backend, I have learned the basics of Node.js and SQL to understand how frontend connects to databases.",
    practicePrompt: "Practice: Pick one technology (e.g. JavaScript or React) and explain why you like it and what you built with it."
  },
  {
    id: "answering-questions",
    title: "Answering Interview Questions",
    tagline: "Structured thinking and what to do when you don't know an answer",
    icon: "🎯",
    tips: [
      "Take a 2-second pause before answering to organize your thoughts instead of rushing into broken sentences.",
      "Structure your answer: 1) Short direct definition, 2) Key points or benefits, 3) Brief practical example.",
      "If you don't understand the question, politely ask: 'Could you please clarify what specific aspect you would like me to focus on?'",
      "If you genuinely don't know the answer, say honestly: 'I am not completely sure about this specific topic right now, but my understanding is [brief guess if appropriate], and I will definitely read up on it after this interview.'"
    ],
    sampleScript: "Direct Definition -> Explanation -> Example: 'The CSS Box Model is the container that wraps around every HTML element. It consists of content, padding, border, and margin. For example, if you want spacing inside a button around the text, you add padding; if you want distance between two buttons, you add margin.'",
    practicePrompt: "Practice: Answer the question 'What is React?' using the Definition -> Points -> Example structure."
  },
  {
    id: "speaking-clearly",
    title: "Speaking Clearly & Body Language",
    tagline: "Non-verbal cues and clear voice modulation",
    icon: "🗣️",
    tips: [
      "Maintain comfortable eye contact: In video interviews, look at the camera lens, not down at the screen.",
      "Posture: Sit upright with open shoulders; this naturally improves your vocal projection and confidence.",
      "Pacing: Freshers often speak too fast when nervous. Consciously slow down your speaking speed by 20%.",
      "Avoid filler words: Instead of saying 'ummm', 'like', 'you know', or 'basically' repeatedly, take a silent breath.",
      "Hand gestures: Natural hand gestures show enthusiasm, but avoid fidgeting with pens, hair, or swivel chairs."
    ],
    sampleScript: "Pro Tip: Record yourself on your phone answering 'Tell me about yourself'. Play it back and check: Did you speak too fast? Did you smile? Were there too many 'ums'?",
    practicePrompt: "Practice: Stand or sit upright and read a technical paragraph aloud slowly and with clear pauses."
  },
  {
    id: "professional-communication",
    title: "Basic Professional Communication",
    tagline: "Email etiquette, follow-ups, and professional courtesy",
    icon: "✉️",
    tips: [
      "Professional Email: Use a clear subject line (e.g., 'Application for Graduate Software Engineer - [Your Name] - [College Name]').",
      "Always address recruiters and interviewers respectfully (e.g., 'Dear Hiring Team,' or 'Hello Mr./Ms. [Last Name],').",
      "Thank You Note: Send a brief thank-you email within 24 hours of an interview thanking the panel for their time and expressing enthusiasm.",
      "Punctuality: Join online interviews 5-10 minutes early to test microphone, webcam, and internet stability.",
      "Asking questions at the end: Always have 1-2 thoughtful questions ready when asked 'Do you have any questions for us?' (e.g., 'What does a typical day look like for a fresher joining this team?')"
    ],
    sampleScript: "Sample Post-Interview Thank You Email:\n\nSubject: Thank you - [Your Name] - Interview for Associate Software Engineer\n\nDear [Interviewer Name / Hiring Team],\n\nThank you for the opportunity to interview for the Associate Software Engineer role today. I really enjoyed learning more about the team's upcoming projects and the technologies you use. Our conversation reinforced my excitement about joining your company. Please let me know if you need any additional details from my side.\n\nWarm regards,\n[Your Name]\n[Your Phone Number]\n[LinkedIn Profile]",
    practicePrompt: "Practice: Draft a 3-sentence thank you note after an interview."
  }
];

export const practiceActivities = [
  {
    id: "timer-project",
    title: "⏱️ Practice 1: 1-Minute Project Pitch",
    instructions: "Start the 60-second timer and explain your project out loud. Make sure you cover: The problem, technologies used, main features, and your contribution before the timer hits zero!",
    duration: 60,
    guideSteps: [
      "0:00 - 0:15: State project title and the problem it solves.",
      "0:15 - 0:35: Mention tech stack (React, CSS, etc.) and top 2 features.",
      "0:35 - 0:50: Describe what you specifically coded/designed.",
      "0:50 - 1:00: Wrap up with key takeaway or impact."
    ]
  },
  {
    id: "tech-explain",
    title: "💬 Practice 2: Explain a Technology You Learned",
    instructions: "Choose one technology below and explain it aloud in 3 sentences: What is it? Why is it useful? What did you build with it?",
    options: [
      "HTML5 Semantic Tags",
      "CSS Flexbox Layout",
      "JavaScript Arrays and DOM",
      "React Components and useState",
      "Node.js Server Runtime",
      "MySQL Relational Database"
    ],
    formula: "Sentence 1: [Tech] is a [category] used to [main purpose].\nSentence 2: It is helpful because [main advantage/feature].\nSentence 3: In my project, I used it to [specific implementation]."
  },
  {
    id: "self-intro-builder",
    title: "📝 Practice 3: Interactive Self-Introduction Builder",
    instructions: "Fill in your details below to generate your personalized 60-second self-introduction script!"
  }
];
