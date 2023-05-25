import logo from './logo.svg';
import './App.css';
import Cart from './Components/ShoppingCart/Cart/Cart';
import Home from './Components/Productlist/Home/Home';
import Filters from './Components/Filters/Filters';
import ProductCard from './Components/Productlist/ProductCard/ProductCard';
import Items from './Components/ShoppingCart/Items/Items';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
