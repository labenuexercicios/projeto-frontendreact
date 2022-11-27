import React, { useState }  from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import ProductPage from './Pages/Product/ProductPage';
// import {Router} from './Router/Router';
import camisetas from './camisetas.json'
import CartPage from './Pages/Cart/CartPage';

function App() {

  const [inputHeader, setInputHeader] = useState("")
  const [inputMinPrice, setInputMinPrice] = useState(-Infinity)
  const [inputMaxPrice, setInputMaxPrice] = useState(Infinity)
  const [sortByPrice, setSortByPrice] = useState("")
  const [activePage, setActivePage] = useState("ProductPage")
  const [cart, setCart] = useState([])

  const goToProductPage = () => setActivePage("ProductPage")
  const goToCartPage = () => setActivePage ("CartPage")

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

const renderPage = () => {
  switch (activePage) {
    case "ProductPage":
      return <ProductPage
      camisetas={camisetas}
      inputHeader={inputHeader}
      inputMaxPrice={inputMaxPrice}
      inputMinPrice={inputMinPrice}
      sortByPrice={sortByPrice}
      />
    case "CartPage":
      return <CartPage
      camisetas={camisetas}
      />
    default:
      return <div>Tela não existe</div>    
  }
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
    goToCartPage={goToCartPage}
    goToProductPage={goToProductPage}
    itensInCart = {cart.length}
    cart={cart}
    setCart={setCart}
    />
    {renderPage()}
    {/* <Router
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
    /> */}
    <Footer/>
  </>
  )
}

export default App;
