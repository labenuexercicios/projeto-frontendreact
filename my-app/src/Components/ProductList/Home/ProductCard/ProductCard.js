import React from 'react'
import { Card , Etiqueta, Lista } from './productCardStyle'


const ProductCard = ({addToCart, filteredProducts}) => {
  
  const listaRenderizada = filteredProducts.map((item, index) => {
    return (
      <Card key={index}>
      <div>
        <img src={item.image} alt=''/>
      </div>
      <Etiqueta>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <div>
          <h4>R$ {item.price.toFixed(2)}</h4>
          <button onClick={() => addToCart(item)}><p>+</p></button>
        </div>
      </Etiqueta>
      </Card>
    )
  })

  return ( 
    <Lista>
      {listaRenderizada}
    </Lista>
  )
}

export default ProductCard

