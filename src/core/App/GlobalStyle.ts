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
        padding-bottom: 48px;
        font-family: "Inter", sans-serif;
        font-size: 17px;
        line-height: 1.5;
        color: ${({ theme }) => theme.colors.site.text};
        background: ${({ theme }) => theme.colors.site.background};
        word-break: break-word;
        -webkit-font-smoothing: antialiased;
        transition: background .3s;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-bottom: 24px;
            font-size: 16px;
        }
    }

    ::selection {
        color: ${({ theme }) => theme.colors.onGradient};
        background: ${({ theme }) => theme.colors.dev.border};
    }

    /* The skip link focuses <main>; it needs no ring of its own. */
    main:focus {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 3px;
    }
`;
