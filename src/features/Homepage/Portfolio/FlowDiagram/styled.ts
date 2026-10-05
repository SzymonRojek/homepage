import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 16px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Steps = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 32px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-direction: column;
    gap: 24px;
  }
`;

// Arrows are decorative ("→" / "" gives them empty alt text), so screen
// readers only hear the ordered steps.
export const Step = styled.li`
  position: relative;
  padding: 8px 12px;
  font-size: 14px;
  background: ${({ theme }) => theme.colors.site.background};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};

  &:not(:last-child)::after {
    content: "→";
    content: "→" / "";
    position: absolute;
    top: 50%;
    right: -24px;
    transform: translateY(-50%);
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    &:not(:last-child)::after {
      content: "↓";
      content: "↓" / "";
      top: auto;
      right: auto;
      bottom: -22px;
      left: 16px;
      transform: none;
    }
  }
`;
