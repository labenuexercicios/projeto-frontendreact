import { useState } from "react"

export function Filters({inputMax, setMinFilter, inputMin, setMaxFilter, inputSearch, setSearchFilter}){  
  //Filters
  function onChangeMinFilter(event) {
    setMinFilter(event.target.value);
  }

  function onChangeMaxFilter(event) {
    setMaxFilter(event.target.value);
  }

  function onChangeSearchFilter(event) {
    setSearchFilter(event.target.value);
  }
    return(
        <article className="filters">
            <h2>Filters</h2>
            <div className="container minFilter">
                <label htmlFor="minFilter">Valor Minimo:</label>
                <input type="numbers"  value={inputMin} onChange={onChangeMinFilter} />
            </div>
            <div className="container maxFilter">
                <label htmlFor="maxFilter">Valor Máximo:</label>
                <input type="numbers" value={inputMax} onChange={onChangeMaxFilter} />
            </div>
            <div className="container searchFilter">
                <label htmlFor="searchFilter">Buscar por Nome:</label>
                <input type="text" value={inputSearch} onChange={onChangeSearchFilter}/>
            </div>
        </article>
    )
}