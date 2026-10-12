import styled from "styled-components";
import { SubHeader } from "../SubHeader";

// Every section in <main> opens with a strong rule and a small number
// (01, 02, ...), like the chapters of a test report. The number is drawn by
// CSS with empty alt text, so it is not part of any heading's name.
export const Section = styled.section`
  margin-top: 96px;
  padding-top: 20px;
  border-top: 2px solid ${({ theme }) => theme.colors.textPrimary};
  counter-increment: section;

  &::before {
    content: counter(section, decimal-leading-zero);
    content: counter(section, decimal-leading-zero) / "";
    display: block;
    margin-bottom: 12px;
    font-family: ${({ theme }) => theme.fontMono};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.muted};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 64px;
    padding-top: 16px;
  }
`;

export const SectionHeader = styled(SubHeader)`
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 16px;
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

// A small tag for tech stacks and facts: plain text in a thin box.
export const Chip = styled.li`
  padding: 3px 8px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: 4px;
`;

export const Chips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
