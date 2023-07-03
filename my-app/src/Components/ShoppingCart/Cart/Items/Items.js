import React from 'react'
import { ItensStyle , Button , Lista } from './Items.styled'

const Items = ({cart, removerItem}) => {
  
  const itensCart = cart.map((item, id) => {
    return (
      <ItensStyle key={id}>
        <img src={item.image} alt='imagem do produto'/>
        <div id='etiqueta'>
          <h5>{item.name}</h5>
          <div id='label'>
            <p>R${item.price.toFixed(2)}</p>
            <p>Qtd: {item.amount}</p>
            <Button onClick={()=>removerItem(item)}><p>-</p></Button>
          </div>
        </div>
      </ItensStyle>
    )
  })


  return (
    <Lista>
      {itensCart}
    </Lista>
  )
}

export default Items
