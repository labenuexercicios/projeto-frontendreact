import { FilterStyle } from './FiltersStyle'

const Filters = (props) => {
  // console.log(props)
  

  return (
    <FilterStyle>
        <h3>Filtros</h3>

        <label htmlFor='minFilter'>Valor mínimo</label>
        <input 
          onChange={props.handleChange} 
          value={props.data.minFilter} 
          type="number" 
          name="minFilter"
          
        />

        <label htmlFor='maxFilter'>Valor máximo</label>
        <input 
          onChange={props.handleChange} 
          value={props.data.maxFilter} 
          type="number" 
          name="maxFilter"
          
        />

        <label htmlFor='searchFilter'>Busca por nome</label>
        <input 
          onChange={props.handleChange} 
          value={props.data.searchFilter} 
          type="text" 
          name="searchFilter" 
        />
    </FilterStyle>
  )
}

export default Filters