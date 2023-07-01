import React from 'react'
import { ItensStyle , Button } from './Items.styled'

const Items = ({cart, removerItem}) => {
  
  const itensCart = cart.map((item, id) => {
    return (
      <ItensStyle key={id}>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>Quantidade: {item.amount}</p>
        <Button onClick={()=>removerItem(item)}>Remover</Button>
      </ItensStyle>
    )
  })


  return (
    <div>
      {itensCart}
    </div>
  )
}

export default Items
