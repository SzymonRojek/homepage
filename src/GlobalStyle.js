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
        overflow-wrap: anywhere;
        font-family: 'Inter', sans-serif;
        letter-spacing: 0.05em;
        font-size: 18px;
        margin: 0;
    }
 `;
