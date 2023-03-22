import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import Login from './Components/Login/Login'
import PaginationQuantity from './Components/Pagination/Pagination'
import { Application, GlobalStyled, Container, PaginationDiv } from './AppStyle'
import { ProductsList } from './Assents/ProductsList'
import { useState, useEffect } from 'react'
import Slider from './Components/Slider/Slider'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const [minFilter, setMinFilter] = useState(0)
  const [maxFilter, setMaxFilter] = useState(0)
  const [searchFilter, setSearchFilter] = useState('')
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState('')
  const [order, setOrder] = useState('')
  const [screen, setScreen] = useState(1)
  const [cartQuantity, setCartQuantity] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)

  useEffect(() => {
    const totalValue = cart.reduce((acc, item) => acc + item.value * item.quantity, 0)
    setAmount(totalValue)

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
    setCartQuantity(totalQuantity)
  }, [cart])

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

  const currentProductsList = [...filteredList]

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPost = currentProductsList.slice(firstPostIndex, lastPostIndex)

  const changeScreen = (value) => {
    setScreen(value)
  }
  const renderList = () => {
    switch (screen) {
      case 1:
        return <>
          <Slider />
          <Application>
            <Home
              minFilter={minFilter}
              setMinFilter={setMinFilter}
              maxFilter={maxFilter}
              setMaxFilter={setMaxFilter}
              searchFilter={searchFilter}
              filteredList={currentPost}
              amount={amount}
              setAmount={setAmount}
              cart={cart}
              setCart={setCart}
              productsList={ProductsList}
              order={order}
              setOrder={setOrder} />
          </Application>
          <PaginationDiv>
            <PaginationQuantity
              totalPosts={ProductsList.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </PaginationDiv>
        </>
      case 2:
        return <Cart
          changeScreen={changeScreen}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
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
          <Slider />
          <Application>
            <Home
              minFilter={minFilter}
              setMinFilter={setMinFilter}
              maxFilter={maxFilter}
              setMaxFilter={setMaxFilter}
              searchFilter={searchFilter}
              filteredList={currentPost}
              amount={amount}
              setAmount={setAmount}
              cart={cart}
              setCart={setCart}
              productsList={ProductsList}
              order={order}
              setOrder={setOrder} />
          </Application>
          <PaginationDiv>
            <PaginationQuantity
              totalPosts={ProductsList.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </PaginationDiv>

        </>
    }
  }

  return (
    <>
      <GlobalStyled />
      <Container >
        <Header
          cartQuantity={cartQuantity}
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
