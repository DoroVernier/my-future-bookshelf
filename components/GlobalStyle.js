import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;   
    
    }

    body {  
    font-family: 'Quicksand', sans-serif; 
    max-width: 38rem; 

    margin: auto; 

    
    background-color: #EFF9FF; 
//background: rgb(207,217,223);
//background: radial-gradient(circle, rgba(207,217,223,1) 0%, rgba(239,249,255,1) 100%); 
    }
`;

export default GlobalStyle;
