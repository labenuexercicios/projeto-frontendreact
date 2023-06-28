import React from 'react'
import { ItensStyle , Button} from './Items.styled'

const Items = (props) => {
  return (
    <ItensStyle>
      
        <p>{props.name}</p>
        <Button>Remover</Button>
  
    </ItensStyle>
  )
}

export default Items
