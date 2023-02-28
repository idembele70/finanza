import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paragraph, ParagraphWithLightBorder, Title } from "./About";
import { Button, Input, InputContainer, TextArea } from "./CallBack";
import { WrapperContainer } from "./SliderItem";
import { smDown } from "../utils/responsive";
import { hrefBaseUrl } from "./Header";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Container = styled(WrapperContainer)`
  padding: 48px 12px;
`;
const Wrapper = styled.div`
  margin: 0 -12px;
  display: flex;
  flex-wrap: wrap;
`;
const Col = styled.div`
  padding: 0 12px;
  width: 50%;
  ${smDown({
    width: "100%",
  })}
`;
const StyledParagraph = styled(Paragraph)``;
const DLLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const StyledInputContainer = styled(InputContainer)`
  width: 100%;
`;
const FormButton = styled(Button)`
  margin: 16px 8px;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 450px;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const Contact = () => {
  // Container scroll trigger animation
  const containerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const contactTween = gsap.from(containerEl.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerEl.current,
      },
    });

    return () => {
      if (contactTween) contactTween.kill();
    };
  }, []);
  return (
    <Container ref={containerEl}>
      <Wrapper>
        <Col>
          <ParagraphWithLightBorder>Contact</ParagraphWithLightBorder>
          <Title>If You Have Any Query, Please Contact Us</Title>
          <StyledParagraph>
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.{" "}
            <DLLink to="/contact">Download Now</DLLink>.
          </StyledParagraph>
          <Form>
            <InputContainer>
              <Input placeholder="Your Name" />
            </InputContainer>
            <InputContainer>
              <Input placeholder="Your Email" />
            </InputContainer>
            <StyledInputContainer>
              <Input placeholder="Subject" />
            </StyledInputContainer>
            <TextArea placeholder="Message" />
            <FormButton type="submit">Send Message</FormButton>
          </Form>
        </Col>
        <Col>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            aria-hidden="false"
            tabIndex={0}
          />
        </Col>
      </Wrapper>
    </Container>
  );
};

export default Contact;
