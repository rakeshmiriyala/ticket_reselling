import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import iosImage from "../../assets/Downlaod_ios.jpg"; // Import iOS download image
import androidImage from "../../assets/Downlaod_andriod.jpg"; // Import Android download image

const faqData = [
  { question: "What is your refund policy?", answer: "We offer a full refund within 30 days of purchase." },
  { question: "How do I change my account password?", answer: "You can change your password in the account settings section." },
  { question: "Do you offer customer support?", answer: "Yes, we offer 24/7 customer support via chat and email." },
  { question: "Can I upgrade my subscription plan?", answer: "Yes, you can upgrade your plan at any time from your dashboard." },
  { question: "Is my payment information secure?", answer: "Yes, we use industry-standard encryption to protect your payment details." }
];

const FAQDownloadSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center lg:pl-20 justify-between h-auto p-10 bg-gray-100">
      {/* FAQ Section */}
      <div className="w-full md:w-1/2   p-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">FAQ Section</h1>
        </div>
        {faqData.map((item, index) => (
          <div key={index} className="py-3">
            <button
              className="w-full flex justify-between items-center text-lg font-semibold focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              {openIndex === index ? <FaArrowUp /> : <FaArrowDown />}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-black">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Download Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gray-100 p-4 md:pr-10 mt-6 md:mt-0">
        <h1 className="text-2xl text-black font-bold mb-6">Download the Ticket Resell App</h1>
        <div className="flex space-x-4">
          <a
            href="https://apps.apple.com/app/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iosImage} alt="Download on App Store" className="w-40" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={androidImage} alt="Get it on Google Play" className="w-40" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQDownloadSection;
