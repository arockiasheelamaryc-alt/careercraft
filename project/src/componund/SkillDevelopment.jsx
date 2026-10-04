import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { itCategories } from "../data/categoriesData";
import "./careercraft.css";

export default function SkillDevelopment() {
  const [selectedId, setSelectedId] = useState(itCategories[0].id);

  const activeCategory = itCategories.find((cat) => cat.id === selectedId) || itCategories[0];

  return (
    <div className="cc-page-container">
      <Navbar />

      <section className="cc-hero-banner">
        <span className="cc-hero-badge">Student Skill Development</span>
        <h1 className="cc-hero-title">IT Skill Development</h1>
        <p className="cc-hero-subtitle">
          Understand exactly what skills you need to build for your chosen IT career path.
          Learn Basic Skills, Technical Skills, Tools & Technologies, Practice Areas, and Interview Preparation.
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
          <h2 className="cc-section-title">Select Your IT Career Focus</h2>
          <p className="cc-section-desc">
            Choose any of the 10 IT careers below to see its exact skill requirements:
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

        {/* Selected Category Skill Details Card */}
        <div className="cc-box-card" style={{ borderTop: "4px solid var(--cc-primary)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "2.5rem" }}>{activeCategory.icon}</span>
            <div>
              <h2 style={{ margin: 0, fontSize: "1.6rem" }}>{activeCategory.title}</h2>
              <span style={{ fontSize: "0.95rem", color: "var(--cc-primary)", fontWeight: "600" }}>
                Target Role: {activeCategory.role}
              </span>
            </div>
            <Link
              to={`/jobs/${activeCategory.id}`}
              className="cc-btn cc-btn-outline"
              style={{ marginLeft: "auto" }}
            >
              Full Job Profile →
            </Link>
          </div>

          <p style={{ color: "var(--cc-text-muted)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.75rem" }}>
            {activeCategory.overview}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {/* 1. Basic Skills */}
            <div className="cc-skill-col">
              <h3>1. Basic Skills</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--cc-text-muted)", marginBottom: "0.75rem" }}>
                Foundational mindset & non-negotiable fundamentals:
              </p>
              <ul className="cc-checklist">
                {activeCategory.requiredSkills.basicSkills.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* 2. Technical Skills */}
            <div className="cc-skill-col">
              <h3>2. Technical Skills</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--cc-text-muted)", marginBottom: "0.75rem" }}>
                Specific technical competencies required for daily work:
              </p>
              <ul className="cc-checklist">
                {activeCategory.requiredSkills.technicalSkills.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* 3. Tools / Technologies */}
            <div className="cc-skill-col">
              <h3>3. Tools & Technologies</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--cc-text-muted)", marginBottom: "0.75rem" }}>
                Key industry software, libraries, and frameworks:
              </p>
              <div className="cc-tag-list" style={{ marginTop: "0.5rem" }}>
                {activeCategory.technologies.map((tech, i) => (
                  <span key={i} className="cc-tag" style={{ background: "var(--cc-primary-light)", color: "var(--cc-primary)", borderColor: "#c7d2fe", fontWeight: "600" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Practice Areas */}
            <div className="cc-skill-col">
              <h3>4. Practice Areas</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--cc-text-muted)", marginBottom: "0.75rem" }}>
                Hands-on mini-projects and coding exercises:
              </p>
              <ul className="cc-checklist">
                {activeCategory.practice.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 5. Interview Preparation */}
          <div style={{ marginTop: "1.75rem", padding: "1.25rem", background: "#f8fafc", borderRadius: "10px", border: "1px solid var(--cc-border)" }}>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem", color: "var(--cc-text-dark)" }}>
              5. Interview Preparation Focus
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--cc-text-muted)", marginBottom: "1rem" }}>
              Key technical questions and concepts interviewers expect college freshers to know for {activeCategory.title}:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {activeCategory.interviewPrep.map((item, idx) => (
                <div key={idx} style={{ background: "#ffffff", padding: "0.85rem 1rem", borderRadius: "8px", border: "1px solid var(--cc-border)" }}>
                  <strong style={{ color: "var(--cc-primary)", fontSize: "0.92rem" }}>Q: {item.question}</strong>
                  <p style={{ margin: "0.35rem 0 0 0", fontSize: "0.88rem", color: "#334155" }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.75rem", flexWrap: "wrap" }}>
            <Link to="/coding-practice" className="cc-btn cc-btn-primary">
              💻 Start Coding Practice
            </Link>
            <Link to="/learning-path" className="cc-btn cc-btn-outline">
              🗺️ View Step-by-Step Learning Path
            </Link>
            <Link to="/practice-questions" className="cc-btn cc-btn-secondary">
              📝 Practice Technical Questions
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
