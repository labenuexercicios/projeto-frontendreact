import React from "react"
import { Header } from "./components/Header/Header"
import { Search } from "./components/Search/Search"
import { GlobalStyle } from "./globalStyle"

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Search/>
    </div>
  )
}

export default App
