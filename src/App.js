import { useState, useEffect } from "react";
import { ProductsList } from "./Components/Assents/ProductsList";
import Filters from "./Components/Filters/Filters";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { GlobalStyle, MainContainer } from "./GlobalStyle";

function App() {
  const [product, setProduct] = useState(ProductsList)
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(0)
  const [ordination, setOrdination] = useState("")
  const [total, setTotal] = useState(0);
  function currencyBrazil(value, symbol) {
    if (!value) return null
    if (symbol) {
      return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let newTotal = 0;
    cart.forEach((item) => {
      newTotal += item.value * item.amount;
    });
    setTotal(newTotal);
  }, [cart]);

  
  return (
    <div>
      <Header />
      <MainContainer>
        <GlobalStyle />
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          product={product}
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          currencyBrazil={currencyBrazil}
          ordination={ordination}
          setOrdination={setOrdination}
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
        />
        <Cart
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
          currencyBrazil={currencyBrazil}
        />
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
