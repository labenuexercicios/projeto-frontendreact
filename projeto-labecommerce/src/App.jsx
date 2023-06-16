import React from 'react'
import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home.jsx'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import { produtos } from './assets/ProductList'
import { MainContainer } from './AppStyle'

function App() {
  const [minFilter, setMinFilter] = React.useState('')
  const [maxFilter, setMaxFilter] = React.useState('')
  const [searchFilter, setSearchFilter] = React.useState('')
  const [cart, setCart] = React.useState([])
  // const [amount, setAmount] = React.useState('')

    console.log(maxFilter, minFilter, searchFilter)

    function handleClick() {
      console.log('click')
      setCart((prevCart) => [...prevCart, 'added']);
      
    }
  


  return (
    <MainContainer>
      <Filters 
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <Home 
        produtos={produtos}
        handleClick={handleClick}
        maxFilter={maxFilter}
        searchFilter={searchFilter}
      />
      <ShoppingCart 
        itemsCart={cart}
      />
    </MainContainer>
  )
}

export default App
