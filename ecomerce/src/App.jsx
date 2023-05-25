import Filter from './components/filters/Filter'
import Home from './components/productCard/home/home'
import Cart from './components/shoppingCart/cart/Cart'
import GlobalStyles from './GlobalStyles'
import { AppCaixa } from './appStyle'
import { productList } from './assents/productsList'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState("");
  const [amount, setAmount] = useState("");
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <>
      <GlobalStyles />
      <AppCaixa>
        <Filter />
        <Home productList={productList} />
        <Cart />
      </AppCaixa>
    </>
  )
}

export default App
