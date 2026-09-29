import React from 'react';
import { useState } from "react";
import {useNavigate} from "react-router-dom";


export default function login() {
  const Navigate=useNavigate();

function Register() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleName = (e) => {
    const value = e.target.value;

    if (/^[A-Za-z ]*$/.test(value)) {
      setName(value);
    }
  };

  const handlePhone = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    alert("Registration Successful!");
  };
  return (
    <div>
      <h2>CareerCraft Registration</h2>
      <p>Student / Fresher Registration</p>

      <form onSubmit={handleSubmit}>

        <label>Full Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={handleName}
          placeholder="Enter your name"
          required
        />

        <br /><br />

        <label>Phone Number</label>
        <br />
        <input
          type="text"
          value={phone}
          onChange={handlePhone}
          placeholder="Enter 10 digit number"
          required
        />

        <br /><br />

        <label>Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <br /><br />

        <label>Qualification</label>
        <br />
        <select required>
          <option value="">Select Qualification</option>
          <option>B.E</option>
          <option>B.Tech</option>
          <option>B.Sc</option>
          <option>BCA</option>
          <option>MCA</option>
          <option>M.E</option>
          <option>Other</option>
        </select>

        <br /><br />

        <label>Experience</label>
        <br />
        <select required>
          <option value="">Select</option>
          <option>Fresher</option>
          <option>Student</option>
          <option>Experienced</option>
        </select>

        <br /><br />

        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />

        <br /><br />

        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
          required
        />

        <br /><br />

        <button type="submit">Register</button>

      </form>
    </div>

  
    
  );
}

}

