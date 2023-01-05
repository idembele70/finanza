import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleXmark,
  faPhoneFlip,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { lgDown, mdDown, smDown, xlDown, xsDown } from "../utils/responsive";
import { ParagraphWithBorder, Wrapper, imgbaseUrl } from "./Carousel";
library.add(faCircleXmark, faUsers, faPhoneFlip);
const Container = styled(Wrapper)``;
const ColWrapper = styled.div`
  display: flex;
  margin: 24px -12px;
  ${mdDown({
    flexDirection: "column",
  })}
  ${xsDown({
    margin: "24px 0",
  })}
`;
const Col = styled.div`
  padding: 0 12px;
  margin-top: 24px;
  height: 624px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  ${xlDown({
    height: 546,
  })};
  ${lgDown({
    height: 586,
  })};
  ${mdDown({
    width: "100%",
  })};
`;
const Left = styled(Col)`
  ${mdDown({
    height: 696,
  })};
  ${smDown({
    height: 516,
  })};
  ${xsDown({
    height: "auto",
  })};
`;
const Right = styled(Col)`
  height: auto;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${mdDown({})}
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 3rem;
  margin-bottom: 24px;
  ${lgDown({
    fontSize: "calc(1.425rem + 2.1vw)",
  })}
`;
const Desc = styled.p`
  color: ${({ theme }) => theme.palette.common.black};
  margin-bottom: 24px;
  font-weight: 400;
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
const AboutFooter = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 24px;
  display: flex;
  ${mdDown({
    flexDirection: "column",
  })}
`;
const AboutFooterItem = styled.div`
  margin-top: 24px;
  padding: 0 12px;
  display: flex;
  border: 1px solid transparent;
  &:not(:last-of-type) {
    border-right-color: ${({ theme }) => theme.palette.primary.light};
    ${({ theme }) =>
      mdDown({
        borderRightColor: "transparent",
        borderBottomColor: theme.palette.primary.light,
      })}
  }
`;
const IconContainer = styled.div`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    color: #fff;
    font-size: 1rem;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 3rem;
`;
const AboutFooterDescContainer = styled.div`
  padding-left: 10px;
  ${smDown({
    paddingLeft: 16,
  })}
`;
const AboutFooterItemTitle = styled.h4`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 1.5rem;
  margin-bottom: 8px;
  ${lgDown({
    fontSize: "calc(1.275rem + .3vw)",
  })}
`;
const AboutFooterItemParagraph = styled.p`
  color: ${({ theme }) => theme.palette.common.black};
  ${mdDown({
    marginBottom: 24,
  })}
`;
const About = () => {
  const handleSelect = (idx: number) => {
    setTabIndex(idx);
  };
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Container>
      <ColWrapper>
        <Left>
          <Image src={`${imgbaseUrl}about.jpg`} />
        </Left>
        <Right>
          <ParagraphWithBorder>About Us</ParagraphWithBorder>
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
      <AboutFooter>
        <AboutFooterItem>
          <Icon icon={["fas", "circle-xmark"]} />
          <AboutFooterDescContainer>
            <AboutFooterItemTitle>No Hidden Cost</AboutFooterItemTitle>
            <AboutFooterItemParagraph>
              Clita erat ipsum lorem sit sed stet duo justo
            </AboutFooterItemParagraph>
          </AboutFooterDescContainer>
        </AboutFooterItem>
        <AboutFooterItem>
          <IconContainer>
            <Icon icon={["fas", "users"]} />
          </IconContainer>
          <AboutFooterDescContainer>
            <AboutFooterItemTitle>Dedicated Team</AboutFooterItemTitle>
            <AboutFooterItemParagraph>
              Clita erat ipsum lorem sit sed stet duo justo
            </AboutFooterItemParagraph>
          </AboutFooterDescContainer>
        </AboutFooterItem>
        <AboutFooterItem>
          <IconContainer>
            <Icon icon={["fas", "phone-flip"]} />
          </IconContainer>
          <AboutFooterDescContainer>
            <AboutFooterItemTitle>24/7 Available</AboutFooterItemTitle>
            <AboutFooterItemParagraph>
              Clita erat ipsum lorem sit sed stet duo justo
            </AboutFooterItemParagraph>
          </AboutFooterDescContainer>
        </AboutFooterItem>
      </AboutFooter>
    </Container>
  );
};

export default About;
