import React from "react"
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
    </div>
  )
}

export default App
