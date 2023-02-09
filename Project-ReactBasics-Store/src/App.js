
import './App.css';
import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import Items from './Components/ShoppingCart/Items/Items';
import { productList } from './assents/productList';
import styled from 'styled-components';



 function App() {
  return (
    <>
      < div className="struct">
        <nav>
            <Filters/>
        </nav>
        <Home/>
        <aside>
            <p>Aside</p>
            <Cart/>
            <Items />
        </aside>
      </div>

      <footer>
      <p>footer</p>
    </footer>
  </>
  );
}

export default App;
