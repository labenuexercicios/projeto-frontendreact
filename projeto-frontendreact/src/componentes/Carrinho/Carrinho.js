import React from "react";
import "./Carrinho.css";

const Carrinho = ({ itens, removerItem }) => {
  const totalCarrinho = itens.reduce((prev, curr) => prev + curr.valor, 0);

  return (
    <div className="carrinho-container">
      <h4>Carrinho:</h4>

      <div className="carrinho-lista">
        {itens.map((item, i) => (
          <div key={i} className="carrinho-item">
            <p>{item.nome}</p>

            <button type="button" onClick={() => removerItem(i)}>
              Remover
            </button>
          </div>
        ))}
      </div>

      <p className="valor-total">Valor total: R$ {totalCarrinho}</p>
    </div>
  );
};

export default Carrinho;
