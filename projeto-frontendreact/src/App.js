/* import { useState } from 'react' */
import Header from './Components/Header/Header'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { GlobalStyled } from './GlobalStyled'
import { ProductsList } from './Assents/ProductsList'



function App() {

  return (
    <>
    <GlobalStyled/>
    <div>
      <Header />
      <div className="App">
        <Filter />
        <Home
        productsList1 = {ProductsList[0]}
        productsList2 = {ProductsList[1]}
        productsList3 = {ProductsList[2]}/>
        <Cart />
      </div>
    </div>
    </>
  )
}

export default App
