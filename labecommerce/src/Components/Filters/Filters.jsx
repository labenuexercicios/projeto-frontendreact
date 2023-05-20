import React from "react";
import FiltersDiv from "./FiltersStyle";

function Filters() {
  return (
    <FiltersDiv>
      <h2>Filters</h2>
      <label>Valor mínimo:</label>
      <input type="number"></input>
      <label>Valor máximo:</label>
      <input type="number"></input>
      <label>Busca por nome:</label>
      <input type="text"></input>
    </FiltersDiv>
  );
}

export default Filters;
