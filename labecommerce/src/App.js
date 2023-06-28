import React from 'react'
import { useState } from 'react'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import GlobalStyle,{PageStyle} from './globalStyles'
import productsList from './assents/productsList';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import InfoProdutos from './Components/ProductList/InfoProdutos/InfoProdutos'



function App  () {
  // const [searchFilter, setSearchFilter] = useStates ('');

  return (
    
    <>
      <GlobalStyle/>
      <Header/>
      <InfoProdutos/>
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