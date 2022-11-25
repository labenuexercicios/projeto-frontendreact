import React from "react"
import { Filters } from "./components/Filters/Filters"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Search } from "./components/Search/Search"
import { Text } from "./components/Text/Text"
import { GlobalStyle } from "./globalStyle"

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Search/>
      <Text/>
      <Filters/>
      <Footer/>
    </div>
  )
}

export default App
