import React from "react";
import { AsideFiltro, LabelFiltro, TituloFiltro } from "./FiltersStyle";

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
      <TituloFiltro>FILTERS</TituloFiltro>
      <LabelFiltro placeholder="Valor mínimo" >Valor Mínimo:</LabelFiltro>
      <input onChange={handleMinFilter} type="number" value={minFilter} min="0"  />

      <LabelFiltro>Valor Máximo:</LabelFiltro>
      <input onChange={handleMaxFilter} type="number" value={maxFiler}  min="0" />

      <LabelFiltro>Busca por nome</LabelFiltro>
      <input onChange={handleSearchFilter} type="text" value={searchFilter} />
    </AsideFiltro>
  );
}

export default Filters;
{/* <img src="icones/foguete2.png"/> */}