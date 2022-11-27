import React, { useState }  from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import ProductPage from './Pages/Product/ProductPage';
import {Router} from './Router/Router';
import camisetas from './camisetas.json'

function App() {

  const [inputHeader, setInputHeader] = useState("")
  const [inputMinPrice, setInputMinPrice] = useState(-Infinity)
  const [inputMaxPrice, setInputMaxPrice] = useState(Infinity)
  const [sortByPrice, setSortByPrice] = useState("")
  const [cart, setCart] = useState([])

  const addToCart = (productToAdd) => {
    const newCart = [...cart]

    const productFound = newCart.find((productInCart)=>productInCart.id === productToAdd.id)

    if (!productFound){
      const newProduct = {...productToAdd, quantity: 1}
      newCart.push(newProduct)
    } else {
      productFound.quantity ++
    }
    setCart(newCart)
}

const increaseQuantityInCart = (productToIncrease) => {
  const newCart = [...cart]
  const productFound = newCart.find((productInCart)=>productInCart.id === productToIncrease.id)
  productFound.quantity ++
  setCart(newCart)
}

const decreaseQuantityInCart = (productToDecrease) => {
  const newCart = [...cart]
  const productFound = newCart.find((productInCart)=>productInCart.id === productToDecrease.id)
  productFound.quantity --
  setCart(newCart)
}


  return (
  <>
    <Header
    inputHeader={inputHeader}
    setInputHeader={setInputHeader}
    inputMinPrice = {inputMinPrice}
    setInputMinPrice = {setInputMinPrice}
    inputMaxPrice = {inputMaxPrice}
    setInputMaxPrice = {setInputMaxPrice}    
    sortByPrice = {sortByPrice}
    setSortByPrice = {setSortByPrice}
    itensInCart = {cart.length}
    cart={cart}
    setCart={setCart}
    />
    <ProductPage
    camisetas={camisetas}
    inputHeader={inputHeader}
    inputMaxPrice={inputMaxPrice}
    inputMinPrice={inputMinPrice}
    sortByPrice={sortByPrice}/>
    <Router
    path="/"
    inputHeader={inputHeader}
    setInputHeader={setInputHeader}
    inputMinPrice = {inputMinPrice}
    setInputMinPrice = {setInputMinPrice}
    inputMaxPrice = {inputMaxPrice}
    setInputMaxPrice = {setInputMaxPrice}    
    sortByPrice = {sortByPrice}
    setSortByPrice = {setSortByPrice}
    cart={cart}
    camisetas={camisetas}
    setCart={setCart}
    addToCart={addToCart}
    increaseQuantityInCart={increaseQuantityInCart}
    decreaseQuantityInCart={decreaseQuantityInCart}
    />
    <Footer/>
  </>
  )
}

export default App;
