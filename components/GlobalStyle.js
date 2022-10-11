import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;   
    
    }
    html {
        max-width: 70ch; 
        padding: 3em 1em; 
        margin: auto; 
        line-height: 1.75; 
        font-size: 1.75em; 
    }

    body {  
    font-family: 'Quicksand', sans-serif; 
    margin: 0; 
    padding: 0; 
    
    /* background-color: #EFF9FF;  */
    }

    main {
        max-width: 38rem; 
        padding: 1.5rem; 
        margin: auto; 
    }
`;

export default GlobalStyle;
