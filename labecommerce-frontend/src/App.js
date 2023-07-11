import Home from "./components/home/Home"
import Filter from "./components/filter/Filter"
import Cart from "./components/cart/Cart"
import { useEffect, useState } from "react"
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color: white;
`

function App() {
  const [cart, setCart] = useState([])
  const [order, setOrder] = useState("crescente")
  const [valueMax, setValueMax] = useState(0)
  const [valueMin, setValueMin] = useState(0)
  const [searchName, setSearchName] = useState("")

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])
  useEffect(() => {
    const cartLocalStorage = localStorage.getItem("cart")
    if (cartLocalStorage) {
      setCart(JSON.parse(cartLocalStorage))
    }
  }, [])

  return (
    <MainContainer className="App">
      <Filter
        order={order} setOrder={setOrder}
        setValueMax={setValueMax}
        setValueMin={setValueMin}
        setSearchName={setSearchName}
      />
      <Home
        cart={cart} setCart={setCart}
        order={order}
        valueMin={valueMin}
        valueMax={valueMax}
        searchName={searchName}
      />
      <Cart
        cart={cart} setCart={setCart}
      />
    </MainContainer>
  )
}

export default App