import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import JobsPage from "./JobsPage";
import JobDetailPage from "./JobDetailPage";
import SkillDevelopment from "./SkillDevelopment";
import LearningPath from "./LearningPath";
import CodingPractice from "./CodingPractice";
import PracticeQuestions from "./PracticeQuestions";
import InterviewQuestions from "./InterviewQuestions";
import InterviewPrep from "./InterviewPrep";
import CommunicationSkills from "./CommunicationSkills";
import Jobserch from "./Jobserch";
import Web_learn from "./Web_learn";

function App() {
  return (
    <Routes>
      {/* Existing Home Page (Unchanged) */}
      <Route path="/" element={<Home />} />

      {/* Existing Login Page (Unchanged) */}
      <Route path="/login" element={<Login />} />

      {/* 10 IT Job Categories */}
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:categoryId" element={<JobDetailPage />} />

      {/* Skill Development Section */}
      <Route path="/skills" element={<SkillDevelopment />} />

      {/* Student Learning Path */}
      <Route path="/learning-path" element={<LearningPath />} />

      {/* Coding / Practice Tools (HTML, CSS, JS with Run & Output) */}
      <Route path="/coding-practice" element={<CodingPractice />} />

      {/* Exactly 25 Practice Questions Test */}
      <Route path="/practice-questions" element={<PracticeQuestions />} />

      {/* Exactly 15 Technical Interview Questions */}
      <Route path="/interview-questions" element={<InterviewQuestions />} />

      {/* Comprehensive IT Interview Preparation Guide */}
      <Route path="/interview-prep" element={<InterviewPrep />} />

      {/* Communication Skills for Interviews */}
      <Route path="/communication-skills" element={<CommunicationSkills />} />

      {/* Preserved existing routes */}
      <Route path="/jobserch" element={<Jobserch />} />
      <Route path="/web_learn" element={<Web_learn />} />
      <Route path="/Web_learn/html pdf" element={<Web_learn />} />
    </Routes>
  );
}

export default App;