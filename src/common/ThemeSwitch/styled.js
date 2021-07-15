import styled from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  outline-offset: 8px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Box = styled.span`
  display: flex;
  width: 48px;
  padding: 2px;
  background: ${({ theme }) => theme.colors.themeSwitch.background};
  border: 1px solid;
  border-radius: 12px;
`;

export const IconWrapper = styled.span`
  display: flex;
  background: currentColor;
  /* padding: 3px; */
  border-radius: 50%;
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
