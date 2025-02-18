/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../assets/event_logo.png";
import cloud from "../assets/event_logo.png";
import develop from "../assets/event_logo.png";
import innovate from "../assets/event_logo.png";
import www from "../assets/event_logo.png";
import bgImage from "../assets/event_bg.png";
import bgImage1 from "../assets/event_1.png";

const Services = () => {
  const cards = [
    {
      id: 1,
      imageUrl: api,
      title: "API Integration",
      description: "Seamless integration of APIs for better connectivity.",
    },
    {
      id: 2,
      imageUrl: cloud,
      title: "Cloud Solutions",
      description: "Cloud-powered services for enhanced scalability.",
    },
    {
      id: 3,
      imageUrl: develop,
      title: "Web Development",
      description: "Modern web solutions tailored to your needs.",
    },
    {
      id: 4,
      imageUrl: innovate,
      title: "Innovation Lab",
      description: "Cutting-edge solutions for the next big thing.",
    },
    {
      id: 5,
      imageUrl: www,
      title: "Global Reach",
      description: "Connecting your business to the world.",
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
          slidesToShow: 1,
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
              <div
                className="bg-[#180825] rounded-lg overflow-hidden shadow-lg  relative group transition-all duration-300"
                style={{ height: "420px" }}
              >
                {/* Background image only visible on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100  transition-opacity duration-300"
                  style={{ backgroundImage: `url(${bgImage1})` }}
                ></div>
                <div className="relative z-10 p-4 flex flex-col h-full">
                  <img
                    className="w-44 h-40 mb-4 items-center justify-center transition-transform duration-300 transform group-hover:scale-90"
                    src={card.imageUrl}
                    alt={`Service ${card.id}`}
                  />
                  <h2 className="text-lg font-bold text-white mb-2 text-start">
                    {card.title}
                  </h2>
                  <p className="text-white text-start">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
