import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { StyledCard, StyledCardActions, StyledCardContent } from './styles'


const CardProduct= ({ product }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="300"
        image={product.url}
        alt="green iguana"
      />
      <StyledCardContent>
        <Typography variant="body1">
          <strong>{product.nome}</strong>
        </Typography>
        <Typography gutterBottom variant="body2">
          <strong>R$ {product.preco}</strong>
        </Typography>
      </StyledCardContent>
      <StyledCardActions>
        <Button size="small">Adicionar</Button>
      </StyledCardActions>
    </StyledCard>
  )
}

export default CardProduct
