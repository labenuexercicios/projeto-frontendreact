import React from 'react'
import Filter from './Components/Filters'
import Home from './Components/ProductList/Home'
import ProductCard from './Components/ProductList/ProductCard'
import Cart from './Components/ShoppingCart/Cart'
import Items from './Components/ShoppingCart/Items'

function App() {


  return (
    <>
      <div>
        <Filter/>
        <Home/>
        <ProductCard/>
        <Cart/>
        <Items/>

      </div>
   
    </>
  )
}

export default App
