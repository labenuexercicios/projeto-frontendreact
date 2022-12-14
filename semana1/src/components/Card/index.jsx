import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { StyledCard, StyledCardActions, StyledCardContent } from './styles'
import { useAppContext } from '../../contexts/GlobalContext'

const CardProduct = ({ produto }) => {
  const {
    adicionarItemAoCarrinho,
  } = useAppContext()

  return (
    <>
      <StyledCard>
        <CardMedia
          component="img"
          height="300"
          image={produto.url}
          alt="green iguana"
        />
        <StyledCardContent>
          <Typography variant="body1">
            <strong>{produto.nome}</strong>
          </Typography>
          <Typography gutterBottom variant="body2">
            <strong>R$ {produto.preco.toFixed(2).replace(".", ",")}</strong>
          </Typography>
        </StyledCardContent>
        <StyledCardActions>
          <Button
            size="small"
            onClick={() => adicionarItemAoCarrinho(produto)}
          >
            Adicionar
          </Button>
        </StyledCardActions>
      </StyledCard>
    </>
  )
}

export default CardProduct
