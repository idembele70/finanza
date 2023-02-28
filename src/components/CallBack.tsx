import styled from "styled-components";
import { ParagraphWithLightBorder } from "./About";
import { WrapperContainer, imgbaseUrl } from "./SliderItem";
import { TitleWithBigMargin } from "./Services";
import { lgDown, mdDown, smDown, xlDown, xsDown } from "../utils/responsive";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
const Container = styled.div`
  width: 100%;
  margin-top: 48px;
  padding: 48px 0;
  position: relative;
  ::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
        rgba(53, 94, 252, 0.95),
        rgba(53, 94, 252, 0.95)
      ),
      url(${imgbaseUrl}bg.png);
    z-index: -1;
  }
`;
const StyledWrapperContainer = styled(WrapperContainer)`
  padding-top: 48px;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 58%;
  padding: 48px;
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  ${mdDown({
    width: "100%",
    margin: 0,
  })}
`;
const Bottom = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const InputContainer = styled.div`
  margin-top: 16px;
  padding: 0 8px;
  width: 50%;
  ${xsDown({
    width: "100%",
  })}
`;
export const Input = styled.input`
  color: ${({ theme }) => theme.palette.common.black};
  margin-top: 16px;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  padding: 16px 12px;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  line-height: 1.5;
  font-weight: 400;
  width: 100%;
  outline: 0;
  transition: all 150ms ease-in-out;
  &:focus {
    border-color: #9aaffe;
    box-shadow: 0 0 0 4px rgba(53, 94, 252, 0.25);
  }
`;

export const TextArea = styled.textarea`
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 16px;
  margin: 16px 8px 0;
  height: 100px;
  outline: 0;
  transition: all 150ms ease-in-out;
  resize: vertical;
  &:focus {
    border-color: #9aaffe;
    box-shadow: 0 0 0 4px rgba(53, 94, 252, 0.25);
  }
`;
export const Button = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.light};
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 16px 48px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  display: inline-block;
  transition: all 300ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.darker};
    border-color: ${({ theme }) => theme.palette.primary.darker};
  }
  &:focus {
    box-shadow: 0 0 0 4px rgba(83, 118, 252, 0.5);
    background-color: ${({ theme }) => theme.palette.primary.darker};
    border-color: ${({ theme }) => theme.palette.primary.darker};
  }
`;
const FormButton = styled(Button)`
  width: 100%;
  margin: 16px 8px 0;
  text-align: center;
`;
const CallBack = () => {
  // Wrapper scroll trigger animation
  const wrapperEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const callbackTween = gsap.from(wrapperEl.current, {
      opacity: 0,
      y: "100%",
      scrollTrigger: {
        trigger: wrapperEl.current,
        start: "top-=120% center",
      },
    });
    return () => {
      if (callbackTween) callbackTween.kill();
    };
  }, []);
  return (
    <Container>
      <StyledWrapperContainer>
        <Wrapper ref={wrapperEl}>
          <ParagraphWithLightBorder>Get In Touch</ParagraphWithLightBorder>
          <TitleWithBigMargin>Request A Call-Back</TitleWithBigMargin>
          <Bottom>
            <InputContainer>
              <Input placeholder="Your Name" />
            </InputContainer>
            <InputContainer>
              <Input placeholder="Your Email" />
            </InputContainer>
            <InputContainer>
              <Input placeholder="Your Mobile" />
            </InputContainer>
            <InputContainer>
              <Input placeholder="Subject" />
            </InputContainer>
            <TextArea placeholder="Message" />
            <FormButton type="submit">Submit Now</FormButton>
          </Bottom>
        </Wrapper>
      </StyledWrapperContainer>
    </Container>
  );
};

export default CallBack;
