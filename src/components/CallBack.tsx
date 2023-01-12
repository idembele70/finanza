import styled from "styled-components";
import { ParagraphWithLightBorder } from "./About";
import { Button, WrapperContainer, imgbaseUrl } from "./Carousel";
import { TitleWithBigMargin } from "./Services";
const Container = styled.div`
  width: 100%;
  margin: 48px 0;
  padding-top: 48px;
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
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 745px;
  padding: 48px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
`;
const Bottom = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const Input = styled.input`
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  margin: 16px 8px 0;
  padding: 16px 12px;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  max-width: 50%;
  flex: 1;
  border-radius: ${({ theme }) => theme.borderRadius};
  line-height: 1.5;
  font-weight: 400;
`;
const TextArea = styled.textarea`
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 16px;
  margin: 16px 8px 0;
  height: 100px;
`;
const FormButton = styled(Button)`
  width: 100%;
  margin: 16px 8px 0;
  text-align: center;
`;
const CallBack = () => {
  return (
    <Container>
      <StyledWrapperContainer>
        <Wrapper>
          <ParagraphWithLightBorder>Get In Touch</ParagraphWithLightBorder>
          <TitleWithBigMargin>Request A Call-Back</TitleWithBigMargin>
          <Bottom>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Input placeholder="Your Mobile" />
            <Input placeholder="Subject" />
            <TextArea placeholder="Message" />
            <FormButton to="/">Submit Now</FormButton>
          </Bottom>
        </Wrapper>
      </StyledWrapperContainer>
    </Container>
  );
};

export default CallBack;
