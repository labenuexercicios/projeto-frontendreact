
import { GlobalStyle, GeneralContainerStyled } from "./GlobalStyle";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer"
import Filters from "./components/filters/Filters";
import CartContainer from "./components/cartContainer/cartContainer";
import toys from "./assets/toys.json";

const removeItemFromCart = (cart, itemId) =>
  cart.filter(item => item.ID !== itemId);
const getTotalPrice = (cart, quantities) => {
  return cart.reduce((total, item) => total + (item.Price * quantities[item.ID]), 0);
}

const App = () => {
  const [cart, setCart] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [filterSort, setFilterSort] = useState("");
  const [filterPriceMin, setFilterPriceMin] = useState("");
  const [filterPriceMax, setFilterPriceMax] = useState(Infinity);
  const [showCart, setShowCart] = useState(false);
  const initialQuantities = cart.reduce((x, item) => {
    x[item.ID] = 1;
    return x;
  }, {});
  const [quantityById, setQuantityById] = useState(initialQuantities);
  const [changeElement, setChangeElement] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [quantityById, cart]);

  useEffect(() => {
    if (cart.length > 0) {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("quantityById", JSON.stringify(quantityById));
    }
    }, [cart, quantityById]);
    
    useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    const quantityStorage = localStorage.getItem("quantityById");
    if(cartStorage) {
    const cartData = JSON.parse(cartStorage);
    const quantityData = JSON.parse(quantityStorage);
    if (Array.isArray(cartData) && typeof quantityData === "object") {
    setCart(cartData);
    setQuantityById(quantityData);
    }
    }
    }, []);


  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.Price * quantityById[item.ID];
    });
    setTotalPrice(total);
  };

  const change = x => setChangeElement(x);
  const removeItem = itemId => {
    setCart(removeItemFromCart(cart, itemId));
    setQuantityById({ ...quantityById, [itemId]: 0 });
  };
  const incrementQuantity = itemId =>
    setQuantityById(prevQuantities => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  const decrementQuantity = itemId =>
    setQuantityById(prevQuantities => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[itemId] > 1) {
        newQuantities[itemId]--;
      }
      return newQuantities;
    });
  const handleClick = (toy, cart, setCart, incrementQuantity) => {
    let found = false;
    let newCart = cart.map(item => {
      if (item.ID === toy.ID) {
        found = true;
      }
      return item;
    });
    if (!found) {
      incrementQuantity(toy.ID);
      newCart.push(toy);
      setCart(newCart);
    }
  };

  const render = () => {
    switch (changeElement) {
      case 1:
        return (
          <>
            <Filters
              filterByName={filterByName} setFilterByName={setFilterByName}
              filterSort={filterSort} setFilterSort={setFilterSort}
              filterPriceMin={filterPriceMin} setFilterPriceMin={setFilterPriceMin}
              filterPriceMax={filterPriceMax} setFilterPriceMax={setFilterPriceMax}
              change={change}
            />

            <Main
              filterByName={filterByName} setFilterByName={setFilterByName}
              filterSort={filterSort} setFilterSort={setFilterSort}
              filterPriceMin={filterPriceMin} setFilterPriceMin={setFilterPriceMin}
              filterPriceMax={filterPriceMax} setFilterPriceMax={setFilterPriceMax}
              cart={cart} setCart={setCart}
              incrementQuantity={incrementQuantity}
              handleClick={handleClick}
              toys={toys}
            />
            <Footer />
          </>

        );
      case 2:
        return (
          <>
            <CartContainer
              cart={cart} setCart={setCart}
              quantityById={quantityById} setQuantityById={setQuantityById}
              removeItem={removeItem}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              totalPrice={totalPrice}
              change={change} />
          </>

        );
    }
  }


  return (
    <GeneralContainerStyled>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
      <GlobalStyle />
      <Header
        cart={cart} setCart={setCart}
        showCart={showCart} setShowCart={setShowCart}
      />
      {render()}
    </GeneralContainerStyled>
  );
}

export default App;