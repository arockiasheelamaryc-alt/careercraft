import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { itCategories } from "../data/categoriesData";
import "./careercraft.css";

export default function JobDetailPage() {
  const { categoryId } = useParams();

  const category = itCategories.find((cat) => cat.id === categoryId) || itCategories[0];

  return (
    <div className="cc-page-container">
      <Navbar />

      <main className="cc-main-content">
        <Link to="/jobs" className="cc-back-btn">
          ← Back to All IT Job Categories
        </Link>

        {/* Category Header Card */}
        <div className="cc-detail-header-card">
          <div className="cc-detail-icon">{category.icon}</div>
          <div className="cc-detail-info">
            <span className="cc-hero-badge" style={{ background: "var(--cc-primary-light)", color: "var(--cc-primary)", borderColor: "#c7d2fe" }}>
              IT Career Pathway
            </span>
            <h1>{category.title}</h1>
            <h3>Job Role: {category.role}</h3>
            <p>{category.overview}</p>

            <div className="cc-detail-actions">
              <Link to="/coding-practice" className="cc-btn cc-btn-primary">
                💻 Practice Coding Directly
              </Link>
              <Link to="/practice-questions" className="cc-btn cc-btn-outline">
                📝 Take 25 Practice Questions
              </Link>
              <Link to="/interview-questions" className="cc-btn cc-btn-secondary">
                💬 Review 15 Interview Q&As
              </Link>
            </div>
          </div>
        </div>

        {/* 1. Required Skills Section */}
        <div className="cc-box-card">
          <h2>🛠 Required Skills for {category.title}</h2>
          <div className="cc-skill-split">
            <div className="cc-skill-col">
              <h3>Basic / Fundamental Skills</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--cc-text-muted)", marginBottom: "0.75rem" }}>
                Foundational mindset and core concepts freshers should have:
              </p>
              <ul className="cc-checklist">
                {category.requiredSkills.basicSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="cc-skill-col">
              <h3>Technical Skills</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--cc-text-muted)", marginBottom: "0.75rem" }}>
                Key programming and system skills required for this job:
              </p>
              <ul className="cc-checklist">
                {category.requiredSkills.technicalSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Technologies Used */}
        <div className="cc-box-card">
          <h2>⚡ Technologies & Tools Used</h2>
          <p style={{ color: "var(--cc-text-muted)", fontSize: "0.95rem", marginBottom: "1rem" }}>
            The primary programming languages, frameworks, databases, and software used in this career:
          </p>
          <div className="cc-tag-list" style={{ gap: "0.6rem" }}>
            {category.technologies.map((tech, index) => (
              <span
                key={index}
                className="cc-tag"
                style={{ fontSize: "0.92rem", padding: "0.4rem 0.85rem", background: "var(--cc-primary-light)", color: "var(--cc-primary)", borderColor: "#c7d2fe", fontWeight: "600" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Beginner Learning Path */}
        <div className="cc-box-card">
          <h2>🗺️ Beginner Learning Path for Students</h2>
          <p style={{ color: "var(--cc-text-muted)", fontSize: "0.95rem", marginBottom: "1.25rem" }}>
            Follow this clear step-by-step path: What to learn first, what to learn next, what to practice, and what to prepare before interviews.
          </p>
          <div className="cc-timeline">
            {category.learningPath.map((step) => (
              <div key={step.step} className="cc-timeline-item">
                <div className="cc-timeline-number">{step.step}</div>
                <div className="cc-timeline-body">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Practical Hands-on Practice */}
        <div className="cc-box-card">
          <h2>💻 Hands-on Practice Areas & Mini-Projects</h2>
          <p style={{ color: "var(--cc-text-muted)", fontSize: "0.95rem", marginBottom: "1rem" }}>
            College students should practice these practical tasks to build confidence and explain in interviews:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {category.practice.map((task, index) => (
              <div
                key={index}
                style={{
                  background: "#f8fafc",
                  border: "1px solid var(--cc-border)",
                  borderRadius: "10px",
                  padding: "1rem",
                  display: "flex",
                  gap: "0.6rem"
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>📌</span>
                <span style={{ fontSize: "0.92rem", color: "#334155", lineHeight: "1.5" }}>
                  {task}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Interview Preparation */}
        <div className="cc-box-card">
          <h2>💬 Common Interview Preparation Questions</h2>
          <p style={{ color: "var(--cc-text-muted)", fontSize: "0.95rem", marginBottom: "1.25rem" }}>
            Sample technical interview questions asked to freshers for this specific role:
          </p>
          {category.interviewPrep.map((qa, index) => (
            <div key={index} className="cc-faq-item">
              <div className="cc-faq-question" style={{ cursor: "default" }}>
                <span>Q{index + 1}: {qa.question}</span>
              </div>
              <div className="cc-faq-answer">
                <strong>Answer:</strong> {qa.answer}
              </div>
            </div>
          ))}
        </div>

        {/* 6. Career Opportunities */}
        <div className="cc-box-card">
          <h2>💼 Starting Fresher Roles & Designations</h2>
          <div className="cc-tag-list" style={{ gap: "0.5rem" }}>
            {category.careerOpportunities.map((opp, index) => (
              <span key={index} className="cc-tag" style={{ background: "#ecfdf5", color: "#065f46", borderColor: "#a7f3d0", fontWeight: "600" }}>
                ✓ {opp}
              </span>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
