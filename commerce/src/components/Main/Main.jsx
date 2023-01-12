import React from 'react'
import {MainContainer} from './style'
import produtos from '../../data/products'

export default function Main(props) {

  // produtos.map(e => console.log(e))

  return(
    <MainContainer>
      <h1>Produtos</h1>
      <p>Selecione os produtos abaixo</p>
    </MainContainer>
  )
}