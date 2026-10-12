import styled from "styled-components";

export const HiddenHeading = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;

// The strongest sentence, large, like a headline in a magazine.
export const Pull = styled.figure`
  margin: 0;

  blockquote {
    margin: 0;
  }

  blockquote p {
    max-width: 20em;
    margin: 0;
    font-family: ${({ theme }) => theme.fontDisplay};
    font-size: 44px;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  figcaption {
    margin-top: 16px;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.muted};
  }

  /* Names in the brand colour: deep green, yellow in the dark theme. */
  figcaption strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    blockquote p {
      font-size: 34px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    blockquote p {
      font-size: 28px;
    }
  }
`;

// A yellow stroke under the last words, low enough to stay off the letters.
export const Mark = styled.mark`
  color: inherit;
  background: linear-gradient(
    transparent 74%,
    ${({ theme }) => theme.colors.brand.accent} 74%,
    ${({ theme }) => theme.colors.brand.accent} 94%,
    transparent 94%
  );
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;

// The full recommendations as plain text in columns: no cards, a thin rule.
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
  margin: 44px 0 0;
  padding: 28px 0 0;
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.colors.headerLine};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 32px;
  }
`;

export const Quote = styled.figure`
  margin: 0;

  blockquote {
    margin: 0;
  }

  blockquote p {
    margin: 0;
    font-size: 16px;
    line-height: 1.65;
  }

  blockquote p::before {
    content: "“";
  }

  blockquote p::after {
    content: "”";
  }
`;

export const Caption = styled.figcaption`
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.muted};

  strong {
    display: block;
    font-family: ${({ theme }) => theme.fontDisplay};
    font-size: 15px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// The link to the originals sits on the right, under the last column.
export const Source = styled.p`
  margin: 24px 0 0;
  font-size: 15px;
  text-align: right;

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    text-underline-offset: 3px;
  }
`;
