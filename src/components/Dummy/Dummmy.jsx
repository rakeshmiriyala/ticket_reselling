/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "./Herodummy.jsx";
import Marquee from "../Marqueue.jsx";
import ResponsiveText from "../Text.jsx";
import TicketPage from "../Ticket.jsx";
import UpcomingEvents from "../Events.jsx";
import Footer from "../Footer.jsx";
import Sponsers from "../Sponsers.jsx";
import Combined from "../Combined.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Marquee />
      <ResponsiveText />
      <TicketPage />
      <UpcomingEvents />
      <Combined />
      <Sponsers />
      <Footer />
    </>
  );
};

export default HomePage;
