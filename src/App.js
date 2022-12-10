import { useState } from "react";
import Header from "./components/header/Header";
import CartScreen from "./screens/cart/CartScreen";
import ProductsScreen from "./screens/products/ProductsScreen";

function App() {
  const [activeScreen, setActiveScreen] = useState("ProductsScreen");
  const [cart, setCart] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterOrder, setFilterOrder] = useState(1);

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
    } else {
      productFound.quantity++;
    }

    setCart(newCart);
  };

  const increaseQuantityInCart = (productToIncrease) => {
    const newCart = [...cart];

    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToIncrease.id
    );
    productFound.quantity++;

    setCart(newCart);
  };

  const decreaseQuantityInCart = (productToDecrease) => {
    const newCart = [...cart];

    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToDecrease.id
    );
    productFound.quantity--;
    setCart(newCart);
  };

  const deleteCardProduct = (productToDelete) => {
    const newCart = [...cart];

    const indexFound = newCart.findIndex(
      (productInCart) => productInCart.id === productToDelete.id
    );
    newCart.splice(indexFound, 1);
    setCart(newCart);
  };

  const onChangeFilterText = (e) => {
    setFilterText(e.target.value);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case "ProductsScreen":
        return (
          <ProductsScreen
            goToCartScreen={goToCartScreen}
            addToCart={addToCart}
            filterText={filterText}
          />
        );
      case "CartScreen":
        return (
          <CartScreen
            deleteCardProduct={deleteCardProduct}
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
        onChangeFilterText={onChangeFilterText}
      />
      {renderScreen()}
    </>
  );
}

export default App;
