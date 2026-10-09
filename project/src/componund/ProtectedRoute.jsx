import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

/**
 * Route protection wrapper for Career Craft.
 * Enforces role-based access control and prevents back-button bypass after logout.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {"student"|"admin"|Array<"student"|"admin">} [props.requiredRole]
 */
export default function ProtectedRoute({ children, requiredRole = null }) {
  const { user, isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Prevent back/forward navigation bypass via bfcache (back-forward cache)
  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        const storedUser = sessionStorage.getItem("careercraft_auth_user") || localStorage.getItem("careercraft_auth_user");
        if (!storedUser) {
          window.location.replace("/login");
        }
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  // Show lightweight loader while session is being verified
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
        <div style={{ textAlign: "center", color: "#475569" }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⏳</div>
          <p style={{ fontWeight: 600 }}>Verifying Career Craft Session...</p>
        </div>
      </div>
    );
  }

  // 1. Unauthenticated users cannot access protected pages
  if (!isAuthenticated || !user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname,
          message: "Please log in to access this protected Career Craft feature."
        }}
      />
    );
  }

  // 2. Role-based Access Control
  if (requiredRole) {
    // If Admin page, student must not access
    if (requiredRole === "admin" && user.role !== "admin") {
      return (
        <Navigate
          to="/student-dashboard"
          replace
          state={{
            denied: true,
            message: "Access Denied: You do not have permission to view Admin pages."
          }}
        />
      );
    }

    // If Student-only page, non-student / non-admin check
    if (requiredRole === "student" && user.role !== "student" && user.role !== "admin") {
      return (
        <Navigate
          to="/admin-dashboard"
          replace
          state={{
            denied: true,
            message: "Please use your Student account to access this section."
          }}
        />
      );
    }
  }

  return children;
}
