import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./careercraft.css";

const STARTER_TEMPLATES = {
  hello: {
    name: "👋 1. Hello CareerCraft",
    html: `<h1>Hello CareerCraft!</h1>\n<p>Welcome to IT coding practice for college freshers.</p>\n<button onclick="greetStudent()">Click to Start</button>`,
    css: `body {\n  font-family: Arial, sans-serif;\n  padding: 24px;\n  background: #f8fafc;\n  color: #1e293b;\n}\nh1 {\n  color: #4f46e5;\n}\nbutton {\n  background: #4f46e5;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  font-size: 15px;\n  border-radius: 6px;\n  cursor: pointer;\n}\nbutton:hover {\n  background: #4338ca;\n}`,
    js: `function greetStudent() {\n  alert("Welcome to CareerCraft! You ran your first code.");\n}`
  },
  card: {
    name: "🪪 2. Student Profile Card",
    html: `<div class="profile-card">\n  <div class="avatar">👨‍💻</div>\n  <h2>Alex Johnson</h2>\n  <p class="role">Aspiring Web Developer</p>\n  <div class="skills">\n    <span>HTML</span>\n    <span>CSS</span>\n    <span>JavaScript</span>\n    <span>React</span>\n  </div>\n  <button onclick="viewProfile()">Contact Student</button>\n</div>`,
    css: `body {\n  font-family: 'Segoe UI', sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 80vh;\n  background: #eef2ff;\n}\n.profile-card {\n  background: white;\n  padding: 24px;\n  border-radius: 16px;\n  text-align: center;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.08);\n  max-width: 280px;\n  width: 100%;\n}\n.avatar {\n  font-size: 40px;\n  margin-bottom: 8px;\n}\nh2 {\n  margin: 0;\n  color: #0f172a;\n}\n.role {\n  color: #64748b;\n  font-size: 14px;\n  margin: 4px 0 16px 0;\n}\n.skills span {\n  display: inline-block;\n  background: #e0e7ff;\n  color: #4338ca;\n  font-size: 12px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  margin: 3px;\n  font-weight: 600;\n}\nbutton {\n  margin-top: 18px;\n  width: 100%;\n  padding: 10px;\n  background: #4f46e5;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: bold;\n}`,
    js: `function viewProfile() {\n  alert("Email: student@careercraft.edu | Status: Ready for IT Placement");\n}`
  },
  counter: {
    name: "🔢 3. Interactive Counter App",
    html: `<div class="counter-box">\n  <h2>Simple Click Counter</h2>\n  <div id="count">0</div>\n  <div class="btn-group">\n    <button onclick="decrement()">- Decrement</button>\n    <button onclick="reset()">Reset</button>\n    <button onclick="increment()">+ Increment</button>\n  </div>\n</div>`,
    css: `body {\n  font-family: Arial, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n  background: #f1f5f9;\n}\n.counter-box {\n  background: white;\n  padding: 30px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n}\n#count {\n  font-size: 48px;\n  font-weight: bold;\n  color: #4f46e5;\n  margin: 20px 0;\n}\n.btn-group {\n  display: flex;\n  gap: 10px;\n}\nbutton {\n  padding: 10px 16px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n}\nbutton:hover {\n  background: #f8fafc;\n}`,
    js: `let value = 0;\nfunction increment() {\n  value++;\n  document.getElementById('count').innerText = value;\n}\nfunction decrement() {\n  value--;\n  document.getElementById('count').innerText = value;\n}\nfunction reset() {\n  value = 0;\n  document.getElementById('count').innerText = value;\n}`
  },
  blank: {
    name: "📄 4. Blank Playground",
    html: `<!-- Write your HTML structure here -->\n<h2>My Practice Page</h2>\n<p>Type your code and click Run!</p>`,
    css: `/* Write your CSS styling here */\nbody {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n  color: #333;\n}`,
    js: `// Write your JavaScript code here\nconsole.log("Playground ready!");`
  }
};

