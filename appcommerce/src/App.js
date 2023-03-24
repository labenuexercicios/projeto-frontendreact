import React, { useState, useEffect } from "react";
import { GlobalStyled } from "./GlobalStyle";
import styled from "styled-components";

import Home from "./pages/Home/index";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails/index";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Purchased from "./pages/Purchased";
import Contact from "./pages/ContactPage";
import MenuMobile from "./components/MenuMobile";
import ProductCard from "./components/ProductCard";
import ShoppingCart from "./components/ShoppingCart";

import { products } from "./assets/products.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const [screen, setScreen] = useState(1);
  const [titleCategory, setTitleCategory] = useState("Produtos");
  const [arrayProducts, setArrayProducts] = useState(products);
  const [productDetail, setProductDetail] = useState("");
  const [lowestPrice, setLowestPrice] = useState(0);
  const [biggestPrice, setBiggestPrice] = useState(10000);
  const [ordination, setOrdination] = useState("");
  const [search, setSearch] = useState("");
  const [cartIsOpen, setCartIsOpen] = useState("-120%");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [total, setTotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState("-120%");

  const handleScreen = (number) => setScreen(number);
  const handleTitleCategory = (title) => setTitleCategory(title);
  const handleArrayProducts = (array) => setArrayProducts(array);
  const handleSearch = (e) => setSearch(e.target.value);

  useEffect(() => {
    const totalAmount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.value * currentItem.amount;
    }, 0);
    setTotal(totalAmount);
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart]);

  const addProductToDetails = (product) => {
    setProductDetail(product);
  };

  const addProductCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const newArrayProducts = [
    ...arrayProducts.filter((product) => {
      return product.value <= biggestPrice && product.value >= lowestPrice;
    }),
  ];

  const rocketsCategory = products.filter((product) => {
    return product.category === "Foguetes";
  });

  const spaceshipsCategory = products.filter((product) => {
    return product.category === "Naves Espaciais";
  });

  const shuttlesCategory = products.filter((product) => {
    return product.category === "Space Shuttle";
  });

  const productsRender = () =>
    newArrayProducts
      .sort((a, b) => {
        switch (ordination) {
          case "lowest-price":
            return a.value - b.value;
          case "biggest-price":
            return b.value - a.value;
          case "a-z":
            return a.name.localeCompare(b.name);
          case "z-a":
            return b.name.localeCompare(a.name);
          default:
            return arrayProducts;
        }
      })
      .map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            addProductCart={addProductCart}
            setCartIsOpen={setCartIsOpen}
            handleScreen={handleScreen}
            addProductToDetails={addProductToDetails}
          />
        );
      });

  const showScreen = () => {
    if (
      screen === 2 ||
      screen === 3 ||
      screen === 4 ||
      screen === 5 ||
      screen === 6 ||
      screen === 7
    ) {
      window.scrollTo({
        top: 0,
      });
    }

    switch (screen) {
      case 1:
        return (
          <Home
            products={products}
            handleArrayProducts={handleArrayProducts}
            productsRender={productsRender}
            handleScreen={handleScreen}
            titleCategory={titleCategory}
            handleTitleCategory={handleTitleCategory}
            rocketsCategory={rocketsCategory}
            spaceshipsCategory={spaceshipsCategory}
            shuttlesCategory={shuttlesCategory}
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            lowestPrice={lowestPrice}
            setLowestPrice={setLowestPrice}
            biggestPrice={biggestPrice}
            setBiggestPrice={setBiggestPrice}
            ordination={ordination}
            setOrdination={setOrdination}
            newArrayProducts={newArrayProducts}
            setCartIsOpen={setCartIsOpen}
            itemAmount={itemAmount}
            setMenuMobileIsOpen={setMenuMobileIsOpen}
          />
        );
      case 2:
        return (
          <CategoryPage
            products={products}
            handleArrayProducts={handleArrayProducts}
            productsRender={productsRender}
            handleScreen={handleScreen}
            titleCategory={titleCategory}
            handleTitleCategory={handleTitleCategory}
            rocketsCategory={rocketsCategory}
            spaceshipsCategory={spaceshipsCategory}
            shuttlesCategory={shuttlesCategory}
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            lowestPrice={lowestPrice}
            setLowestPrice={setLowestPrice}
            biggestPrice={biggestPrice}
            setBiggestPrice={setBiggestPrice}
            ordination={ordination}
            setOrdination={setOrdination}
            newArrayProducts={newArrayProducts}
            setCartIsOpen={setCartIsOpen}
            itemAmount={itemAmount}
            setMenuMobileIsOpen={setMenuMobileIsOpen}
          />
        );
      case 3:
        return (
          <Contact
            products={products}
            handleArrayProducts={handleArrayProducts}
            handleScreen={handleScreen}
            handleTitleCategory={handleTitleCategory}
            rocketsCategory={rocketsCategory}
            spaceshipsCategory={spaceshipsCategory}
            shuttlesCategory={shuttlesCategory}
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            setLowestPrice={setLowestPrice}
            setBiggestPrice={setBiggestPrice}
            setOrdination={setOrdination}
            setCartIsOpen={setCartIsOpen}
            itemAmount={itemAmount}
            setMenuMobileIsOpen={setMenuMobileIsOpen}
          />
        );
      case 4:
        return (
          <Login
            products={products}
            handleArrayProducts={handleArrayProducts}
            handleScreen={handleScreen}
            handleTitleCategory={handleTitleCategory}
            rocketsCategory={rocketsCategory}
            spaceshipsCategory={spaceshipsCategory}
            shuttlesCategory={shuttlesCategory}
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            setLowestPrice={setLowestPrice}
            setBiggestPrice={setBiggestPrice}
            setOrdination={setOrdination}
            setCartIsOpen={setCartIsOpen}
            itemAmount={itemAmount}
            setMenuMobileIsOpen={setMenuMobileIsOpen}
          />
        );
      case 5:
        return (
          <Register
            products={products}
            handleArrayProducts={handleArrayProducts}
            handleScreen={handleScreen}
            handleTitleCategory={handleTitleCategory}
            rocketsCategory={rocketsCategory}
            spaceshipsCategory={spaceshipsCategory}
            shuttlesCategory={shuttlesCategory}
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            setLowestPrice={setLowestPrice}
            setBiggestPrice={setBiggestPrice}
            setOrdination={setOrdination}
            setCartIsOpen={setCartIsOpen}
            itemAmount={itemAmount}
            setMenuMobileIsOpen={setMenuMobileIsOpen}
          />
        );
      case 6:
        return (
          <ProductDetails
            products={products}
            handleArrayProducts={handleArrayProducts}
            handleScreen={handleScreen}
            handleTitleCategory={handleTitleCategory}
            rocketsCategory={rocketsCategory}
            spaceshipsCategory={spaceshipsCategory}
            shuttlesCategory={shuttlesCategory}
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            setLowestPrice={setLowestPrice}
            setBiggestPrice={setBiggestPrice}
            setOrdination={setOrdination}
            setCartIsOpen={setCartIsOpen}
            itemAmount={itemAmount}
            setMenuMobileIsOpen={setMenuMobileIsOpen}
            addProductCart={addProductCart}
            productDetail={productDetail}
          />
        );
      case 7:
        return (
          <Purchased
            products={products}
            handleArrayProducts={handleArrayProducts}
            handleScreen={handleScreen}
            handleTitleCategory={handleTitleCategory}
            rocketsCategory={rocketsCategory}
            spaceshipsCategory={spaceshipsCategory}
            shuttlesCategory={shuttlesCategory}
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            setLowestPrice={setLowestPrice}
            setBiggestPrice={setBiggestPrice}
            setOrdination={setOrdination}
            setCartIsOpen={setCartIsOpen}
            itemAmount={itemAmount}
            setMenuMobileIsOpen={setMenuMobileIsOpen}
          />
        );
      default:
        return "Página não encontrada!";
    }
  };

  return (
    <Container>
      <GlobalStyled />
      <ShoppingCart
        handleScreen={handleScreen}
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
        cart={cart}
        setCart={setCart}
        total={total}
        addProductCart={addProductCart}
      />
      <MenuMobile
        products={products}
        handleArrayProducts={handleArrayProducts}
        handleScreen={handleScreen}
        handleTitleCategory={handleTitleCategory}
        rocketsCategory={rocketsCategory}
        spaceshipsCategory={spaceshipsCategory}
        shuttlesCategory={shuttlesCategory}
        setLowestPrice={setLowestPrice}
        setBiggestPrice={setBiggestPrice}
        setOrdination={setOrdination}
        menuMobileIsOpen={menuMobileIsOpen}
        setMenuMobileIsOpen={setMenuMobileIsOpen}
      />
      {showScreen()}
    </Container>
  );
};

export default App;