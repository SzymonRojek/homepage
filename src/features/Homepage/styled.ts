import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 1248px;
  margin: auto;
  padding: 0 16px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 12px 12px;
  }
`;

// Hidden until a keyboard user tabs to it.
export const SkipLink = styled.a`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 20;
  padding: 10px 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onGradient};
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transform: translateY(-200%);

  &:focus {
    transform: none;
  }
`;
