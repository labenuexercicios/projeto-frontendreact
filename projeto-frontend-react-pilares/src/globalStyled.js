
import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  :root{
    --rounded: 15px; 
    --roundedLight: 10px; 
    --red-400: #FF4F53;
    --red-900: #A90E0E;
    --small: 20px;
  }

  body{
    display: block;
    padding: 1rem;
  }
  

  
  `