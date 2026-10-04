import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { practiceQuestions } from "../data/practiceQuestionsData";
import "./careercraft.css";

export default function PracticeQuestions() {
  // Test states: "intro", "in_progress", "submitted"
  const [testState, setTestState] = useState("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionIndex]: selectedOptionIndex }
  const [showReview, setShowReview] = useState(false);

  const totalQuestions = practiceQuestions.length; // Exactly 25

  // Start the test
  const handleStartTest = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setShowReview(false);
    setTestState("in_progress");
  };

  // Select an option
  const handleSelectOption = (optionIndex) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  // Move to next question
  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Move to previous question
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Submit test
  const handleSubmitTest = () => {
    setTestState("submitted");
  };

  // Calculate score
  const calculateScore = () => {
    let correctCount = 0;
    practiceQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });
    const wrongCount = totalQuestions - correctCount;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    let performanceMessage = "";
    let performanceClass = "";

    if (correctCount >= 21) {
      performanceMessage = "Excellent! Outstanding IT technical foundation.";
      performanceClass = "cc-perf-excellent";
    } else if (correctCount >= 16) {
      performanceMessage = "Good! You have a solid grasp of core IT concepts.";
      performanceClass = "cc-perf-good";
    } else if (correctCount >= 10) {
      performanceMessage = "Needs Improvement. Review the topics and practice again.";
      performanceClass = "cc-perf-needs-imp";
    } else {
      performanceMessage = "Keep Practicing. Review the learning paths and retake the test.";
      performanceClass = "cc-perf-keep-practicing";
    }

    return { correctCount, wrongCount, percentage, performanceMessage, performanceClass };
  };

  const results = calculateScore();
  const currentQ = practiceQuestions[currentIndex];
  const selectedOption = userAnswers[currentIndex];
  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="cc-page-container">
      <Navbar />

      <section className="cc-hero-banner">
        <span className="cc-hero-badge">Technical Assessment</span>
        <h1 className="cc-hero-title">IT Practice Questions (Exactly 25 Questions)</h1>
        <p className="cc-hero-subtitle">
          Test your technical IT knowledge in HTML, CSS, JavaScript, React, Node.js, and Databases.
          Complete all 25 multiple-choice questions to receive your score, percentage, and performance rating.
        </p>
      </section>

      <main className="cc-main-content">
        <div style={{ marginBottom: "1.5rem" }}>
          <Link to="/jobs" className="cc-back-btn" style={{ marginBottom: 0 }}>
            ← Back to All IT Job Categories
          </Link>
        </div>

        {/* 1. INTRO SCREEN */}
        {testState === "intro" && (
          <div className="cc-quiz-box" style={{ textAlign: "center", padding: "3rem 2rem" }}>
            <span style={{ fontSize: "3.5rem", display: "block", marginBottom: "1rem" }}>📋</span>
            <h2 style={{ fontSize: "1.8rem", color: "var(--cc-text-dark)", marginBottom: "0.75rem" }}>
              CareerCraft IT Practice Test
            </h2>
            <p style={{ color: "var(--cc-text-muted)", fontSize: "1rem", maxWidth: "550px", margin: "0 auto 1.75rem auto", lineHeight: "1.6" }}>
              This practice test contains exactly <strong>25 multiple-choice questions</strong> designed for college students and freshers.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", maxWidth: "600px", margin: "0 auto 2rem auto", textAlign: "left" }}>
              <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "8px", border: "1px solid var(--cc-border)" }}>
                <strong>Total Questions:</strong> 25 MCQs
              </div>
              <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "8px", border: "1px solid var(--cc-border)" }}>
                <strong>Format:</strong> 4 Options (A, B, C, D)
              </div>
              <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "8px", border: "1px solid var(--cc-border)" }}>
                <strong>No Answer Peek:</strong> Answers hidden until submission
              </div>
              <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "8px", border: "1px solid var(--cc-border)" }}>
                <strong>Detailed Report:</strong> Score, % & Answer Review
              </div>
            </div>

            <button
              className="cc-btn cc-btn-primary"
              onClick={handleStartTest}
              style={{ fontSize: "1.1rem", padding: "0.85rem 2.5rem" }}
            >
              🚀 Start Practice Test Now
            </button>
          </div>
        )}

        {/* 2. IN-PROGRESS SCREEN */}
        {testState === "in_progress" && (
          <div className="cc-quiz-box">
            {/* Header info */}
            <div className="cc-quiz-header">
              <div>
                <span className="cc-quiz-count">
                  Question {currentIndex + 1} of {totalQuestions}
                </span>
                <span style={{ marginLeft: "0.75rem", fontSize: "0.82rem", background: "var(--cc-primary-light)", color: "var(--cc-primary)", padding: "0.2rem 0.55rem", borderRadius: "4px", fontWeight: "600" }}>
                  {currentQ.topic}
                </span>
              </div>
              <div style={{ fontSize: "0.88rem", color: "var(--cc-text-muted)" }}>
                Answered: <strong>{answeredCount}</strong> / {totalQuestions}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="cc-progress-track">
              <div
                className="cc-progress-bar-fill"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h3 className="cc-quiz-prompt">
              {currentIndex + 1}. {currentQ.question}
            </h3>

            {/* Options A, B, C, D */}
            <div className="cc-quiz-options">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                return (
                  <button
                    key={idx}
                    className={`cc-option-btn ${isSelected ? "selected" : ""}`}
                    onClick={() => handleSelectOption(idx)}
                  >
                    <span className="cc-option-letter">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="cc-quiz-footer">
              <button
                className="cc-btn cc-btn-secondary"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
              >
                ← Previous
              </button>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                {currentIndex < totalQuestions - 1 ? (
                  <button
                    className="cc-btn cc-btn-primary"
                    onClick={handleNext}
                  >
                    Next Question →
                  </button>
                ) : (
                  <button
                    className="cc-btn cc-btn-primary"
                    onClick={handleSubmitTest}
                    style={{ background: "#059669" }}
                  >
                    ✓ Submit All 25 Questions
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 3. SUBMITTED / RESULT SCREEN */}
        {testState === "submitted" && (
          <div>
            <div className="cc-score-card">
              <span style={{ fontSize: "3rem", display: "block", marginBottom: "0.5rem" }}>🎉</span>
              <h2 style={{ fontSize: "1.75rem", margin: "0 0 0.5rem 0", color: "var(--cc-text-dark)" }}>
                Practice Test Completed!
              </h2>
              <p style={{ color: "var(--cc-text-muted)", fontSize: "0.95rem", margin: "0 0 1.5rem 0" }}>
                Here is your complete performance report for all 25 IT questions:
              </p>

              {/* Big Score Circle */}
              <div className="cc-score-circle">
                <span className="cc-score-num">{results.correctCount}</span>
                <span className="cc-score-total">out of {totalQuestions}</span>
              </div>

              {/* Performance Message */}
              <div className={`cc-performance-badge ${results.performanceClass}`}>
                {results.performanceMessage}
              </div>

              {/* Stats Box: Correct, Wrong, Percentage */}
              <div className="cc-score-stats">
                <div className="cc-stat-box">
                  <div className="cc-stat-label">Correct Answers</div>
                  <div className="cc-stat-val" style={{ color: "#059669" }}>
                    {results.correctCount}
                  </div>
                </div>

                <div className="cc-stat-box">
                  <div className="cc-stat-label">Wrong Answers</div>
                  <div className="cc-stat-val" style={{ color: "#dc2626" }}>
                    {results.wrongCount}
                  </div>
                </div>

                <div className="cc-stat-box">
                  <div className="cc-stat-label">Score Percentage</div>
                  <div className="cc-stat-val" style={{ color: "var(--cc-primary)" }}>
                    {results.percentage}%
                  </div>
                </div>
              </div>

              {/* Grading Criteria Table */}
              <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "10px", margin: "1.5rem 0", textAlign: "left", fontSize: "0.88rem" }}>
                <strong style={{ color: "#334155" }}>Performance Scale:</strong>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "0.5rem", marginTop: "0.5rem" }}>
                  <div style={{ color: "#059669" }}>• 21–25: Excellent</div>
                  <div style={{ color: "#2563eb" }}>• 16–20: Good</div>
                  <div style={{ color: "#d97706" }}>• 10–15: Needs Improvement</div>
                  <div style={{ color: "#dc2626" }}>• Below 10: Keep Practicing</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  className="cc-btn cc-btn-primary"
                  onClick={handleStartTest}
                >
                  ↻ Retake Practice Test
                </button>

                <button
                  className="cc-btn cc-btn-outline"
                  onClick={() => setShowReview(!showReview)}
                >
                  {showReview ? "▲ Hide Answer Review" : "👁️ Review All 25 Answers"}
                </button>

                <Link to="/coding-practice" className="cc-btn cc-btn-secondary">
                  💻 Practice Coding
                </Link>
              </div>
            </div>

            {/* Answer Review Section */}
            {showReview && (
              <div style={{ maxWidth: "800px", margin: "2rem auto 0 auto" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "1rem", color: "var(--cc-text-dark)" }}>
                  Detailed Review of All 25 Practice Questions:
                </h3>

                {practiceQuestions.map((q, idx) => {
                  const studentAnswer = userAnswers[idx];
                  const isCorrect = studentAnswer === q.correctAnswer;
                  const answered = studentAnswer !== undefined;

                  return (
                    <div
                      key={q.id}
                      className="cc-box-card"
                      style={{
                        borderLeft: `5px solid ${isCorrect ? "#059669" : "#dc2626"}`,
                        marginBottom: "1rem",
                        padding: "1.25rem"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                        <span style={{ fontWeight: "700", color: "#1e293b", fontSize: "1rem" }}>
                          Q{idx + 1}. {q.question}
                        </span>
                        <span
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: "700",
                            padding: "0.2rem 0.55rem",
                            borderRadius: "4px",
                            background: isCorrect ? "#ecfdf5" : "#fef2f2",
                            color: isCorrect ? "#059669" : "#dc2626"
                          }}
                        >
                          {isCorrect ? "✓ Correct (+1)" : "✗ Incorrect (0)"}
                        </span>
                      </div>

                      <div style={{ margin: "0.75rem 0", fontSize: "0.92rem", lineHeight: "1.6" }}>
                        <div>
                          <strong>Your Answer: </strong>
                          <span style={{ color: isCorrect ? "#059669" : "#dc2626" }}>
                            {answered ? `${String.fromCharCode(65 + studentAnswer)}. ${q.options[studentAnswer]}` : "Not Answered"}
                          </span>
                        </div>
                        {!isCorrect && (
                          <div style={{ color: "#059669", marginTop: "0.2rem" }}>
                            <strong>Correct Answer: </strong>
                            <span>
                              {String.fromCharCode(65 + q.correctAnswer)}. {q.options[q.correctAnswer]}
                            </span>
                          </div>
                        )}
                      </div>

                      <div style={{ background: "#f8fafc", padding: "0.6rem 0.85rem", borderRadius: "6px", fontSize: "0.85rem", color: "#475569" }}>
                        <strong>Explanation: </strong> {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
