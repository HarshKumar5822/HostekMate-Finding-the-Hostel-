import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPage.css"; 

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Admin Logged Out!");
    navigate("/login"); 
  };

  return (
    <div className="admin-container">
      <h1>🏠 Hostel Administrative Dashboard</h1>
      <p>Welcome, Admin! Here you can manage hostel-related activities.</p>

      <div className="admin-options">
        <button onClick={() => alert("Manage Students Clicked")}>Manage Students</button>
        <button onClick={() => alert("Manage Rooms Clicked")}>Manage Rooms</button>
        <button onClick={() => alert("View Reports Clicked")}>View Reports</button>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminPage;
