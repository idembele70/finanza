import React from "react";
import { CircleLoader } from "react-spinners";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Spinner = () => {
  return (
    <Container>
      <CircleLoader size={50} color="#000" />
    </Container>
  );
};

export default Spinner;