export default function CodingPractice() {
  const [selectedTemplate, setSelectedTemplate] = useState("hello");
  const [htmlCode, setHtmlCode] = useState(STARTER_TEMPLATES.hello.html);
  const [cssCode, setCssCode] = useState(STARTER_TEMPLATES.hello.css);
  const [jsCode, setJsCode] = useState(STARTER_TEMPLATES.hello.js);
  const [outputDoc, setOutputDoc] = useState("");
  const [hasRun, setHasRun] = useState(false);

  const handleTemplateChange = (e) => {
    const key = e.target.value;
    setSelectedTemplate(key);
    setHtmlCode(STARTER_TEMPLATES[key].html);
    setCssCode(STARTER_TEMPLATES[key].css);
    setJsCode(STARTER_TEMPLATES[key].js);
    setHasRun(false);
  };

  const handleRun = () => {
    const combined = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            ${cssCode}
          </style>
        </head>
        <body>
          ${htmlCode}
          <script>
            try {
              ${jsCode}
            } catch (err) {
              console.error("JavaScript Error:", err);
            }
          </script>
        </body>
      </html>
    `;
    setOutputDoc(combined);
    setHasRun(true);
  };

  const handleClear = () => {
    setHtmlCode("");
    setCssCode("");
    setJsCode("");
    setOutputDoc("");
    setHasRun(false);
  };

  return (
    <div className="cc-page-container">
      <Navbar />

      <section className="cc-hero-banner">
        <span className="cc-hero-badge">Direct Browser Practice</span>
        <h1 className="cc-hero-title">Beginner IT Coding Practice</h1>
        <p className="cc-hero-subtitle">
          Practice HTML, CSS, and JavaScript directly inside CareerCraft.
          No software installation needed. Write code, click Run, and see instant output!
        </p>
      </section>

      <main className="cc-main-content">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <Link to="/jobs" className="cc-back-btn" style={{ marginBottom: 0 }}>
            ← Back to IT Job Categories
          </Link>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Link to="/practice-questions" className="cc-btn cc-btn-outline" style={{ fontSize: "0.88rem", padding: "0.45rem 0.9rem" }}>
              📝 25 Practice Questions
            </Link>
            <Link to="/interview-questions" className="cc-btn cc-btn-secondary" style={{ fontSize: "0.88rem", padding: "0.45rem 0.9rem" }}>
              💬 15 Interview Q&As
            </Link>
          </div>
        </div>

        <div className="cc-editor-workspace">
          {/* Controls Bar */}
          <div className="cc-editor-controls">
            <div className="cc-template-selector">
              <label htmlFor="starter-template-select" style={{ fontSize: "0.92rem", fontWeight: "600", color: "#334155" }}>
                Load Starter Template:
              </label>
              <select
                id="starter-template-select"
                value={selectedTemplate}
                onChange={handleTemplateChange}
                aria-label="Load Starter Template"
              >
                {Object.entries(STARTER_TEMPLATES).map(([key, t]) => (
                  <option key={key} value={key}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                className="cc-btn cc-btn-primary"
                onClick={handleRun}
                style={{ background: "#059669", padding: "0.6rem 1.4rem" }}
              >
                ▶ Run Code
              </button>

              <button
                className="cc-btn cc-btn-secondary"
                onClick={handleClear}
                style={{ padding: "0.6rem 1.2rem" }}
              >
                🗑️ Clear All
              </button>
            </div>
          </div>

          {/* Three Code Textareas (HTML, CSS, JS) */}
          <div className="cc-editor-grid">
            {/* HTML Box */}
            <div className="cc-code-panel">
              <div className="cc-code-header">
                <span>🟧 HTML (Structure)</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>Tags & Elements</span>
              </div>
              <textarea
                className="cc-textarea"
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                placeholder="Write HTML code here..."
                spellCheck="false"
              />
            </div>

            {/* CSS Box */}
            <div className="cc-code-panel">
              <div className="cc-code-header">
                <span>🟦 CSS (Styling)</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>Colors & Layouts</span>
              </div>
              <textarea
                className="cc-textarea"
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                placeholder="Write CSS code here..."
                spellCheck="false"
              />
            </div>

            {/* JS Box */}
            <div className="cc-code-panel">
              <div className="cc-code-header">
                <span>🟨 JavaScript (Interactivity)</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>Logic & Events</span>
              </div>
              <textarea
                className="cc-textarea"
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                placeholder="Write JavaScript functions here..."
                spellCheck="false"
              />
            </div>
          </div>

          {/* Output Display Area */}
          <div className="cc-output-panel">
            <div className="cc-output-header">
              <span>🖥️ Output Area</span>
              <span style={{ fontSize: "0.85rem", fontWeight: "normal", color: "#64748b" }}>
                {hasRun ? "🟢 Code running live below" : "Click ▶ Run Code to view result"}
              </span>
            </div>

            {hasRun ? (
              <iframe
                title="Code Output Preview"
                className="cc-output-frame"
                sandbox="allow-scripts"
                srcDoc={outputDoc}
              />
            ) : (
              <div style={{ padding: "3rem 1.5rem", textAlign: "center", color: "#64748b" }}>
                <p style={{ fontSize: "1.05rem", fontWeight: "600", margin: "0 0 0.5rem 0" }}>
                  No output yet.
                </p>
                <p style={{ fontSize: "0.9rem", margin: 0 }}>
                  Click the green <strong>▶ Run Code</strong> button above to render your HTML, CSS, and JavaScript.
                </p>
              </div>
            )}
          </div>

          {/* Student Tips Box */}
          <div style={{ background: "#f8fafc", border: "1px solid var(--cc-border)", borderRadius: "10px", padding: "1.25rem" }}>
            <h4 style={{ margin: "0 0 0.5rem 0", color: "var(--cc-text-dark)", fontSize: "1rem" }}>
              💡 College Student Practice Tips:
            </h4>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", fontSize: "0.9rem", color: "#334155", lineHeight: "1.6" }}>
              <li>Try modifying colors, font sizes, or button labels in the CSS and HTML boxes and click <strong>Run Code</strong>.</li>
              <li>Add a new button in HTML and write an <code>onclick="alert('Hello')"</code> to see immediate interaction.</li>
              <li>You can select different starter templates from the dropdown above to test various components.</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
