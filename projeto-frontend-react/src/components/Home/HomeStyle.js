import { styled } from "styled-components";

export const HomeContainer = styled.div`
  border: solid 1px black;
  margin: 10px;
  padding: 10px;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95vh;
`;

export const HomeCabecalho = styled.div`
  /* border: solid 1px black;
    margin: 30px;
    padding: 10px; */
  display: flex;
  justify-content: space-around;
`;

export const HomeProdutos = styled.div`
  display: flex;
  justify-content: space-around;
  /* display: grid; */
  /* grid-template-columns: 33% 33% 33%; */
  width: 100%;
`;

// export const Produtos = styled.div`
//   width: 100%;
// `;
