import { useState } from 'react'
import Header from './Components/Header/Header'
import Filter from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'

function App() {

  return (
    <div className="App">
      <Header />
      <Filter />
      <Home />
      <Cart />
    </div>
  )
}

export default App
