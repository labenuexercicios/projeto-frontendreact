import Filters from "./Components/Filters/Filters"
import Main from "./Components/Main/Main"
import Home from "./Components/ProductList/Home/Home"
import ProductCard from "./Components/ProductList/ProductCard/ProductCard"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import Items from "./Components/ShoppingCart/Items/Items"
import { GlobalStyle } from "./globalStyle"
import productList from "./Components/assents/productsList"



function App() {
  
 
  return (
    <Main>
      <GlobalStyle/>
      <Filters />
      <Home productList id={productList.id} name={productList.name} value={productList.value} imageUrl={productList.imageUrl} />
      <Cart/>
    </Main>
  )
}

export default App
