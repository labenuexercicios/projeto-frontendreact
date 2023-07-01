import React, { useState, useEffect } from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { GlobalStyles } from "./GlobalStyles";
import { listaDeProdutos } from "./assets/productsList";
import { MainApp, HeaderApp, Logo, AstroLogo, FooterStylo } from "./AppStyle";

function App() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [minFilter, setMinFilter] = useState("");
  const [maxFiler, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [size, setSize] = useState("");

  const filterProducts = listaDeProdutos
    .filter((produto) => {
      if (minFilter) {
        return produto.value >= parseInt(minFilter);
      }
      return true;
    })
    .filter((produto) => {
      if (maxFiler) {
        return produto.value <= parseInt(maxFiler);
      }
      return true;
    })
    .filter((produto) => {
      if (searchFilter) {
        return produto.name.toLowerCase().includes(searchFilter.toLowerCase());
      }
      return true;
    })
    .filter((produto) => {
      if (size) {
        return produto.tamanhos.includes(size);
      }
      return true;
    });

  const saveLocalStorage = () => {
    const listLocal = JSON.stringify(cart);
    localStorage.setItem("cart", listLocal);
  };

  useEffect(() => {
    const listLocal = JSON.parse(localStorage.getItem("cart"));
    listLocal && setCart(listLocal);
  }, []);

  useEffect(() => {
    if (cart.length) {
      saveLocalStorage();
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  return (
    <>
      <GlobalStyles />

      <MainApp>
        <HeaderApp>
          <Logo
            src={process.env.PUBLIC_URL + "imagens/logo1.png"}
            alt="Imagem"
          />
          <AstroLogo
            src={process.env.PUBLIC_URL + "imagens/astro.png"}
            alt="Imagem"
          />
        </HeaderApp>
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFiler={maxFiler}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          size={size}
          setSize={setSize}
        />
        <Home
          listaDeProdutos={filterProducts}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
        <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />

        <FooterStylo>
          <p>Desenvolvido por <a target="_blank" href="https://www.linkedin.com/in/karina-darc/">Karina D'arc</a> </p>
        </FooterStylo>
      </MainApp>
    </>
  );
}

export default App;
