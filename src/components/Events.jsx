/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../assets/event_1.png";
import cloud from "../assets/event_1.png";
import develop from "../assets/event_1.png";
import innovate from "../assets/event_1.png";
import www from "../assets/event_1.png";
import bgImage from "../assets/event_bg.png"; // Import the background image

const Services = () => {
  const cards = [
    {
      id: 1,
      imageUrl: api,
    },
    {
      id: 2,
      imageUrl: cloud,
    },
    {
      id: 3,
      imageUrl: develop,
    },
    {
      id: 4,
      imageUrl: innovate,
    },
    {
      id: 5,
      imageUrl: www,
    },
  ];
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Display one card at a time on mobile
        },
      },
    ],
  };

  return (
    <div
      id="services"
      className="h-auto flex flex-col items-center justify-center py-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="lg:text-5xl text-center font-bold text-white xs:p-4 xs:text-3xl mb-8">
        UPCOMING CONCERTS
      </h1>
      <div className="w-full" ref={sliderRef}>
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-4 focus:outline-none">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  className="mx-auto w-full h-[420px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-125" // Updated for proper fitting
                  src={card.imageUrl}
                  alt={`Service ${card.id}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
