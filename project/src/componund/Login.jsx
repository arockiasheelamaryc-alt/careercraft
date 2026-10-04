import React from 'react';
import { useState } from "react";
import {useNavigate} from "react-router-dom";


export default function Login() {
  const Navigate=useNavigate();
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Student");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleName = (e) => {
    const value = e.target.value;

    if (/^[A-Za-z ]*$/.test(value)) {
      setName(value);
    }
  };

  const handlePhone = (e) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value)) {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setSuccess(true);
  };

return (
  <div className="signup-page">

      <div className="signup-shape">

        {!success ? (
          <>
            <div className="signup-heading">
              <span>CareerCraft</span>
              <h1>Create Your Account</h1>
              <p>Start building your career journey with us</p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="input-row">

                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleName}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="10-digit number"
                    value={phone}
                    onChange={handlePhone}
                    maxLength="10"
                    required
                  />
                </div>

              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label>You are</label>

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Student</option>
                  <option>Fresher</option>
                  <option>Job Seeker</option>
                  <option>Professional</option>
                  <option>others</option>
                </select>
              </div>

              <div className="input-row">

                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    required
                  />
                </div>

              </div>

              <button className="signup-btn" type="submit">
                Sign Up
              </button>

              <p className="login-text">
                Already have an account? <b>Login</b>
              </p>

            </form>
          </>
        ) : (

          <div className="success-content">

            <div className="success-icon">✓</div>

            <h1>Registration Successful!</h1>

            <p>
              Welcome to CareerCraft, <strong>{name}</strong>!
            </p>

            <p className="success-message">
              Your account has been created successfully.
              <br />
              Start exploring your career opportunities.
            </p>

            <button
              className="success-btn"
              onClick={() => {
                setSuccess(false);
                Navigate("/jobs");
              }}
            >
              Continue to CareerCraft
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

