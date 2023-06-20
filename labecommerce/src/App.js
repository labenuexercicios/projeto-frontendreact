import React from 'react'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import ProductCard from './Components/ProductList/ProductCard/ProductCard'
import Cart from './Components/ShoppingCart/Cart/Cart'
import Items from './Components/ShoppingCart/Items/Items'

const App = () => {
  return (
    <div>
      <Filter/>
      <Home/>
      <ProductCard/>
      <Cart/>
      <Items/>
    </div>
  )
}

export default App