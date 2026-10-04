
import {useNavigate} from "react-router-dom";
import React, {useRef} from "react";
import {useState} from "react";

export default function Jobserch() {
  const navigate = useNavigate();
  const htmlRef = useRef(null);

  const interviewQuestions = [
  {
    question: "What is HTML?",
    answer:
      "HTML stands for HyperText Markup Language. It is used to create the structure of a webpage."
  },
  {
    question: "What is the difference between div and span?",
    answer:
      "div is a block-level element, while span is an inline element."
  },
  {
    question: "What is CSS?",
    answer:
      "CSS stands for Cascading Style Sheets. It is used to style and design HTML elements."
  },
  {
    question: "What is the CSS Box Model?",
    answer:
      "The CSS Box Model consists of content, padding, border, and margin."
  },
  {
    question: "What is Flexbox?",
    answer:
      "Flexbox is a CSS layout system used to arrange elements in rows or columns."
  },
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language used to add dynamic behavior and interactivity to webpages."
  },
  {
    question: "What is the difference between let, const, and var?",
    answer:
      "let and const are block-scoped. const cannot be reassigned, while let can. var is function-scoped."
  },
  {
    question: "What is a function in JavaScript?",
    answer:
      "A function is a reusable block of code that performs a specific task."
  },
  {
    question: "What is an array in JavaScript?",
    answer:
      "An array is used to store multiple values in a single variable."
  },
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library used to build user interfaces using reusable components."
  },
  {
    question: "What is a component in React?",
    answer:
      "A component is a reusable part of a React application that represents a part of the user interface."
  },
  {
    question: "What are props in React?",
    answer:
      "Props are used to pass data from one React component to another."
  },
  {
    question: "What is useState in React?",
    answer:
      "useState is a React Hook used to create and manage state in a functional component."
  },
  {
    question: "What is Node.js?",
    answer:
      "Node.js is a JavaScript runtime that allows JavaScript to run outside the browser."
  },
  {
    question: "What is MySQL?",
    answer:
      "MySQL is a relational database management system used to store and manage data using SQL."
  }
];

const [currentQuestion, setCurrentQuestion] = useState(0);
const [showAnswer, setShowAnswer] = useState(false);
const [score, setScore] = useState(0);
const [completed, setCompleted] = useState(false);

const practiceQuestions = [
  {
    question: "What is HTML?",
    answer: "HTML stands for HyperText Markup Language. It is used to create the structure of web pages."
  },
  {
    question: "What is the purpose of the <h1> tag?",
    answer: "The <h1> tag is used to define the main heading of a webpage."
  },
  {
    question: "What is the purpose of the <p> tag?",
    answer: "The <p> tag is used to create a paragraph."
  },
  {
    question: "How do you create a link in HTML?",
    answer: "Use the <a> tag with the href attribute."
  },
  {
    question: "How do you add an image in HTML?",
    answer: "Use the <img> tag with the src and alt attributes."
  },
  {
    question: "What is CSS?",
    answer: "CSS stands for Cascading Style Sheets. It is used to style and design webpages."
  },
  {
    question: "What is the CSS box model?",
    answer: "The CSS box model consists of content, padding, border, and margin."
  },
  {
    question: "What is Flexbox?",
    answer: "Flexbox is a CSS layout system used to arrange elements in rows or columns."
  },
  {
    question: "What is CSS Grid?",
    answer: "CSS Grid is a layout system used to create rows and columns on a webpage."
  },
  {
    question: "What is responsive design?",
    answer: "Responsive design makes a webpage adjust properly to different screen sizes."
  },
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used to add interactivity and dynamic behavior to webpages."
  },
  {
    question: "What is a variable in JavaScript?",
    answer: "A variable is used to store data values in a program."
  },
  {
    question: "What is the difference between let and const?",
    answer: "let allows reassignment of a value, while const cannot be reassigned."
  },
  {
    question: "What is a function?",
    answer: "A function is a reusable block of code designed to perform a specific task."
  },
  {
    question: "What is an array?",
    answer: "An array is a collection of multiple values stored in a single variable."
  },
  {
    question: "What is an object in JavaScript?",
    answer: "An object stores data in key-value pairs."
  },
  {
    question: "What is the DOM?",
    answer: "DOM stands for Document Object Model. It represents the HTML document as objects that JavaScript can manipulate."
  },
  {
    question: "What is an event in JavaScript?",
    answer: "An event is an action such as a click, key press, or mouse movement that JavaScript can respond to."
  },
  {
    question: "What is React?",
    answer: "React is a JavaScript library used to build user interfaces."
  },
  {
    question: "What is a React component?",
    answer: "A component is a reusable part of a React user interface."
  },
  {
    question: "What are props in React?",
    answer: "Props are values passed from one React component to another."
  },
  {
    question: "What is state in React?",
    answer: "State is data managed inside a React component that can change over time."
  },
  {
    question: "What is useState?",
    answer: "useState is a React Hook used to create and manage state in a functional component."
  },
  {
    question: "What is an API?",
    answer: "API stands for Application Programming Interface. It allows different software applications to communicate with each other."
  },
  {
    question: "What is JSON?",
    answer: "JSON stands for JavaScript Object Notation. It is commonly used to exchange data between applications."
  }
];


  const [htmlCode, setHtmlCode] = useState(`
<h1>Hello CareerCraft</h1>
<p>Start coding here!</p>
<button onclick="showMessage()">Click Me</button>
  `);

  const [cssCode, setCssCode] = useState(`
body {
  font-family: Arial;
  padding: 30px;
}

h1 {
  color: blue;
}

button {
  padding: 10px 20px;
  cursor: pointer;
}
  `);

  const [jsCode, setJsCode] = useState(`
function showMessage() {
  alert("Hello CareerCraft!");
}
  `);

  const [runCode, setRunCode] = useState(false);
