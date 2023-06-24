import React from 'react'
import { Card , Etiqueta} from './productCardStyle'

const ProductCard = () => {
  return (
    <>
      <Card>
        <div>
          <img src="" alt="" />
        </div>
        <Etiqueta>
          <h4>Nome do produto</h4>
          <p>Valor</p>
          <button>Adicionar</button>
        </Etiqueta>
      </Card>
    </>
  )
}

export default ProductCard
