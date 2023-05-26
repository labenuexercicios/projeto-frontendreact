import React from "react";
import FiltersDiv from "./FiltersStyle";

function Filters({
  minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
}) {
  function handleMinFilter(event) {
    if (event.target.value < 0) {
      alert("Valor inválido!");
    } else {
      setMinFilter(event.target.value);
    }
  }
  function handleMaxFilter(event) {
    if (event.target.value < 0) {
      alert("Valor inválido!");
    } else {
      setMaxFilter(event.target.value);
    }
  }

  function handleSearchFilter(event) {
    setSearchFilter(event.target.value);
  }

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
