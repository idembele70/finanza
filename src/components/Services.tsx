import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { Paragraph, Title, fadeout } from "./About";
import {
  Button,
  ParagraphWithBorder,
  WrapperContainer,
  imgbaseUrl,
} from "./Carousel";
import { lgDown, mdDown, smDown } from "../utils/responsive";

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
  ${mdDown({
    flexDirection: "column",
  })}
`;
const Col = styled.div`
  flex: 1;
`;
const NavPillsContainer = styled(Col)`
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mdDown({
    paddingRight: 0,
  })}
`;
interface NavPillProps {
  isSelected: boolean;
}
const NavPill = styled.button<NavPillProps>`
  width: 100%;
  padding: 24px;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.palette.primary.main : "transparent"};
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: all 500ms ease-in-out;
  & h5 {
    color: ${({ theme, isSelected }) =>
      isSelected ? theme.palette.common.white : "initial"};
  }
  & svg {
    color: ${({ theme, isSelected }) =>
      isSelected ? theme.palette.common.white : theme.palette.primary.main};
  }
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
const NavPillText = styled.h5`
  font-size: 1.25rem;
  text-align: left;
  transition: all 500ms ease-in-out;
`;
const NavPillIcon = styled(FontAwesomeIcon)`
  margin-right: 16px;
  transition: all 500ms ease-in-out;
`;

const Right = styled.div<RightProps>`
  flex: 2;
  padding-left: 12px;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${fadeout} 300ms linear;
  max-height: 397px;
  ${mdDown({
    paddingLeft: 0,
    marginTop: 24,
  })}
  ${smDown({
    flexDirection: "column",
  })}
`;
const ImageContainer = styled(Col)`
  padding-right: 12px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${smDown({
    paddingRight: 0,
    flex: 0,
    minHeight: 350,
  })}
  position:relative;
`;
const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
interface RightProps {
  isVisible: boolean;
}
const RightDescContainer = styled(Col)`
  padding-left: 12px;
  padding-right: 12px;
  ${smDown({
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 24,
  })}
`;
const RightTitle = styled.h3`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.palette.secondary.main};
  margin-bottom: 24px;
  font-weight: 500;
  ${lgDown({
    fontSize: "calc(1.3rem + .6vw)",
  })}
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
  const [pillIndex, setPillIndex] = useState(0);
  const handleChangePillIndex = (idx: number) => {
    setPillIndex(idx);
  };
  return (
    <Container>
      <StyledParagraphWithBorder>Our Services</StyledParagraphWithBorder>
      <StyledTitle>Awesome Financial Services For Business</StyledTitle>
      <Bottom>
        <NavPillsContainer>
          <NavPill
            isSelected={pillIndex === 0}
            onClick={() => handleChangePillIndex(0)}
          >
            <NavPillText>
              <NavPillIcon icon={["fas", "bars"]} />
              Financial Planing
            </NavPillText>
          </NavPill>
          <NavPill
            isSelected={pillIndex === 1}
            onClick={() => handleChangePillIndex(1)}
          >
            <NavPillText>
              <NavPillIcon icon={["fas", "bars"]} />
              Cash Investment
            </NavPillText>
          </NavPill>
          <NavPill
            isSelected={pillIndex === 2}
            onClick={() => handleChangePillIndex(2)}
          >
            <NavPillText>
              <NavPillIcon icon={["fas", "bars"]} />
              Financial Consultancy
            </NavPillText>
          </NavPill>
          <NavPill
            isSelected={pillIndex === 3}
            onClick={() => handleChangePillIndex(3)}
          >
            <NavPillText>
              <NavPillIcon icon={["fas", "bars"]} />
              Business Loans
            </NavPillText>
          </NavPill>
        </NavPillsContainer>
        <Right isVisible={pillIndex === 0}>
          <ImageContainer>
            <Image src={`${imgbaseUrl}service-${pillIndex + 1}.jpg`} />
          </ImageContainer>
          <RightDescContainer>
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
          </RightDescContainer>
        </Right>
        <Right isVisible={pillIndex === 1}>
          <ImageContainer>
            <Image src={`${imgbaseUrl}service-${pillIndex + 1}.jpg`} />
          </ImageContainer>
          <RightDescContainer>
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
          </RightDescContainer>
        </Right>
        <Right isVisible={pillIndex === 2}>
          <ImageContainer>
            <Image src={`${imgbaseUrl}service-${pillIndex + 1}.jpg`} />
          </ImageContainer>
          <RightDescContainer>
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
          </RightDescContainer>
        </Right>
        <Right isVisible={pillIndex === 3}>
          <ImageContainer>
            <Image src={`${imgbaseUrl}service-${pillIndex + 1}.jpg`} />
          </ImageContainer>
          <RightDescContainer>
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
          </RightDescContainer>
        </Right>
      </Bottom>
    </Container>
  );
};

export default Services;
