import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import { ParagraphWithLightBorder, TitleH4 } from "./About";
import { TitleWithBigMargin } from "./Services";
import { WrapperContainer, imgbaseUrl } from "./SliderItem";
import { ScrollTrigger } from "gsap/ScrollTrigger";
library.add(faLink);

const Container = styled(WrapperContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Bottom = styled.div`
  max-width: 100vw;
`;
const CardContainer = styled(Slider)`
  width: 100%;
  .slick-slide {
    box-sizing: border-box;
    padding-right: 25px;
  }
`;
const Card = styled.div`
  position: relative;
  padding-right: 48px;
  padding-bottom: 48px;
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
const CardLinkContainer = styled.div`
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
  margin-bottom: 16px;
  height: auto;
  object-fit: contain;
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
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: "170px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  const slideEl = useRef<Slider | null>(null);
  const handleSlide = (direction: string) => {
    if (direction === "left") slideEl.current?.slickPrev();
    else slideEl.current?.slickNext();
  };
  // Top and slider scroll trigger animation
  const containerEl = useRef<HTMLDivElement>(null);
  const topEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerEl.current,
        start: "top center",
      },
    });
    tl.from(topEl.current, {
      opacity: 0,
      y: "100%",
    }).from(".project-slick-list", {
      opacity: 0,
      y: "100%",
    });
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, []);
  const handleLoad = () => {
    ScrollTrigger.refresh();
  };
  return (
    <Container ref={containerEl}>
      <Top ref={topEl}>
        <ParagraphWithLightBorder>Our Projects</ParagraphWithLightBorder>
        <TitleWithBigMargin>
          We Have Completed Latest Projects
        </TitleWithBigMargin>
      </Top>
      <CardContainer className="project-slick-list" ref={slideEl} {...settings}>
        {[1, 2, 3, 4].map((idx) => (
          <Card key={idx}>
            <CardImage
              onLoad={handleLoad}
              src={`${imgbaseUrl}service-${idx}.jpg`}
            />
            <CardLinkContainer>
              <CardLink to="" />
              <CardIcon icon={["fas", "link"]} />
            </CardLinkContainer>
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
