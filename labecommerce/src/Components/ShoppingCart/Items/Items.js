import React from 'react';
import {
  ItemsContainer,
  ItemName,
  ItemQuantity,
  RemoveButton
} from './itemsStyle';

const Items = ({ cart, onRemoveItem }) => {
  return (
    <ItemsContainer>
      {cart.map(item => (
        <div key={item.id}>
          <ItemName>{item.name}</ItemName>
          <ItemQuantity>Quantidade: {item.quantity}</ItemQuantity>
          <RemoveButton onClick={() => onRemoveItem(item.id)}>
            Remover
          </RemoveButton>
        </div>
      ))}
    </ItemsContainer>
  );
};

export default Items;
