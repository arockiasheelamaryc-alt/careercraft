import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./CodingPractice.css";

// Initial starter code for each language mode
const initialCodeTemplates = {
  html: `<div class="student-card">
  <h1>Hello from Career Craft! 🚀</h1>
  <p>Start practicing HTML, CSS, and JavaScript right here in your browser.</p>
  <button id="actionBtn">Click to Test JavaScript</button>
  <div id="outputBox"></div>
</div>`,

  css: `.student-card {
  background: linear-gradient(135deg, #fdf2f8, #f5f3ff);
  border: 2px solid #e0259b;
  border-radius: 16px;
  padding: 28px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(224, 37, 155, 0.15);
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 20px auto;
}

h1 {
  color: #e0259b;
  margin-top: 0;
  font-size: 24px;
}

p {
  color: #334155;
  font-size: 15px;
  line-height: 1.6;
}

button {
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  color: #ffffff;
  border: none;
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
  margin-top: 10px;
}

button:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #6d28d9, #9333ea);
}

#outputBox {
  margin-top: 16px;
  font-weight: bold;
  color: #059669;
}`,

  javascript: `// Interactive JavaScript
console.log("JavaScript engine is running!");

const btn = document.getElementById("actionBtn");
const output = document.getElementById("outputBox");

if (btn && output) {
  let count = 0;
  btn.addEventListener("click", () => {
    count++;
    output.textContent = "🎉 Button clicked " + count + " time(s)! Interactive JS is working!";
    console.log("Button clicked successfully! Total count: " + count);
  });
} else {
  console.log("Add elements in the HTML tab to interact with them via JavaScript.");
}`,

  react: `function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

  return (
    <div className="react-card">
      <div className="react-badge">⚛️ React JSX Playground</div>
      <h2>Student React Counter & Input</h2>
      <p>Edit this component in the editor and click <strong>Run Code</strong>!</p>

      <div className="counter-box">
        <span className="count-display">Current Count: {count}</span>
        <div className="button-group">
          <button onClick={() => setCount(count + 1)} className="btn-inc">
            + Increment
          </button>
          <button onClick={() => setCount(count - 1)} className="btn-dec">
            - Decrement
          </button>
          <button onClick={() => setCount(0)} className="btn-reset">
            Reset
          </button>
        </div>
      </div>

      <div className="input-box">
        <label>Type your name:</label>
        <input
          type="text"
          placeholder="e.g. Alex..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name && <p className="welcome-msg">Welcome to Career Craft, {name}! 🌟</p>}
      </div>
    </div>
  );
}`
};

// Built-in starter CSS for React mode to make JSX previews look beautiful out of the box
const defaultReactStyles = `
body {
  margin: 0;
  padding: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f8fafc;
}
.react-card {
  background: #ffffff;
  border: 2px solid #e0259b;
  border-radius: 16px;
  padding: 24px;
  max-width: 520px;
  margin: 0 auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  text-align: center;
}
.react-badge {
  display: inline-block;
  background: #fdf2f8;
  color: #be185d;
  font-weight: 700;
  font-size: 13px;
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 12px;
}
h2 {
  color: #0f172a;
  margin: 0 0 8px;
  font-size: 22px;
}
p {
  color: #64748b;
  font-size: 14px;
  margin: 0 0 20px;
}
.counter-box {
  background: #f1f5f9;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
}
.count-display {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #7c3aed;
  margin-bottom: 12px;
}
.button-group {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}
.button-group button {
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}
.button-group button:hover { opacity: 0.9; }
.btn-inc { background: #e0259b; color: #fff; }
.btn-dec { background: #7c3aed; color: #fff; }
.btn-reset { background: #64748b; color: #fff; }
.input-box {
  text-align: left;
  margin-top: 16px;
}
.input-box label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 6px;
}
.input-box input {
  width: 100%;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 14px;
  outline: none;
}
.input-box input:focus {
  border-color: #e0259b;
}
.welcome-msg {
  color: #059669;
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
}
`;

