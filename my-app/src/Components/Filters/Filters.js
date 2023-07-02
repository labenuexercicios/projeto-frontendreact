import React from 'react'

import { Search , Form } from './Filters.styled'

const Filters = ({valorMax, valorMin, setValorMin, setValorMax}) => {
  
  const handleValorMin = (event) => {
    setValorMin(event.target.value);
  }

  const handleValorMax = (event) => {
    setValorMax(event.target.value);
  }
  
  
  return (
    <Search> 
      <Form action="">
        <label>
        <i class="fa fa-filter" aria-hidden="true"></i>
          Valor Mínimo: <input type="number" placeholder='R$' value={valorMin} min="1" max="1000" onChange={handleValorMin}/>
        </label>
        <label>
        <i class="fa fa-filter" aria-hidden="true"></i>
          Valor Máximo: <input type="number" placeholder='R$' value={valorMax} min="1" max="1000" onChange={handleValorMax}/>
        </label>
  
      </Form>   
    </Search>
  )
}

export default Filters
