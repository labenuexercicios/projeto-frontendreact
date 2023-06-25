import React from 'react'
import { Title, Lista,Filters } from './filterStyle'




const Filter = () => {
  return (
    <>
    
    <Filters>
      <Title>Filters</Title>
      <Lista>
      <li>Valor Mínimo:</li>
      <input/>
      <li>Valor Maximo:</li>
      <input/>
      <li>Busca por nome:</li>
      <input/>
      </Lista>
    </Filters>
    </>
  )
}

export default Filter
