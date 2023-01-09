import React from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Facts from "../components/Facts";
import Features from "../components/Features";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Facts />
      <Features />
      <Services />
    </>
  );
};

export default Home;
