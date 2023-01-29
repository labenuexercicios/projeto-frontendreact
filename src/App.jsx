import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import categoriesDB from "../data/categories.json";
import { Router } from "./Router/Router";
import productsDB from "../data/space-products.json";

function App() {
  localStorage.setItem("categories", JSON.stringify(categoriesDB.categories));
  localStorage.setItem("products", JSON.stringify(productsDB.products));

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
