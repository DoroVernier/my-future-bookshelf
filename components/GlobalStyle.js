import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;   
    
    }
 

    body {  
    font-family: 'Quicksand', sans-serif; 
    margin: 0; 
    padding: 0; 
    
    /* background-color: #EFF9FF;  */
    }

  
`;

export default GlobalStyle;
