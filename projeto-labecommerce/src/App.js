import logo from './logo.svg';
import './App.css';
import Filtros from "./componentes/Filtros/Filtros"
import Home from "./componentes/Home/Home"
import Produtos from "./componentes/Home/Produtos/Produtos"
import Carrinho from "./componentes/Carrinho/Carrinho"
import Itens from "./componentes/Carrinho/Itens/Itens"

function App() {
  return (
  <div className="App">

  <Filtros />

  <Home />
  <Produtos />

  <Carrinho />
  <Itens />

  </div>
  );
}

export default App;
