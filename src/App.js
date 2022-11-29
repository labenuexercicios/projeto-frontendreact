import React, { useState }  from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import ProductPage from './Pages/Product/ProductPage';
import camisetas from './camisetas.json'
import CartPage from './Pages/Cart/CartPage';
import {CartPageStyle, FinalCart} from "./App.styled"
import astroCart  from './assets/astro-pensante.png'
import {priceFormatter} from './utils/priceFormatter'


function App() {

  const [inputHeader, setInputHeader] = useState("")
  const [inputMinPrice, setInputMinPrice] = useState(-Infinity)
  const [inputMaxPrice, setInputMaxPrice] = useState(Infinity)
  const [sortByPrice, setSortByPrice] = useState("")
  const [activePage, setActivePage] = useState("ProductPage")
  const [cart, setCart] = useState([])


  const goToProductPage = () => setActivePage("ProductPage")
  const goToCartPage = () => setActivePage ("CartPage")

  const addToCart = (productToAdd, size) => {
    const newCart = [...cart]

    const productFound = newCart.find((productInCart)=>productInCart.id === productToAdd.id && productInCart.cartSize === size)

    if (!productFound){
      const newProduct = {...productToAdd, cartSize: size, quantity: 1}
      newCart.push(newProduct)
    } else {
      console.log(productFound.cartSize)
      if(productFound.cartSize === size){
        console.log("entrou")
        productFound.quantity ++
      } else {
        console.log("entrou no else 2")
        const newProduct = {...productToAdd, cartSize: size, quantity: 1}
        newCart.push(newProduct) 
      }
      // productFound.quantity ++
      // if(!productFound.cartSize.includes(size)){
      //   productFound.cartSize.push(size)
      // }
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
  if(productToDecrease.quantity > 1){
    const newCart = [...cart]
    const productFound = newCart.find((productInCart)=>productInCart.id === productToDecrease.id)
    productFound.quantity --
    setCart(newCart)
  } 
}

const removeProductCart = (productToRemove) =>{
  const newCart = [...cart]
  const productRemove = newCart.find ((productInCart)=> productInCart.id === productToRemove.id)
  const productRemoveIndex = newCart.findIndex ((productInCart)=> productInCart.id === productToRemove.id)
  console.log(productRemove)
  newCart.splice(productRemoveIndex, 1)
  setCart(newCart)
}

const total = cart.reduce((acc,product)=> (product.price * product.quantity) + acc, 0)

const frete = total*0.05

const totalQuantity = cart.reduce((acc,product)=> (product.quantity) + acc, 0)
const renderPage = () => {
  switch (activePage) {
    case "ProductPage":
      return <ProductPage
      camisetas={camisetas}
      inputHeader={inputHeader}
      inputMaxPrice={inputMaxPrice}
      inputMinPrice={inputMinPrice}
      sortByPrice={sortByPrice}
      addToCart={addToCart}
      />
    case "CartPage":
      return <CartPageStyle><CartPage
      increaseQuantityInCart={increaseQuantityInCart}
      decreaseQuantityInCart={decreaseQuantityInCart}
      cart={cart}
      removeProductCart={removeProductCart}
      />
      <FinalCart> 
        <img src={astroCart} alt="Astrounauta Pensando"/>
        <div>
        <h3>Quantidade total: <br/> <h1>{totalQuantity}</h1></h3>
        <h3>Valor total: <br/> <h1>{priceFormatter.format(total)}</h1></h3>
        <h3>Frete: {priceFormatter.format(frete)}</h3>
        <button>Finalizar Compra</button>
        </div>
      </FinalCart>
      </CartPageStyle>
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
    <Footer/>
  </>
  )
}

export default App;
