import { AppStyle } from "./AppStyle";
import { Filters } from "./Components/Filters/Filters";
import { Home } from "./Components/ProductList/Home/Home";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import { productList } from "./Components/Assents/productsList";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <Filters />
      <Home productList={productList}/>
      <Cart />
    </AppStyle>
  );
}

export default App;
