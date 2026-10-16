import type { ComponentType, SVGProps } from "react";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li``;

// Small squares like the theme switch beside them, with the icon in the
// muted cream of the © line beside them, so they stay quiet until hovered.
export const Link = styled.a`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  color: ${({ theme }) => theme.colors.brand.muted};
  background: ${({ theme }) => theme.colors.brand.control};
  border: 1px solid ${({ theme }) => theme.colors.brand.controlBorder};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transition:
    color 0.2s,
    border-color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.accent};
    border-color: ${({ theme }) => theme.colors.brand.accent};
  }
`;

export const styleIcon = (
  Icon: ComponentType<SVGProps<SVGSVGElement>>,
) => styled(Icon)`
  width: 18px;
  height: 18px;
`;
