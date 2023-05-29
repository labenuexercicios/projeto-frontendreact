import React from "react";
import FiltersDiv from "./FiltersStyle";

function Filters({
  minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
  onChange,
}) {
  function handleMinFilter(event) {
    if (event.target.value < 0) {
      console.log(minFilter);
      alert("Valor inválido!");
    } else {
      onChange("minFilter", event.target.value);
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
      <label id="minimo">Valor mínimo:</label>
      <input
        type="number"
        id="minimo"
        name="minimo"
        onChange={handleMinFilter}
        value={minFilter}
      ></input>
      <label>Valor máximo:</label>
      <input
        type="number"
        id="maximo"
        name="maximo"
        onChange={handleMaxFilter}
        value={maxFilter}
      ></input>
      <label id="busca">Busca por nome:</label>
      <input
        type="text"
        id="busca"
        name="busca"
        onChange={handleSearchFilter}
        value={searchFilter}
      ></input>
    </FiltersDiv>
  );
}

export default Filters;
