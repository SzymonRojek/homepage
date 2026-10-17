import styled, { keyframes } from "styled-components";

// The time between two gates, and how long one takes to tick.
const gap = 0.5;
const tickTime = 0.35;

const appear = keyframes`
  from {
    opacity: 0;
    transform: scale(0.4);
  }
`;

const fade = keyframes`
  to {
    opacity: 0;
  }
`;

// From the waiting gate's muted words to the list's own colour.
const pass = keyframes`
  from {
    color: var(--waiting);
  }
`;

export const Ring = styled.span`
  width: 12px;
  height: 12px;
  border: 1.5px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: 50%;
  opacity: 0;

  [data-state] & {
    opacity: 1;
  }
`;

export const Tick = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.qa.accent};
`;

// Until the list comes into view ("waiting") each gate shows an empty ring
// and muted words; then ("running") each one ticks in turn. With no state,
// all have passed.
export const Wrapper = styled.div`
  --waiting: ${({ theme }) => theme.colors.muted};
  margin-top: 22px;

  &[data-state="waiting"] li {
    color: var(--waiting);
  }

  &[data-state="waiting"] ${Tick}, &[data-state="waiting"] p {
    opacity: 0;
  }

  &[data-state="running"] li,
  &[data-state="running"] p {
    --delay: calc(var(--step) * ${gap}s);
  }

  &[data-state="running"] li {
    animation: ${pass} ${tickTime}s var(--delay) both;
  }

  &[data-state="running"] ${Tick} {
    animation: ${appear} ${tickTime}s var(--delay) ease-out both;
  }

  &[data-state="running"] ${Ring} {
    animation: ${fade} ${tickTime}s var(--delay) both;
  }

  &[data-state="running"] p {
    animation: ${appear} ${tickTime}s var(--delay) ease-out both;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

// The ring and the tick in one place, so the words never move.
export const Mark = styled.span`
  display: inline-grid;
  place-items: center;
  flex: none;
  width: 14px;
  align-self: center;

  & > * {
    grid-area: 1 / 1;
  }
`;

// What follows when every gate passes.
export const Result = styled.p`
  margin: 12px 0 0;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.qa.accent};

  &::before {
    content: "→";
    content: "→" / "";
    margin-right: 8px;
  }
`;
