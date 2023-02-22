/* import { useState } from 'react' */
import Header from './Components/Header/Header'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { GlobalStyled } from './GlobalStyled'



function App() {

  return (
    <>
    <GlobalStyled/>
    <div>
      <Header />
      <div className="App">
        <Filter />
        <Home />
        <Cart />
      </div>
    </div>
    </>
  )
}

export default App
