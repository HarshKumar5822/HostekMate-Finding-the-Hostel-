import React from "react";
import "./WelcomePage.css"; // Import the updated CSS file

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="form-container">
        <h1>HostelMate - Welcome</h1>
        <p className="text-black">Your adventure starts here!</p>

        <div className="button-group">
          <a href="/register">
            <button className="register-button">Register</button>
          </a>
          <a href="/login">
            <button className="login-button">Login</button>
          </a>
        </div>

        <div className="info">
          <p className="text-black">Join us to discover amazing hostels around the world.</p>
          <a href="/learn-more">
            <button className="register-button">Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
