import styled, { css } from "styled-components";

export type PickState = "open" | "fine" | "bug";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;

  caption {
    margin-bottom: 12px;
    font-size: 14px;
    text-align: left;
    color: ${({ theme }) => theme.colors.muted};
  }

  th,
  td {
    padding: 12px 16px 12px 0;
    text-align: left;
    vertical-align: middle;
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
  }

  thead th {
    padding-top: 0;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.muted};
  }

  tbody th {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;

    th,
    td {
      padding: 10px 8px 10px 0;
    }
  }
`;

// The new value is the thing to click: a dashed box says "pick me". Once
// picked it turns green (fine) or terracotta (the bug).
export const Pick = styled.button<{ $state: PickState }>`
  padding: 6px 10px;
  font: inherit;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: transparent;
  border: 1px dashed ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ $state, theme }) =>
    $state === "fine" &&
    css`
      color: ${theme.colors.qa.accent};
      background: ${theme.colors.qa.soft};
      border: 1px solid ${theme.colors.qa.border};

      &::after {
        content: " ✓";
      }
    `}

  ${({ $state, theme }) =>
    $state === "bug" &&
    css`
      font-weight: 600;
      color: ${theme.colors.dev.accent};
      background: ${theme.colors.dev.soft};
      border: 1px solid ${theme.colors.dev.accent};

      &::after {
        content: " ✗";
      }
    `}
`;

// The quick checks that pass anyway: the reason a matching total proves little.
export const Checks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.qa.accent};

  li::before {
    content: "✓";
    margin-right: 6px;
    font-weight: 700;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px 24px;
  margin-top: 20px;
`;

// Room for two lines, so the card does not jump when a message appears.
export const Feedback = styled.p`
  flex: 1 1 320px;
  min-height: 3.2em;
  margin: 0;
  line-height: 1.6;

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Reveal = styled.button`
  padding: 0;
  font: inherit;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: none;
  border: none;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
`;

// Level 1 to 3: the chosen one is filled, the others outlined.
export const Levels = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const LevelButton = styled.button`
  padding: 8px 14px;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  cursor: pointer;
  transition: background 0.2s;

  &[aria-pressed="true"] {
    color: ${({ theme }) => theme.colors.onPrimary};
    background: ${({ theme }) => theme.colors.primary};
  }

  &:hover:not([aria-pressed="true"]) {
    background: ${({ theme }) => theme.colors.site.background};
  }
`;

export const Next = styled(Reveal)`
  flex: none;
`;
