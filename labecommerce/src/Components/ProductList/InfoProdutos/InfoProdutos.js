import React from 'react'
import {Nav } from './infoProdutosStyle'
import productsList from '../../../assents/productsList';
import { useState } from 'react';



 const InfoProdutos = ( {ordination, onOrdinationChange} ) => {

  // const totalQuantity = productsList.reduce((total, product) => total + product.quantity, 0);

  return (
    <Nav>
     <div>
       {/* <p>Total de Produtos: {totalQuantity}</p> */}
       <p>Produtos encontrados: {productsList.length}</p>
     </div>
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
