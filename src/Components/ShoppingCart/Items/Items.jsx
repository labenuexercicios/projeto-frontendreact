import React from "react";
import { EstilizacaoGeralItens } from "./ItemsStyle";

function Items({ cart, callbackClick }) {
  return (
    <EstilizacaoGeralItens>
      {cart.map((produto) => {
        return (
          <li key={produto.id+produto.tamanhoSelecionado}>
            <span>
              {produto.quantity}x - {produto.name} {produto.tamanhoSelecionado}
            </span>
            <button
              onClick={() => {
                callbackClick(produto);
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "icones/lixeira.png"}
                alt="Imagem"
              />
            </button>
          </li>
        );
      })}
    </EstilizacaoGeralItens>
  );
}

export default Items;
