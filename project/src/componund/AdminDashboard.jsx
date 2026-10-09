import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { authService } from "./authService";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./careercraft.css";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("students");
  const [students, setStudents] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [stats, setStats] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [actionMessage, setActionMessage] = useState("");

  useEffect(() => {
    loadAdminData();
  }, []);

  const loadAdminData = async () => {
    setIsLoading(true);
    try {
      const [fetchedStats, fetchedStudents, fetchedAdmins] = await Promise.all([
        authService.getAdminStats(),
        authService.getStudentsList(),
        authService.getAdminsList()
      ]);
      setStats(fetchedStats);
      setStudents(fetchedStudents);
      setAdmins(fetchedAdmins);
    } catch (err) {
      console.error("Failed to load admin data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteStudent = async (studentId, studentName) => {
    if (window.confirm(`Are you sure you want to remove student "${studentName}" from the system?`)) {
      const success = await authService.deleteStudent(studentId);
      if (success) {
        setActionMessage(`Student "${studentName}" removed successfully.`);
        setStudents((prev) => prev.filter((s) => s.id !== studentId));
        setTimeout(() => setActionMessage(""), 4000);
      }
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.phone?.includes(searchTerm)
  );

  const categoriesSummary = [
    { id: "web-development", name: "Web Development", questions: 25, modules: "HTML, CSS, JS, React, Node, Express, MySQL" },
    { id: "software-development", name: "Software Development", questions: 25, modules: "Java, Python, C++, OOP, DSA, SQL, Git" },
    { id: "data-science-ai", name: "Data Science & AI", questions: 25, modules: "Python, Pandas, ML, Deep Learning, SQL, Power BI" },
    { id: "cloud-devops", name: "Cloud & DevOps", questions: 25, modules: "AWS, Azure, Docker, Kubernetes, CI/CD, Linux" },
    { id: "cybersecurity", name: "Cybersecurity", questions: 25, modules: "Network Sec, Ethical Hacking, SOC, Cryptography" },
    { id: "mobile-development", name: "Mobile Development", questions: 25, modules: "Flutter, React Native, Android Kotlin, iOS Swift" },
    { id: "ui-ux-design", name: "UI / UX Design", questions: 25, modules: "Figma, User Research, Wireframing, Prototyping" },
    { id: "database-admin", name: "Database Administration", questions: 25, modules: "MySQL, PostgreSQL, MongoDB, Schema Design, Tuning" },
    { id: "qa-testing", name: "Quality Assurance & Testing", questions: 25, modules: "Manual Testing, Selenium, Postman, Cypress, JUnit" },
    { id: "it-support", name: "IT Support & Networking", questions: 25, modules: "TCP/IP, Active Directory, Hardware, Helpdesk, DNS" }
  ];

  return (
    <div className="cc-page-container">
      <Navbar />

      <main className="cc-main-content">
        <div className="cc-admin-container">
          {/* Admin Header Banner */}
          <div className="cc-admin-banner">
            <div className="cc-admin-banner-info">
              <span className="cc-admin-role-badge">🛡️ Administrator Control Center</span>
              <h1 className="cc-admin-title">Career Craft Management Portal</h1>
              <p className="cc-admin-subtitle">
                Logged in as <strong>{user?.name || "Admin"}</strong> ({user?.email}) • {user?.designation || "Administrator"}
              </p>
            </div>
            <div className="cc-admin-banner-actions">
              <button onClick={loadAdminData} className="cc-btn cc-btn-secondary" style={{ marginRight: "0.5rem" }}>
                🔄 Refresh Data
              </button>
              <button onClick={handleLogout} className="cc-dash-logout-btn">
                🚪 Log Out
              </button>
            </div>
          </div>

          {/* Action Notification */}
          {actionMessage && (
            <div className="cc-admin-alert-success">
              ✓ {actionMessage}
            </div>
          )}

          {/* KPI Statistics */}
          <div className="cc-admin-stats-grid">
            <div className="cc-admin-stat-card">
              <div className="cc-admin-stat-icon">👥</div>
              <div className="cc-admin-stat-val">{stats?.totalStudents || students.length}</div>
              <div className="cc-admin-stat-label">Registered Students</div>
            </div>
            <div className="cc-admin-stat-card">
              <div className="cc-admin-stat-icon">💼</div>
              <div className="cc-admin-stat-val">{stats?.activeJobCategories || 10}</div>
              <div className="cc-admin-stat-label">IT Job Categories</div>
            </div>
            <div className="cc-admin-stat-card">
              <div className="cc-admin-stat-icon">🎯</div>
              <div className="cc-admin-stat-val">{stats?.totalInterviewQuestions || 250}</div>
              <div className="cc-admin-stat-label">Interview Questions</div>
            </div>
            <div className="cc-admin-stat-card">
              <div className="cc-admin-stat-icon">🗣️</div>
              <div className="cc-admin-stat-val">{stats?.totalCommunicationModules || 7}</div>
              <div className="cc-admin-stat-label">Communication Labs</div>
            </div>
            <div className="cc-admin-stat-card">
              <div className="cc-admin-stat-icon">🛡️</div>
              <div className="cc-admin-stat-val">{admins.length > 0 ? admins.length : (stats?.totalAdmins || 1)}</div>
              <div className="cc-admin-stat-label">Registered Admins</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="cc-admin-tabs">
            <button
              className={`cc-admin-tab-btn ${activeTab === "students" ? "active" : ""}`}
              onClick={() => setActiveTab("students")}
            >
              👥 Student Management ({students.length})
            </button>
            <button
              className={`cc-admin-tab-btn ${activeTab === "content" ? "active" : ""}`}
              onClick={() => setActiveTab("content")}
            >
              📚 IT Categories & Curriculum (10)
            </button>
            <button
              className={`cc-admin-tab-btn ${activeTab === "security" ? "active" : ""}`}
              onClick={() => setActiveTab("security")}
            >
              🛡️ Security & Registered Admins ({admins.length > 0 ? admins.length : 1})
            </button>
          </div>

          {/* TAB 1: STUDENT MANAGEMENT */}
          {activeTab === "students" && (
            <div className="cc-admin-tab-content">
              <div className="cc-admin-table-toolbar">
                <div className="cc-admin-search-box">
                  <span style={{ marginRight: "0.5rem" }}>🔍</span>
                  <input
                    type="text"
                    placeholder="Search by student name, email, or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="cc-admin-search-input"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b" }}
                    >
                      ✕
                    </button>
                  )}
                </div>
                <div style={{ fontSize: "0.88rem", color: "#64748b" }}>
                  Showing {filteredStudents.length} of {students.length} students
                </div>
              </div>

              {isLoading ? (
                <div style={{ padding: "3rem", textAlign: "center", color: "#64748b" }}>
                  ⏳ Loading student database records...
                </div>
              ) : filteredStudents.length === 0 ? (
                <div style={{ padding: "3rem", textAlign: "center", color: "#64748b" }}>
                  No students matched your search filter.
                </div>
              ) : (
                <div className="cc-admin-table-wrapper">
                  <table className="cc-admin-table">
                    <thead>
                      <tr>
                        <th>Student Name</th>
                        <th>Email Address</th>
                        <th>Mobile</th>
                        <th>Education Status</th>
                        <th>Registered Date</th>
                        <th>Account Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((st) => (
                        <tr key={st.id}>
                          <td>
                            <strong>{st.name}</strong>
                          </td>
                          <td>
                            <code className="cc-admin-code">{st.email}</code>
                          </td>
                          <td>{st.phone}</td>
                          <td>
                            <span className="cc-status-pill cc-status-info">
                              {st.statusLevel || "Student"}
                            </span>
                          </td>
                          <td>
                            {st.createdAt ? new Date(st.createdAt).toLocaleDateString() : "Active"}
                          </td>
                          <td>
                            <span className="cc-status-pill cc-status-active">
                              {st.status || "Active"}
                            </span>
                          </td>
                          <td>
                            {st.id !== "student_demo" && (
                              <button
                                onClick={() => handleDeleteStudent(st.id, st.name)}
                                className="cc-admin-delete-btn"
                                title="Remove student from database"
                              >
                                🗑️ Remove
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CONTENT & CURRICULUM */}
          {activeTab === "content" && (
            <div className="cc-admin-tab-content">
              <div className="cc-admin-content-header">
                <h3>📚 Career Craft 10 Core IT Job Categories</h3>
                <p>Every category includes comprehensive learning roadmaps and 25 interview questions.</p>
              </div>

              <div className="cc-admin-category-list">
                {categoriesSummary.map((cat, idx) => (
                  <div key={cat.id} className="cc-admin-cat-card">
                    <div className="cc-admin-cat-top">
                      <span className="cc-admin-cat-num">0{idx + 1}</span>
                      <h4 className="cc-admin-cat-name">{cat.name}</h4>
                      <span className="cc-status-pill cc-status-active">Active</span>
                    </div>
                    <div className="cc-admin-cat-meta">
                      <strong>Technologies:</strong> {cat.modules}
                    </div>
                    <div className="cc-admin-cat-actions">
                      <Link to={`/jobs/${cat.id}`} className="cc-admin-link-btn">
                        📖 View Learning Path
                      </Link>
                      <Link to={`/interview-questions/${cat.id}`} className="cc-admin-link-btn">
                        🎯 25 Interview Qs
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SECURITY & REGISTERED ADMINS */}
          {activeTab === "security" && (
            <div className="cc-admin-tab-content">
              <div className="cc-admin-security-card">
                <h3>🛡️ Registered Career Craft Administrator Accounts</h3>
                <p style={{ color: "#64748b", fontSize: "0.92rem", marginBottom: "1.25rem" }}>
                  Administrators register securely with their own email addresses and custom passwords. Below are all active administrators recognized by the system:
                </p>

                <div className="cc-admin-accounts-list">
                  {admins.length > 0 ? (
                    admins.map((adm, idx) => (
                      <div key={adm.id || idx} className="cc-admin-account-item">
                        <div className="cc-admin-account-icon">🛡️</div>
                        <div className="cc-admin-account-details">
                          <div className="cc-admin-account-email">
                            <strong>{adm.name}</strong> — {adm.email}
                            {user?.email.toLowerCase() === adm.email.toLowerCase() && (
                              <span className="cc-status-pill cc-status-active" style={{ marginLeft: "0.5rem" }}>
                                Current Active Session
                              </span>
                            )}
                          </div>
                          <div className="cc-admin-account-role">
                            Role: Administrator • Designation: {adm.designation || "System Administrator"} • Registered: {adm.createdAt ? new Date(adm.createdAt).toLocaleDateString() : "Active"}
                          </div>
                        </div>
                        <div className="cc-admin-account-status">
                          <span className="cc-status-pill cc-status-active">{adm.status || "Active"}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    /* Display current logged in admin */
                    <div className="cc-admin-account-item">
                      <div className="cc-admin-account-icon">🛡️</div>
                      <div className="cc-admin-account-details">
                        <div className="cc-admin-account-email">
                          <strong>{user?.name || "Administrator"}</strong> — {user?.email}
                          <span className="cc-status-pill cc-status-active" style={{ marginLeft: "0.5rem" }}>
                            Current Active Session
                          </span>
                        </div>
                        <div className="cc-admin-account-role">
                          Role: Administrator • Designation: {user?.designation || "System Administrator"}
                        </div>
                      </div>
                      <div className="cc-admin-account-status">
                        <span className="cc-status-pill cc-status-active">Verified</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="cc-admin-security-specs">
                  <h4>🔒 Security Architecture & Access Policy</h4>
                  <ul className="cc-admin-security-list">
                    <li>
                      <strong>Zero Hardcoded Credentials:</strong> Neither Admin emails nor Admin passwords are hardcoded in the codebase. All Administrator credentials are created by administrators and verified via dynamic backend authentication.
                    </li>
                    <li>
                      <strong>Cryptographic Password Protection:</strong> All passwords are treated with PBKDF2 (1,000 iterations, 64-byte key length with SHA-512) and unique cryptographically random salts. Plaintext passwords are never stored.
                    </li>
                    <li>
                      <strong>Strict Role-Based Routing:</strong> Students entering <code>/admin-dashboard</code> directly are automatically intercepted and redirected to their student dashboard.
                    </li>
                    <li>
                      <strong>Token-Protected APIs:</strong> Backend API routes require valid Bearer session tokens with administrator privileges.
                    </li>
                    <li>
                      <strong>Session Purge on Logout:</strong> Clicking Log Out clears all active session tokens and replaces navigation history, preventing back-button access after sign out.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
