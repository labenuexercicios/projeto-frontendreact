import { useState } from "react"
import Filters from "./Components/Filters/Filters"
import { Container } from "./Components/Container/containerStyle"
import Home from "./Components/ProductList/Home/Home"
import ProductCard from "./Components/ProductList/ProductCard/ProductCard"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import Items from "./Components/ShoppingCart/Items/Items"
import { GlobalStyle } from "./globalStyle"







function App() {
  
  const [minFilter, setMinFilter] = useState('')
  const [maxFilter, setMaxFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [cart, setCart] = useState('')
  const [amount, setAmount] = useState('')

  return (
    <Container>
      <GlobalStyle />
      <Filters />
      <Home />
      <Cart />
    </Container>
  )
}

export default App
