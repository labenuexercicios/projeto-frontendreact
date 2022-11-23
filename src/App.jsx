import CardsSection from "./components/CardsSection/CardsSection";
import SearchSection from "./components/SearchSection/SearchSection";
import Kerbonaut from "./components/Kerbonaut/Kerbonaut";
import CartSection from "./components/CartSection/CartSection";
import parts from "./parts.json";
import "./App.css";
import { useState , useEffect } from "react";

function App() {
  const [products, setProducts] = useState(parts);
  const [productName, setProductName] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");
  const [minimumPrice, setMinimumPrice] = useState("");
  const [category, setCategory] = useState("");
  const radialSizes = ["Tiny", "Small", "Large", "Extra large", "Mk1", "Mk2", "Mk3", "Radial mounted"];
  const [checkedState, setCheckedState] = useState(
    new Array(radialSizes.length).fill(false)
  )
  const [order, setOrder] = useState("");
  const [cartVisibility, setCartVisibility] = useState(false);
  
  useEffect(() => {
    const cartInitialString = localStorage.getItem("cartLocal"); //String
    const cartInitial = JSON.parse(cartInitialString); //Object
    if (cartInitial !== null){
      console.log(cartInitial);
      const productsCopy = [...products];
      for (let i = 0; i < cartInitial.length; i++){
        const cartProduct = cartInitial[i];
        for (let j = 0; j < productsCopy.length; j++){
          if (cartProduct["Id"] === productsCopy[j]["Id"]){
            productsCopy[j]["Ordered"] = cartProduct["Ordered"]
          }
        }
      }
      setProducts(productsCopy);
    }
  }, [])

  useEffect(() => {
    const cartLocal = products.filter(product => product["Ordered"] > 0);
    if (cartLocal.length > 0){
      localStorage.setItem("cartLocal", JSON.stringify(cartLocal));
    } else if (cartLocal.length === 0){
      localStorage.removeItem("cartLocal");
    }
  }, [products])

  const handleClick = () => {
    setCartVisibility(current => !current);
  }

  return (
    <div className="App">
      <div id="first-row">
        <Kerbonaut />
        <div id="logo-container">
          <img src="/jebs-garage-logo.svg" />
        </div>
      </div>
      <div id="see-cart-container">
        <div className="first-col"></div>
        <div className="middle-col">
          <h3 onClick={handleClick}>See/hide cart <i className="fa-solid fa-cart-shopping"></i></h3>
        </div>
        <div className="last-col"></div>
      </div>
      <CartSection 
        products={products}
        setProducts={setProducts}
        cartVisibility={cartVisibility}
        handleClick={handleClick}
      />
      <div id="grid-area">
        <div className="first-col"></div>
        <SearchSection 
          productName={productName}
          setProductName={setProductName}
          maximumPrice={maximumPrice}  
          setMaximumPrice={setMaximumPrice}
          minimumPrice={minimumPrice}
          setMinimumPrice={setMinimumPrice}
          setOrder={setOrder}
          category={category}
          setCategory={setCategory}
          checkedState={checkedState}
          setCheckedState={setCheckedState}
          radialSizes={radialSizes}
        />
        <CardsSection 
          products={products}
          setProducts={setProducts}
          productName={productName}
          minimumPrice={minimumPrice}
          maximumPrice={maximumPrice}
          category={category}
          checkedState={checkedState}
          radialSizes={radialSizes}
          setOrder={setOrder}
          order={order}
        />
        <div className="last-col"></div>
      </div>
    </div>
  )
}

export default App
