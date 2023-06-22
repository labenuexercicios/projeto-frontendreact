import React from "react";
import { AsideFiltro, TituloFiltro } from "./FiltersStyle";

function Filters({
  minFilter,
  setMinFilter,
  maxFiler,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
}) {
  
  const handleMinFilter = (event) =>{
    setMinFilter(event.target.value)
  }

  const handleMaxFilter = (event) =>{
    setMaxFilter(event.target.value)
  }

  const handleSearchFilter = (event) =>{
    setSearchFilter(event.target.value)
  }

  return (
    <AsideFiltro>
      <TituloFiltro>Filters</TituloFiltro>
      <label>Valor minímo:</label>
      <input onChange={handleMinFilter} type="number" value={minFilter} min="0"  />

      <label>Valor máximo:</label>
      <input onChange={handleMaxFilter} type="number" value={maxFiler}  min="0" />

      <label>Busca por nome:</label>
      <input onChange={handleSearchFilter} type="text" value={searchFilter} />
    </AsideFiltro>
  );
}

export default Filters;
