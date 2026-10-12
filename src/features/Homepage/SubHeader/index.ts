import styled from "styled-components";
export const SubHeader = styled.h2`
  margin: 0;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.035em;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
  }
`;
