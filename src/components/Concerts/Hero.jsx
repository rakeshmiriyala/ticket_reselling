/* eslint-disable no-unused-vars */
import React from "react";
import bgImage from "../../assets/Navbar_landing.png"; // Adjust to your image path
import Navbar from "../Navbar.jsx"; // Import Navbar component
import Concert from "./Concert.jsx";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-auto flex flex-col"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navbar Component */}
      <Navbar />
      <br />
      {/* Two Lines of Text */}
      <div className="text-center bg-[#120621] lg:px-10 backdrop-blur-lg z-0 bg-opacity-70 lg:py-2 xs:py-1 md:py-2 xs:px-4">
        <h1 className="lg:text-4xl xs:text-2xl md:text-4xl  font-bold text-white">
          Concertss
        </h1>
        <p className="lg:text-lg xs:text-md md:text-lg text-gray-300 mt-1">
          showsssss
        </p>
      </div>
      <Concert />
    </div>
  );
};

export default HeroSection;
