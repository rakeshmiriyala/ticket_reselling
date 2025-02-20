/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavbarSucess";
import backgroundImage from "../../assets/lo.png";
import Footer from "../Footer";

const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      navigate("/dummy"); // Redirect to Home Page after successful verification
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row h-auto">
        {/* Left Side - Background Image */}
        <div
          className="md:w-1/2 bg-cover bg-center lg:h-[720px] xs:h-[350px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Right Side - OTP Input */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#1A082F] text-white p-8">
          <h1 className="text-4xl xs:text-2xl font-bold mb-4">Enter OTP</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-4 sm:mb-6">
            We have sent a 6-digit OTP to your phone.
          </p>

          {/* OTP Input */}
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full max-w-sm text-lg sm:text-xl p-2 sm:p-3 border border-[#E176FF] rounded bg-inherit text-center outline-none focus:ring-2 focus:ring-[#E176FF] transition"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            required
          />

          {/* Verify Button */}
          <button
            onClick={handleVerifyOtp}
            className="w-full max-w-sm mt-4 sm:mt-6 py-2 sm:py-3 bg-[#F376F8] text-white rounded text-lg sm:text-xl font-semibold hover:bg-[#964c99] transition"
          >
            Verify OTP
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OtpPage;
