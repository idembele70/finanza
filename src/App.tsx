import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
      </Routes>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
