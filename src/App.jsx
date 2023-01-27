import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import categoriesDB from "../data/categories.json";
import productsDB from "../data/space-products.json";
import { useState } from "react";

function App() {
  const [pageFlow, setPageFlow] = useState("promotions");

  return (
    <div className="App">
      <GlobalStyle />
      <Header
        pageFlow={pageFlow}
        setPageFlow={setPageFlow}
        categories={categoriesDB.categories}
      />
      <Main
        pageFlow={pageFlow}
        setPageFlow={setPageFlow}
        categories={categoriesDB.categories}
        products={productsDB.products}
      />
      <Footer />
    </div>
  );
}

export default App;
