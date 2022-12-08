import styled from "styled-components"; 

export const Container = styled.header`
display: flex;
align-items: center;
height: 10vh;

`

export const Cart = styled.img`
width: 50px;
height: 50px;
position: absolute;
top: 10px;
right: 0;
z-index: 2;

`;

export const CartButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;