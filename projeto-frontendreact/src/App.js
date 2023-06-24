import React from 'react'
import GlobalStyles from './GlobalStyle'
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import ProductCard from "./Components/ProductList/ProductCard/ProductCard"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import Items from "./Components/ShoppingCart/Items/Items"


const App = () => {
  return (
    <>
    <GlobalStyles />

    <div className="App">


      <Filters />

      <div>
      <Home />
      <ProductCard />
      </div>

      <div>
      <Cart />
      <Items />
      </div>

    </div>
    </>
  )
}

export default App