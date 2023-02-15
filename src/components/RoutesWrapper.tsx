import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Feature from "../pages/Feature";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Project from "../pages/Project";
import Service from "../pages/Service";
import Team from "../pages/Team";
import Testimonial from "../pages/Testimonial";
import Header from "./Header";
import Footer from "./Footer";
import Copyright from "./Copyright";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border: 4px solid ${({ theme }) => theme.palette.primary.main};
  border-right-color: transparent;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: ${spin} 750ms linear infinite;
`;
const RoutesWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  if (loading)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
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
