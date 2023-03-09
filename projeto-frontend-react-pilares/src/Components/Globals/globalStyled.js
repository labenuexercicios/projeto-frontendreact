
import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  :root{
    /* Colors*/
    --cyan-400: #CEF5FD;
    --red-400: #FF4F53;
    --red-900: #A90E0E;


    /*Gradients*/
    --gradient-header: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    
    /*Border Radius*/
    --rounded: 15px; 
    --roundedLight: 10px; 
    --roundedMedium: 20px;



    /*font size span*/
    --small: 20px;
  }

  body{
    display: block;
    padding: 1rem;
  }
  
  h1, h2, h3 , h4, h5, h6, input, select, option, button{
    font-family: 'Space Grotesk', sans-serif;
  }
  
  `