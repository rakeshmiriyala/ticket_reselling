/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbarr"; // Import Navbar component
import Footer from "../Footer"; // Import Footer component

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#120621]">
      <Navbar />
      <div className="flex flex-col lg:items-center sm:items-center flex-grow">
        <div className="p-8 rounded-3xl w-full">
          <h2 className="text-4xl font-bold text-center mb-6 text-white">
            Profile Details
          </h2>
          {/* Responsive Layout */}
          <div className="flex flex-col space-y-4">
            {/* Name */}
            <div>
              <h3 className="text-lg font-medium text-white">Name:</h3>
              <p className="text-white">John Doe</p>
            </div>
            {/* Email */}
            <div>
              <h3 className="text-lg font-medium text-white">Email:</h3>
              <p className="text-white">johndoe@example.com</p>
            </div>
            {/* Phone Number */}
            <div>
              <h3 className="text-lg font-medium text-white">Phone Number:</h3>
              <p className="text-white">+1 234 567 890</p>
            </div>
            {/* Address */}
            <div>
              <h3 className="text-lg font-medium text-white">Address:</h3>
              <p className="text-white">123 Main Street, Springfield, USA</p>
            </div>
          </div>
          {/* Logout Button */}
          <Link
            to="/"
            className="mt-6 block text-center w-24 mx-auto bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 shadow-lg transition duration-300"
          >
            Logout
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
