import { FilterContainer } from "./FiltersStyle";
import { useState } from "react";

const Filters = ( {minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter,} ) => {


  return (
    <FilterContainer>
      <h1>Filtrar por:</h1>
      <label for="filtro">Valor Mínimo</label>
      <br />
      <input type="text" id="Valor Mínimo" value={minFilter} onChange={(e) => setMinFilter(e.target.value)}></input>
      <br />
      <label for="filtro">Valor Máximo</label>
      <br />
      <input type="text" id="Valor Máximo" value={maxFilter} onChange={(e) => setMaxFilter(e.target.value)}></input>
      <br />
      <label for="filtro">Busca por Nome</label>
      <br />
      <input type="text" id="Busca por Nome" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)}></input>
    </FilterContainer>
  );
};

export default Filters;
