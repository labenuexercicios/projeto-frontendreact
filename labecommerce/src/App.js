import Home from  './components/ProducList/Home/Home'
import Filters from './components/Filters/Filters'
import ProductCard from './components/ProducList/ProductCard/ProductCard'
import Cart from './components/ShoppingCart/Cart/Cart'
import Items from './components/ShoppingCart/Items/Items'

function App() {
  return (
    <div>
      <Filters/>
      <Home />
      <ProductCard/>
      <Cart/>
      <Items/>
    </div>
  );
}

export default App;
