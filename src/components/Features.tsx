import React from "react";
import styled from "styled-components";
import { Button, ParagraphWithBorder, WrapperContainer } from "./Carousel";
import { Desc, Icon, Paragraph, Title } from "./About";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowRight);
const Container = styled(WrapperContainer)`
  padding: 48px 12px;
`;
const Wrapper = styled.div`
  padding: 0 12px;
`;
const ColWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: -48px -24px 0;
`;
const Col = styled.div`
  width: 50%;
  padding: 0 24px;
  margin-top: 48px;
  // max-height: 565px;
`;
const Left = styled(Col)``;
const StyledParagraphWithBorder = styled(ParagraphWithBorder)`
  border-color: ${({ theme }) => theme.palette.primary.light};
`;
const Right = styled(Col)`
  display: flex;
`;
const RightCol = styled.div`
  width: 50%;
  margin-top: -24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightItemContainer = styled.div`
  margin-top: 24px;
  padding: 0 12px;
  width: 100%;
`;
const RightItem = styled.div`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.palette.common.white};
  transition: all 500ms;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    & * {
      color: ${({ theme }) => theme.palette.common.white};
    }
  }
`;
const RightItemTitle = styled.h4`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 1.5rem;
  margin: 16px 0;
  transition: all 500ms;
`;
const RightItemButton = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  transition: all 500ms;
`;
const RightItemBtnIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  margin-left: 4px;
  transition: all 500ms;
`;
const Features = () => {
  return (
    <Container>
      <Wrapper>
        <ColWrapper>
          <Left>
            <StyledParagraphWithBorder>
              Why Choosing Us!
            </StyledParagraphWithBorder>
            <Title>Few Reasons Why People Choosing Us!</Title>
            <Desc>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </Desc>
            <Button to="/">Explore More</Button>
          </Left>
          <Right>
            <RightCol>
              <RightItemContainer>
                <RightItem>
                  <Icon icon={["fas", "check"]} />
                  <RightItemTitle>Fast Executions</RightItemTitle>
                  <Paragraph>
                    Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                    duo justo erat amet
                  </Paragraph>
                  <RightItemButton to="/">
                    Read More
                    <RightItemBtnIcon icon={["fas", "arrow-right"]} />
                  </RightItemButton>
                </RightItem>
              </RightItemContainer>
              <RightItemContainer>
                <RightItem>
                  <Icon icon={["fas", "check"]} />
                  <RightItemTitle>Fast Executions</RightItemTitle>
                  <Paragraph>
                    Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                    duo justo erat amet
                  </Paragraph>
                  <RightItemButton to="/">
                    Read More
                    <RightItemBtnIcon icon={["fas", "arrow-right"]} />
                  </RightItemButton>
                </RightItem>
              </RightItemContainer>
            </RightCol>
            <RightCol>
              <RightItemContainer>
                <RightItem>
                  <Icon icon={["fas", "check"]} />
                  <RightItemTitle>Fast Executions</RightItemTitle>
                  <Paragraph>
                    Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                    duo justo erat amet
                  </Paragraph>
                  <RightItemButton to="/">
                    Read More
                    <RightItemBtnIcon icon={["fas", "arrow-right"]} />
                  </RightItemButton>
                </RightItem>
              </RightItemContainer>
            </RightCol>
          </Right>
        </ColWrapper>
      </Wrapper>
    </Container>
  );
};

export default Features;