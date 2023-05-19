import { useState } from "react"; // useStage (não irei mexer no momento)

//Link dos Componentes:
import { Filters } from "./components/Filters/Filters";
import { Home } from "./components/Home/Home";
import { Cart } from "./components/Cart/Cart";
import { listaDeProduto } from "./assets/ListaProdutos";

export function Index() {
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
         cart={setCart}
         setCart={setCart} />
        <Cart
         amount={amount}
         setAmount={setAmount}
         cart={setCart}
         setCart={setCart}/>
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
