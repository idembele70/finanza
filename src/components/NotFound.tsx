import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { ButtonLink, WrapperContainer } from "./SliderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { lgDown } from "../utils/responsive";
import { Paragraph } from "./About";
import { hrefBaseUrl } from "./Header";
import { gsap } from "gsap";
const Container = styled(WrapperContainer)`
  padding: 48px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 5rem;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 5rem;
  margin-bottom: 8px;
  ${lgDown({
    fontSize: "calc(1.625rem + 4.5vw)",
  })}
`;
const SubTitle = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 2.5rem;
  margin-bottom: 24px;
  ${lgDown({
    fontSize: "calc(1.375rem + 1.5vw)",
  })}
`;
const StyledParagraph = styled(Paragraph)`
  margin-bottom: 24px;
  text-align: center;
`;
const NotFound = () => {
  // Container scroll trigger animation
  const containerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const notFoundTween = gsap.from(containerEl.current, {
      opacity: 0,
      y: "100%",
      scrollTrigger: {
        trigger: containerEl.current,
        start: "top-=100% center",
      },
    });

    return () => {
      if (notFoundTween) notFoundTween.kill();
    };
  }, []);
  return (
    <Container ref={containerEl}>
      <Icon icon={faTriangleExclamation} />
      <Title>404</Title>
      <SubTitle>Page Not Found</SubTitle>
      <StyledParagraph>
        We’re sorry, the page you have looked for does not exist in our website!
        Maybe go to our home page or try to use a search?
      </StyledParagraph>
      <ButtonLink to="">Go Back To Home</ButtonLink>
    </Container>
  );
};

export default NotFound;
