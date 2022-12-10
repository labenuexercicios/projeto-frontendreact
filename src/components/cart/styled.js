import styled from "styled-components";

export const CartItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 14px;
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    button {
      font-size: 10px;
      font-weight: bold;
      color: white;
      background-color: #e30b21;
      height: 18px;
      width: 17px;
      border: none;
      border-radius: 10px;
    }
  }
`;

export const TotalValue = styled.div`
  display: flex;
  justify-self: flex-end;
`;
