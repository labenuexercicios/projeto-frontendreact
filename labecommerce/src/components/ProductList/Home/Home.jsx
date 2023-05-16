import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeBoxStyled, HomeCardsBox, HomeLabelBox } from "./HomeStyle";

export default function Home({
  productList,
  amount,
  setAmount,
  cart,
  setCart,
}) {
  const [ordination, setOrdination] = useState("");

  let productQuantity = 0;

  const addItensOnCart = (receivedProduct) => {
    if (cart.length === 0) {
      setCart([...cart, { ...receivedProduct, quantity: 1 }]);
      setAmount(Number(amount) + Number(receivedProduct.price));
    } else {
      cart.map((myProduct) => {
        if (myProduct.id === receivedProduct.id) {
          myProduct.quantity = Number(myProduct.quantity) + 1;
          setCart([...cart]);
          setAmount(Number(amount) + Number(receivedProduct.price));
        } else if (
          !cart.some((item) => {
            return Object.values(item).includes(receivedProduct.id);
          })
        ) {
          setCart([...cart, { ...receivedProduct, quantity: 1 }]);
          setAmount(Number(amount) + Number(receivedProduct.price));
        }
      });
    }
    receivedProduct = "";
  };

  const renderProducts = productList.map((product) => {
    productQuantity++;

    return <ProductCard product={product} addItensOnCart={addItensOnCart} key={product.id}/>;
  });

  const changeSelection = (e) => {
    console.log("change")
    setOrdination(e.target.value)
  }

 
  const onChangeHandler = (e) => {
    changeSelection(e)
  }

  return (
    <HomeBoxStyled>
      <HomeLabelBox>
        <span>Quantidade de produtos: {productQuantity}</span>
        <label>
          Ordenação:
          <select
            value={ordination}
            onChange={onChangeHandler}
          >
            <option value={"Crescente"}>Crescente</option>
            <option value={"Decrescente"}>Decrescente</option>
          </select>
        </label>
      </HomeLabelBox>
      <HomeCardsBox>{renderProducts}</HomeCardsBox>
    </HomeBoxStyled>
  );
}

