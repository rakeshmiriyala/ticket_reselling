/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import ticketImage from "../assets/ticketmain.png"; // Import the ticket image
import bgImage from "../assets/ticket.png"; // Import the background image

const TicketPage = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-5xl bg-opacity-80 lg:p-8 xs:p-4 rounded-lg shadow-lg">
        {/* Ticket Images */}
        <img
          src={ticketImage}
          alt="Event"
          className="w-full mb-4 rounded-lg shadow-md"
        />
        <img
          src={ticketImage}
          alt="Event"
          className="w-full mb-4 rounded-lg shadow-md"
        />
        <img
          src={ticketImage}
          alt="Event"
          className="w-full mb-4 rounded-lg shadow-md"
        />

        {/* Show All Events Button */}
        <div className="mt-6 flex justify-center">
          <Link
            to="/events"
            className="inline-block px-6 py-4 mt-4 w-64 text-center text-white bg-transparent border-2 border-[#E176FF] rounded-md hover:bg-pink-500 hover:border-pink-500 hover:text-white transition-all duration-300"
          >
            Show All Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
