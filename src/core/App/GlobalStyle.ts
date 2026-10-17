import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
        /* Anchored sections land below the sticky top bar. */
        scroll-padding-top: 88px;

        @media (prefers-reduced-motion: no-preference) {
            scroll-behavior: smooth;
        }
    }

    *,
        ::before,
        ::after {
            box-sizing: inherit;
        }

    body {
        /* Full-width bands inside the content column reach the screen edges
           with 100vw, which includes the scrollbar; clip, never scroll, the
           sliver. "clip" keeps the sticky top bar working. */
        overflow-x: clip;
        font-family: "Geist", "Geist Fallback", sans-serif;
        font-size: 17px;
        line-height: 1.5;
        color: ${({ theme }) => theme.colors.site.text};
        background: ${({ theme }) => theme.colors.site.background};
        word-break: break-word;
        -webkit-font-smoothing: antialiased;
        transition: background .3s;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            font-size: 16px;
        }
    }

    ::selection {
        color: ${({ theme }) => theme.colors.textPrimary};
        background: ${({ theme }) => theme.colors.dev.border};
    }

    h1, h2, h3, h4 {
        font-family: ${({ theme }) => theme.fontDisplay};
    }

    /* The skip link focuses <main>, and an opened case study takes focus too;
       neither is a control, so neither needs a ring. */
    [tabindex="-1"]:focus {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 3px;
    }
`;
