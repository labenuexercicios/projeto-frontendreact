import { FilterContainer } from "./FiltersStyle";
import { useState } from "react";

const Filters = ( {minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter,} ) => {

  const handleMinFilter = (event) => {
    const value = event.target.value
    if (value >= 0 || value === "") {
      setMinFilter(value)
    }
  }

  const handleMaxFilter = (event) => {
    const value = event.target.value
    if (value >= 0 || value === "") {
      setMaxFilter(value)
    }
  }

  const handleSearchFilter = (event) => {
    const value = event.target.value
    if (value >= 0 || value === "") {
      setSearchFilter(value)
    }
  }


  console.log(minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter);

  return (
    <FilterContainer>
      <h1>Filtros</h1>
      <label for="filtro">Valor Mínimo</label>
      <br />
      <input type="text" id="Valor Mínimo" value={minFilter} onChange={handleMinFilter}></input>
      <br />
      <label for="filtro">Valor Máximo</label>
      <br />
      <input type="text" id="Valor Máximo" value={maxFilter} onChange={handleMaxFilter}></input>
      <br />
      <label for="filtro">Busca por Nome</label>
      <br />
      <input type="text" id="Busca por Nome" value={searchFilter} onChange={handleSearchFilter}></input>
    </FilterContainer>
  );
};

export default Filters;
