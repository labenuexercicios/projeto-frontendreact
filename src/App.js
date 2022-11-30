import { useState } from "react";
import Header from "./components/Header/Header";
import CartScreen from "./screens/Cart/CartScreen";
import ProductsScreen from "./screens/Products/ProductsScreen"


function App() {

  const [activeScreen, setActiveScreen] = useState("ProductsScreen")
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [sortingProperties, setSortingProperties] = useState("name")
  const [orderItens, setOrderItens] = useState("")
  const [cartList, setCartList] = useState ([])

  const changeToProductsScreen = () => {
    setActiveScreen("ProductsScreen")
  }

  const changeToCartScreen = () => {
    setActiveScreen("CartScreen")
  }

  const addProductsCartList = (itens) => {
    
    const newCartList = [... cartList]
    newCartList.push(itens)
    setCartList (newCartList)
    console.log(cartList)
  }

  const removeProducts = (itens) => {
    const newCartList = [... cartList]
    const index = newCartList.indexOf(itens)
      console.log(index)
      console.log(itens)

      if(index > -1){
        newCartList.splice(index, 1)
        setCartList(newCartList)
      }
  }

  

  const renderScreen = () => {
  //   if (activeScreen === "ProductsScreen") {
  //     <ProductsScreen />
  //   } else {
  //     <CartScreen />
  //   }
  // }
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

    </>
  )
}

export default App;
