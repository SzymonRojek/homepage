import styled from "styled-components";
import a from "color-alpha";
import { inWindowWidth, photoHeight } from "../sizes";

// On phones the photo's height follows the band's width (sizes.ts).
const phoneHeight = `clamp(160px, 46cqi, ${photoHeight})`;

// The photo stands on the bottom edge of the hero, with no frame of its own.
// Its right edge lines up with the content column.
export const Frame = styled.div`
  position: relative;
  align-self: end;
  justify-self: end;
  /* About as tall as the text beside it, and shrinking slower than the
     headline (sizes.ts): 300 x 375px beside the 80px headline, still 312px
     tall at 768px. Its width is the hero's photo column: 4:5, or narrower
     where the one-line headline needs the room (below about 860px); then the
     photo is cropped at the shoulders and the head keeps its size. */
  width: 100%;
  height: ${inWindowWidth(photoHeight)};
  height: ${photoHeight};

  /* On phones, beside "Looking for": its top level with the label (the
     list's margin), at most 200px wide, so the text keeps room. Just under
     768px it is as tall as just above, so the head keeps its size where the
     layout changes, and it shrinks with the screen from about 680px down. */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-column: 2;
    height: ${inWindowWidth(phoneHeight)};
    height: ${phoneHeight};
    width: min(200px, calc(0.8 * ${inWindowWidth(phoneHeight)}));
    width: min(200px, calc(0.8 * ${phoneHeight}));
    margin-top: 28px;
  }
`;

// The soft green light behind the head, wider than the photo and behind the
// hero's text (z-index -1 in the hero's layer); the band clips its edges.
export const Glow = styled.span`
  position: absolute;
  z-index: -1;
  top: -12%;
  left: -45%;
  right: -45%;
  aspect-ratio: 1;
  background: radial-gradient(
    closest-side,
    ${({ theme }) => a(theme.colors.brand.glow, 0.95)},
    ${({ theme }) => a(theme.colors.brand.background, 0.55)} 45%,
    ${({ theme }) => a(theme.colors.brand.background, 0)} 100%
  );
  pointer-events: none;
`;

// The cut-out photo in the duotone (shadows in the hero's near-black, cream
// highlights), filling the frame from the bottom. Its bottom fades out, and
// its sides only by 8%, where the frame cuts the jacket: the ears sit at
// about 20% and 84% of the frame's width, and a wider fade dimmed them.
const fade =
  "linear-gradient(to top, transparent, #000 30%), linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)";

export const Photo = styled.img`
  display: block;
  width: 100%;
  max-width: none;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  filter: url(#portrait-duotone);
  /* The two fades meet where both are opaque. Only the top one intersects:
     Safari before 16 composites the bottom one too, onto nothing, and with
     "intersect" there the photo vanished; "add" there is what the spec does
     anyway. */
  -webkit-mask-image: ${fade};
  -webkit-mask-composite: source-in, source-over;
  mask-image: ${fade};
  mask-composite: intersect, add;
`;

// The SVG that holds the duotone filter takes no space.
export const FilterDefs = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
`;
