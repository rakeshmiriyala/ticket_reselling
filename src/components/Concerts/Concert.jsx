/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "tailwindcss/tailwind.css";
import music1 from "../../assets/o-1.jpg";
import music2 from "../../assets/o-2.jpg";
import music3 from "../../assets/o-3.jpg";
import music4 from "../../assets/o-4.jpg";
import music5 from "../../assets/o-3.jpg";

const Concert = () => {
  const scrollContainerRef = useRef(null);

  // Function to handle scroll behavior for left and right buttons
  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth; // Scroll by the width of the container
      console.log("scrolling", direction, scrollAmount);
      // Scroll left or right based on button click
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth", // smooth scrolling
      });
    }
  };

  // Data for the sliders (images and titles)
  const sliderData = [
    {
      title: "Band Shows",
      images: [music1, music2, music3, music4, music5, music1, music3, music4],
    },
    {
      title: "Music Shows",
      images: [music1, music2, music3, music4, music5, music1, music3, music4],
    },
    {
      title: "New Releases",
      images: [music1, music2, music3, music4, music5, music1, music3, music4],
    },
  ];

  // Render each slider with images and title
  const renderSlider = (title, images) => (
    <div className="mb-12">
      <div className="flex items-center justify-between lg:pl-8 xs:pl-5">
        <h1 className="lg:text-4xl xs:text-3xl font-bold font-akira text-white text-start mb-6">
          {title}
        </h1>
        <div className="flex gap-4">
          <button
            className="bg-black text-white py-2 px-4 rounded-2xl"
            onClick={() => handleScroll("left")} // Scroll left
          >
            {"<"}
          </button>
          <button
            className="bg-black text-white py-2 px-4 rounded-2xl"
            onClick={() => handleScroll("right")} // Scroll right
          >
            {">"}
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-4"
        style={{ display: "flex" }} // Ensure flex layout for horizontal scrolling
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
                Watch Now
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
      {sliderData.map((slider) => renderSlider(slider.title, slider.images))}
    </div>
  );
};

export default Concert;
