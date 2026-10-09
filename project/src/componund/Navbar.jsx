import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./careercraft.css";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="cc-navbar">
      <div className="cc-nav-inner">
        <Link to="/" className="cc-nav-brand">
          <span>🚀 Career Craft</span>
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
            to="/coding-practice"
            className={`cc-nav-link ${currentPath === "/coding-practice" ? "active" : ""}`}
          >
            Coding Practice
          </Link>

          <Link
            to="/interview-questions"
            className={`cc-nav-link ${currentPath.startsWith("/interview-questions") ? "active" : ""}`}
          >
            Interview Questions (25 Qs)
          </Link>

          <Link
            to="/communication-skills"
            className={`cc-nav-link ${currentPath === "/communication-skills" ? "active" : ""}`}
          >
            Communication Skills
          </Link>

          {/* Role-Based Dashboard Links */}
          {isAuthenticated && user && (
            user.role === "admin" ? (
              <Link
                to="/admin-dashboard"
                className={`cc-nav-link cc-nav-admin-link ${currentPath === "/admin-dashboard" ? "active" : ""}`}
              >
                🛡️ Admin Dashboard
              </Link>
            ) : (
              <Link
                to="/student-dashboard"
                className={`cc-nav-link cc-nav-student-link ${currentPath === "/student-dashboard" ? "active" : ""}`}
              >
                🎓 My Dashboard
              </Link>
            )
          )}

          {/* Auth State Button */}
          {isAuthenticated && user ? (
            <div className="cc-nav-user-actions">
              <span className="cc-nav-user-badge" title={user.email}>
                {user.role === "admin" ? "🛡️ Admin" : `🎓 ${user.name || "Student"}`}
              </span>
              <button
                type="button"
                onClick={logout}
                className="cc-nav-logout-btn"
                title="Log Out of Career Craft"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className={`cc-nav-link cc-nav-auth-btn ${currentPath === "/login" || currentPath === "/signup" ? "active" : ""}`}
            >
              Login / Sign Up
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