// Practice presets for students
const presetsByLanguage = {
  html: [
    {
      title: "Profile Card",
      code: `<div class="student-profile">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Avatar" class="avatar" />
  <h2>Sarah Jenkins</h2>
  <p class="role">Frontend Developer Intern</p>
  <div class="skills">
    <span class="skill-tag">HTML5</span>
    <span class="skill-tag">CSS3</span>
    <span class="skill-tag">React</span>
  </div>
</div>`
    },
    {
      title: "Registration Form",
      code: `<form class="student-form">
  <h3>Student Registration</h3>
  <label>Full Name:</label>
  <input type="text" placeholder="Enter your full name" required />
  
  <label>Target IT Track:</label>
  <select>
    <option>Web Development</option>
    <option>Software Engineering</option>
    <option>Data Science & AI</option>
    <option>Cloud & DevOps</option>
  </select>

  <button type="button" onclick="alert('Registration submitted successfully!')">Submit</button>
</form>`
    }
  ],
  css: [
    {
      title: "Rainbow Gradient Card",
      code: `.student-card {
  background: linear-gradient(135deg, #ff007f, #7928ca, #0070f3);
  color: white;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(121, 40, 202, 0.4);
  font-family: Arial, sans-serif;
}
h1 { color: #fff; }
p { color: #e2e8f0; }
button {
  background: #fff;
  color: #7928ca;
  font-weight: bold;
  border: none;
  padding: 12px 24px;
  border-radius: 9999px;
  cursor: pointer;
}`
    },
    {
      title: "Flexbox Layout",
      code: `.student-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #ffffff;
  border: 3px solid #7c3aed;
  border-radius: 16px;
  padding: 24px;
  font-family: Arial, sans-serif;
}
h1 { color: #7c3aed; margin: 0; }
button {
  align-self: flex-start;
  background: #7c3aed;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
}`
    }
  ],
  javascript: [
    {
      title: "Digital Clock",
      code: `console.log("Initializing Digital Clock...");

const box = document.getElementById("outputBox");
if (box) {
  function updateTime() {
    const now = new Date();
    box.innerHTML = "<h2 style='color:#7c3aed; font-size:28px; margin:10px 0;'>" + now.toLocaleTimeString() + "</h2>";
  }
  updateTime();
  setInterval(updateTime, 1000);
  console.log("Clock running every second!");
}`
    },
    {
      title: "Color Flipper",
      code: `const colors = ["#e0259b", "#7c3aed", "#059669", "#2563eb", "#d97706", "#dc2626"];
const btn = document.getElementById("actionBtn");
const card = document.querySelector(".student-card");

if (btn && card) {
  btn.textContent = "Change Card Color 🎨";
  btn.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.borderColor = randomColor;
    console.log("Card border color changed to: " + randomColor);
  });
}`
    }
  ],
  react: [
    {
      title: "Simple Todo List",
      code: `function App() {
  const [todos, setTodos] = React.useState([
    "Learn React Component Basics",
    "Master useState Hook",
    "Practice coding on Career Craft"
  ]);
  const [text, setText] = React.useState("");

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, text.trim()]);
      setText("");
    }
  };

  return (
    <div className="react-card">
      <div className="react-badge">📝 React Task Tracker</div>
      <h2>Student Study Tasks ({todos.length})</h2>
      
      <div style={{ display: "flex", gap: "8px", margin: "16px 0" }}>
        <input
          type="text"
          placeholder="New task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #cbd5e1" }}
        />
        <button onClick={addTodo} style={{ background: "#e0259b", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer" }}>
          Add Task
        </button>
      </div>

      <ul style={{ textAlign: "left", paddingLeft: "20px", color: "#334155" }}>
        {todos.map((todo, idx) => (
          <li key={idx} style={{ marginBottom: "6px" }}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}`
    },
    {
      title: "Dark / Light Mode Toggle",
      code: `function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div style={{
      background: darkMode ? "#0f172a" : "#ffffff",
      color: darkMode ? "#f8fafc" : "#0f172a",
      padding: "30px",
      borderRadius: "16px",
      textAlign: "center",
      border: "2px solid " + (darkMode ? "#38bdf8" : "#e0259b"),
      transition: "all 0.3s ease"
    }}>
      <h2>{darkMode ? "🌙 Dark Theme Mode" : "☀️ Light Theme Mode"}</h2>
      <p style={{ color: darkMode ? "#94a3b8" : "#64748b" }}>
        State toggles theme styling smoothly!
      </p>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          background: darkMode ? "#38bdf8" : "#e0259b",
          color: darkMode ? "#0f172a" : "#ffffff",
          fontWeight: "bold",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}`
    }
  ]
};

