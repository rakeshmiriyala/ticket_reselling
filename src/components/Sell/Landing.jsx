/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "./Hero.jsx";
import Footer from "../Footer.jsx";
import Sponsers from "../Sponsers.jsx";
import ResponsiveText from "./Text.jsx";
import Test1 from "./Text1.jsx";
import Features from "./Features.jsx";
import Flow from "./Flow.jsx";

const Landing = () => {
  return (
    <>
      <HeroSection />
      <ResponsiveText />
      <Features />
      <Test1 />
      <Flow />
      <Sponsers />
      <Footer />
    </>
  );
};

export default Landing;
