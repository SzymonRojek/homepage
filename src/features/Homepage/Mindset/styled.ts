import styled from "styled-components";
import type { MindsetSide } from "../mindsetData";
import { Chips } from "../Section";

// Developer is green (build), tester is cyan (protect), across the page.
const accent = (side: MindsetSide) => (side === "developer" ? "dev" : "qa");

export const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Side = styled.article<{ $side: MindsetSide }>`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid ${({ theme, $side }) => theme.colors[accent($side)].border};
  border-top: 4px solid
    ${({ theme, $side }) => theme.colors[accent($side)].accent};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`;

export const SideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const SideTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 20px;
  }
`;

export const Label = styled.span<{ $side: MindsetSide }>`
  flex-shrink: 0;
  padding: 4px 10px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme, $side }) => theme.colors[accent($side)].accent};
  background: ${({ theme, $side }) => theme.colors[accent($side)].soft};
  border: 1px solid ${({ theme, $side }) => theme.colors[accent($side)].border};
  border-radius: 6px;
`;

export const SideSummary = styled.p`
  margin: 12px 0 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Points = styled.ul<{ $side: MindsetSide }>`
  flex-grow: 1;
  display: grid;
  align-content: start;
  gap: 10px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
  line-height: 1.5;

  li {
    position: relative;
    padding-left: 28px;
  }

  /* A tick for each point, decorative: the list already says it's a list. */
  li::before {
    content: "✓";
    content: "✓" / "";
    position: absolute;
    left: 0;
    top: 0;
    font-weight: 700;
    color: ${({ theme, $side }) => theme.colors[accent($side)].accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`;

export const Stack = styled(Chips)`
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.headerLine};
`;

// The "+" between the two cards, only where they sit side by side.
export const Join = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  font-size: 24px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.onGradient};
  background: ${({ theme }) => theme.colors.gradient};
  border: 4px solid ${({ theme }) => theme.colors.site.background};
  border-radius: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    display: none;
  }
`;

export const Proof = styled.a<{ $side: MindsetSide }>`
  align-self: flex-start;
  margin-top: 16px;
  font-weight: 700;
  color: ${({ theme, $side }) => theme.colors[accent($side)].accent};
  text-decoration: none;
  border-bottom: 1px solid currentColor;

  &:hover {
    border-bottom-width: 2px;
  }
`;
