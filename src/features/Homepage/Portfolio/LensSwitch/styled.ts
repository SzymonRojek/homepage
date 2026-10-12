import styled from "styled-components";
import type { ProjectView } from ".";

export const Group = styled.div`
  display: inline-flex;
  gap: 4px;
`;

export const Option = styled.button<{ $view: ProjectView }>`
  padding: 8px 16px;
  font: inherit;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.muted};
  background: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  cursor: pointer;
  transition:
    color 0.2s,
    background 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &[aria-pressed="true"] {
    color: ${({ theme, $view }) =>
      $view === "developer"
        ? theme.colors.dev.accent
        : $view === "tester"
          ? theme.colors.qa.accent
          : theme.colors.textPrimary};
    background: ${({ theme, $view }) =>
      $view === "developer"
        ? theme.colors.dev.soft
        : $view === "tester"
          ? theme.colors.qa.soft
          : theme.colors.site.background};
    border-color: ${({ theme, $view }) =>
      $view === "developer"
        ? theme.colors.dev.border
        : $view === "tester"
          ? theme.colors.qa.border
          : theme.colors.headerLine};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 6px 12px;
    font-size: 13px;
  }
`;
