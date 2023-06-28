import React, { useState } from 'react'
import ProductList from '../../assets/ProductList';

import { Search , Form, Button } from './Filters.styled'

const Filters = ({handleValorMax, handleValorMin, valorMax, valorMin}) => {
  
  
  
  return (
    <Search> 
      <Form action="">
        <label>
          Valor Mínimo: <input type="number" value={valorMin} min="1" max="1000" onChange={handleValorMin}/>
        </label>
        <hr/> 
        <label>
          Valor Maximo: <input type="number" value={valorMax} min="1" max="1000" onChange={handleValorMax}/>
        </label>
        <hr/>   
        <Button>Buscar</Button>
      </Form>   
    </Search>
  )
}

export default Filters
