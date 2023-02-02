import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Feature from "./pages/Feature";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import NotFound from "./pages/NotFound";

function App() {
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
