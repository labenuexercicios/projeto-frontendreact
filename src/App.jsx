import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import categoriesDB from "../data/categories.json";
import productsDB from "../data/space-products.json";
import brandsDB from "../data/Brands.json";
import { Router } from "./Router/Router";
import { ContainerStyled } from "./GlobalStyle";
import { useState } from "react";

function App() {
  localStorage.setItem("categories", JSON.stringify(categoriesDB.categories));
  localStorage.setItem("products", JSON.stringify(productsDB.products));
  localStorage.setItem("brands", JSON.stringify(brandsDB.brands));

  const [shopingCartNumber, setShopingCartNumber] = useState(
    localStorage.getItem("shoppingcart") !== null
      ? JSON.parse(localStorage.getItem("shoppingcart")).reduce(
          (accumulator, currentValue) => accumulator + currentValue.quantity,
          0
        )
      : 0
  );

  return (
    <div className="App">
      <GlobalStyle />
      <ContainerStyled>
        <Header shopingCartNumber={shopingCartNumber} />
        <Router
          shopingCartNumber={shopingCartNumber}
          setShopingCartNumber={setShopingCartNumber}
        />
        <Footer />
      </ContainerStyled>
    </div>
  );
}

export default App;
