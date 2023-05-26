import Filter from './components/filters/Filter'
import Home from './components/productCard/home/Home'
import Cart from './components/shoppingCart/cart/Cart'
import GlobalStyles from './GlobalStyles'
import { AppCaixa } from './appStyle'
import { productList } from './assents/productsList'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState("");
  const [amount, setAmount] = useState("");
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <>
      <GlobalStyles />
      <AppCaixa>
        <Filter
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          productList={productList}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
        <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
      </AppCaixa>
    </>
  )
}

export default App