export default function CodingPractice() {
  // Selected language: 'html' | 'css' | 'javascript' | 'react'
  const [activeLang, setActiveLang] = useState("html");

  // Code state per language
  const [htmlCode, setHtmlCode] = useState(initialCodeTemplates.html);
  const [cssCode, setCssCode] = useState(initialCodeTemplates.css);
  const [jsCode, setJsCode] = useState(initialCodeTemplates.javascript);
  const [reactCode, setReactCode] = useState(initialCodeTemplates.react);

  // Console output logs
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [showConsole, setShowConsole] = useState(true);

  // Runtime or syntax error state
  const [executionError, setExecutionError] = useState(null);

  // Notification for copy
  const [copied, setCopied] = useState(false);

  // iframe reference for live execution
  const iframeRef = useRef(null);

  // Get active code based on selected language
  const getCurrentCode = () => {
    if (activeLang === "react") return reactCode;
    if (activeLang === "html") return htmlCode;
    if (activeLang === "css") return cssCode;
    if (activeLang === "javascript") return jsCode;
    return htmlCode;
  };

  // Update active code
  const handleCodeChange = (newCode) => {
    if (activeLang === "react") {
      setReactCode(newCode);
    } else if (activeLang === "html") {
      setHtmlCode(newCode);
    } else if (activeLang === "css") {
      setCssCode(newCode);
    } else if (activeLang === "javascript") {
      setJsCode(newCode);
    }
  };

  // Handle Tab key indentation in editor
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const currentVal = textarea.value;

      // Insert 2 spaces
      const updated = currentVal.substring(0, start) + "  " + currentVal.substring(end);
      handleCodeChange(updated);

      // Re-position cursor after state update
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }, 0);
    } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      runCode();
    }
  };

  // Listen to postMessage from iframe for console.log and errors
  useEffect(() => {
    const handleIframeMessage = (event) => {
      if (!event.data) return;
      if (event.data.type === "CONSOLE_LOG") {
        setConsoleLogs((prev) => [...prev, String(event.data.payload)]);
      } else if (event.data.type === "EXECUTION_ERROR") {
        setExecutionError(String(event.data.payload));
      }
    };

    window.addEventListener("message", handleIframeMessage);
    return () => window.removeEventListener("message", handleIframeMessage);
  }, []);

  // Generate document HTML string and write to iframe
  const runCode = useCallback(() => {
    setExecutionError(null);
    setConsoleLogs([]);

    if (!iframeRef.current) return;

    let docHtml = "";

    if (activeLang === "react") {
      // React JSX Mode with in-browser Babel compilation
      docHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${defaultReactStyles}</style>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script>
    (function() {
      const origLog = console.log;
      console.log = function(...args) {
        origLog.apply(console, args);
        window.parent.postMessage({
          type: 'CONSOLE_LOG',
          payload: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')
        }, '*');
      };
      window.onerror = function(msg, url, line) {
        window.parent.postMessage({
          type: 'EXECUTION_ERROR',
          payload: 'Error: ' + msg + (line ? ' (Line: ' + line + ')' : '')
        }, '*');
        return false;
      };
    })();
  </script>
  <script type="text/babel">
    try {
      ${reactCode}

      const TargetComponent = typeof App !== 'undefined' ? App : null;
      if (TargetComponent) {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<TargetComponent />);
      } else {
        document.getElementById('root').innerHTML = '<div style="color:#ef4444; padding:16px; font-family:sans-serif;">Notice: Please define a React component named <code>function App() { return (...); }</code> to render.</div>';
      }
    } catch(err) {
      window.parent.postMessage({
        type: 'EXECUTION_ERROR',
        payload: 'Runtime Error: ' + err.message
      }, '*');
    }
  </script>
</body>
</html>`;
    } else {
      // Combined HTML + CSS + JavaScript Mode
      docHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
    }
    ${cssCode}
  </style>
</head>
<body>
  ${htmlCode}
  <script>
    (function() {
      const origLog = console.log;
      console.log = function(...args) {
        origLog.apply(console, args);
        window.parent.postMessage({
          type: 'CONSOLE_LOG',
          payload: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')
        }, '*');
      };
      window.onerror = function(msg, url, line) {
        window.parent.postMessage({
          type: 'EXECUTION_ERROR',
          payload: 'JavaScript Error: ' + msg + (line ? ' (Line: ' + line + ')' : '')
        }, '*');
        return false;
      };
    })();
  </script>
  <script>
    try {
      ${jsCode}
    } catch (err) {
      window.parent.postMessage({
        type: 'EXECUTION_ERROR',
        payload: 'Runtime Error: ' + err.message
      }, '*');
    }
  </script>
</body>
</html>`;
    }

    const iframe = iframeRef.current;
    iframe.srcdoc = docHtml;
  }, [activeLang, htmlCode, cssCode, jsCode, reactCode]);

  // Run automatically on first mount and language switch
  useEffect(() => {
    runCode();
  }, [activeLang, runCode]);

  // Clear current active editor code
  const handleClear = () => {
    handleCodeChange("");
    setExecutionError(null);
  };

  // Reset to default template
  const handleReset = () => {
    if (activeLang === "react") {
      setReactCode(initialCodeTemplates.react);
    } else if (activeLang === "html") {
      setHtmlCode(initialCodeTemplates.html);
    } else if (activeLang === "css") {
      setCssCode(initialCodeTemplates.css);
    } else if (activeLang === "javascript") {
      setJsCode(initialCodeTemplates.javascript);
    }
    setExecutionError(null);
    setTimeout(runCode, 50);
  };

  // Copy code helper
  const handleCopy = () => {
    navigator.clipboard.writeText(getCurrentCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Load a practice preset
  const loadPreset = (presetCode) => {
    handleCodeChange(presetCode);
    setTimeout(runCode, 50);
  };

  // Calculate lines for line-number gutter
  const currentCode = getCurrentCode();
  const lineCount = currentCode ? currentCode.split("\n").length : 1;
  const lineNumbers = Array.from({ length: Math.max(lineCount, 1) }, (_, i) => i + 1);

  // File extension name for titlebar
  const getFileTitle = () => {
    if (activeLang === "react") return "App.jsx (React)";
    if (activeLang === "html") return "index.html (Structure)";
    if (activeLang === "css") return "style.css (Styling)";
    if (activeLang === "javascript") return "script.js (Logic)";
    return "code.txt";
  };

  return (
    <div className="cp-page-container">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Content Area */}
      <main className="cp-main-wrapper">
        {/* Top Header Banner */}
        <section className="cp-header-banner">
          <div className="cp-header-left">
            <span className="cp-header-icon">💻</span>
            <div className="cp-header-titles">
              <h1>
                Student <span>Coding Practice</span> Playground
              </h1>
              <p>
                Practice HTML, CSS, JavaScript, and React JSX directly in your
                browser. Write code, execute instantly, and see live results!
              </p>
            </div>
          </div>

          <div className="cp-header-actions">
            <span className="cp-badge-feature">⚡ Real-Time Browser Execution</span>
            <Link to="/jobs" className="cp-btn-back">
              ← IT Job Categories
            </Link>
          </div>
        </section>

        {/* 3. Control Panel (Language Tabs + Run / Clear Actions) */}
        <div className="cp-control-panel">
          <div className="cp-lang-tabs-group">
            <span className="cp-lang-tab-label">Select Language:</span>

            <button
              className={`cp-lang-tab-btn ${activeLang === "html" ? "active" : ""}`}
              onClick={() => setActiveLang("html")}
            >
              <span className="cp-lang-tab-icon">🌐</span>
              <span>HTML</span>
            </button>

            <button
              className={`cp-lang-tab-btn ${activeLang === "css" ? "active" : ""}`}
              onClick={() => setActiveLang("css")}
            >
              <span className="cp-lang-tab-icon">🎨</span>
              <span>CSS</span>
            </button>

            <button
              className={`cp-lang-tab-btn ${activeLang === "javascript" ? "active" : ""}`}
              onClick={() => setActiveLang("javascript")}
            >
              <span className="cp-lang-tab-icon">⚡</span>
              <span>JavaScript</span>
            </button>

            <button
              className={`cp-lang-tab-btn ${activeLang === "react" ? "active" : ""}`}
              onClick={() => setActiveLang("react")}
            >
              <span className="cp-lang-tab-icon">⚛️</span>
              <span>React JSX</span>
            </button>
          </div>

          <div className="cp-toolbar-actions">
            <button className="cp-btn-run" onClick={runCode} title="Run Code (Ctrl + Enter)">
              <span>▶ Run Code</span>
            </button>
            <button className="cp-btn-clear" onClick={handleClear} title="Clear editor content">
              <span>✕ Clear</span>
            </button>
            <button className="cp-btn-reset" onClick={handleReset} title="Reset to sample template">
              <span>↺ Reset</span>
            </button>
          </div>
        </div>

        {/* 4. Split Playground Grid (Editor Left, Output Right) */}
        <div className="cp-playground-grid">
          {/* ==========================================================
              LEFT COLUMN: CODE EDITOR
              ========================================================== */}
          <div className="cp-editor-card">
            {/* Title Bar */}
            <div className="cp-panel-titlebar">
              <div className="cp-titlebar-left">
                <div className="cp-window-dots">
                  <span className="cp-dot red"></span>
                  <span className="cp-dot yellow"></span>
                  <span className="cp-dot green"></span>
                </div>
                <span className="cp-titlebar-filename">{getFileTitle()}</span>
              </div>

              <div className="cp-titlebar-right">
                <span className="cp-char-count">{currentCode.length} chars</span>
                <button className="cp-copy-code-btn" onClick={handleCopy}>
                  <span>{copied ? "✓ Copied" : "📋 Copy"}</span>
                </button>
              </div>
            </div>

            {/* Subtabs for switching between HTML, CSS, JS when in web development mode */}
            {activeLang !== "react" && (
              <div className="cp-subtabs-bar">
                <button
                  className={`cp-subtab-btn ${activeLang === "html" ? "active" : ""}`}
                  onClick={() => setActiveLang("html")}
                >
                  <span>📄 index.html</span>
                </button>
                <button
                  className={`cp-subtab-btn ${activeLang === "css" ? "active" : ""}`}
                  onClick={() => setActiveLang("css")}
                >
                  <span>🎨 style.css</span>
                </button>
                <button
                  className={`cp-subtab-btn ${activeLang === "javascript" ? "active" : ""}`}
                  onClick={() => setActiveLang("javascript")}
                >
                  <span>⚡ script.js</span>
                </button>
              </div>
            )}

            {/* Code Input Area with Gutter */}
            <div className="cp-editor-container">
              <div className="cp-line-numbers">
                {lineNumbers.map((num) => (
                  <div key={num}>{num}</div>
                ))}
              </div>

              <textarea
                className="cp-textarea"
                value={getCurrentCode()}
                onChange={(e) => handleCodeChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Write your ${activeLang.toUpperCase()} code here...`}
                spellCheck="false"
                autoCapitalize="none"
                autoComplete="off"
              />
            </div>

            {/* Status Bar */}
            <div className="cp-editor-statusbar">
              <div className="cp-statusbar-left">
                <span>Lines: {lineCount}</span>
                <span>Mode: {activeLang.toUpperCase()}</span>
              </div>
              <span className="cp-shortcut-hint">
                Shortcut: <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to Run
              </span>
            </div>
          </div>

          {/* ==========================================================
              RIGHT COLUMN: LIVE OUTPUT / PREVIEW
              ========================================================== */}
          <div className="cp-preview-card">
            {/* Browser Preview Titlebar */}
            <div className="cp-preview-titlebar">
              <div className="cp-preview-address-bar">
                <span className="cp-preview-address-icon">🔒</span>
                <span>http://localhost:3000/preview/{activeLang}</span>
              </div>

              <div className="cp-preview-actions">
                <button
                  className={`cp-preview-tab-btn ${showConsole ? "active" : ""}`}
                  onClick={() => setShowConsole(!showConsole)}
                  title="Toggle Console Log Panel"
                >
                  <span>Console ({consoleLogs.length})</span>
                </button>
                <button className="cp-preview-tab-btn" onClick={runCode} title="Refresh Preview">
                  <span>🔄 Refresh</span>
                </button>
              </div>
            </div>

            {/* Error Message Banner */}
            {executionError && (
              <div className="cp-error-banner">
                <span className="cp-error-icon">⚠️</span>
                <div className="cp-error-content">
                  <div className="cp-error-title">Code Execution Notice</div>
                  <div className="cp-error-message">{executionError}</div>
                </div>
                <button
                  className="cp-error-dismiss"
                  onClick={() => setExecutionError(null)}
                  title="Dismiss error"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Sandboxed Live iframe Preview */}
            <div className="cp-iframe-container">
              <iframe
                ref={iframeRef}
                title="Career Craft Code Preview"
                className="cp-iframe"
                sandbox="allow-scripts allow-modals allow-same-origin"
              />
            </div>

            {/* Interactive Console Output Drawer */}
            {showConsole && (
              <div className="cp-console-panel">
                <div className="cp-console-header">
                  <div className="cp-console-header-left">
                    <span>Terminal / Console Logs</span>
                    {consoleLogs.length > 0 && (
                      <span className="cp-console-badge">{consoleLogs.length}</span>
                    )}
                  </div>
                  {consoleLogs.length > 0 && (
                    <button
                      className="cp-console-clear-btn"
                      onClick={() => setConsoleLogs([])}
                    >
                      Clear Logs
                    </button>
                  )}
                </div>

                <div className="cp-console-body">
                  {consoleLogs.length === 0 ? (
                    <div className="cp-console-empty">
                      No console output yet. Use console.log("your message") to inspect variables.
                    </div>
                  ) : (
                    consoleLogs.map((log, idx) => (
                      <div key={idx} className="cp-console-line">
                        <span className="cp-console-arrow">&gt;</span>
                        <span>{log}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 5. Quick Starter Presets Bar */}
        {presetsByLanguage[activeLang] && presetsByLanguage[activeLang].length > 0 && (
          <div className="cp-presets-bar">
            <div className="cp-presets-label">
              <span>💡 Practice Templates for {activeLang.toUpperCase()}:</span>
            </div>
            <div className="cp-presets-group">
              {presetsByLanguage[activeLang].map((preset, idx) => (
                <button
                  key={idx}
                  className="cp-preset-pill"
                  onClick={() => loadPreset(preset.code)}
                >
                  <span>Load {preset.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 6. Learning Advice Banner */}
        <div className="cp-footer-banner">
          <div className="cp-footer-banner-text">
            <h3>Want to learn more concepts step-by-step?</h3>
            <p>
              Check out our comprehensive IT Job Categories and Learning Paths
              for Web Development, Software Engineering, and more with curated
              code snippets and interview question guides!
            </p>
          </div>
          <Link to="/jobs" className="cp-footer-banner-btn">
            Explore 10 IT Categories →
          </Link>
        </div>
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
