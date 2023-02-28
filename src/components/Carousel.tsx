import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import SliderItem from "./SliderItem";
library.add(faChevronLeft, faChevronRight);
const Container = styled.div`
  position: relative;
  margin-bottom: 48px;
  min-height: calc(100vw * 9 / 16);
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
const Carousel = () => {
  const settings: Settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slideEl = useRef<Slider | null>(null);
  const handleScroll = (direction: string) => {
    if (direction === "left") slideEl.current?.slickPrev();
    else slideEl.current?.slickNext();
  };
  // Caroussel fadein animation
  useLayoutEffect(() => {
    const carouselTween = gsap.from(".carousel-slick-list", {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".carousel-slick-list",
        start: "top center",
      },
    });
    return () => {
      carouselTween.scrollTrigger?.kill();
    };
  }, []);
  // Caroussel slideInDown animation
  const sliderParagraphsEl = useRef<HTMLParagraphElement[]>([]);
  const addToSliderParagraphs = (el: HTMLParagraphElement) => {
    if (el && !sliderParagraphsEl.current.includes(el))
      sliderParagraphsEl.current.push(el);
  };
  const slidertitlesEl = useRef<HTMLHeadingElement[]>([]);
  const addToSliderTitles = (el: HTMLHeadingElement) => {
    if (el && !slidertitlesEl.current.includes(el))
      slidertitlesEl.current.push(el);
  };
  useEffect(() => {
    const animation = gsap.from(".slide-item", {
      y: "100%",
    });
    ScrollTrigger.create({
      trigger: ".slide-item",
      animation,
      start: "top center",
    });
    return () => {
      // gsapTween.scrollTrigger?.kill();
    };
  }, []);
  // slider item
  interface ISliderItem {
    title: string;
  }
  const sliderItems: ISliderItem[] = useMemo(
    () => [
      {
        title: "Your Financial Status is Our Goal",
      },
      {
        title: "Your Financial Status is Our Goal",
      },
    ],
    []
  );
  return (
    <Container>
      <Slider className="carousel-slick-list" ref={slideEl} {...settings}>
        {sliderItems.map(({ title }, idx) => (
          <SliderItem key={idx} idx={idx} title={title} />
        ))}
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
