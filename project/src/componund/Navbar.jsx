import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./careercraft.css";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="cc-navbar">
      <div className="cc-nav-inner">
        <Link to="/" className="cc-nav-brand">
          <span>🚀 CareerCraft</span>
          <span className="cc-nav-brand-badge">IT Careers</span>
        </Link>

        <nav className="cc-nav-links">
          <Link
            to="/"
            className={`cc-nav-link ${currentPath === "/" ? "active" : ""}`}
          >
            Home
          </Link>

          <Link
            to="/jobs"
            className={`cc-nav-link ${currentPath.startsWith("/jobs") ? "active" : ""}`}
          >
            IT Job Categories
          </Link>

          <Link
            to="/skills"
            className={`cc-nav-link ${currentPath === "/skills" ? "active" : ""}`}
          >
            Skill Development
          </Link>

          <Link
            to="/learning-path"
            className={`cc-nav-link ${currentPath === "/learning-path" ? "active" : ""}`}
          >
            Learning Path
          </Link>

          <Link
            to="/coding-practice"
            className={`cc-nav-link ${currentPath === "/coding-practice" ? "active" : ""}`}
          >
            Coding Practice
          </Link>

          <Link
            to="/practice-questions"
            className={`cc-nav-link ${currentPath === "/practice-questions" ? "active" : ""}`}
          >
            Practice Test (25 Qs)
          </Link>

          <Link
            to="/interview-questions"
            className={`cc-nav-link ${currentPath === "/interview-questions" ? "active" : ""}`}
          >
            Interview Q&A (15 Qs)
          </Link>

          <Link
            to="/interview-prep"
            className={`cc-nav-link ${currentPath === "/interview-prep" ? "active" : ""}`}
          >
            Interview Prep
          </Link>

          <Link
            to="/communication-skills"
            className={`cc-nav-link ${currentPath === "/communication-skills" ? "active" : ""}`}
          >
            Communication
          </Link>

          <Link
            to="/login"
            className="cc-nav-link cc-nav-auth-btn"
          >
            Login / Signup
          </Link>
        </nav>
      </div>
    </header>
  );
}
