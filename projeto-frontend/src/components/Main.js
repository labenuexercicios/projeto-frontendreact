import React, { useState } from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd, query, orderParam, max, min, setMax, setMin } = props;

  return (
    <main className="block col-2 main">
      <h2>Produtos</h2>
      <div className="row">
        {products
          .filter((product) => {
            return product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
          })
          .filter((item) => {
            if (min !== "" && max !== 0) {
              if (item.preco >= min && item.preco <= max) {
                return item.preco;
              } else if (min === "" && max === "") {
                setMin(0);
                setMax(50);
              }
            }
          })
          .sort((item, nitne) => {
            if (orderParam === "Crescente") {
              return item.name.localeCompare(nitne.name);
            } else if (orderParam === "Decrescente") {
              return nitne.name.localeCompare(item.name);
            } else if (orderParam === "Ordenar") {
              return item.id.localeCompare(nitne.id);
            }
          })
          .map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
      </div>
    </main>
  );
}
