import React from "react";
import { CarrinhoContext } from "../assets/produtos";
import ItemCarrinho from "./ItemCarrinho";
import "./Carrinho.css";

export default function Carrinho() {
  const { carrinho, setCarrinho } = React.useContext(CarrinhoContext);

  return (
    <div className="carrinho">
      <h1>Carrinho</h1>
      <div className="itemsCarrinho">
        {Object.keys(carrinho).length == 0 && (
          <span className="carrinhoVazio">Seu carrinho está vazio!</span>
        )}

        {Object.keys(carrinho).map((k, i) => {
          console.log(k, carrinho[k]);
          return (
            <ItemCarrinho
              produto={{
                nome: k,
                quantidade: carrinho[k],
              }}
            ></ItemCarrinho>
          );
        })}
      </div>
    </div>
  );
}
