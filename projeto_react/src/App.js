
import './App.css';
import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import ProductCard from './Components/ProductList/ProductCard/ProductCard';
import Cart from './Components/ShoppingCart/Cart/Cart';
import Itens from './Components/ShoppingCart/Items/Itens';

function App() {
  return (
    <div>
      <Filters/>
      <Home/>
      <ProductCard/>
      <Cart/>
      <Itens/>
    </div>
  );
}

export default App;
