import { useState } from "react";
import CartScreen from "./screens/Cart/CartScreen";
import ProdutcsScreen from "./screens/Products/ProductsScreen";
import Header from "./components/Header/Header"
import ProdutcCard from "./components/ProductCard/ProductCard";

function App() {

const [ cart, setCart ] = useState([])

const [ activeScreen, setActiveScreen ] = useState("ProductsScreen")

const [buscaNome, setBuscaNome] = useState("");



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

const increaseQuantityInCart = (productToIncrease) => {
  const newCart = [...cart]

  const productFound = newCart.find(
      (productInCart) => productInCart.id === productToIncrease.id
  )

  productFound.quantity++

  setCart(newCart)
}

const decreaseQuantityInCart = (productToDecrease) => {
  const newCart = [...cart]

  const productFound = newCart.find(
      (productInCart) => productInCart.id === productToDecrease.id
  )

  productFound.quantity--

  setCart(newCart)
}

const deleteFromCart = (productToDelete) => {
  const newCart = [...cart]

  const indexFound = newCart.findIndex(
      (productInCart) => productInCart.id === productToDelete.id
  )

  newCart.splice(indexFound, 1)
  setCart(newCart)
}




const renderScreen = () => {
  switch (activeScreen) {
    case "ProductsScreen":
      return <ProdutcsScreen  
      addToCart={addToCart}/>
    case "CartScreen":
      return <CartScreen  
      cart={cart} 
      increaseQuantityInCart={increaseQuantityInCart}
      decreaseQuantityInCart={decreaseQuantityInCart} 
      deleteFromCart={deleteFromCart}
      />
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
        buscaNome={buscaNome}
      />

     {renderScreen()}
      </>
  );
}
export default App;
