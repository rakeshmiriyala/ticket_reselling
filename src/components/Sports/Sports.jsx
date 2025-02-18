/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "tailwindcss/tailwind.css";
import { FaFootballBall, FaBasketballBall, FaBaseballBall } from "react-icons/fa"; // Import different icons
import cricket1 from "../../assets/c-1.jpeg";
import cricket2 from "../../assets/c-2.jpeg";
import cricket3 from "../../assets/c-3.jpg";
import cricket4 from "../../assets/c-4.jpg";
import cricket5 from "../../assets/c-5.jpg";

const Sports = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth; // Scroll by the width of the container
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const sliderData = [
    {
      title: "Box Cricket",
      icon: <FaFootballBall className="text-2xl" />, // Football icon
      images: [cricket1, cricket2, cricket3, cricket4, cricket5, cricket2, cricket3, cricket1, cricket4],
    },
    {
      title: "Full Ground",
      icon: <FaBasketballBall className="text-2xl" />, // Basketball icon
      images: [cricket1, cricket2, cricket3, cricket4, cricket5, cricket2, cricket3, cricket1, cricket4],
    },
    {
      title: "IPL",
      icon: <FaBaseballBall className="text-2xl" />, // Baseball icon
      images: [cricket1, cricket2, cricket3, cricket4, cricket5, cricket2, cricket3, cricket1, cricket4],
    },
  ];

  const renderSlider = (title, icon, images) => (
    <div className="mb-8">
      <div className="flex items-center justify-between lg:pl-8 xs:pl-5">
        <h1 className="lg:text-4xl xs:text-3xl font-bold font-akira text-white text-center items-center mb-6 flex gap-2 justify-center">
          {icon} {/* Display the specific icon for each title */}
          {title}
        </h1>
        <div className="flex gap-4">
          <button
            className="bg-black text-white py-2 px-4 rounded-2xl"
            onClick={() => handleScroll("left")}
          >
            {"<"}
          </button>
          <button
            className="bg-black text-white py-2 px-4 rounded-2xl"
            onClick={() => handleScroll("right")}
          >
            {">"}
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-4"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-[250px] group relative hover:opacity-100 opacity-70 transition-opacity duration-300"
          >
            <div
              className="bg-[#120621] text-white rounded-2xl shadow-lg p-4 text-center 
              transition-transform duration-300 transform group-hover:scale-105"
            >
              <h3 className="text-lg font-bold">{`Card ${index + 1}`}</h3>
              <div className="my-4">
                <img
                  src={image}
                  alt={`Card ${index + 1}`}
                  className="w-[200px] h-[150px] mx-auto rounded object-cover"
                />
              </div>
              <button className="bg-[#DB59FF] text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer">
                Book Slot
              </button>
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container lg:mb-32 mx-0 py-8 w-full">
      {sliderData.map((slider) => renderSlider(slider.title, slider.icon, slider.images))}
    </div>
  );
};

export default Sports;
