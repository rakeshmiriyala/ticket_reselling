/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./NavbarSucess";
import backgroundImage from "../../assets/lo.png";
import Footer from "../Footer";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call for authentication)
    console.log("Logging in with:", formData);
    navigate("/dummy");
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
          <p className="mb-6 xs:text-xs text-xl ">Enter your details to login.</p>

          <form className="w-full max-w-sm" onSubmit={handleLogin}>
            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full mb-4 p-2 border border-[#E176FF] rounded bg-inherit"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {/* Password Input */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full mb-4 p-2 border border-[#E176FF] rounded bg-inherit"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {/* Login Button */}
            <button
              type="submit"
              className="w-full text-center justify-center py-2 bg-[#F376F8] text-white rounded hover:bg-[#964c99]"
            >
              Login
            </button>
          </form>

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
