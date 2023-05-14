
import React from 'react'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { Container } from './AppStyle'




export default function App() {
  
    return (
      <Container>
        <Filter />
        <Home />
        <Cart />
      </Container>

    
    
    )
}




