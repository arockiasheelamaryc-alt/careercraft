import React, { useState } from "react";
import "./category.css";

/**
 * CategoryLearningPage - Reusable component for all job category learning pages.
 * Receives a `data` prop containing all content: intro, topics, quiz, interview, etc.
 */
export default function CategoryLearningPage({ data }) {
  const [activeSection, setActiveSection] = useState("overview");

  // ===== Practice Quiz State =====
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  // ===== Interview Expansion State =====
  const [openInterview, setOpenInterview] = useState({});

  // ===== Coding Practice State (HTML/CSS/JS) =====
  const [htmlCode, setHtmlCode] = useState(data.codingPractice?.defaultHtml || "");
  const [cssCode, setCssCode] = useState(data.codingPractice?.defaultCss || "");
  const [jsCode, setJsCode] = useState(data.codingPractice?.defaultJs || "");
  const [runOutput, setRunOutput] = useState(false);

  // ===== Coding Practice State (Java/Python/SQL - static) =====
  const [javaCode, setJavaCode] = useState(data.codingPractice?.defaultJava || "");
  const [pythonCode, setPythonCode] = useState(data.codingPractice?.defaultPython || "");
  const [sqlCode, setSqlCode] = useState(data.codingPractice?.defaultSql || "");

  // ===== Design Practice State =====
  const [designHtml, setDesignHtml] = useState(data.designPractice?.defaultHtml || "");
  const [designCss, setDesignCss] = useState(data.designPractice?.defaultCss || "");
  const [runDesign, setRunDesign] = useState(false);

  // ===== Build Sidebar Items =====
  const sidebarItems = [{ id: "overview", label: "📖 Overview" }];
  data.topics.forEach((t) => {
    sidebarItems.push({ id: t.id, label: `${t.icon} ${t.name}` });
  });
  if (data.codingPractice && data.codingPractice.type !== "none") {
    sidebarItems.push({ id: "coding", label: "💻 Coding Practice" });
  }
  if (data.designPractice && data.designPractice.enabled) {
    sidebarItems.push({ id: "design", label: "🎨 Design Practice" });
  }
  sidebarItems.push({ id: "practice", label: "✅ Practice Quiz" });
  sidebarItems.push({ id: "interview", label: "💬 Interview Q&A" });
  sidebarItems.push({ id: "study", label: "📚 Study Material" });

  // ===== Quiz Handlers =====
  const handleAnswerSelect = (optionIndex) => {
    if (showFeedback) return;
    setSelectedOption(optionIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    if (selectedOption === data.practiceQuestions[currentQ].correctAnswer) {
      setScore(score + 1);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQ === data.practiceQuestions.length - 1) {
      setQuizDone(true);
    } else {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQ(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setQuizDone(false);
  };

  // ===== Interview Handler =====
  const toggleInterview = (index) => {
    setOpenInterview((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // ===== Render =====
  return (
    <div className="clp-wrapper">
      {/* === Fixed Left Sidebar === */}
      <aside className="clp-sidebar">
        <div className="clp-sidebar-header">
          <span className="clp-category-icon">{data.icon}</span>
          <h2>{data.title}</h2>
        </div>
        <nav className="clp-sidebar-nav">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`clp-nav-btn ${activeSection === item.id ? "clp-active" : ""}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* === Main Content (Independent Scroll) === */}
      <main className="clp-main">
        {/* ---- OVERVIEW ---- */}
        {activeSection === "overview" && (
          <div className="clp-section">
            <div className="clp-intro-banner">
              <h1>{data.icon} {data.title}</h1>
              <p>{data.intro.shortDesc}</p>
            </div>
            <div className="clp-cards-grid">
              <div className="clp-info-card">
                <h2>📌 What is {data.title}?</h2>
                <p>{data.intro.whatIs}</p>
              </div>
              <div className="clp-info-card">
                <h2>🎯 Why Learn It?</h2>
                <p>{data.intro.whyLearn}</p>
              </div>
              <div className="clp-info-card">
                <h2>🛠 Required Skills</h2>
                <ul>
                  {data.intro.requiredSkills.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="clp-info-card">
                <h2>💼 Career Opportunities</h2>
                <ul>
                  {data.intro.careerOpportunities.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="clp-info-card clp-roadmap-card">
                <h2>🗺️ Learning Roadmap</h2>
                <ol>
                  {data.intro.roadmap.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="clp-info-card">
                <h2>✨ Benefits</h2>
                <ul>
                  {data.intro.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ---- TOPIC CONTENT ---- */}
        {data.topics.map((topic) =>
          activeSection === topic.id ? (
            <div className="clp-section" key={topic.id}>
              <div className="clp-topic-header">
                <h1>{topic.icon} {topic.name}</h1>
              </div>
              <div className="clp-cards-grid">
                <div className="clp-info-card">
                  <h2>📖 Explanation</h2>
                  <p>{topic.explanation}</p>
                </div>
                <div className="clp-info-card">
                  <h2>🔑 Important Concepts</h2>
                  <ul>
                    {topic.concepts.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className="clp-info-card clp-example-card">
                  <h2>💡 Example</h2>
                  <pre>
                    <code>{topic.example}</code>
                  </pre>
                </div>
                <div className="clp-info-card">
                  <h2>✅ Benefits</h2>
                  <ul>
                    {topic.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="clp-info-card">
                  <h2>🌍 Real-World Usage</h2>
                  <p>{topic.realWorldUsage}</p>
                </div>
              </div>
            </div>
          ) : null
        )}

        {/* ---- CODING PRACTICE ---- */}
        {activeSection === "coding" &&
          data.codingPractice &&
          data.codingPractice.type !== "none" && (
            <div className="clp-section">
              <h1 className="clp-section-title">💻 Coding Practice</h1>
              <p className="clp-section-desc">
                Write code, click Run, and see the output instantly.
              </p>

              {/* HTML / CSS / JS Editor */}
              {data.codingPractice.type === "html-css-js" && (
                <>
                  <div className="clp-editor-header">
                    <h2>Online Code Editor</h2>
                    <button className="clp-run-btn" onClick={() => setRunOutput(true)}>
                      ▶ Run Code
                    </button>
                  </div>
                  <div className="clp-editor-grid">
                    <div className="clp-code-box">
                      <h3>HTML</h3>
                      <textarea
                        value={htmlCode}
                        onChange={(e) => setHtmlCode(e.target.value)}
                        spellCheck="false"
                      />
                    </div>
                    <div className="clp-code-box">
                      <h3>CSS</h3>
                      <textarea
                        value={cssCode}
                        onChange={(e) => setCssCode(e.target.value)}
                        spellCheck="false"
                      />
                    </div>
                    <div className="clp-code-box">
                      <h3>JavaScript</h3>
                      <textarea
                        value={jsCode}
                        onChange={(e) => setJsCode(e.target.value)}
                        spellCheck="false"
                      />
                    </div>
                  </div>
                  <div className="clp-output-section">
                    <div className="clp-output-header">
                      <h3>Output</h3>
                      <button
                        className="clp-clear-btn"
                        onClick={() => {
                          setHtmlCode(data.codingPractice.defaultHtml || "");
                          setCssCode(data.codingPractice.defaultCss || "");
                          setJsCode(data.codingPractice.defaultJs || "");
                          setRunOutput(false);
                        }}
                      >
                        Reset
                      </button>
                    </div>
                    {runOutput && (
                      <iframe
                        title="Code Output"
                        className="clp-iframe"
                        sandbox="allow-scripts"
                        srcDoc={`<!DOCTYPE html><html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}</script></body></html>`}
                      />
                    )}
                  </div>
                </>
              )}

              {/* Java Editor (static output) */}
              {data.codingPractice.type === "java" && (
                <>
                  <div className="clp-code-note">{data.codingPractice.note}</div>
                  <div className="clp-code-box clp-single-editor">
                    <h3>Java</h3>
                    <textarea
                      value={javaCode}
                      onChange={(e) => setJavaCode(e.target.value)}
                      spellCheck="false"
                    />
                  </div>
                  <div className="clp-output-section">
                    <h3>Expected Output (for the example above)</h3>
                    <pre className="clp-static-output">
                      <code>{data.codingPractice.expectedOutput}</code>
                    </pre>
                  </div>
                </>
              )}

              {/* Python Editor (static output) */}
              {data.codingPractice.type === "python" && (
                <>
                  <div className="clp-code-note">{data.codingPractice.note}</div>
                  <div className="clp-code-box clp-single-editor">
                    <h3>Python</h3>
                    <textarea
                      value={pythonCode}
                      onChange={(e) => setPythonCode(e.target.value)}
                      spellCheck="false"
                    />
                  </div>
                  <div className="clp-output-section">
                    <h3>Expected Output (for the example above)</h3>
                    <pre className="clp-static-output">
                      <code>{data.codingPractice.expectedOutput}</code>
                    </pre>
                  </div>
                </>
              )}

              {/* SQL Editor (static output) */}
              {data.codingPractice.type === "sql" && (
                <>
                  <div className="clp-code-note">{data.codingPractice.note}</div>
                  <div className="clp-code-box clp-single-editor">
                    <h3>SQL</h3>
                    <textarea
                      value={sqlCode}
                      onChange={(e) => setSqlCode(e.target.value)}
                      spellCheck="false"
                    />
                  </div>
                  <div className="clp-output-section">
                    <h3>Expected Output (for the example above)</h3>
                    <pre className="clp-static-output">
                      <code>{data.codingPractice.expectedOutput}</code>
                    </pre>
                  </div>
                </>
              )}
            </div>
          )}

        {/* ---- DESIGN PRACTICE ---- */}
        {activeSection === "design" &&
          data.designPractice &&
          data.designPractice.enabled && (
            <div className="clp-section">
              <h1 className="clp-section-title">🎨 Design Practice</h1>
              <p className="clp-section-desc">
                Edit HTML and CSS to design a webpage. Click Run to see the
                visual result.
              </p>
              <div className="clp-editor-header">
                <h2>Design Playground</h2>
                <button className="clp-run-btn" onClick={() => setRunDesign(true)}>
                  ▶ Run &amp; Preview
                </button>
              </div>
              <div className="clp-editor-grid clp-editor-two">
                <div className="clp-code-box">
                  <h3>HTML</h3>
                  <textarea
                    value={designHtml}
                    onChange={(e) => setDesignHtml(e.target.value)}
                    spellCheck="false"
                  />
                </div>
                <div className="clp-code-box">
                  <h3>CSS</h3>
                  <textarea
                    value={designCss}
                    onChange={(e) => setDesignCss(e.target.value)}
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className="clp-output-section">
                <div className="clp-output-header">
                  <h3>Preview</h3>
                  <button
                    className="clp-clear-btn"
                    onClick={() => {
                      setDesignHtml(data.designPractice.defaultHtml || "");
                      setDesignCss(data.designPractice.defaultCss || "");
                      setRunDesign(false);
                    }}
                  >
                    Reset
                  </button>
                </div>
                {runDesign && (
                  <iframe
                    title="Design Preview"
                    className="clp-iframe"
                    sandbox="allow-scripts"
                    srcDoc={`<!DOCTYPE html><html><head><style>${designCss}</style></head><body>${designHtml}</body></html>`}
                  />
                )}
              </div>
            </div>
          )}

        {/* ---- PRACTICE QUESTIONS ---- */}
        {activeSection === "practice" && (
          <div className="clp-section">
            <h1 className="clp-section-title">✅ Practice Questions</h1>
            <p className="clp-section-desc">
              Test your knowledge with {data.practiceQuestions.length} questions.
              Select an option and submit your answer.
            </p>
            {!quizDone ? (
              <div className="clp-quiz-container">
                <div className="clp-quiz-progress">
                  <span>
                    Question {currentQ + 1} / {data.practiceQuestions.length}
                  </span>
                  <div className="clp-progress-bar">
                    <div
                      className="clp-progress-fill"
                      style={{
                        width: `${
                          ((currentQ + 1) / data.practiceQuestions.length) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                <h3 className="clp-quiz-question">
                  {data.practiceQuestions[currentQ].question}
                </h3>
                <div className="clp-quiz-options">
                  {data.practiceQuestions[currentQ].options.map((option, i) => {
                    let cls = "clp-quiz-option";
                    if (showFeedback) {
                      if (i === data.practiceQuestions[currentQ].correctAnswer)
                        cls += " clp-correct";
                      else if (i === selectedOption) cls += " clp-incorrect";
                    } else if (i === selectedOption) {
                      cls += " clp-selected";
                    }
                    return (
                      <button
                        key={i}
                        className={cls}
                        onClick={() => handleAnswerSelect(i)}
                        disabled={showFeedback}
                      >
                        <span className="clp-option-letter">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span>{option}</span>
                        {showFeedback &&
                          i === data.practiceQuestions[currentQ].correctAnswer && (
                            <span className="clp-feedback-icon">✓</span>
                          )}
                        {showFeedback &&
                          i === selectedOption &&
                          i !==
                            data.practiceQuestions[currentQ].correctAnswer && (
                            <span className="clp-feedback-icon">✗</span>
                          )}
                      </button>
                    );
                  })}
                </div>
                {!showFeedback ? (
                  <button
                    className="clp-submit-btn"
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <div className="clp-feedback-box">
                    <p
                      className={
                        selectedOption ===
                        data.practiceQuestions[currentQ].correctAnswer
                          ? "clp-correct-text"
                          : "clp-incorrect-text"
                      }
                    >
                      {selectedOption ===
                      data.practiceQuestions[currentQ].correctAnswer
                        ? "✓ Correct!"
                        : "✗ Incorrect!"}
                    </p>
                    <p className="clp-correct-answer">
                      Correct Answer:{" "}
                      {
                        data.practiceQuestions[currentQ].options[
                          data.practiceQuestions[currentQ].correctAnswer
                        ]
                      }
                    </p>
                    <button className="clp-next-btn" onClick={handleNextQuestion}>
                      {currentQ === data.practiceQuestions.length - 1
                        ? "Finish Quiz"
                        : "Next Question →"}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="clp-quiz-result">
                <h2>🎉 Quiz Completed!</h2>
                <div className="clp-score-circle">
                  {score} / {data.practiceQuestions.length}
                </div>
                <p>
                  {score >= 20
                    ? "Excellent! You have a strong understanding."
                    : score >= 15
                    ? "Good job! Keep practicing to improve."
                    : score >= 10
                    ? "Fair. Review the topics and try again."
                    : "Keep learning and retake the quiz!"}
                </p>
                <button className="clp-reset-btn" onClick={handleResetQuiz}>
                  ↻ Retake Quiz
                </button>
              </div>
            )}
          </div>
        )}

        {/* ---- INTERVIEW QUESTIONS ---- */}
        {activeSection === "interview" && (
          <div className="clp-section">
            <h1 className="clp-section-title">💬 Interview Questions</h1>
            <p className="clp-section-desc">
              {data.interviewQuestions.length} job-specific interview questions
              with answers. Click a question to expand.
            </p>
            <div className="clp-interview-list">
              {data.interviewQuestions.map((item, index) => (
                <div
                  className={`clp-interview-item ${
                    openInterview[index] ? "clp-expanded" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="clp-interview-question"
                    onClick={() => toggleInterview(index)}
                  >
                    <span className="clp-interview-num">{index + 1}</span>
                    <span className="clp-interview-text">{item.question}</span>
                    <span className="clp-interview-toggle">
                      {openInterview[index] ? "−" : "+"}
                    </span>
                  </button>
                  {openInterview[index] && (
                    <div className="clp-interview-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---- STUDY MATERIAL ---- */}
        {activeSection === "study" && (
          <div className="clp-section">
            <h1 className="clp-section-title">📚 Study Material</h1>
            <p className="clp-section-desc">
              Access study materials and download PDF guides.
            </p>
            <div className="clp-study-container">
              <div className="clp-study-card">
                <h2>📖 {data.title} Study Guide</h2>
                <p>{data.studyMaterial.description}</p>
                <h3>Topics Covered:</h3>
                <ul>
                  {data.studyMaterial.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
                <div className="clp-pdf-actions">
                  <button
                    className="clp-pdf-btn"
                    onClick={() =>
                      window.open(
                        `/${data.studyMaterial.pdfFileName}`,
                        "_blank"
                      )
                    }
                  >
                    📄 Open PDF
                  </button>
                  <a
                    className="clp-pdf-btn clp-pdf-download"
                    href={`/${data.studyMaterial.pdfFileName}`}
                    download={data.studyMaterial.pdfFileName}
                  >
                    ⬇ Download PDF
                  </a>
                </div>
                <div className="clp-pdf-note">
                  ⚠️ Place the file{" "}
                  <strong>{data.studyMaterial.pdfFileName}</strong> inside the{" "}
                  <code>public/</code> folder of your React project for the links
                  to work.
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
