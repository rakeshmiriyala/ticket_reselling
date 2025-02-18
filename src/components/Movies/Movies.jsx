/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "tailwindcss/tailwind.css";
import festival1 from "../../assets/t-1.png";
import festival2 from "../../assets/t-2.png";
import festival3 from "../../assets/t-3.png";
import festival4 from "../../assets/t-4.png";
import festival5 from "../../assets/t-5.png";

const Movies = () => {
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
      title: "Movies",
      images: [festival1, festival2, festival3, festival4, festival5, festival1, festival3, festival4],
    },
    {
      title: "Comedy Shows",
      images: [festival1, festival2, festival3, festival4, festival5, festival1, festival3, festival4],
    },
    {
      title: "Festival Celebration",
      images: [festival1, festival2, festival3, festival4, festival5, festival1, festival3, festival4],
    },
  ];

  const renderSlider = (title, images) => (
    <div className="mb-12">
      <div className="flex items-center justify-between lg:pl-8 xs:pl-5">
        <h1 className="lg:text-4xl xs:text-3xl font-bold font-akira text-white text-start mb-6">
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
      {sliderData.map((slider) => renderSlider(slider.title, slider.images))}
    </div>
  );
};

export default Movies;
