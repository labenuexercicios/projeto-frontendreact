/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { CardContainer } from "./style.jsx";

export default function ProductCard(props) {
  const { Products, setCart, cart } = props;

  const addCart = (products) => {
    const newProduct = cart.find((item) => item.id === products.id);
    if (!newProduct) {
      setCart([...cart, { ...products, quantity: 1 }]);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === products.id) {
          return { ...newProduct, quantity: newProduct.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  return Products.map((item) => (
    <CardContainer key={item.id}>
      <div>
        <img src={item.imageUrl} alt="Imagem do Produto" />
      </div>

      <p>{item.name}</p>
      <div>
        <p>{item.value}</p>
        <button
          onClick={() => {
            addCart(item);
          }}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </CardContainer>
  ));
}
