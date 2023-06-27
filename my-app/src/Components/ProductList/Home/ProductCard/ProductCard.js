import React from 'react'
import { Card , Etiqueta } from './productCardStyle'


const ProductCard = (props) => {
  return (
    <div>
      
        <Card>
          <div>
          <img src={props.image} alt=''/>
          </div>
          <Etiqueta>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <button>Adicionar</button>
          </Etiqueta>
        </Card>
    </div>
  )
}

export default ProductCard

