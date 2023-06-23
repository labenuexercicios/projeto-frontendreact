import React, { useState } from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { GlobalStyles } from "./GlobalStyles";
import { listaDeProdutos } from "./assets/productsList";
import { MainApp } from "./AppStyle";



function App() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [minFilter, setMinFilter] = useState("");
  const [maxFiler, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  // const [listaDeProdutos, setListaDeProdutos] = useState(Catalogo);

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
    });

  // const saveLocalStorage = () => {
  //   const listLocal = JSON.stringify(cart);
  //   localStorage.setItem("cart", listLocal);
  // };

  // const getItensLocalStorage = () => {
  //   const listaArray = JSON.parse(localStorage.getItem("produto"));
  //   if (listaArray) {
  //     setCart(listaArray);
  //   }
  //   listaArray && setCart(listaArray);
  // };

  // useEffect(() => {
  //   localStorage()
     // usar o getItem,usar o setCart aqui dentro.
  // }, []);

//No segundo useEffect usar setItem, fazer a verificação do tamanho do carrinho. 

  // useEffect(() => {
  //   if (cart.length) { ***fazer a lógica aqui dentro
  //     console.log("useEffect SALVAR do localStorage");
  //     saveLocalStorage();
  //   }
  // }, [cart]); 
  

  return (
    <>
      <GlobalStyles />
     
      <MainApp>
        
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFiler={maxFiler}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
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
      </MainApp>
    </>
  );
}

export default App;
