import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import categoriesDB from "../data/categories.json";
import productsDB from "../data/space-products.json";
import ShoppingCartDB from "../data/shoppingCart.json";
import brandsDB from "../data/Brands.json";
import { Router } from "./Router/Router";
import { useEffect } from "react";
import { ContainerStyled } from "./GlobalStyle";

function App() {
  localStorage.setItem("shoppingcart", JSON.stringify(ShoppingCartDB.products));
  localStorage.setItem("categories", JSON.stringify(categoriesDB.categories));
  localStorage.setItem("products", JSON.stringify(productsDB.products));
  localStorage.setItem("brands", JSON.stringify(brandsDB.brands));

  return (
    <div className="App">
      <GlobalStyle />
      <ContainerStyled>
        <Header />
        <Router />
        <Footer />
      </ContainerStyled>
    </div>
  );
}

export default App;
