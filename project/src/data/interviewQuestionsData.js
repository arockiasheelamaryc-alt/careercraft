// CareerCraft - Exactly 15 Technical IT Interview Questions for Freshers
// Covers HTML, CSS, JavaScript, React, Node.js, Database/MySQL & Core Programming concepts

export const interviewQuestions = [
  {
    id: 1,
    topic: "HTML",
    question: "What is HTML, and what is the difference between block-level and inline elements?",
    simpleAnswer: "HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages. Block-level elements always start on a new line and take up the full available width, while inline elements take up only as much width as necessary and do not start on a new line.",
    importantPoints: [
      "Block-level elements examples: <div>, <h1>-<h6>, <p>, <section>, <ul>, <li>.",
      "Inline elements examples: <span>, <a>, <img>, <strong>, <em>.",
      "Block elements can contain both inline and other block elements.",
      "Inline elements should generally only contain other inline elements or plain text."
    ],
    beginnerExplanation: "Interviewers ask this question to test if you understand fundamental document flow. They want to see if you know why a <div> pushes content to the next line while a <span> stays in the same line."
  },
  {
    id: 2,
    topic: "HTML",
    question: "What are semantic HTML elements and why are they important?",
    simpleAnswer: "Semantic elements are HTML tags that clearly describe their meaning and purpose to both the browser and the developer (e.g., <header>, <nav>, <main>, <article>, <section>, <footer>), rather than generic tags like <div>.",
    importantPoints: [
      "Improve code readability and maintainability for developers.",
      "Crucial for accessibility (screen readers for visually impaired users).",
      "Boost Search Engine Optimization (SEO) by helping search engines index content correctly.",
      "Provide a standardized, clean layout structure."
    ],
    beginnerExplanation: "The interviewer wants to see if you write modern, clean HTML. Inexperienced freshers tend to use <div> for everything; explaining semantic tags proves you know industry best practices."
  },
  {
    id: 3,
    topic: "CSS",
    question: "What is the CSS Box Model, and how does 'box-sizing: border-box' change it?",
    simpleAnswer: "The CSS Box Model describes the rectangular space occupied by every HTML element, consisting of four parts: Content, Padding, Border, and Margin. By default (content-box), width and height only apply to content. Setting 'box-sizing: border-box' includes padding and border inside the specified width, making layouts much easier to predict.",
    importantPoints: [
      "Content: The actual text, image, or child element.",
      "Padding: Clear space around content inside the border.",
      "Border: A line wrapped around the padding and content.",
      "Margin: Transparent space outside the border separating elements.",
      "'box-sizing: border-box' is standard practice in modern CSS resets."
    ],
    beginnerExplanation: "This is one of the most frequently asked CSS questions in campus interviews. Interviewers want to check if you understand why elements sometimes break onto new lines or exceed their container widths."
  },
  {
    id: 4,
    topic: "CSS",
    question: "What is Flexbox and what are its key properties?",
    simpleAnswer: "Flexbox (Flexible Box Layout) is a 1-dimensional CSS layout model designed to distribute space and align items along a horizontal row or vertical column easily, even when their sizes are dynamic.",
    importantPoints: [
      "Activated on a parent container using 'display: flex'.",
      "'flex-direction': Defines primary axis (row or column).",
      "'justify-content': Aligns items along the main axis (e.g., center, space-between).",
      "'align-items': Aligns items along the cross axis (e.g., center, flex-start).",
      "'gap': Modern property to add clean spacing between flex items."
    ],
    beginnerExplanation: "Freshers often struggle with layout alignment. Knowing how to center a <div> both horizontally and vertically using 'display: flex; justify-content: center; align-items: center;' shows you know practical web styling."
  },
  {
    id: 5,
    topic: "JavaScript",
    question: "What is the difference between var, let, and const in JavaScript?",
    simpleAnswer: "'var' is function-scoped and allows redeclaration and hoisting with undefined. 'let' and 'const' were introduced in ES6 and are block-scoped. 'let' can be reassigned but not redeclared in the same scope, while 'const' cannot be reassigned or redeclared.",
    importantPoints: [
      "Scope: 'var' is function-scoped; 'let' and 'const' are block-scoped (inside { }).",
      "Reassignment: 'var' and 'let' can be reassigned; 'const' cannot.",
      "Redeclaration: 'var' allows redeclaration; 'let' and 'const' throw SyntaxError.",
      "Hoisting: 'var' is hoisted with undefined; 'let'/'const' are in the Temporal Dead Zone (TDZ).",
      "Best Practice: Use 'const' by default, and 'let' only when you know the variable will change."
    ],
    beginnerExplanation: "Every technical interviewer asks this to gauge your knowledge of modern JavaScript (ES6). Explaining block scoping and avoiding 'var' shows you write clean modern code."
  },
  {
    id: 6,
    topic: "JavaScript",
    question: "What is the difference between '==' and '===' in JavaScript?",
    simpleAnswer: "'==' is the loose equality operator that compares values after performing type coercion (converting operands to the same type). '===' is the strict equality operator that compares both value and data type without any type conversion.",
    importantPoints: [
      "5 == '5' evaluates to true because JavaScript converts the string '5' to a number.",
      "5 === '5' evaluates to false because one is a number and the other is a string.",
      "0 == false is true, but 0 === false is false.",
      "Always use '===' in professional code to avoid unexpected bugs caused by automatic coercion."
    ],
    beginnerExplanation: "This question tests your understanding of JavaScript's dynamic type system. Showing that you always prefer '===' indicates attention to code reliability."
  },
  {
    id: 7,
    topic: "JavaScript",
    question: "What is an event and event handling in JavaScript?",
    simpleAnswer: "An event is an action or occurrence that happens in the browser that the system tells you about, such as a user clicking a button, typing in an input, or submitting a form. Event handling is writing JavaScript functions (event listeners) that run in response to those events.",
    importantPoints: [
      "Common events: 'click', 'submit', 'change', 'keydown', 'mouseover'.",
      "Attached using 'element.addEventListener('click', handleClick)' or JSX 'onClick={handleClick}'.",
      "The event object 'e' provides event details (e.target, e.preventDefault()).",
      "'e.preventDefault()' prevents default browser behavior like page reload on form submit."
    ],
    beginnerExplanation: "Interviewers want to make sure you know how web pages become interactive. Connecting a user click to a JavaScript function is the heart of frontend development."
  },
  {
    id: 8,
    topic: "React",
    question: "What is React, and what is the Virtual DOM?",
    simpleAnswer: "React is a JavaScript library for building user interfaces using reusable components. The Virtual DOM is a lightweight in-memory representation of the real DOM. When component state changes, React updates the Virtual DOM first, compares it with the previous version (diffing algorithm), and then efficiently updates only the changed elements in the real DOM (reconciliation).",
    importantPoints: [
      "React was developed and is maintained by Facebook (Meta).",
      "Directly modifying the real DOM is slow and resource-heavy.",
      "Virtual DOM minimizes slow real DOM updates by batching changes.",
      "Component-based architecture makes code modular and reusable."
    ],
    beginnerExplanation: "The interviewer wants to know if you understand why React is so fast and popular compared to traditional vanilla JavaScript."
  },
  {
    id: 9,
    topic: "React",
    question: "What is the difference between state and props in React?",
    simpleAnswer: "'props' (properties) are read-only inputs passed from a parent component to a child component to configure it. 'state' is an internal, mutable data store managed directly inside the component that triggers a re-render whenever it changes.",
    importantPoints: [
      "Props: Passed from parent -> child (unidirectional data flow). Cannot be modified by child.",
      "State: Created and managed inside the component (e.g., using useState).",
      "Re-rendering: Changing state triggers a re-render of that component and its children.",
      "Analog: Props are like arguments passed to a function; state is like local variables inside the function."
    ],
    beginnerExplanation: "This is the single most common React interview question for freshers. Being able to explain that props come from above and state is internal will immediately show your foundation is solid."
  },
  {
    id: 10,
    topic: "React",
    question: "What is the useState Hook and how does it work?",
    simpleAnswer: "'useState' is a built-in React Hook that allows functional components to have local state. It takes the initial state value as an argument and returns an array containing two items: the current state value, and a setter function to update that state.",
    importantPoints: [
      "Syntax: const [count, setCount] = useState(0);",
      "Calling the setter function (setCount) updates state and schedules a component re-render.",
      "Never mutate state directly (e.g. don't write count = 5); always use the setter function.",
      "Hooks can only be called at the top level of functional components, not inside loops or conditions."
    ],
    beginnerExplanation: "The interviewer wants to verify that you have hands-on experience with modern React functional components and know how to trigger UI updates properly."
  },
  {
    id: 11,
    topic: "Node.js",
    question: "What is Node.js, and how does its non-blocking I/O model work?",
    simpleAnswer: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine that allows developers to run JavaScript on the server. It uses a single-threaded, non-blocking, event-driven architecture, meaning it handles multiple requests concurrently without waiting for slow operations like database queries or file reading to finish before accepting new requests.",
    importantPoints: [
      "Enables developers to use JavaScript for both frontend and backend (full-stack JS).",
      "Non-blocking I/O: Slow tasks are delegated to background worker threads.",
      "Event Loop: Monitors and pushes completed callbacks back onto the execution stack.",
      "Ideal for data-intensive, real-time applications (chat apps, REST APIs)."
    ],
    beginnerExplanation: "Freshers often think Node.js is a programming language or framework. Clearly stating that it is a 'JavaScript runtime' and explaining the Event Loop will impress interviewers."
  },
  {
    id: 12,
    topic: "Web Concepts",
    question: "What is a REST API and what are common HTTP methods?",
    simpleAnswer: "A REST (Representational State Transfer) API is a standardized architectural style for web services that allows communication between client (e.g. React frontend) and server using standard HTTP protocols and JSON data format.",
    importantPoints: [
      "GET: Retrieves data from the server (e.g., fetch list of jobs).",
      "POST: Sends new data to the server to create a resource (e.g., submit signup form).",
      "PUT: Updates an existing resource completely on the server.",
      "DELETE: Removes a resource from the server.",
      "Stateless: Each request from client to server must contain all necessary information."
    ],
    beginnerExplanation: "Every IT company builds or uses APIs. The interviewer is testing if you understand how a React frontend communicates with a backend server or database."
  },
  {
    id: 13,
    topic: "Database",
    question: "What is SQL, and what is the difference between DDL and DML commands?",
    simpleAnswer: "SQL (Structured Query Language) is the standard language used to interact with relational databases. DDL (Data Definition Language) commands define and modify the database structure/schema (e.g., tables), while DML (Data Manipulation Language) commands manage the actual data inside those tables.",
    importantPoints: [
      "DDL Commands: CREATE (make table), ALTER (modify columns), DROP (delete table), TRUNCATE.",
      "DML Commands: INSERT (add row), SELECT (query rows), UPDATE (modify row), DELETE (remove row).",
      "DDL operations cannot be rolled back easily in most databases; DML operations are transaction-controlled.",
      "Essential for any role interacting with MySQL, PostgreSQL, or SQL Server."
    ],
    beginnerExplanation: "Database categorization questions are common in college recruitment drives. Demonstrating that you know which commands change table structure vs table records proves clear database theory."
  },
  {
    id: 14,
    topic: "Database",
    question: "What are Primary Keys and Foreign Keys, and why are they used?",
    simpleAnswer: "A Primary Key is a column (or set of columns) that uniquely identifies every row in a database table and cannot contain NULL values. A Foreign Key is a column in one table that links to the Primary Key of another table, creating a relational link and enforcing referential integrity.",
    importantPoints: [
      "Each table can have only ONE Primary Key.",
      "A table can have MULTIPLE Foreign Keys.",
      "Foreign Keys prevent orphan records (you cannot add a student to a course that does not exist).",
      "Enables joining tables using SQL JOIN statements."
    ],
    beginnerExplanation: "Relational databases are built on relationships between tables. The interviewer wants to verify that you can design clean schemas for applications like e-commerce or student portals."
  },
  {
    id: 15,
    topic: "Programming",
    question: "What are the core principles of Object-Oriented Programming (OOP)?",
    simpleAnswer: "The four core principles of OOP are Encapsulation (bundling data and methods into a single unit and restricting direct access), Abstraction (hiding complex internal details and showing only necessary features), Inheritance (allowing a child class to inherit properties and methods from a parent class), and Polymorphism (allowing methods to take multiple forms).",
    importantPoints: [
      "Encapsulation: Uses private fields and public getters/setters to protect data.",
      "Abstraction: Uses abstract classes or interfaces (e.g. driving a car without knowing internal engine combustion).",
      "Inheritance: Promotes code reusability (class Dog extends Animal).",
      "Polymorphism: Method Overloading (compile-time) and Method Overriding (runtime)."
    ],
    beginnerExplanation: "Almost every technical interview for freshers includes OOPs principles. Don't just list the four words—give a simple real-world example for each (like an Animal or Vehicle class) to show true understanding."
  }
];
