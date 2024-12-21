/* eslint-disable no-unused-vars */
// Install react-slick and slick-carousel if not done already
// npm install react-slick slick-carousel

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";

const Concert = () => {
  // Slick settings generator for each slider
  const getSettings = (sliderClass) => ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          centerMode: false, // Disable center mode for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable center mode for smaller screens
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable center mode for ultra-small screens
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable center mode for the smallest screens
        },
      },
    ],
    beforeChange: () => {
      document
        .querySelectorAll(`.${sliderClass} .slick-slide`)
        .forEach((slide) => {
          slide.classList.remove("scale-110", "z-20");
        });
    },
    afterChange: (current) => {
      const currentSlide = document.querySelector(
        `.${sliderClass} .slick-slide[data-index="${current}"]`
      );
      if (currentSlide) {
        currentSlide.classList.add("scale-110", "z-20");
      }
    },
  });

  const sliderData = [
    {
      title: "Bandd Showsssss",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/1/16/Cricket_pic.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/41/Cricket_game.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cricket_batting.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/59/Cricket_field.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Cricket_catch.jpg",
      ],
    },
    {
      title: "Music Shows",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Soccer_ball.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/FIFA_World_Cup_Trophy.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/Football_pitch.svg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/Football_player_running.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/57/Goalkeeper_saves_goal.jpg",
      ],
    },
    {
      title: "Newwwwww",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball_dunk.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Basketball_court.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/3e/Playing_basketball.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Basketball_on_hoop.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/Basketball_game.jpg",
      ],
    },
  ];

  const renderSlider = (title, images, sliderClass) => (
    <div className="mb-12">
      <br />
      <h1 className="lg:text-4xl xs:text-3xl xs:pl-5 font-bold text-white text-start lg:pl-8 mb-6">
        {title}
      </h1>

      <br />
      <Slider
        {...getSettings(sliderClass)}
        className={`slider ${sliderClass} px-4`}
      >
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <div className="bg-[#120621] text-white rounded-2xl shadow-lg p-6 text-center transition-transform duration-300">
              <h3 className="text-lg font-bold">{`Card ${index + 1}`}</h3>
              <div className="my-4">
                <img
                  src={image}
                  alt={`Card ${index + 1}`}
                  className="w-24 h-24 mx-auto rounded"
                />
              </div>
              <button className="bg-[#DB59FF] text-white py-2 px-4 rounded-2xl hover:bg-blue-600">
                {`Button ${index + 1}`}
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <br />
      <br />
      <br />
      <div className="bg-[#120621] py-4 text-transparent select-none">fhj</div>
    </div>
  );

  return (
    <div className="container lg:mb-32 mx-0 max-w-fit py-8">
      {sliderData.map((slider, index) =>
        renderSlider(slider.title, slider.images, `slider-${index}`)
      )}
    </div>
  );
};

export default Concert;
