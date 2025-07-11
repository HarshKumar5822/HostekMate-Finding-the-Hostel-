import React, { useState } from "react";
import usernameImage from '../components/download.jpeg';
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Import the external CSS file

const LoginPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store the token in localStorage
      localStorage.setItem('token', data.token);
      
      // Show success alert
      alert("Login Successful!");

      // Redirect to Location page after 1.5 seconds
      setTimeout(() => {
        navigate("/location");
      }, 1500);
    } catch (error) {
      alert(error.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>HostelMate - Login</h1>

      {/* Profile Image */}
      <div className="profile-image-container">
        <img src={usernameImage} alt="User" className="profile-image" />
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Login" />
      </form>

      <p>
        Don't have an account? <a href="/register">Register here</a>.
      </p>
    </div>
  );
};

export default LoginPage;
