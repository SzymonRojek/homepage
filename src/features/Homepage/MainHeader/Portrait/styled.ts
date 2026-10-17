import styled from "styled-components";
import a from "color-alpha";

// The photo stands on the bottom edge of the hero, with square corners. Its
// right edge lines up with the content column. A light shade of the hero's
// dark at the top softens the edge of the band.
export const Frame = styled.div`
  position: relative;
  align-self: end;
  justify-self: end;
  /* Smaller than the text block beside it, so the headline leads the hero;
     the photo is a close crop, so its face reads large at any width. It
     shrinks with the band (cqi, see the hero), together with the headline:
     300px from about 1364px, 200px from about 909px down. */
  width: clamp(200px, 22cqi, 300px);
  aspect-ratio: 4 / 5;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 28%;
    background: linear-gradient(
      ${({ theme }) => a(theme.colors.brand.dark, 0.45)},
      ${({ theme }) => a(theme.colors.brand.dark, 0)}
    );
    pointer-events: none;
  }

  /* On phones, beside "Looking for": its top level with the label (the
     list's margin), and smaller, so the text keeps room. */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-column: 2;
    width: clamp(128px, 37cqi, 200px);
    margin-top: 28px;
  }
`;

// The photo in the brand duotone (deep green shadows, cream highlights).
export const Photo = styled.img`
  display: block;
  width: 100%;
  max-width: none;
  height: 100%;
  object-fit: cover;
  filter: url(#portrait-duotone);
`;

// The SVG that holds the duotone filter takes no space.
export const FilterDefs = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
`;
