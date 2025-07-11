import React, { useState } from "react";
import usernameImage from '../components/download.jpeg'; // Adjust the path
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./RegistrationPage.css"; // Import the external CSS file

const RegistrationPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Store the token in localStorage
      localStorage.setItem('token', data.token);
      
      // Show success alert
      alert("Registration Successful!");

      // Redirect to LoginPage after 1.5 seconds
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      alert(error.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="registration-container">
      <h1>HostelMate App - Registration</h1>

      <form onSubmit={handleSubmit}>
        {/* Profile Image */}
        <div className="profile-image-container">
          <img src={usernameImage} alt="User" className="profile-image" />
        </div>

        {/* Input Fields */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

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

        <input type="submit" value="Register" />
      </form>

      <p>
        Already have an account? <a href="/login">Login here</a>.
      </p>
    </div>
  );
};

export default RegistrationPage;
