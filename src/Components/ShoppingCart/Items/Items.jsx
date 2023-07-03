import React from 'react';
import { ItemsContainer } from './ItemsStyle';
import xMarkImage from '../../img/x-mark.png';

export default function Items(props) {
  const { cartItem, onRemoveProductFromCart } = props;
  const totalValue = (cartItem.value * cartItem.quantity).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <ItemsContainer>
      <h3>{cartItem.quantity}x</h3>
      <h3>{cartItem.name}</h3>
      <h3> {totalValue}</h3>
      <img src={xMarkImage} alt="Remover" onClick={() => onRemoveProductFromCart(cartItem.id)} />
    </ItemsContainer>
  ); 
}
