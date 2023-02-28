import React, { useLayoutEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { WrapperContainer } from "./SliderItem";
import { Paragraph } from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { DefaultMediaIconContainer, hrefBaseUrl } from "./Header";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "./CallBack";
import { mdDown, smDown, xsDown } from "../utils/responsive";
import { gsap } from "gsap";
library.add(faLocationDot, faPhone, faEnvelope);
const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  margin-top: 48px;
  padding: 48px 0;
`;
const Wrapper = styled(WrapperContainer)`
  padding: 48px 12px;
  ${mdDown({
    padding: "0 12px",
  })}
`;
const ColWrapper = styled.div`
  margin: 0 -24px;
  display: flex;
  flex-wrap: wrap;
  ${smDown({
    margin: "0 -12px",
  })}
`;
const Col = styled.div`
  width: 25%;
  padding: 0 24px;
  ${mdDown({
    width: "50%",
    marginTop: 48,
  })}
  ${smDown({
    width: "100%",
    padding: "0 12px",
  })}
`;
const FooterTitle = styled.h4`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 1.5rem;
  margin-bottom: 24px;
`;
const OfficeRow = styled(Paragraph)`
  color: ${({ theme }) => theme.palette.primary.light};
  margin-bottom: 8px;
`;
const OfficeRowIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.light};
  margin-right: 16px;
`;
const MediaContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;
const MediaIconContainer = styled(DefaultMediaIconContainer)`
  background-color: transparent;
  height: 38px;
  width: 38px;
  margin-right: 8px;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  transition: all 500ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
    & svg {
      color: #000;
    }
  }
`;
const MediaIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.light};
`;
const LinkContainer = styled.div``;
const FooterLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.palette.primary.light};
  margin-bottom: 5px;
  transition: all 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    letter-spacing: 1px;
    box-shadow: none;
  }
`;
const FooterLinkIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
const NewsletterParagraph = styled(Paragraph)`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.palette.primary.light};
`;
const InputContainer = styled.form`
  position: relative;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  border: 0;
  padding: 16px 48px 16px 24px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.common.black};
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 150ms ease-in-out;
  background-clip: padding-box;
  appearance: none;
  &::placeholder {
    color: #6c757d;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 4px rgba(53, 94, 252, 0.25);
  }
`;
const FooterBtn = styled(Button)`
  padding: 8px 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
`;
const Footer = () => {
  interface IOfficeItem {
    iconName: IconName;
    title: string;
  }
  const officeItems: IOfficeItem[] = useMemo(
    () => [
      {
        iconName: "location-dot",
        title: "123 Street, New York, USA",
      },
      {
        iconName: "phone",
        title: "+012 345 67890",
      },
      {
        iconName: "envelope",
        title: "info@example.com",
      },
    ],
    []
  );
  const serviceItem: string[] = useMemo(
    () => [
      "Financial Planning",
      "Cash Investment",
      "Financial Consultancy",
      "Business Loans",
      "Business Analysis",
    ],
    []
  );
  const quickLinkItem: string[] = useMemo(
    () => [
      "About Us",
      "Contact Us",
      "Our Services",
      "Terms & Condition",
      "Support",
    ],
    []
  );
  // container scroll trigger animation
  const containerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const footerTween = gsap.from(containerEl.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerEl.current,
        start: "top-=50% center",
      },
    });

    return () => {
      footerTween?.kill();
    };
  }, []);
  return (
    <Container ref={containerEl}>
      <Wrapper>
        <ColWrapper>
          <Col>
            <FooterTitle>Our Office</FooterTitle>
            {officeItems.map(({ title, iconName }, idx) => (
              <OfficeRow key={idx}>
                <OfficeRowIcon icon={["fas", iconName]} />
                {title}
              </OfficeRow>
            ))}
            <MediaContainer>
              <MediaIconContainer to={""}>
                <MediaIcon icon={faTwitter} />
              </MediaIconContainer>
              <MediaIconContainer to={""}>
                <MediaIcon icon={faFacebookF} />
              </MediaIconContainer>
              <MediaIconContainer to={""}>
                <MediaIcon icon={faYoutube} />
              </MediaIconContainer>
              <MediaIconContainer to={""}>
                <MediaIcon icon={faLinkedinIn} />
              </MediaIconContainer>
            </MediaContainer>
          </Col>
          <Col>
            <FooterTitle>Services</FooterTitle>
            <LinkContainer>
              {serviceItem.map((name, idx) => (
                <FooterLink key={idx} to="">
                  <FooterLinkIcon icon={["fas", "chevron-right"]} />
                  {name}
                </FooterLink>
              ))}
            </LinkContainer>
          </Col>
          <Col>
            <FooterTitle>Quick Links</FooterTitle>
            <LinkContainer>
              {quickLinkItem.map((name, idx) => (
                <FooterLink key={idx} to="">
                  <FooterLinkIcon icon={["fas", "chevron-right"]} />
                  {name}
                </FooterLink>
              ))}
            </LinkContainer>
          </Col>
          <Col>
            <FooterTitle>Newsletter</FooterTitle>
            <NewsletterParagraph>
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </NewsletterParagraph>
            <InputContainer>
              <Input type="text" name="email" placeholder="Your email" />
              <FooterBtn>SignUp</FooterBtn>
            </InputContainer>
          </Col>
        </ColWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;
