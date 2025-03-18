/* eslint-disable no-unused-vars */
import React from "react";
import "tailwindcss/tailwind.css";

// Import slider images
import festival1 from "../../assets/t-1.png";
import festival2 from "../../assets/t-2.png";
import festival3 from "../../assets/t-3.png";
import festival4 from "../../assets/t-4.png";
import festival5 from "../../assets/t-5.png";

const Movies = () => {
  const sliderData = [
    {
      title: "MOVIES",
      images: [festival1, festival2, festival3, festival4, festival5, festival1, festival3, festival4],
    },
    {
      title: "COMEDY SHOWS",
      images: [festival1, festival2, festival3, festival4, festival5, festival1, festival3, festival4],
    },
    {
      title: "FESTIVAL CELEBRATION",
      images: [festival1, festival2, festival3, festival4, festival5, festival1, festival3, festival4],
    },
  ];

  const renderSlider = (title, images) => (
    <div className="mb-12">
      {/* Heading */}
      <div className="flex items-center justify-center px-5 gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:pt-4 md:pt-3 text-white lg:mb-6 md:mb-4 xs:mb-3 xs:pt-2 text-center font-akira font-bold">
          {title}
        </h1>
      </div>

      {/* Scrollable Wrapper */}
      <div className="relative overflow-visible group">
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-4 pb-10 pt-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-[160px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[320px]
                        transition-opacity duration-300 opacity-100 group-hover:opacity-50 hover:!opacity-100"
            >
              <div
                className="bg-[#120621] text-white rounded-2xl shadow-lg p-4 text-center 
                          transition-transform duration-300 transform hover:scale-110 origin-center"
              >
                <h3 className="text-sm sm:text-lg font-bold">{`Card ${index + 1}`}</h3>
                <div className="my-4">
                  <img
                    src={image}
                    alt={`Card ${index + 1}`}
                    className="w-full h-auto mx-auto rounded object-cover"
                  />
                </div>
                <button className="bg-[#DB59FF] text-white py-2 xs:text-xs md:text-md lg:text-lg px-4 rounded-lg hover:bg-[#ca4aee] cursor-pointer">
                  BOOK SLOT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-8 w-full">
      {sliderData.map((slider) => renderSlider(slider.title, slider.images))}
    </div>
  );
};

export default Movies;
