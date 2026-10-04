import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { interviewQuestions } from "../data/interviewQuestionsData";
import "./careercraft.css";

export default function InterviewQuestions() {
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState(1); // default expand first question

  const topics = ["All", "HTML", "CSS", "JavaScript", "React", "Node.js", "Web Concepts", "Database", "Programming"];

  const filteredQuestions = interviewQuestions.filter((item) => {
    const matchesTopic = selectedTopic === "All" || item.topic === selectedTopic;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.simpleAnswer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.topic.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="cc-page-container">
      <Navbar />

      <section className="cc-hero-banner">
        <span className="cc-hero-badge">Technical IT Interview Bank</span>
        <h1 className="cc-hero-title">IT Interview Questions (Exactly 15 Questions)</h1>
        <p className="cc-hero-subtitle">
          Master the most essential technical interview questions asked in college campus placements and fresher interviews.
          Each question includes a simple answer, important bullet points, and beginner explanation of what the interviewer expects.
        </p>
      </section>

      <main className="cc-main-content">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <Link to="/jobs" className="cc-back-btn" style={{ marginBottom: 0 }}>
            ← Back to All IT Job Categories
          </Link>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Link to="/practice-questions" className="cc-btn cc-btn-outline" style={{ fontSize: "0.88rem", padding: "0.45rem 0.9rem" }}>
              📝 25 Practice Questions
            </Link>
            <Link to="/interview-prep" className="cc-btn cc-btn-primary" style={{ fontSize: "0.88rem", padding: "0.45rem 0.9rem" }}>
              🎯 Full Interview Prep
            </Link>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="cc-box-card" style={{ padding: "1.25rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTopic(t)}
                  style={{
                    padding: "0.35rem 0.8rem",
                    borderRadius: "6px",
                    border: "1px solid",
                    borderColor: selectedTopic === t ? "var(--cc-primary)" : "var(--cc-border)",
                    background: selectedTopic === t ? "var(--cc-primary)" : "#ffffff",
                    color: selectedTopic === t ? "#ffffff" : "#475569",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            <div>
              <input
                type="text"
                placeholder="Search 15 questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: "0.45rem 0.85rem",
                  borderRadius: "8px",
                  border: "1px solid var(--cc-border)",
                  fontSize: "0.88rem",
                  width: "220px",
                  outline: "none"
                }}
              />
            </div>
          </div>
        </div>

        {/* Count Summary */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <span style={{ fontSize: "0.95rem", color: "var(--cc-text-muted)" }}>
            Showing <strong>{filteredQuestions.length}</strong> of <strong>{interviewQuestions.length}</strong> Technical Interview Questions
          </span>
          <span style={{ fontSize: "0.85rem", color: "var(--cc-primary)", fontWeight: "600" }}>
            Click any question to expand or collapse details
          </span>
        </div>

        {/* 15 Interview Question Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {filteredQuestions.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="cc-box-card"
                style={{
                  margin: 0,
                  padding: "1.25rem",
                  borderLeft: isExpanded ? "4px solid var(--cc-primary)" : "1px solid var(--cc-border)"
                }}
              >
                {/* Header Question Bar */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    cursor: "pointer"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "var(--cc-primary-light)",
                        color: "var(--cc-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "700",
                        fontSize: "0.88rem",
                        flexShrink: 0
                      }}
                    >
                      {item.id}
                    </span>
                    <div>
                      <h3 style={{ margin: "0 0 0.2rem 0", fontSize: "1.05rem", color: "var(--cc-text-dark)" }}>
                        {item.question}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "4px",
                          background: "#f1f5f9",
                          color: "#475569"
                        }}
                      >
                        Topic: {item.topic}
                      </span>
                    </div>
                  </div>

                  <span style={{ fontSize: "1.2rem", color: "var(--cc-primary)", fontWeight: "bold" }}>
                    {isExpanded ? "−" : "+"}
                  </span>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid var(--cc-border)" }}>
                    {/* 1. Simple Answer */}
                    <div style={{ marginBottom: "1rem" }}>
                      <strong style={{ display: "block", fontSize: "0.9rem", color: "#1e293b", marginBottom: "0.35rem" }}>
                        📌 Simple Answer:
                      </strong>
                      <p style={{ margin: 0, fontSize: "0.95rem", color: "#334155", lineHeight: "1.6" }}>
                        {item.simpleAnswer}
                      </p>
                    </div>

                    {/* 2. Important Points */}
                    <div style={{ marginBottom: "1rem" }}>
                      <strong style={{ display: "block", fontSize: "0.9rem", color: "#1e293b", marginBottom: "0.35rem" }}>
                        🔑 Important Points to Remember:
                      </strong>
                      <ul className="cc-points-list" style={{ margin: 0, paddingLeft: "1.25rem", fontSize: "0.9rem", color: "#334155", lineHeight: "1.6" }}>
                        {item.importantPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    {/* 3. Beginner Explanation (What Interviewer Expects) */}
                    <div className="cc-interviewer-note">
                      <strong>💡 Beginner Explanation & Interviewer Expectation:</strong>
                      <p style={{ margin: "0.35rem 0 0 0", lineHeight: "1.5" }}>
                        {item.beginnerExplanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
