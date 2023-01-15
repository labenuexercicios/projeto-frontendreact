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

export const MainHome = styled.div`
  width: 82vw;
  height: auto;
  margin-top: 9vh;
  margin-left: 9vw;
`;

// STYLE DO CARRINHO
export const StyleCarrinho = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  margin-top: 9vh;
  background-color: white;
  color: black;
  width: 24vw;
  height: auto;
`;

export const MainStyle = styled.main`
  display: flex;
  justify-content: center;
  margin: 20px;
  gap: 20px;
  flex-wrap: wrap;
  height: auto;
`;