import React from 'react'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import GlobalStyle,{PageStyle} from './globalStyles'
import productsList from './assents/productsList';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    
    <>
      <GlobalStyle/>
      <Header/>
      <PageStyle>
        <Filter/>
        <Home products={productsList}/>
        <Cart/>
        
      </PageStyle>
      
      <Footer/>
     
    </>
  )
}

export default App