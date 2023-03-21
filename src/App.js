import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import CartScreen from "./screens/Cart/CartScreen";
import ProductsScreen from "./screens/Products/ProductsScreen"
import Footer from "./components/footer/Footer"


function App() {

  const [activeScreen, setActiveScreen] = useState("ProductsScreen")
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [sortingProperties, setSortingProperties] = useState("name")
  const [orderItens, setOrderItens] = useState("")
  const [cartList, setCartList] = useState([])

  const changeToProductsScreen = () => {
    setActiveScreen("ProductsScreen")
  }

  const changeToCartScreen = () => {
    setActiveScreen("CartScreen")
  }

  const addProductsCartList = (itens) => {
    
    const newCartList = [...cartList]
    const saveData = JSON.stringify(newCartList) // transforma os produtos em string.
    const searchProducts = newCartList.find((product) => product.id === itens.id)
    if(!searchProducts){
      const newProduct = {... itens, quantity: 1}
      newCartList.push(newProduct)
    }else{
      searchProducts.quantity ++
    }
    setCartList(newCartList)

    localStorage.setItem("localSalvo", saveData) // localSalvo para guardar as informações da const saveData que está em string.
  }

  const removeProducts = (itens) => {
    const newCartList = [...cartList]
    const index = newCartList.indexOf(itens) // indexOf = faz a varredura no parâmetro da função e se não tiver ele retorna -1.

    if (index > -1) {
      newCartList.splice(index, 1) // splice = 

      const saveData = JSON.stringify(newCartList)
      localStorage.setItem("localSalvo", saveData)

      setCartList(newCartList)
    }
  }

  const changeForArray = () => {
    if (localStorage.getItem("localSalvo")){
      const getData = localStorage.getItem("localSalvo")
      const saveArray = JSON.parse(getData)
      setCartList(saveArray)
    }
  }

  useEffect(() => {
    changeForArray()
  },[])

  const renderScreen = () => {

    switch (activeScreen) {
      case "ProductsScreen":
        return <ProductsScreen
          query={query}
          minPrice={minPrice}
          maxPrice={maxPrice}
          sortingProperties={sortingProperties}
          orderItens={orderItens}
          setQuery={setQuery}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setSortingProperties={setSortingProperties}
          setOrderItens={setOrderItens}
          addProductsCartList={addProductsCartList}
        />

      case "CartScreen":
        return <CartScreen
          cartList={cartList}
          removeProducts={removeProducts}
        />

      default:
        return <div>Screen not Found</div>
    }
  }
  return (

    <>
      <Header
        changeToProductsScreen={changeToProductsScreen}
        changeToCartScreen={changeToCartScreen}
      />

      {renderScreen()}

      <Footer/>



    </>
  )
}

export default App;
