import styled, { css } from "styled-components";
import SunIcon from "./sun.svg?react";

export const Wrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 4px;
  background: none;
  border: none;
  color: inherit;
  border-radius: 999px;
  cursor: pointer;
`;

export const Box = styled.span`
  display: flex;
  width: 48px;
  padding: 2px;
  background: ${({ theme }) => theme.colors.brand.control};
  border: 1px solid ${({ theme }) => theme.colors.brand.controlBorder};
  border-radius: 12px;
`;

export const IconWrapper = styled.span<{ $moveToRight: boolean }>`
  display: flex;
  border-radius: 50%;
  transition: transform 0.3s;

  ${({ $moveToRight }) =>
    $moveToRight &&
    css`
      transform: translateX(22px);
    `}
`;

// The knob is the yellow sun, easy to spot on the green bar.
export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.brand.accent};
`;
