import React from "react";
import { EstilizacaoGeralItens } from "./ItemsStyle";

function Items({ cart, setCart, amount, setAmount }) {
  const removeProduto = (produto) => {
    console.log(produto);
  };

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
                removeProduto(produto);
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
