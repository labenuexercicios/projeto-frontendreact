import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Grid, InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardProduct from '../../components/Card'
import InputSearch from '../../components/Input'
import { StyledContainer, StyledSearchWrapper, StyledTitle } from './styles'

const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const [products, setProducts] = useState(
    require('../../assets/mocks/lojinha.json')
  )

  useEffect(() => {
    console.log(products)
  })

  function handleSearch(value) {
    setSearchInput(value)
  }

  return (
    <StyledContainer>
      <StyledSearchWrapper>
        <InputSearch
          autoFocus={true}
          label="Pesquisar"
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
          type="text"
          endAdornment={
            <InputAdornment position="end">
              <SearchOutlinedIcon />
            </InputAdornment>
          }
        />
      </StyledSearchWrapper>
      <StyledTitle variant="h6" color="inherit">
        Brinquedos
      </StyledTitle>

      <Grid container spacing={2}>
        {products.length > 0 ? (
          products.map((p, i) => (
            <Grid item key={i} xs={12} md={6} lg={3} xl={2}>
              <CardProduct product={p} />
            </Grid>
          ))
        ) : (
          <>
            <Grid container justifyContent="center">
              <StyledTitle variant="h6">Nenhum produto encontrado</StyledTitle>
            </Grid>
          </>
        )}
      </Grid>
    </StyledContainer>
  )
}

export default Home
