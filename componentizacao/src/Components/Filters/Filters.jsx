import React from "react";
import { useState } from "react";
import { ContainerFilter } from "./FiltersStyle";

export const Filters = () => {

  

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <ContainerFilter>
      <div>
        <h2>Filters</h2>
        <p>Valor minímo:</p>
        <input className="form" placeholder="valor" />
        <p>Valor maximo:</p>
        <input className="form" placeholder="valor" />
        <p>Busca por nome:</p>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Pesquisar por nome"
        />
        <p>Ordem de valores</p>
        <select>
          <option>Crescente</option>
          <option>Decrescente</option>
        </select>
      </div>
    </ContainerFilter>
  );
};
