import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { communicationTopics, practiceActivities } from "../data/communicationData";
import "./careercraft.css";

export default function CommunicationSkills() {
  const [activeTab, setActiveTab] = useState(communicationTopics[0].id);

  // Timer state for 1-minute project pitch
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);

  // Self intro interactive form state
  const [introName, setIntroName] = useState("");
  const [introCollege, setIntroCollege] = useState("");
  const [introDegree, setIntroDegree] = useState("Computer Science");
  const [introTech, setIntroTech] = useState("React.js and JavaScript");
  const [introProject, setIntroProject] = useState("CareerCraft");

  // Technology explanation practice state
  const [chosenTech, setChosenTech] = useState(practiceActivities[1].options[0]);

  useEffect(() => {
    let interval = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const handleStartTimer = () => setTimerRunning(true);
  const handlePauseTimer = () => setTimerRunning(false);
  const handleResetTimer = () => {
    setTimerRunning(false);
    setTimerSeconds(60);
  };

  const activeTopic = communicationTopics.find((t) => t.id === activeTab) || communicationTopics[0];

  return (
    <div className="cc-page-container">
      <Navbar />

      <section className="cc-hero-banner">
        <span className="cc-hero-badge">Verbal & Interview Confidence</span>
        <h1 className="cc-hero-title">Communication Skills for IT Interviews</h1>
        <p className="cc-hero-subtitle">
          Learn how to speak clearly, explain your technical skills, describe your projects with confidence,
          and introduce yourself effectively to interviewers.
        </p>
      </section>

      <main className="cc-main-content">
        <div style={{ marginBottom: "1.5rem" }}>
          <Link to="/jobs" className="cc-back-btn" style={{ marginBottom: 0 }}>
            ← Back to All IT Job Categories
          </Link>
        </div>

        {/* Communication Topics Tabs */}
        <div className="cc-section-header">
          <h2 className="cc-section-title">Essential Student Communication Topics</h2>
          <p className="cc-section-desc">
            Select a topic to view structured advice, actionable tips, and real sample answers:
          </p>
        </div>

        <div className="cc-tab-row" style={{ overflowX: "auto" }}>
          {communicationTopics.map((topic) => (
            <button
              key={topic.id}
              className={`cc-tab-btn ${activeTab === topic.id ? "active" : ""}`}
              onClick={() => setActiveTab(topic.id)}
            >
              <span>{topic.icon}</span> {topic.title}
            </button>
          ))}
        </div>

        {/* Selected Topic Content Box */}
        <div className="cc-box-card" style={{ borderTop: "4px solid var(--cc-primary)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <span style={{ fontSize: "2.5rem" }}>{activeTopic.icon}</span>
            <div>
              <h2 style={{ margin: 0, fontSize: "1.5rem" }}>{activeTopic.title}</h2>
              <p style={{ margin: "0.2rem 0 0 0", color: "var(--cc-primary)", fontWeight: "600", fontSize: "0.95rem" }}>
                {activeTopic.tagline}
              </p>
            </div>
          </div>

          {/* Key Tips List */}
          <div style={{ background: "#f8fafc", padding: "1.25rem", borderRadius: "10px", margin: "1.25rem 0", border: "1px solid var(--cc-border)" }}>
            <h3 style={{ margin: "0 0 0.75rem 0", fontSize: "1.05rem", color: "#1e293b" }}>
              💡 Best Practices & Practical Tips:
            </h3>
            <ul className="cc-checklist">
              {activeTopic.tips.map((tip, idx) => (
                <li key={idx} style={{ padding: "0.35rem 0" }}>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Sample Script */}
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "1.25rem", borderRadius: "10px", margin: "1.25rem 0" }}>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.05rem", color: "#1e40af" }}>
              📜 Real Student Sample Script:
            </h3>
            <p style={{ margin: 0, fontSize: "0.93rem", color: "#1e293b", lineHeight: "1.7", whiteSpace: "pre-line" }}>
              {activeTopic.sampleScript}
            </p>
          </div>

          {/* Small Action Prompt */}
          <div style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", padding: "1rem", borderRadius: "8px", marginTop: "1rem" }}>
            <strong style={{ color: "#065f46" }}>🎯 Actionable Exercise:</strong>
            <p style={{ margin: "0.25rem 0 0 0", color: "#047857", fontSize: "0.92rem" }}>
              {activeTopic.practicePrompt}
            </p>
          </div>
        </div>

        {/* Small Interactive Practice Activities Section */}
        <div className="cc-section-header" style={{ marginTop: "3rem" }}>
          <h2 className="cc-section-title">Interactive Student Practice Activities</h2>
          <p className="cc-section-desc">
            Build your speaking confidence right now using these hands-on interactive tools:
          </p>
        </div>

        {/* Practice Activity 1: 1-Minute Project Pitch with Live Timer */}
        <div className="cc-box-card">
          <h2>⏱️ Practice Activity 1: Explain Your Project in 1 Minute</h2>
          <p style={{ color: "var(--cc-text-muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
            In campus recruitment, interviewers often ask: <em>"Can you explain your project in 1 minute?"</em>
            Use this live 60-second countdown timer to practice keeping your explanation crisp, structured, and under one minute!
          </p>

          <div className="cc-timer-box">
            <div className="cc-timer-display">
              00:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
            </div>

            <div className="cc-timer-buttons">
              {!timerRunning ? (
                <button
                  className="cc-btn cc-btn-primary"
                  onClick={handleStartTimer}
                  disabled={timerSeconds === 0}
                  style={{ background: "#059669" }}
                >
                  ▶ Start 60-Sec Timer
                </button>
              ) : (
                <button
                  className="cc-btn cc-btn-secondary"
                  onClick={handlePauseTimer}
                >
                  ⏸ Pause
                </button>
              )}

              <button
                className="cc-btn cc-btn-secondary"
                onClick={handleResetTimer}
              >
                ↻ Reset
              </button>
            </div>

            {timerSeconds === 0 && (
              <p style={{ color: "var(--cc-primary)", fontWeight: "bold", marginTop: "1rem" }}>
                ⏰ Time's up! Great job practicing. Did you finish all 4 key points within 60 seconds?
              </p>
            )}
          </div>

          <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "8px", border: "1px solid var(--cc-border)" }}>
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#334155" }}>60-Second Timing Guide:</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.5rem", fontSize: "0.85rem", color: "#475569" }}>
              <div>• 0:00 - 0:15: Name & Problem statement</div>
              <div>• 0:15 - 0:35: Tech stack & top 2 features</div>
              <div>• 0:35 - 0:50: What you personally coded</div>
              <div>• 0:50 - 1:00: Main learning / impact</div>
            </div>
          </div>
        </div>

        {/* Practice Activity 2: Explain One Technology You Learned */}
        <div className="cc-box-card">
          <h2>💬 Practice Activity 2: Explain One Technology You Learned</h2>
          <p style={{ color: "var(--cc-text-muted)", fontSize: "0.95rem" }}>
            Select a technology below and use the 3-sentence formula to explain it aloud:
          </p>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
            {practiceActivities[1].options.map((tech) => (
              <button
                key={tech}
                onClick={() => setChosenTech(tech)}
                style={{
                  padding: "0.4rem 0.85rem",
                  borderRadius: "6px",
                  border: "1px solid",
                  borderColor: chosenTech === tech ? "var(--cc-primary)" : "var(--cc-border)",
                  background: chosenTech === tech ? "var(--cc-primary)" : "#ffffff",
                  color: chosenTech === tech ? "#ffffff" : "#334155",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                {tech}
              </button>
            ))}
          </div>

          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "1.25rem", borderRadius: "10px" }}>
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#1e40af" }}>
              3-Sentence Speaking Formula for {chosenTech}:
            </h4>
            <ol style={{ margin: 0, paddingLeft: "1.25rem", fontSize: "0.92rem", color: "#1e293b", lineHeight: "1.7" }}>
              <li>
                <strong>Sentence 1 (Definition): </strong>
                "{chosenTech} is an IT technology used to build and organize software applications."
              </li>
              <li>
                <strong>Sentence 2 (Advantage): </strong>
                "Its main advantage is that it makes development modular, efficient, and easier to debug."
              </li>
              <li>
                <strong>Sentence 3 (Your Project): </strong>
                "In my college project CareerCraft, I used {chosenTech} to implement core features for freshers."
              </li>
            </ol>
          </div>
        </div>

        {/* Practice Activity 3: Interactive Self-Introduction Script Builder */}
        <div className="cc-box-card">
          <h2>📝 Practice Activity 3: Personalized Self-Introduction Generator</h2>
          <p style={{ color: "var(--cc-text-muted)", fontSize: "0.95rem" }}>
            Type your details into the fields below to create your customized 60-second interview pitch:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
            <div>
              <label htmlFor="intro-name-input" style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#475569", marginBottom: "0.3rem" }}>
                Your Name:
              </label>
              <input
                id="intro-name-input"
                type="text"
                placeholder="e.g. Priya Sharma"
                value={introName}
                onChange={(e) => setIntroName(e.target.value)}
                style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--cc-border)", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label htmlFor="intro-college-input" style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#475569", marginBottom: "0.3rem" }}>
                Your College:
              </label>
              <input
                id="intro-college-input"
                type="text"
                placeholder="e.g. ABC College of Engineering"
                value={introCollege}
                onChange={(e) => setIntroCollege(e.target.value)}
                style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--cc-border)", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label htmlFor="intro-degree-input" style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#475569", marginBottom: "0.3rem" }}>
                Degree / Stream:
              </label>
              <input
                id="intro-degree-input"
                type="text"
                placeholder="e.g. B.E. Computer Science"
                value={introDegree}
                onChange={(e) => setIntroDegree(e.target.value)}
                style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--cc-border)", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label htmlFor="intro-tech-input" style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#475569", marginBottom: "0.3rem" }}>
                Key Technical Skill:
              </label>
              <input
                id="intro-tech-input"
                type="text"
                placeholder="e.g. React.js and JavaScript"
                value={introTech}
                onChange={(e) => setIntroTech(e.target.value)}
                style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--cc-border)", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label htmlFor="intro-project-input" style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#475569", marginBottom: "0.3rem" }}>
                Best Project Name:
              </label>
              <input
                id="intro-project-input"
                type="text"
                placeholder="e.g. CareerCraft"
                value={introProject}
                onChange={(e) => setIntroProject(e.target.value)}
                style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--cc-border)", boxSizing: "border-box" }}
              />
            </div>
          </div>

          <div style={{ background: "#f8fafc", border: "1.5px dashed var(--cc-primary)", padding: "1.5rem", borderRadius: "10px" }}>
            <h4 style={{ margin: "0 0 0.5rem 0", color: "var(--cc-primary)" }}>
              🎙️ Your Personalized Self-Introduction Script:
            </h4>
            <p style={{ margin: 0, fontSize: "0.95rem", color: "#1e293b", lineHeight: "1.7" }}>
              "Good morning! My name is <strong>{introName || "[Your Name]"}</strong>. I am currently completing my degree in{" "}
              <strong>{introDegree || "[Your Degree]"}</strong> at <strong>{introCollege || "[Your College]"}</strong>. During my college studies, I focused on developing my technical skills in{" "}
              <strong>{introTech || "[Key Technologies]"}</strong>. I built a working web project called <strong>'{introProject || "CareerCraft"}'</strong>, where I developed interactive user interfaces and practice tools for students. I am excited to begin my IT career as a fresher software engineer and contribute to your team. Thank you!"
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
