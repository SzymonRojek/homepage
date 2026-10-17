import styled from "styled-components";

// A few numbers, large, with what they count under each: in a row, wrapping
// in a narrow card. Yellow on the green card, the button colour on a white
// one.
export const List = styled.ul<{ $featured: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 40px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
  }

  strong {
    position: relative;
    font-variant-numeric: tabular-nums;
    font-family: ${({ theme }) => theme.fontDisplay};
    font-size: 36px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: ${({ theme, $featured }) =>
      $featured ? theme.colors.brand.accent : theme.colors.primary};
  }

  span {
    margin-top: 2px;
    font-size: 14px;
    color: ${({ theme, $featured }) =>
      $featured ? theme.colors.brand.muted : theme.colors.muted};
  }

  /* While counting, the number on screen is drawn over the real one, which
     keeps its place (so nothing moves) and stays in the page for screen
     readers; the drawn one is hidden from them. */
  strong[data-shown] {
    color: transparent;
  }

  strong[data-shown]::after {
    content: attr(data-shown);
    content: attr(data-shown) / "";
    position: absolute;
    top: 0;
    left: 0;
    color: ${({ theme, $featured }) =>
      $featured ? theme.colors.brand.accent : theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 12px 20px;

    strong {
      font-size: 30px;
    }
  }
`;
