import styled from "styled-components";
import { contentColumn } from "../../core/App/contentColumn";

export const Container = styled.div`
  ${contentColumn}
  min-height: 100vh;
`;

// Hidden until a keyboard user tabs to it.
export const SkipLink = styled.a`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 20;
  padding: 10px 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onPrimary};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transform: translateY(-200%);

  &:focus {
    transform: none;
  }
`;
