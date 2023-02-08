import NavBar from "./components/NavBar/NavBar"
import { Router } from "./routes/Router"
import { Footer } from "./components/Footer/Footer"
import { ContextGlobal } from "./context/ContextGlobal"
import { useState } from "react";


function App() {
  const [search, setSearch] = useState("")
  const [orderPrice, setOrderPrice] = useState()
  const [category, setCategory] = useState()
  const [valueMin, setValueMin] = useState()
  const [valueMax, setValueMax] = useState()
  const [cart, setCart] = useState([])

  const context = {
    search: search,
    setSearch: setSearch,
    orderPrice: orderPrice,
    setOrderPrice: setOrderPrice,
    category: category,
    setCategory: setCategory,
    valueMin: valueMin,
    setValueMin: setValueMin,
    valueMax: valueMax,
    setValueMax: setValueMax,
    cart: cart,
    setCart: setCart
  }

  return (
    <div>
      <ContextGlobal.Provider value={context}>
        <header>
          <NavBar />
        </header>
        <main>
          <Router />
        </main>
        <Footer />
      </ContextGlobal.Provider>
    </div>
  )
}

export default App;
