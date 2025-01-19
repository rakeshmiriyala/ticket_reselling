/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import bgImage from "../assets/hero_bg.png"; // Adjust to your image path
import rightImage from "../assets/hero_right.png"; // Adjust to your image path
import Navbar from "./Navbar"; // Import Navbar component
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center lg:h-screen flex flex-col"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Content */}
      <div className="container mx-auto sm:px-0 md:px-10 xs:px-6 lg:px-10 flex flex-col font-akira lg:flex-row items-start lg:items-center xs:pt-8 pb-12">
        {/* Left Content */}
        <div
          className="w-full lg:w-9/12 md:w-4/8 text-white space-y-6"
          data-aos="fade-right"
        >
          <h1 className="lg:text-5xl md:text-5xl xs:text-3xl font-bold">
            YOUR GO - TO DIGITAL MARKETING PLACE FOR{" "}
            <span className="lg:text-5xl leading-3 md:text-5xl xs:text-2xl text-[#E176FF] font-bold">
              {" "}
              RESELLING{" "}
              <span className="xs:hidden text-transparent select-none">
                {" "}
                gdfghedg
              </span>{" "}
              TICKETS
            </span>
          </h1>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-4/8 lg:w-3/12" data-aos="fade-left">
          <img
            src={rightImage}
            alt="Hero Side Image"
            className="rounded-lg shadow-lg object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
