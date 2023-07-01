import React from 'react'
import { Title, Lista,Filters } from './filterStyle'
import { useState } from 'react'
import productsList from '../../assents/productsList'


const Filter = ({ products, searchFilter, onSearch, onClear, minFilter, 
  maxPrice,onMinFilterChange, onMaxFilterChange}) => {
 

  return (
    
    <>
     
    <Filters>
      <Title>Filters</Title>
      <Lista>
      
      <li>Valor Mínimo:</li>
      <div>
    
      <input
        type="number"
        placeholder="Preço mínimo"
        value={minFilter}
        onChange={onMinFilterChange}
      />
      </div>
      <li>Valor Maximo:</li>
      <div>
      <input
        type="number"
        placeholder="Preço máximo"
        value={maxPrice}
        onChange={onMaxFilterChange}
      />
      </div>

      <li>Busca por nome:</li>
      <div>
      <input
        type="text"
        placeholder="Digite sua busca..."
        value={searchFilter}
        onChange={onSearch}
        
      />
      
      <button onClick={onClear}>Limpar</button>
     
      </div>
      </Lista>
    </Filters>
   
    </>
  )
}

export default Filter
