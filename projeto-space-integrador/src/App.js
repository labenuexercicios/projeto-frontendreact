import './App.css';
import Filter from './componentes/Filters/filters';
import Home from './componentes/ProdutcList/Home/home';
import Cart from './componentes/ProdutcList/ProductCard/productCard';

function App() {
  return (
    <div className="App">
      <Filter/>
      <Home/>
      <Cart/>
      
    </div>
  );
}

export default App;
