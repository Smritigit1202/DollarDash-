import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Login.css";

function Login() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData); // Check if login was successful
    if (success) {
      navigate("/profile"); // Redirect only on success
    }
  };
  
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" required className="input-field" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required className="input-field" onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
        <a className="auth-link" onClick={() => navigate("/signup")}>Don't have an account? Sign Up</a>
      </div>
    </div>
  );
}

export default Login;
