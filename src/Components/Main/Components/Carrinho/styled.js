import styled from "styled-components";

export const Carrinho = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const ListStyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2px;
`;

export const ItemStyle = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 7.5vw;
  color: black;
  background-color: lightgrey;
  text-align: center;
`;

export const ButtonStyle = styled.button`
  border: 1px solid black;
  background-color: grey;
  color: white;
  border-radius: 20px;
  width: 6vw;
  height: 1.5vw;
  background-color: red;
`;

export const ImgStyle = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

export const CarrinhoGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

