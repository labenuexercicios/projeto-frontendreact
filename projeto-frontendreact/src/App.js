/* import { useState } from 'react' */
import Header from './Components/Header/Header'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { GlobalStyled } from './GlobalStyled'
import { ProductsList } from './Assents/ProductsList'
import { useState } from 'react'


function App() {

  const [minFilter, setMinFilter] = useState('')
  const [maxFilter, setMaxFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [cart, setCart] = useState('')
  const [amount, setAmount] = useState('')
  
  return (
    <>
    <GlobalStyled/>
    <div>
      <Header />
      <div className="App">
        <Filter />
        <Home
        productList = {ProductsList.length}
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
