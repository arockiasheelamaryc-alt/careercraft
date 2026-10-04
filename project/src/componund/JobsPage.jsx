import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { itCategories } from "../data/categoriesData";
import "./careercraft.css";

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = itCategories.filter((cat) =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.technologies.some((tech) =>
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="cc-page-container">
      <Navbar />

      <section className="cc-hero-banner">
        <span className="cc-hero-badge">IT Career Exploration</span>
        <h1 className="cc-hero-title">10 IT Job Categories</h1>
        <p className="cc-hero-subtitle">
          Explore the 10 core IT career fields for college students and freshers.
          Learn about job roles, required technical skills, technologies, and interview preparation.
        </p>
      </section>

      <main className="cc-main-content">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <Link to="/" className="cc-back-btn" style={{ marginBottom: 0 }}>
            ← Back to Home
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--cc-text-muted)" }}>Search Careers:</span>
            <input
              type="text"
              placeholder="e.g. React, Python, Cloud..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "0.45rem 0.85rem",
                borderRadius: "8px",
                border: "1px solid var(--cc-border)",
                fontSize: "0.9rem",
                outline: "none"
              }}
            />
          </div>
        </div>

        <div className="cc-section-header">
          <h2 className="cc-section-title">Explore IT Careers for Freshers ({itCategories.length} Categories)</h2>
          <p className="cc-section-desc">
            Select any IT career category below to see detailed beginner learning paths, required tools, practice tasks, and interview questions.
          </p>
        </div>

        <div className="cc-cards-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="cc-job-card">
              <div className="cc-job-card-header">
                <div className="cc-job-card-icon">{category.icon}</div>
                <div>
                  <h3 className="cc-job-card-title">{category.title}</h3>
                  <span className="cc-job-card-role">{category.role}</span>
                </div>
              </div>

              <p className="cc-job-card-desc">{category.shortDesc}</p>

              <div style={{ marginBottom: "0.75rem" }}>
                <strong style={{ fontSize: "0.82rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Key Technologies:
                </strong>
                <div className="cc-tag-list" style={{ marginTop: "0.35rem" }}>
                  {category.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="cc-tag">{tech}</span>
                  ))}
                  {category.technologies.length > 4 && (
                    <span className="cc-tag">+{category.technologies.length - 4} more</span>
                  )}
                </div>
              </div>

              <div style={{ marginTop: "auto", display: "flex", gap: "0.5rem" }}>
                <Link
                  to={`/jobs/${category.id}`}
                  className="cc-btn cc-btn-primary"
                  style={{ flex: 1 }}
                >
                  View Details / Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
