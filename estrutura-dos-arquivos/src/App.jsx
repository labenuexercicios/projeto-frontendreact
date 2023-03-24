import { Main } from "./Components/Container/containerStyle"
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import { GlobalStyle } from "./GlobalStyle"
import productList from "./Components/assents/productsList"
import { useState } from "react"








function App() {
  const [minFilter, setMinFilter] = useState(-Infinity)
  const [maxFilter, setMaxFilter] = useState(+ Infinity)
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState([])
  const [searchFilter, setSearchFilter] = useState('')
  const [product] = useState(productList)
  const [ordination, setOrdination] = useState("")

  function currencyBrazil(value, symbol) {
    if (!value) return null
    if (symbol) {
      return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }


  return (
    <>
      
      <Main>

        <GlobalStyle />
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          product={product}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          ordination={ordination}
          setOrdination={setOrdination}
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          currencyBrazil={currencyBrazil}



        />
        <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          product={product}
          currencyBrazil={currencyBrazil}

        />
      </Main>
    </>
  )
}

export default App
