import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./careercraft.css";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, login, register, logout, authError } = useAuth();

  // Role Selection: "student" vs "admin"
  const [selectedRole, setSelectedRole] = useState("student");

  // Mode: "login" vs "signup"
  const isSignupRoute = location.pathname === "/signup";
  const [activeMode, setActiveMode] = useState(isSignupRoute ? "signup" : "login");

  // Login form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  // Student Sign Up fields
  const [signupName, setSignupName] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupStatus, setSignupStatus] = useState("College Student");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  // Admin Sign Up fields
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminDesignation, setAdminDesignation] = useState("System Administrator");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminConfirmPassword, setAdminConfirmPassword] = useState("");

  // UI state
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if routed with a message
  useEffect(() => {
    if (location.state?.message) {
      setErrorMsg(location.state.message);
    }
  }, [location.state]);

  // Handle Role Switch
  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setErrorMsg("");
    setSuccessMsg("");
    setEmail("");
    setPassword("");
  };

  // Quick fill Demo Student
  const handleFillDemoStudent = () => {
    setEmail("student@careercraft.com");
    setPassword("Student@123");
    setErrorMsg("");
  };

  // Submit Login (Unified for Student & Admin)
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!email || !password) {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await login(email, password, selectedRole, rememberMe);
      if (res.success) {
        if (res.user.role === "admin") {
          navigate("/admin-dashboard", { replace: true });
        } else {
          const redirectTo = location.state?.from || "/student-dashboard";
          navigate(redirectTo, { replace: true });
        }
      } else {
        setErrorMsg(res.message || "Authentication failed.");
      }
    } catch {
      setErrorMsg("An error occurred during authentication. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Submit Student Registration
  const handleStudentSignupSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (signupPhone && signupPhone.length !== 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (signupPassword.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      return;
    }

    if (signupPassword !== signupConfirmPassword) {
      setErrorMsg("Password and Confirm Password do not match.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await register({
        name: signupName,
        phone: signupPhone,
        email: signupEmail,
        status: signupStatus,
        password: signupPassword,
        role: "student"
      });

      if (res.success) {
        navigate("/student-dashboard", { replace: true });
      } else {
        setErrorMsg(res.message || "Registration failed.");
      }
    } catch {
      setErrorMsg("An error occurred during registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Submit Admin Registration
  const handleAdminSignupSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!adminName.trim() || !adminEmail.trim()) {
      setErrorMsg("Please provide your full name and administrator email.");
      return;
    }

    if (adminPassword.length < 6) {
      setErrorMsg("Administrator password must be at least 6 characters long.");
      return;
    }

    if (adminPassword !== adminConfirmPassword) {
      setErrorMsg("Password and Confirm Password do not match.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await register({
        name: adminName,
        email: adminEmail,
        designation: adminDesignation,
        password: adminPassword,
        role: "admin"
      });

      if (res.success) {
        navigate("/admin-dashboard", { replace: true });
      } else {
        setErrorMsg(res.message || "Admin registration failed.");
      }
    } catch {
      setErrorMsg("An error occurred during admin registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cc-page-container">
      <Navbar />

      <main className="cc-main-content cc-auth-main">
        <div className="cc-auth-card">
          {/* Header Brand */}
          <div className="cc-auth-header">
            <span className="cc-auth-logo">🚀</span>
            <h1 className="cc-auth-title">Career Craft</h1>
            <p className="cc-auth-subtitle">
              Role-Based IT Career & Learning Preparation Portal
            </p>
          </div>

          {/* Active Session Display */}
          {isAuthenticated && user ? (
            <div className="cc-auth-logged-in-box">
              <div className="cc-auth-logged-avatar">
                {user.role === "admin" ? "🛡️" : "🎓"}
              </div>
              <h2 className="cc-auth-logged-title">Active Session Detected</h2>
              <p className="cc-auth-logged-desc">
                You are currently logged in as <strong>{user.name}</strong> ({user.email}).
              </p>
              <div className="cc-auth-role-tag">
                Role: {user.role === "admin" ? "Administrator" : "Registered Student"}
              </div>

              <div className="cc-auth-logged-actions">
                <button
                  type="button"
                  className="cc-btn cc-btn-primary cc-auth-btn-full"
                  onClick={() =>
                    navigate(user.role === "admin" ? "/admin-dashboard" : "/student-dashboard", {
                      replace: true
                    })
                  }
                >
                  Go to {user.role === "admin" ? "Admin" : "Student"} Dashboard →
                </button>
                <button
                  type="button"
                  className="cc-btn cc-btn-secondary cc-auth-btn-full"
                  onClick={logout}
                >
                  🚪 Log Out Current Account
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* PRIMARY ROLE SELECTOR: STUDENT vs ADMIN */}
              <div className="cc-auth-role-tabs">
                <button
                  type="button"
                  className={`cc-auth-role-tab ${selectedRole === "student" ? "active" : ""}`}
                  onClick={() => handleRoleChange("student")}
                >
                  🎓 Student / User
                </button>
                <button
                  type="button"
                  className={`cc-auth-role-tab ${selectedRole === "admin" ? "active" : ""}`}
                  onClick={() => handleRoleChange("admin")}
                >
                  🛡️ Administrator
                </button>
              </div>

              {/* Mode Sub-tabs: Log In vs Register */}
              <div className="cc-auth-subtabs">
                <button
                  type="button"
                  className={`cc-auth-subtab ${activeMode === "login" ? "active" : ""}`}
                  onClick={() => {
                    setActiveMode("login");
                    setErrorMsg("");
                    setSuccessMsg("");
                  }}
                >
                  🔑 {selectedRole === "admin" ? "Admin Log In" : "Student Log In"}
                </button>
                <button
                  type="button"
                  className={`cc-auth-subtab ${activeMode === "signup" ? "active" : ""}`}
                  onClick={() => {
                    setActiveMode("signup");
                    setErrorMsg("");
                    setSuccessMsg("");
                  }}
                >
                  📝 {selectedRole === "admin" ? "Register as Admin" : "Sign Up / Register"}
                </button>
              </div>

              {/* Error Alert Box */}
              {(errorMsg || authError) && (
                <div className="cc-auth-alert-error">
                  ⚠️ {errorMsg || authError}
                </div>
              )}

              {/* Success Alert Box */}
              {successMsg && (
                <div className="cc-admin-alert-success" style={{ marginBottom: "1.25rem" }}>
                  ✓ {successMsg}
                </div>
              )}

              {/* ======================================================== */}
              {/* 1. STUDENT AUTHENTICATION FLOW                           */}
              {/* ======================================================== */}
              {selectedRole === "student" && (
                <div>
                  {activeMode === "login" ? (
                    /* STUDENT LOGIN FORM */
                    <form onSubmit={handleLoginSubmit} className="cc-auth-form">
                      <div className="cc-form-group">
                        <label className="cc-form-label">Student Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. student@careercraft.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="cc-form-input"
                        />
                      </div>

                      <div className="cc-form-group">
                        <label className="cc-form-label">Password</label>
                        <input
                          type="password"
                          placeholder="Enter your student password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="cc-form-input"
                        />
                      </div>

                      <div className="cc-form-options">
                        <label className="cc-form-checkbox-label">
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                          />
                          Remember Me
                        </label>
                        <button
                          type="button"
                          className="cc-form-link-btn"
                          onClick={handleFillDemoStudent}
                          title="Click to auto-fill demo student credentials"
                        >
                          🧪 Fill Demo Student
                        </button>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="cc-btn cc-btn-primary cc-auth-btn-submit"
                      >
                        {isSubmitting ? "Authenticating Student..." : "Log In as Student →"}
                      </button>

                      <div className="cc-auth-footer-switch">
                        Don't have a student account yet?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            setActiveMode("signup");
                            setErrorMsg("");
                          }}
                          className="cc-auth-link"
                        >
                          Create Student Account
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* STUDENT REGISTRATION FORM */
                    <form onSubmit={handleStudentSignupSubmit} className="cc-auth-form">
                      <div className="cc-form-group">
                        <label className="cc-form-label">Full Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Alex Johnson"
                          value={signupName}
                          onChange={(e) => setSignupName(e.target.value)}
                          required
                          className="cc-form-input"
                        />
                      </div>

                      <div className="cc-form-group">
                        <label className="cc-form-label">10-Digit Mobile Number</label>
                        <input
                          type="text"
                          placeholder="e.g. 9876543210"
                          value={signupPhone}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (/^[0-9]*$/.test(val) && val.length <= 10) {
                              setSignupPhone(val);
                            }
                          }}
                          maxLength="10"
                          className="cc-form-input"
                        />
                      </div>

                      <div className="cc-form-group">
                        <label className="cc-form-label">Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. yourname@college.edu"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          required
                          className="cc-form-input"
                        />
                      </div>

                      <div className="cc-form-group">
                        <label className="cc-form-label">You Are</label>
                        <select
                          value={signupStatus}
                          onChange={(e) => setSignupStatus(e.target.value)}
                          className="cc-form-select"
                        >
                          <option value="College Student">College Student</option>
                          <option value="Recent Graduate / Fresher">Recent Graduate / Fresher</option>
                          <option value="Job Seeker">Job Seeker</option>
                          <option value="Early Professional">Early Professional</option>
                        </select>
                      </div>

                      <div className="cc-form-grid-2">
                        <div className="cc-form-group">
                          <label className="cc-form-label">Password</label>
                          <input
                            type="password"
                            placeholder="Min 6 characters"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            required
                            className="cc-form-input"
                          />
                        </div>
                        <div className="cc-form-group">
                          <label className="cc-form-label">Confirm Password</label>
                          <input
                            type="password"
                            placeholder="Re-enter password"
                            value={signupConfirmPassword}
                            onChange={(e) => setSignupConfirmPassword(e.target.value)}
                            required
                            className="cc-form-input"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="cc-btn cc-btn-primary cc-auth-btn-submit"
                      >
                        {isSubmitting ? "Creating Student Account..." : "Register as Student →"}
                      </button>

                      <div className="cc-auth-footer-switch">
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            setActiveMode("login");
                            setErrorMsg("");
                          }}
                          className="cc-auth-link"
                        >
                          Login Here
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}

              {/* ======================================================== */}
              {/* 2. ADMIN AUTHENTICATION FLOW                             */}
              {/* ======================================================== */}
              {selectedRole === "admin" && (
                <div className="cc-admin-auth-wrapper">
                  {activeMode === "login" ? (
                    /* ADMIN LOGIN FORM */
                    <form onSubmit={handleLoginSubmit} className="cc-auth-form">
                      <div className="cc-admin-notice-box">
                        <div className="cc-admin-notice-title">🛡️ Administrator Sign In</div>
                        <p className="cc-admin-notice-text">
                          Sign in with your registered administrator email and secure password to access the Admin Control Center.
                        </p>
                      </div>

                      <div className="cc-form-group">
                        <label className="cc-form-label">Administrator Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. admin@organization.edu"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="cc-form-input"
                        />
                      </div>

                      <div className="cc-form-group">
                        <label className="cc-form-label">Administrator Password</label>
                        <input
                          type="password"
                          placeholder="Enter your admin password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="cc-form-input"
                        />
                      </div>

                      <div className="cc-form-options">
                        <label className="cc-form-checkbox-label">
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                          />
                          Keep Admin Session Active
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="cc-btn cc-btn-primary cc-auth-btn-submit cc-admin-btn-accent"
                      >
                        {isSubmitting ? "Authenticating Administrator..." : "Log In as Administrator →"}
                      </button>

                      <div className="cc-auth-footer-switch">
                        Need to create an Admin account?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            setActiveMode("signup");
                            setErrorMsg("");
                          }}
                          className="cc-auth-link"
                        >
                          Register as Admin
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* ADMIN REGISTRATION FORM */
                    <form onSubmit={handleAdminSignupSubmit} className="cc-auth-form">
                      <div className="cc-admin-notice-box">
                        <div className="cc-admin-notice-title">🛡️ Create Administrator Account</div>
                        <p className="cc-admin-notice-text">
                          Register your administrator account with your own email and custom secure password.
                        </p>
                      </div>

                      <div className="cc-form-group">
                        <label className="cc-form-label">Full Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Dr. Robert Vance"
                          value={adminName}
                          onChange={(e) => setAdminName(e.target.value)}
                          required
                          className="cc-form-input"
                        />
                      </div>

                      <div className="cc-form-group">
                        <label className="cc-form-label">Administrator Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. admin@university.edu"
                          value={adminEmail}
                          onChange={(e) => setAdminEmail(e.target.value)}
                          required
                          className="cc-form-input"
                        />
                      </div>

                      <div className="cc-form-group">
                        <label className="cc-form-label">Designation / Role</label>
                        <select
                          value={adminDesignation}
                          onChange={(e) => setAdminDesignation(e.target.value)}
                          className="cc-form-select"
                        >
                          <option value="System Administrator">System Administrator</option>
                          <option value="Faculty / Program Lead">Faculty / Program Lead</option>
                          <option value="Department Head">Department Head</option>
                          <option value="Academic Director">Academic Director</option>
                        </select>
                      </div>

                      <div className="cc-form-grid-2">
                        <div className="cc-form-group">
                          <label className="cc-form-label">Admin Password</label>
                          <input
                            type="password"
                            placeholder="Min 6 characters"
                            value={adminPassword}
                            onChange={(e) => setAdminPassword(e.target.value)}
                            required
                            className="cc-form-input"
                          />
                        </div>
                        <div className="cc-form-group">
                          <label className="cc-form-label">Confirm Password</label>
                          <input
                            type="password"
                            placeholder="Re-enter password"
                            value={adminConfirmPassword}
                            onChange={(e) => setAdminConfirmPassword(e.target.value)}
                            required
                            className="cc-form-input"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="cc-btn cc-btn-primary cc-auth-btn-submit cc-admin-btn-accent"
                      >
                        {isSubmitting ? "Creating Administrator Account..." : "Create Admin Account →"}
                      </button>

                      <div className="cc-auth-footer-switch">
                        Already have an Admin account?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            setActiveMode("login");
                            setErrorMsg("");
                          }}
                          className="cc-auth-link"
                        >
                          Log In Here
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
