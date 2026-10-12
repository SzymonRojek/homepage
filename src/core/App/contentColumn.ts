import { css } from "styled-components";

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
