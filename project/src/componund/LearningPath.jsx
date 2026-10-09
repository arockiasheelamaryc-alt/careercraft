import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getLearningPath, allCategoriesList } from "../data/learning";
import StudyMaterialModal from "./StudyMaterialModal";
import learningBg from "./learning-bg.jpg";
import "./LearningPath.css";

export default function LearningPath() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const currentCategoryId = categoryId || "web-development";
  const categoryData = getLearningPath(currentCategoryId);

  
  const [activeItem, setActiveItem] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  
  useEffect(() => {
    if (categoryData && categoryData.technologies.length > 0) {
      setActiveItem(categoryData.technologies[0].id);
    }
    setSearchTerm("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentCategoryId, categoryData]);

  
  const handleCategoryChange = (newCatId) => {
    navigate(`/jobs/${newCatId}`);
  };

  
  const activeTechIndex = categoryData.technologies.findIndex(
    (t) => t.id === activeItem
  );
  const activeTech =
    activeTechIndex !== -1 ? categoryData.technologies[activeTechIndex] : null;
  const isPracticeTest = activeItem === "practice-test";

  
  const filteredTechs = categoryData.technologies.filter((tech) =>
    tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tech.tagline.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const handleCopyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIdx(index);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  
  const handlePrevTopic = () => {
    if (isPracticeTest) {
      setActiveItem(
        categoryData.technologies[categoryData.technologies.length - 1].id
      );
    } else if (activeTechIndex > 0) {
      setActiveItem(categoryData.technologies[activeTechIndex - 1].id);
    }
    window.scrollTo({ top: 280, behavior: "smooth" });
  };

  const handleNextTopic = () => {
    if (activeTechIndex < categoryData.technologies.length - 1) {
      setActiveItem(categoryData.technologies[activeTechIndex + 1].id);
    } else {
      setActiveItem("practice-test");
    }
    window.scrollTo({ top: 280, behavior: "smooth" });
  };

  return (
    <div className="lp-page-wrapper">
      {/* 1. TOP BRANDING BAR */}
      <nav className="lp-top-bar">
        <Link to="/" className="lp-brand-link">
          <span>🚀</span>
          <span>Career Craft</span>
        </Link>

        <div className="lp-top-actions">
          <Link to="/jobs" className="lp-back-nav">
            &larr; Back to IT Job Categories
          </Link>
          <Link
            to={`/interview-questions/${currentCategoryId}`}
            className="lp-back-nav"
            style={{ color: "#e0259b", fontWeight: 600 }}
          >
            🎯 25 Interview Qs
          </Link>
          <button
            className="lp-btn-pdf"
            onClick={() => setIsPdfModalOpen(true)}
            title="Download or Print Study Material"
          >
            📄 Study Material / PDF
          </button>
        </div>
      </nav>

      {/* 2. CATEGORY SELECTOR BAR (Switch across all 10 IT Categories) */}
      <div className="lp-category-selector-bar">
        {allCategoriesList.map((cat) => (
          <button
            key={cat.id}
            className={`lp-cat-pill ${cat.id === currentCategoryId ? "active" : ""}`}
            onClick={() => handleCategoryChange(cat.id)}
          >
            <span>{cat.icon}</span>
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* 3. HERO BANNER WITH CUSTOM GENERATED BACKGROUND IMAGE */}
      <header
        className="lp-hero-banner"
        style={{ backgroundImage: `url(${learningBg})` }}
      >
        <div className="lp-hero-overlay"></div>
        <div className="lp-hero-content">
          <div>
            <div className="lp-hero-badge">
              <span>{categoryData.icon}</span>
              <span>{categoryData.role}</span>
            </div>
            <h1 className="lp-hero-title">
              {categoryData.title} &bull; Learning Path
            </h1>
            <p className="lp-hero-desc">{categoryData.summary}</p>
          </div>

          <div className="lp-hero-buttons">
            <button
              className="lp-btn-pdf"
              onClick={() => setIsPdfModalOpen(true)}
            >
              📥 Open Study Guide / PDF
            </button>
            <button
              className="lp-btn-switch"
              onClick={() => setActiveItem("practice-test")}
            >
              📝 Take Practice Test ({categoryData.practiceTest.totalQuestions} Qs)
            </button>
            <Link
              to={`/interview-questions/${currentCategoryId}`}
              className="lp-btn-switch"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              🎯 25 Interview Questions
            </Link>
          </div>
        </div>
      </header>

      {/* 4. MAIN LAYOUT: ONLY LEFT-SIDE MENU + CENTER CONTENT (NO RIGHT NAVBAR) */}
      <main className="lp-main-layout">
        {/* ==========================================================
            LEFT-SIDE LEARNING NAVIGATION MENU
            ========================================================== */}
        <aside className="lp-sidebar-left">
          <div className="lp-sidebar-header">
            <div className="lp-sidebar-title">
              <span>Key Technologies</span>
              <span style={{ fontSize: "0.78rem", color: "var(--lp-primary)", fontWeight: 600 }}>
                {categoryData.technologies.length} Topics
              </span>
            </div>
            <p className="lp-sidebar-subtitle">
              Select any topic below to view full learning details in the center.
            </p>
          </div>

          {/* Search Box */}
          <div className="lp-sidebar-search">
            <span className="lp-search-icon">🔍</span>
            <input
              type="text"
              className="lp-sidebar-input"
              placeholder="Filter topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* List of Key Technologies for this Category */}
          <div className="lp-nav-list">
            {filteredTechs.map((tech, idx) => {
              const isSelected = activeItem === tech.id;
              return (
                <button
                  key={tech.id}
                  className={`lp-nav-item ${isSelected ? "active" : ""}`}
                  onClick={() => {
                    setActiveItem(tech.id);
                    window.scrollTo({ top: 280, behavior: "smooth" });
                  }}
                >
                  <div className="lp-nav-step-number">{idx + 1}</div>
                  <div className="lp-nav-item-content">
                    <div className="lp-nav-item-name">{tech.name}</div>
                    <div className="lp-nav-item-sub">{tech.tagline}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Practice Test Menu Item (Questions Only) */}
          <button
            className={`lp-nav-test-item ${isPracticeTest ? "active" : ""}`}
            onClick={() => {
              setActiveItem("practice-test");
              window.scrollTo({ top: 280, behavior: "smooth" });
            }}
          >
            <span style={{ fontSize: "1.4rem" }}>📝</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "#92400e" }}>
                Practice Test
              </div>
              <div style={{ fontSize: "0.76rem", color: "#b45309" }}>
                {categoryData.practiceTest.totalQuestions} Questions (Questions Only)
              </div>
            </div>
            <span className="lp-test-badge">Test</span>
          </button>
        </aside>

        {/* ==========================================================
            CENTER LEARNING CONTENT AREA
            Full detailed content for student learning (NO right navbar)
            ========================================================== */}
        <section className="lp-content-center">
          {/* CASE 1: PRACTICE TEST VIEW (Questions Only, No Answers) */}
          {isPracticeTest ? (
            <div>
              <div className="lp-practice-header">
                <span className="lp-practice-badge">Self-Evaluation Assessment</span>
                <h2 className="lp-practice-title">
                  {categoryData.practiceTest.categoryTitle} &bull; Practice Test
                </h2>
                <p className="lp-practice-instructions">
                  {categoryData.practiceTest.instructions}
                </p>
                <div className="lp-practice-notice">
                  <span>🔒</span> Notice: This test contains questions only. Write down
                  your answers in your offline study notebook.
                </div>
              </div>

              <div className="lp-questions-list">
                {categoryData.practiceTest.questions.map((q, idx) => (
                  <div key={q.id} className="lp-question-card">
                    <div className="lp-q-header">
                      <span className="lp-q-number">Question {idx + 1} of {categoryData.practiceTest.totalQuestions}</span>
                      <span className="lp-q-tech">{q.technology}</span>
                    </div>
                    <p className="lp-q-text">{q.question}</p>
                  </div>
                ))}
              </div>

              {/* Navigation Footer */}
              <div className="lp-nav-footer">
                <button
                  className="lp-nav-footer-btn"
                  onClick={() =>
                    setActiveItem(
                      categoryData.technologies[
                        categoryData.technologies.length - 1
                      ].id
                    )
                  }
                >
                  &larr; Back to{" "}
                  {
                    categoryData.technologies[
                      categoryData.technologies.length - 1
                    ].name
                  }
                </button>
                <button
                  className="lp-nav-footer-btn primary"
                  onClick={() => setIsPdfModalOpen(true)}
                >
                  📄 Save Questions as PDF
                </button>
              </div>
            </div>
          ) : activeTech ? (
            /* CASE 2: COMPLETE TECHNOLOGY LEARNING CONTENT */
            <article className="lp-card">
              {/* Header */}
              <header className="lp-tech-header">
                <div className="lp-tech-meta">
                  <span className="lp-tech-order">
                    Technology {activeTechIndex + 1} of{" "}
                    {categoryData.technologies.length}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--lp-text-muted)" }}>
                    &bull; {categoryData.title} Track
                  </span>
                </div>
                <h2 className="lp-tech-name">{activeTech.name}</h2>
                <p className="lp-tech-tagline">{activeTech.tagline}</p>
              </header>

              {/* Beginner Friendly Intuition Analogy */}
              <div className="lp-intuition-box">
                <div className="lp-intuition-icon">💡</div>
                <div>
                  <h3 className="lp-intuition-title">
                    Beginner-Friendly Explanation
                  </h3>
                  <p className="lp-intuition-text">
                    {activeTech.beginnerFriendly}
                  </p>
                </div>
              </div>

              {/* Section 1: What is it? & Why is it used? */}
              <div className="lp-section-block">
                <h3 className="lp-section-heading">
                  <span className="icon">📘</span> What is {activeTech.name}?
                </h3>
                <p className="lp-section-p">{activeTech.whatIsIt}</p>

                <h3 className="lp-section-heading" style={{ marginTop: "1.5rem" }}>
                  <span className="icon">🎯</span> Why is it used?
                </h3>
                <p className="lp-section-p">{activeTech.whyUsed}</p>

                <h3 className="lp-section-heading" style={{ marginTop: "1.5rem" }}>
                  <span className="icon">📍</span> Where is it used?
                </h3>
                <p className="lp-section-p">{activeTech.whereUsed}</p>
              </div>

              {/* Section 2: Main Features */}
              <div className="lp-section-block">
                <h3 className="lp-section-heading">
                  <span className="icon">⚡</span> Main Features of {activeTech.name}
                </h3>
                <div className="lp-feature-grid">
                  {activeTech.mainFeatures.map((feat, idx) => {
                    const parts = feat.split(":");
                    const title = parts.length > 1 ? parts[0] : `Feature ${idx + 1}`;
                    const desc = parts.length > 1 ? parts.slice(1).join(":") : feat;
                    return (
                      <div key={idx} className="lp-feature-card">
                        <h4>{title}</h4>
                        <p>{desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Section 3: Important Concepts */}
              <div className="lp-section-block">
                <h3 className="lp-section-heading">
                  <span className="icon">🧠</span> Important Concepts to Master
                </h3>
                <div className="lp-concept-list">
                  {activeTech.importantConcepts.map((concept, idx) => (
                    <div key={idx} className="lp-concept-item">
                      <div className="lp-concept-title">
                        {idx + 1}. {concept.title}
                      </div>
                      <p className="lp-concept-desc">{concept.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: How it Works & Step-by-Step Learning Explanation */}
              <div className="lp-section-block">
                <h3 className="lp-section-heading">
                  <span className="icon">⚙️</span> How it Works
                </h3>
                <p className="lp-section-p">{activeTech.howItWorks}</p>

                <h3 className="lp-section-heading" style={{ marginTop: "1.5rem" }}>
                  <span className="icon">🪜</span> Step-by-Step Learning Guide
                </h3>
                <div className="lp-timeline">
                  {activeTech.stepByStep.map((step, idx) => (
                    <div key={idx} className="lp-timeline-step">
                      <span className="lp-step-badge">Step {idx + 1}</span>
                      <span className="lp-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Syntax where applicable */}
              {activeTech.syntax && (
                <div className="lp-section-block">
                  <h3 className="lp-section-heading">
                    <span className="icon">💻</span> Syntax &amp; Usage
                  </h3>
                  <div className="lp-code-block-wrapper">
                    <div className="lp-code-header">
                      <span className="lp-code-label">{activeTech.name} Syntax</span>
                      <button
                        className="lp-copy-btn"
                        onClick={() => handleCopyCode(activeTech.syntax, "syntax")}
                      >
                        {copiedCodeIdx === "syntax" ? "✓ Copied!" : "📋 Copy"}
                      </button>
                    </div>
                    <pre className="lp-code-content">
                      <code>{activeTech.syntax}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Section 6: Examples & Practical Examples */}
              <div className="lp-section-block">
                <h3 className="lp-section-heading">
                  <span className="icon">🧪</span> Practical Examples
                </h3>
                {activeTech.examples.map((ex, idx) => (
                  <div key={idx} style={{ marginBottom: "1.25rem" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--lp-text-dark)", marginBottom: "0.5rem" }}>
                      Example {idx + 1}: {ex.title}
                    </h4>
                    <div className="lp-code-block-wrapper">
                      <div className="lp-code-header">
                        <span className="lp-code-label">Code Demonstration</span>
                        <button
                          className="lp-copy-btn"
                          onClick={() => handleCopyCode(ex.code, `ex-${idx}`)}
                        >
                          {copiedCodeIdx === `ex-${idx}` ? "✓ Copied!" : "📋 Copy"}
                        </button>
                      </div>
                      <pre className="lp-code-content">
                        <code>{ex.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}

                <p className="lp-section-p" style={{ marginTop: "1rem" }}>
                  <strong>Project Application:</strong> {activeTech.practicalExamples}
                </p>
              </div>

              {/* Section 7: Real-World Usage */}
              <div className="lp-section-block">
                <h3 className="lp-section-heading">
                  <span className="icon">🌐</span> Real-World Usage &amp; Industry Adoption
                </h3>
                <p className="lp-section-p">{activeTech.realWorldUsage}</p>
              </div>

              {/* Section 8: Important Points & Gotchas */}
              <div className="lp-points-box">
                <div className="lp-points-title">
                  <span>⚠️</span> Important Points &amp; Best Practices
                </div>
                <ul className="lp-points-list">
                  {activeTech.importantPoints.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>

              {/* Section 9: Things Students Should Learn */}
              <div className="lp-section-block" style={{ marginTop: "1.75rem" }}>
                <h3 className="lp-section-heading">
                  <span className="icon">📋</span> Things Students Should Learn
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.75rem" }}>
                  {activeTech.thingsToLearn.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "var(--lp-bg-page)",
                        padding: "0.85rem 1rem",
                        borderRadius: "8px",
                        border: "1px solid var(--lp-border)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        fontSize: "0.9rem"
                      }}
                    >
                      <span style={{ color: "var(--lp-success)", fontWeight: 700 }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 10: Mini Practical Tasks */}
              <div className="lp-task-box">
                <div className="lp-task-title">
                  <span>🛠️</span> Mini Practical Tasks for Students
                </div>
                <ol className="lp-task-list">
                  {activeTech.miniPracticalTasks.map((task, idx) => (
                    <li key={idx} style={{ marginBottom: "0.4rem" }}>
                      {task}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Bottom Pagination Buttons */}
              <footer className="lp-nav-footer">
                {activeTechIndex > 0 ? (
                  <button className="lp-nav-footer-btn" onClick={handlePrevTopic}>
                    &larr; Previous:{" "}
                    {categoryData.technologies[activeTechIndex - 1].name}
                  </button>
                ) : (
                  <div></div>
                )}

                <button className="lp-nav-footer-btn primary" onClick={handleNextTopic}>
                  {activeTechIndex < categoryData.technologies.length - 1
                    ? `Next: ${categoryData.technologies[activeTechIndex + 1].name} →`
                    : "Next: Category Practice Test →"}
                </button>
              </footer>
            </article>
          ) : (
            <div>Select a topic from the left-side menu to view content.</div>
          )}
        </section>
      </main>

    
      <StudyMaterialModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        categoryData={categoryData}
        activeTech={activeTech}
      />
    </div>
  );
}
