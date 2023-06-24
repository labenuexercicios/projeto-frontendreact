import React from 'react'

import { Search , Form, Button } from './Filters.styled'

const Filters = () => {
  return (
    <Search> 
      
      <Form action="">
        <label>
          Valor Mínimo: <input type="number" min="1" max="1000"/>
        </label>
          
        <label>
          Valor Maximo: <input type="number" min="1" max="1000"/>
        </label>
          
        <label htmlFor="buscaNome">
          Busca por nome: <input type="text" />
        </label>
          
        <Button>Buscar</Button>
      </Form>
       
    </Search>
  )
}

export default Filters
