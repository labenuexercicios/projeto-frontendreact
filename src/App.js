import { useState } from "react";
import Header from "./components/header/Header";
import CartScreen from "./screens/cart/CartScreen";
import ProductsScreen from "./screens/products/ProductsScreen";




function App() {
  const [activeScreen, setActiveScreen] = useState("ProductsScreen");
  const [cart, setCart] = useState([]);

  const goToProductsScreen = () => setActiveScreen("ProductsScreen");
  const goToCartScreen = () => setActiveScreen("CartScreen");

  const addToCart = (productToAdd) => {
    const newCart = [...cart];

    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToAdd.id
    );
    if (!productFound) {
      const newProduct = { ...productToAdd, quantity: 1 };
      newCart.push(newProduct);
    }else{
      productFound.quantity++
    }

    setCart(newCart);
  };

  const increaseQuantityInCart= (productToIncrease) =>{
    const newCart = [...cart];

    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToIncrease.id
    );
    productFound.quantity++

    setCart(newCart)
  }

  const decreaseQuantityInCart= (productToDecrease) =>{
    const newCart = [...cart];

    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToDecrease.id
    );
    productFound.quantity--
    setCart(newCart)
  }

  


  const renderScreen = () => {
    switch (activeScreen) {
      case "ProductsScreen":
        return (
          <ProductsScreen
            goToCartScreen={goToCartScreen}
            addToCart={addToCart}
          />
        );
      case "CartScreen":
        return (
          <CartScreen 
          cart={cart} 
          goToProductsScreen={goToProductsScreen} 
          decreaseQuantityInCart={decreaseQuantityInCart}
          increaseQuantityInCart={increaseQuantityInCart}
          />
        );
      default:
        return <div>tela nao existe</div>;
    }
  };

  return (
    <>
      <Header
        goToProductsScreen={goToProductsScreen}
        goToCartScreen={goToCartScreen}
        itemInCart={cart.length}
      />
      {renderScreen()}
    </>
  );
}

export default App;
