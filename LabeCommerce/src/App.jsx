import Filter from "./Components/Filters";
import Home from "./Components/ProductList/Home";
import Cart from "./Components/ShoppingCart/Cart";
import { Wrapper } from "./App.styled.jsx";
import Product from "./assets/productList";

function App() {
  
  return (
    <>
      <Wrapper>

        <Filter />
        <Home Produto={Product} />
        <Cart />
        

      </Wrapper>
    </>
  );
}

export default App;
