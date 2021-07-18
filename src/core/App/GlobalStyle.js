import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
    }

    *,
        ::before,
        ::after {
            box-sizing: inherit;
        }

    body {
        padding-bottom: 108px;
        font-family: "Inter", sans-serif;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.site.text};
        background: ${({ theme }) => theme.colors.site.background};
        letter-spacing: 0.05em;
        word-break: break-word;
        overflow-y: scroll;
        transition: background .3s;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-bottom: 32px;
        }
    }
`;
