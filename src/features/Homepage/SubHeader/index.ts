import styled from "styled-components";
export const SubHeader = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
  }
`;
