import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { WrapperContainer } from "./Carousel";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAward,
  faCheck,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import { mdDown, xsDown } from "../utils/responsive";
library.add(faCheck, faUsersGear, faAward);
const Container = styled.div`
  width: 100%;
  background: linear-gradient(rgba(53, 94, 252, 0.95), rgba(53, 94, 252, 0.95)),
    url(${process.env.PUBLIC_URL}assets//bg.png);
  padding: 48px 12px;
  margin: 48px 0;
`;
const StyledWrapper = styled(WrapperContainer)``;
const ItemsContainer = styled.div`
  margin: 0 -24px;
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
const Title = styled.h1`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 3.5rem;
  margin-bottom: 8px;
  text-align: center;
`;
const SubTitle = styled.h5`
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
  return (
    <Container>
      <StyledWrapper>
        <ItemsContainer>
          <Item>
            <Icon icon={["fas", "users"]} />
            <Title>1234</Title>
            <SubTitle>Happy Clients</SubTitle>
            <Hr />
          </Item>
          <Item>
            <Icon icon={["fas", "check"]} />
            <Title>1234</Title>
            <SubTitle>Happy Clients</SubTitle>
            <Hr />
          </Item>
          <Item>
            <Icon icon={["fas", "users-gear"]} />
            <Title>1234</Title>
            <SubTitle>Happy Clients</SubTitle>
            <Hr />
          </Item>
          <Item>
            <Icon icon={["fas", "award"]} />
            <Title>1234</Title>
            <SubTitle>Happy Clients</SubTitle>
            <Hr />
          </Item>
        </ItemsContainer>
      </StyledWrapper>
    </Container>
  );
};

export default Facts;
