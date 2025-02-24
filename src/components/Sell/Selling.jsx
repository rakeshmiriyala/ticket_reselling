import React from "react";
import bgImage from "../../assets/Sell_small_bg.png"; // Make sure the image exists in this path

const SellTicketsPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-auto py-16 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0"></div>

      {/* Content Section */}
      <div className="relative text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
          Want to Host or Sell Tickets?
        </h1>
        <button className="px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-semibold hover:bg-pink-600 transition duration-300">
          Sell Tickets
        </button>
      </div>
    </div>
  );
};

export default SellTicketsPage;
