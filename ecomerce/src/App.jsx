import Filter from './components/filters/Filter'
import Home from './components/productCard/home/home'
import Cart from './components/shoppingCart/cart/Cart'
import GlobalStyles from './GlobalStyles'
import { AppCaixa } from './appStyle'
import { productList } from './assents/productsList'

function App() {

  console.log(productList)
  return (
    <>
      <GlobalStyles />
      <AppCaixa>
        <Filter />
        <Home productList={productList} />
        <Cart />
      </AppCaixa>
    </>
  )
}

export default App
