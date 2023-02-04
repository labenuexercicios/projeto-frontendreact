import './App.css';
import { MeuFiltro } from './Components/Filters/Filters';
import { HomePage } from './Components/ProductList/Home/Home';
import { ProdutoCard } from './Components/ProductList/ProductCard/ProductCard';
import { CarrinhoDeCompras } from './Components/ShoppingCart/Cart/Cart';

function App() {
  return (
    <div className="App">
     <h1>Olá</h1>
     < MeuFiltro/>
     < HomePage/>
     < ProdutoCard/>
     < CarrinhoDeCompras/>
    </div>
  );
}

export default App;
