import styled from "styled-components";
export const SubHeader = styled.h2`
  margin: 0;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.035em;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
  }
`;
