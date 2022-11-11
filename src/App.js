import { Container } from './App.styled'
import Header from "./components/Header-SearchBar/Header"
import CartSide from './components/ShoppingCart/Cart-side'
import Main from "./components/Preview-Products/Main"
import Footer from "./components/Footer-Contacts/Footer"
import products from "./JSON-Data/products.json"
import users from "./JSON-Data/users.json"
import { useState } from 'react'

function App() {
  const [currCart, setCurrCart] = useState([])
  const size = currCart.length;

  const addToCart = (productToFind) => {
    console.log("entrou");

    const newCart = [...currCart]

    const productFound = newCart.find((product) => product.id === productToFind.id)

    if (!productFound) {
      const newProduct = { ...productToFind, quantity: 1 }
      newCart.push(newProduct)
      setCurrCart(newCart)
    } else {
      window.alert("Produto ja adicionado")
    }
  }












  return (
    <Container size={currCart.length} >
      <CartSide 
        currCart={currCart}
      />
      <div className='main-container' >

        <Header />



        <Main
          products={products}
          currCart={currCart}
          addToCart={addToCart} />

      </div>
      <Footer />


    </Container>
  )
}

export default App
