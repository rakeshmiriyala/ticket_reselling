import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import music1 from "../../assets/o-1.jpg";
import music2 from "../../assets/o-2.jpg";
import music3 from "../../assets/o-3.jpg";
import music4 from "../../assets/o-4.jpg";
import music5 from "../../assets/o-3.jpg";

const eventImages = [music1, music2, music3, music4, music5];

const BookingPage = () => {
  const { categoryId, cardIndex } = useParams();
  const navigate = useNavigate();
  const selectedImage = eventImages[(cardIndex - 1) % eventImages.length];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-900 text-white px-4 py-6">
      {/* Left Side: Event Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <img src={selectedImage} alt="Event" className="w-full h-auto max-h-[80vh] rounded-lg object-cover shadow-lg" />
      </div>

      {/* Right Side: Booking Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 bg-[#120621] rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Book Your Slot</h2>

        {/* Single Slot Timing Box */}
        <div className="flex items-center justify-center bg-[#DB59FF] text-white text-lg md:text-xl py-3 px-6 rounded-lg mb-6">
          5:00 PM - 12:00 AM
        </div>

        {/* Book Now Button */}
        <button 
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-bold w-full text-lg mb-4 transition duration-300"
          onClick={() => navigate(`/select-event/${categoryId}/${cardIndex}`)}
        >
          Select Event
        </button>

        {/* Location Map Section */}
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-3 text-center">Event Location</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.1577158409494!2d78.4327151!3d17.5493632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ffb1e0a0e89%3A0x58221346edf42e25!2sGreenmetro%E2%80%99s%20Tulasi%20Lakefront%20block%209!5e0!3m2!1sen!2sin!4v1709292831026!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
