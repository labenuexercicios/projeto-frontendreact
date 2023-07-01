import React from "react";
import {
  AsideFiltro,
  LabelFiltro,
  TamanhoFiltro,
  TituloFiltro,
} from "./FiltersStyle";

function Filters({
  minFilter,
  setMinFilter,
  maxFiler,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
  size,
  setSize,
}) {
  const handleMinFilter = (event) => {
    setMinFilter(event.target.value);
  };

  const handleMaxFilter = (event) => {
    setMaxFilter(event.target.value);
  };

  const handleSearchFilter = (event) => {
    setSearchFilter(event.target.value);
  };

  const handleSizeFilter = (event) => {
    setSize(event.target.value);
  };

  return (
    <AsideFiltro>
      <TituloFiltro>FILTROS</TituloFiltro>
      <LabelFiltro htmlFor="minimo">VALOR MÍNIMO:</LabelFiltro>
      <input
        onChange={handleMinFilter}
        type="number"
        value={minFilter}
        min="0"
        id="minimo"
      />

      <LabelFiltro htmlFor="maximo" >VALOR MÁXIMO:</LabelFiltro>
      <input
        onChange={handleMaxFilter}
        type="number"
        value={maxFiler}
        min="0"
        id="maximo"
      />

      <LabelFiltro htmlFor="busca" >BUSCA POR NOME</LabelFiltro>
      <input onChange={handleSearchFilter} type="text" value={searchFilter} id="busca" />

      <LabelFiltro htmlFor="tamanho" >TAMANHO </LabelFiltro>
      <TamanhoFiltro id="tamanho" value={size} onChange={handleSizeFilter}>
        <option value=""></option>
        <option value="P">P</option>
        <option value="M">M</option>
        <option value="G">G</option>
        <option value="GG">GG</option>
      </TamanhoFiltro>
    </AsideFiltro>
  );
}

export default Filters;

