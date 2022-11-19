import { Container } from './App.styled'
import Header from "./components/Header-SearchBar/Header"
import CartSide from './components/ShoppingCart/Cart-side'
import Main from "./components/Preview-Products/Main"
import Footer from "./components/Footer-Contacts/Footer"
import products from "./JSON-Data/products.json"
import users from "./JSON-Data/users.json"
import { useState } from 'react'
import { changeStringSearchStandard } from './uteis/searchStringStandard'
import Login from './screens/loginScreen/Login'
import Cart from './screens/cartScreen/Cart'

function App() {
  const [currCart, setCurrCart] = useState([])
  const [displayProducts, setDisplayProducts] = useState()
  const [inputName, setInputName] = useState("")
  const [screen, setScreen] = useState(1)


  const addToCart = (productToFind) => {


    const newCart = [...currCart]

    const productFound = newCart.find((product) => product.id === productToFind.id)
    console.log(productFound);
    

    if (!productFound) {
      const priceDiscont = productToFind.price * (1-(productToFind.offPrice/100))
      const newProduct = { ...productToFind, quantity: 1 , priceDiscont: priceDiscont }
      newCart.push(newProduct)
      setCurrCart(newCart)
    } else {
      window.alert("Produto ja adicionado")
    }
  }

  const addQuantityToProductOnCart = (productToAddQuantity) => {
    const newCart = [...currCart]

    const productFound = newCart.find((product) => product.id === productToAddQuantity.id)

    productFound.quantity++

    setCurrCart(newCart)


  }
  const reduceQuantityToProductOnCart = (productToReduceQuantity, value = 1) => {
    const newCart = [...currCart]

    const productFound = newCart.find((product) => product.id === productToReduceQuantity.id)
    const indexProduct = newCart.findIndex((product) => product.id === productToReduceQuantity.id)

    productFound.quantity--
    if (productFound.quantity <= 0 || value === 0) {
      newCart.splice(indexProduct, 1)
    }

    setCurrCart(newCart)


  }
  const productsNames = products.map((prod) => prod.name)

  const newProduct = products.filter((product) => changeStringSearchStandard(product.name).includes(inputName))


  const handleSwitchScreen = () => {
    switch (screen) {
      case 1:
        return (
          <Main
            inputName={inputName}
            newProduct={newProduct}
            products={products}
            currCart={currCart}
            addToCart={addToCart}
            addQuantityToProductOnCart={addQuantityToProductOnCart}
            reduceQuantityToProductOnCart={reduceQuantityToProductOnCart} />

        )
      case 2:
        return (
          <Login />
        )
        case 3:
          return(
            <Cart 
            currCart={currCart}
            addToCart={addToCart}
            addQuantityToProductOnCart={addQuantityToProductOnCart}
            reduceQuantityToProductOnCart={reduceQuantityToProductOnCart}
             />
          )
    }
  }



  return (


    // <Login/>
    <Container size={currCart.length} screen={screen} >
      {screen ===1 &&<CartSide
        addQuantityToProductOnCart={addQuantityToProductOnCart}
        reduceQuantityToProductOnCart={reduceQuantityToProductOnCart}
        currCart={currCart}
      />}
      <div className='main-container' >

        <Header
          inputName={inputName}
          setInputName={setInputName}
          productsNames={productsNames}
          screen={screen}
          setScreen={setScreen}
        />


        {handleSwitchScreen()}


      </div>
      <Footer />


    </Container>
  )
}

export default App
