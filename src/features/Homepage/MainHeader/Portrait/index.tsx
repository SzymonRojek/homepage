import { useTheme } from "styled-components";
import { Frame, Glow, Photo, FilterDefs } from "./styled";

interface PortraitProps {
  src: string;
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
export const Portrait = ({ src, name }: PortraitProps) => {
  const { colors } = useTheme();
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
      <Photo src={src} alt={name} draggable={false} />
    </Frame>
  );
};
