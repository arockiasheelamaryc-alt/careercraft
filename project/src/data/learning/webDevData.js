// Learning Path Data for Category 1: Web Development
export const webDevData = {
  id: "web-development",
  title: "Web Development",
  icon: "🌐",
  role: "Web Developer (Frontend / Full Stack)",
  summary: "Master the foundational and modern tools that power the web, from HTML & CSS to JavaScript, React, Node.js, and databases.",
  technologies: [
    {
      id: "html5",
      name: "HTML5",
      tagline: "The Skeleton and Structure of the World Wide Web",
      beginnerFriendly: "Think of a website like a human body. HTML is the skeleton—it defines where the head, bones, and organs are located before adding clothes or movement.",
      whatIsIt: "HTML5 (HyperText Markup Language 5) is the latest standard markup language used to structure content on the World Wide Web. It organizes text, multimedia, buttons, hyperlinks, and interactive elements into semantic elements that web browsers can render.",
      whyUsed: "Without HTML, web browsers would not know how to display text, images, or interactive input fields. HTML5 introduces semantic tags (<header>, <article>, <section>) that improve SEO and accessibility, built-in multimedia support (<video>, <audio>), and mobile compatibility without third-party plugins.",
      whereUsed: "Every single webpage, web application, email template, and hybrid mobile application on the internet uses HTML at its core.",
      mainFeatures: [
        "Semantic Structure: Clear tags like <header>, <nav>, <main>, <section>, <article>, <footer>.",
        "Native Multimedia: Direct embedding of audio and video with <audio> and <video> without Flash.",
        "Advanced Form Controls: Inputs with types like email, date, number, range, and built-in validation.",
        "Canvas & SVG: 2D drawing and scalable vector graphics directly in the browser.",
        "Geolocation & Web Storage: APIs for local storage (localStorage, sessionStorage) and GPS positioning."
      ],
      importantConcepts: [
        {
          title: "DOM (Document Object Model)",
          desc: "The tree structure created by the browser representing the parsed HTML document, which JavaScript interacts with to modify content dynamically."
        },
        {
          title: "Semantic HTML",
          desc: "Using elements that describe their meaning to both browser and developer (e.g., <button> instead of a clickable <div>)."
        },
        {
          title: "Attributes & Metadata",
          desc: "Modifiers like id, class, src, href, alt, and <meta> tags in the <head> that provide search engine indexing and responsive viewport information."
        },
        {
          title: "Block vs Inline Elements",
          desc: "Block elements (<div>, <p>, <h1>) start on a new line and take full width; inline elements (<span>, <a>, <strong>) take only as much width as necessary."
        }
      ],
      howItWorks: "When you enter a URL, the browser requests an HTML file from the web server. The browser engine parses the HTML tags line-by-line, constructs the DOM (Document Object Model) tree, applies CSS styles, and renders the visual layout on your screen.",
      stepByStep: [
        "Step 1: Set up the doctype declaration `<!DOCTYPE html>` to tell the browser to use HTML5.",
        "Step 2: Create root `<html>`, `<head>` (for title, meta tags, external CSS links), and `<body>` tags.",
        "Step 3: Organize content using semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.",
        "Step 4: Add typography elements (`<h1>` through `<h6>`, `<p>`, `<ul>`, `<ol>`).",
        "Step 5: Incorporate interactive elements like anchor links `<a>`, media `<img>`, `<video>`, and user forms `<form>` with `<input>` and `<button>`."
      ],
      syntax: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Career Craft Student Profile</title>
</head>
<body>
  <header>
    <h1>Welcome to Career Craft</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <main>
    <article>
      <h2>Learn Web Development</h2>
      <p>HTML5 forms the solid foundation of all web projects.</p>
    </article>
  </main>
  <footer>
    <p>&copy; 2026 Career Craft Learning Portal</p>
  </footer>
</body>
</html>`,
      examples: [
        {
          title: "Semantic Card Component Layout",
          code: `<section class="profile-card">
  <img src="student.jpg" alt="Profile avatar of Alex" />
  <h3>Alex Kumar</h3>
  <p>Aspiring Full Stack Web Developer</p>
  <a href="mailto:alex@example.com">Contact Alex</a>
</section>`
        },
        {
          title: "Interactive Registration Form with HTML5 Validation",
          code: `<form action="/submit-registration" method="POST">
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" required placeholder="John Doe" />

  <label for="email">Student Email:</label>
  <input type="email" id="email" name="email" required placeholder="john@college.edu" />

  <label for="gradYear">Graduation Year:</label>
  <input type="number" id="gradYear" min="2024" max="2030" value="2026" />

  <button type="submit">Register for Learning Track</button>
</form>`
        }
      ],
      practicalExamples: "Building a college event landing page with registration inputs, seminar agenda tables, speaker bio cards, and embedded video preview of the upcoming tech symposium.",
      realWorldUsage: "Major platforms like GitHub, Wikipedia, and LinkedIn rely on strict semantic HTML to ensure screen readers, search engine crawlers, and mobile browsers render information instantly and accurately.",
      importantPoints: [
        "Always declare `<meta name='viewport' content='width=device-width, initial-scale=1.0'>` for mobile responsiveness.",
        "Always provide descriptive `alt` attributes for `<img>` tags for accessibility and SEO.",
        "Avoid using deprecated tags like `<font>`, `<center>`, or `<b>` purely for styling; use CSS instead."
      ],
      thingsToLearn: [
        "Doctype declaration and basic document boilerplate structure",
        "Semantic tags: header, nav, main, section, article, aside, footer",
        "Forms, inputs (text, email, password, radio, checkbox), and validation",
        "Tables, ordered/unordered lists, and clean hyperlinks",
        "Audio, video, iframe embedding, and responsive images with srcset"
      ],
      miniPracticalTasks: [
        "Task 1: Create a single-page student resume using only semantic HTML5 tags.",
        "Task 2: Build a contact form with fields for name, email, phone, semester, and message, with HTML5 required attributes.",
        "Task 3: Embed an educational YouTube video or local mp4 video with play controls."
      ]
    },
    {
      id: "css3",
      name: "CSS3",
      tagline: "Visual Styling, Flexbox, Grid, and Responsive Layouts",
      beginnerFriendly: "If HTML is the human skeleton, CSS is the skin, hair, clothes, and makeup. It decides colors, fonts, margins, animations, and how great you look on phones versus laptops.",
      whatIsIt: "CSS3 (Cascading Style Sheets 3) is the stylesheet language used to specify the presentation, layout, visual aesthetics, and responsive behavior of HTML documents across different screen sizes.",
      whyUsed: "HTML looks plain and unstyled by default. CSS allows developers to create beautiful typography, modern color schemes, glassmorphism, responsive grid layouts, and smooth animations without changing the HTML structure.",
      whereUsed: "Used everywhere alongside HTML to style websites, web applications, dashboards, e-commerce storefronts, and mobile app web-views.",
      mainFeatures: [
        "Box Model: Structured margin, border, padding, and content dimensions.",
        "Flexbox (Flexible Box Layout): 1D layout model for alignment, spacing, and centering.",
        "CSS Grid: 2D layout model for complex rows and columns.",
        "Media Queries: Adapting layouts seamlessly for mobile, tablet, and desktop screens.",
        "Transitions & Keyframe Animations: Creating smooth hover effects and eye-catching motion.",
        "CSS Custom Properties (Variables): Reusable design tokens for consistent themes."
      ],
      importantConcepts: [
        {
          title: "The CSS Box Model",
          desc: "Every HTML element is considered a rectangular box composed of Content, Padding (space inside), Border (surrounding edge), and Margin (space outside)."
        },
        {
          title: "Specificity & Cascading Order",
          desc: "Rules determining which style wins when conflicts occur: Inline styles > ID selectors > Class selectors > Element tags."
        },
        {
          title: "Flexbox Layout",
          desc: "Allows dynamic distribution of space along a primary main axis and cross axis using display: flex, justify-content, and align-items."
        },
        {
          title: "Responsive Design & Media Queries",
          desc: "Applying custom styles conditionally depending on viewport width (e.g., @media (max-width: 768px))."
        }
      ],
      howItWorks: "The browser downloads CSS files linked in the HTML `<head>`. The CSS engine parses selectors, matches them to DOM elements, calculates computed styles according to cascading and inheritance rules, and paints the pixels on the display.",
      stepByStep: [
        "Step 1: Link your external stylesheet in the `<head>` using `<link rel='stylesheet' href='styles.css'>`.",
        "Step 2: Reset default browser margins with `* { box-sizing: border-box; margin: 0; padding: 0; }`.",
        "Step 3: Define typography, colors, and global CSS variables on `:root`.",
        "Step 4: Lay out the page using Flexbox for navigation bars and CSS Grid for cards and content columns.",
        "Step 5: Apply media queries at standard breakpoints (768px, 1024px) for mobile-friendly viewports."
      ],
      syntax: `/* Define Design Tokens */
:root {
  --primary-color: #2563eb;
  --bg-gradient: linear-gradient(135deg, #1e3a8a, #3b82f6);
  --text-dark: #0f172a;
}

/* Base Reset & Box Sizing */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Flexbox Navigation */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Responsive Grid for Cards */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

/* Media Query for Small Screens */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }
}`,
      examples: [
        {
          title: "Centering an Element Vertically & Horizontally",
          code: `.center-box {
  display: flex;
  justify-content: center; /* Horizontally */
  align-items: center;     /* Vertically */
  min-height: 100vh;
}`
        },
        {
          title: "Smooth Button Hover Animation",
          code: `.action-btn {
  background-color: var(--primary-color);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.action-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4);
}`
        }
      ],
      practicalExamples: "Styling an e-commerce product catalog with responsive card grids, hover badges, discount tags, price alignment, and a sticky mobile checkout bar.",
      realWorldUsage: "Tech companies like Stripe, Airbnb, and Apple use advanced CSS3 animations and modular CSS variables to craft award-winning user experiences that delight millions of visitors.",
      importantPoints: [
        "Always use `box-sizing: border-box` to avoid element size overflows caused by padding and borders.",
        "Prefer relative units like `rem`, `em`, and `%` over fixed `px` for scalable, accessible typography and layouts.",
        "Keep selector specificity low by relying on meaningful class names rather than deep tag nesting."
      ],
      thingsToLearn: [
        "CSS Box Model and calculation of widths, heights, margins, and paddings",
        "Flexbox layout properties (flex-direction, justify-content, align-items, flex-wrap)",
        "CSS Grid (grid-template-columns, gap, repeat, minmax)",
        "Responsive design breakpoints and mobile-first media queries",
        "Transitions, transforms (scale, translate, rotate), and keyframe animations"
      ],
      miniPracticalTasks: [
        "Task 1: Build a centered pricing card component with hover elevation and shadow effects.",
        "Task 2: Build a responsive 3-column product showcase that collapses into 1 column on screens below 768px.",
        "Task 3: Create a pulsating notification badge using CSS `@keyframes`."
      ]
    },
    {
      id: "javascript",
      name: "JavaScript",
      tagline: "The Programming Language of the Web and Interactive Logic",
      beginnerFriendly: "If HTML is the skeleton and CSS is the clothes, JavaScript is the brain and nervous system. It makes buttons click, calculates sums, fetches data from servers, and brings pages alive.",
      whatIsIt: "JavaScript is a versatile, high-level, interpreted programming language supporting event-driven, functional, and object-oriented programming paradigms. It is the premier client-side scripting language supported natively by all web browsers.",
      whyUsed: "JavaScript allows web pages to react dynamically to user input without requiring a full page reload. It powers form validation, animations, interactive charts, real-time chats, and asynchronous server communication.",
      whereUsed: "Client-side web browsers, backend servers (Node.js), mobile applications (React Native), and desktop software (Electron like VS Code).",
      mainFeatures: [
        "Event-Driven Architecture: Listens to mouse clicks, keystrokes, scrolls, and network events.",
        "DOM Manipulation: Programmatically creates, updates, and deletes HTML elements and CSS styles.",
        "Modern ES6+ Syntax: Arrow functions, template literals, destructuring, promises, async/await.",
        "Asynchronous Programming: Fetching data from REST APIs using Promises and async/await.",
        "JSON Native Support: Serializing and parsing JSON data easily with JSON.parse() and JSON.stringify()."
      ],
      importantConcepts: [
        {
          title: "Variables & Scope",
          desc: "let (block-scoped, reassignable), const (block-scoped, constant binding), and legacy var (function-scoped)."
        },
        {
          title: "Asynchronous JS & Event Loop",
          desc: "How JavaScript remains non-blocking on a single thread using the call stack, web APIs, callback queue, and event loop."
        },
        {
          title: "Closures & First-Class Functions",
          desc: "Functions can be stored in variables, passed as arguments, and retain access to outer lexical scope variables."
        },
        {
          title: "DOM Manipulation & Events",
          desc: "Selecting elements via document.querySelector() and attaching listeners with addEventListener()."
        }
      ],
      howItWorks: "Web browsers include a JavaScript engine (such as Google Chrome's V8 or Mozilla's SpiderMonkey). The engine parses the JS code into an Abstract Syntax Tree (AST), performs Just-In-Time (JIT) compilation to machine code, and executes it on the browser's main thread.",
      stepByStep: [
        "Step 1: Write script in a `.js` file and include it in HTML with `<script src='app.js' defer></script>`.",
        "Step 2: Understand fundamental data types: string, number, boolean, object, array, null, undefined.",
        "Step 3: Master control flow with conditionals (`if/else`, `switch`) and loops (`for`, `map`, `forEach`).",
        "Step 4: Interact with the DOM: select elements, alter text and styles, listen to user clicks.",
        "Step 5: Master asynchronous operations by consuming data from APIs using `fetch()` and `async/await`."
      ],
      syntax: `// Modern ES6+ JavaScript Fundamentals
const student = {
  name: "Alex",
  track: "Full Stack Development",
  skills: ["HTML", "CSS", "JS"],
  isEnrolled: true
};

// Arrow Function with Template Literals
const getGreeting = ({ name, track }) => {
  return \`Hello \${name}, welcome to the \${track} learning track!\`;
};

// Asynchronous Fetch with Error Handling
async function fetchTechNews() {
  try {
    const response = await fetch("https://api.sampleapis.com/futurama/info");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// DOM Event Listener
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#enroll-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert(getGreeting(student));
    });
  }
});`,
      examples: [
        {
          title: "Array Filtering and Mapping (Functional Programming)",
          code: `const marks = [45, 78, 92, 33, 85, 60];

// Filter passing marks (>= 50) and format into strings
const passingSummary = marks
  .filter(score => score >= 50)
  .map(score => \`Score: \${score}/100\`);

console.log(passingSummary);`
        },
        {
          title: "Interactive Counter (DOM Manipulation)",
          code: `let count = 0;
const counterDisplay = document.getElementById("counter-val");
const incrementBtn = document.getElementById("inc-btn");

incrementBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
  counterDisplay.style.color = count > 10 ? "green" : "black";
});`
        }
      ],
      practicalExamples: "Implementing a dynamic shopping cart calculation that updates item subtotals, tax, and grand total in real-time as users modify quantities.",
      realWorldUsage: "Powering interactive user interfaces for platforms like YouTube (video buffering and playback controls), Twitter/X (infinite feed updates), and Gmail (instant email composition).",
      importantPoints: [
        "Always use `const` by default, and `let` only when a variable must be reassigned; avoid `var`.",
        "Always handle asynchronous errors with `try...catch` blocks when using `async/await`.",
        "Be aware of type coercion: always compare values using strict equality `===` instead of loose `==`."
      ],
      thingsToLearn: [
        "Variables, primitive and reference data types, operators",
        "Functions: regular functions, arrow functions, higher-order functions",
        "Array methods: map, filter, reduce, find, some, every",
        "DOM querying, event listeners, and form validation",
        "Promises, async/await, fetch API, and JSON handling"
      ],
      miniPracticalTasks: [
        "Task 1: Build a simple digital clock displaying the current hours, minutes, and seconds, updating every second.",
        "Task 2: Create a to-do list where users can type a task, click 'Add', and click on any task to delete it.",
        "Task 3: Fetch random user profiles from `https://randomuser.me/api/` and display their name, email, and photo in a card."
      ]
    },
    {
      id: "reactjs",
      name: "React.js",
      tagline: "Component-Based Frontend Library for Modern Web Interfaces",
      beginnerFriendly: "Imagine building a Lego castle. Instead of re-carving the whole castle every time you want a new tower, you snap together reusable Lego bricks. In React, those bricks are called Components.",
      whatIsIt: "React is an open-source JavaScript library developed by Meta for building dynamic, fast, and reusable user interfaces, primarily single-page web applications (SPAs).",
      whyUsed: "Traditional websites reload the whole page upon every user action. React uses a Virtual DOM and component architecture, re-rendering only the precise UI pieces that have changed. This yields lightning-fast performance and clean, maintainable codebases.",
      whereUsed: "Used by leading tech enterprises including Meta (Facebook & Instagram), Netflix, Airbnb, Uber, and WhatsApp Web.",
      mainFeatures: [
        "Component-Driven Architecture: Break down complex UIs into small, self-contained, testable functions.",
        "JSX Syntax: Seamlessly write HTML markup within JavaScript.",
        "Virtual DOM: Efficient in-memory representation of real DOM that minimizes expensive browser re-paints.",
        "React Hooks: Built-in state and lifecycle management (useState, useEffect, useMemo, useCallback).",
        "Unidirectional Data Flow: Data flows cleanly downwards from parent components to child components via props."
      ],
      importantConcepts: [
        {
          title: "State vs Props",
          desc: "Props are read-only properties passed from parent to child. State is internal data managed within a component that triggers a re-render when changed."
        },
        {
          title: "The Virtual DOM & Reconciliation",
          desc: "React creates an in-memory virtual tree. When state changes, it diffs the old and new trees (reconciliation) and updates only the modified real DOM nodes."
        },
        {
          title: "React Hooks",
          desc: "Special functions like useState (for managing reactive data) and useEffect (for handling side effects like data fetching or timers)."
        },
        {
          title: "Single Page Applications (SPAs)",
          desc: "Websites that load a single HTML shell and use client-side routing (React Router) to switch views without reloading the browser."
        }
      ],
      howItWorks: "Developers write JSX components. Babel/Vite transpiles JSX into pure JavaScript `React.createElement()` calls. When state updates occur, React evaluates the render tree in memory, diffs it against previous state, and commits minimal batch updates to the browser DOM.",
      stepByStep: [
        "Step 1: Set up a React project using Vite (`npm create vite@latest my-app -- --template react`).",
        "Step 2: Understand component anatomy: functional components returning JSX.",
        "Step 3: Pass information between components using `props`.",
        "Step 4: Manage local dynamic data using `const [state, setState] = useState(initialValue)`.",
        "Step 5: Perform side-effects such as fetching data from APIs using `useEffect` with appropriate dependency arrays."
      ],
      syntax: `import React, { useState, useEffect } from "react";

// Reusable Child Component
function UserBadge({ name, role }) {
  return (
    <div className="badge">
      <h4>{name}</h4>
      <span className="badge-role">{role}</span>
    </div>
  );
}

// Main Parent Component
export default function StudentDashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API Fetch
    setTimeout(() => {
      setCourses(["React Basics", "JavaScript Deep Dive", "Full Stack Project"]);
      setLoading(false);
    }, 1000);
  }, []); // Empty array runs once on mount

  return (
    <div className="dashboard">
      <UserBadge name="Priya Sharma" role="Student Member" />
      <h2>Enrolled Courses</h2>
      {loading ? (
        <p>Loading course content...</p>
      ) : (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      )}
    </div>
  );
}`,
      examples: [
        {
          title: "Interactive Like Button with useState",
          code: `function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={() => setLikes(likes + 1)}>
      👍 Likes: {likes}
    </button>
  );
}`
        },
        {
          title: "Search Filter Component",
          code: `function TechSearch({ allTech }) {
  const [query, setQuery] = useState("");
  const filtered = allTech.filter(t => t.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search technologies..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <ul>
        {filtered.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}`
        }
      ],
      practicalExamples: "Creating an interactive course syllabus viewer where students can click module tabs to view lecture videos, check off completed lessons, and track overall progress.",
      realWorldUsage: "The Netflix web application uses React to render thousands of film titles, previews, and personalized recommendations with fluid transitions and no page reloads.",
      importantPoints: [
        "Never mutate state directly (e.g. do not do `state.push()`); always use setter functions or spread syntax (`[...prev, newItem]`).",
        "Always provide a unique, stable `key` prop when rendering lists with `.map()`.",
        "Be careful with `useEffect` dependency arrays to prevent infinite re-rendering loops."
      ],
      thingsToLearn: [
        "Component creation, JSX syntax, and props passing",
        "useState hook for managing component memory",
        "useEffect hook for data fetching and side effects",
        "Conditional rendering and list mapping with unique keys",
        "React Router for multi-page navigation in SPAs"
      ],
      miniPracticalTasks: [
        "Task 1: Build a character counter text area that shows remaining characters out of 200.",
        "Task 2: Build an accordion FAQ component where clicking a question expands or collapses the answer.",
        "Task 3: Create a weather widget that accepts a city name and displays temperature by fetching from an open API."
      ]
    },
    {
      id: "nodejs",
      name: "Node.js",
      tagline: "JavaScript Runtime Environment for Server-Side and Backend Systems",
      beginnerFriendly: "Historically, JavaScript could only run inside web browser windows. Node.js unlocked JavaScript from the browser cage, allowing it to run directly on computers and cloud servers to build powerful backends.",
      whatIsIt: "Node.js is an open-source, cross-platform runtime environment built on Google Chrome's V8 JavaScript engine. It executes JavaScript code outside a web browser, enabling developers to build scalable server-side web applications.",
      whyUsed: "It enables Full Stack JavaScript (using JS for both frontend and backend). Its asynchronous, non-blocking I/O model makes it lightweight and capable of handling thousands of simultaneous connections with low memory footprint.",
      whereUsed: "Enterprise backends, RESTful API servers, microservices, streaming services (PayPal, Netflix, LinkedIn), and real-time chat servers.",
      mainFeatures: [
        "Non-blocking, Asynchronous I/O: Handles disk reads, network requests, and database queries without halting other incoming requests.",
        "Event-Driven Architecture: Uses an event loop to dispatch actions when operations complete.",
        "V8 Engine Performance: Compiles JavaScript directly into native machine code.",
        "NPM Ecosystem: Access to the world's largest registry of open-source packages and libraries.",
        "Built-in Core Modules: Includes fs (file system), http (web server), path, crypto, and os modules."
      ],
      importantConcepts: [
        {
          title: "The Node.js Event Loop",
          desc: "The mechanism that offloads heavy I/O tasks to system kernel worker threads, executing callbacks when tasks finish."
        },
        {
          title: "NPM (Node Package Manager)",
          desc: "Package manager and dependency tracker defined in package.json and package-lock.json."
        },
        {
          title: "CommonJS vs ES Modules",
          desc: "Traditional require('./module') vs modern ES Module import { x } from './module.js'."
        },
        {
          title: "Streams and Buffers",
          desc: "Efficient mechanisms for processing large chunks of data (e.g. video files, large datasets) piece by piece without loading everything into RAM."
        }
      ],
      howItWorks: "Node.js runs on a single main thread. When a request arrives, Node delegates long-running operations (file reads, database queries) to the Libuv thread pool in the background. The main thread continues serving other clients. Once the background operation finishes, its callback is placed in the event queue and executed.",
      stepByStep: [
        "Step 1: Download and install Node.js LTS from nodejs.org; verify using `node -v` and `npm -v` in terminal.",
        "Step 2: Initialize a new backend project with `npm init -y`.",
        "Step 3: Use built-in modules like `fs` (File System) to read and write files.",
        "Step 4: Install external dependencies using `npm install <package-name>`.",
        "Step 5: Write an HTTP server script and run it using `node server.js` or `nodemon` for auto-restart."
      ],
      syntax: `// Built-in HTTP Server Example in Node.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5000;

const server = http.createServer((req, res) => {
  // Set response header
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/api/status" && req.method === "GET") {
    res.writeHead(200);
    res.end(JSON.stringify({ 
      status: "Online", 
      serverTime: new Date().toISOString(),
      platform: "Career Craft Backend"
    }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Endpoint not found" }));
  }
});

server.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});`,
      examples: [
        {
          title: "Reading and Writing Files Asynchronously",
          code: `const fs = require("fs").promises;

async function manageNotes() {
  try {
    await fs.writeFile("notes.txt", "Career Craft Learning Log: Day 1 Complete.");
    const content = await fs.readFile("notes.txt", "utf-8");
    console.log("File Content:", content);
  } catch (err) {
    console.error("File error:", err);
  }
}

manageNotes();`
        },
        {
          title: "Environment Variables with process.env",
          code: `// Loading configuration safely
const port = process.env.PORT || 8080;
const dbUrl = process.env.DATABASE_URL || "mongodb://localhost:27017/careercraft";

console.log(\`Connecting to \${dbUrl} on port \${port}\`);`
        }
      ],
      practicalExamples: "Creating an automated background file organizer script that scans a downloads folder, detects file extensions (.pdf, .png, .zip), and moves them into organized subfolders.",
      realWorldUsage: "Uber uses Node.js in their core dispatch system to process millions of location updates, passenger ride requests, and driver matching signals concurrently in real time.",
      importantPoints: [
        "Never perform heavy CPU-intensive mathematical calculations on the main thread, as it blocks all other incoming user requests.",
        "Always use `fs.promises` or asynchronous callback functions instead of synchronous methods like `readFileSync()` in production servers.",
        "Keep sensitive secrets (passwords, API keys) out of Git by utilizing `.env` files and `dotenv` package."
      ],
      thingsToLearn: [
        "Node.js architecture and how the Event Loop works",
        "npm commands: init, install, uninstall, update, and devDependencies",
        "Built-in modules: fs, path, os, http, events",
        "Handling asynchronous code with Promises and async/await",
        "Creating simple REST endpoints and processing JSON payloads"
      ],
      miniPracticalTasks: [
        "Task 1: Write a Node.js script that prints your system OS, total RAM, and free RAM using the `os` module.",
        "Task 2: Build a command-line script that accepts a user's name via terminal arguments (`process.argv`) and writes a greeting file.",
        "Task 3: Create a basic Node HTTP server that returns a JSON list of 3 books when visiting `http://localhost:3000/books`."
      ]
    },
    {
      id: "expressjs",
      name: "Express.js",
      tagline: "Fast, Unopinionated, Minimalist Web Framework for Node.js",
      beginnerFriendly: "Building a web server in raw Node.js requires dozens of lines just to parse a URL or handle a POST request. Express acts like a streamlined toolkit that makes creating web APIs quick, organized, and straightforward.",
      whatIsIt: "Express.js is the de facto standard web framework for Node.js. It provides a robust set of features for web and mobile applications, including routing, middleware support, error handling, and template engine integration.",
      whyUsed: "It simplifies building RESTful APIs by standardizing how routes are structured, how request bodies and URL parameters are parsed, and how security headers, CORS, and authentication middlewares are applied.",
      whereUsed: "Thousands of startups, corporate tech teams, and MERN/MEAN stack web applications use Express as their backend server layer.",
      mainFeatures: [
        "Intuitive Routing: Easy definition of HTTP verbs (`app.get`, `app.post`, `app.put`, `app.delete`).",
        "Middleware Pipeline: Chainable functions that inspect, modify, or authenticate requests before reaching routes.",
        "JSON Parsing: Built-in `express.json()` middleware simplifies JSON payload handling.",
        "Error Handling: Centralized middleware for catching and formatting application exceptions.",
        "CORS Support: Easy configuration to allow client applications from other domains to query the API."
      ],
      importantConcepts: [
        {
          title: "Middleware Functions",
          desc: "Functions with access to req (request), res (response), and the next() callback. Used for logging, authentication, rate limiting, and data validation."
        },
        {
          title: "RESTful API Conventions",
          desc: "Using standard HTTP methods: GET (read), POST (create), PUT/PATCH (update), and DELETE (remove) on resource URLs."
        },
        {
          title: "Route Parameters & Query Strings",
          desc: "Capturing dynamic values from URLs via req.params (e.g. /users/:id) and req.query (e.g. /search?q=react)."
        },
        {
          title: "Status Codes & Headers",
          desc: "Returning proper HTTP status codes: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Server Error)."
        }
      ],
      howItWorks: "An incoming HTTP request enters the Express app stack. It sequentially passes through registered global middlewares (e.g., logger, cors, body-parser). The router matches the URL path and HTTP verb, invokes the corresponding controller function, queries the database, and returns a formatted JSON response.",
      stepByStep: [
        "Step 1: Install Express in your project via `npm install express`.",
        "Step 2: Import Express and initialize the application with `const app = express()`.",
        "Step 3: Enable the JSON parsing middleware using `app.use(express.json())`.",
        "Step 4: Define your API endpoints (`app.get('/api/items', (req, res) => ...)`).",
        "Step 5: Start the listener on a designated port (`app.listen(5000, () => ...)`)."
      ],
      syntax: `const express = require("express");
const app = express();
const PORT = 5000;

// Middleware for JSON body parsing
app.use(express.json());

// In-memory data store for demonstration
let students = [
  { id: 1, name: "Aarav", course: "Web Dev" },
  { id: 2, name: "Sneha", course: "Data AI" }
];

// GET: Retrieve all students
app.get("/api/students", (req, res) => {
  res.status(200).json({ success: true, data: students });
});

// GET: Retrieve student by ID
app.get("/api/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }
  res.status(200).json({ success: true, data: student });
});

// POST: Add new student
app.post("/api/students", (req, res) => {
  const { name, course } = req.body;
  if (!name || !course) {
    return res.status(400).json({ success: false, message: "Name and course are required" });
  }
  const newStudent = { id: students.length + 1, name, course };
  students.push(newStudent);
  res.status(201).json({ success: true, data: newStudent });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(\`Career Craft Express API running on port \${PORT}\`);
});`,
      examples: [
        {
          title: "Custom Logging Middleware",
          code: `const requestLogger = (req, res, next) => {
  console.log(\`[\${new Date().toLocaleTimeString()}] \${req.method} \${req.originalUrl}\`);
  next(); // Pass control to the next middleware or route handler
};

app.use(requestLogger);`
        },
        {
          title: "DELETE Endpoint with Status Code",
          code: `app.delete("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = students.length;
  students = students.filter(s => s.id !== id);

  if (students.length === initialLength) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.status(200).json({ message: "Student deleted successfully" });
});`
        }
      ],
      practicalExamples: "Constructing a student authentication and submission API where candidates submit project links, which are validated, saved, and retrieved for evaluation.",
      realWorldUsage: "Fintech startups and e-commerce applications use Express microservices to process user payments, checkout sessions, and webhook alerts from Stripe and PayPal.",
      importantPoints: [
        "Always call `next()` inside custom middlewares unless you are deliberately ending the request by sending a response (`res.send()` or `res.json()`).",
        "Always validate request parameters and input bodies before querying databases to protect against invalid data and injections.",
        "Group routes cleanly into modular files using `express.Router()` for scalable project architectures."
      ],
      thingsToLearn: [
        "Setting up Express applications and configuring ports",
        "Understanding req and res objects, headers, status codes, and params",
        "Writing custom middlewares and utilizing built-in middlewares like express.json()",
        "Structuring modular routes using express.Router()",
        "Connecting Express to databases like MongoDB or MySQL"
      ],
      miniPracticalTasks: [
        "Task 1: Build an Express API with GET /ping that returns `{ message: 'pong', uptime: process.uptime() }`.",
        "Task 2: Build a CRUD API for a student book catalog (create book, get all books, delete book).",
        "Task 3: Add an authorization middleware that checks if the request header contains `x-api-key: secret123`."
      ]
    },
    {
      id: "mysql",
      name: "MySQL",
      tagline: "The World's Most Popular Open-Source Relational Database Management System",
      beginnerFriendly: "Think of an Excel spreadsheet with rows and columns. MySQL is an enterprise-grade engine for managing hundreds of interconnected spreadsheets (called tables) with strict rules, blazing speed, and unbreakable safety.",
      whatIsIt: "MySQL is an open-source Relational Database Management System (RDBMS) based on Structured Query Language (SQL). It stores data in formatted tables consisting of rows and columns, with defined relationships between tables.",
      whyUsed: "It provides robust ACID compliance, proven scalability, high reliability, and data integrity. Used when applications require structured relationships, such as banking transactions, student records, and e-commerce orders.",
      whereUsed: "Facebook, YouTube, Twitter/X, WordPress (powers >40% of the web), Shopify, and thousands of enterprise platforms.",
      mainFeatures: [
        "Relational Data Model: Strict table schemas with primary keys and foreign key constraints.",
        "ACID Compliance: Guarantees Atomicity, Consistency, Isolation, and Durability for transactions.",
        "Powerful SQL Engine: Rich query capabilities including JOINs, GROUP BY, aggregations, and subqueries.",
        "High Performance Indexing: B-Tree and hash indexes that accelerate queries across millions of rows.",
        "Data Security & Replication: User permission management, encrypted connections, and master-slave replication."
      ],
      importantConcepts: [
        {
          title: "Primary Key & Foreign Key",
          desc: "A Primary Key uniquely identifies each row in a table. A Foreign Key references the Primary Key of another table to establish relationships."
        },
        {
          title: "Table JOINs",
          desc: "Combining rows from two or more tables based on a related column (INNER JOIN, LEFT JOIN, RIGHT JOIN)."
        },
        {
          title: "Database Normalization (1NF, 2NF, 3NF)",
          desc: "Organizing columns and tables to eliminate duplicate records and maintain data consistency."
        },
        {
          title: "Indexes & Query Optimization",
          desc: "Special lookup tables that speed up data retrieval at the cost of slight write overhead."
        }
      ],
      howItWorks: "A client application (or backend server) sends an SQL query string over a TCP socket to the MySQL Server. The query parser checks the syntax, the query optimizer selects the most efficient execution plan (utilizing indexes), and the storage engine (like InnoDB) reads or writes data to disk files.",
      stepByStep: [
        "Step 1: Install MySQL Community Server and MySQL Workbench on your system.",
        "Step 2: Connect to the server using `mysql -u root -p` or Workbench GUI.",
        "Step 3: Create a database (`CREATE DATABASE careercraft;`) and select it (`USE careercraft;`).",
        "Step 4: Define tables with appropriate data types (`INT`, `VARCHAR`, `DATE`, `DECIMAL`).",
        "Step 5: Write CRUD queries to insert, read, update, and delete records, and connect Node.js using `mysql2`."
      ],
      syntax: `-- 1. Create Students Table
CREATE TABLE students (
  student_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  enrollment_date DATE DEFAULT (CURRENT_DATE)
);

-- 2. Create Enrollments Table with Foreign Key
CREATE TABLE enrollments (
  enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  course_title VARCHAR(100) NOT NULL,
  score INT DEFAULT 0,
  FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE
);

-- 3. Insert Sample Data
INSERT INTO students (first_name, last_name, email)
VALUES ('Rahul', 'Verma', 'rahul@example.com'),
       ('Ananya', 'Sen', 'ananya@example.com');

INSERT INTO enrollments (student_id, course_title, score)
VALUES (1, 'Full Stack Web Development', 92),
       (2, 'Cloud and DevOps', 88);

-- 4. Query Data with an INNER JOIN
SELECT 
  s.student_id,
  CONCAT(s.first_name, ' ', s.last_name) AS full_name,
  e.course_title,
  e.score
FROM students s
INNER JOIN enrollments e ON s.student_id = e.student_id
WHERE e.score >= 90;`,
      examples: [
        {
          title: "Aggregate Functions and GROUP BY",
          code: `-- Find the average score per course
SELECT 
  course_title, 
  COUNT(student_id) AS total_students,
  AVG(score) AS average_score
FROM enrollments
GROUP BY course_title
HAVING average_score > 80;`
        },
        {
          title: "Connecting to MySQL from Node.js (mysql2)",
          code: `const mysql = require("mysql2/promise");

async function getStudents() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password123",
    database: "careercraft"
  });

  const [rows] = await connection.execute("SELECT * FROM students WHERE student_id = ?", [1]);
  console.log(rows);
  await connection.end();
}`
        }
      ],
      practicalExamples: "Designing an online examination database schema tracking students, test questions, options, student answers, and final graded marks with timestamps.",
      realWorldUsage: "Airbnb stores user booking details, room availability schedules, and host payout histories across clustered MySQL database servers.",
      importantPoints: [
        "Never concatenate user input directly into SQL strings; always use parameterized queries (`?`) to prevent disastrous SQL Injection attacks.",
        "Always define an index on columns frequently queried in `WHERE` clauses or used in `JOIN` conditions.",
        "Perform regular database backups using `mysqldump` to guard against hardware failure or corruption."
      ],
      thingsToLearn: [
        "SQL Data Definition Language (DDL): CREATE, ALTER, DROP",
        "SQL Data Manipulation Language (DML): SELECT, INSERT, UPDATE, DELETE",
        "Filtering and sorting with WHERE, LIKE, ORDER BY, LIMIT",
        "Relationships and JOINs: INNER JOIN, LEFT JOIN, RIGHT JOIN",
        "ACID transactions: START TRANSACTION, COMMIT, ROLLBACK"
      ],
      miniPracticalTasks: [
        "Task 1: Create a database called `college_db` and create a `faculty` table with 5 columns.",
        "Task 2: Write an SQL query to find the 3 highest scoring students in a class.",
        "Task 3: Write an UPDATE query that gives a 5-mark grace bonus to all students scoring between 45 and 49."
      ]
    },
    {
      id: "git-github",
      name: "Git & GitHub",
      tagline: "Distributed Version Control System and Cloud Collaboration Platform",
      beginnerFriendly: "Git is like a video game 'Save Point' for your code. If you make a mistake, you can jump back in time. GitHub is like the cloud where you store those saves and build multiplayer projects with friends.",
      whatIsIt: "Git is a free and open-source distributed version control system designed to track changes in source code during software development. GitHub is a cloud-based hosting service that lets developers store, manage, and collaborate on Git repositories.",
      whyUsed: "It prevents accidental code loss, enables multiple software engineers to work simultaneously on different features without overwriting each other's code, and creates an audit trail of every modification.",
      whereUsed: "Used across virtually 100% of the global software industry by individual freelancers and tech giants like Google, Microsoft, and Amazon.",
      mainFeatures: [
        "Distributed History: Every developer has a complete local clone of the project history on their machine.",
        "Branching and Merging: Seamless creation of isolated branches for new features and bug fixes.",
        "Staging Area: Precise control over which modified files are included in a commit.",
        "Pull Requests (PRs): Structured peer review workflow on GitHub before code merges into production.",
        "GitHub Actions: Automated CI/CD pipelines to build, test, and deploy applications on every push."
      ],
      importantConcepts: [
        {
          title: "Working Directory, Staging, and Repository",
          desc: "The 3 states of Git: modified files in Working Directory -> staged using git add -> permanently recorded in Repository using git commit."
        },
        {
          title: "Branching Strategy",
          desc: "Keeping main/master branch stable while building features on temporary branches (e.g., feature/login-page)."
        },
        {
          title: "Merge Conflicts",
          desc: "Occurs when two developers modify the exact same line in a file; Git pauses and asks the developer to manually pick which change to keep."
        },
        {
          title: "Remote Repositories",
          desc: "A version of your project hosted on the internet (GitHub) accessed via git push and git pull."
        }
      ],
      howItWorks: "Git snapshots the file system over time. Rather than storing diffs of files, it stores a stream of snapshots (commits). Each commit contains a cryptographic SHA-1 hash, the author details, a timestamp, and a pointer to the previous commit.",
      stepByStep: [
        "Step 1: Install Git and configure your identity: `git config --global user.name 'Your Name'` and `git config --global user.email 'you@example.com'`.",
        "Step 2: Initialize a repository in any project folder: `git init`.",
        "Step 3: Check status and stage your changes: `git status` then `git add .`.",
        "Step 4: Commit your changes with a descriptive message: `git commit -m 'Initial commit of Career Craft portal'`.",
        "Step 5: Link to GitHub and push: `git remote add origin <url>` then `git push -u origin main`."
      ],
      syntax: `# Essential Git Commands Cheat Sheet

# 1. Initialize a new local repository
git init

# 2. Check current status of tracked and untracked files
git status

# 3. Stage all modified and new files
git add .

# 4. Commit staged changes with a clear message
git commit -m "feat: implement responsive navigation bar"

# 5. Create and switch to a new feature branch
git checkout -b feature/dark-mode
# (or in newer Git: git switch -c feature/dark-mode)

# 6. Push branch to GitHub
git push -u origin feature/dark-mode

# 7. Pull the latest updates from remote repository
git pull origin main

# 8. View commit history
git log --oneline --graph --decorate`,
      examples: [
        {
          title: "Creating and Merging a Feature Branch",
          code: `# 1. Switch to main and pull latest changes
git checkout main
git pull origin main

# 2. Create feature branch and make code edits
git checkout -b feature/student-login
# ... edit files ...
git add .
git commit -m "feat: add JWT authentication to login"

# 3. Switch back to main and merge
git checkout main
git merge feature/student-login

# 4. Delete feature branch after merge
git branch -d feature/student-login`
        },
        {
          title: ".gitignore Configuration",
          code: `# Ignore dependencies
node_modules/

# Ignore sensitive environment variables
.env
.env.local

# Ignore build artifacts
/build
/dist
npm-debug.log*`
        }
      ],
      practicalExamples: "Collaborating with 3 classmates on a final year project by assigning GitHub Issues, opening Pull Requests for each module, conducting code reviews, and resolving merge conflicts.",
      realWorldUsage: "The Linux Kernel, VS Code, React, and Python itself are all developed openly using Git and hosted publicly on GitHub with contributions from thousands of developers worldwide.",
      importantPoints: [
        "Always write meaningful commit messages describing *what* and *why* changes were made, not just 'fixed code'.",
        "Never ever commit sensitive secrets (API keys, database passwords) to public GitHub repositories.",
        "Always create a `.gitignore` file before running your first `git add .` in any project."
      ],
      thingsToLearn: [
        "Git configuration and basic local commands (init, status, add, commit, log)",
        "Branching, checkout, switching, and merging",
        "Working with remotes: clone, fetch, pull, push",
        "Resolving merge conflicts calmly and correctly",
        "GitHub features: Issues, Pull Requests, Forks, and GitHub Pages hosting"
      ],
      miniPracticalTasks: [
        "Task 1: Create a GitHub account, create a public repository named `my-web-journey`, and push a README.md file.",
        "Task 2: Practice creating a new branch named `update-readme`, make a change, commit it, and merge it into `main`.",
        "Task 3: Write a `.gitignore` file that excludes `secrets.txt` and a `temp/` folder from Git tracking."
      ]
    }
  ],
  practiceTest: {
    categoryTitle: "Web Development",
    totalQuestions: 15,
    instructions: "Answer the following conceptual and practical questions on Web Development technologies (HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, MySQL, Git & GitHub). Write your answers in your study notebook or offline document.",
    questions: [
      {
        id: 1,
        technology: "HTML5",
        question: "Explain the difference between semantic and non-semantic HTML tags. Provide at least four examples of semantic tags and describe how they assist search engine crawlers and screen readers."
      },
      {
        id: 2,
        technology: "HTML5",
        question: "What is the purpose of the <!DOCTYPE html> declaration? What happens if a browser encounters an HTML document where this declaration is missing?"
      },
      {
        id: 3,
        technology: "CSS3",
        question: "Describe the four distinct layers of the CSS Box Model in order from innermost to outermost. Explain the practical difference between setting 'box-sizing: content-box' versus 'box-sizing: border-box'."
      },
      {
        id: 4,
        technology: "CSS3",
        question: "Explain the core differences between CSS Flexbox and CSS Grid. Under what layout circumstances should a frontend developer choose Flexbox over CSS Grid, and vice versa?"
      },
      {
        id: 5,
        technology: "CSS3",
        question: "What are CSS Media Queries and how do they enable responsive web design? Write an example media query rule that changes a 3-column container into a single column on mobile screens below 768px."
      },
      {
        id: 6,
        technology: "JavaScript",
        question: "Explain the difference between 'var', 'let', and 'const' in terms of scope (function vs block), re-declaration, reassignment, and hoisting behavior."
      },
      {
        id: 7,
        technology: "JavaScript",
        question: "What is the JavaScript Event Loop? How does JavaScript handle long-running asynchronous tasks (like network calls or timers) on a single thread without freezing the browser interface?"
      },
      {
        id: 8,
        technology: "JavaScript",
        question: "Explain the difference between synchronous code and asynchronous code in JavaScript. Describe how Promises and 'async/await' solve the problem of 'Callback Hell'."
      },
      {
        id: 9,
        technology: "React.js",
        question: "What is the Virtual DOM in React and how does the reconciliation algorithm update the browser's real DOM efficiently when a component's state changes?"
      },
      {
        id: 10,
        technology: "React.js",
        question: "Compare 'props' and 'state' in React. Can a child component directly modify the props it receives from its parent? How does data flow in a standard React application?"
      },
      {
        id: 11,
        technology: "Node.js",
        question: "Why is Node.js described as 'single-threaded, non-blocking, and event-driven'? What is the role of Libuv in enabling asynchronous I/O operations?"
      },
      {
        id: 12,
        technology: "Express.js",
        question: "What is an Express middleware function? Explain the significance of the 'next()' callback parameter and what happens if a middleware omits calling 'next()' without sending a response."
      },
      {
        id: 13,
        technology: "Express.js",
        question: "List the standard HTTP request methods (GET, POST, PUT, DELETE) and describe the appropriate scenario for using each method in a RESTful API."
      },
      {
        id: 14,
        technology: "MySQL",
        question: "Explain the difference between an INNER JOIN, a LEFT JOIN, and a RIGHT JOIN in SQL. What does the result set contain when there is no matching record in the joined table?"
      },
      {
        id: 15,
        technology: "Git & GitHub",
        question: "Describe the step-by-step workflow for resolving a merge conflict that occurs when merging a feature branch into the main branch in Git."
      }
    ]
  }
};
