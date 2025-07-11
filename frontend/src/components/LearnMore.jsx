import React from "react";
import { useNavigate } from "react-router-dom";
import "./LearnMore.css"; // Import CSS for styling

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="learn-more-container">
      <h1>About HostelMate</h1>
      <p>
        Welcome to <strong>HostelMate</strong>, your go-to platform for finding the best hostels
        in Hyderabad. Whether you are a student, working professional, or traveler, 
        our platform helps you discover hostels based on your preferred location, 
        amenities, and availability.
      </p>

      <h2>🌟 Key Features of HostelMate</h2>
      <ul>
        <li><strong>Search by Location:</strong> Enter your city or locality to find hostels nearby.</li>
        <li><strong>Hostel Listings:</strong> View details such as address, phone number, available rooms, and facilities.</li>
        <li><strong>Real-time Availability:</strong> Know how many rooms are available in each hostel.</li>
        <li><strong>Facility Filters:</strong> Sort hostels based on amenities like WiFi, AC, Gym, Laundry, and more.</li>
        <li><strong>Easy Navigation:</strong> Smooth UI and quick search for a hassle-free experience.</li>
        <li><strong>Secure Login:</strong> Sign in securely to access personalized hostel recommendations.</li>
      </ul>

      <h2>🔎 How to Use HostelMate?</h2>
      <ol>
        <li>Go to the search bar and enter your desired location.</li>
        <li>Click the <strong>"Search"</strong> button to find hostels in that area.</li>
        <li>Browse through the list of available hostels and check their details.</li>
        <li>If a hostel meets your requirements, you can contact them directly using the provided phone number.</li>
      </ol>

      <h2>📍 Locations We Cover</h2>
      <p>
        Currently, we have an extensive database of hostels in Hyderabad. Some of the most popular locations include:
      </p>
      <ul>
        <li>Ameerpet</li>
        <li>Kukatpally</li>
        <li>Madhapur</li>
        <li>Gachibowli</li>
        <li>Hitech City</li>
        <li>Dilsukhnagar</li>
        <li>Mehdipatnam</li>
        <li>Secunderabad</li>
      </ul>

      <h2>🛏️ Types of Hostels Available</h2>
      <p>We provide listings for different types of hostels, such as:</p>
      <ul>
        <li><strong>Boys Hostels</strong> - Affordable and comfortable hostels for students and professionals.</li>
        <li><strong>Girls Hostels</strong> - Secure and well-maintained hostels for female residents.</li>
        <li><strong>Co-Living Spaces</strong> - Fully furnished spaces for working professionals.</li>
      </ul>

      <h2>📞 Need Help?</h2>
      <p>
        If you have any questions, feel free to reach out to our support team. 
        We’re always here to help you find the best accommodation options.
      </p>

      <button className="back-button" onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default LearnMore;
