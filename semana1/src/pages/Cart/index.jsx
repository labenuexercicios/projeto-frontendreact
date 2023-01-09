import { Grid, List } from '@mui/material'
import { StyledContainer, StyledTitle } from './styles'
import React from 'react'
import CartListItem from '../../components/ListItem'
import { useAppContext } from '../../contexts/GlobalContext'

const Cart = () => {
  const { carrinho, valorTotal } = useAppContext()

  return (
    <StyledContainer>
      <Grid container>
        <Grid item md={10}>
          <StyledTitle variant='h6' color="inherit">
            Carrinho de Compras
          </StyledTitle>
        </Grid>
        <Grid item md={2}>
          <StyledTitle variant='h6' color="inherit">
            Total: {valorTotal.toFixed(2).replace(".", ",")}
          </StyledTitle>
        </Grid>
      </Grid>

      <List>
        {carrinho.length === 0 ? (
          <Grid container justifyContent="center">
            <StyledTitle variant='h6' color="inherit">
              Nenhum Item no Carrinho
            </StyledTitle>
          </Grid>
        ) : (
          carrinho.map((item) => (
            <CartListItem
              key={item.id}
              index={item.id}
              produto={item}
            />
          ))
        )}
      </List>
    </StyledContainer>
  )
}

export default Cart
