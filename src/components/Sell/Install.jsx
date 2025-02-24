import React from "react";
import iosImage from "../../assets/Downlaod_ios.jpg"; // Import iOS download image
import androidImage from "../../assets/Downlaod_andriod.jpg"; // Import Android download image

const TicketResellDownload = () => {
  return (
    <div className="flex flex-col items-end justify-center h-auto bg-gray-100 p-4 pr-10">
      <h1 className="text-2xl text-black font-bold mb-6">Download the Ticket Resell App</h1>
      <div className="flex space-x-4">
        {/* iOS Download Button */}
        <a
          href="https://apps.apple.com/app/example" // Replace with actual iOS App Store URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iosImage} alt="Download on App Store" className="w-40 " />
        </a>

        {/* Android Download Button */}
        <a
          href="https://play.google.com/store/apps/details?id=example" // Replace with actual Play Store URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={androidImage} alt="Get it on Google Play" className="w-40 " />
        </a>
      </div>
    </div>
  );
};

export default TicketResellDownload;
