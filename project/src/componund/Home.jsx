import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import heroBg from './hero-bg.png';
import "./style.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container" style={{ width: "100%", minHeight: "100vh", background: "#ffffff" }}>
      {/* Top Navbar matching the exact screenshot design */}
      <div className="top">
        <div className="title">Career Craft</div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/jobs"> jobs</Link>
          <Link to="/jobs">About</Link>
          <Link to="/jobs">Contact</Link>
          <button 
            className="login-btn" 
            onClick={() => navigate("/login")}
            style={{ 
              border: "2px solid rgb(236, 11, 124)", 
              borderRadius: "10px", 
              background: "transparent", 
              color: "white", 
              padding: "4px 16px", 
              cursor: "pointer", 
              fontSize: "15px" 
            }}
          >
            Login
          </button>
        </div>
      </div>

      {/* Hero section matching exactly the screenshot output */}
      <div 
        className="wel" 
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        
        }}
      >
        <span className="future-span">your Future Starts Here</span>
        <h1>Build your Career</h1>
        <h2>With<span>CreerCraft</span></h2>
        <p className="hero-desc">
          Find the right job, explor career opportunities,<br />
          and build a successful future.
        </p>
        <div className="hero-btn-group">
          <Link to="/jobs" style={{ textDecoration: "none" }}>
            <button className="but" style={{ cursor: "pointer" }}>Explor jobs-&gt;</button>
          </Link>
          <Link to="/jobs" style={{ textDecoration: "none" }}>
            <button className="starts-btn" style={{ cursor: "pointer" }}>Starts your career-&gt;</button>
          </Link>
        </div>
      </div>
      <div>
          
        </div>
    </div>
  );
}