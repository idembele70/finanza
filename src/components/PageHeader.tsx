import styled from "styled-components";
import { lgDown } from "../utils/responsive";
import { WrapperContainer, imgbaseUrl } from "./Carousel";

const Container = styled.div`
  padding: 192px 12px 96px;
  overflow: hidden;
  background: url(${imgbaseUrl}header.jpg);
  background-size: cover;
  margin-bottom: 48px;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 4rem;
  margin-bottom: 24px;
  max-width: 736px;
  ${lgDown({
    fontSize: "calc(1.625rem + 4.5vw)",
  })}
`;
const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
`;
const List = styled.li`
  font-size: 1rem;
  font-family: "Open Sans", "sans-serif";
  color: #6c757d;
  font-weight: 500;
  line-height: 1.5;
  :not(:last-of-type) {
    padding-right: 8px;
  }
  :not(:first-of-type) {
    ::before {
      content: "/";
      padding-right: 8px;
    }
  }
`;
const ListLink = styled.a`
  color: ${({ theme }) => theme.palette.primary.main};
  transition: all 100ms ease;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.darker};
  }
`;
interface PageHeaderProps {
  title: string;
}
const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <Container>
      <WrapperContainer>
        <Title>{title}</Title>
        <ListContainer>
          <List>
            <ListLink href="#">Home</ListLink>
          </List>
          <List>
            <ListLink href="#">Pages</ListLink>
          </List>
          <List>{title}</List>
        </ListContainer>
      </WrapperContainer>
    </Container>
  );
};

export default PageHeader;
