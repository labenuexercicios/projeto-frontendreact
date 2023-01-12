import React from 'react'
import {MainContainer, MainProdContainer} from './style'
import produtos from '../../data/products'
import Card from '../Card/Card'

export default function Main(props) {

  // produtos.map(e => console.log(e))

  return(
    <MainContainer>
      <h1>Produtos</h1>
      <p>Selecione os produtos abaixo</p>

      <MainProdContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </MainProdContainer>

    </MainContainer>
  )
}