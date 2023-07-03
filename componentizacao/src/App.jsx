import { useState } from "react";
import { Filters } from "./Components/Filters/Filters";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import { GlobalStyle } from "./GlobalStyle";
import { Home } from "./Components/ProductList/Home/Home";
import { ProductCard } from "./Components/ProductList/ProductCard/ProductCard";
import { productList } from "./assets/productlist";
import { Header } from "./Components/Header/Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const App = () => {

  const renderProduct = productList
 
  .map((product, id) => {
    return <ProductCard key={id} product={product} />;
  });

  return (
    <>
      <GlobalStyle />
      <Header/>
      <Container>
        <Filters />
        <Home renderProduct={renderProduct} />
        <Cart />
      </Container>
    </>
  );
};
export default App;
