import React, { useState } from 'react';
import { GlobalStyled } from './GlobalStyled';
import Home from './pages/Home';
import ListProds from "./components/data/data.json";




function App() {
  const [prodShopping, setProdShopping] = useState([ListProds])
  console.log(prodShopping)

  return (
    <div >
      <GlobalStyled />
      <Home
        prodShopping={prodShopping} setProdShopping={setProdShopping}
      />

    </div>
  );
}

export default App;
