import React, { useState } from "react"
import { Filtros } from "./Componentes/Filtros"
import { Home } from "./Componentes/Home"
import { Cart } from "./Componentes/Carrinho"
import { Main} from "./styled"
import { Header } from "./Componentes/Header"
import { GlobalStyle } from "./GlobalStyle"
import { Products } from "./assents/productsList"





export default function App() {

  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState("")
  const [order, setOrder] =useState("")





  const onChangeOrder=(event)=>{

    setOrder(event.target.value)
  }

  const onChangeMinFilter=(event)=>{
  setMinFilter(event.target.value)
  }

  const onChangeSearchFilter = (event)=>{
    setSearchFilter(event.target.value)
  }

  const onChangeMaxFilter=(event)=>{
    setMaxFilter(event.target.value)
  }

  const onChangeCart=(event)=>{
    setCart(event.target.value)
  }

  const onChangeAmount=(event)=>{
    setAmount(event.target.value)
  }

 


  return (

   
    <div>
      <GlobalStyle/>
      <Header />
      <Main>
      <Filtros
      minFilter = {minFilter}
      onChangeMinFilter = {onChangeMinFilter}
      maxFilter = {maxFilter}
      onChangeMaxFilter = {onChangeMaxFilter}
      searchFilter = {searchFilter}
      onChangeSearchFilter = {onChangeSearchFilter}
      AllProducts = {Products}
      setSearchFilter = {setSearchFilter}
      
      />
      
      <Home   
      order = {order}
      onChangeOrder = {onChangeOrder}
      cart = {cart}
      setCart = {setCart}
      searchFilter = {searchFilter}
      maxFilter = {maxFilter}
      minFilter = {minFilter}
      AllProducts = {Products}
      > 
      
      
      </Home>


      <Cart
      cart = {cart}
      onChangeCart = {onChangeCart}
      amount = {amount}
      setAmount = {setAmount}
      setCart = {setCart}
      onChangeAmount = {onChangeAmount}
      AllProducts = {Products}
      />
      </Main>
      
    </div>
  )
}
