import { useState } from "react";
import CartScreen from "./screens/Cart/CartScreen";
import ProdutcsScreen from "./screens/Products/ProductsScreen";
import Header from "./components/Header/Header"


function App() {

const [ activeScreen, setActiveScreen ] = useState("ProductsScreen")

const goToProductsScreen = () => setActiveScreen("ProductsScreen")
const goToCartScreen = () => setActiveScreen("CartScreen")



const renderScreen = () => {
  switch (activeScreen) {
    case "ProductsScreen":
      return <ProdutcsScreen />
    case "CartScreen":
      return <CartScreen />
    default:
      return <h1>Tela não encontrada</h1>
  }
}

  return (
    <>
    <Header 
      goToProductsScreen={goToProductsScreen}
      goToCartScreen={goToCartScreen}
    />
     {renderScreen()}
    </>
   
    )
    
    

}

export default App;
