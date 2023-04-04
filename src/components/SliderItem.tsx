import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { lgDown, mdDown, smDown, xlDown, xsDown } from "../utils/responsive";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Container = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  min-height: 450px;
  object-fit: cover;
`;
export const WrapperContainer = styled.div`
  width: 100%;
  padding: 0 12px;
  max-width: 1320px;
  margin: 0 auto;
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
const SliderDesc = styled(WrapperContainer)`
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
export const ButtonLink = styled(Link)`
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
  &:focus {
    box-shadow: 0 0 0 4px rgba(83, 118, 252, 0.5);
    background-color: ${({ theme }) => theme.palette.primary.darker};
    border-color: ${({ theme }) => theme.palette.primary.darker};
  }
`;
export const imgbaseUrl = `${process.env.PUBLIC_URL}/assets/`;
interface SliderItemProps {
  idx: number;
  title: string;
}
const SliderItem = ({ idx, title }: SliderItemProps) => {
  const baseUrl = `${imgbaseUrl}carousel-`;
  const endUrl = ".jpg";
  const containerEl = useRef<HTMLDivElement>(null);
  const paragraphEl = useRef<HTMLParagraphElement>(null);
  const titleEl = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerEl.current,
        start: "top center",
        end: "bottom center",
      },
    });
    tl.from(containerEl.current, {
      opacity: 0,
      duration: 1,
      delay: 0.3,
    }).fromTo(
      ".child",
      {
        opacity: 0,
        y: "-100%",
        duration: 1,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);
  const handleLoad = () => {
    ScrollTrigger.refresh();
  };
  return (
    <Container ref={containerEl}>
      <Image onLoad={handleLoad} src={`${baseUrl}${idx + 1}${endUrl}`} />
      <SliderDesc>
        <ParagraphWithBorder className="child" ref={paragraphEl}>
          Welcome to Finanza
        </ParagraphWithBorder>
        <Title className="child" ref={titleEl}>
          {title}
        </Title>
        <ButtonLink className="child" to="">
          Explore More
        </ButtonLink>
      </SliderDesc>
    </Container>
  );
};

export default SliderItem;
