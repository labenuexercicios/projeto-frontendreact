import { FilterStyle } from './FiltersStyle'

const Filters = (props) => {
  // console.log(props)
  

  return (
    <FilterStyle>
        <h3>Filtros</h3>

        <label htmlFor='minFilter'>Valor mínimo</label>
        <input 
          onChange={(e) => props.setMinFilter(e.target.value)} 
          value={props.minFilter} 
          type="number" 
          name="minFilter"
          
        />

        <label htmlFor='maxFilter'>Valor máximo</label>
        <input 
          onChange={(e) => props.setMaxFilter(e.target.value)} 
          value={props.maxFilter} 
          type="number" 
          name="maxFilter"
          
        />

        <label htmlFor='searchFilter'>Busca por nome</label>
        <input 
          onChange={(e) => props.setSearchFilter(e.target.value)} 
          value={props.searchFilter} 
          type="text" 
          name="searchFilter" 
        />
    </FilterStyle>
  )
}

export default Filters