import './App.css';
import {Filter} from './Components/Filters/Filters';
import {Home} from './Components/ProductList/Home/Home';
import {Cart} from './Components/ShoppingCart/Cart/Cart';

function App() {
  return (
    <>
      <Filter/>
      <Home/>
      <Cart/>
    </>
  );
}

export default App;
