import { createGlobalStyle } from "styled-components";
import "./App.css";
import { Carrinho } from "./components/Carrinho/Carrinho";
import { Filtros } from "./components/Filtros/Filtros";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div>
      <Filtros />
      <Home />
      <Carrinho />
    </div>
  );
}

export default App;
