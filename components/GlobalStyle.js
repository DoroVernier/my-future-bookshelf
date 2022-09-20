import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box
    }
    body {
        background-color: #f72585
    }
`;

export default GlobalStyle;
