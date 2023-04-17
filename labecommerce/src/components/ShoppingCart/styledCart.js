import styled from 'styled-components';

export const ShoppingCartContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
  text-align: center;
  color: white;
  font-family: 'PT Mono', monospace;
`;

export const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`
export const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

  p {
    margin: 0;
    font-weight: bolder;
    font-family: 'PT Mono', monospace;
  }
`

export const CartIcon = styled.img`
    height: 80px;
    
`
