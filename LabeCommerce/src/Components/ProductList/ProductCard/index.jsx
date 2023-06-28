
import React from "react";
import { ShoppingBag } from "lucide-react";
import { CardContainer, Price, Name } from "./style.js";

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

      <Name>{item.name}</Name>
      <div>
        <Price>{item.value}</Price>
        <button
          onClick={() => {
            addCart(item);
          }}
        >
          <ShoppingBag />
        </button>
      </div>
    </CardContainer>
  ));
}
