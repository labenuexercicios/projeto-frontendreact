import React from "react";
import { EstilizacaoGeralItens } from "./ItemsStyle";

function Items({ cart, callbackClick }) {
 

  return (
    <EstilizacaoGeralItens>
      {cart.map((produto) => {
        return (
          <li key={produto.id}>
            <span>
              {produto.quantity}x - {produto.name}
            </span>
            <button
              onClick={() => {
                callbackClick(produto);
              }}
            >
              Remover
            </button>
          </li>
        );
      })}
    </EstilizacaoGeralItens>
  );
}

export default Items;
