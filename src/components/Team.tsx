import React, { useLayoutEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { WrapperContainer, imgbaseUrl } from "./SliderItem";
import { ParagraphWithLightBorder, TitleH4 } from "./About";
import { TitleWithBigMargin } from "./Services";
import { DefaultMediaIconContainer, MediaIcon, hrefBaseUrl } from "./Header";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { lgDown, mdDown, smDown, xlDown } from "../utils/responsive";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
const StyledMediaIconContainer = styled(DefaultMediaIconContainer)`
  background-color: ${({ theme }) => theme.palette.primary.light};
  transition: background-color 300ms linear;
  width: 38px;
  height: 38px;
  margin: 0 4px;
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
  // Top and Cards scroll trigger animation
  const containerEl = useRef<HTMLDivElement>(null);
  const topEl = useRef<HTMLDivElement>(null);
  const cardWrapperEls = useRef<HTMLDivElement[]>([]);
  const addToCardwrapperRefs = (el: HTMLDivElement) => {
    if (el && !cardWrapperEls.current.includes(el))
      cardWrapperEls.current.push(el);
  };
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
    }).from(cardWrapperEls.current, {
      opacity: 0,
      y: "100%",
      stagger: 0.2,
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);
  const handleLoad = () => {
    ScrollTrigger.refresh();
  };
  return (
    <Container ref={containerEl}>
      <Top ref={topEl}>
        <ParagraphWithLightBorder>Our Team</ParagraphWithLightBorder>
        <TitleWithBigMargin>Exclusive Team</TitleWithBigMargin>
      </Top>
      <CardContainer>
        {cardItem.map(({ name, img }, idx) => (
          <CardWrapper ref={addToCardwrapperRefs} key={idx}>
            <Card>
              <CardImg
                onLoad={handleLoad}
                src={`${imgbaseUrl}team-${img}.jpg`}
              />
              <CardImgBg>
                <TitleH4 style={{ margin: 0 }}>{name}</TitleH4>
                <MediaContainer>
                  <StyledMediaIconContainer to="">
                    <MediaIcon icon={faFacebookF} />
                  </StyledMediaIconContainer>
                  <StyledMediaIconContainer to="">
                    <MediaIcon icon={faTwitter} />
                  </StyledMediaIconContainer>
                  <StyledMediaIconContainer to="">
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
