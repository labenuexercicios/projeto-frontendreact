import React from 'react'
import { FilterStyle } from './FiltersStyle'

const Filters = (props) => {
  console.log(props)
  

  return (
    <FilterStyle>
        <h3>Filters</h3>

        <label htmlFor='minFilter'>Valor minimo</label>
        <input 
          onChange={props.handleChange} 
          value={props.data.minFilter} 
          type="number" 
          name="minFilter"
          
        />

        <label htmlFor='maxFilter'>Valor maximo</label>
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