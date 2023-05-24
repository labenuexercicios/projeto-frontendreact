import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filter from './components/filters/Filter'
import Home from './components/productCard/home/home'
import Cart from './components/shoppingCart/cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Filter/>
      <Home/>
      <Cart/>
      
    </>
  )
}

export default App
