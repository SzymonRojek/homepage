import styled, { css } from "styled-components";

type Side = "developer" | "tester";
const accent = (side: Side) => (side === "developer" ? "dev" : "qa");

export const Figure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Portrait = styled.div`
  position: relative;
  display: flex;
  width: 300px;
  aspect-ratio: 1;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid ${({ theme }) => theme.colors.headerLine};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 200px;
  }
`;

export const Half = styled.a<{ $side: Side }>`
  position: relative;
  width: 50%;
  overflow: hidden;

  /* The outline sits above the photo, so it shows on hover and focus. */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 3px solid transparent;
    pointer-events: none;
    transition: border-color 0.3s;
  }

  &:first-child::after {
    border-radius: ${({ theme }) =>
      `${theme.borderRadiusSmall} 0 0 ${theme.borderRadiusSmall}`};
  }

  &:nth-child(2)::after {
    border-radius: ${({ theme }) =>
      `0 ${theme.borderRadiusSmall} ${theme.borderRadiusSmall} 0`};
  }

  &:hover::after,
  &:focus-visible::after {
    border-color: ${({ theme, $side }) => theme.colors[accent($side)].accent};
  }

  &:focus-visible {
    outline: none;
  }
`;

// The photo is twice as wide as the half; each half shows its own side.
export const Photo = styled.img<{ $side: Side }>`
  position: absolute;
  top: 0;
  width: 200%;
  max-width: none;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;

  ${({ $side }) =>
    $side === "developer"
      ? css`
          left: 0;
          filter: grayscale(1) contrast(1.15);
        `
      : css`
          right: 0;
        `}

  ${Half}:hover &, ${Half}:focus-visible & {
    transform: scale(1.04);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    ${Half}:hover &, ${Half}:focus-visible & {
      transform: none;
    }
  }
`;

export const Badge = styled.span<{ $side: Side }>`
  position: absolute;
  top: 12px;
  ${({ $side }) => ($side === "developer" ? "left: 12px;" : "right: 12px;")}
  padding: 3px 8px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme, $side }) => theme.colors[accent($side)].accent};
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 1px solid ${({ theme, $side }) => theme.colors[accent($side)].border};
  border-radius: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    top: 8px;
    font-size: 10px;
    ${({ $side }) => ($side === "developer" ? "left: 8px;" : "right: 8px;")}
  }
`;

// A plain line where the two sides meet.
export const Divider = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: ${({ theme }) => theme.colors.textPrimary};
  transform: translateX(-50%);
  pointer-events: none;
`;

export const Hint = styled.span`
  max-width: 300px;
  font-size: 13px;
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
`;
