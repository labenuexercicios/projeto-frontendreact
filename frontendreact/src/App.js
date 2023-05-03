import logo from './logo.svg';
import './App.css';
import { Filters } from './Components/Filters/Filters';
import { Home } from './Components/ProductList/Home/Home';
import { ProductCard } from './Components/ProductList/ProductCard/ProductCard';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { Items } from './Components/ShoppingCart/Items/Items';

function App() {
  return (
    <div className="App">
      <Filters />
      <Home />
      <ProductCard />
      <Cart />
      <Items />
    </div>
  );
}

export default App;
