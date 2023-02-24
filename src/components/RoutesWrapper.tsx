import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Feature from "../pages/Feature";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Project from "../pages/Project";
import Service from "../pages/Service";
import Team from "../pages/Team";
import Testimonial from "../pages/Testimonial";
import Copyright from "./Copyright";
import Footer from "./Footer";
import Header from "./Header";

const RoutesWrapper = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Copyright />
    </>
  );
};

export default RoutesWrapper;
