/* eslint-disable no-unused-vars */
import React from "react";
import "./Review.css"; // Custom styles (if required)
import image1 from "../assets/review-1.png";

const reviews = [
  {
    name: "John Doe",
    image: image1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna magna. Integer fringilla.",
  },
  {
    name: "Jane Smith",
    image: image1,
    review:
      "Phasellus interdum eros et lorem egestas, eget tincidunt justo hendrerit. Curabitur ac ante.",
  },
  {
    name: "Michael Johnson",
    image: image1,
    review:
      "Vestibulum tincidunt leo at magna posuere, vel hendrerit nisl feugiat. Nam tincidunt, magna sit.",
  },
  {
    name: "Emily Davis",
    image: image1,
    review:
      "Aenean vulputate, erat in sollicitudin sollicitudin, nulla mi ullamcorper est, at viverra purus.",
  },
  {
    name: "David Brown",
    image: image1,
    review:
      "Vivamus dapibus mauris in lorem faucibus, eget tincidunt augue mollis. Suspendisse potenti.",
  },
];

const ReviewsCarousel = () => {
  return (
    <div className="w-full bg-cover bg-center bg-no-repeat">
      <div className="lg:mx-10 xs:mx-2.5 rounded-lg py-8 lg:px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white md:text-4xl">
          <span className="text-[#F376F8]">ESWAP</span> REVIEWS
        </h2>
        <div className="overflow-x-auto flex space-x-8 pb-4 scrollbar-hide sm:space-x-4 md:space-x-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#a12e81] rounded-3xl shadow-lg p-6 w-[300px] flex-shrink-0 sm:w-[250px] md:w-[300px] lg:w-[350px]"
            >
              <div className="flex flex-col items-center">
                {/* Profile Picture */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                {/* Name */}
                <h3 className="text-white font-semibold text-xl mb-2">
                  {review.name}
                </h3>
                {/* Review */}
                <p className="text-gray-300 text-sm">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
