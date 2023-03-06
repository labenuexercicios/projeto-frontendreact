/* import { useState } from 'react' */
import Header from './Components/Header/Header'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { Application, GlobalStyled } from './GlobalStyled'
import { ProductsList } from './Assents/ProductsList'
import { useState } from 'react'


function App() {

  const [minFilter, setMinFilter] = useState('')
  const [maxFilter, setMaxFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState('')
  const [cartValue, setCartValue] = useState('')
  const [totalValue, setTotalValue] = useState('')

  return (
    <>
      <GlobalStyled />
      <div>
        <Header />
        <Application>
          <Filter
            minFilter={minFilter}
            setMinFilter={setMinFilter}
            maxFilter={maxFilter}
            setMaxFilter={setMaxFilter}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
          <Home
            amount={amount}
            setAmount={setAmount}
            cartValue={cartValue}
            setCartValue={setCartValue}
            totalValue={totalValue}
            setTotalValue={setTotalValue}
            cart={cart}
            setCart={setCart}
            productsList={ProductsList}
          />
          <Cart
            amount={amount}
            setAmount={setAmount}
            cartValue={cartValue}
            setCartValue={setCartValue}
            totalValue={totalValue}
            setTotalValue={setTotalValue}
            cart={cart}
            setCart={setCart}
            productsList={ProductsList}
          />
        </Application>
      </div>
    </>
  )
}

export default App
