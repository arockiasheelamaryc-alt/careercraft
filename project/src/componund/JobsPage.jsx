import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { itCategories } from "../data/categoriesData";
import itCategoriesBg from "./it-categories-bg.jpg";
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

      <section
        className="cc-hero-banner"
        style={{
          backgroundImage: `url(${itCategoriesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <span className="cc-hero-badge">IT Career Tracks</span>
        <h1 className="cc-hero-title">IT Job Categories</h1>
        <p className="cc-hero-subtitle">
          Explore the 10 core IT career fields for college students and freshers.
          Click any category below to access its dedicated Learning Page with topic-wise explanations and code examples.
        </p>
      </section>

      <main className="cc-main-content">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
            <Link to="/" className="cc-back-btn" style={{ marginBottom: 0 }}>
              ← Back to Home
            </Link>
            <Link
              to="/interview-questions"
              className="cc-back-btn"
              style={{
                marginBottom: 0,
                background: "#fdf2f8",
                color: "#e0259b",
                borderColor: "#fbcfe8",
                fontWeight: 600
              }}
            >
              🎯 Interview Questions (25 Qs Each) →
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--cc-text-muted)" }}>Search Categories:</span>
            <input
              type="text"
              placeholder="e.g. React, Python, Java..."
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
          <h2 className="cc-section-title">Select an IT Category to Start Learning ({itCategories.length} Categories)</h2>
          <p className="cc-section-desc">
            Students can study topic-wise concepts, see practical code examples, and practice interview questions for their chosen IT domain.
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

              <div style={{ marginTop: "auto", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <Link
                  to={`/jobs/${category.id}`}
                  className="cc-btn cc-btn-primary"
                  style={{ flex: 1, textAlign: "center", minWidth: "140px" }}
                >
                  Start Learning →
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
