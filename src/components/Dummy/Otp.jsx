/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavbarSucess";
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
      <div className="flex flex-col items-center justify-center h-screen bg-[#1A082F] text-white">
        <h1 className="text-3xl font-bold mb-4">Enter OTP</h1>
        <p className="mb-6">We have sent a 6-digit OTP to your phone.</p>

        {/* OTP Input */}
        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full max-w-sm mb-4 p-2 border border-[#E176FF] rounded bg-inherit text-center"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          required
        />

        {/* Verify Button */}
        <button
          onClick={handleVerifyOtp}
          className="w-full max-w-sm text-center py-2 bg-[#F376F8] text-white rounded hover:bg-[#964c99]"
        >
          Verify OTP
        </button>
      </div>
      <Footer />
    </>
  );
};

export default OtpPage;
