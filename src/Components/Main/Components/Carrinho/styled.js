import styled from "styled-components";

export const Carrinho = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  border: 1px solid black;
  margin-top: 9vh;
  background-color: white;
  color: black;
  width: auto;
  min-height: 140vh;
`;

export const ItemStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  height: 15vh;
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
  width: 10vh;
  height: 10vh;
  border-radius: 100px;
`;

export const CarrinhoGap = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  gap: 10px;
  align-items: center;
`;

export const ListStyle = styled.ul`
  list-style-type: none;
`;
