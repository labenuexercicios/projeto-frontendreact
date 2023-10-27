//import logo from './logo.svg';
import './App.css';
import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';

export default function App() {
  return (
    <div className="App">
      <Filters />
      <Home />
      <Cart />
    </div>
  );
}


