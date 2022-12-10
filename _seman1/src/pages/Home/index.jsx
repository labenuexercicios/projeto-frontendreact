import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Grid, InputAdornment } from '@mui/material'
import React from 'react'
import CardProduct from '../../components/Card'
import InputSearch from '../../components/Input'
import { StyledContainer, StyledSearchWrapper, StyledTitle } from './styles'
import produtos from '../../assets/mocks/lojinha.json'
import { useAppContext } from '../../contexts/GlobalContext'

const Home = () => {
  const {
    campoBuscarNome,
    setCampoBuscarNome,
    campoPrecoMin,
    setCampoPrecoMin,
    campoPrecoMax,
    setCampoPrecoMax
  } = useAppContext()

  const produtosFiltrados = campoBuscarNome.length > 0 || campoPrecoMin.length > 0 || campoPrecoMax.length > 0 ?
    produtos
      .filter((item) =>
        item.nome.toLowerCase().includes(campoBuscarNome.toLowerCase())
      )
      .filter((item) => {
        return item.preco >= campoPrecoMin;
      })
      .filter((item) => {
        return campoPrecoMax ? item.preco <= campoPrecoMax : produtos;
      }) : produtos

  return (
    <StyledContainer>
      <StyledSearchWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={4}>
            <InputSearch
              autoFocus={true}
              label="Pesquisar"
              value={campoBuscarNome}
              onChange={(e) => setCampoBuscarNome(e.target.value)}
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <SearchOutlinedIcon />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <InputSearch
              label="Valor Minimo"
              value={campoPrecoMin}
              onChange={(e) => setCampoPrecoMin(e.target.value)}
              type="text"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <InputSearch
              label="Valor Maximo"
              value={campoPrecoMax}
              onChange={(e) => setCampoPrecoMax(e.target.value)}
              type="text"
            />
          </Grid>
        </Grid>
      </StyledSearchWrapper>
      <StyledTitle variant="h6" color="inherit">
        Brinquedos
      </StyledTitle>

      <Grid container spacing={2}>
        {produtosFiltrados.length === 0 ? (
          <Grid container justifyContent="center">
            <StyledTitle variant="h6">Nenhum produto encontrado</StyledTitle>
          </Grid>
        ) : (
          produtosFiltrados.map((p, i) => (
            <Grid item key={i} xs={12} md={6} lg={3} xl={2}>
              <CardProduct produto={p} />
            </Grid>
          ))
        )}
      </Grid>
    </StyledContainer>
  )
}

export default Home
