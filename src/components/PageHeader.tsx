import styled from "styled-components";
import { lgDown } from "../utils/responsive";
import { WrapperContainer, imgbaseUrl } from "./SliderItem";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const Container = styled.div`
  padding: 192px 12px 96px;
  overflow: hidden;
  background: url(${imgbaseUrl}header.jpg);
  background-size: cover;
  margin-bottom: 48px;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 4rem;
  margin-bottom: 24px;
  max-width: 736px;
  ${lgDown({
    fontSize: "calc(1.625rem + 4.5vw)",
  })}
`;
const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
`;
const List = styled.li`
  font-size: 1rem;
  font-family: "Open Sans", "sans-serif";
  color: #6c757d;
  font-weight: 500;
  line-height: 1.5;
  :not(:last-of-type) {
    padding-right: 8px;
  }
  :not(:first-of-type) {
    ::before {
      content: "/";
      padding-right: 8px;
    }
  }
`;
const ListLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  transition: all 100ms ease;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.darker};
  }
`;
interface PageHeaderProps {
  title: string;
}
const PageHeader = ({ title }: PageHeaderProps) => {
  // container scroll trigger animation
  const containerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const pageHeaderTween = gsap.from(containerEl.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerEl.current,
        start: "top center",
      },
    });

    return () => {
      if (pageHeaderTween) pageHeaderTween.kill();
    };
  }, []);
  return (
    <Container ref={containerEl}>
      <WrapperContainer>
        <Title>{title}</Title>
        <ListContainer>
          <List>
            <ListLink to="">Home</ListLink>
          </List>
          <List>
            <ListLink to="">Pages</ListLink>
          </List>
          <List>{title}</List>
        </ListContainer>
      </WrapperContainer>
    </Container>
  );
};

export default PageHeader;
