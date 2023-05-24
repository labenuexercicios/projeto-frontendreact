import { Filters } from "./Components/Filters/Filter";
import { Home } from "./Components/ProductList/Home/Home";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";

function App() {
  console.log("DDDDDDDD");

  return (
    <>
      <Filters />
      <Home />
      <Cart />
    </>
  );
}

export default App;
