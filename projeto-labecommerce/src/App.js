import './App.css';
import { MeuFiltro } from './Components/Filters/Filters';
import { HomePage } from './Components/ProductList/Home/Home';
import { ProdutoCard } from './Components/ProductList/ProductCard/ProductCard';
import { CarrinhoDeCompras } from './Components/ShoppingCart/Cart/Cart';
import { MeusItems } from './Components/ShoppingCart/Items/Items';

function App() {
  return (
    <div className="App">
     <h1>Olá</h1>
     < MeuFiltro/>
     < HomePage/>
     < ProdutoCard/>
     < CarrinhoDeCompras/>
     < MeusItems/>
    </div>
  );
}

export default App;
