import React, { useRef } from "react";
import styled from "styled-components";
import { WrapperContainer, imgbaseUrl } from "./Carousel";
import { ParagraphWithLightBorder, TitleH4 } from "./About";
import { TitleWithBigMargin } from "./Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { lgDown, mdDown, smDown, xlDown, xsDown } from "../utils/responsive";
library.add(faLink);

const Container = styled(WrapperContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
`;
const CardContainer = styled(Slider)`
  width: 100%;

  .slick-slide {
    padding-right: 25px;
    box-sizing: border-box;
    ${smDown({
      paddingRight: 25,
      marginLeft: 1,
    })}
  }
  .slick-list {
    height: 455px;
    ${xlDown({
      height: 400,
    })}
    ${lgDown({
      height: 330,
    })}
    ${mdDown({
      height: 377,
    })}
    ${smDown({
      maxHeight: 574,
    })}
    ${xsDown({
      maxHeight: 440,
    })}
  }
`;
const Card = styled.div`
  position: relative;
  width: 100%;
  height: 455px;
  ${xlDown({
    height: 400,
  })}
  ${lgDown({
    height: 330,
  })}
  ${mdDown({
    height: 377,
  })}
  ${smDown({
    height: 377,
  })}
  ${xsDown({
    height: 440,
  })}
  &:hover {
    & a {
      background-color: rgba(255, 255, 255, 0.5);
    }
    & svg {
      opacity: 1;
    }
    & > :last-child {
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
    & h4 {
      color: ${({ theme }) => theme.palette.common.white};
    }
  }
`;
const CardImgContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 48px;
  bottom: 48px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  margin-bottom: 16px;
`;
const CardIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 3rem;
  color: ${({ theme }) => theme.palette.primary.main};
  opacity: 0;
  transition: opacity 300ms linear;
`;
const CardLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: background-color 300ms linear;
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const CardBg = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 48px;
  top: 48px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  z-index: -1;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  & h4 {
    margin-bottom: 0;
  }
  transition: background-color 300ms linear;
`;
const SlideBtnContainer = styled.div`
  display: flex;
  margin-top: 25px;
`;
const SlideBtn = styled.div`
  height: 45px;
  width: 45px;
  margin: 0 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    & svg {
      color: ${({ theme }) => theme.palette.common.white};
    }
  }
`;
const SlideBtnIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
`;
const Projects = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  const slideEl = useRef<Slider | null>(null);
  const handleSlide = (direction: string) => {
    if (direction === "left") slideEl.current?.slickPrev();
    else slideEl.current?.slickNext();
  };
  return (
    <Container>
      <ParagraphWithLightBorder>Our Projects</ParagraphWithLightBorder>
      <TitleWithBigMargin>We Have Completed Latest Projects</TitleWithBigMargin>
      <CardContainer ref={slideEl} {...settings}>
        {[1, 2, 3, 4].map((idx) => (
          <Card>
            <CardImgContainer>
              <CardLink to="/" />
              <CardImage src={`${imgbaseUrl}service-${idx}.jpg`} />
              <CardIcon icon={["fas", "link"]} />
            </CardImgContainer>
            <CardBg>
              <TitleH4>Cash Investment</TitleH4>
            </CardBg>
          </Card>
        ))}
      </CardContainer>
      <SlideBtnContainer>
        <SlideBtn onClick={() => handleSlide("left")}>
          <SlideBtnIcon icon={["fas", "chevron-left"]} />
        </SlideBtn>
        <SlideBtn onClick={() => handleSlide("right")}>
          <SlideBtnIcon icon={["fas", "chevron-right"]} />
        </SlideBtn>
      </SlideBtnContainer>
    </Container>
  );
};

export default Projects;
