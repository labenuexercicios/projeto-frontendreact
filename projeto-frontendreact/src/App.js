import { useState } from "react";
import CartScreen from "./screens/Cart/CartScreen";
import ProdutcsScreen from "./screens/Products/ProductsScreen";
import Header from "./components/Header/Header"


function App() {

  const [ cart, setCart ] = useState([])

const [ activeScreen, setActiveScreen ] = useState("ProductsScreen")

const goToProductsScreen = () => setActiveScreen("ProductsScreen")
const goToCartScreen = () => setActiveScreen("CartScreen")


const addToCart = (productToAdd) => {
  const newCart = [...cart]


const productFound = newCart.find(
  (productInCart) => productInCart.id === productToAdd.id
  )

  if (!productFound) {
    const newProduct = {...productToAdd, quantity: 1}
    newCart.push(newProduct)
  } else {
    productFound.quantity++
  }


  setCart(newCart)
}


const renderScreen = () => {
  switch (activeScreen) {
    case "ProductsScreen":
      return <ProdutcsScreen  addToCart={addToCart} />
    case "CartScreen":
      return <CartScreen  cart={cart} />
    default:
      return <h1>Tela não encontrada</h1>
  }
}

  return (
    <>
    <Header 
      goToProductsScreen={goToProductsScreen}
      goToCartScreen={goToCartScreen}
      itemsInCart={cart.length}
    />
     {renderScreen()}
    </>
   
    )
    
    

}

export default App;
