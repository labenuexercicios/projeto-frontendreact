import React from 'react'
import {ContainerItems} from "./ItemsStyle"

export const Items = () => {
  return (
    <ContainerItems>
      <h2>Cart</h2>
      <p> Nome do Produto</p>
      <button>Adicionar</button>
      <button>Remover</button>
      <p>Valor Total: 0 </p>

    </ContainerItems>
  )
}

