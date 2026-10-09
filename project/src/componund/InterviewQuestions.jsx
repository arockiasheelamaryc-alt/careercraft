import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./InterviewQuestions.css";
import codingPracticeBg from "./coding-practice-bg.jpg";

// 10 IT Job Categories Definition matching Career Craft
const interviewCategories = [
  {
    id: "web-development",
    title: "Web Development",
    role: "Web Developer (Frontend / Full Stack)",
    icon: "🌐",
    desc: "Frontend, backend, React.js, JavaScript, HTML5/CSS3, and web architecture questions for freshers.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "REST APIs"]
  },
  {
    id: "software-development",
    title: "Software Development",
    role: "Software Developer / Engineer",
    icon: "💻",
    desc: "OOP concepts, Data Structures, core programming, algorithms, debugging, and SDLC fundamentals.",
    technologies: ["Java", "Python", "C++", "OOPs", "DSA Basics", "Git"]
  },
  {
    id: "data-ai",
    title: "Data Science & AI",
    role: "Data Analyst / AI Junior Specialist",
    icon: "🤖",
    desc: "Python for data, Pandas, NumPy, data cleaning, statistics, basic ML algorithms, and EDA.",
    technologies: ["Python", "Pandas", "NumPy", "SQL", "Machine Learning", "Data Visualization"]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    role: "Cloud Support Associate / Junior DevOps Engineer",
    icon: "☁️",
    desc: "AWS fundamentals, Docker containers, CI/CD pipelines, Linux commands, and cloud hosting.",
    technologies: ["AWS", "Docker", "CI/CD", "Linux", "Kubernetes Basics", "Git"]
  },
  {
    id: "cybersecurity",
    title: "Cyber Security",
    role: "Cybersecurity Analyst / SOC Associate",
    icon: "🛡️",
    desc: "CIA Triad, network security, common cyber attacks, firewalls, Wireshark, and defensive practices.",
    technologies: ["Network Security", "Wireshark", "Firewalls", "Cryptography", "SOC Basics", "OWASP"]
  },
  {
    id: "database",
    title: "Database Administration",
    role: "Database Administrator / SQL Developer",
    icon: "🗄️",
    desc: "SQL queries, joins, normalization, primary/foreign keys, indexing, ACID properties, and transactions.",
    technologies: ["SQL", "MySQL", "PostgreSQL", "Normalization", "Indexing", "MongoDB"]
  },
  {
    id: "software-testing",
    title: "Software Testing / QA",
    role: "QA Tester / Software Test Engineer",
    icon: "🧪",
    desc: "Manual testing methodologies, STLC, test case writing, bug life cycle, Selenium, and API testing.",
    technologies: ["Manual Testing", "Test Cases", "Selenium", "Postman", "Bug Reporting", "STLC"]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    role: "Mobile App Developer (Android / iOS / Flutter)",
    icon: "📱",
    desc: "Flutter, React Native, Android activities, state management, mobile UI, and mobile APIs.",
    technologies: ["Flutter", "React Native", "Android (Kotlin/Java)", "REST APIs", "State Management"]
  },
  {
    id: "it-networking",
    title: "IT Support & Networking",
    role: "IT Support Specialist / Network Associate",
    icon: "📡",
    desc: "OSI Model, IP addressing, DNS, DHCP, routers, switches, ping/tracert, and computer hardware troubleshooting.",
    technologies: ["TCP/IP", "DNS/DHCP", "Routers & Switches", "Troubleshooting", "Windows/Linux OS"]
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Design",
    role: "UI/UX Designer / Product Design Associate",
    icon: "🎨",
    desc: "Design thinking, Figma, wireframing, color theory, typography, visual hierarchy, and usability testing.",
    technologies: ["Figma", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"]
  }
];

// 25 Interview Questions for each of the 10 IT Job Categories (Total 250 Questions)
const interviewQuestionsData = {
  "web-development": [
    {
      id: 1,
      tag: "HTML & Semantics",
      difficulty: "Fresher Essential",
      question: "What is HTML, and why is Semantic HTML important in modern web development?",
      answer: "HTML (HyperText Markup Language) is the standard markup language used to structure web pages and their content.\n\nSemantic HTML uses tags that carry meaning about their content rather than just presentation (e.g. <header>, <nav>, <main>, <article>, <section>, and <footer> instead of generic <div> tags).\n\nKey reasons semantic HTML is vital:\n• Accessibility (a11y): Screen readers for visually impaired users rely on semantic tags to navigate content smoothly.\n• SEO (Search Engine Optimization): Search engine crawlers understand page structure and rank relevant content higher.\n• Maintainability: Makes the source code readable, organized, and easier for engineering teams to maintain.",
      tip: "Mention at least 3 semantic tags (like <header>, <article>, <footer>) and explain how they help search engines and screen readers."
    },
    {
      id: 2,
      tag: "CSS Fundamentals",
      difficulty: "Fresher Essential",
      question: "What is the CSS Box Model, and what are its four main components?",
      answer: "The CSS Box Model is the foundational layout concept where every HTML element on a webpage is treated as a rectangular box.\n\nIt consists of four layers from inside out:\n1. Content: The actual text, image, or media element.\n2. Padding: Transparent space between the content and the element border.\n3. Border: The line surrounding the padding and content.\n4. Margin: Transparent empty space outside the border that separates this element from adjacent elements.\n\nBy default (box-sizing: content-box), padding and border add to the element's width. Developers usually apply 'box-sizing: border-box' so that padding and border are included within the specified width and height.",
      tip: "Explain 'box-sizing: border-box' as a bonus. Interviewers love hearing that you know how it prevents layout breakage."
    },
    {
      id: 3,
      tag: "CSS Layout",
      difficulty: "Core Concept",
      question: "What is the difference between CSS Flexbox and CSS Grid?",
      answer: "Both Flexbox and CSS Grid are modern CSS layout systems, but they are built for different dimensions:\n\n• Flexbox (1-Dimensional): Designed for laying out items in a single direction at a time—either a row OR a column. Perfect for navigation bars, button groups, aligning items vertically, and distributing space along a line.\n\n• CSS Grid (2-Dimensional): Designed for laying out items across both rows AND columns simultaneously. Ideal for entire webpage layouts, photo galleries, dashboard widget layouts, and complex tabular structures.",
      tip: "Summarize simply: 'Flexbox is 1-dimensional (row OR column), while Grid is 2-dimensional (rows AND columns simultaneously)'."
    },
    {
      id: 4,
      tag: "JavaScript Basics",
      difficulty: "Fresher Essential",
      question: "What is the difference between var, let, and const in JavaScript?",
      answer: "The differences boil down to scope, reassignment, and hoisting:\n\n• var: Function-scoped (not block-scoped), can be re-declared and updated, hoisted with an initial value of undefined. Prone to bugs and rarely used in modern code.\n• let: Block-scoped (confined to { }), can be updated (reassigned) but cannot be re-declared in the same scope, hoisted in a 'Temporal Dead Zone' (cannot access before declaration).\n• const: Block-scoped, cannot be re-declared or reassigned. However, properties of objects or elements of arrays declared with const CAN still be mutated.",
      tip: "Always advise using 'const' by default, and 'let' only when you know the variable value needs to change."
    },
    {
      id: 5,
      tag: "JavaScript Basics",
      difficulty: "Fresher Essential",
      question: "What is the difference between '==' and '===' in JavaScript?",
      answer: "• '==' (Loose / Abstract Equality): Compares two values for equality AFTER performing type coercion (converting operands to the same data type). For example: 5 == '5' evaluates to true.\n\n• '===' (Strict Equality): Compares both value AND data type WITHOUT coercion. For example: 5 === '5' evaluates to false because one is a Number and the other is a String.\n\nIn modern JavaScript, '===' is always recommended to prevent unexpected type conversion bugs.",
      tip: "Give the classic example: 0 == false is true, but 0 === false is false."
    },
    {
      id: 6,
      tag: "DOM Manipulation",
      difficulty: "Core Concept",
      question: "What is the DOM (Document Object Model) and how does JavaScript interact with it?",
      answer: "The DOM is a programming interface and hierarchical tree representation of an HTML document created by the web browser when a page loads. Each HTML element, attribute, and text node becomes an object in the DOM tree.\n\nJavaScript interacts with the DOM to make pages dynamic:\n• Selecting elements: document.getElementById(), document.querySelector()\n• Modifying content & styles: element.textContent = 'Hello', element.style.color = 'red'\n• Creating & appending: document.createElement(), parent.appendChild()\n• Listening to user events: element.addEventListener('click', handleClick)",
      tip: "Clarify that the DOM is NOT part of JavaScript itself; it is a Web API provided by the browser environment."
    },
    {
      id: 7,
      tag: "JavaScript ES6+",
      difficulty: "Core Concept",
      question: "What are Arrow Functions in JavaScript and how do they differ from regular functions?",
      answer: "Arrow functions (introduced in ES6) provide a concise syntax for writing function expressions using the '=>' fat-arrow notation.\n\nKey differences:\n1. Syntax: More compact; single expressions can omit curly braces and return keyword.\n2. 'this' binding: Arrow functions do NOT have their own 'this' context; they lexically inherit 'this' from the enclosing execution scope.\n3. 'arguments' object: Arrow functions do not bind their own 'arguments' object (rest parameters ...args are used instead).\n4. Cannot be used as constructors: Arrow functions cannot be called with the 'new' keyword.",
      tip: "Emphasize lexical 'this' binding. This is the #1 question interviewers ask about arrow functions."
    },
    {
      id: 8,
      tag: "Asynchronous JS",
      difficulty: "Core Concept",
      question: "What is the difference between synchronous and asynchronous code in JavaScript?",
      answer: "• Synchronous Code: Executes sequentially, line by line. Each line must complete before the next line can execute. If an operation takes time (like reading a huge file), it blocks the main thread, freezing the user interface.\n\n• Asynchronous Code: Starts a time-consuming task (like fetching data from a server or setTimeout) in the background without blocking the single JavaScript execution thread. When the task completes, its callback or promise resolution is pushed to the Event Loop to run when the call stack is clear.",
      tip: "Remind the interviewer that JavaScript is single-threaded, which is why non-blocking asynchronous architecture via the Event Loop is essential."
    },
    {
      id: 9,
      tag: "Asynchronous JS",
      difficulty: "Core Concept",
      question: "What are Promises in JavaScript and how does async/await improve them?",
      answer: "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It has 3 states: Pending, Fulfilled (resolved), or Rejected.\n\nPromises solved 'Callback Hell' by allowing chaining with .then() and .catch().\n\n'async/await' is syntactic sugar built on top of Promises:\n• Marking a function with 'async' makes it return a Promise.\n• Using 'await' pauses the execution of the async function until the Promise resolves, allowing asynchronous code to look and read like synchronous code, making it cleaner and easier to handle with standard try/catch blocks.",
      tip: "Mention that 'await' can only be used inside an 'async' function (or top-level in ES modules)."
    },
    {
      id: 10,
      tag: "React Basics",
      difficulty: "Fresher Essential",
      question: "What is React, and what are its main features?",
      answer: "React is an open-source, component-based JavaScript frontend library developed by Meta (Facebook) for building interactive user interfaces for single-page applications (SPAs).\n\nMain features:\n• Component-Based Architecture: UI is split into small, reusable, independent pieces.\n• Virtual DOM: Keeps a lightweight copy of the real DOM in memory and calculates minimal updates (reconciliation) for fast rendering.\n• Declarative UI: Developers describe what the UI should look like for a given state, and React handles DOM updates.\n• Unidirectional (One-Way) Data Flow: Data flows cleanly downward from parent to child via props.",
      tip: "Note that React is technically a library, not a full framework like Angular, because it focuses strictly on the View layer."
    },
    {
      id: 11,
      tag: "React Basics",
      difficulty: "Fresher Essential",
      question: "What is JSX in React, and can browsers read it directly?",
      answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like markup directly inside JavaScript files.\n\nNo, web browsers CANNOT read JSX directly. Web browsers only understand pure JavaScript, HTML, and CSS.\n\nA transpiler like Babel compiles JSX into standard JavaScript function calls (React.createElement()).\nFor example:\n<h1>Hello World</h1>\ncompiles into:\nReact.createElement('h1', null, 'Hello World')",
      tip: "Highlight that JSX requires closing all tags (like <img /> or <input />) and uses 'className' instead of 'class' because 'class' is a reserved keyword in JS."
    },
    {
      id: 12,
      tag: "React Core",
      difficulty: "Fresher Essential",
      question: "What is the difference between Props and State in React?",
      answer: "Both props and state are plain JavaScript objects that hold data controlling component output, but they serve different purposes:\n\n• Props (Properties):\n  - Passed from a parent component down to a child component.\n  - Read-only (immutable); a child component must never modify its received props.\n  - Function like arguments to a function.\n\n• State:\n  - Managed internally within the component itself.\n  - Mutable via state update functions (like useState setter).\n  - Holds dynamic data that can change over time (e.g. form inputs, toggles, counters).\n  - When state updates, the component re-renders.",
      tip: "Remember: 'Props get passed to the component, whereas state is managed within the component.'"
    },
    {
      id: 13,
      tag: "React Hooks",
      difficulty: "Fresher Essential",
      question: "What is the useState hook in React and how does it work?",
      answer: "useState is a built-in React Hook that allows functional components to declare and manage internal local state.\n\nSyntax:\nconst [count, setCount] = useState(initialValue);\n\nHow it works:\n• useState returns an array with two elements: the current state value ('count') and a setter function ('setCount') to update that state.\n• When setCount(newValue) is invoked, React schedules a re-render of the component with the new state value.\n• State updates should always be treated as immutable (never write count = 5 directly).",
      tip: "Point out array destructuring: [state, setState] is just standard ES6 array destructuring."
    },
    {
      id: 14,
      tag: "React Hooks",
      difficulty: "Core Concept",
      question: "What is the useEffect hook in React and how do dependency arrays work?",
      answer: "useEffect lets functional components perform side effects such as fetching data from APIs, setting timers, or subscribing to events after rendering.\n\nThe second argument is the dependency array:\n1. No array (useEffect(cb)): Runs after EVERY render.\n2. Empty array (useEffect(cb, [])): Runs ONLY ONCE when the component mounts (loads for the first time).\n3. Array with variables (useEffect(cb, [id])): Runs on mount AND whenever any variable in the array changes.\n\nCleanup Function:\nReturning a function from useEffect runs when the component unmounts or before the effect re-runs, preventing memory leaks (e.g., clearing intervals).",
      tip: "Interviewers frequently ask: 'How do you clean up a setInterval in React?' Answer: return () => clearInterval(id) from useEffect."
    },
    {
      id: 15,
      tag: "React Architecture",
      difficulty: "Core Concept",
      question: "What is the Virtual DOM and how does React Reconciliation work?",
      answer: "The Virtual DOM is an in-memory lightweight representation of the real browser DOM kept in JavaScript memory.\n\nHow Reconciliation works:\n1. When component state or props change, React creates a new Virtual DOM tree.\n2. React compares the new Virtual DOM tree with the previous Virtual DOM tree using a fast 'diffing algorithm'.\n3. React calculates the minimum number of changes needed.\n4. Only the specific updated elements are batched and applied to the real browser DOM.\n\nThis makes React much faster than manually mutating the expensive real browser DOM.",
      tip: "Explain that manipulating the real DOM is slow because it causes browser recalculations of layout and repainting."
    },
    {
      id: 16,
      tag: "Networking & APIs",
      difficulty: "Fresher Essential",
      question: "What is a REST API and what are the standard HTTP methods?",
      answer: "A REST (Representational State Transfer) API is an architectural style for web services that allows communication between client (browser/app) and server using HTTP requests over standard URLs.\n\nStandard HTTP Methods:\n• GET: Retrieve/fetch data from the server (e.g., get user list).\n• POST: Submit/create new data on the server (e.g., submit registration form).\n• PUT: Replace/update an entire existing resource.\n• PATCH: Partially update a specific field of an existing resource.\n• DELETE: Remove an existing resource from the server.",
      tip: "Clarify that GET requests should be idempotent and never change data on the server."
    },
    {
      id: 17,
      tag: "Networking & APIs",
      difficulty: "Core Concept",
      question: "How do you fetch data from a REST API in React using fetch() or Axios?",
      answer: "In React, API calls are typically triggered inside the useEffect hook so they execute after the component mounts.\n\nExample with fetch():\nuseEffect(() => {\n  fetch('https://api.example.com/jobs')\n    .then(res => res.json())\n    .then(data => setJobs(data))\n    .catch(err => console.error(err));\n}, []);\n\nBest Practices:\n• Store loading state (isLoading: boolean) and error state (error: string | null).\n• Use async/await for cleaner readability.\n• Always handle errors gracefully with try/catch to display friendly messages to students.",
      tip: "Always mention handling loading and error states—interviewers look for production-ready thinking."
    },
    {
      id: 18,
      tag: "Client Storage",
      difficulty: "Fresher Essential",
      question: "What is the difference between localStorage, sessionStorage, and Cookies?",
      answer: "All three store data in the client's browser, but with key differences:\n\n• localStorage:\n  - Capacity: ~5MB to 10MB.\n  - Expiration: Never expires until explicitly cleared by user or script.\n  - Scope: Accessible across all tabs/windows from the same origin.\n\n• sessionStorage:\n  - Capacity: ~5MB.\n  - Expiration: Cleared immediately when the browser tab/session is closed.\n  - Scope: Accessible only within the specific tab where it was created.\n\n• Cookies:\n  - Capacity: Very small (~4KB).\n  - Expiration: Manually set expiration date/time.\n  - Server Transfer: Sent automatically to the server with every HTTP request (used for authentication tokens and sessions).",
      tip: "Highlight that cookies are sent to the server with every HTTP request, whereas localStorage data stays strictly in the browser."
    },
    {
      id: 19,
      tag: "Responsive Design",
      difficulty: "Fresher Essential",
      question: "What is Responsive Web Design and how do CSS Media Queries work?",
      answer: "Responsive Web Design ensures that websites look and function smoothly across all screen sizes and devices (desktops, laptops, tablets, and mobile phones).\n\nKey techniques:\n• Flexible layouts using CSS Flexbox and Grid.\n• Relative units like %, rem, vh, and vw instead of fixed pixels.\n• Viewport meta tag in HTML (<meta name='viewport' content='width=device-width, initial-scale=1.0'>).\n\nMedia Queries:\nCSS rules that apply styles only when certain conditions (like viewport width) match:\n@media (max-width: 768px) {\n  .navbar { flex-direction: column; }\n}",
      tip: "Mention the 'Mobile-First' approach: writing default styles for mobile phones, and using 'min-width' queries for larger screens."
    },
    {
      id: 20,
      tag: "Web Security",
      difficulty: "Core Concept",
      question: "What is CORS (Cross-Origin Resource Sharing) and why does a CORS error occur?",
      answer: "CORS is a browser security mechanism that restricts a web page on one domain/origin (e.g., http://localhost:3000) from requesting resources from a different domain/origin (e.g., https://api.mycompany.com:5000).\n\nAn origin consists of Protocol + Domain + Port. If any of these differ, it is considered cross-origin.\n\nWhy errors occur:\nIf the backend server does not explicitly send the HTTP header 'Access-Control-Allow-Origin: *' (or the specific client domain), the browser blocks the response for security reasons.\n\nFix:\nConfigure CORS headers on the backend server (e.g., using cors middleware in Express.js).",
      tip: "Remind the interviewer that CORS is enforced by the BROWSER, not by the server or Postman."
    },
    {
      id: 21,
      tag: "Backend Fundamentals",
      difficulty: "Core Concept",
      question: "What is Node.js, and why is it popular for web development?",
      answer: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 engine that allows developers to run JavaScript on the server side (outside the browser).\n\nWhy it is popular:\n• Full Stack JavaScript: Developers use the same language (JavaScript) on both frontend and backend.\n• Non-blocking I/O: Uses an asynchronous, event-driven architecture that handles high concurrency with low overhead.\n• NPM (Node Package Manager): The largest software registry in the world with millions of open-source packages.\n• Fast Execution: Compiles JavaScript directly into machine code via V8.",
      tip: "Clarify that Node.js is a RUNTIME environment, not a programming language or framework."
    },
    {
      id: 22,
      tag: "Backend Fundamentals",
      difficulty: "Core Concept",
      question: "What is Express.js and what is middleware in Express?",
      answer: "Express.js is a minimal and flexible web application framework for Node.js that provides robust features for building web and mobile applications and RESTful APIs.\n\nMiddleware in Express:\nMiddleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle (next).\n\nCommon uses:\n• Parsing request bodies (express.json())\n• Authentication & authorization checks\n• Logging requests (morgan)\n• Serving static files\n• Error handling",
      tip: "Explain that if a middleware function does not end the request-response cycle, it MUST call next() to pass control to the next function."
    },
    {
      id: 23,
      tag: "Web Performance",
      difficulty: "Core Concept",
      question: "What are some practical techniques to optimize web application performance?",
      answer: "Common frontend optimization techniques:\n• Code Splitting & Lazy Loading: Load JavaScript bundles and React components only when needed using React.lazy() and Suspense.\n• Image Optimization: Compress images, use modern WebP format, and add loading='lazy'.\n• Minification & Bundling: Remove whitespace, comments, and unused code (Tree Shaking via Webpack/Vite).\n• Debouncing & Throttling: Limit the rate at which expensive functions execute (e.g., on search input or scroll events).\n• Browser Caching: Use HTTP caching headers for static assets.\n• Memorization in React: Use React.memo, useMemo, and useCallback to avoid redundant re-renders.",
      tip: "Debouncing on search inputs is a favorite interview scenario—mentioning it shows practical frontend experience."
    },
    {
      id: 24,
      tag: "Version Control",
      difficulty: "Fresher Essential",
      question: "What is the purpose of Git and GitHub in a web developer's daily workflow?",
      answer: "• Git is a distributed Version Control System (VCS) installed locally on a computer to track code changes, revert to previous versions, and manage feature branches.\n• GitHub is a cloud-based hosting platform for Git repositories that enables collaboration, code reviews, pull requests, issue tracking, and CI/CD pipelines.\n\nDaily Developer Workflow:\n1. Pull latest code: git pull origin main\n2. Create a new branch: git checkout -b feature/login\n3. Write code and stage changes: git add .\n4. Commit with clear message: git commit -m 'Add user login validation'\n5. Push to remote: git push origin feature/login\n6. Open a Pull Request (PR) on GitHub for team review and merge.",
      tip: "Be ready to list the core 5 git commands: clone, branch, add, commit, and push."
    },
    {
      id: 25,
      tag: "Single Page Apps",
      difficulty: "Core Concept",
      question: "What is a Single Page Application (SPA), and how does React Router work?",
      answer: "A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates content as the user interacts with the app, without refreshing the entire browser page.\n\nTraditional Multi-Page App vs SPA:\n• Traditional: Every link click triggers a new HTTP request to the server, reloading the whole page.\n• SPA: The initial bundle loads once. Clicking links intercepts URL changes via JavaScript, dynamically rendering the needed component instantly.\n\nReact Router:\nA standard routing library for React that uses the browser's HTML5 History API to synchronize the URL with the React component tree without page reloads, providing instant navigation.",
      tip: "Point out that SPAs give users a smooth, desktop-app-like experience without flickering page reloads."
    }
  ],

  "software-development": [
    {
      id: 1,
      tag: "OOP Fundamentals",
      difficulty: "Fresher Essential",
      question: "What is Object-Oriented Programming (OOP) and why is it widely used?",
      answer: "Object-Oriented Programming (OOP) is a programming paradigm organized around 'objects'—which combine data (attributes/fields) and behavior (functions/methods)—rather than just functions and logic.\n\nWhy it is widely used:\n• Modularity: Programs are structured into clean, independent classes.\n• Reusability: Code can be written once and reused through inheritance.\n• Maintainability & Scalability: Changes to one class rarely break unrelated parts.\n• Real-world Modeling: Objects represent real-world entities (e.g. Student, BankAccount, Order).",
      tip: "Always be prepared to name the 4 pillars immediately: Encapsulation, Abstraction, Inheritance, and Polymorphism."
    },
    {
      id: 2,
      tag: "OOP Fundamentals",
      difficulty: "Fresher Essential",
      question: "What are the four core pillars of OOP? Briefly explain each.",
      answer: "The four core pillars of OOP are:\n\n1. Encapsulation: Bundling data and methods into a single unit (class) and restricting direct access to internal fields using private access modifiers with public getters/setters.\n2. Abstraction: Hiding internal implementation complexities and exposing only essential features to the user (e.g., using abstract classes or interfaces).\n3. Inheritance: Mechanism where a child class acquires attributes and methods of an existing parent class, promoting code reusability.\n4. Polymorphism: Ability of an object or method to take on multiple forms (compile-time overloading or runtime overriding).",
      tip: "Have a real-world analogy ready for each pillar (e.g. driving a car for abstraction; capsule pill for encapsulation)."
    },
    {
      id: 3,
      tag: "OOP Fundamentals",
      difficulty: "Core Concept",
      question: "What is Encapsulation and how is it implemented in code?",
      answer: "Encapsulation is the technique of wrapping data (variables) and code acting on the data (methods) together as a single unit, while restricting direct outside access to data fields.\n\nHow it is implemented:\n• Declare class variables as 'private'.\n• Provide public 'getter' methods to read values.\n• Provide public 'setter' methods to validate and update values.\n\nBenefits:\n• Data protection: Prevents unauthorized modification of sensitive variables.\n• Validation: Setters can ensure values are valid (e.g. age cannot be negative).\n• Flexibility: Class implementation can change without breaking code that uses it.",
      tip: "Explain that encapsulation is also known as 'data hiding'."
    },
    {
      id: 4,
      tag: "OOP Fundamentals",
      difficulty: "Core Concept",
      question: "What is Abstraction, and how does it differ from Encapsulation?",
      answer: "• Abstraction focuses on 'WHAT' an object does rather than 'HOW' it does it. It hides internal background details and shows only the relevant interface (e.g., an ATM machine lets you withdraw money without showing its internal database queries).\n\n• Encapsulation focuses on 'HOW' to pack and protect data. It hides data within a class capsule to restrict unauthorized access.\n\nKey comparison:\n- Abstraction is implemented using Abstract Classes and Interfaces.\n- Encapsulation is implemented using Access Specifiers (private, protected, public) and Getters/Setters.",
      tip: "Memory trick: Abstraction = Hiding complexity; Encapsulation = Hiding internal data."
    },
    {
      id: 5,
      tag: "OOP Fundamentals",
      difficulty: "Core Concept",
      question: "What is Inheritance and what types of inheritance exist?",
      answer: "Inheritance is the mechanism by which one class (subclass / derived class) inherits properties and behaviors from another class (superclass / base class).\n\nTypes of Inheritance:\n1. Single Inheritance: Class B inherits from Class A.\n2. Multilevel Inheritance: Class C inherits from Class B, which inherits from Class A.\n3. Hierarchical Inheritance: Class B and Class C both inherit from Class A.\n4. Multiple Inheritance: One class inherits from multiple parent classes (supported in C++ and Python; in Java it is achieved via Interfaces to avoid the 'Diamond Problem').\n5. Hybrid Inheritance: Combination of two or more types.",
      tip: "In Java interviews, always mention why Java doesn't support multiple inheritance with classes (to avoid ambiguity in the Diamond Problem)."
    },
    {
      id: 6,
      tag: "OOP Fundamentals",
      difficulty: "Core Concept",
      question: "What is Polymorphism? Explain Compile-time vs Run-time polymorphism.",
      answer: "Polymorphism means 'many forms'. It allows methods to perform different actions based on the object calling them.\n\n1. Compile-Time Polymorphism (Static Binding / Method Overloading):\n• Multiple methods in the SAME class share the same name but have DIFFERENT parameters (different number or types of arguments).\n• Resolved during program compilation.\n\n2. Run-Time Polymorphism (Dynamic Binding / Method Overriding):\n• A subclass provides a specific implementation of a method that is already defined in its parent class with the EXACT same name, return type, and parameters.\n• Resolved at runtime using dynamic method dispatch.",
      tip: "A classic example: Overloading = add(int, int) and add(double, double); Overriding = Animal.makeSound() overridden by Dog.makeSound()."
    },
    {
      id: 7,
      tag: "Data Structures",
      difficulty: "Fresher Essential",
      question: "What is the difference between an Array and a Linked List?",
      answer: "• Array:\n  - Contiguous memory allocation (elements stored side-by-side in memory).\n  - Fixed size (size declared at initialization).\n  - Fast random access by index: O(1) time.\n  - Insertion and deletion are slow: O(n) because elements must be shifted.\n\n• Linked List:\n  - Non-contiguous memory allocation (nodes linked together by pointers/references).\n  - Dynamic size (grows or shrinks easily during runtime).\n  - Sequential access only: O(n) time to reach the k-th element.\n  - Insertion and deletion at known node are fast: O(1) (no shifting required).",
      tip: "Mention that arrays have better cache locality due to contiguous memory, which often makes them faster in real CPUs for small datasets."
    },
    {
      id: 8,
      tag: "Data Structures",
      difficulty: "Fresher Essential",
      question: "What is a Stack data structure and what is LIFO? Give real-world examples.",
      answer: "A Stack is a linear data structure that follows the LIFO (Last In, First Out) principle: the last element added to the stack is the first element to be removed.\n\nPrimary Operations:\n• push(): Adds an element to the top of the stack (O(1)).\n• pop(): Removes and returns the top element (O(1)).\n• peek() / top(): Returns the top element without removing it (O(1)).\n• isEmpty(): Checks if the stack is empty.\n\nReal-World / Programming Examples:\n• Undo / Redo functionality in text editors.\n• Browser history 'Back' button.\n• Call Stack in programming language execution (function call tracking).\n• Balanced parenthesis checking in compilers.",
      tip: "Stack overflow occurs when you push to a full stack (e.g. infinite recursion), while stack underflow happens when you pop from an empty stack."
    },
    {
      id: 9,
      tag: "Data Structures",
      difficulty: "Fresher Essential",
      question: "What is a Queue data structure and what is FIFO? Give real-world examples.",
      answer: "A Queue is a linear data structure that follows the FIFO (First In, First Out) principle: the first element inserted is the first element to be removed.\n\nPrimary Operations:\n• enqueue(): Inserts an element at the rear / back of the queue (O(1)).\n• dequeue(): Removes an element from the front of the queue (O(1)).\n• front() / peek(): Returns the front element without removing it.\n\nReal-World / Programming Examples:\n• Line of people waiting at a movie ticket counter.\n• Printer spooler (print jobs are processed in the order received).\n• CPU task scheduling and message queues (RabbitMQ, Kafka).\n• Breadth-First Search (BFS) graph traversal.",
      tip: "Contrast Queue (FIFO) directly with Stack (LIFO) in one clean sentence."
    },
    {
      id: 10,
      tag: "Algorithms",
      difficulty: "Fresher Essential",
      question: "What is the difference between Linear Search and Binary Search?",
      answer: "• Linear Search:\n  - Checks each element sequentially from start to end until a match is found.\n  - Works on BOTH sorted and unsorted data.\n  - Time Complexity: Best O(1), Worst O(n).\n\n• Binary Search:\n  - Uses the Divide and Conquer approach: repeatedly divides the search interval in half by comparing the target with the middle element.\n  - MANDATORY PREREQUISITE: The array MUST be sorted.\n  - Time Complexity: Best O(1), Worst O(log n).\n\nFor 1,000,000 elements, linear search takes up to 1,000,000 comparisons, while binary search takes only ~20 comparisons.",
      tip: "Never forget to emphasize: Binary search requires the data to be SORTED. Saying this first proves you understand the algorithm."
    },
    {
      id: 11,
      tag: "Algorithms & Complexity",
      difficulty: "Core Concept",
      question: "What is Time Complexity and Big O notation?",
      answer: "Time Complexity measures how the running time of an algorithm grows as the input size (n) increases, independent of hardware or programming language.\n\nBig O notation describes the upper bound (worst-case performance) of an algorithm.\n\nCommon Big O Complexities from fastest to slowest:\n• O(1) - Constant: Accessing an array element by index.\n• O(log n) - Logarithmic: Binary search.\n• O(n) - Linear: Iterating through an array.\n• O(n log n) - Linearithmic: Merge sort, Quick sort.\n• O(n²) - Quadratic: Nested loops (Bubble sort, Selection sort).\n• O(2ⁿ) - Exponential: Recursive Fibonacci without memoization.",
      tip: "Explain that Big O focuses on trends for large 'n', so constants and lower-order terms are dropped (e.g. 3n + 5 becomes O(n))."
    },
    {
      id: 12,
      tag: "Algorithms",
      difficulty: "Core Concept",
      question: "What is Recursion in programming, and why is a base condition necessary?",
      answer: "Recursion is a programming technique where a function calls itself directly or indirectly to break a complex problem down into smaller, simpler sub-problems of the same type.\n\nA recursive function must have two parts:\n1. Base Condition (Termination Condition): The condition where recursion stops and returns a direct answer without making further calls.\n2. Recursive Step: The function calling itself with modified arguments moving closer to the base case.\n\nWhy Base Condition is necessary:\nWithout a valid base condition, the function calls itself infinitely, exhausting call stack memory and resulting in a 'StackOverflowError' crash.",
      tip: "Classic example: Factorial of n is n * factorial(n - 1), with base condition if (n <= 1) return 1."
    },
    {
      id: 13,
      tag: "Memory & Programming",
      difficulty: "Core Concept",
      question: "What is the difference between Pass-by-Value and Pass-by-Reference?",
      answer: "• Pass-by-Value:\n  - A copy of the actual variable's value is passed to the function parameter.\n  - Modifications made to the parameter inside the function do NOT affect the original variable in the caller.\n  - Used for primitive data types (numbers, booleans).\n\n• Pass-by-Reference:\n  - A reference (memory address) to the original variable is passed to the function.\n  - Modifications made to the parameter inside the function directly alter the original variable.\n\nNote for Java and Python: Both languages pass object references by value (you pass a copy of the pointer/reference).",
      tip: "In Java/Python interviews, clarify: 'Java is strictly Pass-by-Value, but for objects, the value passed is the reference address'."
    },
    {
      id: 14,
      tag: "Error Handling",
      difficulty: "Fresher Essential",
      question: "What is an Exception and how does try-catch-finally block work?",
      answer: "An Exception is an abnormal event or error condition that occurs during program execution and disrupts the normal flow of instructions (e.g., dividing by zero, file not found, null pointer).\n\nStructure of Exception Handling:\n• try block: Encloses code that might throw an exception.\n• catch block: Catches and handles the specific exception without terminating the program.\n• finally block: ALWAYS executes regardless of whether an exception occurred or was caught. Commonly used to release resources (closing database connections, file streams).\n• throw / throws: 'throw' explicitly throws an exception; 'throws' declares exceptions in method signatures.",
      tip: "Point out that finally executes even if there is a 'return' statement inside the try block."
    },
    {
      id: 15,
      tag: "Programming Fundamentals",
      difficulty: "Fresher Essential",
      question: "What is the difference between a Compiler and an Interpreter?",
      answer: "• Compiler:\n  - Translates the ENTIRE source code into machine code / bytecode at once before program execution.\n  - Generates an executable file (e.g. .exe or .class).\n  - Execution is fast once compiled.\n  - Shows all syntax errors together after scanning the whole program.\n  - Examples: C, C++, Rust.\n\n• Interpreter:\n  - Translates and executes source code line-by-line in real time.\n  - Does not produce a separate compiled machine code file.\n  - Execution is generally slower than compiled code.\n  - Stops execution immediately at the first error encountered.\n  - Examples: Python, JavaScript, PHP.\n\n(Java uses both: javac compiles to bytecode, and the JVM interpreter/JIT executes it).",
      tip: "Mention Java as a hybrid: compiles source code to Bytecode (.class), which is then interpreted/JIT-compiled by the JVM."
    },
    {
      id: 16,
      tag: "Memory Management",
      difficulty: "Core Concept",
      question: "What is Garbage Collection in languages like Java or Python?",
      answer: "Garbage Collection (GC) is an automated memory management process that identifies and deletes objects in heap memory that are no longer referenced or reachable by any active part of the running program.\n\nBenefits:\n• Prevents memory leaks and memory exhaustion.\n• Eliminates the need for manual memory deallocation (unlike C/C++ where developers must use free() or delete).\n• Prevents dangling pointer bugs.\n\nHow it works:\nThe garbage collector periodically scans heap memory (using algorithms like Mark-and-Sweep or reference counting) and frees memory occupied by unreferenced objects.",
      tip: "Explain that programmers cannot force garbage collection, but can request it using System.gc() (which is merely a suggestion to the JVM)."
    },
    {
      id: 17,
      tag: "Software Engineering",
      difficulty: "Fresher Essential",
      question: "What is the Software Development Life Cycle (SDLC) and its key stages?",
      answer: "The Software Development Life Cycle (SDLC) is a structured framework that outlines the phases involved in building high-quality software from initial concept to retirement.\n\nKey Stages in Order:\n1. Requirements Gathering & Analysis: Understanding client needs and documenting business requirements.\n2. Design: Creating system architecture, database schemas, and UI wireframes.\n3. Implementation / Coding: Writing source code using programming languages.\n4. Testing: Verifying functionality, detecting bugs, and validating requirements.\n5. Deployment: Releasing the software to production servers or app stores.\n6. Maintenance: Monitoring performance, fixing bugs, and delivering updates.",
      tip: "Remember the acronym: R-D-I-T-D-M (Requirements, Design, Implementation, Testing, Deployment, Maintenance)."
    },
    {
      id: 18,
      tag: "Methodology",
      difficulty: "Core Concept",
      question: "What is the difference between Agile and Waterfall methodologies?",
      answer: "• Waterfall Model:\n  - Linear and sequential; each phase must complete before the next starts.\n  - Rigid; changes to requirements are very difficult and costly after development begins.\n  - Working software is delivered only at the very end of the cycle.\n  - Best for projects with clear, fixed, unchanging requirements.\n\n• Agile Methodology:\n  - Iterative and incremental; software is built in short cycles called Sprints (1–3 weeks).\n  - Highly flexible; easily accommodates changes in user requirements.\n  - Continuous feedback from clients and daily standup meetings (Scrum).\n  - Working features are released continuously.",
      tip: "Mention Scrum ceremonies: Sprint Planning, Daily Standup, Sprint Review, and Sprint Retrospective."
    },
    {
      id: 19,
      tag: "Testing & Quality",
      difficulty: "Core Concept",
      question: "What is Unit Testing and why should developers write unit tests?",
      answer: "Unit Testing is the practice of testing individual components or functions ('units') of code in isolation to verify that each part produces the expected output for given inputs.\n\nWhy developers write unit tests:\n• Catch bugs early: Detects logical errors before code moves to QA or production.\n• Safe refactoring: Lets developers improve or optimize code with confidence that existing behavior won't break.\n• Documentation: Tests serve as living documentation showing how functions are intended to work.\n• Popular frameworks: JUnit (Java), PyTest (Python), Jest (JavaScript).",
      tip: "Mention TDD (Test-Driven Development): writing the test FIRST, seeing it fail, and then writing code to pass it."
    },
    {
      id: 20,
      tag: "Version Control",
      difficulty: "Core Concept",
      question: "What is the difference between git pull and git fetch?",
      answer: "• git fetch:\n  - Downloads latest commits, files, and branches from the remote repository to your local Git directory.\n  - Does NOT merge changes into your current working branch.\n  - Safe to run at any time to see what teammates have pushed without risking conflicts.\n\n• git pull:\n  - Performs git fetch AND immediately merges the fetched changes into your current active local branch.\n  - Equivalent to: git fetch + git merge.\n  - Can result in merge conflicts if local and remote branches have diverging changes.",
      tip: "Explain that 'git fetch' lets you inspect incoming changes before deciding to merge them."
    },
    {
      id: 21,
      tag: "Version Control",
      difficulty: "Fresher Essential",
      question: "What is a Merge Conflict in Git and how do you resolve it?",
      answer: "A Merge Conflict occurs when two branches have modified the exact same line of code in a file, or when one branch deleted a file that another branch modified, and Git cannot automatically decide which change to keep.\n\nGit pauses the merge and marks the conflicting lines with markers:\n<<<<<<< HEAD\n(Your current branch code)\n=======\n(Incoming branch code)\n>>>>>>> feature-branch\n\nHow to resolve:\n1. Open the conflicting file in an editor (VS Code).\n2. Review both sets of changes and discuss with the teammate if needed.\n3. Edit the code to keep the desired version and delete the conflict markers.\n4. Stage the resolved file: git add <file>.\n5. Commit the merge: git commit -m 'Resolved merge conflict'.",
      tip: "Stay calm when answering—interviewers want to see that you view merge conflicts as routine collaboration, not an emergency."
    },
    {
      id: 22,
      tag: "Database Fundamentals",
      difficulty: "Core Concept",
      question: "What is the difference between SQL (Relational) and NoSQL (Non-Relational) databases?",
      answer: "• SQL Databases:\n  - Structured data with predefined tables, rows, and columns.\n  - Schema is strict and rigid.\n  - Support ACID transactions (Atomicity, Consistency, Isolation, Durability).\n  - Vertical scalability (scale up by adding more CPU/RAM).\n  - Examples: MySQL, PostgreSQL, Oracle.\n\n• NoSQL Databases:\n  - Unstructured or semi-structured data (documents, key-value pairs, graphs).\n  - Flexible, dynamic schema.\n  - Emphasize high performance and horizontal scalability (scale out across distributed servers).\n  - Examples: MongoDB (JSON documents), Redis (key-value), Cassandra.",
      tip: "Summarize: Choose SQL for complex relationships and financial data (ACID); choose NoSQL for big unstructured data and rapid horizontal scaling."
    },
    {
      id: 23,
      tag: "Best Practices",
      difficulty: "Fresher Essential",
      question: "What are Clean Code principles and why are naming conventions important?",
      answer: "Clean Code is code that is easy to read, simple to understand, and straightforward to maintain by any developer.\n\nKey Clean Code principles:\n• Meaningful names: Use clear, descriptive names for variables, classes, and functions (e.g., isUserLoggedIn instead of flag1).\n• Single Responsibility (SRP): A function should do ONE thing and do it well.\n• DRY (Don't Repeat Yourself): Avoid duplicating code; extract reusable functions.\n• Small functions: Keep methods short and focused (ideally under 20–30 lines).\n• Meaningful comments: Write self-explanatory code; use comments to explain 'WHY', not 'WHAT'.",
      tip: "Quote Martin Fowler: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'"
    },
    {
      id: 24,
      tag: "Debugging & Problem Solving",
      difficulty: "Fresher Essential",
      question: "How do you systematically approach debugging an unexpected code crash or error?",
      answer: "A structured 5-step debugging approach:\n1. Read the Error Message & Stack Trace: Identify the exact error type (NullPointerException, IndexError) and the specific file and line number.\n2. Reproduce the Bug: Replicate the exact steps and inputs that cause the crash.\n3. Isolate the Root Cause: Use breakpoints in a debugger (or targeted logging) to inspect variable values just before the crash.\n4. Implement a Focused Fix: Write a clean solution addressing the root cause rather than a quick hack.\n5. Test Extensively: Test with normal, edge-case, and boundary inputs, and ensure existing features still work.",
      tip: "Never guess randomly when debugging! Emphasizing reading the stack trace line numbers impresses technical interviewers."
    },
    {
      id: 25,
      tag: "Design Patterns",
      difficulty: "Core Concept",
      question: "What is the Singleton Design Pattern and where is it used?",
      answer: "The Singleton Pattern is a creational design pattern that ensures a class has only ONE instance throughout the entire application lifecycle, while providing a global access point to that instance.\n\nImplementation:\n• Make the class constructor 'private' to prevent direct instantiation with 'new'.\n• Create a private static instance of the class.\n• Provide a public static method (e.g. getInstance()) that returns the single instance.\n\nCommon Use Cases:\n• Database Connection Pools (sharing a single connection pool across requests).\n• Logger instances (writing logs to a single shared file).\n• Application Configuration / Settings managers.",
      tip: "Mention thread-safety: In multi-threaded environments, synchronization or lazy initialization is required to prevent multiple instances from being created."
    }
  ],

  "data-ai": [
    {
      id: 1,
      tag: "Fundamentals",
      difficulty: "Fresher Essential",
      question: "What is Data Science and what is the typical Data Science project workflow?",
      answer: "Data Science is an interdisciplinary field that extracts meaningful insights and actionable knowledge from raw data using statistical methods, algorithms, and computing tools.\n\nTypical Workflow:\n1. Problem Definition: Understand the business question or goal.\n2. Data Collection: Gather data from databases, APIs, CSV files, or web scraping.\n3. Data Cleaning & Preparation: Handle missing values, outliers, and duplicates.\n4. Exploratory Data Analysis (EDA): Discover patterns, correlations, and visualize trends.\n5. Model Building: Train Machine Learning models (classification, regression).\n6. Evaluation: Test accuracy, precision, recall, or error metrics.\n7. Deployment & Communication: Deploy models into production and present findings through dashboards.",
      tip: "Emphasize that 70-80% of a Data Scientist's time is spent on data cleaning and preparation."
    },
    {
      id: 2,
      tag: "AI / ML Overview",
      difficulty: "Fresher Essential",
      question: "What is the difference between AI, Machine Learning, and Deep Learning?",
      answer: "They are nested subfields:\n\n• Artificial Intelligence (AI): The broad concept of creating smart machines capable of performing tasks that typically require human intelligence (e.g., voice assistants, chess bots).\n\n• Machine Learning (ML): A subset of AI where systems learn from historical data to make predictions or decisions without being explicitly programmed (e.g., spam filters, house price predictors).\n\n• Deep Learning (DL): A subset of ML inspired by the structure of the human brain. Uses Multi-layer Artificial Neural Networks to learn from massive amounts of unstructured data (e.g., facial recognition, self-driving cars, ChatGPT).",
      tip: "Use the Russian doll analogy: AI is the largest doll, ML is inside AI, and DL is inside ML."
    },
    {
      id: 3,
      tag: "Python for Data",
      difficulty: "Fresher Essential",
      question: "Why is Python the dominant programming language for Data Science and AI?",
      answer: "Key reasons for Python's dominance:\n• Simple & Readable Syntax: Allows developers and researchers to focus on data algorithms rather than complex syntax.\n• Rich Ecosystem of Libraries:\n  - NumPy & Pandas (Data manipulation and analysis)\n  - Matplotlib & Seaborn (Data visualization)\n  - Scikit-learn (Machine Learning algorithms)\n  - TensorFlow & PyTorch (Deep Learning)\n• Strong Community Support: Thousands of tutorials, active forums, and open-source contributions.\n• Easy Integration: Interfaces smoothly with databases, C/C++ libraries, and cloud infrastructure.",
      tip: "Be ready to name the core four libraries: NumPy, Pandas, Matplotlib, and Scikit-learn."
    },
    {
      id: 4,
      tag: "Pandas",
      difficulty: "Fresher Essential",
      question: "What is Pandas in Python and what is the difference between a Series and a DataFrame?",
      answer: "Pandas is an open-source Python library providing high-performance, easy-to-use data structures and data analysis tools.\n\n• Series (1-Dimensional):\n  - A one-dimensional labeled array capable of holding any data type.\n  - Similar to a single column in an Excel sheet or a database table.\n  - Example: pd.Series([10, 20, 30], index=['a', 'b', 'c'])\n\n• DataFrame (2-Dimensional):\n  - A two-dimensional tabular data structure with labeled rows and columns.\n  - Equivalent to an entire Excel spreadsheet or SQL table.\n  - A DataFrame can be considered a collection of multiple Series sharing a common index.",
      tip: "Point out that extracting a single column from a DataFrame returns a Series."
    },
    {
      id: 5,
      tag: "NumPy",
      difficulty: "Core Concept",
      question: "What is NumPy and why is it preferred over standard Python lists for numerical operations?",
      answer: "NumPy (Numerical Python) is the foundational library for scientific computing in Python, providing support for multi-dimensional arrays and mathematical functions.\n\nWhy NumPy arrays are superior to Python lists:\n• Speed & Performance: Written in optimized C, making mathematical operations up to 50x faster than standard Python loops.\n• Memory Efficiency: NumPy arrays store elements of the same data type contiguously in memory, requiring significantly less RAM than lists of pointers.\n• Vectorized Operations: Mathematical operations apply element-wise without needing manual for-loops (e.g., arr * 2 multiplies every element).\n• Linear Algebra Support: Native matrix multiplication, dot products, and eigenvalues.",
      tip: "The keyword interviewers listen for is 'Vectorization'—performing operations on whole arrays without Python loops."
    },
    {
      id: 6,
      tag: "Data Cleaning",
      difficulty: "Fresher Essential",
      question: "What is Data Cleaning and how do you handle missing values in a dataset?",
      answer: "Data Cleaning is the process of detecting and correcting inaccurate, corrupted, duplicate, or missing entries in a dataset.\n\nHandling Missing Values (NaN / null) in Pandas:\n1. Deletion:\n   • df.dropna(): Drop rows with missing values (good if only a tiny fraction <2% of data is missing).\n   • df.drop(columns=['col']): Drop columns with too many missing values (>60%).\n\n2. Imputation (Filling):\n   • Numerical data: Replace with Mean (for normal distributions) or Median (robust against outliers) via df['col'].fillna(df['col'].median()).\n   • Categorical data: Replace with Mode (most frequent value) or a 'Missing' label.\n   • Time-series: Forward fill (ffill) or Backward fill (bfill).",
      tip: "Always emphasize choosing Median over Mean when data contains extreme outliers."
    },
    {
      id: 7,
      tag: "EDA",
      difficulty: "Core Concept",
      question: "What is Exploratory Data Analysis (EDA) and what methods are used?",
      answer: "EDA is the critical initial investigation of data to discover patterns, spot anomalies (outliers), test hypotheses, and check assumptions with summary statistics and graphical representations.\n\nKey Methods in EDA:\n• Summary Statistics: df.describe() (mean, std, min, max, quartiles), df.info(), df.shape.\n• Distribution Checking: Histograms and KDE plots to see data spread and skewness.\n• Outlier Detection: Box plots (identifying points beyond 1.5 * IQR).\n• Correlation Analysis: Correlation matrix (df.corr()) and heatmaps to see relationships between features.\n• Categorical Breakdown: Value counts (df['category'].value_counts()) and bar charts.",
      tip: "Mention that EDA helps decide which Machine Learning algorithm is suitable for the problem."
    },
    {
      id: 8,
      tag: "Machine Learning",
      difficulty: "Fresher Essential",
      question: "What is the difference between Supervised and Unsupervised Learning?",
      answer: "• Supervised Learning:\n  - The training dataset includes both input features (X) and target LABELS (y).\n  - The algorithm learns a mapping function from input to output.\n  - Types: Regression (continuous output) and Classification (discrete category).\n  - Examples: House price prediction, Spam email classification.\n\n• Unsupervised Learning:\n  - The training dataset contains ONLY input features (X) with NO target labels.\n  - The algorithm discovers hidden patterns, groupings, or structures on its own.\n  - Types: Clustering (K-Means) and Dimensionality Reduction (PCA).\n  - Examples: Customer segmentation, anomaly detection, recommendation systems.",
      tip: "Supervised = 'Data has answers/labels'; Unsupervised = 'Data has no answers/labels'."
    },
    {
      id: 9,
      tag: "Machine Learning",
      difficulty: "Fresher Essential",
      question: "What is the difference between Regression and Classification?",
      answer: "Both are types of Supervised Learning, but their target output variable differs:\n\n• Regression:\n  - Predicts a CONTINUOUS numerical value.\n  - The output can be any number on a continuous scale.\n  - Examples: Predicting salary, stock price, temperature, or house price.\n  - Common algorithms: Linear Regression, Decision Tree Regressor, Random Forest.\n\n• Classification:\n  - Predicts a DISCRETE categorical label / class.\n  - The output belongs to specific classes (Binary: Yes/No; Multiclass: Cat/Dog/Bird).\n  - Examples: Spam vs Not Spam, Disease detection (Positive/Negative).\n  - Common algorithms: Logistic Regression, Decision Trees, SVM, Naive Bayes.",
      tip: "Be careful: Even though 'Logistic Regression' has 'Regression' in its name, it is a CLASSIFICATION algorithm!"
    },
    {
      id: 10,
      tag: "Supervised Learning",
      difficulty: "Core Concept",
      question: "What is Linear Regression and what is the equation of the line?",
      answer: "Linear Regression is a fundamental supervised algorithm used to model the linear relationship between a dependent target variable (y) and one or more independent predictor variables (X).\n\nEquation of the Line:\ny = mx + c  (or y = β₀ + β₁X + ε)\n• y = Predicted target value\n• x = Input feature\n• m (β₁) = Slope (weight of the feature)\n• c (β₀) = Y-intercept\n• ε = Error term\n\nHow it learns:\nIt finds the line of best fit by minimizing the Mean Squared Error (MSE)—the sum of squared differences between actual values and predicted values—using Ordinary Least Squares (OLS) or Gradient Descent.",
      tip: "Mention that Linear Regression assumes a linear relationship and normally distributed residuals."
    },
    {
      id: 11,
      tag: "Supervised Learning",
      difficulty: "Core Concept",
      question: "What is Logistic Regression and what is the Sigmoid Function?",
      answer: "Logistic Regression is a supervised classification algorithm used to predict the probability of a binary categorical outcome (e.g., 0 or 1, Yes or No).\n\nHow it works:\nInstead of fitting a straight line (which could output values below 0 or above 1), it passes linear combinations through the Sigmoid (Logistic) Function.\n\nSigmoid Function:\nS(z) = 1 / (1 + e⁻ᶻ)\n• Maps any real number z into a probability value strictly between 0 and 1.\n• A decision threshold (typically 0.5) is applied: if predicted probability >= 0.5, classify as Class 1; otherwise, Class 0.",
      tip: "Draw the 'S-shaped' curve mentally: the Sigmoid function squashes all values between 0 and 1."
    },
    {
      id: 12,
      tag: "Model Evaluation",
      difficulty: "Core Concept",
      question: "What is Overfitting and Underfitting, and how can they be prevented?",
      answer: "• Overfitting (High Variance):\n  - The model learns the training data TOO well, including noise and random fluctuations.\n  - Performance: Very high accuracy on training data, but poor accuracy on unseen test data.\n  - Remedies: Get more training data, simplify model, use Cross-Validation, apply Regularization (L1/L2), prune decision trees.\n\n• Underfitting (High Bias):\n  - The model is too simple to capture the underlying pattern in the data.\n  - Performance: Poor accuracy on BOTH training and test data.\n  - Remedies: Use a more complex model, add more relevant features, reduce regularization.",
      tip: "A great summary: Underfitting is under-learning; Overfitting is memorizing by heart."
    },
    {
      id: 13,
      tag: "Model Evaluation",
      difficulty: "Fresher Essential",
      question: "What is a Confusion Matrix, and what are Precision and Recall?",
      answer: "A Confusion Matrix is a performance evaluation table for classification models with 4 outcomes:\n• TP (True Positive): Correctly predicted positive.\n• TN (True Negative): Correctly predicted negative.\n• FP (False Positive - Type I Error): Incorrectly predicted positive.\n• FN (False Negative - Type II Error): Incorrectly predicted negative.\n\nKey Metrics:\n• Precision = TP / (TP + FP) -> Out of all predicted positives, how many were actually positive? (Important for spam detection).\n• Recall (Sensitivity) = TP / (TP + FN) -> Out of all actual positives, how many did we catch? (Vital for disease diagnosis).\n• F1-Score: Harmonic mean of Precision and Recall.",
      tip: "In medical diagnosis, Recall is most critical because missing a sick patient (False Negative) is dangerous."
    },
    {
      id: 14,
      tag: "Model Training",
      difficulty: "Fresher Essential",
      question: "What is Train/Test Split and why do we split data into training and testing sets?",
      answer: "Train/Test Split is the practice of dividing a dataset into two subsets (commonly 80% Training and 20% Testing) before building a machine learning model.\n\nWhy it is essential:\n• Unbiased Evaluation: Testing a model on data it was trained on would be like giving students the exact exam questions beforehand. It only proves memorization.\n• Simulating Real World: Evaluates how well the model generalizes to new, unseen data.\n• Catching Overfitting: Detects if the model is memorizing noise rather than learning genuine patterns.\n\nImplementation:\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
      tip: "Always explain why 'random_state' is set: to ensure reproducible results across runs."
    },
    {
      id: 15,
      tag: "Statistics Basics",
      difficulty: "Fresher Essential",
      question: "What is the difference between Mean, Median, and Mode, and when is Median preferred?",
      answer: "All three are measures of central tendency in statistics:\n• Mean: The arithmetic average (sum of all values divided by total count).\n• Median: The middle value when data is sorted in ascending order. (If even number of elements, average of the two middle values).\n• Mode: The most frequently occurring value in the dataset.\n\nWhen Median is preferred over Mean:\nWhen data contains extreme outliers or is heavily skewed (e.g. income or house prices).\nExample: Salaries: [30k, 35k, 40k, 45k, 1,000,000k]. The Mean is distorted by the billionaire, but the Median (40k) accurately represents a typical salary.",
      tip: "Salary data is the ultimate example for explaining why median is better than mean when outliers exist."
    },
    {
      id: 16,
      tag: "Statistics Basics",
      difficulty: "Core Concept",
      question: "What is Correlation and how does it differ from Causation?",
      answer: "• Correlation: A statistical measure (Pearson's r ranging from -1 to +1) that describes the degree to which two variables move together.\n  - +1: Perfect positive correlation (as X increases, Y increases).\n  - -1: Perfect negative correlation (as X increases, Y decreases).\n  - 0: No linear relationship.\n\n• Causation: Indicates that an event or change in variable A DIRECTLY CAUSES the change in variable B.\n\nGolden Rule:\n'Correlation does NOT imply Causation.'\nExample: Ice cream sales and drowning rates both increase in summer. They correlate strongly, but eating ice cream does not cause drowning. The lurking third variable is warm weather.",
      tip: "Use the classic ice cream vs. drowning example to prove you understand lurking/confounding variables."
    },
    {
      id: 17,
      tag: "Feature Engineering",
      difficulty: "Core Concept",
      question: "What is Feature Scaling (Normalization vs Standardization) and why is it needed?",
      answer: "Feature Scaling is the process of putting numerical features onto a similar scale so algorithms do not get biased toward features with larger numeric ranges (e.g., Age 20-60 vs Salary 20,000-150,000).\n\n1. Normalization (Min-Max Scaling):\n• Rescales values into a fixed range [0, 1].\n• Formula: X_norm = (X - X_min) / (X_max - X_min)\n• Useful for algorithms that do not assume normal distribution (e.g., KNN, Neural Networks).\n\n2. Standardization (Z-Score Normalization):\n• Rescales data so the mean is 0 and standard deviation is 1.\n• Formula: Z = (X - μ) / σ\n• Less affected by outliers.",
      tip: "Distance-based algorithms like KNN, SVM, and K-Means MUST have feature scaling, whereas Tree-based models (Random Forest) do not require it."
    },
    {
      id: 18,
      tag: "Machine Learning",
      difficulty: "Core Concept",
      question: "What is a Decision Tree and how does it decide how to split data?",
      answer: "A Decision Tree is a supervised machine learning algorithm that models decisions in an upside-down tree structure of nodes and branches.\n\nComponents:\n• Root Node: The starting top-level decision.\n• Decision Nodes: Internal nodes testing specific feature thresholds.\n• Leaf Nodes: Terminal nodes representing the final class prediction or numerical value.\n\nHow it decides splits:\nIt chooses the feature and threshold that yields the purest subsets using splitting criteria:\n• Gini Impurity (used in CART): Measures the likelihood of misclassification (0 = pure).\n• Information Gain / Entropy (used in ID3): Measures reduction in randomness after a split.",
      tip: "Mention that Decision Trees are prone to overfitting, which is why Random Forests (an ensemble of trees) are commonly preferred."
    },
    {
      id: 19,
      tag: "Unsupervised Learning",
      difficulty: "Core Concept",
      question: "What is K-Means Clustering and how does the algorithm work?",
      answer: "K-Means is an unsupervised clustering algorithm that partitions n data points into K distinct, non-overlapping clusters based on feature similarity.\n\nStep-by-step working:\n1. Choose the number of clusters 'K'.\n2. Randomly initialize K centroids in feature space.\n3. Assignment step: Assign each data point to its closest centroid (using Euclidean distance).\n4. Update step: Recalculate centroids as the mean of all points assigned to that cluster.\n5. Repeat steps 3 and 4 until centroids stop moving (convergence).\n\nChoosing K: The 'Elbow Method' plots inertia against K to identify the optimal point.",
      tip: "Explain the Elbow Method: looking for the point where the reduction in inertia levels off."
    },
    {
      id: 20,
      tag: "Data Visualization",
      difficulty: "Fresher Essential",
      question: "Which data visualization chart should you use for different types of data?",
      answer: "Choosing the right visualization:\n• Histogram / KDE Plot: To see the distribution and frequency of a single continuous numerical variable.\n• Box Plot: To detect outliers and see quartiles (25%, median, 75%).\n• Scatter Plot: To visualize the relationship/correlation between two continuous variables.\n• Bar Chart: To compare values across distinct categorical categories.\n• Line Chart: To show trends over time (time-series data).\n• Heatmap: To visualize correlation matrices or 2D matrix densities.\n\nTools: Matplotlib (custom low-level plotting), Seaborn (beautiful statistical plots), Plotly (interactive charts).",
      tip: "Never use pie charts for more than 4-5 categories—bar charts are almost always superior for readability."
    },
    {
      id: 21,
      tag: "Deep Learning Basics",
      difficulty: "Core Concept",
      question: "What is an Artificial Neural Network (ANN) and what are its core layers?",
      answer: "An Artificial Neural Network (ANN) is a computing model inspired by biological neural networks in human brains, designed to recognize complex nonlinear patterns.\n\nCore Layers:\n1. Input Layer: Receives raw input features (e.g. pixels, tabular columns).\n2. Hidden Layers: Intermediate layers where neurons perform weighted sums (z = W · X + b) and apply non-linear Activation Functions (ReLU, Sigmoid, Tanh) to learn intricate representations.\n3. Output Layer: Produces the final prediction (e.g. probability via Softmax for multiclass classification).\n\nLearning occurs through Forward Propagation (calculating predictions), computing Loss, and Backpropagation (updating weights via Gradient Descent).",
      tip: "Remember the 3 steps: Forward propagation -> Loss calculation -> Backpropagation."
    },
    {
      id: 22,
      tag: "NLP Basics",
      difficulty: "Core Concept",
      question: "What is Natural Language Processing (NLP) and what are common preprocessing steps?",
      answer: "Natural Language Processing (NLP) is a branch of AI that enables computers to understand, interpret, and generate human language text and speech.\n\nCommon Text Preprocessing Steps:\n1. Tokenization: Splitting sentences into individual words/tokens.\n2. Lowercasing: Converting all text to lowercase for uniformity.\n3. Stop Word Removal: Removing common words with little semantic value ('the', 'is', 'in').\n4. Punctuation & Special Character Removal: Cleaning raw text.\n5. Stemming / Lemmatization: Reducing words to their root base form (e.g., 'running' -> 'run').\n6. Vectorization: Converting text to numbers using Bag of Words, TF-IDF, or Word Embeddings.",
      tip: "Highlight that computers cannot read words directly—vectorization (converting words to numbers) is mandatory."
    },
    {
      id: 23,
      tag: "Database & SQL for AI",
      difficulty: "Fresher Essential",
      question: "Why is SQL an indispensable skill for Data Analysts and Data Scientists?",
      answer: "Most company data is stored in relational databases (PostgreSQL, MySQL, Snowflake, BigQuery), not pristine CSV files.\n\nWhy SQL is indispensable:\n• Direct Data Extraction: Querying exactly the needed subset of millions of rows directly at the source.\n• Data Aggregation: Using GROUP BY, SUM, COUNT, and AVG to compute KPIs quickly.\n• Joining Disparate Tables: Combining customer tables with transactions and products via JOINs.\n• High Performance: Database engines process filtering and grouping much faster than loading terabytes into local Python RAM.\n• Pipeline Integration: SQL feeds cleaned data directly into Python/R analysis pipelines.",
      tip: "State clearly: 'In industry, data starts in databases, so SQL is the bridge before Python modeling begins.'"
    },
    {
      id: 24,
      tag: "Data Types",
      difficulty: "Fresher Essential",
      question: "What is the difference between Structured, Semi-Structured, and Unstructured Data?",
      answer: "• Structured Data:\n  - Highly organized in fixed rows and columns with a strict schema.\n  - Stored in relational databases (RDBMS) and Excel sheets.\n  - Easily queried using SQL.\n  - Examples: Customer names, dates, financial balances.\n\n• Semi-Structured Data:\n  - Does not fit in strict tables, but contains internal tags or markers to separate elements.\n  - Examples: JSON files, XML, NoSQL documents.\n\n• Unstructured Data:\n  - Has no predefined conceptual structure or schema.\n  - Accounts for ~80% of real-world data.\n  - Requires Deep Learning/NLP/Computer Vision to extract meaning.\n  - Examples: Video files, audio recordings, images, PDF documents, social media comments.",
      tip: "Mention that unstructured data represents over 80% of all data generated worldwide today."
    },
    {
      id: 25,
      tag: "AI Ethics & Deployment",
      difficulty: "Core Concept",
      question: "What is Data Leakage in Machine Learning and how does it happen?",
      answer: "Data Leakage occurs when information from outside the training dataset (specifically from the target variable or test set) is inadvertently used to train the model.\n\nWhy it is dangerous:\nThe model achieves unrealistically high accuracy during training and testing, but fails catastrophically when deployed in production on real data.\n\nCommon Causes:\n• Performing feature scaling (MinMaxScaler) or imputation on the ENTIRE dataset BEFORE splitting into train and test sets.\n• Including features that would not be available at prediction time in real life (e.g. including 'appointment completed date' to predict if someone will show up).\n• Duplicate rows shared across train and test sets.",
      tip: "Golden rule to prevent leakage: Split your data into Train and Test sets BEFORE doing any scaling, normalization, or imputation!"
    }
  ],

  "cloud-devops": [
    {
      id: 1,
      tag: "Cloud Fundamentals",
      difficulty: "Fresher Essential",
      question: "What is Cloud Computing and what are its primary benefits?",
      answer: "Cloud Computing is the on-demand delivery of computing services—including servers, storage, databases, networking, and software—over the internet ('the cloud') with pay-as-you-go pricing.\n\nPrimary Benefits:\n• Cost Savings: Eliminates massive capital expenditures (CapEx) for buying physical hardware; pay only for what you use (OpEx).\n• Scalability & Elasticity: Scale server resources up or down automatically based on user traffic.\n• High Availability & Reliability: Redundant data centers worldwide prevent downtime.\n• Global Reach: Deploy applications near global customers in minutes across worldwide cloud regions.\n• Speed & Agility: Spin up virtual machines and databases in seconds with a few clicks.",
      tip: "Highlight shifting from CapEx (buying physical machines) to OpEx (operating expenses as a utility bill)."
    },
    {
      id: 2,
      tag: "Cloud Models",
      difficulty: "Fresher Essential",
      question: "What are the three main Cloud Service Models: IaaS, PaaS, and SaaS?",
      answer: "1. IaaS (Infrastructure as a Service):\n• Provides raw computing infrastructure (virtual machines, storage, networks).\n• You manage: OS, runtime, middleware, data, and applications.\n• Cloud provider manages: Physical hardware, virtualization, data center.\n• Examples: AWS EC2, Google Compute Engine, Azure VMs.\n\n2. PaaS (Platform as a Service):\n• Provides a managed platform for developing, testing, and deploying apps without worrying about underlying servers or OS patches.\n• You manage: Application code and data only.\n• Examples: Heroku, AWS Elastic Beanstalk, Google App Engine.\n\n3. SaaS (Software as a Service):\n• Fully finished software delivered directly over the web to end users.\n• You manage: Using the software; provider manages everything.\n• Examples: Gmail, Google Drive, Microsoft 365, Dropbox.",
      tip: "Use the classic 'Pizza as a Service' analogy: IaaS is buying ingredients and cooking at home; SaaS is dining at a restaurant."
    },
    {
      id: 3,
      tag: "Cloud Deployment",
      difficulty: "Fresher Essential",
      question: "What is the difference between Public, Private, and Hybrid Cloud?",
      answer: "• Public Cloud:\n  - Computing resources owned and operated by a third-party cloud provider (AWS, Azure, GCP).\n  - Shared infrastructure (multi-tenant) delivered over the public internet.\n  - Highly scalable, cost-effective.\n\n• Private Cloud:\n  - Cloud infrastructure dedicated exclusively to a single organization.\n  - Can be hosted on-premise or by a third party.\n  - Maximizes security and compliance (banks, government agencies).\n\n• Hybrid Cloud:\n  - Combines public and private clouds, allowing data and apps to be shared between them.\n  - Enables sensitive data to stay on-premise while leveraging public cloud elasticity for burst traffic.",
      tip: "Banks typically use Hybrid Cloud: customer account records in private cloud, public customer portal on public cloud."
    },
    {
      id: 4,
      tag: "DevOps Basics",
      difficulty: "Fresher Essential",
      question: "What is DevOps and what core problem does it solve?",
      answer: "DevOps (Development + Operations) is a set of practices, cultural philosophies, and tools that unites software development (Dev) and IT operations (Ops) teams to deliver high-quality software continuously and reliably.\n\nThe Core Problem it Solves:\nTraditionally, Dev wrote code and 'threw it over the wall' to Ops to deploy. Dev wanted rapid changes, while Ops wanted stability. When things crashed in production, teams blamed each other ('it worked on my machine').\n\nDevOps breaks this silo by automating testing, integration, and deployment, making both teams jointly responsible for the entire application lifecycle.",
      tip: "Emphasize that DevOps is a cultural mindset and methodology, not just a set of software tools."
    },
    {
      id: 5,
      tag: "CI/CD",
      difficulty: "Core Concept",
      question: "What is CI/CD (Continuous Integration and Continuous Deployment)?",
      answer: "CI/CD is the backbone of modern DevOps automation:\n\n• Continuous Integration (CI):\n  - Developers frequently merge code changes into a shared central repository (GitHub).\n  - Automated builds and automated unit tests run immediately on every push/pull request.\n  - Catches bugs and integration issues within minutes instead of days.\n\n• Continuous Delivery (CD):\n  - Automatically packages and deploys successfully tested code to a staging/testing environment.\n  - Code is always in a deployable state, requiring human approval for production.\n\n• Continuous Deployment (CD):\n  - Fully automated end-to-end: Every change that passes all automated tests is automatically deployed straight to live production with zero manual intervention.",
      tip: "Distinguish Continuous Delivery (manual button click to production) from Continuous Deployment (automatic push to production)."
    },
    {
      id: 6,
      tag: "Docker & Containers",
      difficulty: "Fresher Essential",
      question: "What is Docker and why is containerization widely used?",
      answer: "Docker is an open-source platform that packages an application and all its dependencies, libraries, configuration files, and runtime into a lightweight, standalone, executable container.\n\nWhy Containerization is used:\n• Eliminates 'It works on my machine' bug: Ensures the application runs identically on a developer's laptop, staging server, and production cloud.\n• Lightweight & Fast: Containers share the host OS kernel and start up in seconds, unlike heavy virtual machines that take minutes.\n• Resource Efficiency: Multiple containers run smoothly on the same host with minimal overhead.\n• Isolation: Applications and dependencies are completely isolated from one another.",
      tip: "Memorize the slogan: 'Build once, run anywhere'."
    },
    {
      id: 7,
      tag: "Containers vs VMs",
      difficulty: "Core Concept",
      question: "What is the difference between a Docker Container and a Virtual Machine (VM)?",
      answer: "• Virtual Machine (VM):\n  - Hardware-level virtualization managed by a Hypervisor (VMware, VirtualBox).\n  - Each VM includes a FULL guest operating system (several GBs).\n  - Heavyweight, high RAM/CPU overhead.\n  - Slow startup time (minutes).\n\n• Docker Container:\n  - OS-level virtualization managed by the Docker Engine.\n  - Containers SHARE the host system's OS kernel.\n  - No guest OS needed; image size is lightweight (MBs).\n  - Boots up in seconds.\n  - High density: You can run dozens of containers on a single host.",
      tip: "Key distinction: VMs virtualize the hardware; Docker virtualizes the operating system kernel."
    },
    {
      id: 8,
      tag: "Docker Fundamentals",
      difficulty: "Fresher Essential",
      question: "What is the difference between a Dockerfile, a Docker Image, and a Docker Container?",
      answer: "These represent the three stages of Docker:\n\n1. Dockerfile (The Recipe):\n• A plain text configuration file containing instructions (FROM, WORKDIR, COPY, RUN, CMD) to assemble a Docker image.\n\n2. Docker Image (The Cake Template):\n• A read-only, immutable template with layers created by building a Dockerfile (docker build).\n• Contains the code, runtime, libraries, and tools.\n\n3. Docker Container (The Living Cake):\n• A runnable, live instance of a Docker image (docker run).\n• Has a writable layer on top of the image where the running app executes.",
      tip: "Think of it as OOP: Dockerfile = source code, Image = Class, Container = Object instance."
    },
    {
      id: 9,
      tag: "AWS Core Services",
      difficulty: "Fresher Essential",
      question: "What is Amazon EC2 (Elastic Compute Cloud) and how does it work?",
      answer: "Amazon EC2 provides scalable, resizable virtual servers (called 'EC2 Instances') in the AWS cloud.\n\nKey Concepts:\n• Instance Types: Tailored combinations of CPU, memory, storage, and networking (e.g. t2.micro for testing, compute-optimized c5, memory-optimized r5).\n• AMI (Amazon Machine Image): Pre-configured template containing the OS (Ubuntu, Amazon Linux, Windows) and software.\n• Security Groups: Virtual firewalls controlling incoming and outgoing traffic (ports 22 for SSH, 80 for HTTP, 443 for HTTPS).\n• Key Pairs: Public/private key files used to securely SSH into EC2 instances.",
      tip: "Mention that t2.micro is in the AWS Free Tier, which students use for hands-on practice."
    },
    {
      id: 10,
      tag: "AWS Core Services",
      difficulty: "Fresher Essential",
      question: "What is Amazon S3 (Simple Storage Service) and what is a Bucket?",
      answer: "Amazon S3 is an object storage service offering industry-leading scalability, data availability, security, and performance.\n\nKey Concepts:\n• Objects: Files and optional metadata stored in S3 (e.g., images, videos, backups).\n• Buckets: Containers for objects. Bucket names must be globally unique across all AWS accounts worldwide.\n• Durability: Designed for 99.999999999% (11 9's) of data durability.\n• Storage Classes: S3 Standard (frequently accessed), S3 Infrequent Access, and S3 Glacier (low-cost long-term archiving).\n• Static Website Hosting: S3 can host static React/HTML websites without any server.",
      tip: "Mention 11 9's of durability—every AWS interviewer expects to hear this statistic."
    },
    {
      id: 11,
      tag: "Cloud Security",
      difficulty: "Core Concept",
      question: "What is AWS IAM (Identity and Access Management) and the Principle of Least Privilege?",
      answer: "AWS IAM is a service that helps administrators securely control access to AWS resources (authentication and authorization).\n\nCore IAM Components:\n• Users: Individual people (e.g., developers, admins).\n• Groups: Collections of users sharing identical permissions.\n• Roles: Sets of permissions assigned temporarily to entities or services (e.g., allowing an EC2 instance to read an S3 bucket without hardcoded credentials).\n• Policies: JSON documents explicitly granting or denying permissions.\n\nPrinciple of Least Privilege:\nA fundamental security practice where users and applications are granted ONLY the bare minimum permissions necessary to perform their specific job, and nothing more.",
      tip: "Never use the AWS Root Account for daily tasks! Creating individual IAM users with MFA is standard best practice."
    },
    {
      id: 12,
      tag: "Orchestration",
      difficulty: "Core Concept",
      question: "What is Kubernetes (K8s) and why is container orchestration needed?",
      answer: "Kubernetes is an open-source container orchestration platform designed to automate the deployment, scaling, management, and networking of containerized applications.\n\nWhy Orchestration is needed:\nRunning 2-3 Docker containers is easy. Managing hundreds of containers across multiple servers requires orchestration:\n• Auto-scaling: Adds more container replicas when traffic surges.\n• Self-healing: Automatically restarts failed containers or reschedules them on healthy nodes.\n• Load Balancing: Distributes network traffic evenly across container pods.\n• Zero-downtime rolling updates: Deploys new application versions without dropping user connections.",
      tip: "Key K8s components to mention: Pod (smallest deployable unit), Node (worker machine), and Cluster."
    },
    {
      id: 13,
      tag: "CI/CD Tools",
      difficulty: "Fresher Essential",
      question: "What is GitHub Actions and how does a YAML workflow file work?",
      answer: "GitHub Actions is a CI/CD platform built directly into GitHub that automates software workflows right from your repository.\n\nWorkflow Components:\n• Workflow: Automated procedure stored in a .github/workflows/*.yml file.\n• Events: Triggers that start the workflow (e.g., on: push, on: pull_request).\n• Jobs: Sets of steps that execute on a virtual runner (e.g. ubuntu-latest).\n• Steps: Individual tasks running shell commands or reusable actions (e.g., actions/checkout@v3, actions/setup-node@v3).\n\nExample Use Case: On every push to main, GitHub Actions installs npm dependencies, runs unit tests, builds the production bundle, and deploys to AWS S3.",
      tip: "Explain that .github/workflows/*.yml in the repo root is where GitHub Actions files reside."
    },
    {
      id: 14,
      tag: "Infrastructure as Code",
      difficulty: "Core Concept",
      question: "What is Infrastructure as Code (IaC) and what is Terraform?",
      answer: "Infrastructure as Code (IaC) is the practice of provisioning and managing cloud infrastructure using declarative code configuration files rather than manually clicking buttons in a cloud web console.\n\nBenefits:\n• Version Control: Infrastructure definitions are tracked in Git.\n• Reusability: Recreate entire environments (Dev, Test, Prod) in minutes.\n• Consistency: Eliminates human configuration error ('configuration drift').\n\nTerraform:\nAn industry-standard open-source IaC tool developed by HashiCorp. It uses HashiCorp Configuration Language (HCL) and supports multiple clouds (AWS, Azure, GCP) through providers.",
      tip: "Key Terraform commands: terraform init, terraform plan, terraform apply, terraform destroy."
    },
    {
      id: 15,
      tag: "Linux Essentials",
      difficulty: "Fresher Essential",
      question: "What are essential Linux commands every Cloud & DevOps fresher must know?",
      answer: "Most cloud servers run Linux. Essential commands:\n• Navigation & Files: ls -la (list files), cd (change directory), pwd (print working directory), mkdir (make folder), rm -rf (remove).\n• File Inspection: cat, head, tail -f (follow live logs in real time), nano/vim (edit files).\n• Permissions: chmod (change permissions e.g. 755), chown (change file owner).\n• Process Management: top / htop (system monitor), ps aux (view running processes), kill -9 <PID> (terminate process).\n• Networking: curl, wget (fetch URLs), ping (connectivity), netstat / ss -tuln (check listening ports), ifconfig / ip a.\n• Disk & System: df -h (disk space), free -m (RAM memory usage).",
      tip: "Highlight 'tail -f /var/log/syslog'—it is the first command DevOps engineers run to diagnose server errors."
    },
    {
      id: 16,
      tag: "Remote Access",
      difficulty: "Fresher Essential",
      question: "What is SSH (Secure Shell) and how do you connect to a cloud Linux server?",
      answer: "SSH (Secure Shell) is a cryptographic network protocol used to securely access and manage remote servers over an unsecured network via port 22.\n\nHow it works:\nUses public-key cryptography with a key pair:\n• Public Key: Stored on the remote server (~/.ssh/authorized_keys).\n• Private Key: Kept securely on your local computer (e.g. my-key.pem).\n\nConnection command:\nssh -i my-key.pem ubuntu@54.210.xx.xx\n\nPermissions requirement: The private key must have restricted permissions (chmod 400 my-key.pem) or SSH will reject the connection for security.",
      tip: "Always mention 'chmod 400' on the .pem key file—an extremely common beginner troubleshooting interview question!"
    },
    {
      id: 17,
      tag: "Scalability",
      difficulty: "Core Concept",
      question: "What is an Application Load Balancer and what is Auto Scaling?",
      answer: "• Load Balancer (ALB):\n  - Distributes incoming user web traffic across multiple backend servers/containers.\n  - Prevents any single server from becoming overwhelmed.\n  - Automatically routes traffic away from unhealthy servers (via health checks).\n\n• Auto Scaling:\n  - Dynamically adjusts the number of active server instances up or down based on current traffic and resource demands (CPU utilization, request count).\n  - Scale Out: Automatically launches new servers during peak hours.\n  - Scale In: Terminates excess servers during quiet hours to save cloud costs.\n\nTogether, they ensure high availability, fault tolerance, and cost optimization.",
      tip: "Load Balancer routes traffic; Auto Scaling adjusts capacity. They work hand-in-hand."
    },
    {
      id: 18,
      tag: "Serverless",
      difficulty: "Core Concept",
      question: "What is Serverless Computing and what is AWS Lambda?",
      answer: "Serverless Computing is a cloud execution model where the cloud provider dynamically manages the provisioning, scaling, and maintenance of the server infrastructure.\n\nKey Attributes:\n• No server management: Developers write code; the cloud handles hardware and OS.\n• Automatic scaling: Scales from zero requests to thousands of concurrent executions.\n• Pay-per-use: You are billed strictly for execution time (in milliseconds); zero cost when idle.\n\nAWS Lambda:\nAWS's event-driven serverless compute service that runs code functions in response to events (e.g. S3 file upload, API Gateway HTTP request, database change).",
      tip: "Explain that 'Serverless' does NOT mean there are no servers; it means developers don't have to manage or pay for idle servers."
    },
    {
      id: 19,
      tag: "Monitoring & Logs",
      difficulty: "Core Concept",
      question: "Why is Cloud Monitoring important and what is AWS CloudWatch?",
      answer: "Monitoring provides real-time visibility into the health, performance, and resource usage of cloud infrastructure and applications.\n\nAWS CloudWatch:\nA monitoring and observability service that collects metrics, monitors log files, and sets automated alarms.\n\nKey Capabilities:\n• Metrics: Tracks CPU utilization, disk I/O, network traffic, and latency.\n• CloudWatch Logs: Centralizes application and system logs for easy searching.\n• Alarms: Triggers automated actions (e.g. sends an email notification via SNS or triggers Auto Scaling if CPU > 80% for 5 minutes).",
      tip: "Remember: 'If you cannot monitor it, you cannot manage it.' Centralized logging is vital for distributed systems."
    },
    {
      id: 20,
      tag: "Networking & Web",
      difficulty: "Fresher Essential",
      question: "What is a Reverse Proxy and how does NGINX work in web application hosting?",
      answer: "A Reverse Proxy is a server that sits in front of backend web servers and forwards client requests to those servers, returning the response to the client.\n\nNGINX as a Reverse Proxy:\n• Security: Hides the IP address and topology of backend application servers.\n• SSL/TLS Termination: Decrypts HTTPS requests before passing them to internal HTTP servers.\n• Load Balancing: Distributes incoming requests across multiple Node.js/Python instances.\n• Static Content Caching: Serves images, CSS, and HTML directly with blazing speed without hitting the backend application.",
      tip: "Contrast Forward Proxy (protects clients visiting internet) with Reverse Proxy (protects backend servers from public clients)."
    },
    {
      id: 21,
      tag: "Networking & DNS",
      difficulty: "Fresher Essential",
      question: "What is DNS (Domain Name System) and what is Amazon Route 53?",
      answer: "DNS is the internet's phonebook: it translates human-friendly domain names (e.g. careercraft.com) into machine-readable IP addresses (e.g. 54.210.45.12).\n\nAmazon Route 53:\nA highly available and scalable cloud Domain Name System (DNS) web service.\n\nKey Features:\n• Domain Registration: Purchase and manage custom domains.\n• Routing Policies: Simple routing, Latency-based routing (routes users to the fastest region), Failover routing (routes to backup server if primary crashes).\n• Health Checks: Constantly monitors endpoints and automatically reroutes traffic away from failed servers.",
      tip: "Why is it named Route 53? Because DNS operates over UDP/TCP Port 53!"
    },
    {
      id: 22,
      tag: "CI/CD Strategies",
      difficulty: "Core Concept",
      question: "What is Blue/Green Deployment and how does it prevent downtime?",
      answer: "Blue/Green Deployment is a deployment strategy that minimizes downtime and risk by running two identical production environments:\n• Blue: The current live production environment serving 100% of user traffic.\n• Green: The idle environment where the new software version is deployed and tested.\n\nHow it works:\n1. Deploy the new code version to the Green environment.\n2. Run automated integration and smoke tests on Green without affecting real users.\n3. Switch the router/load balancer traffic from Blue to Green.\n4. Green is now live!\n\nRollback: If a major bug appears on Green, instantly switch traffic back to Blue with zero delay.",
      tip: "Explain that instant rollback is the biggest benefit of Blue/Green deployment."
    },
    {
      id: 23,
      tag: "DevOps Practices",
      difficulty: "Core Concept",
      question: "How do you rollback a failed production deployment in a CI/CD pipeline?",
      answer: "Key rollback strategies in DevOps:\n1. Automated Pipeline Rollback: If post-deployment smoke tests or health checks fail, the CI/CD pipeline script automatically runs a rollback step (e.g. git revert or re-deploying the previous successful Docker image tag).\n2. Container Image Rollback: Repoint Kubernetes or ECS services to the previous stable Docker image tag (e.g., from :v1.2 back to :v1.1).\n3. Blue/Green Switch: Flip traffic back to the Blue environment on the load balancer.\n4. Database Rollback: Run migration down scripts (flyway/knex/prisma) if database schema changes were made.",
      tip: "Never deploy directly using ':latest' tag in Docker. Always use immutable version tags (e.g. git commit hash or v1.0.4) for safe rollbacks."
    },
    {
      id: 24,
      tag: "Configuration",
      difficulty: "Fresher Essential",
      question: "How should environment variables and secret credentials (API keys) be managed in cloud apps?",
      answer: "Best practices for secrets and configuration:\n• NEVER commit secrets or credentials into Git repositories (add .env to .gitignore).\n• Store secrets in dedicated cloud secret managers:\n  - AWS Secrets Manager / AWS Systems Manager Parameter Store\n  - HashiCorp Vault\n  - GitHub Repository Secrets for CI/CD\n• Inject secrets at runtime into containers via environment variables.\n• Rotate API keys and database passwords on a regular schedule.\n• Use IAM Roles instead of hardcoded access keys whenever possible.",
      tip: "Mention that committing AWS keys to a public GitHub repo will get them flagged and exploited by bots in seconds."
    },
    {
      id: 25,
      tag: "Site Reliability",
      difficulty: "Core Concept",
      question: "What is the difference between RTO (Recovery Time Objective) and RPO (Recovery Point Objective)?",
      answer: "Both are crucial metrics in Disaster Recovery and Business Continuity planning:\n\n• RTO (Recovery Time Objective):\n  - The maximum acceptable amount of TIME a system can be down after a disaster before service is restored.\n  - 'How quickly must we be back online?' (e.g., within 30 minutes).\n\n• RPO (Recovery Point Objective):\n  - The maximum acceptable amount of DATA LOSS measured in time between the disaster and the most recent backup.\n  - 'How much data can the business afford to lose?' (e.g., if backups occur every 4 hours, RPO is 4 hours of data).",
      tip: "Memory trick: RTO = Time to restore; RPO = Points/Period of data loss."
    }
  ],

  "cybersecurity": [
    {
      id: 1,
      tag: "Core Principles",
      difficulty: "Fresher Essential",
      question: "What is Cybersecurity and why is it crucial in today's digital world?",
      answer: "Cybersecurity is the practice of protecting computer systems, networks, devices, programs, and data from digital attacks, unauthorized access, theft, or damage.\n\nWhy it is crucial:\n• Financial Protection: Cyberattacks and ransomware cause billions in damages and extortion.\n• Data Privacy: Protects sensitive customer information, credit cards, and health records from breaches.\n• Business Continuity: Prevents system shutdowns that paralyze corporate or public operations.\n• Compliance & Legal: Avoids severe penalties under regulations like GDPR and HIPAA.",
      tip: "Start by defining the ultimate goal: preserving the confidentiality, integrity, and availability of digital assets."
    },
    {
      id: 2,
      tag: "Core Principles",
      difficulty: "Fresher Essential",
      question: "What is the CIA Triad in Cybersecurity? Explain each component.",
      answer: "The CIA Triad is the foundational model of information security:\n\n1. Confidentiality:\n• Ensuring sensitive information is accessed ONLY by authorized people and hidden from unauthorized parties.\n• Implemented with: Encryption, passwords, access control lists (ACL), multi-factor authentication (MFA).\n\n2. Integrity:\n• Ensuring data is accurate, complete, and untampered during storage and transmission.\n• Implemented with: Cryptographic hashing (SHA-256), checksums, digital signatures.\n\n3. Availability:\n• Ensuring systems, networks, and data are reliably accessible to authorized users when needed.\n• Implemented with: Redundancy, server backups, DDoS mitigation, failover clusters.",
      tip: "Remember that CIA in security stands for Confidentiality, Integrity, Availability—NOT the Central Intelligence Agency!"
    },
    {
      id: 3,
      tag: "Risk Concepts",
      difficulty: "Fresher Essential",
      question: "What is the difference between a Vulnerability, a Threat, and a Risk?",
      answer: "These three terms form the Risk Equation (Risk = Threat × Vulnerability):\n\n• Vulnerability: A weakness or flaw in software, hardware, or human procedures (e.g. an unpatched operating system, a weak password, or open port 21).\n\n• Threat: An external actor or event with the potential to exploit a vulnerability to cause harm (e.g. a hacker, malware, or phishing attacker).\n\n• Risk: The potential financial or operational loss when a threat successfully exploits a vulnerability (e.g. data breach resulting in $1M in fines).",
      tip: "A vulnerability is a weakness; a threat is the attacker looking for that weakness; risk is the outcome if they succeed."
    },
    {
      id: 4,
      tag: "Social Engineering",
      difficulty: "Fresher Essential",
      question: "What is Phishing and what are its common types?",
      answer: "Phishing is a social engineering attack where attackers impersonate reputable organizations or people (via email, SMS, or fake websites) to trick victims into revealing sensitive information (passwords, credit cards).\n\nCommon Types:\n• Spear Phishing: Highly targeted attacks tailored to a specific individual or organization.\n• Whaling: Attacks targeting high-profile corporate executives (CEOs, CFOs).\n• Smishing & Vishing: Phishing conducted via SMS text messages (Smishing) or phone calls (Vishing).\n• Clone Phishing: Replicating a legitimate previous email with malicious attachments or links.\n\nDefense: User awareness training, email filtering (SPF/DKIM), and enforcing Multi-Factor Authentication (MFA).",
      tip: "Highlight that human error is responsible for over 80% of security incidents, making phishing the #1 initial attack vector."
    },
    {
      id: 5,
      tag: "Malware",
      difficulty: "Fresher Essential",
      question: "What is Malware? Explain the differences between a Virus, a Worm, and a Trojan.",
      answer: "Malware (Malicious Software) is any software intentionally designed to cause damage to a computer, server, client, or network.\n\nKey Differences:\n• Virus:\n  - Malicious code that attaches itself to a legitimate host program or file.\n  - REQUIRES human action (like opening an infected .exe file) to replicate and spread.\n\n• Worm:\n  - Standalone software that replicates and spreads across networks automatically WITHOUT any human interaction by exploiting network vulnerabilities.\n\n• Trojan Horse:\n  - Disguises itself as legitimate, harmless software (e.g., a free game or utility).\n  - Once installed, it secretly opens a backdoor for attackers to steal data.",
      tip: "Worms spread automatically; Viruses require human execution; Trojans disguise as legitimate software."
    },
    {
      id: 6,
      tag: "Malware",
      difficulty: "Core Concept",
      question: "What is Ransomware and what preventive measures protect organizations against it?",
      answer: "Ransomware is a type of malware that encrypts a victim's files and documents, making them inaccessible, and demands a cryptocurrency ransom payment in exchange for the decryption key.\n\nKey Preventive Measures:\n1. Immutable Off-Site Backups: Maintain regular, air-gapped backups (3-2-1 backup rule) so systems can be restored without paying ransoms.\n2. Endpoint Detection and Response (EDR): Deploy anti-malware software with behavioral heuristics.\n3. Regular Patching: Patch known operating system and software vulnerabilities promptly.\n4. Disable Remote Desktop Protocol (RDP) on open public internet.\n5. Email Security Filters: Block suspicious attachments (.exe, .scr, macros).",
      tip: "Mention the 3-2-1 backup rule: 3 copies of data, on 2 different media types, with 1 copy stored offsite/air-gapped."
    },
    {
      id: 7,
      tag: "Web Security",
      difficulty: "Fresher Essential",
      question: "What is SQL Injection (SQLi) and how can developers prevent it?",
      answer: "SQL Injection is a web vulnerability where an attacker manipulates database queries by inserting malicious SQL code into input fields (e.g. login boxes or search inputs).\n\nExample Vulnerable Query:\nSELECT * FROM users WHERE username = 'admin' AND password = '' OR '1'='1';\nSince '1'='1' is always true, the attacker logs in without a valid password.\n\nPrevention Techniques:\n• Parameterized Queries / Prepared Statements: The database treats user inputs strictly as data, never as executable SQL instructions.\n• Stored Procedures with parameters.\n• Input Validation & Sanitization: Allow only expected alphanumeric characters.\n• Principle of Least Privilege: Database user accounts should not have administrative privileges.",
      tip: "The definitive answer to preventing SQL Injection is 'Parameterized Queries (Prepared Statements)'."
    },
    {
      id: 8,
      tag: "Web Security",
      difficulty: "Core Concept",
      question: "What is Cross-Site Scripting (XSS) and what are its main types?",
      answer: "Cross-Site Scripting (XSS) is a vulnerability that occurs when a web application includes unvalidated and unescaped user input into web pages, allowing attackers to execute malicious JavaScript scripts in victims' browsers.\n\nThree Main Types:\n1. Stored (Persistent) XSS: Malicious script is saved permanently in the database (e.g., in a comment field) and executes whenever any user views the page.\n2. Reflected XSS: Malicious script is reflected off a web server in an immediate HTTP response (e.g., inside search query parameters in a phishing link).\n3. DOM-based XSS: Vulnerability exists entirely on the client side in DOM manipulation scripts.\n\nPrevention: Context-aware HTML entity encoding, Content Security Policy (CSP), and input validation.",
      tip: "Explain that XSS targets the user's browser (stealing session cookies), whereas SQLi targets the backend database."
    },
    {
      id: 9,
      tag: "Network Security",
      difficulty: "Fresher Essential",
      question: "What is a Firewall and how does it protect a network?",
      answer: "A Firewall is a network security device that monitors and filters incoming and outgoing network traffic based on established security rules.\n\nHow it works:\nActs as a barrier between a trusted internal network and an untrusted external network (the internet).\n\nTypes of Firewalls:\n• Packet Filtering Firewall: Inspects packets at Network layer (IP address, port number, protocol). Very fast.\n• Stateful Inspection Firewall: Tracks active connections and allows replies only to established sessions.\n• Next-Generation Firewall (NGFW): Inspects application-layer data (Layer 7), detects malware, and provides deep packet inspection (DPI).",
      tip: "Contrast traditional packet filtering with modern Next-Gen Firewalls that inspect actual application payloads."
    },
    {
      id: 10,
      tag: "Cryptography",
      difficulty: "Fresher Essential",
      question: "What is the difference between Symmetric and Asymmetric Encryption?",
      answer: "• Symmetric Encryption:\n  - Uses the SAME secret key for both encryption and decryption.\n  - Very fast and computationally efficient.\n  - Challenge: Secure key distribution (how to share the secret key safely).\n  - Common algorithms: AES (Advanced Encryption Standard), DES.\n\n• Asymmetric Encryption (Public-Key Cryptography):\n  - Uses a MATHEMATICALLY LINKED KEY PAIR: a Public Key (shared with everyone) and a Private Key (kept strictly secret).\n  - Data encrypted with the Public Key can ONLY be decrypted with the corresponding Private Key.\n  - Slower, but solves the key distribution problem.\n  - Common algorithms: RSA, ECC, Diffie-Hellman.\n\nHybrid systems (like HTTPS) use Asymmetric encryption to securely exchange a symmetric key, then use Symmetric encryption for fast data transfer.",
      tip: "Point out that HTTPS uses both: Asymmetric for handshake key exchange, Symmetric for actual data transfer."
    },
    {
      id: 11,
      tag: "Cryptography",
      difficulty: "Core Concept",
      question: "What is Hashing and how does it differ from Encryption?",
      answer: "• Encryption:\n  - A TWO-WAY function: Plaintext is converted to Ciphertext and CAN be decrypted back to plaintext using the appropriate decryption key.\n  - Purpose: Confidentiality in data transmission and storage.\n\n• Hashing:\n  - A ONE-WAY mathematical function: Takes input data of any size and produces a unique, fixed-length string (hash digest).\n  - CANNOT be reversed or decrypted back into the original input.\n  - Deterministic: Same input always yields the exact same hash output.\n  - Purpose: Data integrity and secure password storage.\n  - Common algorithms: SHA-256, bcrypt, Argon2.",
      tip: "Never say 'decrypting a hash'! Emphasize that hashing is mathematically irreversible."
    },
    {
      id: 12,
      tag: "Authentication",
      difficulty: "Fresher Essential",
      question: "What is Multi-Factor Authentication (MFA) and what are the three auth factors?",
      answer: "Multi-Factor Authentication (MFA) is a security method that requires users to provide two or more distinct verification factors to gain access to an account.\n\nThe Three Authentication Factors:\n1. Something you KNOW: Passwords, PINs, security questions.\n2. Something you HAVE: Smartphone Authenticator app (TOTP), SMS code, hardware security key (YubiKey), smartcard.\n3. Something you ARE (Biometrics): Fingerprint, facial recognition, iris scan.\n\nWhy MFA is crucial:\nEven if a hacker steals or guesses a user's password, they cannot breach the account without the second factor (e.g. phone authenticator code).",
      tip: "Memorize the 3 factors: Something you KNOW, Something you HAVE, Something you ARE."
    },
    {
      id: 13,
      tag: "Network Attacks",
      difficulty: "Fresher Essential",
      question: "What is a DoS and DDoS attack, and how do they work?",
      answer: "• Denial of Service (DoS):\n  - An attack where a single malicious computer floods a target server with bogus traffic or requests to overwhelm resources (CPU, RAM, bandwidth) and make it unavailable to legitimate users.\n\n• Distributed Denial of Service (DDoS):\n  - Uses a vast network of distributed compromised computers (called a Botnet or Zombie network) infected with malware to flood the target simultaneously.\n  - Much harder to block because malicious traffic originates from thousands of different IP addresses worldwide.\n\nDefense: Cloudflare / AWS Shield, rate limiting, traffic scrubbing, and Anycast routing.",
      tip: "Explain that DoS originates from one machine, whereas DDoS comes from a coordinated botnet of thousands of machines."
    },
    {
      id: 14,
      tag: "Web & Protocol Security",
      difficulty: "Fresher Essential",
      question: "What is a Man-in-the-Middle (MITM) attack and how does HTTPS prevent it?",
      answer: "A Man-in-the-Middle (MITM) attack occurs when an attacker secretly intercepts and potentially alters communications between two parties who believe they are communicating directly with each other (e.g. on unsecured public coffee shop Wi-Fi).\n\nHow HTTPS (HTTP + SSL/TLS) prevents MITM:\n1. Encryption: Encrypts data in transit so eavesdroppers see only unreadable gibberish.\n2. Authentication: The server presents a digital SSL/TLS Certificate signed by a trusted Certificate Authority (CA) verifying its true identity.\n3. Integrity: Uses message authentication codes (HMAC) to detect if any data was altered in transit.",
      tip: "Mention that SSL is deprecated; modern HTTPS uses TLS (Transport Layer Security, typically TLS 1.2 or 1.3)."
    },
    {
      id: 15,
      tag: "SOC Operations",
      difficulty: "Core Concept",
      question: "What is a SOC (Security Operations Center) and what is the role of a Level-1 SOC Analyst?",
      answer: "A Security Operations Center (SOC) is a centralized team within an organization that continuously monitors, detects, analyzes, and responds to cybersecurity incidents.\n\nRole of a Tier 1 / Level-1 SOC Analyst (Fresher Role):\n• Alert Triage: Monitor SIEM dashboards 24/7 for security alerts.\n• Investigation: Verify if an alert is a False Positive or True Positive by reviewing logs, IP reputations, and user activity.\n• Ticket Creation: Document findings and create incident tickets.\n• Remediation / Escalation: Follow standard operating procedures (SOPs) to isolate infected hosts or escalate critical threats to Tier 2 analysts.",
      tip: "Level-1 SOC Analyst is the #1 entry-level job title in cybersecurity for college graduates."
    },
    {
      id: 16,
      tag: "SOC Tools",
      difficulty: "Core Concept",
      question: "What is SIEM (Security Information and Event Management) and why is it used?",
      answer: "SIEM is software that aggregates, correlates, and analyzes log and event data from across an entire organization's network devices, servers, firewalls, and applications into one centralized console.\n\nKey Functions:\n• Centralized Log Collection: Gathers logs from hundreds of systems.\n• Real-Time Correlation: Correlates events to detect complex attack patterns (e.g., 5 failed logins on a domain controller followed by an admin login at 3 AM triggers an alert).\n• Compliance Reporting: Generates audit reports for compliance regulations (PCI-DSS, ISO 27001).\n• Popular Tools: Splunk, IBM QRadar, Microsoft Sentinel, Elastic SIEM.",
      tip: "Name Splunk or Microsoft Sentinel as examples—interviewers expect freshers to recognize these industry tools."
    },
    {
      id: 17,
      tag: "Security Tools",
      difficulty: "Fresher Essential",
      question: "What is Wireshark and how do security analysts use it?",
      answer: "Wireshark is an open-source packet analyzer tool used for network troubleshooting, analysis, software development, and security auditing.\n\nHow analysts use it:\n• Captures live network traffic from an interface in real time (PCAP files).\n• Deep Packet Inspection: Examines packet headers and payloads across all OSI layers.\n• Identifying Attacks: Detects port scans, ARP spoofing, plaintext password transmissions, and malware beaconing.\n• Filtering: Uses powerful display filters (e.g. 'http.request.method == POST' or 'ip.addr == 192.168.1.1').",
      tip: "Mention that Wireshark captures packets via PCAP format and cannot decrypt properly encrypted TLS payload content without private keys."
    },
    {
      id: 18,
      tag: "Security Tools",
      difficulty: "Fresher Essential",
      question: "What is Nmap and what is port scanning used for?",
      answer: "Nmap (Network Mapper) is a free, open-source command-line tool used for network discovery and vulnerability scanning.\n\nWhat Port Scanning is used for:\n• Discover active hosts on a network (Host Discovery / Ping sweeps).\n• Identify open ports on target systems (e.g. port 80 HTTP, 22 SSH, 443 HTTPS).\n• Service & Version Detection: Identifies which software version is listening on each port (useful for spotting unpatched vulnerabilities).\n• OS Detection: Fingerprints the operating system running on target devices.\n\nCommon Command: nmap -sV -sC -T4 <target_ip>",
      tip: "Explain that ethical hackers use Nmap for defense (finding vulnerabilities before attackers do), but unauthorized port scanning of systems you don't own is illegal."
    },
    {
      id: 19,
      tag: "Hacker Types",
      difficulty: "Fresher Essential",
      question: "What is the difference between White Hat, Black Hat, and Grey Hat hackers?",
      answer: "• White Hat (Ethical Hackers):\n  - Authorized security professionals who have explicit written permission to test and hack systems.\n  - Goal: Discover vulnerabilities and report them to owners to strengthen defenses.\n\n• Black Hat (Criminal Hackers):\n  - Malicious actors who hack without permission for personal financial gain, espionage, or destruction.\n  - Violate laws.\n\n• Grey Hat:\n  - Hack into systems without permission, but without malicious intent (e.g., discovering a bug and asking for a bug bounty or publicizing it).\n  - Technically illegal since they lack permission, but not driven by destructive motives.",
      tip: "Emphasize that the clear legal line is 'Authorization and explicit written permission'."
    },
    {
      id: 20,
      tag: "Penetration Testing",
      difficulty: "Core Concept",
      question: "What is Penetration Testing and what are its 5 standard phases?",
      answer: "Penetration Testing (Ethical Hacking) is an authorized simulated cyberattack against a computer system to identify vulnerabilities before criminal hackers can exploit them.\n\n5 Standard Phases:\n1. Reconnaissance / Footprinting: Gathering intelligence about the target (IPs, domains, employee emails via OSINT).\n2. Scanning & Enumeration: Using tools (Nmap, Nessus) to discover open ports, active services, and vulnerabilities.\n3. Gaining Access (Exploitation): Exploiting discovered vulnerabilities using tools (Metasploit) or custom scripts.\n4. Maintaining Access: Establishing persistent backdoors or escalating privileges.\n5. Analysis & Reporting: Documenting all discovered flaws, risk levels, and remediation steps.",
      tip: "Highlight that the most important phase for the business is the final Reporting phase with actionable remediation advice."
    },
    {
      id: 21,
      tag: "Vulnerabilities",
      difficulty: "Fresher Essential",
      question: "What is a Zero-Day Vulnerability?",
      answer: "A Zero-Day Vulnerability is a software security flaw that is known to attackers (or security researchers) but has NOT yet been discovered or patched by the software vendor.\n\nWhy it is called 'Zero-Day':\nThe vendor has had 'zero days' to create and release a security patch, leaving systems defenseless against attacks exploiting that flaw.\n\nZero-Day Exploit: The malicious code specifically written to exploit a zero-day flaw.\n\nDefense: Defense-in-depth, web application firewalls (WAF), behavior-based endpoint detection, and network segmentation.",
      tip: "Explain that until a patch is released, zero-days are among the most dangerous and expensive exploits in the cybersecurity world."
    },
    {
      id: 22,
      tag: "Attacks & Defense",
      difficulty: "Fresher Essential",
      question: "What is a Brute Force Attack and how can systems defend against it?",
      answer: "A Brute Force Attack is a trial-and-error method where an automated program submits thousands of password combinations or dictionary words until the correct password is found.\n\nDefenses against Brute Force:\n• Account Lockout: Temporarily lock the account after 3-5 failed login attempts.\n• Rate Limiting: Restrict the number of requests allowed per IP address per minute.\n• Multi-Factor Authentication (MFA): Prevents access even if the password is brute-forced.\n• CAPTCHA: Requires human interaction to block automated bots.\n• Strong Password Policies: Require long passwords (12+ characters with symbols) that take centuries to brute-force.",
      tip: "Account lockout + Rate limiting + MFA is the standard triple-defense against brute force attacks."
    },
    {
      id: 23,
      tag: "Network Attacks",
      difficulty: "Core Concept",
      question: "What is ARP Spoofing (ARP Poisoning) and what is its goal?",
      answer: "ARP (Address Resolution Protocol) maps 32-bit IP addresses to 48-bit physical MAC addresses on a local area network (LAN).\n\nHow ARP Spoofing works:\nBecause ARP has no authentication, an attacker sends fake (spoofed) ARP messages across the LAN associating their MAC address with the IP address of the Default Gateway (router).\n\nGoal of the Attack:\nAll traffic intended for the router is routed to the attacker's machine first, allowing the attacker to perform Man-in-the-Middle (MITM) eavesdropping, packet sniffing, or session hijacking.\n\nPrevention: Dynamic ARP Inspection (DAI) on managed switches and static ARP tables.",
      tip: "Note that ARP attacks only work within the local broadcast domain (Local Area Network)."
    },
    {
      id: 24,
      tag: "Incident Response",
      difficulty: "Core Concept",
      question: "What are the 6 stages of the Incident Response Process (NIST / SANS)?",
      answer: "A structured methodology for handling a security breach:\n\n1. Preparation: Training team, creating security policies, and deploying monitoring tools.\n2. Identification (Detection): Detecting and confirming that a security incident has occurred.\n3. Containment: Limiting damage by isolating affected systems (disconnecting infected PCs from the network).\n4. Eradication: Removing malware, disabling compromised accounts, and closing vulnerabilities.\n5. Recovery: Restoring systems to clean operational state from verified backups and monitoring closely.\n6. Lessons Learned: Post-incident review to document what happened and improve defenses.",
      tip: "Memorize the 6 steps: P-I-C-E-R-L (Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned)."
    },
    {
      id: 25,
      tag: "Best Practices",
      difficulty: "Fresher Essential",
      question: "What is the Principle of Defense-in-Depth in cybersecurity architecture?",
      answer: "Defense-in-Depth (Layered Defense) is a security strategy that employs multiple layers of security controls throughout an IT infrastructure so that if one security layer fails, the next layer stops the attacker.\n\nExamples of Defense Layers:\n• Perimeter Layer: Firewalls, DDoS protection.\n• Network Layer: Network segmentation, VLANs, Intrusion Detection Systems (IDS).\n• Endpoint Layer: Anti-malware, EDR, OS patching.\n• Application Layer: Input validation, secure coding, WAF.\n• Data Layer: Encryption at rest and in transit, access control.\n• Human Layer: Employee security awareness training, strong password policies.",
      tip: "Use the castle analogy: moats, outer walls, guards, inner gates, and a treasure vault—never rely on a single lock!"
    }
  ],

  "database": [
    {
      id: 1,
      tag: "RDBMS Basics",
      difficulty: "Fresher Essential",
      question: "What is a Database and what is a Database Management System (DBMS)?",
      answer: "• Database: An organized, structured collection of related data stored electronically in a computer system so it can be easily accessed, managed, and updated.\n\n• DBMS (Database Management System):\n  - The software that serves as an interface between the database and end users or application programs.\n  - Manages data storage, query processing, concurrency, security, and backup.\n  - Examples: MySQL, PostgreSQL, Oracle, Microsoft SQL Server, SQLite.",
      tip: "Remember: The database is the data itself; the DBMS is the software software system that manages the data."
    },
    {
      id: 2,
      tag: "RDBMS Basics",
      difficulty: "Fresher Essential",
      question: "What is the difference between SQL and NoSQL databases?",
      answer: "• SQL Databases (Relational - RDBMS):\n  - Structured tabular format (tables, rows, and columns) with fixed schemas.\n  - Enforce relationships via foreign keys.\n  - Support ACID transactions.\n  - Vertically scalable.\n  - Best for banking, financial records, e-commerce orders.\n  - Examples: MySQL, PostgreSQL, Oracle.\n\n• NoSQL Databases (Non-Relational):\n  - Dynamic, schema-less data structures (JSON documents, key-value, column-family, graph).\n  - Follow BASE properties (Eventual Consistency).\n  - Horizontally scalable across distributed clusters.\n  - Best for real-time analytics, social media feeds, IoT sensor data.\n  - Examples: MongoDB, Redis, Cassandra.",
      tip: "Summarize: Choose SQL when relational data integrity is paramount; choose NoSQL for high-velocity unstructured data."
    },
    {
      id: 3,
      tag: "SQL Sub-languages",
      difficulty: "Fresher Essential",
      question: "What are the four main sub-languages of SQL (DDL, DML, DCL, TCL)?",
      answer: "1. DDL (Data Definition Language):\n• Defines and modifies database schema structure.\n• Commands: CREATE, ALTER, DROP, TRUNCATE, RENAME.\n\n2. DML (Data Manipulation Language):\n• Manages and manipulates data inside tables.\n• Commands: SELECT, INSERT, UPDATE, DELETE.\n\n3. DCL (Data Control Language):\n• Manages user permissions and access rights.\n• Commands: GRANT (give permissions), REVOKE (take back permissions).\n\n4. TCL (Transaction Control Language):\n• Manages transactions within the database.\n• Commands: COMMIT, ROLLBACK, SAVEPOINT.",
      tip: "Be ready to categorize standard commands like TRUNCATE (DDL) and DELETE (DML) quickly."
    },
    {
      id: 4,
      tag: "Keys & Integrity",
      difficulty: "Fresher Essential",
      question: "What is a Primary Key and how does it differ from a Unique Key?",
      answer: "Both enforce uniqueness, but with critical differences:\n\n• Primary Key:\n  - Uniquely identifies each record/row in a table.\n  - CANNOT accept NULL values (NOT NULL is mandatory).\n  - A table can have ONLY ONE Primary Key.\n  - Automatically creates a Clustered Index in most databases.\n\n• Unique Key:\n  - Ensures all values in a column are distinct.\n  - CAN accept NULL values (typically one NULL in SQL Server, multiple NULLs in MySQL/PostgreSQL).\n  - A table can have MULTIPLE Unique Keys.\n  - Creates a Non-Clustered Index.",
      tip: "Key distinction: Only ONE primary key per table, and it can NEVER be NULL."
    },
    {
      id: 5,
      tag: "Keys & Integrity",
      difficulty: "Fresher Essential",
      question: "What is a Foreign Key and why is it important?",
      answer: "A Foreign Key is a field (or collection of fields) in one table that references the Primary Key (or Unique Key) of another table.\n\nImportance:\n• Establishes relationships between tables (e.g. Orders table has a CustomerID referencing Customers table).\n• Enforces Referential Integrity: Prevents invalid data from being inserted (cannot add an order for a customer that does not exist).\n• Prevents orphan records: Deleting a customer can be set to CASCADE (delete their orders too) or RESTRICT (block deletion if orders exist).",
      tip: "Referential integrity is the core concept here—explain how foreign keys prevent orphan records."
    },
    {
      id: 6,
      tag: "SQL Commands",
      difficulty: "Fresher Essential",
      question: "What is the difference between DELETE, TRUNCATE, and DROP?",
      answer: "• DELETE:\n  - DML command.\n  - Removes specific rows based on a WHERE clause (or all rows if no WHERE).\n  - Slower because it logs row-by-row deletions.\n  - Can be ROLLED BACK if inside a transaction.\n  - Does NOT reset AUTO_INCREMENT.\n\n• TRUNCATE:\n  - DDL command.\n  - Removes ALL rows from a table by deallocating data pages.\n  - Very fast and uses minimal log space.\n  - Resets AUTO_INCREMENT counter.\n  - Keeps table structure intact.\n\n• DROP:\n  - DDL command.\n  - Completely deletes the table structure, data, constraints, and indexes.\n  - The table ceases to exist.",
      tip: "Memory trick: DELETE removes selected rows; TRUNCATE empties the whole table; DROP destroys the table entirely."
    },
    {
      id: 7,
      tag: "Normalization",
      difficulty: "Core Concept",
      question: "What is Database Normalization and why is it performed?",
      answer: "Database Normalization is the systematic process of organizing data in a relational database to reduce data redundancy and eliminate undesirable update, insertion, and deletion anomalies.\n\nWhy it is performed:\n• Eliminates duplicate data across tables, saving disk space.\n• Eliminates Insertion Anomaly (cannot add data without other unrelated data).\n• Eliminates Deletion Anomaly (deleting one record accidentally deletes unrelated information).\n• Eliminates Update Anomaly (updating an address requires modifying hundreds of records).\n• Ensures referential integrity and data consistency.",
      tip: "Name the three anomalies that normalization solves: Insertion, Deletion, and Update anomalies."
    },
    {
      id: 8,
      tag: "Normalization",
      difficulty: "Core Concept",
      question: "Explain 1NF, 2NF, and 3NF Normal Forms.",
      answer: "• 1NF (First Normal Form):\n  - Each column must contain atomic (indivisible) values (no arrays or comma-separated lists).\n  - No repeating groups or columns.\n  - Each row must be uniquely identifiable (Primary Key).\n\n• 2NF (Second Normal Form):\n  - Must already be in 1NF.\n  - Eliminate Partial Functional Dependencies: All non-key attributes must be fully functionally dependent on the entire Primary Key (relevant when composite keys exist).\n\n• 3NF (Third Normal Form):\n  - Must already be in 2NF.\n  - Eliminate Transitive Dependencies: Non-key attributes must depend directly on the primary key, and not on another non-key attribute.",
      tip: "Remember the famous oath: 'Every attribute must depend on the key (1NF), the whole key (2NF), and nothing but the key (3NF), so help me Codd!'"
    },
    {
      id: 9,
      tag: "SQL Queries",
      difficulty: "Fresher Essential",
      question: "What is the difference between WHERE and HAVING clauses in SQL?",
      answer: "• WHERE Clause:\n  - Filters individual rows BEFORE any grouping (GROUP BY) occurs.\n  - Cannot be used with aggregate functions (COUNT, SUM, AVG).\n  - Applies to single records.\n  - Example: SELECT * FROM Employees WHERE Salary > 50000;\n\n• HAVING Clause:\n  - Filters groups AFTER aggregation (GROUP BY) has taken place.\n  - Used specifically with aggregate functions.\n  - Applies to grouped summary records.\n  - Example: SELECT Department, AVG(Salary) FROM Employees GROUP BY Department HAVING AVG(Salary) > 60000;",
      tip: "Simple rule: WHERE filters rows; HAVING filters aggregated groups."
    },
    {
      id: 10,
      tag: "SQL Joins",
      difficulty: "Fresher Essential",
      question: "What are SQL Joins? Explain INNER, LEFT, RIGHT, and FULL Joins.",
      answer: "SQL Joins combine rows from two or more tables based on a related column between them.\n\n• INNER JOIN:\n  - Returns only rows where there is a matching value in BOTH tables.\n\n• LEFT JOIN (LEFT OUTER JOIN):\n  - Returns ALL rows from the left table, and matched rows from the right table. If no match, right-side columns return NULL.\n\n• RIGHT JOIN (RIGHT OUTER JOIN):\n  - Returns ALL rows from the right table, and matched rows from the left table. If no match, left-side columns return NULL.\n\n• FULL JOIN (FULL OUTER JOIN):\n  - Returns all records when there is a match in EITHER left or right table. Unmatched sides return NULL.",
      tip: "Draw Venn diagrams in your mind: INNER is the intersection; LEFT is all of circle A; FULL is both circles combined."
    },
    {
      id: 11,
      tag: "Indexing",
      difficulty: "Core Concept",
      question: "What is a Database Index and how does it speed up queries?",
      answer: "A Database Index is a data structure (most commonly a B-Tree or B+ Tree) that improves the speed of data retrieval operations on a database table at the cost of additional storage and slower writes.\n\nHow it works:\n• Without an Index: The database engine must scan every single row in the table from top to bottom (Full Table Scan - O(n)).\n• With an Index: It functions like the index at the back of a textbook. The database navigates the balanced B-Tree in O(log n) time to find the exact page/pointer where the row is located.",
      tip: "Use the book index analogy—it's intuitive and interviewers recognize it instantly."
    },
    {
      id: 12,
      tag: "Indexing",
      difficulty: "Core Concept",
      question: "What are the drawbacks of creating too many indexes on a table?",
      answer: "While indexes accelerate SELECT queries, having too many indexes causes severe drawbacks:\n1. Slower Write Operations (INSERT, UPDATE, DELETE): Every time a row is inserted, modified, or deleted, every index on that table must also be updated and rebalanced.\n2. Increased Storage / Disk Space: Indexes are stored on disk and consume significant RAM/disk capacity.\n3. Optimizer Overhead: The query optimizer takes longer evaluating which index to use.\n\nBest Practice: Index only columns frequently used in WHERE clauses, JOIN conditions, and ORDER BY.",
      tip: "State clearly: 'Indexes speed up reads (SELECT), but slow down writes (INSERT/UPDATE/DELETE)'."
    },
    {
      id: 13,
      tag: "Transactions",
      difficulty: "Fresher Essential",
      question: "What are the ACID properties in database transactions?",
      answer: "ACID guarantees that database transactions are processed reliably:\n\n• Atomicity (All or Nothing):\n  - The entire transaction either completes successfully or rolls back completely. If one step fails, all previous steps are undone (e.g. transferring money: debiting Account A and crediting Account B must both succeed).\n\n• Consistency:\n  - The database transitions only from one valid state to another, preserving all schema rules and constraints.\n\n• Isolation:\n  - Concurrent transactions execute independently without interfering with each other.\n\n• Durability:\n  - Once a transaction is committed, its changes are permanent in non-volatile memory, even in the event of a system crash or power outage.",
      tip: "The bank transfer example (debiting Account A and crediting Account B) perfectly explains Atomicity."
    },
    {
      id: 14,
      tag: "Transactions",
      difficulty: "Core Concept",
      question: "What do COMMIT, ROLLBACK, and SAVEPOINT commands do?",
      answer: "These are Transaction Control Language (TCL) commands:\n\n• COMMIT:\n  - Permanently saves all changes made during the current transaction to the database.\n  - After a commit, changes cannot be undone.\n\n• ROLLBACK:\n  - Undoes all modifications made during the current transaction since the last COMMIT, restoring the database to its previous stable state.\n\n• SAVEPOINT:\n  - Creates a temporary marker / checkpoint within a transaction.\n  - Allows selective rollback to a specific savepoint without undoing the entire transaction (e.g. ROLLBACK TO savepoint_name).",
      tip: "Savepoints are like game save checkpoints—you can respawn at the checkpoint without restarting the whole level."
    },
    {
      id: 15,
      tag: "Stored Procedures",
      difficulty: "Core Concept",
      question: "What is a Stored Procedure and what are its advantages?",
      answer: "A Stored Procedure is a prepared collection of one or more precompiled SQL statements stored directly inside the database that can be executed repeatedly with arguments.\n\nAdvantages:\n• Performance: Precompiled and cached by the database server, executing faster than raw dynamic queries.\n• Reduced Network Traffic: A single call (CALL GetCustomerOrders(101)) replaces sending multiple long SQL queries across the network.\n• Security: Prevents SQL injection and allows administrators to grant users execute permissions on procedures without giving direct access to underlying tables.\n• Code Reusability: Common business logic is written once and shared across applications.",
      tip: "Mention that Stored Procedures reduce network bandwidth and prevent SQL injection."
    },
    {
      id: 16,
      tag: "Database Objects",
      difficulty: "Core Concept",
      question: "What is a Database Trigger and when does it execute?",
      answer: "A Trigger is a special type of stored program that automatically executes ('fires') in response to a specific event on a particular table or view.\n\nEvents that fire triggers:\n• DML events: INSERT, UPDATE, DELETE.\n• Timing: BEFORE (runs before data is written) or AFTER (runs after data is written).\n\nCommon Use Cases:\n• Audit Logging: Automatically logging every update made to employee salaries with the timestamp and user.\n• Data Validation: Enforcing complex business rules that standard table constraints cannot handle.\n• Automatic Calculations: Updating inventory totals when a new order is placed.",
      tip: "Audit logging is the classic real-world use case for database triggers."
    },
    {
      id: 17,
      tag: "Database Objects",
      difficulty: "Fresher Essential",
      question: "What is a View in SQL and why is it used?",
      answer: "A View is a virtual table based on the result-set of a SQL query. It contains rows and columns just like a real table, but does NOT store data itself (it reads from the underlying base tables dynamically).\n\nWhy Views are used:\n• Security: Restricts user access to specific columns (e.g. create a view showing Employee Name and Department, hiding Salary and Social Security Number).\n• Simplifies Complex Queries: Packages multi-table joins, calculations, and aggregations into a simple virtual table.\n• Consistency: If underlying table structures change, views can present an unchanged interface to applications.",
      tip: "Explain that standard views are virtual and do not store data, whereas 'Materialized Views' physically store query results on disk."
    },
    {
      id: 18,
      tag: "SQL Set Operations",
      difficulty: "Fresher Essential",
      question: "What is the difference between UNION and UNION ALL?",
      answer: "Both combine result sets from two or more SELECT queries into a single output, but:\n\n• UNION:\n  - Combines results AND automatically removes all duplicate rows.\n  - Slower because it performs an internal sorting/distinct operation to eliminate duplicates.\n\n• UNION ALL:\n  - Combines results and KEEPS all duplicate rows.\n  - Significantly faster because no sorting or deduplication is performed.\n\nPrerequisites for both: Both SELECT queries must have the same number of columns, in the same order, with compatible data types.",
      tip: "Always choose UNION ALL over UNION when you know there are no duplicates (or when duplicates are desired) for better performance."
    },
    {
      id: 19,
      tag: "SQL Queries",
      difficulty: "Fresher Essential",
      question: "How do you find the second highest salary from an Employee table in SQL?",
      answer: "There are two standard ways to answer this famous interview question:\n\nMethod 1: Using Subquery (Universal across all databases):\nSELECT MAX(Salary) \nFROM Employees \nWHERE Salary < (SELECT MAX(Salary) FROM Employees);\n(Finds the maximum salary that is strictly less than the overall maximum salary).\n\nMethod 2: Using LIMIT and OFFSET (MySQL / PostgreSQL):\nSELECT DISTINCT Salary \nFROM Employees \nORDER BY Salary DESC \nLIMIT 1 OFFSET 1;\n\nMethod 3: Using DENSE_RANK() Window Function:\nSELECT Salary FROM (\n  SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) as rnk\n  FROM Employees\n) ranked WHERE rnk = 2;",
      tip: "Mention DISTINCT in Method 2 so duplicate top salaries don't cause wrong results."
    },
    {
      id: 20,
      tag: "Database Architecture",
      difficulty: "Core Concept",
      question: "What is Database Replication and why is it used?",
      answer: "Database Replication is the process of copying data from a primary database server (Master/Primary) to one or more secondary replica servers (Slaves/Replicas).\n\nWhy it is used:\n• High Availability & Fault Tolerance: If the primary database fails, a replica can be promoted to become the new primary with minimal downtime.\n• Read Scaling: Offloads read-heavy queries (reporting, user reads) to replicas, reserving the primary server strictly for write operations (INSERT/UPDATE).\n• Backup: Backups can be taken from replicas without freezing or impacting the primary database.",
      tip: "Mention the 'Read Replica' pattern: write to Master, read from Replicas."
    },
    {
      id: 21,
      tag: "Database Administration",
      difficulty: "Fresher Essential",
      question: "What is the difference between Full, Differential, and Incremental backups?",
      answer: "• Full Backup:\n  - Creates a complete copy of the ENTIRE database.\n  - Takes the longest time and most storage, but easiest and fastest to restore.\n\n• Differential Backup:\n  - Backs up only data that has CHANGED since the LAST FULL backup.\n  - Faster than full backup; restoring requires the Full backup + the latest Differential backup.\n\n• Incremental Backup:\n  - Backs up only data that has CHANGED since the LAST BACKUP of any type (full or incremental).\n  - Fastest to create and uses least storage; restoring requires the Full backup + ALL subsequent incremental backups in sequence.",
      tip: "Full = all data; Differential = changes since last Full; Incremental = changes since last backup of any type."
    },
    {
      id: 22,
      tag: "NoSQL & MongoDB",
      difficulty: "Core Concept",
      question: "What is MongoDB and how do Documents and Collections compare to SQL tables?",
      answer: "MongoDB is a popular open-source NoSQL document-oriented database that stores data in flexible, JSON-like BSON (Binary JSON) documents.\n\nDirect Comparison with SQL:\n• SQL Database  <-->  MongoDB Database\n• SQL Table     <-->  MongoDB Collection\n• SQL Row/Record <-->  MongoDB Document (BSON)\n• SQL Column    <-->  MongoDB Field\n• SQL Primary Key <--> _id field (ObjectId)\n\nAdvantages:\n• Flexible Schema: Documents in the same collection do not need identical fields.\n• Embedded Documents: Can nest related data (arrays, objects) inside a single document, reducing the need for joins.",
      tip: "Explain that MongoDB stores data as BSON (Binary JSON), not raw text JSON, for faster traversal and data types like dates."
    },
    {
      id: 23,
      tag: "Scalability",
      difficulty: "Core Concept",
      question: "What is Database Sharding and Partitioning?",
      answer: "Techniques to split large datasets to maintain high performance:\n\n• Partitioning (Vertical / Horizontal on a single server):\n  - Dividing a single large table into smaller, more manageable subsets on the SAME physical server (e.g. partitioning an Orders table by year: 2022, 2023, 2024).\n\n• Sharding (Horizontal Partitioning across multiple servers):\n  - Distributing rows of a massive table across MULTIPLE independent physical database servers (called shards) based on a Shard Key (e.g., users 1-100k on Server 1, users 101k-200k on Server 2).\n  - Enables horizontal scaling beyond the hardware limits of any single machine.",
      tip: "Partitioning is on one server; Sharding spreads partitions across multiple physical servers."
    },
    {
      id: 24,
      tag: "Performance Tuning",
      difficulty: "Core Concept",
      question: "How do you identify and optimize a slow-running SQL query?",
      answer: "Systematic Optimization Steps:\n1. Use EXPLAIN / EXPLAIN ANALYZE: Check the query execution plan to see if it uses index lookups or performs an expensive Full Table Scan.\n2. Add Missing Indexes: Create indexes on columns used in WHERE, JOIN, and ORDER BY clauses.\n3. Avoid SELECT *: Retrieve ONLY the specific columns needed by the application to save I/O and network bandwidth.\n4. Avoid Wildcards at start of LIKE: LIKE '%john' cannot use an index; use LIKE 'john%' instead.\n5. Optimize Joins: Ensure joined columns have identical data types and are indexed.\n6. Replace Subqueries with JOINs: JOINs are often optimized better by database query engines.",
      tip: "Start by saying 'I would run EXPLAIN ANALYZE on the slow query'—this is the exact tool database professionals use."
    },
    {
      id: 25,
      tag: "Integrity Constraints",
      difficulty: "Fresher Essential",
      question: "What are the common Constraints used in SQL tables?",
      answer: "Constraints specify rules for data in a table, ensuring accuracy and reliability:\n\n• NOT NULL: Ensures a column cannot have a NULL value.\n• UNIQUE: Ensures all values in a column are distinct.\n• PRIMARY KEY: A combination of NOT NULL and UNIQUE; uniquely identifies each row.\n• FOREIGN KEY: Prevents actions that would destroy links between tables.\n• CHECK: Ensures that values in a column satisfy a specific condition (e.g., CHECK (Age >= 18)).\n• DEFAULT: Sets a default value for a column when no value is specified.\n• AUTO_INCREMENT / IDENTITY: Automatically generates unique sequential numbers for new rows.",
      tip: "Be ready to name all 6 standard constraints: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, and DEFAULT."
    }
  ],

  "software-testing": [
    {
      id: 1,
      tag: "Fundamentals",
      difficulty: "Fresher Essential",
      question: "What is Software Testing and why is Quality Assurance crucial?",
      answer: "Software Testing is the process of evaluating and verifying that a software application operates as intended, meets specified business requirements, and is free of defects.\n\nWhy it is crucial:\n• Prevents Costly Bugs: Fixing a bug in production can be 30x more expensive than catching it during development.\n• Security: Uncovers security vulnerabilities before malicious hackers exploit them.\n• Customer Satisfaction: Ensures a smooth, crash-free user experience.\n• Product Reliability: Guarantees software performs reliably under heavy load and across devices.",
      tip: "Testing is not just finding bugs; it is measuring software quality and preventing defects."
    },
    {
      id: 2,
      tag: "QA vs QC",
      difficulty: "Fresher Essential",
      question: "What is the difference between Quality Assurance (QA) and Quality Control (QC)?",
      answer: "• Quality Assurance (QA):\n  - Process-oriented and proactive.\n  - Focuses on PREVENTING defects by improving development and testing processes.\n  - Activities: Defining coding standards, process reviews, training.\n  - 'Are we building the product right?'\n\n• Quality Control (QC):\n  - Product-oriented and reactive.\n  - Focuses on IDENTIFYING defects in the actual software product after it is built.\n  - Activities: Executing test cases, manual testing, bug logging.\n  - 'Are we building the right product?'",
      tip: "Memory trick: QA = Process & Prevention (proactive); QC = Product & Detection (reactive)."
    },
    {
      id: 3,
      tag: "Verification vs Validation",
      difficulty: "Fresher Essential",
      question: "What is the difference between Verification and Validation?",
      answer: "• Verification (Static Testing):\n  - The process of checking documents, designs, architecture, and code without running the software.\n  - Question: 'Are we building the product right?' (According to specs).\n  - Methods: Code reviews, walkthroughs, document inspections.\n\n• Validation (Dynamic Testing):\n  - The process of executing the actual software to verify that it meets user expectations and requirements.\n  - Question: 'Are we building the right product?' (Meeting customer needs).\n  - Methods: Functional testing, integration testing, regression testing, user acceptance testing (UAT).",
      tip: "Verification = testing without running code; Validation = executing the actual running software."
    },
    {
      id: 4,
      tag: "Testing Types",
      difficulty: "Fresher Essential",
      question: "What is the difference between Manual Testing and Automation Testing?",
      answer: "• Manual Testing:\n  - Human testers manually execute test cases, click buttons, enter inputs, and observe outputs without using automation tools.\n  - Best for: Exploratory testing, usability testing, ad-hoc testing, and rapidly changing features.\n  - Drawback: Time-consuming and prone to human fatigue over repetitive tasks.\n\n• Automation Testing:\n  - Testers write scripts using tools (Selenium, Cypress, Playwright) to execute test suites automatically.\n  - Best for: Repetitive regression tests, load/performance testing, and CI/CD pipelines.\n  - Drawback: High initial setup cost; cannot evaluate visual user experience/human feel.",
      tip: "Automation does not replace manual testing; it complements it by handling repetitive regression runs."
    },
    {
      id: 5,
      tag: "Lifecycles",
      difficulty: "Fresher Essential",
      question: "What is the difference between SDLC and STLC?",
      answer: "• SDLC (Software Development Life Cycle):\n  - The end-to-end framework defining the entire journey of building software from conception to retirement.\n  - Phases: Requirements -> Design -> Development -> Testing -> Deployment -> Maintenance.\n\n• STLC (Software Testing Life Cycle):\n  - A specific sub-phase of SDLC focused exclusively on testing activities.\n  - Phases: Requirements Analysis -> Test Planning -> Test Case Design -> Environment Setup -> Test Execution -> Test Closure.",
      tip: "Explain that STLC is a subset of SDLC dedicated strictly to software testing."
    },
    {
      id: 6,
      tag: "STLC",
      difficulty: "Core Concept",
      question: "What are the 6 phases of the Software Testing Life Cycle (STLC)?",
      answer: "1. Requirement Analysis: Testers analyze specifications and identify testable requirements.\n2. Test Planning: QA Lead defines test strategy, scope, timeline, tools, and resource allocation.\n3. Test Case Development: QA team writes detailed test cases, test data, and traceability matrix.\n4. Test Environment Setup: Configuring test hardware, software, network, and database.\n5. Test Execution: Executing test cases, comparing actual vs expected results, and reporting bugs.\n6. Test Closure: Analyzing bug metrics, pass/fail rates, lessons learned, and signing off on release.",
      tip: "Memorize the 6 phases in order: Analysis -> Planning -> Case Development -> Environment -> Execution -> Closure."
    },
    {
      id: 7,
      tag: "Test Documentation",
      difficulty: "Fresher Essential",
      question: "What is a Test Case and what are its key components?",
      answer: "A Test Case is a documented set of preconditions, input values, execution steps, and expected results designed to verify a specific feature.\n\nKey Components of a Standard Test Case:\n• Test Case ID: Unique identifier (e.g., TC_LOGIN_001).\n• Test Description: What is being verified.\n• Preconditions: Prerequisites needed before testing (e.g., User is registered).\n• Test Steps: Step-by-step instructions to execute the test.\n• Test Data: Exact input data used (e.g., testuser@email.com, Pass@123).\n• Expected Result: What the system should do.\n• Actual Result: What the system actually did.\n• Status: Pass / Fail / Blocked.\n• Severity & Priority.",
      tip: "Be prepared to write a test case on paper during an interview—know these exact fields!"
    },
    {
      id: 8,
      tag: "Black vs White Box",
      difficulty: "Fresher Essential",
      question: "What is the difference between Black Box Testing and White Box Testing?",
      answer: "• Black Box Testing:\n  - The tester has NO knowledge of the internal code structure, implementation details, or algorithms.\n  - Tests are designed based entirely on external requirements and specifications.\n  - Primarily performed by QA Software Testers.\n  - Examples: Functional testing, System testing, Acceptance testing.\n\n• White Box Testing (Glass Box / Clear Box):\n  - The tester has full access to the source code and internal architecture.\n  - Tests verify code paths, branches, loops, and conditions.\n  - Primarily performed by Software Developers.\n  - Examples: Unit testing, Code coverage analysis, Mutation testing.",
      tip: "Black box = testing from user's perspective; White box = testing internal code paths."
    },
    {
      id: 9,
      tag: "Testing Types",
      difficulty: "Fresher Essential",
      question: "What is the difference between Smoke Testing and Sanity Testing?",
      answer: "• Smoke Testing (Build Verification Testing):\n  - Performed on INITIAL software builds received from developers.\n  - Shallow and broad: Verifies critical, high-level core functionalities to ensure the build is stable enough for deeper testing.\n  - 'Is the build stable?' (If login crashes, reject the build).\n\n• Sanity Testing:\n  - Performed on STABLE builds after bug fixes or minor code changes.\n  - Narrow and deep: Focuses specifically on the modified feature and closely related modules.\n  - 'Are the bug fixes working without breaking existing functionality?'",
      tip: "Smoke testing is broad & shallow (new build); Sanity testing is narrow & deep (after bug fixes)."
    },
    {
      id: 10,
      tag: "Testing Types",
      difficulty: "Fresher Essential",
      question: "What is Regression Testing and when is it performed?",
      answer: "Regression Testing is the practice of re-running functional and non-functional tests to ensure that recently introduced code changes, bug fixes, or enhancements have NOT broken existing, previously working features.\n\nWhen it is performed:\n• After any bug fix is merged.\n• When new features or modules are added.\n• When software dependencies or libraries are updated.\n• Before major production release milestones.\n\nBecause regression testing is highly repetitive, it is the #1 candidate for automated testing.",
      tip: "State clearly: 'Regression testing ensures new code didn't break old features'."
    },
    {
      id: 11,
      tag: "Test Design Techniques",
      difficulty: "Core Concept",
      question: "What are Boundary Value Analysis (BVA) and Equivalence Class Partitioning (ECP)?",
      answer: "Both are Black-Box test design techniques used to reduce the number of test cases while maintaining high coverage:\n\n• Equivalence Class Partitioning (ECP):\n  - Divides input data into valid and invalid partitions. Testing one value from each partition represents the whole class.\n  - Example: Age field accepts 18 to 60.\n    Valid class: 25. Invalid classes: 10, 75.\n\n• Boundary Value Analysis (BVA):\n  - Experience shows most bugs occur at boundaries of input ranges.\n  - Tests values at the exact boundary edges: Min, Min-1, Min+1, Max, Max-1, Max+1.\n  - Example for range 18 to 60: Test 17, 18, 19 and 59, 60, 61.",
      tip: "Always give the age example (18–60) or password length (8–16 characters) to demonstrate BVA and ECP."
    },
    {
      id: 12,
      tag: "Defect Management",
      difficulty: "Fresher Essential",
      question: "What is the Bug / Defect Life Cycle and its stages?",
      answer: "The Bug Life Cycle is the journey of a defect from detection to resolution:\n\n1. New: Bug logged by tester.\n2. Assigned: QA Lead assigns bug to developer.\n3. Open: Developer analyzes the bug.\n4. Rejected / Duplicate / Deferred: If invalid, duplicate, or postponed.\n5. In Progress / Fixed: Developer writes code fix.\n6. Retest: Tester tests the fix in a new build.\n7. Verified: Tester confirms the bug is fixed.\n8. Closed: Bug resolved successfully.\n9. Reopened: If the bug still reproduces during retesting, status transitions back to Open.",
      tip: "Know the alternate paths: Duplicate, Deferred, and Reopened."
    },
    {
      id: 13,
      tag: "Defect Management",
      difficulty: "Fresher Essential",
      question: "What is the difference between Severity and Priority of a bug? Give examples.",
      answer: "• Severity: Measures the TECHNICAL IMPACT of a bug on system operations.\n  - Critical / Major / Medium / Low.\n\n• Priority: Measures the BUSINESS URGENCY with which the bug must be fixed.\n  - High / Medium / Low.\n\nClassic Examples:\n1. High Severity, Low Priority: System crashes when clicking an obsolete feature used once a year by 1 person. (Crash = high impact, but rarely used = low priority).\n2. High Priority, Low Severity: The company CEO's name or brand logo is misspelled on the home page. (No crash = low severity, but massive reputation impact = high priority).",
      tip: "The company logo spelling mistake on the homepage is the golden example of High Priority, Low Severity."
    },
    {
      id: 14,
      tag: "API Testing",
      difficulty: "Core Concept",
      question: "What is API Testing and what HTTP response status codes should testers verify?",
      answer: "API Testing verifies that Application Programming Interfaces (APIs) perform correctly, return valid data formats, and enforce security and error handling without relying on a user interface.\n\nKey HTTP Status Codes to verify:\n• 200 OK: Successful request.\n• 201 Created: New resource successfully created (POST).\n• 204 No Content: Successful request with no body returned (DELETE).\n• 400 Bad Request: Client sent invalid syntax or payload.\n• 401 Unauthorized: Authentication is missing or invalid.\n• 403 Forbidden: Authenticated user lacks permission.\n• 404 Not Found: Requested endpoint or resource does not exist.\n• 500 Internal Server Error: Unhandled backend crash.",
      tip: "Memorize the code families: 2xx = Success, 4xx = Client error, 5xx = Server error."
    },
    {
      id: 15,
      tag: "API Testing Tools",
      difficulty: "Fresher Essential",
      question: "How do QA testers use Postman for REST API testing?",
      answer: "Postman is an industry-standard API testing platform.\n\nHow QA uses it:\n• Send Requests: Configure HTTP method (GET, POST, PUT, DELETE), URL, headers, and JSON body.\n• Environment Variables: Store base URLs and dynamic auth tokens across requests.\n• Write Test Scripts: Use JavaScript snippets in the 'Tests' tab:\n  pm.test('Status code is 200', () => {\n    pm.response.to.have.status(200);\n  });\n• Collection Runner: Run entire test suites automatically and view pass/fail reports.\n• Mock Servers: Simulate backend APIs before developers finish writing them.",
      tip: "Mention writing test assertions in Postman using pm.test() and pm.expect()."
    },
    {
      id: 16,
      tag: "Automation Testing",
      difficulty: "Core Concept",
      question: "What is Selenium WebDriver and how does it automate web browsers?",
      answer: "Selenium WebDriver is an open-source web automation framework that allows testers to write code in Java, Python, or C# to control web browsers natively.\n\nHow it works:\n1. Test Script: Code sends commands (e.g. driver.findElement(By.id('btn')).click()).\n2. JSON Wire Protocol / W3C WebDriver Standard: Converts commands into HTTP requests.\n3. Browser Driver (e.g. ChromeDriver, GeckoDriver): Interprets commands and controls the browser directly.\n4. Real Browser: Executes actions (typing, clicking, navigating) just like a human user.",
      tip: "Mention that Selenium WebDriver only automates web applications, not desktop or mobile apps."
    },
    {
      id: 17,
      tag: "Automation Testing",
      difficulty: "Core Concept",
      question: "What are Locators in Selenium and which are the most reliable?",
      answer: "Locators are methods used by Selenium WebDriver to find HTML elements on a webpage.\n\nStandard Locators:\n1. ID: By.id('login-btn') - Fastest and most reliable because IDs should be unique.\n2. Name: By.name('username')\n3. Class Name: By.className('submit-button')\n4. XPath: By.xpath('//button[@type=\"submit\"]') - Very powerful, traverses DOM up and down.\n5. CSS Selector: By.cssSelector('.login > button') - Faster and cleaner than XPath.\n6. LinkText / PartialLinkText: For anchor <a> tags.\n\nBest Practice Hierarchy: ID > Name > CSS Selector > XPath.",
      tip: "ID is #1; if ID is unavailable or dynamic, CSS Selector is usually preferred over XPath for speed."
    },
    {
      id: 18,
      tag: "Automation Testing",
      difficulty: "Core Concept",
      question: "What is the difference between Absolute XPath and Relative XPath in Selenium?",
      answer: "• Absolute XPath:\n  - Starts from the root HTML element with a single slash (/).\n  - Navigates through the entire DOM hierarchy node by node.\n  - Example: /html/body/div[2]/form/div[1]/input\n  - Highly fragile: If developers add a single <div> or change layout, the XPath breaks.\n\n• Relative XPath:\n  - Starts anywhere in the HTML document with double slashes (//).\n  - Searches directly for elements matching attributes.\n  - Example: //input[@id='username'] or //button[text()='Submit']\n  - Highly robust: Unaffected by unrelated layout changes.\n\nAlways use Relative XPath in production test automation.",
      tip: "Absolute starts from / (root); Relative starts from // (anywhere). Always use Relative!"
    },
    {
      id: 19,
      tag: "Automation Framework",
      difficulty: "Core Concept",
      question: "What is the Page Object Model (POM) design pattern in test automation?",
      answer: "Page Object Model (POM) is a popular design pattern in test automation that creates an Object Repository for web UI elements.\n\nHow it works:\n• Each web page has a corresponding Page Class (e.g., LoginPage.java).\n• The Page Class contains locators and methods to interact with that page (e.g. enterUsername(), clickLogin()).\n• The Test Class (e.g. LoginTest.java) contains only test assertions and calls page methods.\n\nBenefits:\n• Reduces code duplication: Locators are defined in one place.\n• Easy maintenance: If a button ID changes, update it in ONE Page Class rather than dozens of test scripts.",
      tip: "POM separates page element locators from test logic, making scripts maintainable."
    },
    {
      id: 20,
      tag: "Non-Functional Testing",
      difficulty: "Core Concept",
      question: "What is Performance Testing and what are Load, Stress, and Spike testing?",
      answer: "Performance Testing evaluates software speed, responsiveness, stability, and resource usage under specific workloads.\n\nKey Sub-types:\n• Load Testing: Tests system behavior under expected normal and peak user traffic (e.g., 5,000 concurrent users).\n• Stress Testing: Tests system behavior beyond normal maximum capacity to find the breaking point and observe how it recovers.\n• Spike Testing: Tests system reaction to sudden, extreme surges in user traffic (e.g. flash sales on Black Friday).\n• Endurance (Soak) Testing: Tests system performance under steady load over long durations to catch memory leaks.\n\nCommon Tools: Apache JMeter, k6, Gatling.",
      tip: "Name Apache JMeter—it is the #1 tool asked about for performance testing."
    },
    {
      id: 21,
      tag: "Practical Scenarios",
      difficulty: "Fresher Essential",
      question: "Write 5 positive and 5 negative test cases for a User Login Page.",
      answer: "Positive Test Cases:\n1. Enter valid registered email and valid password -> Successfully logged in and redirected to dashboard.\n2. Check 'Remember Me' box -> Credentials or session remembered upon returning.\n3. Password visibility toggle works -> Clicking eye icon reveals/masks password.\n4. Press 'Enter' key inside password field -> Form submits successfully.\n5. Click 'Forgot Password' -> Navigates to password recovery screen.\n\nNegative Test Cases:\n1. Valid email with wrong password -> Error message 'Invalid credentials'.\n2. Unregistered email with any password -> Error message 'User does not exist'.\n3. Leave both email and password blank and click submit -> Validation messages displayed.\n4. Enter invalid email format (missing @ or domain) -> Format validation error.\n5. Enter SQL injection payload in fields -> Properly handled, no database crash.",
      tip: "Interviewers frequently ask this live! Giving both positive and negative cases shows balanced QA thinking."
    },
    {
      id: 22,
      tag: "Defect Reporting",
      difficulty: "Fresher Essential",
      question: "How do you write a clear and effective Bug Report?",
      answer: "A well-written bug report allows developers to reproduce and fix defects quickly.\n\nEssential Sections:\n• Bug Title: Concise summary (e.g. '[Login] User receives 500 error when submitting password with special characters').\n• Environment: OS, Browser version, Application build number.\n• Severity & Priority: (e.g. Severity: Major, Priority: High).\n• Steps to Reproduce: Numbered, precise step-by-step instructions.\n• Expected Result: What should have happened.\n• Actual Result: What actually happened (include error text).\n• Attachments: Screenshots, screen recordings, console logs, or network HAR files.",
      tip: "Steps to Reproduce must be so clear that anyone on the team can replicate the bug in 60 seconds."
    },
    {
      id: 23,
      tag: "Testing Types",
      difficulty: "Fresher Essential",
      question: "What is Cross-Browser Testing and why is it necessary?",
      answer: "Cross-Browser Testing is the practice of verifying that a web application functions and displays consistently across multiple web browsers (Chrome, Firefox, Safari, Edge) and operating systems.\n\nWhy it is necessary:\n• Different Browser Rendering Engines: Chrome uses Blink, Safari uses WebKit, Firefox uses Gecko. They can interpret CSS styles and JavaScript differently.\n• Device Variety: Users visit sites from iPhones, Androids, MacBooks, and Windows laptops.\n• Business Reach: Ensures no customer is lost due to visual defects or broken buttons on their preferred browser.",
      tip: "Tools used: BrowserStack and Sauce Labs allow testing on real remote browsers and devices."
    },
    {
      id: 24,
      tag: "Methodology",
      difficulty: "Core Concept",
      question: "What is Exploratory Testing and when is it most valuable?",
      answer: "Exploratory Testing is an approach where testers simultaneously design, execute, and learn about the application on the fly without formal, predefined test scripts.\n\nWhen it is most valuable:\n• When requirements documents are incomplete or rapid feedback is needed.\n• During early product builds to gain quick insights.\n• Complementing automated regression suites to find subtle usability edge cases that scripted tests miss.\n• Emphasizes human intuition, curiosity, and creativity.",
      tip: "Exploratory testing is not random hacking; it is structured discovery driven by tester experience and intuition."
    },
    {
      id: 25,
      tag: "Test Documentation",
      difficulty: "Core Concept",
      question: "What is a Requirement Traceability Matrix (RTM)?",
      answer: "A Requirement Traceability Matrix (RTM) is a document (often a grid table) that links user requirements with their corresponding test cases.\n\nPrimary Purpose:\n• Ensures 100% test coverage: Confirms every single requirement has at least one test case.\n• Impact Analysis: If a business requirement changes, the RTM instantly identifies which test cases must be updated.\n• Forward Traceability (Requirements -> Test Cases) and Backward Traceability (Test Cases -> Requirements).",
      tip: "RTM guarantees that no requirement was forgotten or left untested."
    }
  ],

  "mobile-development": [
    {
      id: 1,
      tag: "Mobile Overview",
      difficulty: "Fresher Essential",
      question: "What is Mobile App Development and what are the main platforms today?",
      answer: "Mobile App Development is the process of creating software applications designed to run on mobile smartphones and tablets.\n\nTwo Dominant Platforms:\n• Android (developed by Google): Powers ~70% of global smartphones, uses Kotlin and Java.\n• iOS (developed by Apple): Powers iPhone and iPad devices, uses Swift and Objective-C.\n\nDevelopment Approaches:\n1. Native Development: Separate apps for Android (Kotlin) and iOS (Swift).\n2. Cross-Platform Development: Single codebase for both platforms using frameworks like Flutter (Dart) or React Native (JavaScript).",
      tip: "Highlight that modern startups overwhelmingly choose cross-platform (Flutter/React Native) to launch on both stores faster."
    },
    {
      id: 2,
      tag: "Architecture",
      difficulty: "Fresher Essential",
      question: "What is the difference between Native, Hybrid, and Cross-Platform mobile apps?",
      answer: "• Native Apps:\n  - Built specifically for one operating system using official tools (Kotlin for Android; Swift for iOS).\n  - Best performance and full access to device hardware (camera, Bluetooth, sensors).\n  - Downside: Requires two separate codebases and double the development effort.\n\n• Cross-Platform Apps (Flutter, React Native):\n  - Single codebase compiled to native code or running via native UI bridges on both Android and iOS.\n  - Near-native performance and 80–90% shared code.\n\n• Hybrid / Web Apps (Ionic, Cordova):\n  - Web pages (HTML/CSS/JS) wrapped inside a native web view container.\n  - Slower performance and sluggish UI animations.",
      tip: "Distinguish Cross-Platform (compiles to native UI) from Hybrid (runs inside an embedded web browser)."
    },
    {
      id: 3,
      tag: "Flutter",
      difficulty: "Fresher Essential",
      question: "What is Flutter and why is it so popular for mobile app development?",
      answer: "Flutter is an open-source UI toolkit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase using the Dart programming language.\n\nWhy it is popular:\n• Single Codebase: Write once, deploy to both Android and iOS.\n• High Performance: Renders its own UI using Skia/Impeller graphics engine directly at 60/120 FPS without an intermediate JavaScript bridge.\n• Hot Reload: See code changes reflected on emulators in sub-seconds without restarting the app.\n• Rich Widget Library: Everything in Flutter is a customizable widget matching Material Design and Cupertino (iOS) styles.",
      tip: "The key differentiator: Flutter renders directly onto a canvas with its own engine rather than wrapping native views."
    },
    {
      id: 4,
      tag: "React Native",
      difficulty: "Fresher Essential",
      question: "What is React Native and how does it differ from Flutter?",
      answer: "React Native is an open-source cross-platform mobile framework created by Meta (Facebook) that uses React and JavaScript to build mobile apps.\n\nComparison:\n• Language: React Native uses JavaScript/TypeScript; Flutter uses Dart.\n• Rendering Approach: React Native maps components to native OEM platform widgets (e.g., <View> becomes Android ViewGroup / iOS UIView). Flutter renders its own pixels using its rendering engine.\n• Developer Ecosystem: React Native allows web developers who know React to transition to mobile seamlessly.",
      tip: "React Native uses native platform widgets via a bridge; Flutter paints its own widgets directly on screen."
    },
    {
      id: 5,
      tag: "Android Basics",
      difficulty: "Fresher Essential",
      question: "What is an Activity in Android and what are its lifecycle methods?",
      answer: "An Activity represents a single screen with a user interface that the user can interact with (e.g. LoginActivity, ProfileActivity).\n\nKey Lifecycle Methods in Order:\n1. onCreate(): Called when activity is first created. Initialize UI views and data here.\n2. onStart(): Activity becomes visible to user.\n3. onResume(): Activity comes to foreground and receives user input.\n4. onPause(): Activity loses focus (e.g. phone call dialog appears).\n5. onStop(): Activity is no longer visible.\n6. onRestart(): Called before onStart when returning from stopped state.\n7. onDestroy(): Called before activity is destroyed to free resources.",
      tip: "Memorize the order: onCreate -> onStart -> onResume -> onPause -> onStop -> onDestroy."
    },
    {
      id: 6,
      tag: "Android Basics",
      difficulty: "Core Concept",
      question: "What is a Fragment in Android and how does it differ from an Activity?",
      answer: "A Fragment represents a reusable portion of user interface within an Activity (a 'sub-activity').\n\nDifferences:\n• Activity: Standalone window; can exist independently.\n• Fragment: Must be hosted inside an Activity; cannot exist on its own.\n• Reusability: Multiple fragments can be combined in a single screen on tablets, or swapped dynamically in a ViewPager / Bottom Navigation bar on phones.\n• Lifecycle: A fragment has its own lifecycle, but it is closely tied to its host activity's lifecycle.",
      tip: "Fragments enable responsive UI across different screen sizes (e.g. showing list and detail on a tablet screen together)."
    },
    {
      id: 7,
      tag: "Configuration",
      difficulty: "Fresher Essential",
      question: "What is the AndroidManifest.xml file and what does it contain?",
      answer: "The AndroidManifest.xml file is the central configuration file present at the root of every Android application.\n\nKey Information it Declares:\n• Application Identity: Package name and unique application ID.\n• Components: All Activities, Services, Broadcast Receivers, and Content Providers MUST be registered here.\n• Permissions: Hardware and user permissions required (INTERNET, CAMERA, ACCESS_FINE_LOCATION).\n• App Icon & Theme: Default launcher icon and styling theme.\n• Hardware Features: Declares if features like Bluetooth or camera are required or optional.",
      tip: "If you create a new Activity and forget to declare it in AndroidManifest.xml, the app will crash with an ActivityNotFoundException."
    },
    {
      id: 8,
      tag: "Flutter Basics",
      difficulty: "Fresher Essential",
      question: "What is a Widget in Flutter? Explain StatelessWidget vs StatefulWidget.",
      answer: "In Flutter, 'Everything is a Widget'—from structural elements (Text, Button, Image) to layout elements (Row, Column, Padding, Container).\n\n• StatelessWidget:\n  - An immutable widget that does NOT hold dynamic state.\n  - The UI does not change based on user interactions once rendered.\n  - Examples: Text('Hello'), Icon(Icons.star), Container with fixed color.\n\n• StatefulWidget:\n  - A mutable widget that maintains dynamic state that can change during the widget's lifetime.\n  - When state changes using setState(() { ... }), the widget re-renders to reflect updated values.\n  - Examples: Checkbox, Slider, Form inputs, Animated counters.",
      tip: "Use StatelessWidget for static presentation; use StatefulWidget when user interaction updates screen data."
    },
    {
      id: 9,
      tag: "State Management",
      difficulty: "Core Concept",
      question: "Why is State Management needed in mobile applications?",
      answer: "State is data that controls what is shown on screen at any given moment (e.g., user login status, shopping cart count, theme preference).\n\nWhy State Management is needed:\n• Sharing Data Across Screens: Passing state down through dozens of widgets (prop drilling) becomes messy and unmaintainable.\n• UI Synchronization: When an item is added to the cart, the cart icon counter in the app bar must update instantly across screens.\n• Separation of Concerns: Separates business logic from UI presentation code.\n• Popular Solutions: Provider, Riverpod, BLoC (Flutter); Redux, Context API, Zustand (React Native).",
      tip: "Mention BLoC and Provider for Flutter; Redux or Zustand for React Native."
    },
    {
      id: 10,
      tag: "Navigation",
      difficulty: "Fresher Essential",
      question: "How does screen navigation work in Flutter and React Native?",
      answer: "Mobile navigation operates as a Stack of screens (push and pop):\n\n• Flutter Navigation:\n  - Navigator.push(context, MaterialPageRoute(builder: (context) => NextScreen())): Pushes a new screen onto the stack.\n  - Navigator.pop(context): Removes the top screen and returns to the previous screen.\n  - Named Routes: Navigator.pushNamed(context, '/details').\n\n• React Native (React Navigation):\n  - Stack Navigator: navigation.navigate('Details') to push; navigation.goBack() to pop.\n  - Tab Navigator: For bottom navigation bars.",
      tip: "Explain the stack concept: Pushing adds a screen; popping removes the screen to go back."
    },
    {
      id: 11,
      tag: "Android Components",
      difficulty: "Core Concept",
      question: "What is an Intent in Android? Differentiate Explicit vs Implicit Intents.",
      answer: "An Intent is an asynchronous messaging object used to request an action from another app component.\n\nTwo Types:\n• Explicit Intent:\n  - Explicitly specifies the exact target component/class by name within the same application.\n  - Example: Navigating from LoginActivity to ProfileActivity.\n  - Intent intent = new Intent(this, ProfileActivity.class); startActivity(intent);\n\n• Implicit Intent:\n  - Does not name a specific component; instead declares a general action to be performed, letting the OS find matching apps.\n  - Example: Opening a web URL in the browser, opening the phone dialer, or sharing text via WhatsApp.",
      tip: "Explicit = known internal component; Implicit = general action handled by any capable app (like opening a URL)."
    },
    {
      id: 12,
      tag: "Networking & APIs",
      difficulty: "Fresher Essential",
      question: "How do mobile apps fetch data from REST APIs asynchronously without freezing the UI?",
      answer: "Mobile operating systems strictly forbid network calls on the Main UI Thread (which causes Application Not Responding - ANR crashes).\n\nHow it is handled:\n• Network calls are executed on background worker threads using asynchronous patterns:\n  - Flutter: Future and async/await using the 'http' or 'dio' package.\n  - React Native: fetch() or axios with async/await.\n  - Android Native: Retrofit library with Kotlin Coroutines (Dispatchers.IO).\n• Once data is received, execution returns to the Main Thread to update the UI with the parsed data.",
      tip: "Mention that running network requests on the main thread throws a NetworkOnMainThreadException in Android."
    },
    {
      id: 13,
      tag: "UI Performance",
      difficulty: "Core Concept",
      question: "What is RecyclerView in Android and ListView.builder in Flutter?",
      answer: "Displaying long lists of data (like hundreds of job posts or products) would consume massive memory if all items were rendered at once.\n\n• Android RecyclerView:\n  - Recycles and reuses off-screen view holders rather than inflating new views as the user scrolls.\n  - Dramatically reduces memory consumption and ensures 60 FPS smooth scrolling.\n\n• Flutter ListView.builder:\n  - An on-demand constructor that builds widget children lazily only when they are scrolled into the viewport.\n\nBoth avoid creating thousands of items simultaneously in memory.",
      tip: "The keyword is 'Recycling/Reusing view holders'—they render only items visible on screen plus a buffer."
    },
    {
      id: 14,
      tag: "Local Storage",
      difficulty: "Fresher Essential",
      question: "What local storage options exist in mobile applications?",
      answer: "1. Key-Value Storage (Lightweight):\n• For saving small preferences (user ID, dark mode toggle, auth tokens).\n• Android: SharedPreferences / DataStore\n• React Native: AsyncStorage\n• Flutter: shared_preferences or Hive\n\n2. Relational Database (Structured Data):\n• For storing complex, relational offline data.\n• SQLite, Room Persistence Library (Android Native), sqflite (Flutter)\n\n3. NoSQL / Document Storage:\n• Hive, Isar (ultra-fast for Flutter), Realm.",
      tip: "SharedPreferences is for simple key-value pairs (tokens/settings); SQLite/Room is for structured offline relational tables."
    },
    {
      id: 15,
      tag: "Mobile Security",
      difficulty: "Core Concept",
      question: "What are Runtime Permissions and why are they required in modern mobile OS?",
      answer: "In early mobile OS versions, apps requested all permissions upfront during install time from the store.\n\nModern Runtime Permissions (Android 6.0+ & iOS):\n• Permissions are categorized into Normal (e.g. Internet, granted automatically) and Dangerous (e.g. Camera, Location, Contacts, Microphone).\n• Dangerous permissions must be requested from the user dynamically at the moment the feature is first used with a prompt dialog.\n• Why required: Protects user privacy by giving them control to grant, deny, or grant 'Only while using the app' access.",
      tip: "Explain that your app must gracefully handle the scenario where a user DENIES permission without crashing."
    },
    {
      id: 16,
      tag: "Build & Packaging",
      difficulty: "Fresher Essential",
      question: "What is an APK and what is an Android App Bundle (AAB)?",
      answer: "• APK (Android Package):\n  - The traditional package file format containing compiled code, resources, assets, and manifest for Android.\n  - Can be directly installed ('sideloaded') onto any Android device.\n  - Contains code and resources for ALL device architectures, making it larger.\n\n• AAB (Android App Bundle):\n  - Google's modern publishing format required for Google Play Store uploads.\n  - The developer uploads a single AAB to Google Play.\n  - Google Play dynamically generates optimized, smaller APKs tailored specifically to each user's device architecture, screen density, and language, reducing download size by up to 35%.",
      tip: "Google Play requires AAB for new app submissions, not standard APKs."
    },
    {
      id: 17,
      tag: "Mobile Architecture",
      difficulty: "Core Concept",
      question: "What is the MVVM architecture and why is it preferred in mobile development?",
      answer: "MVVM stands for Model - View - ViewModel:\n\n• Model: Represents data and business logic (data classes, API calls, database queries).\n• View: The UI layer (Activity/Fragment/Widget) that displays data and captures user events.\n• ViewModel: The bridge between Model and View. Holds UI state and exposes reactive data streams (LiveData / StateFlow) that the View observes.\n\nWhy it is preferred:\n• Separation of Concerns: Keeps UI free of business logic.\n• Survives Configuration Changes: In Android, when a screen rotates, the Activity destroys and recreates, but the ViewModel persists in memory without losing data.\n• Testability: ViewModel business logic can be unit-tested without launching UI emulators.",
      tip: "In Android, the killer feature of ViewModel is that it survives screen orientation rotation!"
    },
    {
      id: 18,
      tag: "Developer Experience",
      difficulty: "Fresher Essential",
      question: "What is Hot Reload vs Hot Restart in Flutter and React Native?",
      answer: "• Hot Reload:\n  - Injects updated source code files directly into the running Dart VM or JavaScript engine.\n  - Updates UI in sub-seconds (~300ms) while PRESERVING current application state (e.g. text typed into inputs or current scroll position are not lost).\n  - Best for tweaking UI designs and styling.\n\n• Hot Restart:\n  - Completely restarts the app from scratch.\n  - Destroys current state and resets back to initial screen.\n  - Takes slightly longer (~1–2 seconds).\n  - Necessary when changing global app state, initState(), or main() methods.",
      tip: "Hot Reload preserves state; Hot Restart resets state. Hot Reload is why Flutter developers code so fast."
    },
    {
      id: 19,
      tag: "Notifications",
      difficulty: "Core Concept",
      question: "What are Push Notifications and how does Firebase Cloud Messaging (FCM) work?",
      answer: "Push Notifications are alert messages sent from a backend server to a user's mobile device even when the app is completely closed or running in the background.\n\nHow FCM works:\n1. Client Registration: When installed, the app contacts FCM and receives a unique Device Registration Token, which it sends to your backend server.\n2. Server Trigger: When an event occurs (e.g. new job alert), your server sends a notification payload with the token to FCM.\n3. Delivery: FCM routes the notification to the target mobile device through persistent OS background sockets.\n4. Display: The mobile operating system displays the notification banner in the system tray.",
      tip: "FCM is cross-platform: it delivers notifications to both Android and iOS devices."
    },
    {
      id: 20,
      tag: "Offline Support",
      difficulty: "Core Concept",
      question: "How do you design a mobile app to work smoothly in offline mode?",
      answer: "Offline-First Design Pattern:\n1. Local Database as Single Source of Truth: The UI displays data loaded from local storage (SQLite/Room/Hive) rather than directly from API calls.\n2. Background Sync: When internet connectivity is available, the app calls the REST API in the background and updates the local database, which automatically updates the UI.\n3. Network Listener: Use connectivity listeners (connectivity_plus / NetInfo) to detect when the device goes offline/online and notify the user with a friendly snackbar.\n4. Offline Action Queue: If a user submits an action offline, queue the request locally and dispatch it when internet returns.",
      tip: "The Offline-First philosophy: The local database is the single source of truth; network only syncs the database."
    },
    {
      id: 21,
      tag: "Memory & Performance",
      difficulty: "Core Concept",
      question: "What causes mobile app memory leaks and how can they be prevented?",
      answer: "A memory leak occurs when unused objects remain referenced in memory, preventing the garbage collector from freeing them, eventually causing OutOfMemory (OOM) crashes.\n\nCommon Causes in Mobile:\n• Holding static references to an Activity context after it is destroyed.\n• Forgetting to unregister Broadcast Receivers, Event Listeners, or Location updates in onDestroy().\n• Long-running background threads or timers keeping references to UI widgets.\n\nPrevention:\n• Use WeakReferences for long-lived objects.\n• Always clean up subscriptions and cancel timers in dispose() / onDestroy().\n• Use memory profiling tools like Android Studio Profiler or LeakCanary.",
      tip: "Name LeakCanary—it is the most famous open-source tool for catching memory leaks in Android apps."
    },
    {
      id: 22,
      tag: "Responsive UI",
      difficulty: "Fresher Essential",
      question: "How do you handle different screen sizes and orientations in mobile apps?",
      answer: "Techniques for multi-screen adaptability:\n• Relative Dimensions: Avoid hardcoded pixel widths; use layout constraints, Flexbox, or percentage sizing.\n• Flutter LayoutBuilder & MediaQuery: Inspect screen width/height dynamically to render a single column on phones and two columns on tablets.\n• Android Resource Qualifiers: Provide alternate layout folders (e.g. layout-sw600dp for tablets, layout-land for landscape).\n• Safe Area Widgets: Wrap screens in SafeArea / SafeAreaView to prevent content from overlapping the camera notch, status bar, and home bar.",
      tip: "Always mention SafeArea—preventing notch overlap is essential on modern iPhones and Android devices."
    },
    {
      id: 23,
      tag: "Publishing",
      difficulty: "Fresher Essential",
      question: "What are the essential steps required to publish an app on the Google Play Store?",
      answer: "1. Google Play Console Account: Register and pay the one-time $25 developer fee.\n2. Generate Release Keystore: Create a cryptographic keystore to sign the release build.\n3. Build Release AAB: Generate the release Android App Bundle (flutter build appbundle --release).\n4. Store Listing Assets: Prepare high-res app icon (512x512), feature graphic (1024x500), and phone/tablet screenshots.\n5. Content Rating & Privacy Policy: Complete privacy policy and content questionnaires.\n6. Testing Tracks: Release to Internal Testing, Closed Alpha, Open Beta, then promote to Production after review approval.",
      tip: "Highlight testing tracks: You should always test via Internal/Closed testing before launching directly to Production."
    },
    {
      id: 24,
      tag: "Testing",
      difficulty: "Fresher Essential",
      question: "What is the difference between testing on an Emulator / Simulator versus a Real Device?",
      answer: "• Emulator / Simulator:\n  - Software program running on your PC that mimics a mobile device.\n  - Pros: Convenient, fast, allows testing different screen sizes and OS versions without buying phones.\n  - Cons: Runs on PC x86 CPU (faster than real mobile ARM processors), does not simulate battery drain, overheating, real camera, or biometric sensors accurately.\n\n• Real Physical Device:\n  - Testing on actual phone hardware.\n  - Mandatory for testing real performance, frame rate drops, thermal throttling, touch sensitivity, network transitions (switching from Wi-Fi to 4G/5G), and push notifications.",
      tip: "Final testing MUST always be conducted on physical devices before store release."
    },
    {
      id: 25,
      tag: "Build Tools",
      difficulty: "Fresher Essential",
      question: "What is Gradle in Android development and what is the difference between build.gradle files?",
      answer: "Gradle is an advanced build automation tool used by Android Studio to compile source code, package resources, manage external dependencies, and generate APK/AAB files.\n\nTwo build.gradle files exist in every Android project:\n1. Project-level build.gradle (Root):\n• Configures build rules and repository settings that apply to ALL modules across the entire project (e.g. Google Maven repository, Gradle plugin version).\n\n2. Module-level build.gradle (app/):\n• Configures settings specific to the application module:\n  - compileSdk and targetSdk versions\n  - applicationId (com.example.app)\n  - versionCode and versionName\n  - dependencies { implementation 'com.squareup.retrofit2:retrofit:2.9.0' }",
      tip: "Dependencies are added in the module-level build.gradle file, not the root project-level file."
    }
  ],

  "it-networking": [
    {
      id: 1,
      tag: "Network Fundamentals",
      difficulty: "Fresher Essential",
      question: "What is a Computer Network and what are LAN, WAN, and MAN?",
      answer: "A Computer Network is a collection of interconnected computing devices that share resources, exchange files, and communicate using standard protocols.\n\nKey Classifications by Geographic Scope:\n• LAN (Local Area Network): Covers a small physical area like a home, office, or college lab. High speed (up to 10 Gbps) and low error rates.\n• MAN (Metropolitan Area Network): Covers a larger geographic area like an entire city or university campus (e.g., city cable TV network).\n• WAN (Wide Area Network): Spans large geographic regions, countries, or the entire globe. Connected via satellite links and undersea fiber cables. The Internet is the ultimate WAN.",
      tip: "LAN = single building; MAN = entire city; WAN = global (the Internet)."
    },
    {
      id: 2,
      tag: "OSI Model",
      difficulty: "Fresher Essential",
      question: "What is the OSI Model and what are its 7 layers in order?",
      answer: "The OSI (Open Systems Interconnection) Model is a conceptual framework that standardizes the functions of a telecommunication or network system into 7 layers.\n\n7 Layers from Top to Bottom (Application to Physical):\n7. Application: User interaction (HTTP, HTTPS, DNS, FTP, SMTP)\n6. Presentation: Data translation, encryption, compression (SSL/TLS, JPEG)\n5. Session: Establishes, manages, and terminates connections between applications\n4. Transport: End-to-end communication, flow control, reliability (TCP, UDP) - Data unit: Segments\n3. Network: Logical addressing and path routing (IP, ICMP, Routers) - Data unit: Packets\n2. Data Link: Physical addressing (MAC address, Switches, Ethernet) - Data unit: Frames\n1. Physical: Physical transmission of binary raw bits over copper cable, fiber, or radio waves.",
      tip: "Mnemonic to remember all 7 from 7 to 1: 'All People Seem To Need Data Processing' (Application to Physical)."
    },
    {
      id: 3,
      tag: "TCP/IP vs OSI",
      difficulty: "Fresher Essential",
      question: "What is the TCP/IP Model and how does it compare to the OSI Model?",
      answer: "The TCP/IP Model is the practical, real-world implementation suite used on the Internet today (unlike the theoretical 7-layer OSI model).\n\n4 Layers of TCP/IP:\n1. Application Layer: Combines OSI Layers 7 (Application), 6 (Presentation), and 5 (Session).\n2. Transport / Host-to-Host Layer: Corresponds directly to OSI Layer 4 (TCP, UDP).\n3. Internet Layer: Corresponds to OSI Layer 3 (IP, ICMP, ARP).\n4. Network Access / Link Layer: Combines OSI Layer 2 (Data Link) and Layer 1 (Physical).",
      tip: "OSI has 7 theoretical layers; TCP/IP has 4 practical layers used in the real internet."
    },
    {
      id: 4,
      tag: "IP Addressing",
      difficulty: "Fresher Essential",
      question: "What is an IP Address? What is the difference between IPv4 and IPv6?",
      answer: "An IP (Internet Protocol) address is a unique numerical identifier assigned to every device connected to a computer network that uses the Internet Protocol for communication.\n\nKey Differences:\n• IPv4:\n  - 32-bit address divided into 4 octets separated by dots (e.g. 192.168.1.1).\n  - Provides ~4.3 billion unique addresses (which have now been exhausted).\n\n• IPv6:\n  - 128-bit hexadecimal address divided into 8 groups separated by colons (e.g. 2001:0db8:85a3::8a2e:0370:7334).\n  - Provides 340 undecillion unique addresses (virtually inexhaustible).\n  - Eliminates the need for NAT and has built-in IPsec security.",
      tip: "IPv4 is 32-bit; IPv6 is 128-bit. IPv6 was created to solve the exhaustion of IPv4 addresses."
    },
    {
      id: 5,
      tag: "IP Addressing",
      difficulty: "Fresher Essential",
      question: "What is the difference between a Public IP and a Private IP address?",
      answer: "• Public IP Address:\n  - Globally unique address assigned by an Internet Service Provider (ISP) to your router/modem.\n  - Directly reachable from anywhere on the global internet.\n\n• Private IP Address:\n  - Used strictly within a private local network (LAN) to identify devices (laptops, phones, printers).\n  - NOT routable over the public internet.\n  - Reserved ranges (RFC 1918):\n    - Class A: 10.0.0.0 – 10.255.255.255\n    - Class B: 172.16.0.0 – 172.31.255.255\n    - Class C: 192.168.0.0 – 192.168.255.255\n\nNetwork Address Translation (NAT) on the router translates all private IPs to a single public IP when accessing the internet.",
      tip: "Remember that 192.168.x.x and 10.x.x.x are private IPs and cannot be browsed directly from outside your home/office."
    },
    {
      id: 6,
      tag: "Network Configuration",
      difficulty: "Fresher Essential",
      question: "What is a Subnet Mask and Default Gateway?",
      answer: "• Subnet Mask:\n  - A 32-bit number that separates an IP address into two parts: the Network ID and the Host ID.\n  - Example: For 192.168.1.50 with mask 255.255.255.0 (/24), '192.168.1' is the network ID and '.50' is the host ID.\n  - Tells devices whether a destination IP is inside the same local network or outside.\n\n• Default Gateway:\n  - The node or router interface on a local network that serves as the access point or 'doorway' to other networks (the internet).\n  - When a computer needs to send packets to an IP outside its local subnet, it sends them to the Default Gateway's IP (e.g. 192.168.1.1).",
      tip: "Default Gateway is your router's local IP address (the doorway out of your LAN)."
    },
    {
      id: 7,
      tag: "DHCP",
      difficulty: "Fresher Essential",
      question: "What is DHCP and how does the DORA process work?",
      answer: "DHCP (Dynamic Host Configuration Protocol) is a network management protocol that automatically assigns IP addresses, subnet masks, default gateways, and DNS servers to devices connecting to a network.\n\nThe 4-Step DORA Process:\n1. Discover: Client broadcasts a DHCPDISCOVER message looking for an available DHCP server.\n2. Offer: DHCP server responds with a DHCPOFFER containing an available IP address lease.\n3. Request: Client broadcasts a DHCPREQUEST accepting the offered IP address.\n4. Acknowledge: Server sends a DHCPACK acknowledging the lease. The client can now use the IP.",
      tip: "Remember the acronym D-O-R-A: Discover, Offer, Request, Acknowledge."
    },
    {
      id: 8,
      tag: "DNS",
      difficulty: "Fresher Essential",
      question: "What is DNS and how does domain name resolution work step-by-step?",
      answer: "DNS (Domain Name System) translates human-friendly domain names (e.g. www.google.com) into computer-readable IP addresses (142.250.190.46).\n\nStep-by-step resolution:\n1. Local Cache: Browser checks local cache and OS hosts file.\n2. Recursive Resolver (ISP): If not cached, query is sent to ISP's DNS resolver.\n3. Root Nameserver: Resolver asks a Root server ('.'), which points to the TLD nameserver.\n4. TLD Nameserver: Resolver asks the '.com' TLD server, which points to the authoritative nameserver.\n5. Authoritative Nameserver: Holds the actual DNS records and returns the final IP address.\n6. Browser connects directly to the IP address via HTTP/HTTPS.",
      tip: "DNS is often described as the 'phonebook of the Internet'."
    },
    {
      id: 9,
      tag: "Hardware Addressing",
      difficulty: "Fresher Essential",
      question: "What is a MAC Address and how does it differ from an IP Address?",
      answer: "• MAC Address (Media Access Control):\n  - Physical hardware address permanently burned into the Network Interface Card (NIC) by the manufacturer.\n  - 48 bits displayed as 6 pairs of hexadecimal digits (e.g. 00:1A:2B:3C:4D:5E).\n  - Operates at Data Link Layer (Layer 2).\n  - Unchangeable identifier of the physical device.\n\n• IP Address:\n  - Logical address assigned dynamically by network software (DHCP) or network admins.\n  - Changes depending on which network the device connects to.\n  - Operates at Network Layer (Layer 3).\n\nAnalogy: Your MAC address is like your Social Security Number / DNA (fixed forever); your IP address is like your current postal mailing address (changes when you move).",
      tip: "MAC address = permanent physical identity; IP address = changeable logical location."
    },
    {
      id: 10,
      tag: "Network Hardware",
      difficulty: "Fresher Essential",
      question: "What is the difference between a Hub, a Switch, and a Router?",
      answer: "• Hub (Layer 1 - Physical):\n  - Unintelligent device. Receives a packet on one port and blindly broadcasts it out to ALL other ports.\n  - Creates collisions, security risks, and wastes bandwidth.\n\n• Switch (Layer 2 - Data Link):\n  - Intelligent device. Inspects incoming frames, reads destination MAC addresses, and forwards data ONLY to the specific target device's port.\n  - Connects devices within the SAME local network (LAN).\n\n• Router (Layer 3 - Network):\n  - Inspects IP packets and routes traffic BETWEEN DIFFERENT networks (e.g. connecting your home LAN to the external Internet WAN).\n  - Determines the best path for data packets.",
      tip: "Hub broadcasts to everyone; Switch sends to specific MAC inside a LAN; Router connects different networks together."
    },
    {
      id: 11,
      tag: "Protocols",
      difficulty: "Fresher Essential",
      question: "What is the difference between TCP and UDP protocols?",
      answer: "• TCP (Transmission Control Protocol):\n  - Connection-Oriented: Establishes a 3-Way Handshake (SYN, SYN-ACK, ACK) before data transfer.\n  - Reliable: Guarantees packet delivery, retransmits lost packets, and ensures packets arrive in correct order.\n  - Slower overhead.\n  - Used for: Web browsing (HTTP/HTTPS), file transfers (FTP), email (SMTP).\n\n• UDP (User Datagram Protocol):\n  - Connectionless: Sends packets ('fire and forget') without establishing a connection.\n  - Unreliable: No delivery confirmation, no retransmission, no order guarantee.\n  - Blazing fast and low latency.\n  - Used for: Video streaming, online gaming, VoIP calls, DNS queries.",
      tip: "TCP guarantees delivery (reliable, slower); UDP prioritizes speed over reliability (streaming, gaming)."
    },
    {
      id: 12,
      tag: "Ports & Protocols",
      difficulty: "Fresher Essential",
      question: "What are common well-known network port numbers every IT support tech should know?",
      answer: "Ports identify specific services/applications on a machine (0 to 1023 are Well-Known ports):\n• Port 20 / 21: FTP (File Transfer Protocol)\n• Port 22: SSH (Secure Shell) & SFTP\n• Port 23: Telnet (Unencrypted remote CLI)\n• Port 25: SMTP (Simple Mail Transfer Protocol - sending email)\n• Port 53: DNS (Domain Name System - UDP/TCP)\n• Port 67 / 68: DHCP (Dynamic Host Configuration Protocol)\n• Port 80: HTTP (Unencrypted web traffic)\n• Port 110: POP3 (Receiving email)\n• Port 143: IMAP (Receiving email)\n• Port 443: HTTPS (Encrypted secure web traffic)\n• Port 3389: RDP (Windows Remote Desktop Protocol)",
      tip: "Port 22 (SSH), Port 53 (DNS), Port 80 (HTTP), Port 443 (HTTPS), and Port 3389 (RDP) are the top 5 asked in interviews."
    },
    {
      id: 13,
      tag: "Diagnostic Tools",
      difficulty: "Fresher Essential",
      question: "What is the ping command and what protocol does it use?",
      answer: "The 'ping' command is a primary network diagnostic utility used to test the reachability of a host on an IP network and measure round-trip time (RTT).\n\nProtocol Used:\n• Uses ICMP (Internet Control Message Protocol), which operates at Layer 3.\n\nHow it works:\n1. The sender sends an ICMP Echo Request packet to the target IP.\n2. If reachable, the target returns an ICMP Echo Reply packet.\n3. Output shows: Packets sent/received, packet loss percentage, and latency in milliseconds (ms).\n\nKey Diagnostic: 'ping 127.0.0.1' tests your computer's local TCP/IP stack (loopback address) without sending data over any physical wire.",
      tip: "Mention pinging 127.0.0.1 (loopback) to verify that your own local NIC and TCP/IP stack are functioning."
    },
    {
      id: 14,
      tag: "Diagnostic Tools",
      difficulty: "Fresher Essential",
      question: "What is the tracert (traceroute) command and when do you use it?",
      answer: "tracert (Windows) or traceroute (Linux/macOS) is a command-line tool that displays the exact path (list of intermediate router hops) packets take to reach a destination host.\n\nHow it works:\n• Uses ICMP packets with an incrementing TTL (Time to Live) value starting at 1.\n• Each router along the path decrements the TTL by 1. When TTL reaches 0, the router drops the packet and sends back an 'ICMP Time Exceeded' message, revealing its IP address and response time.\n\nWhen to use it:\nWhen a website or server is unreachable, tracert pinpoints the EXACT router hop where traffic is failing or where severe latency/bottlenecks begin.",
      tip: "tracert identifies WHERE along the path a network connection drops or encounters high latency."
    },
    {
      id: 15,
      tag: "Diagnostic Tools",
      difficulty: "Fresher Essential",
      question: "What is the ipconfig command and what does ipconfig /flushdns do?",
      answer: "ipconfig (Interface Configuration) is a Windows command-line tool used to display the current TCP/IP network configuration values.\n\nKey Variations:\n• ipconfig: Displays basic IPv4/IPv6 address, Subnet Mask, and Default Gateway.\n• ipconfig /all: Displays full detailed configuration including MAC address, DHCP server IP, and DNS servers.\n• ipconfig /release: Releases the current DHCP IP address lease.\n• ipconfig /renew: Requests a fresh new IP address lease from the DHCP server.\n• ipconfig /flushdns: Clears and resets the local Windows DNS client resolver cache. Essential when a website has migrated to a new IP or when outdated cached DNS records cause connectivity errors.",
      tip: "Mention 'ipconfig /flushdns'—it is the first command support technicians run when a user cannot open a specific domain."
    },
    {
      id: 16,
      tag: "VLANs",
      difficulty: "Core Concept",
      question: "What is a VLAN (Virtual Local Area Network) and why is it used?",
      answer: "A VLAN is a logical grouping of network devices configured on a managed switch that behave as if they are connected to the same physical wire, regardless of their physical location.\n\nWhy it is used:\n• Security: Separates sensitive departments (e.g. HR and Finance) from guest Wi-Fi or student networks on the same physical switch.\n• Broadcast Control: Reduces broadcast traffic domains, improving network performance.\n• Cost Savings: Multiple departments share the same physical switches and cabling without needing separate hardware infrastructure.\n• Easy Administration: Moving a staff member's desk does not require re-cabling; simply reassign their switch port to their department's VLAN.",
      tip: "VLANs segment a single physical switch into multiple logical, isolated virtual networks."
    },
    {
      id: 17,
      tag: "Remote Connectivity",
      difficulty: "Fresher Essential",
      question: "What is a VPN (Virtual Private Network) and how does it protect remote connections?",
      answer: "A VPN is a service that establishes a secure, encrypted tunnel between a user's device and a private corporate network or the internet over an unsecured public connection (like home broadband or coffee shop Wi-Fi).\n\nHow it works:\n• Tunneling & Encapsulation: Encloses private network packets inside public transport packets.\n• Encryption: Scrambles all transmitted data using strong algorithms (AES-256), making it unreadable to ISPs, hackers, or eavesdroppers.\n• Remote Access: Allows employees working from home to access internal company file shares and databases securely as if they were physically sitting in the office.",
      tip: "A VPN creates an encrypted tunnel that makes a remote home computer appear as though it is physically on the office LAN."
    },
    {
      id: 18,
      tag: "Directory Services",
      difficulty: "Core Concept",
      question: "What is Active Directory (AD) and what is a Domain Controller in Windows Server?",
      answer: "Active Directory (AD) is a directory service developed by Microsoft for Windows domain networks that stores information about network objects (users, computers, groups, printers) in a centralized database.\n\nKey Concepts:\n• Domain Controller (DC): The dedicated Windows Server that runs Active Directory Domain Services (AD DS). It authenticates and authorizes all users and computers in the Windows domain.\n• Group Policy Objects (GPO): Allows system administrators to enforce security settings, software installations, and desktop configurations across thousands of computers simultaneously from one screen.\n• Single Sign-On (SSO): A user logs into any office computer with their single corporate username and password.",
      tip: "Active Directory provides centralized user authentication and management across an entire organization."
    },
    {
      id: 19,
      tag: "NAT",
      difficulty: "Core Concept",
      question: "What is NAT (Network Address Translation) and why is it essential?",
      answer: "NAT is a method used by routers to modify network address information in IP packet headers while in transit across a traffic routing device.\n\nWhy it is essential:\n• Conserves IPv4 Addresses: Millions of devices inside homes and offices use private IP addresses (192.168.x.x). NAT maps all those private IPs to a SINGLE public IP address provided by the ISP.\n• Security: Hides internal private IP addresses from the public internet, preventing outside users from directly initiating connections to internal workstations.\n\nPAT (Port Address Translation / NAT Overload): Assigns unique source port numbers to each internal device so the router knows which computer requested which webpage.",
      tip: "NAT is the primary reason the internet didn't run out of IPv4 addresses decades ago."
    },
    {
      id: 20,
      tag: "Troubleshooting",
      difficulty: "Fresher Essential",
      question: "How do you troubleshoot a user saying 'I have No Internet Connection'?",
      answer: "A systematic step-by-step troubleshooting workflow (from Layer 1 upwards):\n1. Check Physical Layer (Layer 1): Is the Ethernet cable plugged in securely? Are the link lights blinking? Is Wi-Fi enabled?\n2. Check IP Configuration: Open command prompt, run 'ipconfig'. Do they have a valid IP (192.168.x.x) or an APIPA self-assigned IP (169.254.x.x - meaning DHCP failed)?\n3. Ping Loopback: Run 'ping 127.0.0.1' to verify the local network card (NIC) is working.\n4. Ping Default Gateway: Run 'ping <router_ip>'. If it fails, problem is with the local router or Wi-Fi.\n5. Ping External Public IP: Run 'ping 8.8.8.8' (Google DNS). If this succeeds, internet connectivity is alive!\n6. Ping Domain Name: Run 'ping google.com'. If pinging 8.8.8.8 worked but google.com fails, the problem is DNS failure! Run 'ipconfig /flushdns' or change DNS servers.",
      tip: "This is the #1 desktop support interview scenario! Reciting these 6 logical steps in order guarantees an offer."
    },
    {
      id: 21,
      tag: "Cabling",
      difficulty: "Fresher Essential",
      question: "What is the difference between Cat5e, Cat6 ethernet cables and Fiber Optic cables?",
      answer: "• Cat5e (Category 5 Enhanced):\n  - Twisted-pair copper cabling.\n  - Max Speed: Up to 1 Gbps (Gigabit).\n  - Max Distance: 100 meters.\n  - Standard for basic home and older office networks.\n\n• Cat6:\n  - Thicker copper with internal separator spline to reduce crosstalk/interference.\n  - Max Speed: Up to 10 Gbps (for distances up to 55m; 1 Gbps up to 100m).\n  - Standard for modern enterprise office cabling.\n\n• Fiber Optic Cable:\n  - Transmits pulses of LIGHT through glass or plastic fibers instead of electrical signals.\n  - Speeds: 10 Gbps, 40 Gbps, 100+ Gbps over kilometers.\n  - Immune to electromagnetic interference (EMI) and radio frequency interference.",
      tip: "Copper cables (Cat5e/Cat6) transmit electrical signals; Fiber optic transmits pulses of light and is immune to EMI."
    },
    {
      id: 22,
      tag: "Wi-Fi Security",
      difficulty: "Fresher Essential",
      question: "What is the difference between WEP, WPA2, and WPA3 Wi-Fi security protocols?",
      answer: "• WEP (Wired Equivalent Privacy):\n  - Obsolete and extremely insecure. Flawed 40-bit key that can be cracked in minutes with automated tools. Should NEVER be used.\n\n• WPA2 (Wi-Fi Protected Access 2):\n  - Standard Wi-Fi security introduced in 2004 using AES encryption.\n  - WPA2-Personal (Pre-Shared Key / password) and WPA2-Enterprise (802.1X with RADIUS server for corporate environments).\n  - Vulnerable to the KRACK (Key Reinstallation Attack).\n\n• WPA3:\n  - Latest Wi-Fi standard (introduced in 2018).\n  - Uses Simultaneous Authentication of Equals (SAE) to protect against offline dictionary brute-force attacks.\n  - Enforces 128-bit/192-bit enterprise-grade encryption.",
      tip: "WEP is deprecated and broken; WPA2 is common with AES; WPA3 is the modern gold standard."
    },
    {
      id: 23,
      tag: "Remote Support",
      difficulty: "Fresher Essential",
      question: "What is Remote Desktop Protocol (RDP) and how do IT Support specialists use it?",
      answer: "RDP (Remote Desktop Protocol) is a proprietary Microsoft protocol operating over port 3389 that allows a user to access and control the graphical desktop interface of a remote Windows PC over a network.\n\nHow Support Specialists use it:\n• Remote Troubleshooting: Fix software bugs, configure drivers, and install patches directly on remote user workstations without walking to their physical desk.\n• Server Administration: Manage headless Windows servers located in distant data centers.\n• Security: RDP should never be exposed directly to the public internet without an RDP Gateway, VPN, or Multi-Factor Authentication (MFA).",
      tip: "Always remember: RDP operates on TCP Port 3389."
    },
    {
      id: 24,
      tag: "PC Hardware Troubleshooting",
      difficulty: "Fresher Essential",
      question: "How do you diagnose and fix a Windows computer that is running extremely slow?",
      answer: "Step-by-step diagnostic process:\n1. Check Task Manager (Ctrl + Shift + Esc):\n   • Check CPU, Memory (RAM), and Disk utilization percentages.\n   • Identify resource-hogging processes; terminate suspicious tasks.\n2. Check Startup Programs: Disable unnecessary background applications in the Startup tab.\n3. Check Storage / Disk Space: Ensure the C: drive has at least 15–20% free space. Run Disk Cleanup / Storage Sense to remove temporary files.\n4. Check Storage Drive Health: Check if the system has an old mechanical HDD (recommend upgrading to an SSD) and run 'chkdsk' to check for bad sectors.\n5. Scan for Malware: Run a full offline scan using Windows Defender or Malwarebytes.\n6. Update Drivers & OS: Check Windows Update for pending patches and driver updates.",
      tip: "Upgrading from an HDD to an SSD and adding more RAM are the two most impactful hardware fixes for a slow computer."
    },
    {
      id: 25,
      tag: "System Failures",
      difficulty: "Fresher Essential",
      question: "What is a BSOD (Blue Screen of Death) in Windows and how do you investigate it?",
      answer: "A BSOD (Stop Error) occurs when the Windows OS encounters a critical kernel-level error that it cannot recover from safely, forcing a halt to prevent hardware damage or data corruption.\n\nHow to investigate:\n1. Note the Stop Code: Read the error name (e.g. CRITICAL_PROCESS_DIED, IRQL_NOT_LESS_OR_EQUAL, MEMORY_MANAGEMENT).\n2. Note the Failing Driver: Often lists a specific file (e.g. nvlddmkm.sys points to NVIDIA graphics driver).\n3. Analyze Minidump Files: Use tools like BlueScreenView or WinDbg to inspect the memory dump file in C:\\Windows\\Minidump\\.\n4. Common Causes & Fixes:\n   - Faulty hardware: Run Windows Memory Diagnostic (mdsched.exe) to test RAM.\n   - Corrupted drivers: Boot into Safe Mode and roll back or update drivers.\n   - Corrupted system files: Run 'sfc /scannow' and 'DISM /Online /Cleanup-Image /RestoreHealth'.",
      tip: "Mention analyzing minidump files with BlueScreenView or WinDbg—this is advanced professional support knowledge!"
    }
  ],

  "ui-ux-design": [
    {
      id: 1,
      tag: "Foundations",
      difficulty: "Fresher Essential",
      question: "What is the difference between UI (User Interface) and UX (User Experience) design?",
      answer: "• UI (User Interface) Design:\n  - Focuses on the visual, aesthetic, and interactive elements of a product that users see and touch.\n  - Elements: Colors, typography, buttons, icons, spacing, animations, and image layouts.\n  - Goal: Make the product visually stunning, consistent, and intuitive.\n\n• UX (User Experience) Design:\n  - Focuses on the overall journey, usability, and feeling a user has when interacting with the product.\n  - Elements: User research, user journey flows, wireframing, information architecture, usability testing.\n  - Goal: Make solving the user's problem as effortless, smooth, and pleasant as possible.\n\nAnalogy: UX is the engine, skeleton, and ergonomics of a car; UI is the paint job, dashboard styling, leather seats, and steering wheel design.",
      tip: "UX is how it works; UI is how it looks and feels. Great products require both."
    },
    {
      id: 2,
      tag: "Design Thinking",
      difficulty: "Fresher Essential",
      question: "What is the Design Thinking Process and what are its 5 stages?",
      answer: "Design Thinking is a human-centered, iterative problem-solving methodology that seeks to understand user needs, challenge assumptions, and redefine problems.\n\nThe 5 Stages (developed by Stanford d.school):\n1. Empathize: Research your users' real pain points and needs through interviews and observations.\n2. Define: State the user's problem clearly (e.g., 'Freshers struggle to find curated entry-level jobs without experience').\n3. Ideate: Brainstorm a wide range of creative potential solutions without judgment.\n4. Prototype: Build low-fidelity and high-fidelity mockups or interactive screens.\n5. Test: Put prototypes in front of real users, gather feedback, and iterate.",
      tip: "Memorize the 5 stages: Empathize -> Define -> Ideate -> Prototype -> Test."
    },
    {
      id: 3,
      tag: "User Research",
      difficulty: "Fresher Essential",
      question: "What is a User Persona and why is it important in product design?",
      answer: "A User Persona is a semi-fictional archetype representing a key segment of your target audience, built using real data gathered from user interviews and research.\n\nKey Components of a Persona:\n• Demographic details: Age, education, occupation, location.\n• Goals & Motivations: What they want to achieve (e.g., 'Wants to land a first developer job within 3 months').\n• Pain Points & Frustrations: What obstacles they face (e.g., 'Overwhelmed by conflicting online tutorials').\n• Tech literacy: How comfortable they are with digital tools.\n\nImportance:\nKeeps design teams focused on designing for real human needs rather than personal preferences or assumptions.",
      tip: "Personas prevent designers from designing for themselves—they anchor decisions to real user needs."
    },
    {
      id: 4,
      tag: "Design Deliverables",
      difficulty: "Fresher Essential",
      question: "What is the difference between a Wireframe, a Mockup, and a Prototype?",
      answer: "These represent the three evolution phases of digital design:\n\n1. Wireframe (Low-Fidelity Skeleton):\n• Black and white simple structural blueprint showing page layout and content placement.\n• No colors, fonts, or images. Focuses purely on structure and functionality.\n\n2. Mockup (Mid to High-Fidelity Visual):\n• Static, polished visual representation of the final design.\n• Includes brand colors, typography, real photography, icons, and micro-spacing.\n\n3. Prototype (Interactive Simulation):\n• An interactive, clickable model of the mockup that simulates the real app experience.\n• Buttons can be clicked, pages navigate, and modal popups trigger, allowing realistic user testing before coding.",
      tip: "Wireframe = structural blueprint; Mockup = static visual graphic; Prototype = clickable interactive model."
    },
    {
      id: 5,
      tag: "Design Tools",
      difficulty: "Fresher Essential",
      question: "What is Figma and why is it the industry-standard tool for UI/UX designers?",
      answer: "Figma is a cloud-based, collaborative interface design and prototyping tool that runs directly in modern web browsers as well as desktop apps.\n\nWhy it dominates the industry:\n• Real-Time Collaboration: Multiple designers, product managers, and developers can work inside the exact same file simultaneously (like Google Docs for design).\n• Cloud-Based: No file version conflicts (e.g. final_v2_final.fig); works seamlessly on Windows, Mac, and Linux.\n• Component Systems & Auto Layout: Powerful reusable components and dynamic auto-resizing layouts.\n• Dev Mode: Built-in developer handoff mode providing clean CSS, iOS Swift, and Android XML/Compose code snippets.\n• Prototyping: Integrated clickable transitions and smart animations.",
      tip: "Real-time browser-based collaboration and seamless developer handoff are the #1 reasons Figma overtook Sketch and Adobe XD."
    },
    {
      id: 6,
      tag: "Figma Features",
      difficulty: "Core Concept",
      question: "What are Components, Variants, and Auto Layout in Figma?",
      answer: "• Components:\n  - Reusable design elements (like buttons, navbars, cards) created once as a 'Main Component'.\n  - Editing the Main Component instantly updates every 'Instance' across the entire project.\n\n• Variants:\n  - Grouping different states or variations of a single component together (e.g. Button states: Primary, Secondary, Hover, Disabled, Loading) with simple dropdown property toggles.\n\n• Auto Layout:\n  - A dynamic layout property inspired by CSS Flexbox.\n  - Automatically adjusts button width when button text changes, or rearranges cards when new items are added, with padding and gap controls.",
      tip: "Mention that Auto Layout mirrors CSS Flexbox—developers love designers who use Auto Layout because designs translate 1:1 to code."
    },
    {
      id: 7,
      tag: "Visual Design",
      difficulty: "Fresher Essential",
      question: "What is Visual Hierarchy and how do UI designers guide a user's attention?",
      answer: "Visual Hierarchy is the arrangement of visual design elements in an order of visual importance, naturally guiding the user's eye to the most critical information first.\n\nTechniques to establish Visual Hierarchy:\n1. Size & Scale: Larger elements (h1 headings, hero banners) catch attention before smaller body text.\n2. Color & Contrast: High-contrast primary brand colors (e.g., vibrant pink on dark background) draw clicks to Call-to-Action (CTA) buttons.\n3. Typography Weight: Bold text vs regular weight creates clear distinctions between titles and subtitles.\n4. Spacing (White Space): Elements surrounded by generous white space stand out prominently.\n5. Reading Patterns: Aligning elements with natural eye scanning patterns like the F-Pattern (text-heavy pages) and Z-Pattern (landing pages).",
      tip: "Mention F-Pattern and Z-Pattern—they prove you understand how human eye tracking works on screens."
    },
    {
      id: 8,
      tag: "Color Theory",
      difficulty: "Fresher Essential",
      question: "What is the 60-30-10 Color Rule in UI design?",
      answer: "The 60-30-10 Rule is a classic visual design proportion guideline used to create balanced, harmonious, and visually pleasing color palettes:\n\n• 60% Dominant Neutral Color:\n  - Forms the foundation of the design (backgrounds, main canvas surfaces).\n  - Usually a clean off-white, light gray, or sleek dark mode shade (#0f172a).\n\n• 30% Secondary Brand Color:\n  - Supports the primary color and adds structure (cards, sidebars, headers, subheadings).\n  - Provides visual contrast.\n\n• 10% Accent Color:\n  - The eye-catching highlight color reserved strictly for Call-to-Action (CTA) buttons, notifications, active tabs, and key badges.\n  - Should have strong contrast to draw user action.",
      tip: "Explain that the 10% accent color should be used sparingly so it retains its power to attract clicks."
    },
    {
      id: 9,
      tag: "Typography",
      difficulty: "Fresher Essential",
      question: "What is Typography in UI design and what is the difference between Serif and Sans-Serif fonts?",
      answer: "Typography is the art and technique of arranging type (fonts, sizes, line heights, letter spacing) to make written language legible, readable, and visually appealing.\n\nKey Differences:\n• Serif Fonts:\n  - Have small decorative strokes or 'feet' at the ends of character letters (e.g. Times New Roman, Georgia, Merriweather).\n  - Feel traditional, formal, elegant, and trustworthy (widely used in print, editorial newspapers, law firms).\n\n• Sans-Serif Fonts ('Sans' = without):\n  - Clean fonts without decorative feet (e.g. Inter, Roboto, Arial, Poppins).\n  - Clean, modern, geometric, and significantly easier to read on low-resolution digital screens and smartphones.\n  - Dominant choice for modern web and mobile UI design.",
      tip: "Modern digital interfaces overwhelmingly use Sans-Serif (like Inter or Roboto) for clean readability on smartphone screens."
    },
    {
      id: 10,
      tag: "Layout & Spacing",
      difficulty: "Fresher Essential",
      question: "What is White Space (Negative Space) and why is it essential for great UI design?",
      answer: "White Space (or Negative Space) is the empty, unmarked space between and around elements, paragraphs, buttons, cards, and images on a page.\n\nWhy it is essential:\n• Improves Readability: Ample line spacing and paragraph margins increase reading comprehension by over 20%.\n• Reduces Cognitive Overload: Cluttered screens overwhelm users; white space allows the human brain to process information calmly.\n• Creates Elegance & Premium Feel: Luxury brands (Apple) use generous white space to convey sophistication and focus.\n• Establishes Relationships: Proximity principle (elements close together are perceived as related; elements separated by white space are distinct).",
      tip: "Emphasize that White Space is NOT 'wasted space'—it is an active design tool that improves comprehension."
    },
    {
      id: 11,
      tag: "Accessibility",
      difficulty: "Core Concept",
      question: "What is Web Accessibility (a11y) and what are WCAG color contrast standards?",
      answer: "Web Accessibility (a11y) is the practice of designing and developing websites and apps so that people with disabilities (visual, auditory, motor, or cognitive impairments) can perceive, navigate, and interact with them.\n\nWCAG (Web Content Accessibility Guidelines) Color Contrast Standards:\n• Measures the luminance ratio between foreground text and background color.\n• Level AA (Standard Requirement):\n  - Normal text: Minimum contrast ratio of 4.5:1.\n  - Large text (18pt+ or bold 14pt+): Minimum contrast ratio of 3:1.\n• Level AAA (Enhanced Requirement):\n  - Normal text: Minimum contrast ratio of 7:1.\n\nOther a11y practices: Proper Alt text on images, keyboard navigability (Tab key), and visible focus indicators.",
      tip: "Mention the minimum AA contrast ratio of 4.5:1 for regular text—interviewers test this exact number."
    },
    {
      id: 12,
      tag: "Responsive Principles",
      difficulty: "Fresher Essential",
      question: "What is Mobile-First Design and why is it a best practice?",
      answer: "Mobile-First Design is an approach where designers design the mobile screen experience first, and then progressively enhance the design for larger screens (tablets, laptops, and wide desktop monitors).\n\nWhy it is a best practice:\n• Forces Content Prioritization: Small mobile screens have no room for fluff. Designers must identify the absolute core essential features first.\n• Traffic Dominance: Over 60% of all worldwide web traffic originates from mobile smartphones.\n• Performance: Designing for mobile constraints results in lighter, faster-loading web products.\n• Scaling Up is Easier: Expanding a focused mobile layout to desktop is much cleaner than trying to cram an oversized desktop layout into a tiny phone screen.",
      tip: "Explain that designing for mobile first forces you to eliminate clutter and prioritize what truly matters to users."
    },
    {
      id: 13,
      tag: "Design Systems",
      difficulty: "Core Concept",
      question: "What is a Design System and what are its main components?",
      answer: "A Design System is a single source of truth containing reusable design components, guidelines, tokens, and standards that enables product teams to design and build consistent digital products at scale.\n\nMain Components:\n1. Design Tokens: Fundamental values (color hex codes, font sizes, spacing scale, border radii, shadows).\n2. Component Library: Reusable UI elements (buttons, inputs, modals, cards, badges) built in Figma and code.\n3. Brand & Style Guidelines: Logo usage, voice and tone, iconography, and photography standards.\n4. Documentation: Rules explaining WHEN and HOW to use each component correctly.\n\nFamous Examples: Google Material Design, Apple Human Interface Guidelines (HIG), Shopify Polaris.",
      tip: "Name Google Material Design and Apple HIG as classic design systems."
    },
    {
      id: 14,
      tag: "UX Mapping",
      difficulty: "Core Concept",
      question: "What is a User Flow diagram and how does it differ from a User Journey Map?",
      answer: "• User Flow (Micro Technical View):\n  - A step-by-step flowchart diagram illustrating the exact path and screens a user navigates through to complete a specific task (e.g., 'User logs in -> selects job category -> clicks interview questions -> views question card').\n  - Focuses on screen decisions, button clicks, and system feedback.\n\n• User Journey Map (Macro Emotional View):\n  - A visual timeline detailing the entire end-to-end user experience, including their thoughts, emotions, pain points, and expectations at every phase of using the service.\n  - Focuses on the user's emotional state and broader motivations.",
      tip: "User Journey = feelings, mindset, and broad timeline; User Flow = specific screen steps and clickable branches."
    },
    {
      id: 15,
      tag: "Usability Testing",
      difficulty: "Core Concept",
      question: "What is Usability Testing and how is it conducted with real users?",
      answer: "Usability Testing is the practice of evaluating a product by testing it on representative users to identify usability flaws, points of friction, and areas for improvement.\n\nHow it is conducted:\n1. Prepare Test Plan: Define specific scenarios and realistic tasks for users (e.g., 'Find and bookmark 3 interview questions for Web Development').\n2. Recruit Participants: Select users matching your target audience persona.\n3. Think-Aloud Protocol: Ask participants to narrate their thoughts out loud as they interact with the prototype.\n4. Observe & Do Not Guide: The researcher observes where the user hesitates, gets stuck, or makes errors without giving clues.\n5. Analyze Findings: Tally task success rates, time-on-task, and user satisfaction, then iterate on the design.",
      tip: "The golden rule of usability testing: 'Observe what users DO, not just what they SAY, and never help them during the test!'"
    },
    {
      id: 16,
      tag: "UX Optimization",
      difficulty: "Fresher Essential",
      question: "What is A/B Testing in product design?",
      answer: "A/B Testing (Split Testing) is a user research experiment where two variants of a webpage or screen (Version A vs Version B) are shown to different segments of users simultaneously to determine which version performs better on a specific metric.\n\nExample:\n• Version A (Control): Original green 'Enroll Now' button with standard copy.\n• Version B (Variant): Vibrant pink 'Start Free Trial' button with an arrow icon.\n• Metric: Click-Through Rate (CTR) and signups.\n\nWhen statistical significance is reached, if Version B converts 15% more users, Version B is permanently rolled out to 100% of users.",
      tip: "Only test ONE variable at a time in A/B testing (e.g. only button color, or only headline) so you know what caused the improvement."
    },
    {
      id: 17,
      tag: "Interaction Design",
      difficulty: "Fresher Essential",
      question: "What are Micro-interactions in UI and why do they delight users?",
      answer: "Micro-interactions are small, subtle functional animations and feedback moments that occur when a user performs a single specific task inside an interface.\n\nExamples:\n• Heart icon animating and turning red when liking a post on Instagram.\n• A toggle switch smoothly sliding between Dark and Light mode.\n• A pull-to-refresh spinner spinning when updating a feed.\n• A subtle button press scale down (shrink slightly) on click.\n• Password strength meter changing color from red to green.\n\nWhy they delight users:\n• Provides immediate visual feedback confirming that the user's action was registered.\n• Makes digital interfaces feel responsive, human, alive, and enjoyable.",
      tip: "The Twitter/Instagram animated like heart is the classic example of a micro-interaction."
    },
    {
      id: 18,
      tag: "Information Architecture",
      difficulty: "Core Concept",
      question: "What is Information Architecture (IA) and how is Card Sorting used to build it?",
      answer: "Information Architecture (IA) is the structural design of shared information environments: the practice of organizing, structuring, labeling, and organizing content so users can find what they are looking for quickly.\n\nCard Sorting Technique:\n• A UX research method used to design intuitive navigation menus and categories.\n• Participants are given physical cards (or digital cards) with topics/features written on them.\n• Open Card Sorting: Participants sort cards into groups and create their own category names.\n• Closed Card Sorting: Participants organize cards into predefined category buckets.\n• Results help designers create navigation menus that match the user's mental model.",
      tip: "Card sorting is the primary UX method used to discover how real users naturally categorize information."
    },
    {
      id: 19,
      tag: "Design Evolution",
      difficulty: "Fresher Essential",
      question: "What is the difference between Skeuomorphism, Flat Design, and Neumorphism?",
      answer: "Three historical visual design trends:\n\n• Skeuomorphism (Early iOS 2007–2012):\n  - Designs imitated real-world physical textures, shadows, leather, and bevels (e.g. calculator looked like plastic keys, notes app had yellow lined paper).\n  - Helped early smartphone users understand touch screens.\n\n• Flat Design (2013–Present):\n  - Completely discarded physical textures in favor of clean 2D graphics, bold colors, and simple typography.\n  - Fast to load and crisp on all screen sizes.\n\n• Neumorphism (Soft UI):\n  - Blends flat design with realistic soft inner and outer drop shadows, making elements appear as if they are extruded from or debossed into the background surface.",
      tip: "Explain that early iOS used skeuomorphism to teach non-tech users how touchscreen buttons worked."
    },
    {
      id: 20,
      tag: "UX Psychology",
      difficulty: "Core Concept",
      question: "What is Hick's Law and Fitts's Law in user interface design?",
      answer: "Two fundamental psychological laws of UX:\n\n• Hick's Law:\n  - The time it takes for a person to make a decision increases logarithmically with the NUMBER and COMPLEXITY of choices.\n  - UI Takeaway: Don't overwhelm users with 20 options on one page. Keep dropdowns concise, break forms into multi-step wizards, and highlight recommended choices.\n\n• Fitts's Law:\n  - The time required to rapidly move to a target area is a function of the DISTANCE to the target and the SIZE of the target.\n  - UI Takeaway: Make primary action buttons (like 'Submit' or 'Next') large and place them close to thumb reach on mobile screens.",
      tip: "Hick's Law = fewer choices make decisions faster; Fitts's Law = larger, closer targets are easier to click."
    },
    {
      id: 21,
      tag: "Navigation Design",
      difficulty: "Fresher Essential",
      question: "What are Breadcrumbs in website navigation and when should they be used?",
      answer: "Breadcrumbs are a secondary navigation scheme that displays the user's current location within a website's hierarchy as a trail of links (e.g. Home > Jobs > Web Development > Interview Questions).\n\nWhen they should be used:\n• On websites with deep hierarchical structures (3+ levels deep), such as e-commerce stores or educational portals.\n• When users arrive directly on internal pages via search engine links.\n\nBenefits:\n• Reduces clicks: Users can jump directly back to any parent category in one click.\n• Enhances orientation: Users never feel lost.\n• Improves SEO: Search engines display breadcrumb trails in search snippets.",
      tip: "Breadcrumbs are inspired by the Hansel and Gretel fairy tale of leaving breadcrumbs to find the way back."
    },
    {
      id: 22,
      tag: "Form Design",
      difficulty: "Fresher Essential",
      question: "What are best practices for designing user-friendly forms and error messages?",
      answer: "Forms are the primary conversion point of digital apps. Best practices:\n• Single-Column Layout: Single-column forms are completed significantly faster than multi-column forms.\n• Clear Floating Labels: Avoid using placeholder text as labels because placeholders disappear once the user starts typing.\n• Inline Validation: Validate fields in real time as the user leaves the input (on blur), not only after clicking submit.\n• Helpful Error Messages: Clearly state WHAT went wrong and HOW to fix it (e.g. 'Password must be at least 8 characters with 1 number' rather than 'Invalid input').\n• Show/Hide Password Toggle: Reduces mobile typing errors dramatically.\n• Group Related Fields: Use multi-step progress indicators for long applications.",
      tip: "Never rely strictly on placeholder text—it disappears when typing and confuses users who forget what field they are in."
    },
    {
      id: 23,
      tag: "Collaboration",
      difficulty: "Fresher Essential",
      question: "How do UI/UX designers handle constructive design critique and feedback?",
      answer: "Professional designers treat feedback as an essential collaborative tool:\n1. Separate Ego from Design: Remember that feedback is about the product and user goals, not a personal attack.\n2. Ask Clarifying Questions: Understand the root concern (e.g., 'What specific problem do you see with this layout for mobile users?').\n3. Anchor to User Data & Research: Justify design choices using user testing findings, personas, and accessibility standards rather than subjective taste.\n4. Collaborate on Solutions: Involve developers early to check technical feasibility.\n5. Iterate & Test: If disagreement persists, propose an A/B test or quick usability test to let real user behavior decide.",
      tip: "Mention that data and user testing settle design arguments better than opinions."
    },
    {
      id: 24,
      tag: "Developer Handoff",
      difficulty: "Core Concept",
      question: "How do UI/UX designers prepare and hand off designs to Front-End Developers?",
      answer: "Smooth developer handoff ensures designs are coded accurately without frustration:\n1. Use Figma Dev Mode: Organize screens into clear flows, naming layers with clear semantics.\n2. Document Component States: Provide all states for interactive elements (Default, Hover, Active, Disabled, Loading, Error).\n3. Responsive Breakpoints: Provide screen designs for Mobile (375px), Tablet (768px), and Desktop (1280px+).\n4. Design Tokens: Share color variables, font sizes, spacing increments, and border radii matching the CSS system.\n5. Exportable Assets: Mark all icons and illustrations as exportable SVG or WebP.\n6. Handoff Walkthrough Meeting: Walk through flows with developers and address questions about edge cases.",
      tip: "Always provide all states of a component (Hover, Focus, Disabled, Error)—developers need every state to write complete code."
    },
    {
      id: 25,
      tag: "UX Metrics",
      difficulty: "Core Concept",
      question: "What is SUS (System Usability Scale) and NPS (Net Promoter Score)?",
      answer: "Two standard UX measurement frameworks:\n\n• SUS (System Usability Scale):\n  - A quick, 10-item questionnaire scored on a 5-point Likert scale (Strongly Disagree to Strongly Agree) to measure perceived ease of use.\n  - Results yield a single usability score from 0 to 100.\n  - An average SUS score is 68. Scores above 80 indicate excellent usability.\n\n• NPS (Net Promoter Score):\n  - A single question: 'How likely are you to recommend this product to a friend or colleague on a scale of 0 to 10?'\n  - Promoters (9-10), Passives (7-8), Detractors (0-6).\n  - NPS = % Promoters minus % Detractors. Measures overall user loyalty and satisfaction.",
      tip: "The industry average SUS score is 68. Mentioning this benchmark demonstrates formal UX knowledge."
    }
  ]
};

export default function InterviewQuestions() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  // Active category: defaults to web-development
  const currentCatId = categoryId || "web-development";

  // Find active category metadata
  const currentCategory = useMemo(() => {
    return (
      interviewCategories.find((cat) => cat.id === currentCatId) ||
      interviewCategories[0]
    );
  }, [currentCatId]);

  // Questions for current category (25 questions)
  const allCategoryQuestions = useMemo(() => {
    return interviewQuestionsData[currentCategory.id] || [];
  }, [currentCategory.id]);

  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [expandedIds, setExpandedIds] = useState([1]); // First question open by default
  const [copiedId, setCopiedId] = useState(null);

  // Local storage tracker for prepared questions
  const [preparedMap, setPreparedMap] = useState(() => {
    try {
      const saved = localStorage.getItem("careercraft_prepared_questions");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Extract unique tags for tag filter
  const categoryTags = useMemo(() => {
    const tags = new Set();
    allCategoryQuestions.forEach((q) => {
      if (q.tag) tags.add(q.tag);
    });
    return ["All", ...Array.from(tags)];
  }, [allCategoryQuestions]);

  // Reset filters and scroll on category change
  useEffect(() => {
    setSearchTerm("");
    setSelectedTag("All");
    setExpandedIds([1]); // Expand 1st question on category switch
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentCatId]);

  // Save prepared status to localStorage
  const togglePrepared = (qId) => {
    const key = `${currentCategory.id}_${qId}`;
    setPreparedMap((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      try {
        localStorage.setItem(
          "careercraft_prepared_questions",
          JSON.stringify(updated)
        );
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // Check if a question is prepared
  const isQuestionPrepared = (qId) => {
    return !!preparedMap[`${currentCategory.id}_${qId}`];
  };

  // Calculate count of prepared questions for current category
  const preparedCount = useMemo(() => {
    return allCategoryQuestions.filter(
      (q) => !!preparedMap[`${currentCategory.id}_${q.id}`]
    ).length;
  }, [allCategoryQuestions, preparedMap, currentCategory.id]);

  // Filter questions based on search term and tag
  const filteredQuestions = useMemo(() => {
    return allCategoryQuestions.filter((q) => {
      const matchesTag =
        selectedTag === "All" || q.tag.toLowerCase() === selectedTag.toLowerCase();
      const matchesSearch =
        searchTerm.trim() === "" ||
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.tag.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [allCategoryQuestions, selectedTag, searchTerm]);

  // Handle switching categories
  const handleCategorySwitch = (catId) => {
    navigate(`/interview-questions/${catId}`);
  };

  // Toggle individual question accordion
  const toggleAccordion = (qId) => {
    setExpandedIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  // Expand / Collapse all
  const areAllExpanded =
    filteredQuestions.length > 0 &&
    filteredQuestions.every((q) => expandedIds.includes(q.id));

  const handleToggleAll = () => {
    if (areAllExpanded) {
      setExpandedIds([]);
    } else {
      setExpandedIds(filteredQuestions.map((q) => q.id));
    }
  };

  // Copy question helper
  const handleCopy = (q) => {
    const textToCopy = `Question: ${q.question}\n\nAnswer: ${q.answer}\n\nInterview Tip: ${q.tip}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Progress percentage
  const progressPercent = Math.round(
    (preparedCount / (allCategoryQuestions.length || 1)) * 100
  );

  return (
    <div className="iq-page-container">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* 2. Top Hero Banner */}
      <section
        className="iq-hero-banner"
        style={{
          
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="iq-hero-inner">
          <span className="iq-hero-badge">🎯 Career Craft Interview Prep</span>
          <h1 className="iq-hero-title">
            Technical <span>Interview Q&amp;A</span>
          </h1>
          <p className="iq-hero-subtitle">
            Master 25 beginner-friendly, role-specific technical interview questions
            for each of the 10 core IT job tracks. Specially curated for college
            students and freshers to ace campus placements and tech job interviews.
          </p>

          <div className="iq-hero-stats">
            <div className="iq-hero-stat-item">
              <span>📚</span>
              <span><strong>10</strong> IT Categories</span>
            </div>
            <div className="iq-hero-stat-item">
              <span>💡</span>
              <span><strong>25</strong> Questions Per Track</span>
            </div>
            <div className="iq-hero-stat-item">
              <span>🚀</span>
              <span><strong>250</strong> Total Questions</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Selector Bar (Switch Across All 10 IT Categories) */}
      <div className="iq-category-bar-wrapper">
        <div className="iq-category-bar">
          {interviewCategories.map((cat) => {
            const isActive = cat.id === currentCategory.id;
            return (
              <button
                key={cat.id}
                className={`iq-cat-pill ${isActive ? "active" : ""}`}
                onClick={() => handleCategorySwitch(cat.id)}
              >
                <span className="iq-cat-pill-icon">{cat.icon}</span>
                <span>{cat.title}</span>
                <span className="iq-cat-pill-badge">25 Qs</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Main Content Area */}
      <main className="iq-main-content">
        {/* Navigation Breadcrumb Row */}
        <div className="iq-nav-row">
          <Link to="/jobs" className="iq-back-btn">
            ← Back to IT Job Categories
          </Link>

          <Link to={`/jobs/${currentCategory.id}`} className="iq-track-link">
            📖 Open {currentCategory.title} Learning Path →
          </Link>
        </div>

        {/* Active Category Header Card */}
        <div className="iq-category-card">
          <div className="iq-cat-card-top">
            <div className="iq-cat-card-info">
              <div className="iq-cat-card-icon">{currentCategory.icon}</div>
              <div className="iq-cat-card-text">
                <h2>{currentCategory.title} Interview Questions</h2>
                <span className="iq-cat-card-role">Target Role: {currentCategory.role}</span>
              </div>
            </div>

            <div className="iq-cat-card-actions">
              <Link
                to={`/jobs/${currentCategory.id}`}
                className="iq-action-btn-primary"
              >
                <span>🚀 Study Learning Path</span>
              </Link>
              <button
                className="iq-action-btn-secondary"
                onClick={handleToggleAll}
              >
                <span>{areAllExpanded ? "🔼 Collapse All" : "🔽 Expand All"}</span>
              </button>
            </div>
          </div>

          <p className="iq-cat-card-desc">{currentCategory.desc}</p>

          {/* Student Progress Tracker */}
          <div className="iq-progress-box">
            <div className="iq-progress-header">
              <span>
                Preparation Progress: <strong>{preparedCount}</strong> of{" "}
                <strong>{allCategoryQuestions.length}</strong> questions prepared
              </span>
              <span>{progressPercent}% Complete</span>
            </div>
            <div className="iq-progress-track">
              <div
                className="iq-progress-fill"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Search, Tag Filter, and Action Toolbar */}
        <div className="iq-toolbar">
          <div className="iq-toolbar-top">
            <div className="iq-search-wrapper">
              <span className="iq-search-icon">🔍</span>
              <input
                type="text"
                className="iq-search-input"
                placeholder={`Search ${currentCategory.title} questions by keyword...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="iq-search-clear"
                  onClick={() => setSearchTerm("")}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="iq-toolbar-actions">
              <button
                className="iq-btn-toggle-all"
                onClick={handleToggleAll}
              >
                <span>{areAllExpanded ? "▲ Collapse All" : "▼ Expand All"}</span>
              </button>
            </div>
          </div>

          {/* Filter by Topic Tag */}
          <div className="iq-filter-tags-row">
            <span className="iq-filter-label">Filter by Topic:</span>
            {categoryTags.map((tag) => (
              <button
                key={tag}
                className={`iq-filter-chip ${selectedTag === tag ? "active" : ""}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Questions List */}
        {filteredQuestions.length === 0 ? (
          <div className="iq-empty-state">
            <div className="iq-empty-icon">🔎</div>
            <h3 className="iq-empty-title">No matching questions found</h3>
            <p className="iq-empty-desc">
              Try searching with a different keyword or select "All" topics above.
            </p>
            <button
              className="iq-empty-reset-btn"
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="iq-questions-list">
            {filteredQuestions.map((q) => {
              const isExpanded = expandedIds.includes(q.id);
              const isPrepared = isQuestionPrepared(q.id);

              return (
                <div
                  key={q.id}
                  id={`q-${q.id}`}
                  className={`iq-card ${isExpanded ? "expanded" : ""} ${
                    isPrepared ? "prepared" : ""
                  }`}
                >
                  {/* Question Card Header (Click to Expand / Collapse) */}
                  <div
                    className="iq-card-header"
                    onClick={() => toggleAccordion(q.id)}
                  >
                    <div className="iq-card-header-left">
                      <div className="iq-q-number">#{q.id}</div>
                      <div className="iq-q-meta">
                        <div className="iq-q-tag-row">
                          <span className="iq-tag-pill">{q.tag}</span>
                          <span className="iq-difficulty-pill">
                            {q.difficulty}
                          </span>
                          {isPrepared && (
                            <span className="iq-prepared-badge">
                              ✓ Prepared
                            </span>
                          )}
                        </div>
                        <h3 className="iq-q-title">{q.question}</h3>
                      </div>
                    </div>

                    <div className="iq-card-header-right">
                      <div className="iq-chevron">▼</div>
                    </div>
                  </div>

                  {/* Question Card Body (Answer Panel) */}
                  {isExpanded && (
                    <div className="iq-card-body">
                      <div className="iq-answer-title">
                        <span>💡</span>
                        <span>Answer &amp; Explanation</span>
                      </div>

                      <div className="iq-answer-content">
                        {q.answer.split("\n\n").map((paragraph, pIdx) => {
                          if (paragraph.includes("•")) {
                            const lines = paragraph.split("\n");
                            const intro = lines[0].startsWith("•")
                              ? null
                              : lines[0];
                            const bulletLines = lines.filter((line) =>
                              line.startsWith("•") || line.startsWith("  -")
                            );

                            return (
                              <div key={pIdx}>
                                {intro && <p>{intro}</p>}
                                <ul>
                                  {bulletLines.map((bLine, bIdx) => (
                                    <li key={bIdx}>
                                      {bLine.replace(/^[•\s-]+/, "")}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          }
                          return <p key={pIdx}>{paragraph}</p>;
                        })}
                      </div>

                      {/* Practical Interview Tip Callout */}
                      {q.tip && (
                        <div className="iq-tip-box">
                          <span className="iq-tip-icon">💡</span>
                          <div className="iq-tip-body">
                            <strong className="iq-tip-title">
                              Interviewer Insight / Pro Tip:
                            </strong>
                            {q.tip}
                          </div>
                        </div>
                      )}

                      {/* Question Card Footer (Actions) */}
                      <div className="iq-card-footer">
                        <button
                          className={`iq-mark-btn ${
                            isPrepared ? "checked" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePrepared(q.id);
                          }}
                        >
                          <span>{isPrepared ? "✓" : "○"}</span>
                          <span>
                            {isPrepared
                              ? "Marked as Prepared"
                              : "Mark as Prepared"}
                          </span>
                        </button>

                        <button
                          className="iq-copy-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(q);
                          }}
                        >
                          <span>{copiedId === q.id ? "✓ Copied!" : "📋 Copy Q&A"}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Quick Jump Navigator to Questions 1-25 */}
        <div className="iq-quick-jump-box">
          <div className="iq-quick-jump-header">
            <span>⚡ Quick Jump to Question (#1 - #25):</span>
            <span style={{ fontSize: "0.82rem", color: "var(--iq-text-muted)" }}>
              Green = Prepared
            </span>
          </div>
          <div className="iq-quick-jump-grid">
            {allCategoryQuestions.map((q) => {
              const isPrepared = isQuestionPrepared(q.id);
              return (
                <button
                  key={q.id}
                  className={`iq-jump-btn ${isPrepared ? "prepared" : ""}`}
                  onClick={() => {
                    if (!expandedIds.includes(q.id)) {
                      setExpandedIds((prev) => [...prev, q.id]);
                    }
                    const elem = document.getElementById(`q-${q.id}`);
                    if (elem) {
                      elem.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                  }}
                  title={`Jump to Q#${q.id}`}
                >
                  {q.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner with Learning Path Link */}
        <div className="iq-bottom-banner">
          <div className="iq-bottom-banner-text">
            <h3>Ready to dive deeper into {currentCategory.title}?</h3>

          </div>


        </div>
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
