import React, { useState } from "react"
import { Filtros } from "./Componentes/Filtros"
import { Home } from "./Componentes/Home"
import { Cart } from "./Componentes/Carrinho"
import { Main} from "./styled"
import { Header } from "./Componentes/Header"
import { GlobalStyle } from "./GlobalStyle"
import { Products } from "./assents/productsList"





export default function App() {

  const [minFilter, onChangeMinFilter] = useState("")
  const [maxFilter, onChangeMaxFilter] = useState("")
  const [cart, onChangeCart] = useState("")
  const [amount, onChangeAmount] = useState("")


  return (

   
    <div>
      <GlobalStyle/>
      <Header />
      <Main>
      <Filtros/>
      
      <Home 
      Products={Products[0]}
      Products1={Products[1]}
      Products2={Products[2]}
      Products3={Products[3]}
      Products4={Products[4]}
      Products5={Products[5]}
      Products6={Products[6]}
      Products7={Products[7]}
      />
      <Cart/>
      </Main>
      
    </div>
  )
}
