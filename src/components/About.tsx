import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Wrapper, imgbaseUrl } from "./Carousel";
const Container = styled(Wrapper)`
  padding: 0;
`;
const ColWrapper = styled.div`
  display: flex;
`;
const Col = styled.div`
  padding: 0 12px;
  margin-top: 24px;
  height: 624px;
`;
const Image = styled.img`
  height: 100%;
`;
const Right = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 16px;
  padding: 4px 16px;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: inline-block;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 3rem;
  margin-bottom: 24px;
`;
const Desc = styled.p`
  color: ${({ theme }) => theme.palette.common.black};
  margin-bottom: 24px;
`;
const TabContainer = styled.div`
  width: 100%;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const TabHeader = styled.div`
  margin-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.light};
`;
// border-top-right-radius: ${({ theme }) => theme.borderRadius};
// border-top-left-radius: ${({ theme }) => theme.borderRadius};
interface TabTitleProps {
  isSelected: boolean;
}
const TabTitle = styled.button<TabTitleProps>`
  color: ${({ isSelected, theme }) =>
    isSelected ? "#495057" : theme.palette.primary.main};
  padding: 8px 16px;
  background-color: transparent;
  border-color: ${({ theme }) => theme.palette.common.black};
  border-width: 0;
  transition: all 150ms ease-in-out;
  border-width: 1px;
  border-style: solid;
  border-radius: ${({ theme }) =>
    `${theme.borderRadius} ${theme.borderRadius} 0 0`};
  margin-bottom: -1px;
  border-color: ${({ isSelected }) =>
    isSelected ? "#dee2e6 #dee2e6 #fff" : "transparent"};
  cursor: pointer;
  font-size: 1rem;
  font-family: "Open Sans", "sans-serif";
  font-weight: 500;
  line-height: inherit;
  &:hover {
    border-color: ${({ isSelected }) =>
      isSelected ? "#dee2e6 #dee2e6 #fff" : "#dee2e6 #dee2e6 transparent"};
  }
`;
interface TabDescContainerProps {
  isSelected: boolean;
}
const fadeout = keyframes`
  0% {
    display:none;
    opacity:0;
  }
  70% {
    display:none;
    opacity:0;
  }

  100% {
    display:block;
    opacity:1;
  }
`;
const TabDescContainer = styled.div<TabDescContainerProps>`
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
  animation: ${fadeout} 300ms linear;
`;
const TabDesc = styled.p`
  color: ${({ theme }) => theme.palette.common.black};
  &:first-of-type {
    margin-bottom: 16px;
  }
`;
const About = () => {
  const handleSelect = (idx: number) => {
    setTabIndex(idx);
  };
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Container>
      <ColWrapper>
        <Col>
          <Image src={`${imgbaseUrl}about.jpg`} />
        </Col>
        <Right>
          <Paragraph>About Us</Paragraph>
          <Title>We Help Our Clients To Grow Their Business</Title>
          <Desc>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </Desc>
          <TabContainer>
            <TabHeader>
              <TabTitle
                onClick={() => handleSelect(0)}
                isSelected={tabIndex === 0}
              >
                Story
              </TabTitle>
              <TabTitle
                onClick={() => handleSelect(1)}
                isSelected={tabIndex === 1}
              >
                Mission
              </TabTitle>
              <TabTitle
                onClick={() => handleSelect(2)}
                isSelected={tabIndex === 2}
              >
                Vision
              </TabTitle>
            </TabHeader>
            <TabDescContainer isSelected={tabIndex === 0}>
              <TabDesc>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore.
              </TabDesc>
              <TabDesc>
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit
              </TabDesc>
            </TabDescContainer>
            <TabDescContainer isSelected={tabIndex === 1}>
              <TabDesc>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore.
              </TabDesc>
              <TabDesc>
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit
              </TabDesc>
            </TabDescContainer>
            <TabDescContainer isSelected={tabIndex === 2}>
              <TabDesc>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore.
              </TabDesc>
              <TabDesc>
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                labore. Clita erat ipsum et lorem et sit
              </TabDesc>
            </TabDescContainer>
          </TabContainer>
        </Right>
      </ColWrapper>
    </Container>
  );
};

export default About;
