import styled from "styled-components";
import { SubHeader } from "../SubHeader";

export const Section = styled.section`
  margin-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const SectionHeader = styled(SubHeader)`
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 16px;
  }
`;
