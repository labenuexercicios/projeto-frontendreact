import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeBoxStyled, HomeCardsBox, HomeLabelBox } from "./HomeStyle";

export default function Home({
  productList,
  amount,
  setAmount,
  cart,
  setCart,
  sortedList,
  setSortedList
}) {
  const [ordination, setOrdination] = useState("null");
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

  useEffect(() => {
    sortedList.sort((a,b) => {
      if(ordination === "Decrescente"){

        if(a.name < b.name){
          return -1;
        }
        if(a.name > b.name){
          return 1
        }
        return 0
      }else if(ordination === "Crescente"){
        if(a.name > b.name){
          return -1;
        }
        if(a.name < b.name){
          return 1
        }
        return 0
      }
      return 0
    })
    setSortedList([...sortedList])
  }, [ordination])


  return (
    <HomeBoxStyled>
      <HomeLabelBox>
        <span>Quantidade de produtos: {productQuantity}</span>
        <label>
          Ordenação:
          <select
            value={ordination}
            onChange={(e)=>setOrdination(e.target.value)}
          >
            <option value="null" disabled></option>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </label>
      </HomeLabelBox>
      <HomeCardsBox>{renderProducts}</HomeCardsBox>
    </HomeBoxStyled>
  );
}

