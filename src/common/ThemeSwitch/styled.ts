import styled, { css } from "styled-components";
import SunIcon from "./sun.svg?react";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  outline-offset: 8px;
  cursor: pointer;
  pointer-events: auto;
`;

export const Box = styled.span`
  display: flex;
  width: 48px;
  padding: 2px;
  background: ${({ theme }) => theme.colors.themeSwitch.background};
  border: 1px solid ${({ theme }) => theme.colors.themeSwitch.border};
  border-radius: 12px;
`;

export const IconWrapper = styled.span<{ $moveToRight: boolean }>`
  display: flex;
  background: currentColor;
  border-radius: 50%;
  transition: transform 0.3s;

  ${({ $moveToRight }) =>
    $moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
