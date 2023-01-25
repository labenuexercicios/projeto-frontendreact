import React from "react";
import Header from "./components/Header/Header";
import { productListData } from "./constants/productListData";
import CartPage from "./pages/CartPage/CartPage";
import Homepage from "./pages/Homepage/HomePage";
import "./styles.css";


const App = () => {
  const [itens, setItens] = React.useState([]);
  const [activeScreen, setActiveScreen] = React.useState("HomePage");
  
  // Armazena a lista de produtos na variavel de estado products
  React.useEffect(() => {
    setItens(productListData);
  });

  const goToHomePage = () => {
    setActiveScreen("HomePage");
  };

  const goToCartPage = () => {
    setActiveScreen("CartPage");
  };

  // const addToCart = (productToAdd) => {
  //   const newCart = [...cart]

  //   const productFound = newCart.find(
  //       (productInCart) => productInCart.id === productToAdd.id
  //   )

  //   if (!productFound) {
  //       const newProduct = {...productToAdd, quantity: 1}
  //       newCart.push(newProduct)
  //   } else {
  //       productFound.quantity++
  //   }

  //   setCart(newCart)
  // }


  const renderScreen = () => {
    switch (activeScreen) {
      case "HomePage":
        return <Homepage products={itens} />;
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
