import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./careercraft.css";

export default function InterviewPrep() {
  const prepSections = [
    {
      id: "technical",
      title: "1. Technical Preparation",
      icon: "💻",
      summary: "Understand core programming concepts, data structures, and foundational IT theory.",
      checklist: [
        "Revise Object-Oriented Programming (OOPs: Classes, Objects, Inheritance, Polymorphism).",
        "Review common Data Structures: Arrays, Strings, Stacks, Queues, and basic Searching/Sorting.",
        "Master SQL CRUD queries: SELECT, INSERT, UPDATE, DELETE, and table JOINs.",
        "Understand web fundamentals: HTML semantic tags, CSS Box Model, JavaScript DOM & Events.",
        "Be ready to write clean code on paper or a plain notepad without autocomplete."
      ],
      actionLink: "/interview-questions",
      actionText: "Review 15 Technical Interview Q&As"
    },
    {
      id: "coding",
      title: "2. Coding Preparation",
      icon: "⌨️",
      summary: "Hands-on coding speed, problem-solving, and writing bug-free syntax.",
      checklist: [
        "Practice standard string and array programs (Palindrome, Anagram, Reverse Array, Fibonacci).",
        "Build small interactive web components: Click counter, To-Do list, form validation.",
        "Practice explaining your logic line-by-line while writing code.",
        "Understand error handling and basic edge cases (empty inputs, negative numbers, null values).",
        "Use our built-in CareerCraft coding tool to practice without installing IDEs."
      ],
      actionLink: "/coding-practice",
      actionText: "Launch Direct Code Editor"
    },
    {
      id: "practice-questions",
      title: "3. Practice Questions Assessment",
      icon: "📝",
      summary: "Self-assessment through multiple-choice technical questions.",
      checklist: [
        "Take timed MCQ quizzes to check your conceptual speed.",
        "Identify weak areas across frontend, backend, and databases.",
        "Read explanations for incorrect answers to solidify understanding.",
        "Aim for a score of 20+ out of 25 before attending company test rounds."
      ],
      actionLink: "/practice-questions",
      actionText: "Take 25 Practice Questions Test"
    },
    {
      id: "interview-questions",
      title: "4. Interview Questions & Expected Answers",
      icon: "💬",
      summary: "Knowing what interviewers expect when they ask common technical questions.",
      checklist: [
        "Memorize clear 2-3 sentence definitions for core technologies (React, Node.js, SQL).",
        "Prepare concrete practical examples for every technical term.",
        "Understand the 'Why' behind tools (Why React instead of plain JavaScript? Why use a database?).",
        "Study the difference questions: var vs let vs const, == vs ===, primary key vs foreign key."
      ],
      actionLink: "/interview-questions",
      actionText: "Read 15 Technical Q&As with Explanations"
    },
    {
      id: "project-explanation",
      title: "5. Project Explanation Strategy",
      icon: "📂",
      summary: "Explaining your college project effectively in 2-3 minutes.",
      checklist: [
        "Use the Problem-Solution-Tech-Role framework for clarity.",
        "Clearly state what problem your application solves for users.",
        "List all technologies used: Frontend (React/HTML/CSS), Backend, Database.",
        "Highlight your personal contribution: 'I built the practice test module and responsive navigation'.",
        "Mention one technical challenge you overcame during the project."
      ],
      actionLink: "/communication-skills",
      actionText: "Practice 1-Min Project Pitch with Timer"
    },
    {
      id: "communication",
      title: "6. Communication & Professional Demeanor",
      icon: "🗣️",
      summary: "Body language, speaking clearly, self-introduction, and professional etiquette.",
      checklist: [
        "Prepare a polished 60-90 second Self-Introduction covering background, skills, and goals.",
        "Maintain eye contact (or look into the webcam during online interviews).",
        "Consciously speak at a calm, steady pace; avoid filler words like 'ummm' and 'like'.",
        "Have 2 smart questions ready to ask the interviewer at the end of the interview.",
        "Send a polite thank-you email within 24 hours of completing the interview."
      ],
      actionLink: "/communication-skills",
      actionText: "Open Communication Guide & Activities"
    }
  ];

  return (
    <div className="cc-page-container">
      <Navbar />

      <section className="cc-hero-banner">
        <span className="cc-hero-badge">Comprehensive Fresher Guide</span>
        <h1 className="cc-hero-title">IT Interview Preparation Guide</h1>
        <p className="cc-hero-subtitle">
          "What should I prepare before attending an IT interview?"
          Here is the complete 6-point roadmap covering Technical, Coding, Practice Questions, Interview Q&As, Project Explanation, and Communication.
        </p>
      </section>

      <main className="cc-main-content">
        <div style={{ marginBottom: "1.5rem" }}>
          <Link to="/jobs" className="cc-back-btn" style={{ marginBottom: 0 }}>
            ← Back to All IT Job Categories
          </Link>
        </div>

        {/* Introduction Checklist Banner */}
        <div className="cc-box-card" style={{ background: "#eff6ff", border: "1px solid #bfdbfe", marginBottom: "2rem" }}>
          <h2 style={{ color: "#1e40af", fontSize: "1.35rem", margin: "0 0 0.5rem 0" }}>
            🎯 The 6 Key Areas Every IT Fresher Must Prepare
          </h2>
          <p style={{ color: "#1e3a8a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
            Campus placement drives and fresher interviews evaluate both your technical coding competence and your ability to communicate your ideas clearly. Follow this 6-step checklist to ensure you are 100% prepared.
          </p>
        </div>

        {/* 6 Preparation Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {prepSections.map((sec) => (
            <div key={sec.id} className="cc-box-card" style={{ borderLeft: "4px solid var(--cc-primary)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "2rem" }}>{sec.icon}</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.3rem", color: "var(--cc-text-dark)" }}>
                    {sec.title}
                  </h3>
                  <p style={{ margin: "0.15rem 0 0 0", color: "var(--cc-primary)", fontWeight: "600", fontSize: "0.9rem" }}>
                    {sec.summary}
                  </p>
                </div>
              </div>

              <div style={{ background: "#f8fafc", padding: "1.25rem", borderRadius: "10px", margin: "1rem 0", border: "1px solid var(--cc-border)" }}>
                <strong style={{ fontSize: "0.9rem", color: "#334155", display: "block", marginBottom: "0.5rem" }}>
                  Preparation Checklist:
                </strong>
                <ul className="cc-checklist">
                  {sec.checklist.map((item, idx) => (
                    <li key={idx} style={{ padding: "0.35rem 0" }}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <Link to={sec.actionLink} className="cc-btn cc-btn-outline" style={{ fontSize: "0.9rem" }}>
                  {sec.actionText} →
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
