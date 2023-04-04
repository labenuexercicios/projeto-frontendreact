import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState((
    JSON.parse(localStorage.getItem("cartItems")) || []
  ))

  

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  /* const addToCart = (product, price) => {
    const newCartItems = ([...cartItems, { product, price }]);
    setCartItems(newCartItems)
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  }; */

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};