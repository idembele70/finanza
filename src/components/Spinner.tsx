import React from "react";
import styled, { keyframes } from "styled-components";
const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.common.white};
  z-index: 9999;
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const CircleLoader = styled.div`
  border: 4px solid ${({ theme }) => theme.palette.primary.main};
  border-top-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;
const Spinner = () => {
  return (
    <Container>
      <CircleLoader />
    </Container>
  );
};

export default Spinner;
