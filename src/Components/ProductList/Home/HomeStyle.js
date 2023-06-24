import styled from "styled-components";

export const HomeArticle = styled.article`
  display: grid;
  grid-column: 2/3;
  grid-row:2/9;
  padding: 5px;
  border: 2px solid white;
  width: 100%;
  background-color: white;
  height:100vh;
`;

export const OrdenacaoSection = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: yellow;

`;

export const HomeCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: #ff7989;
`;

export const OptionHome = styled.option`
  display: flex;
  background-color:green;
`;
