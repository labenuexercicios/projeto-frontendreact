import React from 'react'
import { Title, Lista,Filters } from './filterStyle'
import { useState } from 'react'
import productsList from '../../assents/productsList'


const Filter = ({ products, searchFilter, onClear, minFilter, 
  maxFilter,setMinFilter, setMaxFilter, setSearchFilter}) => {
 
    const handleMinFilterChange = (event) => {
      setMinFilter(event.target.value);
    };
    const handleMaxFilterChange = (event) => {
      setMaxFilter(event.target.value);
    };
  
    const handleSearchFilterChange = (event) => {
      setSearchFilter(event.target.value);
    };
    

  return (
    
    <>
     
    <Filters>
      <Title>Filters</Title>
      <Lista>
      
      <label htmlFor="minFilter">Mínimo:</label>
      <input type="number" id="minFilter" value={minFilter} onChange={handleMinFilterChange} />

      <label htmlFor="maxFilter">Máximo:</label>
      <input type="number" id="maxFilter" value={maxFilter} onChange={handleMaxFilterChange} />
       
      <label htmlFor="searchFilter">Pesquisar:</label>
      <input type="text" id="searchFilter" value={searchFilter} onChange={handleSearchFilterChange} />
      
      <button onClick={onClear}>Limpar</button>
      
      </Lista>
    </Filters>
   
    </>
  )
}

export default Filter
