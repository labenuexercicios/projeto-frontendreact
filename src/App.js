import React from "react";
import Header from "./components/Header/Header";
import { productListData } from "./constants/productListData";
import CartPage from "./pages/CartPage/CartPage";
import Homepage from "./pages/Homepage/HomePage";
import "./styles.css";
import { useState } from "react";

const App = () => {

  
  const [itens, setItens] = useState([]);
  const [activeScreen, setActiveScreen] = useState("HomePage");
  const [productsList, setProductsList] = ([]);
  const [cart, setCart] = ([]);

  // Armazena a lista de produtos na variavel de estado products
  React.useEffect(() => {
    if (itens) {
      setItens(productListData);
      const data = localStorage.setItem('products', productListData);
    }
  }, [itens]);

  const goToHomePage = () => {
    setActiveScreen("HomePage");
  };

  const goToCartPage = () => {
    setActiveScreen("CartPage");
  };

  const renderScreen = () => {
    
    switch (activeScreen) {
      // console.log(itens)
      case "HomePage":
return <Homepage products={itens} setItens={setItens} />;
      case "CartPage":
return <CartPage />;
      default:
return <div>Tela não existe</div>;
    }
  };


return (
  <div>
    <Header
      title="Gravidade ZERO"
      currentPage={activeScreen}
      goToHomePage={goToHomePage}
      goToCartPage={goToCartPage}
    />
    {renderScreen()}
  </div>
);
};

export default App;
