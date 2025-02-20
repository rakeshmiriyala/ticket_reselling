/* eslint-disable no-unused-vars */

// RegisterPage.js
import React from "react";
import Navbar from "./NavbarSucess";
import backgroundImage from "../../assets/lo.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Handle registration logic here

    // Redirect to login page using window.location.href
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row h-auto">
        {/* Left Half */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center h-[720px]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        {/* Right Half */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#1A082F] text-white p-8">
          <h1 className="text-4xl font-bold mb-4">Sign up</h1>
          <p className="mb-6 text-[#E176FF]">Sign up now and start swapping</p>
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full mb-4 p-2 border border-[#E176FF] rounded bg-inherit"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-2 border border-[#E176FF] rounded bg-inherit"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 p-2 border border-[#E176FF] rounded bg-inherit"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-[#F376F8] text-white rounded hover:bg-[#964c99]"
            >
              Register
            </button>
          </form>
          <Link to="/login" className="my-4">
            <span className="no-underline">Already have an account? </span>
            <span className="underline text-[#E176FF]">Login</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
