import React from "react";
import { Link } from "react-router-dom";
import "./careercraft.css";

export default function Footer() {
  return (
    <footer className="cc-footer">
      <div className="cc-footer-inner">
        <div className="cc-footer-brand">
          <h3>🚀 Career Craft</h3>
          <p>© {new Date().getFullYear()} Career Craft. All rights reserved.</p>
        </div>
        <div className="cc-footer-links">
          <Link to="/" className="cc-footer-link">Home</Link>
          <Link to="/jobs" className="cc-footer-link">Jobs</Link>
          <Link to="/login" className="cc-footer-link">Login</Link>
        </div>
      </div>
    </footer>
  );
}
