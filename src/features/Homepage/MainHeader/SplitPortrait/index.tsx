import { useEffect, useRef, useState, type PointerEvent } from "react";
import { useTheme } from "styled-components";
import {
  Portrait,
  Picture,
  Photo,
  FilterDefs,
  Rail,
  Grip,
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
// The photo is bright and flat, taken in daylight: mapped straight from dark
// to light it came out pale. Levels (a black and a white point) and a gamma
// over 1 deepen the shadows and the mid-tones, so the face keeps its shape.
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
  // Where a drag started, to put the line back if the browser turns the
  // gesture into a page scroll instead.
  const dragStart = useRef<number | null>(null);

  const moveTo = ({ clientX, currentTarget }: PointerEvent<HTMLDivElement>) => {
    const { left, width } = currentTarget.getBoundingClientRect();
    if (width > 0) {
      setSplit(clamp(((clientX - left) / width) * 100));
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
      onPointerUp={({ pointerType }) => {
        const start = dragStart.current;
        dragStart.current = null;
        if (start === null) {
          return;
        }
        // Let go partway: finish the move in the direction of the drag.
        if (Math.abs(splitRef.current - start) >= NUDGE) {
          slideTo(splitRef.current > start ? 100 : 0);
        } else if (pointerType !== "mouse") {
          // A tap (or a finger that hardly moved) slides the line to the
          // other end, so a touchscreen needs no drag (WCAG 2.5.7). A scroll
          // never gets here: the browser cancels the pointer instead. A
          // mouse already has a single click: it moves the line at once.
          slideTo(start < 50 ? 100 : 0);
        }
      }}
      onPointerCancel={() => {
        if (dragStart.current !== null) {
          setSplit(dragStart.current);
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
                  tableValues={toneTable(dark[index], light[index])}
                />
              );
            })}
          </feComponentTransfer>
        </filter>
      </FilterDefs>
      {/* One image for screen readers, so the two photos inside are hidden
          from them. They still carry the name as alt, because search engines
          (Bing) count an empty alt as missing. */}
      <Picture role="img" aria-label={name}>
        <Photo src={src} alt={name} aria-hidden="true" draggable={false} />
        <Photo
          src={src}
          alt={name}
          aria-hidden="true"
          draggable={false}
          $mono
        />
      </Picture>
      <Rail aria-hidden="true">
        <Grip />
      </Rail>
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
        onChange={({ target }) => setSplit(Number(target.value))}
      />
    </Portrait>
  );
};
