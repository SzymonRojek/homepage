import { useRef } from "react";
import type { Stat } from "../projectsData";
import { useScrollReveal } from "../useScrollReveal";
import { List } from "./styled";

interface StatsProps {
  title: string;
  stats: Stat[];
  featured: boolean;
}

const duration = 1800;

// "200+" as the number to count to and what follows it.
const parse = (value: string) => {
  const match = /^(\d+)(.*)$/.exec(value);
  return match ? { to: Number(match[1]), suffix: match[2] } : undefined;
};

const numbers = (element: HTMLElement) =>
  [...element.querySelectorAll<HTMLElement>("strong")].flatMap((strong) => {
    const parsed = parse(strong.textContent ?? "");
    return parsed ? [{ strong, ...parsed }] : [];
  });

// The counting is drawn over the real number (data-shown, see styled.ts),
// which stays in the page for screen readers, search engines and tests.
const startAtZero = (element: HTMLElement) => {
  for (const { strong, suffix } of numbers(element)) {
    strong.dataset.shown = `0${suffix}`;
  }
};

const countUp = (element: HTMLElement) => {
  const counted = numbers(element);
  let start: number | undefined;
  let frame = requestAnimationFrame(function draw(now) {
    start ??= now;
    const progress = Math.min((now - start) / duration, 1);
    // Fast at first, slowing down as it reaches the number.
    const eased = 1 - (1 - progress) ** 3;
    for (const { strong, to, suffix } of counted) {
      if (progress < 1) {
        strong.dataset.shown = `${Math.round(to * eased)}${suffix}`;
      } else {
        delete strong.dataset.shown;
      }
    }
    if (progress < 1) frame = requestAnimationFrame(draw);
  });
  return () => cancelAnimationFrame(frame);
};

// A few numbers, large, that count up from zero when the card comes into
// view. Without the animation (see useScrollReveal) they show as they are.
export const Stats = ({ title, stats, featured }: StatsProps) => {
  const ref = useRef<HTMLUListElement>(null);
  useScrollReveal(ref, startAtZero, countUp);

  return (
    <List ref={ref} aria-label={`${title}: in numbers`} $featured={featured}>
      {stats.map(({ value, label }) => (
        <li key={label}>
          <strong>{value}</strong> <span>{label}</span>
        </li>
      ))}
    </List>
  );
};
