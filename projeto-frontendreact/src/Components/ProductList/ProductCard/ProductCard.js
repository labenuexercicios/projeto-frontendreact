import React from 'react'
import { StylesProductCard } from './ProductCardStyle'

const Produtos = () => {
  return (
    <div>
      <h3>ProductCard</h3>
      <p>Nome do Produto</p>
      <p>Valor</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  )


}


export default function ProductCard() {
  return (
    <>
      <StylesProductCard>
      <Produtos />
      <Produtos />
      <Produtos />
      </StylesProductCard>

    </>

  )
}
