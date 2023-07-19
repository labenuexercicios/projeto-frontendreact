import React from 'react';
import Items from '../Items/Items';
import {
  CartContainer,
  TotalValue,
CartItem, 
CartItemImage, 
CartItemName, 
CartItemPrice, 
CartItemQuantity, 
CartItems, CartTitle, TotalPrice,

} from './cartStyle';

const Cart = ({ cart, setCart, totalValue }) => {
    const getTotalQuantity = () => {
      return cart.reduce((total, item) => total + item.quantity, 0);
    };
  
    const getTotalPrice = () => {
      return cart.reduce((total, item) => total + (item.value * item.quantity), 0);
    };
  
    const handleRemoveItem = (itemId) => {
      setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

  return (
  
    <CartContainer>
      <CartTitle>Carrinho de Compras</CartTitle>
      <CartItems>
        {cart.map(item => (
          <CartItem key={item.id}>
            <CartItemImage src={item.image} alt={item.name} />
            <CartItemName>{item.name}</CartItemName>
            <CartItemPrice>R$ {item.value.toFixed(2)}</CartItemPrice>
            <CartItemQuantity>Quantidade: {item.quantity}</CartItemQuantity>
            <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
          </CartItem>
        ))}
      </CartItems>
      <TotalPrice>Valor Total: R$ {getTotalPrice().toFixed(2)}</TotalPrice>
      <p>Quantidade Total de Produtos: {getTotalQuantity()}</p>
    </CartContainer>
  );
};




export default Cart
