import Filters from './Components/Filters/Filters'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import './App.css';


function App() {
  return (
    <div className="App">
      <Filters/>
      <Home/>
      <Cart/>
    </div>
  );
}

export default App;
