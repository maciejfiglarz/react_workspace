import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    margin-block-start:0; 
    margin-block-end:0; 
    margin-inline-start:0; 
    margin-inline-end:0;
    padding-block-start:0; 
    padding-block-end:0; 
    padding-inline-start:0; 
    padding-inline-end:0;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    /* background:#030303; */
    background-color:#f5f6f8;
    color:#525f7f;
    
  }
  
`;

export default GlobalStyle;
