import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import astroErro from '../../assets/astroErroPage.png'
import { ContainerError } from './ErroPage.styled'

export const ErroPage = () => {
  return (
    <Layout>
      <ContainerError>
        <img src={astroErro} alt="Imagem de Erro" />
        <h2>Deu erro na página!</h2>
        <h2>O astronauta está perdido no espaço!</h2>
      </ContainerError>
    </Layout>
  )
}
