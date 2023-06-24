import React from 'react'
import { Botao, SectionStyle } from './FiltersStyle'

export default function Filters() {
  return (
    <SectionStyle>
      <h2>Filters</h2>
      <div>
      <p>Valor mínimo:</p>
      <input></input>      
      </div>

      <div>
      <p>Valor máximo:</p>
      <input></input>      
      </div>

      <div>
      <p>Busca por nome:</p>
      <input></input>      
      </div>
    </SectionStyle>

  )
}
