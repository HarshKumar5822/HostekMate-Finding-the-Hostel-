import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import Location from "./components/Location";
import LearnMore from "./components/LearnMore"; // Import LearnMore component
import AdminPage from "./components/AdminPage"; // Import AdminPage
import ThreeDView from "./components/ThreeDView"; // Import the 3D view component
import "./App.css"; // Import CSS for styling

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch users from backend (Runs once when component mounts)
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []); // ✅ Dependency array ensures this runs only once

  // Function to add a new user
  const addUser = async () => {
    try {
      const response = await axios.post("http://localhost:5000/addUser", {
        name,
        email,
      });
      alert(response.data.message);

      // ✅ Fetch the updated user list from the backend instead of manually updating state
      const updatedUsers = await axios.get("http://localhost:5000/users");
      setUsers(updatedUsers.data);

      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user. Please try again.");
    }
  };

  return (
    <Router>
      <div className="app-container">
        {/* Routes Inside a Box */}
        <div className="content-box">
          <Routes>
            <Route
              path="/"
              element={
                <WelcomePage
                  users={users}
                  name={name}
                  email={email}
                  setName={setName}
                  setEmail={setEmail}
                  addUser={addUser}
                />
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/location" element={<Location />} />
            <Route path="/learn-more" element={<LearnMore />} /> {/* Added LearnMore Route */}
            <Route path="/admin-dashboard" element={<AdminPage />} /> {/* Added AdminPage Route */}
            <Route path="/3d-view/:hostelName" element={<ThreeDView />} /> {/* Add route for 3D view */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
