import React from 'react'
import {ContainerProduct, ButtonAdicionar} from "./ProductCardStyle"


export const ProductCard = ({product}) => {
  
  return (
    <ContainerProduct>
      
      <img src={product.imageUrl}/>
      <p>{product.name}</p>
      <p>R${product.price}</p>
      
      <ButtonAdicionar>Adicionar ao Carrinho</ButtonAdicionar>
    </ContainerProduct>
  )
}
