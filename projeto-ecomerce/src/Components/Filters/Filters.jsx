import React from 'react'
import {ContainerFilter} from "./FiltersStyle"

//recebendo a busca por preço
export const Filters = ({ valMin, setValMin, valMax, setValMax}) => {

  console.log();
  return (
    
    <ContainerFilter>
      <h2>Filter</h2>

      <label  htmlFor='Valor Minimo'> Valor Minimo: 
      
      <input 
      className='form'
      id='Valor Minimo'
      min='0'
      type='number'  
      value={valMin}
      onChange={(event)=>setValMin(event.target.value)} />
      </label>

      <label htmlFor='Valor Maximo'> Valor Máximo:
      <input 
        className='form'
        id='Valor Maximo'
        type='number'
        value={valMax}
        onChange={(event)=>setValMax(event.target.value)} />
      </label>

      {/* <label htmlFor='Buscar por nome'> Buscar por nome:
      <input 
        className='form'
        id='Buscar por nome'
        value={valMax}
        onChange={()=>()} />

      </label> */}
        
      
     
    </ContainerFilter>
  )
}
