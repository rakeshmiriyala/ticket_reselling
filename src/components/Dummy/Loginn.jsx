/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./NavbarSucess";
import backgroundImage from "../../assets/lo.png";
import Footer from "../Footer";

const LoginPage = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleGetOtp = () => {
    if (phone.length === 10) {
      navigate("/otp"); // Redirect to OTP page
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row h-auto">
        {/* Left Side - Image */}
        <div
          className="md:w-1/2 bg-cover bg-center lg:h-[720px] xs:h-[350px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#1A082F] text-white p-8">
          <h1 className="text-4xl xs:text-2xl font-bold mb-4">Login</h1>
          <p className="mb-6 xs:text-xs text-xl ">Enter your phone number to receive an OTP.</p>

          {/* Phone Number Input */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full max-w-sm mb-4 p-2 border border-[#E176FF] rounded bg-inherit"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={10}
            required
          />

          {/* Get OTP Button */}
          <button
            onClick={handleGetOtp}
            className="w-full max-w-sm text-center justify-center py-2 bg-[#F376F8] text-white rounded hover:bg-[#964c99]"
          >
            Get OTP
          </button>

          <Link to="/signin" className="my-4">
            <span className="no-underline">Need an account? </span>
            <span className="underline text-[#E176FF]">Create One</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
