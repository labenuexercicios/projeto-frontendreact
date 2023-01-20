import React from 'react'
import {MainContainer, MainProdContainer} from './style'
// import produtos from '../../data/products'
import Card from '../Card/Card'

export default function Products(props) {
  // produtos.map(e => console.log(e))
  const nome = props.nome;
  const min = props.vmin;
  const max = props.vmax;
  const produtos = props.produtos;
  // console.log(props.form.initialState.vmin)

  return(
    <MainContainer>
      <h1>Produtos</h1>
      <p>Selecione os produtos abaixo</p>

      <MainProdContainer>
        {
        produtos
        .sort((x, y) => x.name > y.name)
        .filter(e => min === '' ? e : e.price > min)
        .filter(e=> max === '' ? e : e.price < max)
        .filter(e=> nome === '' ? e : e.name.toLowerCase().includes(nome.toLowerCase()))
        .sort((x, y) => {
          switch(props.order) {
            case 'C':
              return x.name > y.name;
            case 'D':
              return x.name < y.name;
            default: 
              return x.name > y.name;
          }
        })
        .map(produto => {
          return(<Card addProd={props.addProd} key={produto.id} id={produto.id} name={produto.name} imageUrl={produto.imageUrl} price={produto.price}/>)
        })}
      </MainProdContainer>

    </MainContainer>
  )
}