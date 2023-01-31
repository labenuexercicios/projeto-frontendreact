import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import categoriesDB from "../data/categories.json";
import { Router } from "./Router/Router";
import productsDB from "../data/space-products.json";
import { useEffect } from "react";
import { ContainerStyled } from "./GlobalStyle";

function App() {
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categoriesDB.categories));
    localStorage.setItem("products", JSON.stringify(productsDB.products));
  }, []);

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
