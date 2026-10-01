import type { ComponentType, SVGProps } from "react";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li``;

export const Link = styled.a`
  display: flex;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const styleIcon = (
  Icon: ComponentType<SVGProps<SVGSVGElement>>,
) => styled(Icon)`
  width: 28px;
  height: auto;
`;
