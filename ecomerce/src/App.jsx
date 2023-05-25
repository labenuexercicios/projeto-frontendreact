import Filter from './components/filters/Filter'
import Home from './components/productCard/home/home'
import Cart from './components/shoppingCart/cart/Cart'
import GlobalStyles from './GlobalStyles'
import { AppCaixa } from './appStyle'

function App() {


  return (
    <>
      <GlobalStyles />
      <AppCaixa>
        <Filter />
        <Home />
        <Cart />
      </AppCaixa>
    </>
  )
}

export default App
