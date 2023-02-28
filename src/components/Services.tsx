import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  memo,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { Paragraph, ParagraphWithLightBorder, Title, fadeout } from "./About";
import { ButtonLink, WrapperContainer, imgbaseUrl } from "./SliderItem";
import { lgDown, mdDown, smDown } from "../utils/responsive";
import { arrayBuffer } from "stream/consumers";
import { hrefBaseUrl } from "./Header";
import { gsap } from "gsap";

const Container = styled(WrapperContainer)`
  padding: 48px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleWithBigMargin = styled(Title)`
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
interface RightProps {
  isVisible?: boolean;
}
const Right = styled.div<RightProps>`
  flex: 2;
  padding-left: 12px;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${fadeout} 300ms linear;
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
const RightButton = styled(ButtonLink)`
  margin-top: 16px;
`;
const Services = () => {
  const [pillIndex, setPillIndex] = useState(0);
  const handleChangePillIndex = (idx: number) => {
    setPillIndex(idx);
  };
  const pills: string[] = [
    "Financial Planing",
    "Cash Investment",
    "Financial Consultancy",
    "Business Loans",
  ];

  const advantages: string[] = [
    "Secured Loans",
    "Credit Facilities",
    "Cash Advanced",
  ];
  const memoizedAdvantages = useMemo(
    () =>
      advantages.map((advantage, idx) => (
        <RightParagraph key={idx}>
          <RightParagraphIcon icon={["fas", "check"]} />
          {advantage}
        </RightParagraph>
      )),
    []
  );

  interface IRight {
    title: string;
    desc: string;
  }
  const rightItems: IRight[] = [
    {
      title: "25 Years Of Experience In Financial Support",
      desc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
    },
    {
      title: "25 Years Of Experience In Financial Support",
      desc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
    },
    {
      title: "25 Years Of Experience In Financial Support",
      desc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
    },
    {
      title: "25 Years Of Experience In Financial Support",
      desc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
    },
  ];
  const memoizedRights = useMemo(
    () =>
      rightItems.map(({ title, desc }, idx) => {
        return (
          <Right key={idx} isVisible={pillIndex === idx}>
            <ImageContainer>
              <Image src={`${imgbaseUrl}service-${pillIndex + 1}.jpg`} />
            </ImageContainer>
            <RightDescContainer>
              <RightTitle>{title}</RightTitle>
              <RightDesc>{desc}</RightDesc>
              {memoizedAdvantages}
              <RightButton to="">Read More</RightButton>
            </RightDescContainer>
          </Right>
        );
      }),
    [pillIndex, memoizedAdvantages]
  );
  // Scroll Trigger animation
  const containerEl = useRef<HTMLDivElement>(null);
  const topEl = useRef<HTMLDivElement>(null);
  const bottomEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerEl.current,
        start: "top-=30% center",
      },
    });
    t1.from(topEl.current, {
      opacity: 0,
      y: "100%",
    }).from(bottomEl.current, {
      opacity: 0,
      y: "100%",
    });
    return () => {
      t1.scrollTrigger?.kill();
    };
  }, []);
  return (
    <Container ref={containerEl}>
      <Top ref={topEl}>
        <ParagraphWithLightBorder>Our Services</ParagraphWithLightBorder>
        <TitleWithBigMargin>
          Awesome Financial Services For Business
        </TitleWithBigMargin>
      </Top>
      <Bottom ref={bottomEl}>
        <NavPillsContainer>
          {pills.map((pillName, idx) => {
            return (
              <NavPill
                key={idx}
                isSelected={pillIndex === idx}
                onClick={() => handleChangePillIndex(idx)}
              >
                <NavPillText>
                  <NavPillIcon icon={["fas", "bars"]} />
                  {pillName}
                </NavPillText>
              </NavPill>
            );
          })}
        </NavPillsContainer>
        {memoizedRights}
      </Bottom>
    </Container>
  );
};

export default Services;
