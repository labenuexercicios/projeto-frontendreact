import React from 'react'

import { CardContainer } from './ProductCardStyle'

const ProductCard = (props) => {

  

  return (
    <CardContainer>
      <div>
       <img src={props.imageUrl} />
      </div>
      <p>{props.name}</p>
      <p>{props.value}</p>
      <button>Adicionar ao carrinho</button>
    
    </CardContainer>
    
  )
}

export default ProductCard