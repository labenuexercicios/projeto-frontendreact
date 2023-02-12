import styled from "styled-components";

export const CartMiniDisplay = styled.aside`
  position: fixed;
  right: 0;
  top: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  min-height: 10rem;
  width: 20rem;
  margin-right: 22px;
  padding: 10px;
  min-height: 200px;
`;

export const CartContainer = styled.div`
  min-height:200px;
`;

export const CartCard = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  justify-items: start;
  padding: 5px 0;
`;

export const CartItemValue = styled.div`
    width: 150px;
    margin-left: 5px;
`;

export const CartItemInteraction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 5px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 1rem;
`;

export const CartButtonAmount = styled.button`
  border: 1px solid black;
  padding: 5px;
  border-radius: 10rem;
  &:hover {
    filter: contrast(70%);
    transition: all 1s;
  }
`;

export const CartTotalPrice = styled.h3`
  justify-self: end
`;
