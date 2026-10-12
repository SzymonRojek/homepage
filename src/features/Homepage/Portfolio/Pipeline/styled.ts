import styled from "styled-components";

// A dark "CI run" panel in both themes; its colours come from theme.colors.terminal.
export const Terminal = styled.div`
  overflow: hidden;
  font-family: ${({ theme }) => theme.fontMono};
  color: ${({ theme }) => theme.colors.terminal.text};
  background: ${({ theme }) => theme.colors.terminal.background};
  border: 1px solid ${({ theme }) => theme.colors.terminal.border};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const TerminalBar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.terminal.border};
`;

export const Dots = styled.span`
  display: flex;
  gap: 6px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.terminal.border};
  }
`;

export const FileName = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.terminal.muted};
`;

export const Checks = styled.ul`
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 16px 16px 4px;
  list-style: none;
  font-size: 14px;
  line-height: 1.5;

  li {
    position: relative;
    padding-left: 24px;
  }

  li::before {
    content: "✓";
    content: "✓" / "";
    position: absolute;
    left: 0;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.terminal.pass};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 14px 12px 4px;
    font-size: 13px;
  }
`;

export const Result = styled.p`
  margin: 12px 16px 16px;
  padding-top: 12px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.terminal.pass};
  border-top: 1px dashed ${({ theme }) => theme.colors.terminal.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 10px 12px 14px;
    font-size: 13px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 20px;
  margin-top: 16px;
  font-size: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;
