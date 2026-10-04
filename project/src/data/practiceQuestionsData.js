// CareerCraft - Exactly 25 Practice Questions for College Students & Freshers
// Covers essential IT fundamentals: HTML, CSS, JavaScript, React, Node.js, SQL & Programming basics

export const practiceQuestions = [
  {
    id: 1,
    topic: "HTML",
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTransfer Mode Language",
      "Home Tool Management Language"
    ],
    correctAnswer: 0,
    explanation: "HTML stands for HyperText Markup Language. It is the standard language used to structure web pages."
  },
  {
    id: 2,
    topic: "HTML",
    question: "Which HTML element is used to define the most important heading on a webpage?",
    options: [
      "<head>",
      "<h6>",
      "<h1>",
      "<heading>"
    ],
    correctAnswer: 2,
    explanation: "The <h1> tag represents the highest level and main heading of a webpage document."
  },
  {
    id: 3,
    topic: "HTML",
    question: "Which HTML attribute specifies the destination URL of a hyperlink in the <a> tag?",
    options: [
      "src",
      "href",
      "link",
      "target"
    ],
    correctAnswer: 1,
    explanation: "The 'href' (hypertext reference) attribute specifies the URL of the page the link goes to."
  },
  {
    id: 4,
    topic: "HTML",
    question: "Which HTML element is used to insert an image into a webpage?",
    options: [
      "<picture>",
      "<image>",
      "<img>",
      "<src>"
    ],
    correctAnswer: 2,
    explanation: "The <img> tag is an empty tag used to embed images, using the 'src' and 'alt' attributes."
  },
  {
    id: 5,
    topic: "CSS",
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Sheet Styles"
    ],
    correctAnswer: 2,
    explanation: "CSS stands for Cascading Style Sheets, used to design and format the appearance of HTML elements."
  },
  {
    id: 6,
    topic: "CSS",
    question: "Which components make up the standard CSS Box Model, from innermost to outermost?",
    options: [
      "Content, Border, Padding, Margin",
      "Content, Padding, Border, Margin",
      "Padding, Content, Margin, Border",
      "Margin, Border, Padding, Content"
    ],
    correctAnswer: 1,
    explanation: "The CSS Box Model consists of Content at the center, surrounded by Padding, then Border, and lastly Margin."
  },
  {
    id: 7,
    topic: "CSS",
    question: "Which CSS property is used to change the background color of an element?",
    options: [
      "color",
      "bgcolor",
      "background-color",
      "surface-color"
    ],
    correctAnswer: 2,
    explanation: "'background-color' sets the background color of an HTML element, whereas 'color' changes text color."
  },
  {
    id: 8,
    topic: "CSS",
    question: "Which layout model in CSS is specifically designed for 1-dimensional layouts (rows OR columns)?",
    options: [
      "CSS Grid",
      "Flexbox",
      "Float",
      "Table"
    ],
    correctAnswer: 1,
    explanation: "Flexbox (Flexible Box Layout) is designed for 1-dimensional layouts (a row or a column)."
  },
  {
    id: 9,
    topic: "JavaScript",
    question: "Which keyword in modern JavaScript is used to declare a variable whose value cannot be reassigned?",
    options: [
      "var",
      "let",
      "const",
      "static"
    ],
    correctAnswer: 2,
    explanation: "'const' creates a block-scoped variable that cannot be reassigned after declaration."
  },
  {
    id: 10,
    topic: "JavaScript",
    question: "What is the output of typeof null in JavaScript?",
    options: [
      "'null'",
      "'undefined'",
      "'object'",
      "'number'"
    ],
    correctAnswer: 2,
    explanation: "In JavaScript, typeof null returns 'object'. This is a historical bug in JavaScript that remains for backward compatibility."
  },
  {
    id: 11,
    topic: "JavaScript",
    question: "Which method is used to add one or more elements to the end of an array in JavaScript?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    correctAnswer: 0,
    explanation: "The push() method adds new items to the end of an array and returns the new length."
  },
  {
    id: 12,
    topic: "JavaScript",
    question: "What does DOM stand for in web development?",
    options: [
      "Document Object Model",
      "Data Object Manager",
      "Digital Output Method",
      "Dynamic Operation Module"
    ],
    correctAnswer: 0,
    explanation: "DOM stands for Document Object Model, which represents the HTML document as a tree of objects that JavaScript can manipulate."
  },
  {
    id: 13,
    topic: "JavaScript",
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "'==' checks both value and type, while '===' checks only value",
      "'===' checks both value and type (strict), while '==' checks only value with type coercion",
      "There is no difference between them",
      "'===' is used only for comparing objects"
    ],
    correctAnswer: 1,
    explanation: "'===' is the strict equality operator that compares both value and data type without type conversion."
  },
  {
    id: 14,
    topic: "React",
    question: "What is React?",
    options: [
      "A relational database management system",
      "A JavaScript library for building user interfaces",
      "A server-side operating system",
      "A CSS preprocessor"
    ],
    correctAnswer: 1,
    explanation: "React is an open-source JavaScript library developed by Facebook for building fast, reusable user interfaces."
  },
  {
    id: 15,
    topic: "React",
    question: "What are 'props' in React?",
    options: [
      "Functions used to modify internal component state",
      "Inputs passed from a parent component to a child component (read-only)",
      "CSS style classes defined inside a component",
      "Special server-side database connections"
    ],
    correctAnswer: 1,
    explanation: "Props (properties) are read-only values passed from a parent component to child components to configure them."
  },
  {
    id: 16,
    topic: "React",
    question: "Which React Hook is used to add and manage local state inside a functional component?",
    options: [
      "useEffect",
      "useContext",
      "useState",
      "useReducer"
    ],
    correctAnswer: 2,
    explanation: "useState is the fundamental React Hook used to declare state variables in functional components."
  },
  {
    id: 17,
    topic: "Backend",
    question: "What is Node.js?",
    options: [
      "A frontend CSS library",
      "A JavaScript runtime environment that executes JavaScript outside the browser",
      "A programming language unrelated to JavaScript",
      "A type of relational database"
    ],
    correctAnswer: 1,
    explanation: "Node.js is an open-source, cross-platform JavaScript runtime environment that lets developers run JavaScript on servers."
  },
  {
    id: 18,
    topic: "Backend",
    question: "What does API stand for in software development?",
    options: [
      "Application Programming Interface",
      "Automated Program Instruction",
      "Advanced Protocol Integration",
      "Applied Package Interface"
    ],
    correctAnswer: 0,
    explanation: "API stands for Application Programming Interface. It defines rules for how different software applications communicate with each other."
  },
  {
    id: 19,
    topic: "Database",
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Question Language",
      "Standard Quality Layout",
      "Server Query Logic"
    ],
    correctAnswer: 0,
    explanation: "SQL stands for Structured Query Language, the standard language for storing, manipulating, and retrieving data in relational databases."
  },
  {
    id: 20,
    topic: "Database",
    question: "Which SQL command is used to retrieve data from a database table?",
    options: [
      "FETCH",
      "GET",
      "SELECT",
      "EXTRACT"
    ],
    correctAnswer: 2,
    explanation: "The SELECT statement is used in SQL to query and select data from one or more database tables."
  },
  {
    id: 21,
    topic: "Database",
    question: "What is a Primary Key in a relational database?",
    options: [
      "Any column containing numbers",
      "A unique identifier for each row in a table that cannot contain NULL values",
      "The password used to connect to the database",
      "The first column in every table"
    ],
    correctAnswer: 1,
    explanation: "A Primary Key is a column (or combination of columns) that uniquely identifies each record in a table and cannot be NULL."
  },
  {
    id: 22,
    topic: "Git",
    question: "Which tool is commonly used by software developers for version control and source code tracking?",
    options: [
      "Git",
      "Docker",
      "Postman",
      "Figma"
    ],
    correctAnswer: 0,
    explanation: "Git is a distributed version control system that tracks changes in source code during software development."
  },
  {
    id: 23,
    topic: "Programming",
    question: "What is an algorithm in computer science?",
    options: [
      "A specific programming language created by Google",
      "A step-by-step procedure or set of rules to solve a specific problem",
      "A computer hardware device that processes graphics",
      "An operating system error"
    ],
    correctAnswer: 1,
    explanation: "An algorithm is a clear, step-by-step sequence of instructions designed to perform a task or solve a computational problem."
  },
  {
    id: 24,
    topic: "Data Formats",
    question: "What does JSON stand for?",
    options: [
      "Java Server Object Network",
      "JavaScript Object Notation",
      "Joint Standard Output Number",
      "JavaScript Ordered Node"
    ],
    correctAnswer: 1,
    explanation: "JSON stands for JavaScript Object Notation, a lightweight, text-based data format commonly used to transmit data between server and client."
  },
  {
    id: 25,
    topic: "Web Concepts",
    question: "What HTTP status code indicates a successful HTTP request?",
    options: [
      "404 Not Found",
      "500 Internal Server Error",
      "200 OK",
      "301 Moved Permanently"
    ],
    correctAnswer: 2,
    explanation: "The HTTP status code 200 OK indicates that the request was received, understood, and successfully processed by the server."
  }
];
