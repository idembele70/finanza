import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { WrapperContainer } from "./Carousel";
import { IconName, IconProp, library } from "@fortawesome/fontawesome-svg-core";
import {
  faAward,
  faCheck,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import { mdDown, xsDown } from "../utils/responsive";
import { gsap } from "gsap";
import CountUp from "react-countup";
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
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };
  const wrapperEl = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: wrapperEl.current,
    });
    revealRefs.current.forEach((el, idx) => {
      t1.from(el, {
        opacity: 0,
        delay: 0.05 + 0.05 * idx,
      });
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
            <Title end={title} duration={5} />
            <SubTitle>{subTitle}</SubTitle>
            <Hr />
          </Item>
        ))}
      </StyledWrapper>
    </Container>
  );
};

export default Facts;
