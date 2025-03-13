import React from "react";
import { useNavigate } from "react-router-dom";
import "./Ini.css";

function Ini() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div>
        <h1>Welcome to DollarDash</h1>
        <p className="tagline">"Let's Track Money!!!!"</p>
        <div className="btn-container">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ini;
