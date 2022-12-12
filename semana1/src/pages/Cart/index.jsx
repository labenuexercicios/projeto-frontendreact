import { Grid, List } from '@mui/material'
import { StyledContainer, StyledTitle } from '../Home/styles'
import React from 'react'
import StoreListItem from '../../components/ListItem'
import { useAppContext } from '../../contexts/GlobalContext'

const Cart = () => {
  const {
    carrinho,
  } = useAppContext()


  return (
    <StyledContainer>
      <StyledTitle variant='h6' color="inherit">Carrinho de Compras</StyledTitle>
      <List>
        {carrinho.length === 0 ? (
          <Grid container justifyContent="">Nenhum Item no Carrinho</Grid>
        ) : (
          carrinho.map((item) => (
            <StoreListItem key={item.id} product={item} />
          ))
        )}

      </List>
    </StyledContainer>
  )
}

export default Cart
