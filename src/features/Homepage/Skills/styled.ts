import styled from "styled-components";
import { Card, Chip, Chips } from "../Section";

type Side = "developer" | "tester";
const accent = (side: Side) => (side === "developer" ? "dev" : "qa");

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Group = styled(Card)<{ $side: Side }>`
  border-top: 4px solid
    ${({ theme, $side }) => theme.colors[accent($side)].accent};
`;

export const GroupTitle = styled.h3<{ $side: Side }>`
  margin: 0 0 16px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme, $side }) => theme.colors[accent($side)].accent};
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
