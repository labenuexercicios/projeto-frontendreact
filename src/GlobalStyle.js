import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-family: sans-serif;
    }
    #root{
        max-width: 1250px;
        padding: 0 16px 16px 16px;
        margin: 0 auto;
    }
`