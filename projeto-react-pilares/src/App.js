import React, {useState} from "react";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import {Ads} from "./Components/Ads"
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  const [pagina, setPagina] = useState(1)

  const mudaPagina = (pagina) => {
      setPagina(pagina)
  }

  return (
    <div>
      <Header mudaPagina={mudaPagina}/>
      <Navbar mudaPagina={mudaPagina}/>
      <Home pagina={pagina}/>
      <Ads/>
      <Footer/>
    </div>
  );
}

export default App;
