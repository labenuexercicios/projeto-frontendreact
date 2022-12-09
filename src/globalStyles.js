import { createGlobalStyle } from "styled-components";
import Background from "./image/backgroundsite.png"

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0px;
    background-image: url(${Background});
    font-family: Helvetica;
}`