import { useState } from "react"
import Filters from "./Components/Filters/Filters"
import { Container } from "./Components/Container/containerStyle"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import { GlobalStyle } from "./globalStyle"


function App() {

  const [minFilter, setMinFilter] = useState('')
  const [maxFilter, setMaxFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
 
  const onChangeMinFilter = (e) => {
    setMinFilter(e.target.value)
  }
  const onChangeMaxFilter = (e) => {
    setMaxFilter(e.target.value)
  }
  const onChangeSearchFilter = (e) => {
    setSearchFilter(e.target.value)
  }
  //console.log(minFilter, maxFilter, searchFilter)
  
  return (
    <Container>
      <GlobalStyle />
      <Filters
        minFilter={minFilter}
        onChangeMinFilter={onChangeMinFilter}
        maxFilter={maxFilter}
        onChangeMaxFilter={onChangeMaxFilter}
        searchFilter={searchFilter}
        onChangeSearchFilter={onChangeSearchFilter}
      />
      <Home/>
      <Cart />
    </Container>
  )
}

export default App
