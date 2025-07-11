import React from "react";
import { useParams } from "react-router-dom";

const ThreeDView = () => {
  const { hostelName } = useParams(); // Get the hostel name from the URL

  return (
    <div>
      <h1>3D View of {hostelName}</h1>
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(
          hostelName
        )}`} // Replace YOUR_GOOGLE_MAPS_API_KEY with your actual API key
        title="3D View"
        width="100%"
        height="600px"
        style={{ border: "none" }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ThreeDView;
