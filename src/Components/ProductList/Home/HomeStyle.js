import styled from "styled-components";

export const HomeArticle = styled.article`
  border-left: 4px solid var(--6);
  border-right: 4px solid var(--6);
  border-bottom: 4px solid var(--6);
  padding-bottom: 2%;
  justify-self: center;
  grid-area: HomeArticle;
  position: relative;
  margin-bottom: 1%;
`;

export const OrdenacaoSection = styled.section`
  display: flex;
  background-color: var(--4);
  grid-area: OrdenacaoSection;
  z-index: 100;
  position: fixed;
  width: 53vw;
  height: 7vh;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

export const HomeCards = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 53vw;
  padding-top: 30px;
  min-height: 100vh;
`;

export const OptionHome = styled.select`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  background-color: var(--4);
  color: white;
  cursor: pointer;
`;
