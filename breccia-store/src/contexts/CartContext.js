import { useEffect, createContext, useState, useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { setOpen, handleClose } = useContext(SidebarContext);

  const addToCart = (product, id) => {
    setOpen(true);
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

  const removeProduct = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    handleClose();
  };

  const plusAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  const menusAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeProduct(id);
    }
  };

  const cartAmount = (cart) => {
    let totalAmount = 0;
    cart.map((item) => {
      totalAmount += item.amount;
    });
    return totalAmount;
  };

  const subTotal = (cart) => {
    let totalPrice = 0;
    cart.map((item) => {
      totalPrice += item.price * item.amount;
    });
    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeProduct,
        clearCart,
        plusAmount,
        menusAmount,
        cartAmount,
        subTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
