import styled, { css } from "styled-components";

export type Accent = "qa" | "automation" | "dev";

// Three short lists of plain text, no tags: testing, automation, programming.
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const Group = styled.div``;

// Testing is green, programming is terracotta, automation sits between them
// in the brand green.
export const GroupTitle = styled.h3<{ $accent: Accent }>`
  margin: 0;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({ $accent, theme }) => css`
    color: ${
      $accent === "qa"
        ? theme.colors.qa.accent
        : $accent === "dev"
          ? theme.colors.dev.accent
          : theme.colors.primary
    };
  `}
`;

export const SkillList = styled.ul`
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
`;

export const Skill = styled.li`
  padding: 9px 0;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.headerLine};
  }
`;

export const Tools = styled.p`
  margin: 28px 0 0;
  font-size: 15px;
  line-height: 1.7;

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Languages = styled(Tools)`
  margin-top: 6px;
`;
