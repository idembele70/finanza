import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
