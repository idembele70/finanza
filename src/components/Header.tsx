import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
  faS,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
library.add(faLocationDot, faS, faClock, faEnvelope, faPhone, faChevronDown);

const Container = styled.div``;

const Top = styled.div`
  padding: 0 48px;
  width: 100%;
  height: 45px;
  border-bottom: 1px solid rgba(53, 94, 252, 0.07);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Column = styled.div`
  & > small:last-child {
    margin-left: 24px;
  }
`;
const Small = styled.small`
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 14px;
  font-family: "Open Sans", "sans-serif";
`;
const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
  margin-right: 8px;
`;
const Bottom = styled.header`
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
`;
const LogoContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.h1`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 3rem;
  cursor: pointer;
`;
const Right = styled.div`
  display: flex;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.common.black};
  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  font-weight: 500;
  padding: 25px 15px;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
const NavItemIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  font-size: 10px;
  vertical-align: inherit;
`;
interface DropDownContainerProps {
  isactive: boolean;
}
const DropDownContainer = styled.span<DropDownContainerProps>`
  color: ${({ theme, isactive }) =>
    isactive ? theme.palette.primary.main : theme.palette.common.black};
  font-weight: 500;
  padding: 25px 15px;
  font-size: 1rem;
  font-family: "Open Sans", "sans-serif";
  position: relative;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    & > svg {
      color: ${({ theme }) => theme.palette.primary.main};
    }
    & > div {
      opacity: 1;
      transform: rotateX(0);
    }
  }
`;
const NavDropDown = styled.div`
  opacity: 0;
  position: absolute;
  top: 72px;
  left: 0;
  min-width: 160px;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 8px 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: all 500ms ease;
  transform-origin: 0% 0%;
  transform: rotateX(-75deg);
`;
const NavDropDownItem = styled(NavLink)`
  width: 100%;
  display: block;
  color: #212529;
  padding: 4px 16px;
  font-weight: 400;
  line-height: 1.5;
  &:hover {
    background-color: #e9ecef;
  }
  &.active {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
const MediaContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MediaIconContainer = styled(Link)`
  margin-left: 16px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 50%;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MediaIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
`;
const Header = () => {
  const { pathname } = useLocation();
  const [isPagesActive, setIsPagesActive] = useState(false);
  useEffect(() => {
    if (
      ["/project", "/feature", "/team", "/testimonial", "/notFound"].includes(
        pathname
      )
    )
      setIsPagesActive(true);
    else setIsPagesActive(false);
  }, [pathname]);
  return (
    <Container>
      <Top>
        <Column>
          <Small>
            <StyledIcon icon={["fas", "location-dot"]} />
            123 Street, New York, USA
          </Small>
          <Small>
            <StyledIcon icon={"clock"} />
            9.00 am - 9.00 pm
          </Small>
        </Column>
        <Column>
          <Small>
            <StyledIcon icon={["fas", "envelope"]} />
            info@example.com
          </Small>
          <Small>
            <StyledIcon icon={"phone"} />
            +012 345 6789
          </Small>
        </Column>
      </Top>
      <Bottom>
        <LogoContainer to="/">
          <Logo>Finanza</Logo>
        </LogoContainer>
        <Right>
          <Nav>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/service">Services</NavItem>
            <DropDownContainer isactive={isPagesActive}>
              Pages
              <NavItemIcon icon={["fas", "chevron-down"]} />
              <NavDropDown>
                <NavDropDownItem to="/project">Projects</NavDropDownItem>
                <NavDropDownItem to="/feature">Features</NavDropDownItem>
                <NavDropDownItem to="/team">Team Member</NavDropDownItem>
                <NavDropDownItem to="/testimonial">Testimonial</NavDropDownItem>
                <NavDropDownItem to="/notFound">404 Page</NavDropDownItem>
              </NavDropDown>
            </DropDownContainer>
            <NavItem to="/contact">Contact</NavItem>
          </Nav>
          <MediaContainer>
            <MediaIconContainer to="/">
              <MediaIcon icon={faFacebookF} />
            </MediaIconContainer>
            <MediaIconContainer to="/">
              <MediaIcon icon={faTwitter} />
            </MediaIconContainer>
            <MediaIconContainer to="/">
              <MediaIcon icon={faLinkedinIn} />
            </MediaIconContainer>
          </MediaContainer>
        </Right>
      </Bottom>
    </Container>
  );
};

export default Header;
