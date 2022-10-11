import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;   
    
    }

    body {  
    font-family: 'Quicksand', sans-serif; 
    max-width: 38rem; 
    padding: 1rem; 
    margin: auto; 

    
    background-color: #EFF9FF; 
    }
`;

export default GlobalStyle;
