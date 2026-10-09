import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";

import Home from "./Home";
import Login from "./Login";
import JobsPage from "./JobsPage";
import LearningPath from "./LearningPath";
import InterviewQuestions from "./InterviewQuestions";
import CodingPractice from "./CodingPractice";
import CommunicationSkills from "./CommunicationSkills";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* 1. Public Home Page */}
        <Route path="/" element={<Home />} />

        {/* 2. Public Login & Sign Up */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />

        {/* 3. Protected Student Dashboard */}
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute requiredRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        {/* 4. Protected Admin Dashboard (Admin Only) */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* 5. Protected IT Job Categories */}
        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <JobsPage />
            </ProtectedRoute>
          }
        />

        {/* 6. Protected Learning Path Feature */}
        <Route
          path="/jobs/:categoryId"
          element={
            <ProtectedRoute>
              <LearningPath />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learning"
          element={
            <ProtectedRoute>
              <LearningPath />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learning/:categoryId"
          element={
            <ProtectedRoute>
              <LearningPath />
            </ProtectedRoute>
          }
        />

        {/* 7. Protected Interview Questions Feature (25 Qs) */}
        <Route
          path="/interview-questions"
          element={
            <ProtectedRoute>
              <InterviewQuestions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/interview-questions/:categoryId"
          element={
            <ProtectedRoute>
              <InterviewQuestions />
            </ProtectedRoute>
          }
        />

        {/* 8. Protected Coding Practice Feature */}
        <Route
          path="/coding-practice"
          element={
            <ProtectedRoute>
              <CodingPractice />
            </ProtectedRoute>
          }
        />

        {/* 9. Protected Communication Skills Feature */}
        <Route
          path="/communication-skills"
          element={
            <ProtectedRoute>
              <CommunicationSkills />
            </ProtectedRoute>
          }
        />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;