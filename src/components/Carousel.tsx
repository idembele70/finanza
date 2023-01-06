import React, { useRef } from "react";
import styled from "styled-components";
import Slider, { InnerSlider, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { lgDown, mdDown, smDown, xlDown, xsDown } from "../utils/responsive";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faChevronLeft, faChevronRight);
const Container = styled.div`
  position: relative;
  margin-bottom: 48px;
`;
const SliderItem = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  min-height: 450px;
  object-fit: cover;
`;
export const Wrapper = styled.div`
  width: 100%;
  padding: 0 12px;
  max-width: 1320px;
  margin: 0 auto 48px;
  ${xlDown({
    maxWidth: 1140,
  })};
  ${lgDown({
    maxWidth: 960,
  })};
  ${mdDown({
    maxWidth: 720,
  })};
  ${smDown({
    maxWidth: 540,
  })};
  ${xsDown({
    maxWidth: "100%",
  })}
`;
const SliderDesc = styled(Wrapper)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  margin-bottom: 0;
`;
export const ParagraphWithBorder = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 16px;
  padding: 4px 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.palette.common.white};
  font-weight: 500;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 5rem;
  margin-bottom: 24px;
  max-width: 736px;
  ${lgDown({
    fontSize: "calc(1.625rem + 4.5vw)",
  })}
`;
const Button = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.light};
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 16px 48px;
  border-radius: ${({ theme }) => theme.borderRadius};
  line-height: 1.5;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  display: inline-block;
  transition: all 300ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.darker};
    border-color: ${({ theme }) => theme.palette.primary.darker};
  }
`;
const SlideButtonContainer = styled.button`
  width: ${({ theme }) => theme.containerPaddingX}px;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  &:hover {
    & > div {
      opacity: 1;
    }
  }
  &:focus {
    & > div {
      opacity: 1;
    }
  }
`;
const SlideLeftButtonContainer = styled(SlideButtonContainer)`
  left: 0;
`;
const SlideRightButtonContainer = styled(SlideButtonContainer)`
  right: 0;
`;
const SlideButton = styled.div`
  height: ${({ theme }) => theme.containerPaddingX}px;
  width: ${({ theme }) => theme.containerPaddingX}px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:opacity: 150ms ease;
  & > svg {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
const SlideLeftButton = styled(SlideButton)`
  border-radius: 0 50% 50% 0;
`;
const SlideRightButton = styled(SlideButton)`
  border-radius: 50% 0 0 50%;
`;
export const imgbaseUrl = `${process.env.PUBLIC_URL}/assets/`;
const Carousel = () => {
  const settings: Settings = {
    fade: true,
    infinite: true,
    speed: 500,
    //autoplay: true,
    //autoplaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const baseUrl = `${imgbaseUrl}carousel-`;
  const endUrl = ".jpg";
  const slideEl = useRef<Slider | null>(null);
  const handleScroll = (direction: string) => {
    if (direction === "left") slideEl.current?.slickPrev();
    else slideEl.current?.slickNext();
  };
  return (
    <Container>
      <Slider ref={slideEl} {...settings}>
        <SliderItem>
          <Image src={`${baseUrl}1${endUrl}`} />
          <SliderDesc>
            <ParagraphWithBorder>Welcome to Finanza</ParagraphWithBorder>
            <Title>Your Financial Status is Our Goal</Title>
            <Button to="/">Explore More</Button>
          </SliderDesc>
        </SliderItem>
        <SliderItem>
          <Image src={`${baseUrl}2${endUrl}`} />
          <SliderDesc>
            <ParagraphWithBorder>Welcome to Finanza</ParagraphWithBorder>
            <Title>True Financial Support For You</Title>
            <Button to="/">Explore More</Button>
          </SliderDesc>
        </SliderItem>
      </Slider>
      <SlideLeftButtonContainer onClick={() => handleScroll("left")}>
        <SlideLeftButton>
          <FontAwesomeIcon icon={["fas", "chevron-left"]} />
        </SlideLeftButton>
      </SlideLeftButtonContainer>
      <SlideRightButtonContainer onClick={() => handleScroll("right")}>
        <SlideRightButton>
          <FontAwesomeIcon icon={["fas", "chevron-right"]} />
        </SlideRightButton>
      </SlideRightButtonContainer>
    </Container>
  );
};

export default Carousel;
