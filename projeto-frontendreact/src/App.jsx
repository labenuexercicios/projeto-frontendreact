import { AppBox } from "./AppStyle";
import { Filters } from "./Components/Filters/Filter";
import { Home } from "./Components/ProductList/Home/Home";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import GlobalStyle from "./GlobalStyle";

function App() {
  console.log("DDDDDDDD");

  return (
    <>
      <GlobalStyle />
      <AppBox>
        <Filters />
        <Home />
        <Cart />
      </AppBox>
    </>
  );
}

export default App;
