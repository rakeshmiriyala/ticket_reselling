/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"; // Adjust the path as per your file structure
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS after component mounts
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-out", // Animation easing
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <nav
      className="bg-[#1b0b30] text-white backdrop-filter backdrop-blur-lg z-0 bg-opacity-75  lg:my-8 lg:mx-4 rounded-3xl"
      data-aos="fade-down" // Apply the fade-down animation to the entire navbar
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3 ">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto md:h-12 rounded"
            />
          </Link>
        </div>

        {/* Middle: Menu options (hidden on small screens) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/sports" className="hover:text-pink-400">
            SPORTS
          </Link>
          <Link to="/entertainment" className="hover:text-pink-400">
            ENTERTAINMENT
          </Link>
          <Link to="/movies" className="hover:text-pink-400">
            MOVIES
          </Link>
          <Link to="/concert" className="hover:text-pink-400">
            CONCERT
          </Link>
        </div>

        {/* Right: Buttons */}
        <div className="hidden  md:flex space-x-4">
          <Link to="/signin" className="px-5 hover:text-pink-500 py-2 rounded-lg">
            Sign In
          </Link>
          <Link
            to="/sell"
            className="border-2 border-pink-500 px-5 py-2 rounded-lg hover:bg-pink-500 hover:shadow-[0_0_10px_3px_rgba(236,72,153,0.8)] transition-shadow duration-200"
          >
            Sell
          </Link>
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (only visible when hamburger menu is open) */}
      {isOpen && (
        <div
          className="md:h rounded-3xl bg-white border-2 "
          data-aos="fade-down" // Apply the fade-down animation to the mobile menu
        >
          <Link
            to="/sports"
            className="block px-6 py-3 text-black rounded-t-lg"
          >
            SPORTS
          </Link>
          <Link to="/entertainment" className="block px-6 py-3 text-black ">
            ENTERTAINMENT
          </Link>
          <Link to="/movies" className="block px-6 py-3 text-black ">
            MOVIES
          </Link>
          <Link
            to="/concert"
            className="block px-6 py-3 text-black rounded-b-lg"
          >
            CONCERT          </Link>

          <div className="flex flex-col space-y-3 px-6 py-4">
            <Link
              to="/signin"
              className="px-1 py-3 rounded-lg text-black hover:bg-[#DB59FF]"
            >
              Sign In
            </Link>
            <Link
              to="/sell"
              className="border-2 border-pink-500 text-black px-5 py-2 rounded-lg hover:bg-pink-500 hover:shadow-[0_0_10px_3px_rgba(236,72,153,0.7)] transition-shadow duration-300"
            >
              Sell
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
