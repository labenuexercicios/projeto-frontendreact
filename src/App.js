import Carrinho from "./componentes/Carrinho/Carrinho";
import Filtros from "./componentes/Filtros/Filtros";
import Home from "./componentes/Home/Home";
import Header from "./componentes/Header/Header"
import Footer from "./componentes/Footer/Footer";
import { GlobalStyle } from "./GlobalStyle";
import { FiltroContainer } from "./componentes/Filtros/styleFiltros";
import { Principal } from "./GlobalStyle";
import { listaDeProdutos } from "./assents/ListaDeProdutos";
import { useState, useEffect } from "react"

function App() {
  const [listaDeProdutosEstado, setListaDeProdutosEstado] = useState(listaDeProdutos || [])
  
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("") 
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(0)
  const [soma, setSoma] = useState(0)

  let somaValor = soma;

  useEffect(() => {
    if (cart.length > 0) {
      const cartString = JSON.stringify(cart);
      localStorage.setItem("car", cartString);
    }
  }, [cart]);
  console.log(cart);

  useEffect(() => {
    const antigoCart = JSON.parse(localStorage.getItem("car"));
    if (antigoCart) {
      setCart(antigoCart);
    }
  }, []);
  

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Filtros 
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
      <Principal>
        
        <Home
          listaDeProdutos={listaDeProdutosEstado}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}

          minFilter={minFilter}
          maxFilter={maxFilter}
          searchFilter={searchFilter}
        />
        
        <Carrinho 
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          setSoma={setSoma}
        />
      </Principal>
      <Footer/>
    </div>
  );
}

export default App;