import React from "react";

// Style
import { GlobalStyled } from "./GlobalStyled";

// Components
import Cart from "./Components/Cart/Cart";
import CartMini from "./Components/CartMini/CartMini";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

// Hooks
import { useState, useEffect } from "react";

function App() {
  // States
  const [screen, setScreen] = useState(0);
  const [searchByName, setSearchByName] = useState("");
  const [priceOrder, setPriceOrder] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [maxPriceSearch, setMaxPriceSearch] = useState("");
  const [minPriceSearch, setMinPriceSearch] = useState("");
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart"))||[]);

  // Local Storage
  useEffect(() => {
    const cartSafeStorage = JSON.stringify(cart);
    if (cart.length > 0) {
      localStorage.setItem("cart", cartSafeStorage);
    }
  }, [cart]);

  // useEffect(() => {
  //   const cartString = localStorage.getItem("cart");
  //   const cartSafeStorage = JSON.parse(cartString);
  //   setCart(cartSafeStorage);
  // }, []);

  // Switch Screen Function
  const switchScreen = () => {
    switch (screen) {
      case 0:
        return (
          <div>
            <Home
              searchByName={searchByName}
              priceOrder={priceOrder}
              sortOrder={sortOrder}
              maxPriceSearch={maxPriceSearch}
              minPriceSearch={minPriceSearch}
              cart={cart}
              setCart={setCart}
            />
            <CartMini cart={cart} setCart={setCart} />
          </div>
        );
      case 1:
        return (
          <Cart
            cart={cart}
            setCart={setCart}
            screen={screen}
            setScreen={setScreen}
          />
        );
      case 2:
        return <Login />;
      case 3:
        return <Register />;
      default:
        <div>
          <Home
            searchByName={searchByName}
            priceOrder={priceOrder}
            sortOrder={sortOrder}
            maxPriceSearch={maxPriceSearch}
            minPriceSearch={minPriceSearch}
            cart={cart}
            setCart={setCart}
          />
          <CartMini cart={cart} setCart={setCart} />
        </div>;
    }
  };

  console.log(cart)
  return (
    <div>
      <GlobalStyled />
      <Header
        screen={screen}
        setScreen={setScreen}
        searchByName={searchByName}
        setSearchByName={setSearchByName}
        priceOrder={priceOrder}
        setPriceOrder={setPriceOrder}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        maxPriceSearch={maxPriceSearch}
        setMaxPriceSearch={setMaxPriceSearch}
        minPriceSearch={minPriceSearch}
        setMinPriceSearch={setMinPriceSearch}
      />
      {switchScreen()}
      <Footer />
    </div>
  );
}

export default App;
