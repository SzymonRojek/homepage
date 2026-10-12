import { useState } from "react";
import {
  Portrait,
  Picture,
  Photo,
  Label,
  Divider,
  Handle,
  Slider,
} from "./styled";

interface SplitPortraitProps {
  src: string;
  name: string;
}

// One photo drawn twice: black and white on the left (code), colour on the
// right (test), joined by a yellow line. For screen readers the picture is
// one image with my name; the line is a slider that shows more of one side.
export const SplitPortrait = ({ src, name }: SplitPortraitProps) => {
  const [split, setSplit] = useState(50);

  return (
    <Portrait $split={split}>
      <Picture role="img" aria-label={name}>
        <Photo src={src} alt="" />
        <Photo src={src} alt="" $mono />
        <Label $side="developer">Code</Label>
        <Label $side="tester">Test</Label>
      </Picture>
      <Divider>
        <Handle>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6 4 12l5 6M15 6l5 6-5 6" />
          </svg>
        </Handle>
      </Divider>
      <Slider
        type="range"
        min={0}
        max={100}
        value={split}
        aria-label="Move the line between code and test"
        aria-valuetext={`${split}% code, ${100 - split}% test`}
        onChange={({ target }) => setSplit(Number(target.value))}
      />
    </Portrait>
  );
};
