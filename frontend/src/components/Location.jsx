import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure this is imported
import "./Location.css";

// Generated 1000 hostels with different locations in Hyderabad
const hostelsData = [...Array(1000)].map((_, i) => {
  const locations = [
    "Madhapur", "Gachibowli", "Hyderabad", "Maisammaguda", "Dulapally", "Mettuguda", "Habsiguda", "Ameerpet", "Kukatpally", "Jubilee Hills", "Banjara Hills",
    "HiTech City", "Mehdipatnam", "Dilsukhnagar", "Begumpet", "LB Nagar", "Chanda Nagar",
    "Kothaguda", "Punjagutta", "Manikonda", "Uppal", "SR Nagar", "Tarnaka"
  ];

  const facilitiesList = ["WiFi", "AC", "Laundry", "Parking", "Gym", "24x7 Security", "Kitchen", "Balcony", "Pool", "Breakfast"];
  const location = locations[Math.floor(Math.random() * locations.length)];

  return {
    name: `Hostel ${["Sunrise", "Elite", "Comfort", "Royal", "Silver", "Green", "Lotus", "Platinum"][Math.floor(Math.random() * 8)]} ${i + 1}`,
    address: `${Math.floor(Math.random() * 200) + 1} ${location} Road`,
    city: "Hyderabad",
    phone: `${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
    roomsAvailable: Math.floor(Math.random() * 11),
    facilities: facilitiesList.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 4) + 2).join(", "),
    budget: `₹${Math.floor(Math.random() * (12000 - 3000 + 1)) + 3000}`
  };
});

const Location = () => {
  const [location, setLocation] = useState("");
  const [filteredHostels, setFilteredHostels] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const searchHostels = () => {
    if (!location.trim()) {
      alert("Please enter a location.");
      return;
    }

    const results = hostelsData.filter(hostel => hostel.address.toLowerCase().includes(location.toLowerCase()));
    setFilteredHostels(results);
  };

  return (
    <div className="location-container">
      <div className="search-box">
        <h1>Search Hostels in Hyderabad</h1>
        <input
          type="text"
          placeholder="Enter location (e.g., Madhapur, Ameerpet)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={searchHostels}>Search</button>

        {filteredHostels.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone No</th>
                <th>Rooms Available</th>
                <th>Facilities</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {filteredHostels.map((hostel, index) => (
                <tr key={index}>
                  <td><strong>{hostel.name}</strong></td>
                  <td>{hostel.address}</td>
                  <td>{hostel.phone}</td>
                  <td>{hostel.roomsAvailable}</td>
                  <td>{hostel.facilities}</td>
                  <td>{hostel.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hostels found for this location.</p>
        )}
      </div>
    </div>
  );
};

export default Location;