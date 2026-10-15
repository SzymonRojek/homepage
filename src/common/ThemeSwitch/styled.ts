import styled from "styled-components";
import SunSvg from "./sun.svg?react";
import MoonSvg from "./moon.svg?react";

// A small square button in the style of the menu button: the icon shows the
// theme a press switches to (a moon in light, a sun in dark).
export const Button = styled.button`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  padding: 0;
  color: ${({ theme }) => theme.colors.brand.text};
  background: ${({ theme }) => theme.colors.brand.control};
  border: 1px solid ${({ theme }) => theme.colors.brand.controlBorder};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  cursor: pointer;
  transition:
    color 0.2s,
    border-color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.accent};
    border-color: ${({ theme }) => theme.colors.brand.accent};
  }
`;

export const SunIcon = styled(SunSvg)`
  width: 18px;
  height: 18px;
`;

export const MoonIcon = styled(MoonSvg)`
  width: 18px;
  height: 18px;
`;
