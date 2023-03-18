import { Main} from "./Components/Container/containerStyle"
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import { GlobalStyle } from "./GlobalStyle"
import productList from "./Components/assents/productsList"
import { useState } from "react"



function App() {
  const [minFilter, setMinFilter] = useState(0)
  const [maxFilter, setMaxFilter] = useState(0)
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState([]) 
  const [searchFilter, setSearchFilter] = useState('')
  const [product] = useState(productList)
  

 /*  function adicionarItem (index){
    const novoProduto ={
      name: props.product[index].name,
      value: props.product[index].value,
      amount:1
      
      
    }
    props.setCart([...props.cart, novoProduto])
  }
  */
  

  return (
    <Main>
      
      <GlobalStyle/>
      <Filters
      minFilter={minFilter}
      setMinFilter={setMinFilter}
      maxFilter={maxFilter}
      setMaxFilter={setMaxFilter}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}
      />
      <Home 
      product={product}
      amount={amount}
      setAmount={setAmount}
      cart={cart}
      setCart={setCart}
      
      />
      <Cart 
      amount={amount}
      setAmount={setAmount}
      cart={cart}
      setCart={setCart}
      product={product}
      />
    </Main>
  )
}

export default App
