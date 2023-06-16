import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  html{
    background-color: #F2F2F2;
    
  }

  body{
    height: 100vh;
  }
`


export default GlobalStyle;