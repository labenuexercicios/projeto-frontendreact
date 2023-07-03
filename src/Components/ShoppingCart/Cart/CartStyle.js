import styled from 'styled-components';

export const ShoppingCartContainer = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CartListContainer = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 5px;
`;

export const CartTitle = styled.h2`
  color: white;
  margin-left: 20px;
  transform: translateY(-10px);
  margin-bottom: 20px;
  margin-left: 1200px;
`;

export const CartIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  transform: translateY(8px);
`;

export const CartTotal = styled.h3`
  color: white;
  margin-top: -10px;
  margin-left: 1200px;
  transform: translateY(5px);
`;

export const CartCheckout = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 150px;
  margin-top: 10px;
  margin-bottom: -15px;
  transform: translateY(15px);
  cursor: pointer;
`;
