import { useState } from "react"; // useStage (não irei mexer no momento)

//Link dos Componentes:
import { Filters } from "./components/Filters";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { listaDeProduto } from "./assets/ListaProdutos";

export function App() {
  //Filters
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  //Home & Cart
  const [amount, setAmount] = useState("")
  const [cart, setCart] = useState([])

  return (
    <div>
      <header>
        <h1>Labecommerce</h1>
      </header>
      <main>
        <div className="main-container">
        <Filters
          inputMax={maxFilter}
          setMinFilter={setMinFilter}
          inputMin={minFilter}
          setMaxFilter={setMaxFilter}
          inputSearch={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          produtos={listaDeProduto}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          minFilter={minFilter}
          maxFilter={maxFilter}
          searchFilter={searchFilter} />
        <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}/>
        </div>
      </main>
      <footer>
        <p>Camila Antunes Copyright © 2023</p>
      </footer>
    </div>
  );
}

// Sempre que é o bigode é o que eu to enviando produtos
/*
   produtos = {dentro daqui é o valor!!!!}
usa-se esse
*/
