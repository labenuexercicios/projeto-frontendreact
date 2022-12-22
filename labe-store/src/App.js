import React, { useState } from 'react';
import { GlobalStyled } from './GlobalStyled';
import Home from './pages/Home';
import ListProds from "./components/data/data.json";




function App() {
  const [prodShopping, setProdShopping] = useState([...ListProds])
  const [numberMin, setNumberMin] = useState(-Infinity)
  const [showCart, setShowCart] = useState(false)
  // const [cart, setCart] = useState([...ListProds])
  const [cart, setCart] = useState([])



  return (
    <div >
      <GlobalStyled />
      <Home
        prodShopping={prodShopping}
        setProdShopping={setProdShopping}

        numberMin={numberMin}
        setNumberMin={setNumberMin}

        showCart={showCart}
        setShowCart={setShowCart}

        cart={cart}
        setCart={setCart}
      />

    </div>
  );
}

export default App;
