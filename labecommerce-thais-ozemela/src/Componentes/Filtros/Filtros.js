import React from 'react'
import { FilterContainer, StyleInput, Form, StyleButton } from './FiltrosStyle'

function Filtros({
   minFilter,
   setMinFilter,
   maxFilter,
   setMaxFilter,
   searchFilter,
   setSearchFilter
}) {

   const minimumValueInput = (e) => {
       setMinFilter(e.target.value)
   }

   const maximumValueInput = (e) => {
       setMaxFilter(e.target.value)
   }

   const searchNameInput = (e) => {
       setSearchFilter(e.target.value)
   }

   const clearFilters = () => {
       return (
       setMaxFilter(""),
       setMinFilter(""),
       setSearchFilter(""))
   }

   return (
       <FilterContainer>
           <h3>Filtros</h3>
           <Form>
               <label><strong>Valor Mínimo:</strong>
                   <StyleInput type="number" value={minFilter} onChange={minimumValueInput} min="0"></StyleInput>
               </label>    
               <br></br>
               <br></br>
               <label><strong>Valor Máximo:</strong>
                   <StyleInput type="number" value={maxFilter} onChange={maximumValueInput} min="0"></StyleInput>
               </label>
               <br></br>
               <br></br>
               <label><strong>Busca por Nome:</strong>
                   <StyleInput type="text" value={searchFilter} onChange={searchNameInput}></StyleInput>
               </label>
               <br></br>
               <br></br>
               <StyleButton onClick={() => {clearFilters()}}>Limpar filtros</StyleButton>
           </Form>


       </FilterContainer>
   )
}

export default Filtros;