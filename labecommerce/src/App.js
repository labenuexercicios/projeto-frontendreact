import Filters from './Components/Filters/Filters';
import Home from './Components/ProductList/Home/Home';
import Cart from './Components//ShoppingCart/Cart/Cart';
import { GlobalStyle } from './GlobalStyle';
import { productList } from './assets/productList';

function App() {
  return (
    <>
    <GlobalStyle />

    <main>
    <Filters />
    <Home productList={productList}/>
    <Cart />
    </main>
    </>
  );
}

export default App;