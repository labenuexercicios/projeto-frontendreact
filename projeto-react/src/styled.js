import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  padding: 16px;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  flex-grow: 1;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 40px;
`;

export const ProductContainer = styled.section`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
`;
