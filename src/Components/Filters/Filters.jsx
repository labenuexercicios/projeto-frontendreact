import React from 'react'
import { AsideFiltro, TituloFiltro } from './FiltersStyle'

function Filters() {
  return (
    <AsideFiltro>
    <TituloFiltro>Filters</TituloFiltro>
    <label>Valor minímo:</label>
    <input type="text" />
    <label>Valor máximo:</label>
    <input type="text" />
    <label>Busca por nome:</label>
    <input type="text" />
    </AsideFiltro>
  )
}

export default Filters