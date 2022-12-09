import { useState } from "react"
import { HomePage } from "./pages/HomePage"
import { CartPage } from "./pages/CartPage"
import MeteoritoDeFerro from "./image/MeteoritoDeFerro.png"
import EsferaDeGibeao from "./image/EsferaDeGibeao.png"
import FatiaDeImilac from "./image/FatiaDeImilac.png"
import { GlobalStyle } from "./globalStyles"

function App() {

  const { amountToBuy0, setAmountToBuy0 } = useState(0)
  const { amountToBuy1, setAmountToBuy1 } = useState(0)
  const { amountToBuy2, setAmountToBuy2 } = useState(0)

  const { productsAddedToCart, setProductsAddedToCart } = useState([])


  function addToCart(e) {
    console.log(amountToBuy0)
  }

  let products = [
    {
      id: 0,
      imageUrl: MeteoritoDeFerro,
      name: "Meteorito de ferro",
      description: "É de ferro! Do espaço.",
      price: 150.00,
      amountToBuy:  amountToBuy0 ,
      setAmountToBuy:  setAmountToBuy0 ,
      addToCart: addToCart
    },
    {
      id: 1,
      imageUrl: FatiaDeImilac,
      name: "Fatia de Imilac",
      description: "Uma das maiores fatias de meteorito do mundo! Ouvi falar que vocês gostam de meteoritos, então eu trouxe esse que tem meteoritos dentro do meteorito.",
      price: 500000.00,
      amountToBuy: amountToBuy1,
      setAmountToBuy: setAmountToBuy1,
      addToCart: addToCart
    },
    {
      id: 2,
      imageUrl: EsferaDeGibeao,
      name: "Esfera de Gibeão",
      description: `Esfera formada do coração do meteorito Gibeão. Não é a Estrela da Morte. Juro, eu chequei!`,
      price: 3000.00,
      amountToBuy: amountToBuy2,
      setAmountToBuy: setAmountToBuy2,
      addToCart: addToCart
    }
  ]
  return (
    <>
      <GlobalStyle />
      <HomePage
        products={products}
      />
      {/* <CartPage products={products} />
      <img src={Iron} /> */}
    </>
  );
}

export default App;