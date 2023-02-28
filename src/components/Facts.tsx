import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import {
  faAward,
  faCheck,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Power1, gsap } from "gsap";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import styled from "styled-components";
import { mdDown, xsDown } from "../utils/responsive";
import { WrapperContainer } from "./SliderItem";
library.add(faCheck, faUsersGear, faAward);
const Container = styled.div`
  width: 100%;
  background: linear-gradient(rgba(53, 94, 252, 0.95), rgba(53, 94, 252, 0.95)),
    url(${process.env.PUBLIC_URL}assets//bg.png);
  padding: 48px 0;
  margin: 48px 0;
`;
const StyledWrapper = styled(WrapperContainer)`
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.div`
  padding: 0 24px;
  margin-top: 48px;
  width: 25%;
  ${mdDown({
    width: "50%",
  })}
  ${xsDown({
    width: "100%",
  })}
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: ${({ theme }) => theme.palette.common.white};
  margin: 0 auto 18px;
  display: block;
`;
const Title = styled(CountUp)`
  font-family: "Jost", "sans-serif";
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 3.5rem;
  margin-bottom: 8px;
  display: block;
  text-align: center;
`;
const Count = styled.span``;
const SubTitle = styled.p`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 1.25rem;
  text-align: center;
`;
const Hr = styled.hr`
  width: 72px;
  margin: 16px auto 0;
  border: 0;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.common.white};
  opacity: 0.25;
`;
const Facts = () => {
  // FadeIn Animation on parent scroll
  const revealRefs = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };
  // Wrapper scroll trigger animation
  const wrapperEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperEl.current,
        start: "top-=175% center",
      },
    });
    t1.from(revealRefs.current, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      onStart: () => {
        setIsVisible(true);
      },
    });
    return () => t1.scrollTrigger?.kill();
  }, []);
  interface IItems {
    icon: IconName;
    title: number;
    subTitle: string;
  }
  const items: IItems[] = [
    {
      icon: "users",
      title: 1234,
      subTitle: "Happy Clients",
    },
    {
      icon: "check",
      title: 1234,
      subTitle: "Happy Clients",
    },
    {
      icon: "users-gear",
      title: 1234,
      subTitle: "Happy Clients",
    },
    {
      icon: "award",
      title: 1234,
      subTitle: "Happy Clients",
    },
  ];
  return (
    <Container>
      <StyledWrapper ref={wrapperEl}>
        {items.map(({ icon, title, subTitle }, idx) => (
          <Item key={idx} ref={addToRefs}>
            <Icon icon={["fas", icon]} />
            {isVisible && <Title start={0} end={title} duration={5} />}
            <SubTitle>{subTitle}</SubTitle>
            <Hr />
          </Item>
        ))}
      </StyledWrapper>
    </Container>
  );
};

export default Facts;
