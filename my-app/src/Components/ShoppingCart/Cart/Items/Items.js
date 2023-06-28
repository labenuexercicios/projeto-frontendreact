import React from 'react'
import { ItensStyle , Button } from './Items.styled'

const Items = ({item}) => {
  
  
  return (
    <ItensStyle>
      
        <p>{item.name}</p>
        <p>{item.price}</p>
        <Button>Remover</Button>
  
    </ItensStyle>
  )
}

export default Items
