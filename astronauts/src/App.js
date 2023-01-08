import React, { useState, useEffect } from "react";
import { GlobalStyled, Container, FixedMenu } from "./GlobalStyled";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Slide } from "./components/Slide";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { ShoppingCart } from "./components/ShoppingCart";
import product from "./data";

function App() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [order, setOrder] = useState("");
  const [minPrice, setMinPrice] = useState(-Infinity);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [dropDown, setDropDown] = useState(false);

  // Function for show or hide the Shopping Cart.
  const showShoppingCart = () => {
    setDropDown(!dropDown);
  };

  //Hook that stores the array of products that were inserted in the cart.
  const [cartProducts, setCartProducts] = useState([]);

  //Function for get the data from Shopping Cart stored in the browser.
  const getCartProducts = () => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if (cartProducts.length > 0) {
      setDropDown(true);
      return setCartProducts(cartProducts);
    }
  };

  useEffect(() => {
    getCartProducts();
  }, []);

  // UseEffect saves the data from Shopping Cart stored in the browser.
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  //Receives a product and change the quantity.
  const changeQty = (findProduct, operation) => {
    const newShoppingCart = cartProducts.map((item) => {
      if ((item === findProduct) & (operation === "sum")) {
        return { ...item, quantity: item.quantity + 1 };
      }
      if (
        (item === findProduct) &
        (operation === "dec") &
        (item.quantity > 1)
      ) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartProducts(newShoppingCart);
  };

  //Function that adds items to the cart on click.
  const addProduct = (product) => {
    const findProduct = cartProducts.find((item) => item.key === product.key);
    // if product is already in the shopping cart.
    if (findProduct) {
      changeQty(findProduct, "sum");
    } else {
      //If product is not in the shopping cart.
      const productsAdded = [...cartProducts, { ...product, quantity: 1 }];
      setCartProducts(productsAdded);
    }
    setDropDown(true);
  };

  return (
    <div>
      <GlobalStyled />
      <Container>
        <FixedMenu>
          <Header
            setName={setName}
            dropDown={dropDown}
            setDropDown={setDropDown}
            showShoppingCart={showShoppingCart}
            setType={setType}
          />
          {dropDown && (
            <ShoppingCart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              changeQty={changeQty}
              showShoppingCart={showShoppingCart}
            />
          )}
          <NavBar
            setType={setType}
            setOrder={setOrder}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
        </FixedMenu>
        <Slide />
        <Main
          products={product}
          type={type}
          order={order}
          name={name}
          minPrice={minPrice}
          maxPrice={maxPrice}
          addProduct={addProduct}
        />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
