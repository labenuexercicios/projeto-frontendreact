import { useState } from "react";
import ProductsScreen from "./Screens/Products/ProductsScreen"
import CartScreen from "./Screens/Carts/CartScreen";
import Header from ".//Components/Header/Header"



function App() {
  const [activeScreen, setActiveScreen] = useState("ProductsScreen")
  const [cart, setCart] = useState([])


  const goToProductsScreen = () => setActiveScreen("ProductsScreen")
  const goToCartScreen = () => setActiveScreen("CartScreen")

  const addToCart = (addProduct) => {
    const newCart = [...cart]

const productFound = newCart.find(
  (productInCart)=> productInCart.id === addProduct.id)

if (!productFound){
  const newProduct = {...addProduct, quantity:1}
  newCart.push(newProduct)
}else {
  productFound.quantity++
}
   setCart(newCart)
 }


 const increaseQuantityInCart = (productToIncrease ) => {
    const newCart = [...cart]
    const productFound = newCart.find(
      (productInCart)=> productInCart.id === productToIncrease.id)

      productFound.quantity++

      setCart(newCart)
 }

 
 const decreaseQuantityInCart = (productToDecrease) => {
  const newCart = [...cart]

  const productFound = newCart.find(
    (productInCart)=> productInCart.id === productToDecrease.id)
    
    productFound.quantity--

    setCart(newCart)

 }

  const renderScreen = () => {
    switch (activeScreen) {
      case "ProductsScreen":
        return <ProductsScreen addToCart={addToCart}
        />
      case "CartScreen":
        return <CartScreen 
        cart={cart}
        decreaseQuantityInCart={decreaseQuantityInCart}
        increaseQuantityInCart={increaseQuantityInCart}
        />
      default:
        return <div>Tela não existe</div>

    }
  }

  return (
    <>
      <Header
        goToCartScreen={goToCartScreen}
        goToProductsScreen={goToProductsScreen}
        itensCart={cart.length}

      />
      {renderScreen()}


    </>
  )
}

export default App;
