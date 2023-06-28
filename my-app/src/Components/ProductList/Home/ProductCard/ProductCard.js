import React from 'react'
import { Card , Etiqueta } from './productCardStyle'


const ProductCard = ({ProductList, addToCart, filteredProducts}) => {
  
  const listaRenderizada = filteredProducts.map((item, index) => {
    return (
      <Card key={index}>
      <div>
        <img src={item.image} alt=''/>
      </div>
      <Etiqueta>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => addToCart(item)}>Adicionar</button>
      </Etiqueta>
      </Card>
    )
  })



  return ( 
    <div>
      {listaRenderizada}
    </div>
  )
}

export default ProductCard

