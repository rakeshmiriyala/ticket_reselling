/* eslint-disable no-unused-vars */
import React from "react";
import "tailwindcss/tailwind.css";

// Import slider images
import form1 from "../../assets/c-1.jpeg";
import form2 from "../../assets/c-2.jpeg";
import form3 from "../../assets/c-3.jpg";
import form4 from "../../assets/c-4.jpg";
import form5 from "../../assets/c-5.jpg";

// Import different icons for each heading
import Boxcricket from "../../assets/boxcricket_icon.png";
import Gokarting from "../../assets/gokarting_icon.png";
import Ipltickets from "../../assets/ipltickets_icon.png";

const Sports = () => {
  const sliderData = [
    {
      title: "BOX CRICKET",
      icon: Boxcricket,
      images: [form1, form2, form3, form4, form5, form1, form3, form4],
    },
    {
      title: "BADMINTON",
      icon: Gokarting,
      images: [form2, form3, form4, form5, form1, form3, form4,form1],
    },
    {
      title: "FOOT BALL",
      icon: Ipltickets,
      images: [form3, form4, form5, form1, form3, form4,form1, form2],
    },
    {
      title: "CRICKET GROUND",
      icon: Ipltickets,
      images: [form4, form5, form1, form3, form4 , form1, form2, form3,],
    },
    {
      title: "SWIMMING",
      icon: Ipltickets,
      images: [form5, form1, form3, form4,form1, form2, form3, form4],
    },
    {
      title: "TENNIS",
      icon: Ipltickets,
      images: [form1, form2, form3, form4, form5, form1, form3, form4],
    },
    {
      title: "TABLE TENNIS",
      icon: Ipltickets,
      images: [form2, form3, form4, form5, form1, form3, form4,form1],
    },
    {
      title: "PICKLE BALL",
      icon: Ipltickets,
      images: [form3, form4, form5, form1, form3, form4,form1, form2],
    },
  ];

  const renderSlider = (title, icon, images) => (
    <div className="mb-12">
      {/* Heading with Icon */}
      <div className="flex items-center justify-center px-5 gap-3">
        {/* <img
          src={icon}
          alt={title}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:h-10 rounded object-cover"
        /> */}
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
      {sliderData.map((slider) =>
        renderSlider(slider.title, slider.icon, slider.images)
      )}
    </div>
  );
};

export default Sports;
