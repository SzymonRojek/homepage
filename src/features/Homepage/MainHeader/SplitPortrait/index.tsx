import { Portrait, Half, Photo, Label, Divider } from "./styled";

interface SplitPortraitProps {
  src: string;
  name: string;
}

const halves = [
  { side: "developer", label: "Code" },
  { side: "tester", label: "Test" },
] as const;

// One photo drawn twice: the left half in black and white (code), the right
// half in colour (test), joined by a yellow line. It is a picture of me, not
// a control, so for screen readers it is one image with my name.
export const SplitPortrait = ({ src, name }: SplitPortraitProps) => (
  <Portrait role="img" aria-label={name}>
    {halves.map(({ side }) => (
      <Half key={side}>
        <Photo src={src} alt="" $side={side} />
      </Half>
    ))}
    {halves.map(({ side, label }) => (
      <Label key={side} $side={side}>
        {label}
      </Label>
    ))}
    <Divider />
  </Portrait>
);
