/* eslint-disable no-unused-vars */
import React from "react";

const ResponsiveText = () => {
  return (
    <div className="p-6 flex flex-col bg-[#561CCB] justify-center  text-start bg-cover bg-center">
      <div className="heading lg:p-4 xs:p-2 rounded-lg">
        <h1 className="lg:text-6xl md:text-3xl xs:text-2xl font-akira sm:text-2xl font-bold text-white">
          WHY E<span className="text-[#E176FF]">SWAP? </span>
        </h1>
      </div>
      <div className="description mt-1 p-4 rounded-lg">
        <p className="lg:text-xl xs:text-lg font-serif md:text-lg lg:p sm:text-base text-white">
          ESWAP makes ticket reselling simple, safe, and social. If you have
          tickets you can’t use, you’re not just losing out on an experience –
          someone else is too! ESWAP connects you to people eager to attend,
          while offering hosts an efficient way to reach an audience. Secure,
          fast, and easy to use, ESWAP ensures every ticket finds a home
        </p>
      </div>
    </div>
  );
};

export default ResponsiveText;
