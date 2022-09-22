import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box
       
    }
    body {
        list-style: none; 
        background-color: #eee; 
        margin: 0; 
        padding: 0; 
        border: 5px solid black; 
        width: 376px; 
        height: 667px; 

    }
`;

export default GlobalStyle;
