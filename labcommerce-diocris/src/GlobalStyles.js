import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
margin: 0px;
padding: 0px;
box-sizing: border-box;
}

input{
    background-color: unset;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    &:focus{
        outline: none;
        background-color: unset;
        border: none;
        border-bottom: 3px solid white;
        color: white;
        font-weight: bold;
    }
}
h1, h2, h3{
    /* font-family: 'Galactic Stone', sans-serif !important; */
    font-family: 'Exo 2', sans-serif !important;
}
p,a,label,input {
    /* font-family: 'Gemunu Libre', sans-serif !important; */
    font-family: 'Open Sans', sans-serif !important;
}
`
export default GlobalStyle