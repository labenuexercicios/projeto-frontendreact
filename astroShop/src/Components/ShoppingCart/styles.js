import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  padding: 12px;

  h1 {
    color: var(--color-text);
    text-align: center;
    margin-bottom: 50px;
  }

  p {
    color: var(--color-text);
  }

  img {
    width: 75px;
    height: 75px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const RemoveButton = styled.button`
  padding: 5px 10px;
  background-color: var(--color-error);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
    &:hover {
      background: red;
      transition: 0.3s;
  }
`;

export const CheckoutButton = styled.button`
  padding: 10px 20px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  &:hover {
    background-color: #2db653;
    color: #000;
    transition: 0.3s;
  }
`;