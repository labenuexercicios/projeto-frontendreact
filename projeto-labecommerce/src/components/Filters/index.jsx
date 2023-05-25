import "./filters.css"

export function Filters(props){  
  //Filters
  function onChangeMinFilter(event) {
    props.setMinFilter(event.target.value);
  }

  function onChangeMaxFilter(event) {
    props.setMaxFilter(event.target.value);
  }

  function onChangeSearchFilter(event) {
    props.setSearchFilter(event.target.value);
  }
    return(
        <article className="filters">
            <h2>Filters</h2>
            <div className="container minFilter">
                <label htmlFor="minFilter">Valor Minimo:</label>
                <input type="numbers"  value={props.inputMin} onChange={onChangeMinFilter} />
            </div>
            <div className="container maxFilter">
                <label htmlFor="maxFilter">Valor Máximo:</label>
                <input type="numbers" value={props.inputMax} onChange={onChangeMaxFilter} />
            </div>
            <div className="container searchFilter">
                <label htmlFor="searchFilter">Buscar por Nome:</label>
                <input type="text" value={props.inputSearch} onChange={onChangeSearchFilter}/>
            </div>
        </article>
    )
}