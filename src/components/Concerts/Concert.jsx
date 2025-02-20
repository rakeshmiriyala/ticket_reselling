/* eslint-disable no-unused-vars */
import React from "react";
import "tailwindcss/tailwind.css";

// Import slider images
import music1 from "../../assets/o-1.jpg";
import music2 from "../../assets/o-2.jpg";
import music3 from "../../assets/o-3.jpg";
import music4 from "../../assets/o-4.jpg";
import music5 from "../../assets/o-3.jpg";

// Import different icons for each heading
import concertIcon from "../../assets/concert_icon.png";
import eventsIcon from "../../assets/otherevents_icon.png";
import festsIcon from "../../assets/festsandparties_icon.png";

const Concert = () => {
  const sliderData = [
    {
      title: "CONCERTS",
      icon: concertIcon,
      images: [music1, music2, music3, music4, music5, music1, music3, music4],
    },
    {
      title: "OTHER EVENTS",
      icon: eventsIcon,
      images: [music1, music2, music3, music4, music5, music1, music3, music4],
    },
    {
      title: "FESTS AND PARTIES",
      icon: festsIcon,
      images: [music1, music2, music3, music4, music5, music1, music3, music4],
    },
  ];

  const renderSlider = (title, icon, images) => (
    <div className="mb-12">
      {/* Heading with Icon */}
      <div className="flex items-center justify-center px-5 gap-3">
        <img
          src={icon}
          alt={title}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:h-10 rounded object-cover"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:pt-4 md:pt-3 text-white lg:mb-6 md:mb-4 xs:mb-3 xs:pt-2 text-center font-bold">
          {title}
        </h1>
      </div>

      {/* Scrollable Wrapper */}
      <div className="relative overflow-visible group">
  <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-4 pb-10 pt-10">
    {images.map((image, index) => (
      <div
        key={index}
        className="snap-center flex-shrink-0 w-[130px] sm:w-[180px] md:w-[220px] lg:w-[250px] 
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
      {sliderData.map((slider) =>
        renderSlider(slider.title, slider.icon, slider.images)
      )}
    </div>
  );
};

export default Concert;
