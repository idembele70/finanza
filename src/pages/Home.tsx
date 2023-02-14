import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Facts from "../components/Facts";
import Features from "../components/Features";
import Services from "../components/Services";
import CallBack from "../components/CallBack";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Facts />
      <Features />
      <Services />
      <CallBack />
      <Projects />
      <Team />
      <Testimonial />
    </>
  );
};

export default Home;
