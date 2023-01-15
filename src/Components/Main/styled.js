import styled from "styled-components";

// CODIGO PARA MAIN HOME SEM CARRINHO
export const MainSpace = styled.main`
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  height: auto;
`;

// DAQUI PRA BAIXO É PRODUTO
export const DivProdutos = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 15vw;
  background-color: white;
  border-radius: 5px;
  color: black;
  border: 1px solid black;
  gap: 10px;
  height: 38vh;
`;

export const ImagemProduto = styled.img`
  width: 22vh;
  height: 20vh;
`;

export const EstiloLista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const MainStyle = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin-top: 7vw;
  margin-left: 7vw;
  gap: 2vw;
  width: auto;
  height: 100vh;
`;
