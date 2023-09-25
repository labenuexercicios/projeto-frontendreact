import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    /* @font-face {
            font-family:"Ivy" ;
            src: url("./fonts/IvyMode-Regular.ttf") format("truetype");
            
        } */

    @font-face {
        font-family: 'Ivy Mode';
        src: local('Ivy Mode Regular'), local('Ivy-Mode-Regular'),
        url('IvyMode-Regular.woff2') format('woff2'),
        url('IvyMode-Regular.woff') format('woff'),
        url('IvyMode-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    :root {
        --platinum: #ebe7e3;
        --isabelline: #f7f4f0;
        --black-bean: #310e00;
        --eerie-black: #1e2321;
        --rosa-muito-claro: #A85971;
        --rosa-claro: #6C1E36;
        --rosa-medio: #490A1D;
        --rosa-escuro: #2C000D;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Cormorant Garamond', serif;
        /* font-family: 'Manrope', sans-serif; */       
    }

    body {
        background-color: #ebe7e3;
    }

   .container {
        max-width: 1100px;
        margin: 0 auto;
   }
`;
