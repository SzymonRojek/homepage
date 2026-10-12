import styled from "styled-components";
import { Card, Chip, Chips } from "../Section";

type Accent = "qa" | "dev" | "both";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Group = styled(Card)``;

export const GroupTitle = styled.h3<{ $accent: Accent }>`
  margin: 0 0 16px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme, $accent }) =>
    $accent === "both" ? theme.colors.primary : theme.colors[$accent].accent};
`;

export const SkillList = styled(Chips)``;

export const Skill = styled(Chip)`
  font-family: inherit;
  font-size: 15px;
  padding: 6px 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Tools = styled.p`
  margin: 24px 0 0;
  line-height: 1.6;

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const Languages = styled(Tools)`
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 6px;
  }
`;
