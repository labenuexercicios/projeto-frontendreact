import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
main{
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  background-image:url('imagens/fundo6.jpg');
  background-size: cover;
  background-position: center;
  height:300vh;
  /* width:100vw; */
}

`;

