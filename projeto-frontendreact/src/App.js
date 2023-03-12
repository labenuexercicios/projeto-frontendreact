import Header from './Components/Header/Header'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import { Application, GlobalStyled } from './GlobalStyled'
import { ProductsList } from './Assents/ProductsList'
import { useState } from 'react'


function App() {

  const [minFilter, setMinFilter] = useState(0)
  const [maxFilter, setMaxFilter] = useState(0)
  const [searchFilter, setSearchFilter] = useState('')
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState('')
  const [order, setOrder] = useState('')

  const filteredList = ProductsList.filter((product) => {
    const filteredList = product.value >= minFilter && product.value <= maxFilter
    const containsSearchTerm = product.name.toLowerCase().includes(searchFilter.toLowerCase())
    if(minFilter && maxFilter){
      return filteredList && containsSearchTerm
    }else if(minFilter){
      return product.value >= minFilter && containsSearchTerm
    }else if(maxFilter){
      return product.value <= maxFilter && containsSearchTerm
    }else{
      return ProductsList && containsSearchTerm
    }
  })

  return (
    <>
      <GlobalStyled />
      <div>
        <Header />
        <Application>
          <Filter
            minFilter={minFilter}
            setMinFilter={setMinFilter}
            maxFilter={maxFilter}
            setMaxFilter={setMaxFilter}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
          <Home
            minFilter={minFilter}
            maxFilter={maxFilter}
            searchFilter={searchFilter}
            filteredList={filteredList}
            amount={amount}
            setAmount={setAmount}
            cart={cart}
            setCart={setCart}
            productsList={ProductsList}
            order={order}
            setOrder={setOrder}
          />
          <Cart
            amount={amount}
            setAmount={setAmount}
            cart={cart}
            setCart={setCart}
            productsList={ProductsList}
          />
        </Application>
      </div>
    </>
  )
}

export default App
