import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { itCategories } from "../data/categoriesData";
import "./careercraft.css";

export default function LearningPath() {
  const [selectedId, setSelectedId] = useState(itCategories[0].id);

  const activeCategory = itCategories.find((cat) => cat.id === selectedId) || itCategories[0];

  return (
    <div className="cc-page-container">
      <Navbar />

      <section className="cc-hero-banner">
        <span className="cc-hero-badge">Structured Learning Roadmaps</span>
        <h1 className="cc-hero-title">IT Student Learning Path</h1>
        <p className="cc-hero-subtitle">
          Never get confused about where to start. Follow a clear, proven step-by-step learning progression:
          What should I learn first? What should I learn next? What should I practice? What should I learn before an interview?
        </p>
      </section>

      <main className="cc-main-content">
        <div style={{ marginBottom: "1.5rem" }}>
          <Link to="/jobs" className="cc-back-btn" style={{ marginBottom: 0 }}>
            ← Back to All IT Job Categories
          </Link>
        </div>

        {/* Category Selector Tabs */}
        <div className="cc-section-header">
          <h2 className="cc-section-title">Select an IT Career Track</h2>
          <p className="cc-section-desc">
            Click on any of the 10 IT job categories to view its customized roadmap:
          </p>
        </div>

        <div className="cc-tab-row" style={{ overflowX: "auto" }}>
          {itCategories.map((cat) => (
            <button
              key={cat.id}
              className={`cc-tab-btn ${selectedId === cat.id ? "active" : ""}`}
              onClick={() => setSelectedId(cat.id)}
            >
              <span>{cat.icon}</span> {cat.title}
            </button>
          ))}
        </div>

        {/* Main Learning Roadmap Container */}
        <div className="cc-box-card" style={{ borderTop: "4px solid var(--cc-primary)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "2.5rem" }}>{activeCategory.icon}</span>
            <div>
              <h2 style={{ margin: 0, fontSize: "1.6rem" }}>{activeCategory.title} Roadmap</h2>
              <span style={{ fontSize: "0.95rem", color: "var(--cc-primary)", fontWeight: "600" }}>
                Target Fresher Designation: {activeCategory.role}
              </span>
            </div>
            <Link
              to={`/jobs/${activeCategory.id}`}
              className="cc-btn cc-btn-outline"
              style={{ marginLeft: "auto" }}
            >
              View Full Details →
            </Link>
          </div>

          {/* 4 Core Pillars Overview */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "1rem", borderRadius: "10px" }}>
              <span style={{ fontSize: "1.2rem" }}>🌱</span>
              <h4 style={{ margin: "0.3rem 0", color: "#1e40af" }}>1. Learn First</h4>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "#334155" }}>
                Foundational basics and core syntax before moving to frameworks.
              </p>
            </div>

            <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", padding: "1rem", borderRadius: "10px" }}>
              <span style={{ fontSize: "1.2rem" }}>🚀</span>
              <h4 style={{ margin: "0.3rem 0", color: "#6d28d9" }}>2. Learn Next</h4>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "#334155" }}>
                Modern frameworks, libraries, tools, and database integration.
              </p>
            </div>

            <div style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", padding: "1rem", borderRadius: "10px" }}>
              <span style={{ fontSize: "1.2rem" }}>💻</span>
              <h4 style={{ margin: "0.3rem 0", color: "#065f46" }}>3. What to Practice</h4>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "#334155" }}>
                Hands-on mini-projects and real coding exercises for your portfolio.
              </p>
            </div>

            <div style={{ background: "#fffbeb", border: "1px solid #fde68a", padding: "1rem", borderRadius: "10px" }}>
              <span style={{ fontSize: "1.2rem" }}>🎯</span>
              <h4 style={{ margin: "0.3rem 0", color: "#92400e" }}>4. Before Interview</h4>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "#334155" }}>
                Core concepts, revision of common Q&As, and project pitch practice.
              </p>
            </div>
          </div>

          {/* Sequential Timeline */}
          <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "1.25rem", color: "var(--cc-text-dark)" }}>
            Step-by-Step Learning Stages for {activeCategory.title}:
          </h3>

          <div className="cc-timeline">
            {activeCategory.learningPath.map((step) => (
              <div key={step.step} className="cc-timeline-item">
                <div className="cc-timeline-number">{step.step}</div>
                <div className="cc-timeline-body">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hands-on Practice Projects Recommendation */}
          <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid var(--cc-border)" }}>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.15rem", color: "var(--cc-text-dark)" }}>
              Recommended Hands-On Practice Checklist for {activeCategory.title}:
            </h3>
            <p style={{ color: "var(--cc-text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
              Complete these tasks before applying for campus or off-campus fresher roles:
            </p>
            <ul className="cc-checklist">
              {activeCategory.practice.map((item, idx) => (
                <li key={idx} style={{ padding: "0.5rem 0" }}>
                  <strong>Practice Task {idx + 1}:</strong> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Next Action Links */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <Link to="/coding-practice" className="cc-btn cc-btn-primary">
              💻 Go to Practice Code Editor
            </Link>
            <Link to="/practice-questions" className="cc-btn cc-btn-outline">
              📝 Test Your Knowledge (25 Qs)
            </Link>
            <Link to="/interview-prep" className="cc-btn cc-btn-secondary">
              🎯 Interview Preparation Guide
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
