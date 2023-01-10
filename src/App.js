import React, { useState } from "react";
import ProductScreen from "./screen/products/ProductsScreen";
import CartScreen from "./screen/carrinho/CartScreen";
import Header from "./components/Header/Header";

function App() {
  const [activeScreen, setActiveScreen] = useState("ProductsScreen");

  const [cart, setCart] = useState([]);

  const [filterText, setFilterText] = useState("");

  const [order, setOrder] = useState("asc");

  const [priceOrder, setPriceOrder] = useState("asc");

  

  const goToProductsScreen = () => {
    setActiveScreen("ProductsScreen");
  };
  const goToCartScreen = () => {
    setActiveScreen("CartScreen");
  };

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
    localStorage.setItem("cart", newCart);
  };

  const increaseQuantityInCart = (productToIncrease) => {
    const newCart = [...cart];
    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToIncrease.id
    );

    productFound.quantity++;
    setCart(newCart);
    localStorage.setItem("cart", newCart);
  };
  const decreaseQuantityInCart = (productToDecrease) => {
    const newCart = [...cart];
    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToDecrease.id
    );

    productFound.quantity--;
    setCart(newCart);
    localStorage.setItem("cart", newCart);
  };
  const deleteItemFromCart = (productToDelete) => {
    const newCart = [...cart];
    const indexFound = newCart.findIndex(
      (productInCart) => productInCart.id === productToDelete.id
    );
    newCart.splice(indexFound, 1);
    setCart(newCart);
    localStorage.setItem("cart", newCart);
  };

  const onChangeFilterText = (e) => {
    setFilterText(e.target.value);
  };
  const onChangeOrder = (event) => {
    setOrder(event.target.value);
  };

  const onChangePriceOrder = (event) => {
    setPriceOrder(event.target.value);
  };
  const renderScreen = () => {
    switch (activeScreen) {
      case "ProductsScreen":
        return (
          <ProductScreen
            filterText={filterText}
            order={order}
            priceOrder={priceOrder}
            addToCart={addToCart}
            setOrder={setOrder}
            setPriceOrder={setPriceOrder}
          />
        );

      case "CartScreen":
        return (
          <CartScreen
            increaseQuantityInCart={increaseQuantityInCart}
            decreaseQuantityInCart={decreaseQuantityInCart}
            deleteItemFromCart={deleteItemFromCart}
            cart={cart}
          />
        );

      default:
        return <div>tela nao existe</div>;
    }
  };
  return (
    <>
      <Header
        filterText={filterText}
        order={order}
        priceOrder={priceOrder}
        goToProductsScreen={goToProductsScreen}
        goToCartScreen={goToCartScreen}
        onChangeFilterText={onChangeFilterText}
        onChangeOrder={onChangeOrder}
        onChangePriceOrder={onChangePriceOrder}
      />

      {renderScreen()}
    </>
  );
}
export default App;
