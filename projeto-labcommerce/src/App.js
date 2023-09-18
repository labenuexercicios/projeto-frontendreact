import './App.css';
import Filters from "./Components/Filter/Filter"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"

export default function App() {
  return (
    <div>
      <Filters/>
      <Home/>
      <Cart/>
    </div>
  );
}

 
