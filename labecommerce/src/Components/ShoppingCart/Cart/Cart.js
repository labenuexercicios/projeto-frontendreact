import React, { useEffect } from 'react';

// import Items from '../Items/Items';
import {
  CartContainer,
  // TotalValue,
  CartItem, 
  // CartItemImage, 
  CartItemName, 
  CartItemPrice, 
  CartItemQuantity, 
  CartItems, CartTitle, TotalPrice,

} from './cartStyle';
import {MdDelete, MdShoppingCart} from 'react-icons/md';

const Cart = ({ cart, setCart, totalValue }) => {

    useEffect(() => {
    
     const savedCart = localStorage.getItem('cart');
      if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

    useEffect(() => {
    // Salva a lista de itens no carrinho no Local Storage sempre que o estado do carrinho é atualizado
     localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

    const getTotalQuantity = () => {
      return cart.reduce((total, item) => total + item.quantity, 0);
    };
    

    const getTotalPrice = () => {
      return cart.reduce((total, item) => total + (parseFloat(item.value) * item.quantity), 0);
    };
     //Está função removia todos os itens
    // const handleRemoveItem = (itemId) => {
    //   setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    // };

    // Esta função remove um item por vez
    const handleRemoveOneItem = (itemId) => {
      setCart(prevCart => {
        const updatedCart = prevCart.map(item => {
          if (item.id === itemId) {
            if (item.quantity === 1) {
              return null; // Remove o item do carrinho se a quantidade for 1
            } else {
              return { ...item, quantity: item.quantity - 1 }; // Diminui a quantidade do item
            }
          }
          return item;
        }).filter(Boolean);
        return updatedCart;
      });
    };
 
  return (
  
    <CartContainer>
      <CartTitle><MdShoppingCart size={28}/></CartTitle>
      <CartItems>
        {cart.map(item => (
          <CartItem key={item.id}>
            {/* <CartItemImage src={item.image} alt={item.name} /> */}
            <CartItemName>{item.name}</CartItemName>
            <CartItemPrice>R$ {parseFloat(item.value).toFixed(2)}</CartItemPrice>
            <CartItemQuantity>Qtd: {item.quantity}</CartItemQuantity>
            <button onClick={() => handleRemoveOneItem(item.id)}><MdDelete size={28}/></button>
          </CartItem>
        ))}
      </CartItems>
      <TotalPrice>Valor Total: R$ {parseFloat(getTotalPrice()).toFixed(2)}</TotalPrice>
      <p>Quantidade Total de Produtos: {getTotalQuantity()}</p>
    </CartContainer>
  );
};

// parseFloat converte string em um valor de número com casas décimais


export default Cart
