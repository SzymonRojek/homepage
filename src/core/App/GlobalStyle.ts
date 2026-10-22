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

    /* The window's scrollbar in the page's own colours instead of the
       browser's grey: a slim thumb in the theme's interactive colour (the
       deep green in the light theme, yellow in the dark one) in a lane left
       in the page's colour, so the bar reads as part of the site. Firefox,
       and Safari from 26.2, have no ::-webkit-scrollbar and take the standard
       properties below; Chromium ignores the pseudo-elements as soon as
       scrollbar-color is set, so each engine is given one of the two, never
       both. */
    @supports not selector(::-webkit-scrollbar) {
        html {
            scrollbar-width: thin;
            scrollbar-color: ${({ theme }) => theme.colors.primary} transparent;
        }
    }

    /* Only where a pointer can grab it: a width turns the system's overlay
       bar into a classic one, so the thumb stays in sight while the visitor
       reads. On a touch screen it would be clutter, since the system's own
       bar comes and goes with the scrolling. */
    @media (hover: hover) and (pointer: fine) {
        ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            /* A 6px thumb inside the 10px lane: the border is transparent and
               the fill stops at it. */
            background-color: ${({ theme }) => theme.colors.primary};
            background-clip: padding-box;
            border: 2px solid transparent;
            border-radius: ${({ theme }) => theme.borderRadiusSmall};
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: ${({ theme }) => theme.colors.primaryHover};
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
