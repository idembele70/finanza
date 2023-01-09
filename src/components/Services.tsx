import React from "react";
import styled from "styled-components";
import {
  Button,
  ParagraphWithBorder,
  WrapperContainer,
  imgbaseUrl,
} from "./Carousel";
import { Paragraph, Title } from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
const Container = styled(WrapperContainer)`
  padding: 48px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledParagraphWithBorder = styled(ParagraphWithBorder)`
  border-color: ${({ theme }) => theme.palette.primary.light};
`;
const StyledTitle = styled(Title)`
  margin-bottom: 48px;
  max-width: 600px;
  text-align: center;
`;
const Bottom = styled.div`
  display: flex;
  width: 100%;
`;
const Col = styled.div`
  flex: 1;
`;
const NavPillsContainer = styled(Col)`
  padding-right: 12px;
`;
const NavPill = styled.button`
  width: 100%;
  padding: 24px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
const NavPillText = styled.h5`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 1.25rem;
  text-align: left;
`;
const NavPillIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  margin-right: 16px;
`;
const ImageContainer = styled(Col)`
  padding-left: 12px;
  padding-right: 12px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const Right = styled(Col)`
  padding-left: 12px;
`;
const RightTitle = styled.h3`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.palette.secondary.main};
  margin-bottom: 24px;
`;
const RightDesc = styled(Paragraph)`
  margin-bottom: 24px;
`;
const RightParagraph = styled(Paragraph)`
  margin-bottom: 16px;
`;
const RightParagraphIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  margin-right: 16px;
`;
const RightButton = styled(Button)`
  margin-top: 16px;
`;
const Services = () => {
  return (
    <Container>
      <StyledParagraphWithBorder>Our Services</StyledParagraphWithBorder>
      <StyledTitle>Awesome Financial Services For Business</StyledTitle>
      <Bottom>
        <NavPillsContainer>
          <NavPill>
            <NavPillText>
              <NavPillIcon icon={["fas", "bars"]} />
              Financial Planing
            </NavPillText>
          </NavPill>
          <NavPill>
            <NavPillText>
              <NavPillIcon icon={["fas", "bars"]} />
              Cash Investment
            </NavPillText>
          </NavPill>
          <NavPill>
            <NavPillText>
              <NavPillIcon icon={["fas", "bars"]} />
              Financial Consultancy
            </NavPillText>
          </NavPill>
          <NavPill>
            <NavPillText>
              <NavPillIcon icon={["fas", "bars"]} />
              Business Loans
            </NavPillText>
          </NavPill>
        </NavPillsContainer>
        <ImageContainer>
          <Image src={`${imgbaseUrl}service-1.jpg`} />
        </ImageContainer>
        <Right>
          <RightTitle>25 Years Of Experience In Financial Support</RightTitle>
          <RightDesc>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo erat amet.
          </RightDesc>
          <RightParagraph>
            <RightParagraphIcon icon={["fas", "check"]} />
            Secured Loans
          </RightParagraph>
          <RightParagraph>
            <RightParagraphIcon icon={["fas", "check"]} />
            Credit Facilities
          </RightParagraph>
          <RightParagraph>
            <RightParagraphIcon icon={["fas", "check"]} />
            Cash Advanced
          </RightParagraph>
          <RightButton to="/">Read More</RightButton>
        </Right>
      </Bottom>
    </Container>
  );
};

export default Services;
