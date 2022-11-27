import styled from "styled-components";

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  padding: 16px;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
`;

export const MainContainer = styled.div`
  flex-grow: 1;
  background-color: #f3f3f3;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 40px;
  margin-top: 15vh;
  margin-bottom: 70px;
`;

export const ProductContainer = styled.section`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
`;
