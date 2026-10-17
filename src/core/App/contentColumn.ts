import { css, type DefaultTheme } from "styled-components";

// The page's content column, shared by the top bar, the hero and the
// sections, so their left and right edges always line up. The gutter grows
// with the screen; the content stops at theme.layout.maxWidth and centres.
export const contentColumn = css`
  width: 100%;
  max-width: ${({ theme }) =>
    theme.layout.maxWidth + 2 * theme.layout.gutter.desktop}px;
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.layout.gutter.desktop}px;

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.tabletHorizontalMax}px) {
    padding-inline: ${({ theme }) => theme.layout.gutter.tablet}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-inline: ${({ theme }) => theme.layout.gutter.mobile}px;
  }
`;

// How far the content column's outer edge (the gutter included) sits in from
// the sides of a full-width band: nothing up to the column's full width, then
// half of the rest. Decorations that hang off a band's corner (the rings on
// the hero and the footer, the bug in How I test) add it to their offset, so
// they stay next to the content however wide the window gets.
export const columnInset = ({ theme }: { theme: DefaultTheme }) =>
  `max(0px, (100% - ${theme.layout.maxWidth + 2 * theme.layout.gutter.desktop}px) / 2)`;
