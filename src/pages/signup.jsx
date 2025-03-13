import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed Up:", formData);
    navigate("/Home"); // Redirect after signup
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 >Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" required className="input-field" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required className="input-field" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required className="input-field" onChange={handleChange} />
          <button type="submit">Create Account</button>
        </form>
        <a className="auth-link" onClick={() => navigate("/login")}>Already have an account? Login</a>
      </div>
    </div>
  );
}

export default Signup;
