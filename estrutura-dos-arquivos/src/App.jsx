import Filters from "./Components/Filters/Filters"
import Main from "./Components/Main/Main"
import Home from "./Components/ProductList/Home/Home"
import ProductCard from "./Components/ProductList/ProductCard/ProductCard"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import Items from "./Components/ShoppingCart/Items/Items"


function App() {

  return (
    <Main>
      <Filters />
      <Home />
      <Cart />
    </Main>
  )
}

export default App
