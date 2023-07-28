import React from 'react'
import {GlobalStyle} from './GlobalStyle'
import {Main} from './Components/MainStyle'
import { Filters } from './Components/Filters/Filters'
import { Header } from './Components/Header/Header'
import { Home } from './Components/ProductList/Home/Home'
import { Cart } from './Components/ShoppingCart/Cart/Cart'
import { productList } from './assets/productList'
import { ProductCard } from './Components/ProductList/ProductCard/ProductCard'
import { useState } from 'react'


const App = () => {

const [valMin, setValMin] = useState(0)
const [valMax, setValMax] = useState(0)


const renderProduct = productList
.map((product, indice)=>{
  return <ProductCard key={indice} product={product}/>
})
  return (
    <>
    <GlobalStyle/>
    <Header/>
     <Main>
      <Filters  
       valMin={valMin} setValMin={setValMin} 
      valMax={valMax} setValMax={setValMax}
      />
      <Home renderProduct={renderProduct}/>
      <Cart/>
    </Main>
    </>
   
  )
}

export default App;