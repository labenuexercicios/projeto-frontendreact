import { Grid, List } from '@mui/material'
import { StyledContainer, StyledTitle } from '../Home/styles'
import React, { useState } from 'react'
import StoreListItem from '../../components/ListItem'

const Cart = () => {
  const [products] = useState([])

  return (
    <StyledContainer>
      <StyledTitle variant='h6' color="inherit">Carrinho de Compras</StyledTitle>
      <List>
        {products.length === 0 ? (
          <Grid container justifyContent="">Nenhum Item no Carrinho</Grid>
        ) : (
          products.map((item) => (
            <StoreListItem key={item.id} product={item} />
          ))
        )}

      </List>
    </StyledContainer>
  )
}

export default Cart
