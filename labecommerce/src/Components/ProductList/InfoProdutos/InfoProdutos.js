import React, { useState } from 'react'
import {Nav } from './infoProdutosStyle'



 const InfoProdutos = ( {ordination, onOrdinationChange,productsList} ) => {
  
  
  return (
    <Nav>
      <p>Quantidade de Produtos:{productsList.length} </p>
     <div>
       <select value={ordination} onChange={onOrdinationChange}>
         <option value="">Selecione a ordenação</option>
         <option value="asc">Ordem Crescente</option>
         <option value="desc">Ordem Decrescente</option>
       </select>
     </div>
    
       
    </Nav>
  )
}

export default InfoProdutos
