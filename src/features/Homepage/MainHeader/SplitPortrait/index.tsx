import { useEffect, useRef, useState, type PointerEvent } from "react";
import { useTheme } from "styled-components";
import {
  Portrait,
  Picture,
  Photo,
  Eyes,
  FilterDefs,
  Rail,
  Grip,
  Hint,
  Caption,
  Slider,
} from "./styled";

interface SplitPortraitProps {
  src: string;
  name: string;
  captions: { test: string; code: string };
}

// "#123C37" -> "0.071 0.235 0.216": a colour as 0–1 channel values.
const channels = (hex: string) =>
  [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);

// Within this many percent of an edge, the photo is all one side.
const EDGE = 5;
// A release after a move of at least this much finishes the move: the line
// slides to the end in the direction it was dragged.
const NUDGE = 2;
const SLIDE_MS = 350;

const clamp = (value: number) => Math.min(100, Math.max(0, Math.round(value)));

// One photo drawn twice: colour (test) with a black-and-white copy (code) on
// top, cut at a yellow line. It starts all in colour with "100% tester";
// dragging the line right turns it black and white, ending on the second
// caption. For screen readers the picture is one image with my name and the
// line is a slider.
export const SplitPortrait = ({ src, name, captions }: SplitPortraitProps) => {
  // The duotone maps black to the deep brand green and white to cream.
  const { colors } = useTheme();
  const dark = channels(colors.brand.background);
  const light = channels(colors.brand.text);
  const [split, setSplitState] = useState(0);
  // The latest split, for the slide and for pointer events between renders.
  const splitRef = useRef(0);
  const slide = useRef<number | null>(null);
  const setSplit = (value: number) => {
    splitRef.current = value;
    setSplitState(value);
  };
  const stopSlide = () => {
    if (slide.current !== null) {
      cancelAnimationFrame(slide.current);
      slide.current = null;
    }
  };
  useEffect(() => stopSlide, []);

  // Ease the line to an edge; at once for reduced motion.
  const slideTo = (target: number) => {
    stopSlide();
    const from = splitRef.current;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      setSplit(target);
      return;
    }
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / SLIDE_MS);
      const eased = 1 - (1 - t) ** 3;
      setSplit(Math.round(from + (target - from) * eased));
      slide.current = t < 1 ? requestAnimationFrame(step) : null;
    };
    slide.current = requestAnimationFrame(step);
  };
  // The "Drag" hint shows until the line is first moved.
  const [moved, setMoved] = useState(false);
  const update = (value: number) => {
    setSplit(value);
    setMoved(true);
  };
  // Where a drag started, and whether the hint was gone by then, to undo
  // both if the browser turns the gesture into a page scroll instead.
  const dragStart = useRef<number | null>(null);
  const movedBefore = useRef(false);

  const moveTo = ({ clientX, currentTarget }: PointerEvent<HTMLDivElement>) => {
    const { left, width } = currentTarget.getBoundingClientRect();
    if (width > 0) {
      update(clamp(((clientX - left) / width) * 100));
    }
  };

  const caption =
    split <= EDGE ? captions.test : split >= 100 - EDGE ? captions.code : "";

  return (
    <Portrait
      $split={split}
      onPointerDown={(event) => {
        stopSlide();
        dragStart.current = splitRef.current;
        movedBefore.current = moved;
        event.currentTarget.setPointerCapture?.(event.pointerId);
        // A mouse moves the line at once; a finger only once it moves, so a
        // tap or the start of a scroll doesn't jump it.
        if (event.pointerType === "mouse") {
          moveTo(event);
        }
      }}
      onPointerMove={(event) => {
        if (dragStart.current !== null) {
          moveTo(event);
        }
      }}
      onPointerUp={() => {
        const start = dragStart.current;
        dragStart.current = null;
        // Let go partway: finish the move in the direction of the drag.
        if (start !== null && Math.abs(splitRef.current - start) >= NUDGE) {
          slideTo(splitRef.current > start ? 100 : 0);
        }
      }}
      onPointerCancel={() => {
        if (dragStart.current !== null) {
          setSplit(dragStart.current);
          setMoved(movedBefore.current);
        }
        dragStart.current = null;
      }}
    >
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
                  tableValues={`${dark[index]} ${light[index]}`}
                />
              );
            })}
          </feComponentTransfer>
        </filter>
        {/* Keeps the irises: less red than the skin around them (blue minus
            red above about -0.1, the skin is -0.15 to -0.37), then tints
            them blue in their own brightness. */}
        <filter id="portrait-irises" colorInterpolationFilters="sRGB">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -12 0 12 0 1.2"
            result="iris"
          />
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
          />
          <feComponentTransfer result="blue">
            <feFuncR type="table" tableValues="0.1 0.62" />
            <feFuncG type="table" tableValues="0.22 0.8" />
            <feFuncB type="table" tableValues="0.4 0.96" />
          </feComponentTransfer>
          <feComposite in="blue" in2="iris" operator="in" />
        </filter>
      </FilterDefs>
      <Picture role="img" aria-label={name}>
        <Photo src={src} alt="" draggable={false} />
        <Photo src={src} alt="" draggable={false} $mono />
        <Eyes src={src} alt="" draggable={false} />
      </Picture>
      <Rail aria-hidden="true">
        <Grip />
      </Rail>
      {!moved && <Hint aria-hidden="true">Drag</Hint>}
      <Caption aria-live="polite" $visible={caption !== ""}>
        {caption}
      </Caption>
      <Slider
        type="range"
        min={0}
        max={100}
        value={split}
        aria-label="Move the line between code and test"
        aria-valuetext={`${split}% code, ${100 - split}% test`}
        onChange={({ target }) => update(Number(target.value))}
      />
    </Portrait>
  );
};
