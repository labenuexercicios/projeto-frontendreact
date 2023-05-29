import React from "react";

function Items({ name, value, quantity, id, removeItem }) {
  return (
    <>
      <p>Nome: {name}</p>
      <span>
        Valor: {value} | Qtd: {quantity}
      </span>
      <button onClick={() => removeItem(id)}>Remover</button>
    </>
  );
}

export default Items;
