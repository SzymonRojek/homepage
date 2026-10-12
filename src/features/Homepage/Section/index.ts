import styled from "styled-components";
import { SubHeader } from "../SubHeader";

export const Section = styled.section`
  margin-top: 96px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 64px;
  }
`;

// A short gradient bar above every section heading ties the page together.
export const SectionHeader = styled(SubHeader)`
  margin-bottom: 28px;

  &::before {
    content: "";
    display: block;
    width: 48px;
    height: 4px;
    margin-bottom: 16px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 20px;

    &::before {
      margin-bottom: 12px;
    }
  }
`;

// One sentence under a section heading.
export const SectionIntro = styled.p`
  max-width: 720px;
  margin: -12px 0 28px;
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: -8px 0 20px;
    font-size: 16px;
  }
`;

// Rounded card used by most sections.
export const Card = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`;

// Small monospace label, used for tech stacks and tags.
export const Chip = styled.li`
  padding: 4px 10px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.site.background};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: 6px;
`;

export const Chips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
