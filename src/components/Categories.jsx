/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

// Import images
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";
import image6 from "../assets/image-6.png";
import image7 from "../assets/image-7.png";
import image8 from "../assets/image-8.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Categories = () => {
  useEffect(() => {
    // Initialize AOS after component mounts
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out", // Animation easing
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <div className="w-full h-full px-4 py-8 bg-cover bg-center bg-no-repeat">
      <h2 className="text-3xl font-bold text-center mb-8 text-white md:text-4xl">
        AVAILABLE CATEGORIES
      </h2>

      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Half */}
        <div
          className="lg:w-1/2 w-full p-4 mb-8 lg:mb-0 flex flex-col"
          data-aos="fade-right" // Apply "move from right to left" animation
        >
          <div className="mb-8">
            <img
              src={image1}
              alt="Category 1"
              className="w-full h-auto rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="flex space-x-4 pr-4 flex-grow">
            <img
              src={image2}
              alt="Category 2"
              className="w-1/2 h-auto rounded-lg object-cover shadow-lg"
              data-aos="fade-right" // Apply "move from right to left" animation to the images
            />
            <img
              src={image3}
              alt="Category 3"
              className="w-1/2 h-auto rounded-lg object-cover shadow-lg"
              data-aos="fade-right" // Apply "move from right to left" animation to the images
            />
          </div>
        </div>

        {/* Right Half */}
        <div
          className="lg:w-1/2 w-full p-4"
          data-aos="fade-right" // Apply "move from left to right" animation for the right section
        >
          <div className="flex space-x-4 pr-4 mb-8">
            <img
              src={image4}
              alt="Category 4"
              className="w-1/2 h-auto rounded-lg object-cover shadow-lg"
              data-aos="fade-right" // Apply "move from right to left" animation to the images
            />
            <img
              src={image5}
              alt="Category 5"
              className="w-1/2 h-auto rounded-lg object-cover shadow-lg"
              data-aos="fade-right" // Apply "move from right to left" animation to the images
            />
          </div>
          <div className="flex space-x-4 pr-4 mb-8">
            <img
              src={image6}
              alt="Category 6"
              className="w-1/2 h-auto rounded-lg object-cover shadow-lg"
              data-aos="fade-right" // Apply "move from right to left" animation to the images
            />
            <img
              src={image7}
              alt="Category 7"
              className="w-1/2 h-auto rounded-lg object-cover shadow-lg"
              data-aos="fade-right" // Apply "move from right to left" animation to the images
            />
          </div>
          <div>
            <img
              src={image8}
              alt="Category 8"
              className="w-full h-60 object-cover rounded-lg shadow-lg"
              data-aos="fade-right" // Apply "move from right to left" animation to the image
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
