import React from 'react'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import GlobalStyle,{PageStyle} from './globalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle/>

      <PageStyle>
        <Filter/>
        <Home/>
        <Cart/>
        
    </PageStyle>
    </>
  )
}

export default App