return(
<>
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="logos"> Back</div>

      </header>

      <div className="main-container">

        {/* Sidebar */}
        <aside className="sidebar">

          <div className="sidebar-title"
          onClick={()=>
            htmlRef.current?.scrollIntoView({
              behavior:"smooth",block:"start"
              })
              }
              >
            <h2 href=" #html-content"className="sidebar-title">HTML</h2>
            <p>• Tags</p>
            <p>• Headings</p>
            <p>• Links</p>
            <p>• Images</p>
            <p>• Forms</p>
          </div>

          <div className="side-section">
            <h2>CSS</h2>
            <p>• Colors</p>
            <p>• Flexbox</p>
            <p>• Grid</p>
            <p>• Responsive Design</p>
          </div>

          <div className="side-section">
            <h2>JS</h2>
            <p>• Variable</p>
            <p>• Function</p>
            <p>• Arrays</p>
            <p>• objects</p>
            <p>• DOM</p>
             <p>• Events</p>
          </div>

          <div className="side-section">
            <h2>REACT</h2>
            <p>• Components</p>
            <p>• props</p>
            <p>• State</p>
            <p>• Hooks</p>
            <p>• API</p>
          </div>

          <div className="side-section">
            <h2>NODE.JS</h2>
            <p>• Server</p>
            <p>• Express</p>
            <p>• Routes</p>
            <p>• REST API</p>
            </div>

          <div className="side-section">
            <h2>MY SQL</h2>
            <p>• Database</p>
            <p>• Tables</p>
            <p>• SQL</p>
            <p>• CRUD</p>
            <p>• Queries</p>
            </div>

        </aside>

        {/* Main Content */}
        <main className="content">

          <div className="top-cards">

            {/* Frontend */}
            <div className="card">
              <div className="card-title">
                <span className="icon">▣</span>
                <h2>Frontend</h2>
              </div>

              <div className="technology">🟧 HTML</div>
              <div className="technology">🟦 CSS</div>
              <div className="technology">🟨 JS</div>
            </div>

            {/* Backend */}
            <div className="card">
              <div className="card-title">
                <span className="icon">◉</span>
                <h2>Backend</h2>
              </div>

              <div className="technology">⚛ React</div>
              <div className="technology">🟨 Node.js</div>
              <div className="technology">🐬 MySQL</div>
            </div>

          </div>

          <div className="bottom-cards">

            {/* Practice */}
            
            <div className="card question-card">

  <div className="card-title">
    <span className="icon">▤</span>
    <h2>Practice Questions</h2>
  </div>

  {!completed ? (

    <div className="practice-area">

      <div className="question-number">
        Question {currentQuestion + 1} / 25
      </div>

      <h3 className="practice-question">
        {practiceQuestions[currentQuestion].question}
      </h3>

      {!showAnswer ? (

        <button
          className="show-answer-button"
          onClick={() => setShowAnswer(true)}
        >
          Show Answer
        </button>

      ) : (

        <div className="answer-area">

          <h4>Correct Answer</h4>

          <p>
            {practiceQuestions[currentQuestion].answer}
          </p>

          <div className="answer-buttons">

            <button
              className="right-button"
              onClick={() => {

                setScore(score + 1);

                if (currentQuestion === 24) {
                  setCompleted(true);
                } else {
                  setCurrentQuestion(currentQuestion + 1);
                  setShowAnswer(false);
                }

              }}
            >
              I Got It Right
            </button>

            <button
              className="wrong-button"
              onClick={() => {

                if (currentQuestion === 24) {
                  setCompleted(true);
                } else {
                  setCurrentQuestion(currentQuestion + 1);
                  setShowAnswer(false);
                }

              }}
            >
              I Got It Wrong
            </button>

          </div>

        </div>

      )}

    </div>

  ) : (

    <div className="final-score">

      <h2>Practice Completed!</h2>

      <div className="score-number">
        {score} / 25
      </div>

      <p>
        Your final score is {score} out of 25.
      </p>

      <button
        className="retry-button"
        onClick={() => {
          setCurrentQuestion(0);
          setScore(0);
          setShowAnswer(false);
          setCompleted(false);
        }}
      >
        Practice Again
      </button>

    </div>

  )}

</div>

            {/* Interview */}
            
            <div className="card question-card interview-card">

  <div className="card-title">
    <span className="icon">💬</span>
    <h2>Interview Questions</h2>
  </div>

  <div className="interview-list">

    {interviewQuestions.map((item, index) => (

      <div className="interview-item" key={index}>

        <div className="interview-question">

          <span className="question-number">
            {index + 1}.
          </span>

          <h3>
            {item.question}
          </h3>

        </div>

        <div className="interview-answer">

          <strong>Answer:</strong>

          <p>
            {item.answer}
          </p>

        </div>

      </div>

    ))}

  </div>

</div>
    
            {/* Online Code Editor */}

<div className="online-code-editor">

  <div className="editor-header">
    <div>
      <h2>Online Code Editor</h2>
      <p>Write HTML, CSS and JavaScript and see the output instantly.</p>
    </div>

    <button
      className="run-button"
      onClick={() => setRunCode(true)}
    >
      ▶ Run Code
    </button>
  </div>


  <div className="editor-area">

    {/* HTML */}
    <div className="code-box">
      <h3>HTML</h3>

      <textarea
        value={htmlCode}
        onChange={(e) => setHtmlCode(e.target.value)}
        placeholder="Write your HTML code here..."
        spellCheck="false"
      />
    </div>


    {/* CSS */}
    <div className="code-box">
      <h3>CSS</h3>

      <textarea
        value={cssCode}
        onChange={(e) => setCssCode(e.target.value)}
        placeholder="Write your CSS code here..."
        spellCheck="false"
      />
    </div>


    {/* JavaScript */}
    <div className="code-box">
      <h3>JavaScript</h3>

      <textarea
        value={jsCode}
        onChange={(e) => setJsCode(e.target.value)}
        placeholder="Write your JavaScript code here..."
        spellCheck="false"
      />
    </div>

  </div>


  {/* Output */}

  <div className="output-section">

    <div className="output-header">
      <h3>Output</h3>

      <button
        className="clear-button"
        onClick={() => {
          setHtmlCode("");
          setCssCode("");
          setJsCode("");
          setRunCode(false);
        }}
      >
        Clear
      </button>
    </div>

    {runCode && (
      <iframe
        title="Code Output"
        className="code-output"
        sandbox ="allow-scripts"
        srcDoc={`
          <!Doctype html>
          <html>
          <head>
          <style>
          ${cssCode}
          </style>
          </head>
          
          <body>
          ${htmlCode}
          
          <script>
          ${jsCode}
          </script>
          <body>
          </html>
        `}
      />
    
        )
        }
    </div>
  </div>

<div className="name">

<div ref={htmlRef} className="html-content">
<h1 id="html-content">HTML</h1>
<div>
  <h3>What is html?</h3>
  <div>HTML stands for HyperText Markup Language. It is the standard markup language used to create the structure and content of webpages. HTML is used to add headings, paragraphs, links, images, forms, buttons, and other elements to a webpage.</div><br/>
  <h3>Why do we use html?</h3>
  <div>We use HTML to create and organize the content of a webpage. It tells the browser what each part of the webpage represents, such as a heading, paragraph, image, link, or form.</div><br/>

<ul>
    <li>Basic = html, head, title, body</li>
<li>Text =  h1 to h6, p, br, hr, strong, em</li>
<li>Links & Media = a, img, audio, video</li>
<li>Lists = ul, ol, li</li>
<li>Tables = table, tr, th, td</li>
<li>Forms = form, label, input, textarea, select, option, button</li>
<li>Structure = div, span, header, nav, main, section, article, footer</li>
<li>Other = iframe, script, style, meta, link</li>
</ul>
<div>
<h3>HTML learning material</h3>
<button  onClick={() => window.open ("/CareerCraft_HTML_Detailed_Learning_Guide.pdf" ,"_blank" )}>open html pdf
</button>
</div>

<div>
  <h1>CSS</h1>
  <h3>What is css?</h3>
  <div>CSS stands for cascadind style sheets, <span>css is a styling language used to design and control the appearance of HTML element on a web page</span></div>
   
    <div>do we use CSS?</div>
<h3>CSS is used to:</h3>
<ul>
<li>🎨 Change colors </li>
<li>🔤  Change font styles and text sizes</li>
<li> 📦 Add borders, boxes, and rounded corners</li>
<li> ↔️ Set margin and padding</li>
<li> 📱 Create responsive designs</li>
<li> 📐 Arrange elements using layouts</li>
<li> ✨ Add hover effects and animations</li>
<li> 🧩 Create layouts using Flexbox and Grid</li>
  </ul>
  <div>
<h3>css learning material</h3>
<button onClick={() => window.open ("/CareerCraft_CSS_Detailed_Learning_Guide.pdf" ,"_blank" )}>open css pdf
</button>
</div>


  <div>
    <h1>JAVAC SCRIPT</h1>
    <div>javascript is used to make web pages interactive and daynamic.</div>
    <h3>js is used to:</h3>
    <ul>
      <li>🖱️ Handle User Actions – Responds to clicks, typing, and other actions.</li>
      <li>🔄 Change Content – Updates text, images, and page content dynamically.</li>
      <li>✅ Form Validation – Checks user input before submitting forms.</li>
      <li>🎨 Change Styles – Can change HTML/CSS styles dynamically.</li>
      <li>📋 Create Interactive Features – Used for menus, sliders, popups, and buttons.</li>
      <li>🌐 Fetch Data – Gets data from servers and APIs.</li>
      <li>⚡ Improve User Experience – Makes websites faster and more responsive.</li>
      <li>🧩 Build Web Applications – Used with React, Node.js, and other technologies.</li>
    </ul>
    <div>
<h3>js learning material</h3>
<button onClick={() => window.open ("/CareerCraft_CSS_Detailed_Learning_Guide.pdf" ,"_blank" )}>open js pdf
</button>
</div>

  </div>


  <div>
    <h1>REACT</h1>
    <div>React is a JavaScript library used to build interactive and reusable user interfaces.</div>
    <ul>
      <li>🧩 Components – Used to divide a web page into small and reusable parts.</li>
      <li>📦 Props – Used to pass data from one component to another.</li>
      <li>🔄 State – Used to store and update data within a component.</li>
      <li>🪝 Hooks – Used to work with state and other React features in functional components.</li>
       <li>🌐 API – Used to get and send data between the application and a server.</li>
    </ul>
    <div>
<h3>React learning material</h3>
<button onClick={() => window.open ("/CareerCraft_CSS_Detailed_Learning_Guide.pdf" ,"_blank" )}>open React pdf
</button>
</div>
    </div>

  <div>
    <h1>NODE.JS</h1>
    <div>Node.js is a javascript runtime environment used to run javacript on the server side</div>
    <ul>
      <li>Node.js</li>
      <li>🟢 Node.js - Used to run JavaScript on the server side.</li>
      <li> Server - Handles user requests and sends responses.</li>
      <li>🚀 Express - Used to create and manage web servers easily.</li>
      <li>🛣️ Router - Used to manage different routes and URLs.</li>
      <li>🔗 REST API - Used for communication between frontend and backend.</li>
    </ul>
    <div>
<h3>Node.js learning material</h3>
<button onClick={() => window.open ("/CareerCraft_CSS_Detailed_Learning_Guide.pdf" ,"_blank" )}>open Node.js pdf
</button>
</div>
  </div>


  <div>
    <h1>MY SQL</h1>
    <div> my sql is a relational database used to store data in tables, rows, and columns.</div>
    <ul>
      <li>🗄️ Database - Stores and organizes application data.</li>
      <li>📋 Table - Stores data in rows and columns.</li>
      <li>💻 SQL - Used to create, read, update, and manage data.</li>
      <li>🔄 CRUD - 1.➕ Create – Add new data
            - 2.👀 Read – View data
             -3. ✏️ Update – Change data
           - 4.🗑️ Delete – Remove data.</li>
      <li>🔍 Queries - Commands used to work with data in a database.</li>
    </ul>
        <div>
<h3>My sql learning material</h3>
<button onClick={() => window.open ("/CareerCraft_CSS_Detailed_Learning_Guide.pdf" ,"_blank" )}>open My sql pdf
</button>
</div>
  </div>





</div>
</div>



</div>
</div>
          </div>
        </main>
        
      </div>
      
     </div>
     
</>
);
}

          