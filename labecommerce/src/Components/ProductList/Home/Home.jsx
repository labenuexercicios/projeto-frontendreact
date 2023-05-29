import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeDiv, HomeStyled, DivProducts } from "./HomeStyle";

function Home({
  productList,
  orderFilter,
  setOrderFilter,
  amount,
  setAmount,
  cart,
  setCart,
  minFilter,
  maxFilter,
  searchFilter,
}) {
  const handleOrderSearch = (e) => {
    setOrderFilter(e.target.value);
  };

  function addToCart(product) {
    // console.log(product, "o produto é isto");
    const addNewProduct = cart.find(
      (produtoCallBack) => product.id === produtoCallBack.id
    );

    if (addNewProduct === undefined) {
      product = { ...product, quantity: 1 };
      setCart([...cart, product]);
    } else {
      const newCart = cart.map((product) => {
        if (product.id === addNewProduct.id) {
          const totalValue = amount + product.value;
          setAmount(totalValue);
          return { ...addNewProduct, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
      setCart(newCart);
    }
  }
  // console.log(cart, "Carrinho de compras");
  console.log("Valor total", amount);
  return (
    <HomeStyled>
      <HomeDiv>
        <h3>Quantidade de produtos: {productList.length}</h3>
        <h3>
          Ordenação:
          <select onChange={handleOrderSearch} value={orderFilter}>
            <option value="">Ordenar</option>
            <option value="e">Crescente</option>
            <option value="f">Decrescente</option>
          </select>
        </h3>
      </HomeDiv>
      <DivProducts>
        {productList
          .sort((a, b) => {
            if (orderFilter === "e") {
              return a.value >= b.value ? 1 : -1;
            } else if (orderFilter === "f") {
              return a.value <= b.value ? 1 : -1;
            }
          })
          .map((productList) => {
            return (
              <ProductCard
                key={productList.id}
                productList={productList}
                adicionarAoCarrinho={addToCart}
              />
            );
          })}
      </DivProducts>
    </HomeStyled>
  );
}

export default Home;
