import { useState, useEffect } from "react";
import { ListaProdutos } from "../src/assents/productsList";
import Filtros from "../src/Componentes/Filtros/Filtros";
import Footer from "../src/Componentes/Footer/Footer";
import Header from "../src/Componentes/Header/Header";
import Home from "../src/Componentes/ProductList/Home/Home";
import Cart from "../src/Componentes/ShoppingCart/Cart/Cart";
import { GlobalStyle, MainContainer } from "../src/GlobalStyle";

function App() {
  const [product, setProduct] = useState(ListaProdutos)
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
        <Filtros
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
