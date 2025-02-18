/* eslint-disable no-unused-vars */
import React from "react";
import bgImage from "../../assets/S_landing_main.png"; // Adjust to your image path
import Navbar from "../Navbar.jsx"; // Import Navbar component

const HeroSection = () => {
  return (
    <div
      className=" bg-cover bg-center h-screen flex flex-col"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navbar Component */}
      <Navbar />
      <br />
      <div className="heading lg:px-8 lg:pt-20  xs:p-8 rounded-lg">
        <h1 className="lg:text-6xl md:text-3xl xs:text-2xl font-akira sm:text-2xl font-bold text-white">
          SHARE THE EXCITEMENT.{" "}
        </h1>
        <h1 className="lg:text-6xl md:text-3xl xs:text-2xl font-akira sm:text-2xl font-bold text-white">
          SELL YOUR TICKET
        </h1>
      </div>
      <br className="xs:hidden" />
      <div className="description mt-1 lg:px-8 xs:px-8 pt-0 rounded-lg">
        <p
          className="lg:text-xl xs:text-lg font-serif md:text-lg sm:text-base text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Turn your unused tickets into someone else’s
        </p>
        <p
          className="lg:text-xl xs:text-lg font-serif md:text-lg sm:text-base text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          unforgettable experience! Share the excitement and
        </p>
        <p
          className="lg:text-xl xs:text-lg font-serif md:text-lg sm:text-base text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          help fill every seat!
        </p>
      </div>
      <br />

      {/* Sell Button */}
      <div className="mt-6 lg:px-8 p-6 flex justify-start mb-40">
        <button className="px-10 py-6 lg:text-3xl bg-pink-500 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out">
          SELL NOW
        </button>
      </div>
    </div>
  );
};

export default HeroSection;  

