import React from "react";

const SellTicketsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto py-10 bg-black p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6">
        If you want to host or sell tickets?
      </h1>
      <button className="px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-semibold hover:bg-pink-600 transition">
        Sell Tickets
      </button>
    </div>
  );
};

export default SellTicketsPage;