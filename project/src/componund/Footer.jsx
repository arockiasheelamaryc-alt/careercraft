import React from "react";
import { Link } from "react-router-dom";
import "./careercraft.css";

export default function Footer() {
  return (
    <footer className="cc-footer">
      <div className="cc-footer-inner">
        <div className="cc-footer-brand">
          <h3>CareerCraft</h3>
          <p>A simple IT career development platform for college students and freshers.</p>
        </div>

        <div className="cc-footer-links">
          <Link to="/" className="cc-footer-link">Home</Link>
          <Link to="/jobs" className="cc-footer-link">10 IT Job Categories</Link>
          <Link to="/skills" className="cc-footer-link">Skill Development</Link>
          <Link to="/learning-path" className="cc-footer-link">Learning Path</Link>
          <Link to="/coding-practice" className="cc-footer-link">Coding Tool</Link>
          <Link to="/practice-questions" className="cc-footer-link">25 Practice Questions</Link>
          <Link to="/interview-questions" className="cc-footer-link">15 Interview Questions</Link>
          <Link to="/interview-prep" className="cc-footer-link">Interview Prep</Link>
          <Link to="/communication-skills" className="cc-footer-link">Communication</Link>
        </div>
      </div>
    </footer>
  );
}
