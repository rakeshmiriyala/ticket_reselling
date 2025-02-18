/* eslint-disable no-unused-vars */
import React from "react";
import Categories from "./Categories";
import ReviewsCarousel from "./Review.jsx";
import bgImage from "../assets/combined_bg.png"; // Import your page background image

const Combined = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Categories Section */}
      <section className="py-16">
        <Categories />
      </section>

      {/* Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500" />

      {/* Reviews Section */}
      <section className="py-8">
        <ReviewsCarousel />
      </section>
    </div>
  );
};

export default Combined;
