import React, { useState } from 'react';
import { GlobalStyled } from './GlobalStyled';
import Home from './pages/Home';
import ListProds from "./components/data/data.json";




function App() {
  // const [prodShopping, setProdShopping] = useState([...ListProds])

  return (
    <div >
      <GlobalStyled />
      <Home
      />

    </div>
  );
}

export default App;
