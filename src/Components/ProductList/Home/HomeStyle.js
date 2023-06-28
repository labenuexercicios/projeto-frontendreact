import styled from "styled-components";

export const HomeArticle = styled.article`
  border-left: 4px solid var(--6);
  border-right: 4px solid var(--6);
  justify-self:center;
  grid-area: HomeArticle;
  position:relative;

  
`

export const OrdenacaoSection = styled.section`
  display: flex;
  background-color: var(--4);
  grid-area: OrdenacaoSection;
  z-index: 100;
  position:fixed;
  width:55vw;
  height:7vh;
  justify-content:space-around;
  align-items:center;
  color:var(--2)

`;


export const HomeCards = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width:55vw;
  padding-top: 30px;
  min-height:100vh;
  background-image: url("imagens/fundo-foguete.png");
  background-size: cover;
  background-position: center;




`;

export const OptionHome = styled.option`
  display: flex;
  background-color:var(--4);
  color: var(--2);
  cursor: pointer;

`;



