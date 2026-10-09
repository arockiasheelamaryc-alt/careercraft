import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./careercraft.css";

export default function StudentDashboard() {
  const { user, logout } = useAuth();

  const [preparedCount, setPreparedCount] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("careercraft_prepared_questions");
      if (saved) {
        const parsed = JSON.parse(saved);
        setPreparedCount(Array.isArray(parsed) ? parsed.length : 0);
      }
    } catch {}
  }, []);

  const handleLogout = async () => {
    await logout();
  };

  const features = [
    {
      title: "IT Job Categories",
      icon: "💼",
      desc: "Explore 10 high-growth IT job categories with skills, career roadmaps, and salary insights.",
      link: "/jobs",
      badge: "10 Categories",
      btnText: "Explore Job Categories"
    },
    {
      title: "Learning Paths",
      icon: "🗺️",
      desc: "Structured phase-by-phase learning pathways covering beginner to advanced tech competencies.",
      link: "/learning",
      badge: "Step-by-Step",
      btnText: "Open Learning Path"
    },
    {
      title: "Coding Practice Playground",
      icon: "💻",
      desc: "Write and execute HTML, CSS, JavaScript, and React JSX directly in your browser with real-time output.",
      link: "/coding-practice",
      badge: "4 Environments",
      btnText: "Launch Playground"
    },
    {
      title: "Interview Questions (25 Qs)",
      icon: "🎯",
      desc: "Practice 250 curated role-specific technical and analytical interview questions across 10 categories.",
      link: "/interview-questions",
      badge: "250 Questions",
      btnText: "Practice Questions"
    },
    {
      title: "Communication Skills Lab",
      icon: "🗣️",
      desc: "Practice Grammar, Vocabulary, Reading, Speaking with microphone recording & feedback, and Workplace English.",
      link: "/communication-skills",
      badge: "7 Practice Labs",
      btnText: "Start Communication Lab"
    }
  ];

  return (
    <div className="cc-page-container">
      <Navbar />

      <main className="cc-main-content">
        <div className="cc-dash-container">
          {/* Welcome Banner */}
          <div className="cc-dash-banner">
            <div className="cc-dash-banner-content">
              <div className="cc-dash-role-badge">🎓 Student Portal</div>
              <h1 className="cc-dash-title">
                Welcome back, {user?.name || "Student"}!
              </h1>
              <p className="cc-dash-subtitle">
                Logged in as <strong>{user?.email}</strong> • Ready to accelerate your IT career preparation.
              </p>
            </div>
            <div className="cc-dash-banner-actions">
              <button onClick={handleLogout} className="cc-dash-logout-btn">
                🚪 Log Out
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="cc-dash-metrics-grid">
            <div className="cc-dash-metric-card">
              <div className="cc-dash-metric-icon">💼</div>
              <div className="cc-dash-metric-val">10</div>
              <div className="cc-dash-metric-label">IT Job Tracks</div>
            </div>
            <div className="cc-dash-metric-card">
              <div className="cc-dash-metric-icon">💻</div>
              <div className="cc-dash-metric-val">4</div>
              <div className="cc-dash-metric-label">Coding Playgrounds</div>
            </div>
            <div className="cc-dash-metric-card">
              <div className="cc-dash-metric-icon">🎯</div>
              <div className="cc-dash-metric-val">{preparedCount} / 250</div>
              <div className="cc-dash-metric-label">Interview Qs Mastered</div>
            </div>
            <div className="cc-dash-metric-card">
              <div className="cc-dash-metric-icon">🗣️</div>
              <div className="cc-dash-metric-val">7</div>
              <div className="cc-dash-metric-label">Communication Labs</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="cc-dash-section">
            <div className="cc-dash-section-header">
              <h2>🚀 Your Learning & Practice Hub</h2>
              <p>All core Career Craft modules are unlocked and ready for your preparation.</p>
            </div>

            <div className="cc-dash-grid">
              {features.map((item, idx) => (
                <div key={idx} className="cc-dash-card">
                  <div className="cc-dash-card-top">
                    <span className="cc-dash-card-icon">{item.icon}</span>
                    <span className="cc-dash-card-badge">{item.badge}</span>
                  </div>
                  <h3 className="cc-dash-card-title">{item.title}</h3>
                  <p className="cc-dash-card-desc">{item.desc}</p>
                  <Link to={item.link} className="cc-dash-card-btn">
                    {item.btnText} →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Student Profile Info */}
          <div className="cc-dash-profile-card">
            <div className="cc-dash-profile-header">
              <h3>👤 Student Account Profile</h3>
              <span className="cc-status-pill cc-status-active">Active</span>
            </div>
            <div className="cc-dash-profile-details">
              <div className="cc-dash-profile-row">
                <span className="cc-dash-profile-label">Full Name:</span>
                <span className="cc-dash-profile-value">{user?.name || "Student"}</span>
              </div>
              <div className="cc-dash-profile-row">
                <span className="cc-dash-profile-label">Email Address:</span>
                <span className="cc-dash-profile-value">{user?.email}</span>
              </div>
              <div className="cc-dash-profile-row">
                <span className="cc-dash-profile-label">Account Type:</span>
                <span className="cc-dash-profile-value">Career Craft Registered Student</span>
              </div>
              {user?.phone && (
                <div className="cc-dash-profile-row">
                  <span className="cc-dash-profile-label">Mobile:</span>
                  <span className="cc-dash-profile-value">{user.phone}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
