/* eslint-disable no-unused-vars */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./NavbarSucess";
import backgroundImage from "../../assets/Buimage.png";
import Footer from "../Footer";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here if needed
    window.location.href = "/bdummy"; // Redirect to the desired page
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col md:flex-row h-auto">
        {/* Left Half */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center h-[650px]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>

        {/* Right Half */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#1A082F] text-white p-8">
          <h1 className="text-4xl font-bold mb-4">Business Login</h1>
          <p className="mb-6">Please login to continue to your account.</p>

          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-sm mb-4 p-2 border border-[#E176FF] rounded bg-inherit"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-2 max-w-sm border border-[#E176FF] rounded bg-inherit"
            required
          />
          <Link
            to="/bdummy"
            className="w-full max-w-sm text-center justify-center py-2 bg-[#F376F8] text-white rounded hover:bg-[#964c99]"
          >
            Login
          </Link>
          <Link to="/bsignin" className="mt-4">
            <span className="no-underline">Need an account for Business? </span>
            <span className="underline text-[#E176FF]">Create One</span>
          </Link>
          <p>OR</p>
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
