/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import music1 from "../../assets/o-1.jpg";
import music2 from "../../assets/o-2.jpg";
import music3 from "../../assets/o-3.jpg";
import music4 from "../../assets/o-4.jpg";
import music5 from "../../assets/o-3.jpg";
import concertIcon from "../../assets/concert_icon.png";
import eventsIcon from "../../assets/otherevents_icon.png";
import festsIcon from "../../assets/festsandparties_icon.png";

const Concert = () => {
  const navigate = useNavigate();

  const sliderData = [
    {
      id: "concerts",
      title: "CONCERTS",
      icon: concertIcon,
      images: [music1, music2, music3, music4, music5, music1, music3, music4],
    },
    {
      id: "other-events",
      title: "OTHER EVENTS",
      icon: eventsIcon,
      images: [music1, music2, music3, music4, music5, music1, music3, music4],
    },
    {
      id: "fests-parties",
      title: "FESTS AND PARTIES",
      icon: festsIcon,
      images: [music1, music2, music3, music4, music5, music1, music3, music4],
    },
  ];

  const handleBooking = (categoryId, cardIndex) => {
    navigate(`/booking/${categoryId}/${cardIndex}`);
  };

  const renderSlider = (id, title, icon, images) => (
    <div className="mb-12" key={id}>
      <div className="flex items-center justify-center px-5 gap-3">
        {/* <img src={icon} alt={title} className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:h-10 rounded object-cover" /> */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:pt-4 md:pt-3 text-white lg:mb-6 md:mb-4 xs:mb-3 xs:pt-2 text-center font-akira font-bold">
          {title}
        </h1>
      </div>
      <div className="relative overflow-visible group">
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-4 pb-10 pt-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-[160px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[320px] transition-opacity duration-300 opacity-100 group-hover:opacity-50 hover:!opacity-100"
            >
              <div className="bg-[#120621] text-white rounded-2xl shadow-lg p-6 text-center transition-transform duration-300 transform hover:scale-110 origin-center">
                <h3 className="text-sm sm:text-lg font-bold">{`Card ${index + 1}`}</h3>
                <div className="my-4">
                  <img src={image} alt={`Card ${index + 1}`} className="w-full h-auto mx-auto rounded object-cover" />
                </div>
                <button 
                  className="bg-[#DB59FF] text-white py-2 xs:text-xs md:text-md lg:text-lg px-6 rounded-lg hover:bg-[#ca4aee] cursor-pointer"
                  onClick={() => handleBooking(id, index + 1)}
                >
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
      {sliderData.map((slider) => renderSlider(slider.id, slider.title, slider.icon, slider.images))}
    </div>
  );
};

export default Concert;
