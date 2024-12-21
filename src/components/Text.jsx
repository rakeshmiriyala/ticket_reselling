/* eslint-disable no-unused-vars */
import React from "react";
import bgImage from "../assets/Text.png"; // Adjust the path to your background image

const ResponsiveText = () => {
  return (
    <div
      className="p-6 flex flex-col justify-center  text-start bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="heading lg:p-4 xs:p-2 rounded-lg">
        <h1 className="lg:text-6xl md:text-3xl xs:text-2xl font-akira sm:text-2xl font-bold text-white">
          WELCOME TO <span className="text-[#E176FF]">ESWAP </span>{" "}
          <span> </span>- YOUR GATEWAY UNFORGETTABLE EVENTS!
        </h1>
      </div>
      <div className="description mt-1 p-4 rounded-lg">
        <p className="lg:text-xl xs:text-lg font-serif md:text-lg sm:text-base text-white">
          Here, every concert, game, and adventure is just a swap away. Enjoy
          seamless ticket reselling and make every moment count with ESWAP!
        </p>
      </div>
    </div>
  );
};

export default ResponsiveText;
