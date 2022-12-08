import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercado from "../pages/Mercado";
import comprasList from "../../src/compras/comprasList.json"
import Carrinho from "../pages/Carrinho";

export default function Router() {
    
  const [carrinho, setCarrinho] = useState([]);
  const [compras ] = useState(comprasList);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Mercado
              compras={compras}
              carrinho={carrinho}
              setCarrinho={setCarrinho}
            />
          }
        />
        <Route
          path="/cart"
          element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />}
        />
       
      </Routes>
    </BrowserRouter>
  );
}
