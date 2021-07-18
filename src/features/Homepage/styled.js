import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 1248px;
  margin: auto;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;
export const Icon = styled.img`
  height: 35px;

  vertical-align: middle;
  margin-left: 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 23px;
  }
`;
