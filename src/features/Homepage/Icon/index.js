import styled from "styled-components";

export const Icon = styled.img`
  height: 35px;

  vertical-align: middle;
  margin-left: 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 23px;
  }
`;
