import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/ProductList/Home/Home'
import Cart from './Components/ShoppingCart/Cart/Cart'
import Login from './Components/Login/Login'
import Items from "../src/Components/ShoppingCart/Items/Items"
import PaginationQuantity from './Components/Pagination/Pagination'
import { Application, GlobalStyled, Container, Banner, Pagination } from './AppStyle'
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


  const addItemCart = (index) => {
    const existingItemIndex = cart.findIndex(item => item.name === ProductsList[index].name)

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].quantity += 1
      setCart(updatedCart)

      const totalValue = updatedCart.reduce((acc, item) => acc + item.value * item.quantity, 0)
      setAmount(totalValue)

    } else {
      const newItem = {
        id: ProductsList[index].id,
        name: ProductsList[index].name,
        value: ProductsList[index].value,
        quantity: 1
      }

      const updatedCart = [...cart, newItem]
      setCart(updatedCart)

    }
  }

  const removeItemCart = (index) => {
    const filteredList = cart.filter((item, i) => i !== index)
    const totalValue = filteredList.reduce((acc, item) => acc + item.value * item.quantity, 0)
    setCart(filteredList);
    setAmount(totalValue);
  }

  const removeOneItem = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity--;
    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1)
    }
    const totalValue = updatedCart.reduce((acc, item) => acc + item.value * item.quantity, 0)
    setCart(updatedCart);
    setAmount(totalValue);
  }

  const itemsCart = cart.map((item, index) => {
    return (
      <Items
        key={index}
        productsList={ProductsList}
        removeItemCart={() => removeItemCart(index)}
        removeOneItem={() => removeOneItem(index)}
        item={item}
        cart={cart}
        setCart={setCart} />
    )
  })

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
            <Home
              addItemCart={addItemCart}
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
          <Pagination>
            <PaginationQuantity
              totalPosts={ProductsList.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Pagination>
        </>
      case 2:
        return <Cart
          itemsCart={itemsCart}
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
            <Home
              addItemCart={addItemCart}
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
          <Pagination>
            <PaginationQuantity
              totalPosts={ProductsList.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Pagination>
          
        </>
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

  const currentProductsList = [...filteredList]

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPost = currentProductsList.slice(firstPostIndex, lastPostIndex)

  return (
    <>
      <GlobalStyled />
      <Container >
        <Header
          cartQuantity={cartQuantity}
          itemsCart={itemsCart}
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
