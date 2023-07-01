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
          Valor Mínimo: <input type="number" value={valorMin} min="1" max="1000" onChange={handleValorMin}/>
        </label>
        <hr/> 
        <label>
          Valor Maximo: <input type="number" value={valorMax} min="1" max="1000" onChange={handleValorMax}/>
        </label>
        <hr/>   
      </Form>   
    </Search>
  )
}

export default Filters
