import { useState } from "react";
import CartScreen from "./screens/CartScreen/CartScreen";
import MainPage from "./screens/MainPage/MainPage";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("MainPage");
  const [cart, setCart] = useState([])

  const goToMainPage = () => setActiveScreen("MainPage");
  const goToCartScreen = () => setActiveScreen("CartScreen");

  const addToCart = (productToAdd) => {
    const newCart = [...cart]

    const productInCart = newCart.find((productInCart) => productInCart.id === productToAdd.id)

    if(!productInCart){
      const newProduct = {...productToAdd, quantity: 1}
      newCart.push(newProduct)
    } else {
      productInCart.quantity++
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

    const indexFound = newCart.findIndex((productInCart) => productInCart.id === productToDelete.id)

    newCart.splice(indexFound, 1)
    setCart(newCart)
  }

  const renderScreen = () => {
    switch (activeScreen) {
      case "MainPage":
        return <MainPage goToCartScreen={goToCartScreen} addToCart={addToCart} itemsInCart={cart.length}/>;
      case "CartScreen":
        return <CartScreen goToMainPage={goToMainPage} cart={cart} increaseQuantityInCart={increaseQuantityInCart} decreaseQuantityInCart={decreaseQuantityInCart} deleteFromCart={deleteFromCart}/>;
      default:
        return <div>Tela não existe</div>;
    }
  };

  return (
    <>
      {renderScreen()}
    </>
  );
}