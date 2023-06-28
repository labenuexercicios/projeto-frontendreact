import React, { useState } from 'react'
import ProductList from '../../assets/ProductList';

import { Search , Form, Button } from './Filters.styled'

const Filters = () => {
  
  const [valorMin, setValorMin] = useState(0);
  const [valorMax, setValorMax] = useState(0);

  const handleValorMin = (event) => {
    setValorMin(event.target.value);
  }

  const handleValorMax = (event) => {
    setValorMax(event.target.value);
  }

  const filteredProducts = ProductList.filter((item) => {
    return item.price >= valorMin && item.price <= valorMax
  })

  
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
