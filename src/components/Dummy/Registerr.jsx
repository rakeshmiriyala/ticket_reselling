/* eslint-disable no-unused-vars */

// RegisterPage.js
import React, { useState } from "react";
import Navbar from "./NavbarSucess";
import backgroundImage from "../../assets/lo.png";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., API call to register user)

    // Redirect to OTP page
    navigate("/otp", { state: { phone: formData.phone } });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row h-auto">
        {/* Left Half */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center h-[720px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        {/* Right Half */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#1A082F] text-white p-8">
          <h1 className="text-4xl font-bold mb-4">Sign up</h1>
          <p className="mb-6 text-[#E176FF]">Sign up now and start swapping</p>
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full mb-4 p-2 border border-[#E176FF] rounded bg-inherit"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full mb-4 p-2 border border-[#E176FF] rounded bg-inherit"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full mb-4 p-2 border border-[#E176FF] rounded bg-inherit"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full mb-6 p-2 border border-[#E176FF] rounded bg-inherit"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-[#F376F8] text-white rounded hover:bg-[#964c99]"
            >
              Get OTP
            </button>
          </form>
          <p className="my-4">
            <span className="no-underline">Already have an account? </span>
            <a href="/login" className="underline text-[#E176FF]">Login</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
