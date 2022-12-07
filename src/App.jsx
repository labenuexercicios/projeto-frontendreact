import { ChakraProvider } from "@chakra-ui/react"
import React, { useState } from "react"
import { Cart } from "./components/Cart/Cart"
import { Filters } from "./components/Filters/Filters"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { MainContent } from "./components/MainContent/MainContent"
import { Search } from "./components/Search/Search"
import { Text } from "./components/Text/Text"
import { GlobalStyle } from "./globalStyle"
import {Div, Main} from './style'

function App() {

  const [search, setSearch] = useState('')
  const [minValue, setMinValue] = useState('')
  const [maxValue, setMaxValue] = useState('')

  const [saleCart, setSaleCart] = useState([])
  
  function addToCart(id, nave, price){
    const itemObject = {id, nave, price}
    const cloneCart = [...saleCart, itemObject]
    setSaleCart(cloneCart)
    console.log(saleCart)
  }

  function removeToCart(clickedItemId){
    const filterCard = saleCart.filter((cardItem)=>{
      return saleCart.indexOf(cardItem) !== clickedItemId
    })
    setSaleCart(filterCard)
  }

  return (
    <ChakraProvider>
      <GlobalStyle/>
      <Header/>
      <Search search={search} setSearch={setSearch}/>
      <Div>
        <Text/>
        <Main>
          <Filters minValue={minValue} setMinValue={setMinValue}
          maxValue={maxValue} setMaxValue={setMaxValue}/>
          <MainContent search={search} minValue={minValue}
          maxValue={maxValue} addToCart={addToCart} 
          />
          <Cart saleCart = {saleCart} removeToCart={removeToCart}/>
        </Main>
      </Div>
      <Footer/>
    </ChakraProvider>
  )
}

export default App
