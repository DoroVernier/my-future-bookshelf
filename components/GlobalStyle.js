import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;   
    
    }

    body {  
    font-family: 'Quicksand', sans-serif; 
        background-color: #EFF9FF; 
        margin: 0; 
        padding: 0; 
    }
`;

export default GlobalStyle;
