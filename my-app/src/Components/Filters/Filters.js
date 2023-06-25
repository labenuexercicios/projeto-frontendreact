import React from 'react'

import { Search , Form, Button } from './Filters.styled'

const Filters = () => {
  return (
    <Search> 
      
      <Form action="">
        <label>
          Valor Mínimo: <input type="number" min="1" max="1000"/>
        </label>
        <hr/> 
        <label>
          Valor Maximo: <input type="number" min="1" max="1000"/>
        </label>
        <hr/>   
        <Button>Buscar</Button>
      </Form>   
    </Search>
  )
}

export default Filters
