import styled from "styled-components";

// Sticks under the top bar, so the view can be switched while scrolling
// through a long case study.
export const Toolbar = styled.div`
  position: sticky;
  top: 76px;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 4px 4px 4px 14px;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    position: static;
    padding-left: 10px;
  }
`;

export const ToolbarLabel = styled.span`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.muted};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }
`;
