import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 35%;
  gap: 10px;
  padding-left: 20px;
`;
export const Favorite = styled.img`
  width: 30px;
  height: 30px;
`;
export const ShoppingCart = styled.img`
  width: 30px;
  height: 30px;
`;
export const CountShoppingCart = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  align-self: flex-start;
  justify-self: flex-start;
  font-size: smaller;
  font-weight: bold;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ShoppingCartConteiner = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
