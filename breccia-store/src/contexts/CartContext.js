import { useEffect, createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newProduct = { ...product, amount: 1 };
    const cartProduct = cart.find((item) => {
      return item.id === id;
    });
    if (cartProduct) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartProduct.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  console.log(cart);
  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
