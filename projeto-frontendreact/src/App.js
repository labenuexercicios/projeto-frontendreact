import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Filter from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import Login from './Components/Login/Login'
import { Application, GlobalStyled, Container, Banner, WelcomePage } from './GlobalStyled'
import { ProductsList } from './Assents/ProductsList'
import { useState } from 'react'
import Slider from './Components/Slider/Slider'
import './App.css'


function App() {

  const [minFilter, setMinFilter] = useState(0)
  const [maxFilter, setMaxFilter] = useState(0)
  const [searchFilter, setSearchFilter] = useState('')
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState('')
  const [order, setOrder] = useState('')
  const [screen, setScreen] = useState(1)

  const changeScreen = (value) => {
    setScreen(value)
  }

  const renderList = () => {
    switch (screen) {
      case 1:
        return <>
          <Banner>
            <Slider />
          </Banner>
          <Application>
            <Filter
              minFilter={minFilter}
              setMinFilter={setMinFilter}
              maxFilter={maxFilter}
              setMaxFilter={setMaxFilter} />
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
              setOrder={setOrder} />
          </Application></>
      case 2:
        return <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          productsList={ProductsList}
        />
      case 3:
        return <Login />
      default:
        return <>
          <Banner>
            <Slider />
          </Banner>
          <Application>
            <Filter
              minFilter={minFilter}
              setMinFilter={setMinFilter}
              maxFilter={maxFilter}
              setMaxFilter={setMaxFilter} />
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
              setOrder={setOrder} />
          </Application></>

    }
  }

  const filteredList = ProductsList.filter((product) => {
    const filteredList = product.value >= minFilter && product.value <= maxFilter
    const containsSearchTerm = product.name.toLowerCase().includes(searchFilter.toLowerCase())
    if (minFilter && maxFilter) {
      return filteredList && containsSearchTerm
    } else if (minFilter) {
      return product.value >= minFilter && containsSearchTerm
    } else if (maxFilter) {
      return product.value <= maxFilter && containsSearchTerm
    } else {
      return ProductsList && containsSearchTerm
    }
  })

  return (
    <>
      <GlobalStyled />
      <Container>
        <Header
          changeScreen={changeScreen}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter} />
        {renderList()}
        <Footer />
      </Container>
    </>
  )
}

export default App
