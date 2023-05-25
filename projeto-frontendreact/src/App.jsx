import { AppBox } from "./AppStyle";
import { Filters } from "./Components/Filters/Filter";
import { Home } from "./Components/ProductList/Home/Home";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import GlobalStyle from "./GlobalStyle";
import { productList } from "./assents/productList";

function App() {
  console.log(productList);

  return (
    <>
      <GlobalStyle />
      <AppBox>
        <Filters />
        <Home Listadeproduto={productList} />
        <Cart />
      </AppBox>
    </>
  );
}

export default App;
