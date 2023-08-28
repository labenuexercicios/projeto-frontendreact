import { useState } from "react";
import { AppContainer } from "./AppStyle";
import { Carrinho } from "./components/Carrinho/Carrinho";
import { Filtros } from "./components/Filtros/Filtros";
import { Home } from "./components/Home/Home";
import { produtosLista } from "./assents/produtosLista";

function App() {
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [searchFilterMaterial, setSearchFilterMaterial] = useState("");
  const [cart, setCart] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <AppContainer>
      <Filtros
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        searchFilterMaterial={searchFilterMaterial}
        setSearchFilterMaterial={setSearchFilterMaterial}
      />
      {/* <Home id={id} name={name} value={value} imageUrl={imageUrl} /> */}
      <Home
        produtosLista={produtosLista}
        cart={cart}
        setCart={setCart}
        amount={amount}
        setAmount={setAmount}
      />
      {/* <Home id={id} name={name} value={value} imageUrl={imageUrl} /> */}
      <Carrinho
        cart={cart}
        setCart={setCart}
        amount={amount}
        setAmount={setAmount}
      />
    </AppContainer>
  );
}

export default App;
