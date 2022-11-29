import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import { Filters } from "./components/Filters/Filters"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Search } from "./components/Search/Search"
import { Text } from "./components/Text/Text"
import { GlobalStyle } from "./globalStyle"
import {Div} from './style'

function App() {

  return (
    <ChakraProvider>
      <GlobalStyle/>
      <Header/>
      <Search/>
      <Div>
        <Text/>
        <Filters/>
      </Div>
      <Footer/>
    </ChakraProvider>
  )
}

export default App
