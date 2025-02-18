/* eslint-disable no-unused-vars */
import React from "react";

const ResponsiveText = () => {
  return (
    <div className="p-6 flex flex-col bg-[#561CCB] justify-center  text-start bg-cover bg-center">
      <div className="heading lg:p-4 xs:p-2 rounded-lg">
        <h1 className="lg:text-6xl md:text-3xl xs:text-2xl  font-akira sm:text-2xl font-bold text-white">
          HOW TO <span className="text-[#E176FF]">SELL </span>?
        </h1>
      </div>
      <div className="description mt-1 p-4 rounded-lg">
        <p className="lg:text-xl xs:text-lg font-poppins md:text-lg lg:pr-80 sm:text-base text-white">
          Did we mention that posting your tickets is a breeze? In just three
          simple steps, you can upload, set your price, and pass on your tickets
          for another fan to experience the excitment!
        </p>
      </div>
    </div>
  );
};

export default ResponsiveText;
