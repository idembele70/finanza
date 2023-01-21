import React, { useMemo } from "react";
import styled from "styled-components";
import { WrapperContainer, imgbaseUrl } from "./Carousel";
import { ParagraphWithLightBorder, TitleH4 } from "./About";
import { TitleWithBigMargin } from "./Services";
import { MediaIcon, MediaIconContainer } from "./Header";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { lgDown, mdDown, smDown, xlDown } from "../utils/responsive";
const Container = styled(WrapperContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  //width: 100%;
  margin: 0 -12px;
`;
const CardWrapper = styled.div`
  flex-basis: 33.33%;
  ${mdDown({
    flexBasis: "50%",
  })}
  ${smDown({
    flexBasis: "100%",
  })}
  padding: 0 12px;
  padding-top: 24px;
  &:first-of-type {
    ${smDown({
      paddingTop: 0,
    })}
  }
`;
const Card = styled.div`
  padding: 64px 0;
  width: 100%;
  position: relative;
  &:hover {
    & > div {
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
    & h4 {
      color: ${({ theme }) => theme.palette.common.white};
    }
  }
`;
const CardImgBg = styled.div`
  position: absolute;
  left: 48px;
  right: 48px;
  top: 0;
  bottom: 0;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 300ms linear;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  z-index: 1;
`;
const MediaContainer = styled.div`
  display: flex;
  position: relative;
`;
const StyledMediaIconContainer = styled(MediaIconContainer)`
  transition: background-color 300ms linear;
  width: 38px;
  height: 38px;
  cursor: pointer;
  & svg {
    transition: color 300ms linear;
  }
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    & svg {
      color: ${({ theme }) => theme.palette.primary.light};
    }
  }
`;
const CardImg = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  object-fit: contain;
  display: block;
  z-index: 2;
  position: relative;
`;
const Team = () => {
  interface CardItemType {
    name: string;
    img: number;
  }
  const cardItem: CardItemType[] = useMemo(
    () => [
      {
        name: "Kate Winslet",
        img: 1,
      },
      {
        name: "Jac Jacson",
        img: 2,
      },
      {
        name: "Doris Jordan",
        img: 3,
      },
    ],
    []
  );
  return (
    <Container>
      <ParagraphWithLightBorder>Our Team</ParagraphWithLightBorder>
      <TitleWithBigMargin>Exclusive Team</TitleWithBigMargin>
      <CardContainer>
        {cardItem.map(({ name, img }) => (
          <CardWrapper>
            <Card>
              <CardImg src={`${imgbaseUrl}team-${img}.jpg`} />
              <CardImgBg>
                <TitleH4 style={{ margin: 0 }}>{name}</TitleH4>
                <MediaContainer>
                  <StyledMediaIconContainer to="/">
                    <MediaIcon icon={faFacebookF} />
                  </StyledMediaIconContainer>
                  <StyledMediaIconContainer to="/">
                    <MediaIcon icon={faTwitter} />
                  </StyledMediaIconContainer>
                  <StyledMediaIconContainer to="/">
                    <MediaIcon icon={faInstagram} />
                  </StyledMediaIconContainer>
                </MediaContainer>
              </CardImgBg>
            </Card>
          </CardWrapper>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Team;
