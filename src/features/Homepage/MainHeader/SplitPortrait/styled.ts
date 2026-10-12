import styled, { css } from "styled-components";
import a from "color-alpha";

type Side = "developer" | "tester";

// The photo stands on the bottom edge of the green band, so only its top
// corners are rounded. Its right edge lines up with the content column
// (centred on phones). A soft green shade at the top keeps the two labels
// readable on any part of the photo.
export const Portrait = styled.div`
  position: relative;
  align-self: end;
  justify-self: end;
  display: flex;
  width: 340px;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: ${({ theme }) =>
    `${theme.borderRadius} ${theme.borderRadius} 0 0`};

  &::after {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 30%;
    background: linear-gradient(
      ${({ theme }) => a(theme.colors.brand.background, 0.75)},
      ${({ theme }) => a(theme.colors.brand.background, 0)}
    );
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 280px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    justify-self: center;
    width: 240px;
  }
`;

export const Half = styled.div`
  position: relative;
  width: 50%;
  overflow: hidden;
`;

// The photo is twice as wide as the half; each half shows its own side.
export const Photo = styled.img<{ $side: Side }>`
  position: absolute;
  top: 0;
  width: 200%;
  max-width: none;
  height: 100%;
  object-fit: cover;

  ${({ $side }) =>
    $side === "developer"
      ? css`
          left: 0;
          filter: grayscale(1) contrast(1.15);
        `
      : css`
          right: 0;
        `}
`;

// Light, widely spaced capitals in the top corners: a caption, not a button.
export const Label = styled.span<{ $side: Side }>`
  position: absolute;
  z-index: 1;
  top: 18px;
  ${({ $side }) => ($side === "developer" ? "left: 20px;" : "right: 20px;")}
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brand.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    top: 14px;
    ${({ $side }) => ($side === "developer" ? "left: 14px;" : "right: 14px;")}
    font-size: 11px;
  }
`;

// A yellow line where the two sides meet.
export const Divider = styled.span`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: ${({ theme }) => theme.colors.brand.accent};
  transform: translateX(-50%);
`;
