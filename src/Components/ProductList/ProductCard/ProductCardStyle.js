import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  align-self: center;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-self: center;

  p {
    margin: 2px 0;
  }
`;

export const ProductName = styled.div`
  align-self: center;
  margin: 3px;
`;

export const ProductPrice = styled.div`
  align-self: center;
  margin: 3px;
`;

export const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 5px;
  background-color: #0D1F41;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
`;
