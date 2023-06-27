import styled from "styled-components";

export const MainApp = styled.div`
  display: grid;
  background-color: black;
  /* background-image: url("imagens/fundo-foguete.png");
  background-size: cover;
  background-position: center; */
  height:300%;
  grid-template-areas:"HeaderApp HeaderApp HeaderApp"
                      "AsideFiltro OrdenacaoSection CartaoStyle"
                      "AsideFiltro HomeArticle CartaoStyle"
  
  
`;
export const HeaderApp = styled.div`
  /* background-color:yellow; */
  display:grid;
  height:28vh;
  border: 1px solid black;
  grid-area:HeaderApp;
  z-index: 100;
  top:0;
  position:sticky;
  background-image: url("imagens/4.jpg");
  background-size: cover;
  background-position: center;
  
H1{
  color: var(--6);
}
`