import "./App.css";
import { useState } from "react";
import { results } from "./assents/productList.js";
import Carrinho from "./componentes/Carrinho/Carrinho";
import Filtro from "./componentes/Filtro/Filtro";
import Home from "./componentes/Home/Home";

function App() {
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  
  return (
    <div className="container">
      <Filtro
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />

      <Home
        results={results.filter((prodFilter) =>
          (minFilter > 0 ? prodFilter.price >= minFilter : true) &&
          (maxFilter > minFilter ? prodFilter.price <= maxFilter : true ) &&
          (prodFilter.title.toLowerCase().search(searchFilter.toLowerCase()) != -1))}
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
      />

      <Carrinho
        cart={cart}
        setCart={setCart}
        amount={amount}
        setAmount={setAmount}
      />
    </div>
  );
}

export default App;
