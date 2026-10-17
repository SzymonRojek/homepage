import { useRef, type CSSProperties } from "react";
import type { Gates as GatesData } from "../projectsData";
import { useScrollReveal } from "../useScrollReveal";
import { Wrapper, List, Item, Mark, Ring, Tick, Result } from "./styled";

interface GatesProps {
  title: string;
  gates: GatesData;
}

// Each line's place in the run, for its delay in the animation.
const step = (index: number) => ({ "--step": index }) as CSSProperties;

const wait = (element: HTMLElement) => {
  element.dataset.state = "waiting";
};

const run = (element: HTMLElement) => {
  element.dataset.state = "running";
};

// The CI gates as a checklist that runs like the pipeline: when the card
// comes into view, each gate ticks after the one before it, then the deploy
// shows. Without the animation (see useScrollReveal) every gate shows passed.
export const Gates = ({ title, gates: { checks, result } }: GatesProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, wait, run);

  return (
    <Wrapper ref={ref}>
      <List aria-label={`${title}: CI gates, all passing`}>
        {checks.map((check, index) => (
          <Item key={check} style={step(index)}>
            <Mark aria-hidden="true">
              <Ring />
              <Tick>✓</Tick>
            </Mark>
            {check}
          </Item>
        ))}
      </List>
      <Result style={step(checks.length)}>{result}</Result>
    </Wrapper>
  );
};
