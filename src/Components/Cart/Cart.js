import React from "react";
import { CartDisplay, CartCard } from "./styled";

export default function Cart({ cart, setCart, screen, setScreen }) {
  // Functions
  const handleRemoveAll = (index) => {
    setCart((remove) => remove.filter((_, i) => i !== index));
  };

  const handleRemoveOne = (product, id, index) => {
    if (product.amount === 1) {
      handleRemoveAll(index);
    } else {
      const newProduct = { ...product, amount: 1 };

      const cartItem = cart.find((item) => {
        return item.id === id;
      });

      if (cartItem) {
        const newCart = [...cart].map((item) => {
          if (item.id === id) {
            return { ...item, amount: cartItem.amount - 1 };
          } else {
            return item;
          }
        });
        setCart(newCart);
      } else {
        setCart([...cart, newProduct]);
      }
    }
  };

  const handleAddOne = (product, id) => {
    const newProduct = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const handleTotalPrice = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.amount, 0)
      .toLocaleString("en", {
        style: "currency",
        currency: "USD",
      });
  };

  return (
    <CartDisplay>
      <img
        src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
        alt="Back"
        width={"32px"}
        height={"32px"}
        value={screen}
        onClick={() => setScreen(0)}
      />
      {cart.map((product, index) => (
        <CartCard key={product.id}>
          <img src={product.image} alt={product.name} width={"32px"} />
          <p>{product.name}</p>
          <p>
            {product.price.toLocaleString("en", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <button onClick={() => handleAddOne(product, product.id)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32339.png"
              alt="Add One"
              width={"25px"}
            />
          </button>
          <p>{product.amount}</p>
          <button onClick={() => handleRemoveOne(product, product.id, index)}>
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828901.png"
              alt="Delete One"
              width={"25px"}
            />{" "}
          </button>
          <button onClick={() => handleRemoveAll(index)}>
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/542/542724.png"
              alt="Delete All"
              width={"25px"}
            />{" "}
          </button>
        </CartCard>
      ))}
      <h3>Total:{handleTotalPrice()}</h3>
    </CartDisplay>
  );
}
