import { useTheme } from "styled-components";
import { Frame, Glow, Photo, FilterDefs } from "./styled";

interface PortraitProps {
  src: string;
  // The same photo at half the size (460px): enough for most phones.
  smallSrc: string;
  name: string;
}

// "#123C37" -> "0.071 0.235 0.216": a colour as 0–1 channel values.
const channels = (hex: string) =>
  [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);

// The photo in a duotone of the brand colours: black to the hero's own
// near-black, white to cream, so the jacket and the beard's shadows melt into
// the band and only the face and hair stay lit. The photo is bright and flat, taken in daylight:
// mapped straight from dark to light it came out pale. Levels (a black and a
// white point) and a gamma over 1 deepen the shadows and the mid-tones, so
// the face keeps its shape.
const BLACK_POINT = 0.12;
const WHITE_POINT = 0.92;
const GAMMA = 1.35;
const toneTable = (dark: number, light: number) =>
  Array.from({ length: 21 }, (_, step) => {
    const level = Math.min(
      1,
      Math.max(0, (step / 20 - BLACK_POINT) / (WHITE_POINT - BLACK_POINT)),
    );
    return (dark + (light - dark) * level ** GAMMA).toFixed(4);
  }).join(" ");

// One photo, its background cut out, standing on the band's bottom edge and
// melting into the band: no frame, its bottom and sides fading out, and a
// soft green light behind the head that keeps the dark hair's outline. It
// stays still (a version that shifted with the mouse was dropped at once). It
// replaced a square photo on 2026-10-17, which had replaced a photo with a
// sliding line between colour and duotone, and its captions.
export const Portrait = ({ src, smallSrc, name }: PortraitProps) => {
  const { colors, breakpoints } = useTheme();
  const dark = channels(colors.brand.dark);
  const light = channels(colors.brand.text);

  return (
    <Frame>
      <Glow aria-hidden="true" />
      <FilterDefs aria-hidden="true" focusable="false">
        <filter id="portrait-duotone" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
          />
          <feComponentTransfer>
            {(["R", "G", "B"] as const).map((channel, index) => {
              const Func = `feFunc${channel}` as const;
              return (
                <Func
                  key={channel}
                  type="table"
                  tableValues={toneTable(dark[index], light[index])}
                />
              );
            })}
          </feComponentTransfer>
        </filter>
      </FilterDefs>
      {/* The page's largest paint: fetched ahead of everything else, and
          React gives the preload it writes for the <head> the same priority
          and choice of sizes. The square photo fills its frame, so it needs
          the frame's height: on phones about 46% of the screen's width (Frame in
          styled.ts), elsewhere at most 375px. Most phones take the 460px copy
          (a third of the bytes); 3x screens and desktops at 2x the 920px. */}
      <Photo
        src={src}
        srcSet={`${smallSrc} 460w, ${src} 920w`}
        sizes={`(max-width: ${breakpoints.mobileMax}px) 46vw, 375px`}
        alt={name}
        draggable={false}
        fetchPriority="high"
      />
    </Frame>
  );
};
