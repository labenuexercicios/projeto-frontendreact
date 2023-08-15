import React from 'react';
import styled from 'styled-components'

export const CartContainer = styled.div`
  padding-top:20%;
  width: 80%;
  /* background-color: #f9f9f9; */
  margin-left:-18%;
  /* border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  
`;

// s

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
 
`;

export const CartTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  
`;
export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 10px;
`;
export const CartItemName = styled.div`
  font-size: 18px;
  font-weight: bold;
  flex: 1;
`;
export const CartItemPrice = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding-right:4px;
`;
export const CartItemQuantity = styled.div`
  font-size: 16px;
  color: #888;

`;
export const CartItems = styled.div`
`;

export const TotalPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;
