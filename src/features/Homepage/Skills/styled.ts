import styled, { css } from "styled-components";

export type Accent = "qa" | "automation" | "dev" | "learning";

// Four short lists of plain text, no tags: testing, automation, programming
// and learning. Two by two on tablets, one column on phones.
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }
`;

export const Group = styled.div``;

// What I'm learning on a white card with a thin border on the page's colour
// (the card colour in the dark theme), so it reads apart from what I can
// already do, and ISTQB stands out.
export const LearningGroup = styled.div`
  padding: 20px 22px 8px;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: ${({ theme }) => theme.borderRadius};

  li:last-child {
    border-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 18px 18px 6px;
  }
`;

// Testing is green, programming is terracotta, automation sits between them
// in the brand green; learning is in the headings' ink.
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
          : $accent === "learning"
            ? theme.colors.textPrimary
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

// Under a course: when and where, or how far along I am.
export const Course = styled.span`
  display: block;
  margin-top: 2px;
  font-size: 13.5px;
  color: ${({ theme }) => theme.colors.muted};
`;

// The course I'm preparing for: dark green on the yellow accent (7.9:1).
export const NextTag = styled.span`
  display: inline-block;
  margin-left: 8px;
  padding: 1px 7px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  vertical-align: 2px;
  color: ${({ theme }) => theme.colors.brand.onAccent};
  background: ${({ theme }) => theme.colors.brand.accent};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
`;

export const Tools = styled.p`
  margin: 20px 0 0;
  font-size: 15px;
  line-height: 1.7;

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Languages = styled(Tools)`
  margin-top: 6px;
`;
