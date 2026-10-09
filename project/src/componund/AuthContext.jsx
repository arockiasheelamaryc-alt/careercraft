import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "./authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();

  // On mount, load initial session
  useEffect(() => {
    try {
      const savedUser = authService.getCurrentUser();
      const savedToken = authService.getToken();
      if (savedUser && savedToken) {
        setUser(savedUser);
        setToken(savedToken);
      }
    } catch (e) {
      console.error("Error reading saved session:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  // Listen to browser navigation/back events to enforce logout
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "careercraft_auth_user" && !e.newValue) {
        setUser(null);
        setToken(null);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const login = async (email, password, role, rememberMe = true) => {
    setAuthError("");
    const result = await authService.login(email, password, role, rememberMe);
    if (result.success) {
      setUser(result.user);
      setToken(result.token);
      return { success: true, user: result.user, message: result.message };
    } else {
      setAuthError(result.message);
      return { success: false, message: result.message };
    }
  };

  const register = async (studentData) => {
    setAuthError("");
    const result = await authService.register(studentData);
    if (result.success) {
      setUser(result.user);
      setToken(result.token);
      return { success: true, user: result.user, message: result.message };
    } else {
      setAuthError(result.message);
      return { success: false, message: result.message };
    }
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setToken(null);
    setAuthError("");
    // Redirect immediately to /login and replace history
    navigate("/login", { replace: true });
  };

  const value = {
    user,
    token,
    role: user?.role || null,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
    isStudent: user?.role === "student",
    login,
    register,
    logout,
    loading,
    authError,
    setAuthError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default AuthContext;
