import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import {
  ContainerConfirm,
  CardConfirm,
  ImageConfirm,
  HeadConfirm,
  ButtonReturn,
  InfoConfirm
} from './ConfirmPage.styled'
import astroconfirm from '../../assets/astroconfirm.png'
import { goToProductPage } from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'

export const CofirmPage = () => {

  const navigate = useNavigate()

  return (
    <Layout>
      <ContainerConfirm>
        <CardConfirm>
          <ImageConfirm src={astroconfirm} alt="Astronauta de Cadastrando" />
          <InfoConfirm>
            <HeadConfirm>Seu produto está sendo preparado, breve um foguete chegará com a sua entrega!</HeadConfirm>
            <ButtonReturn onClick={() => goToProductPage(navigate)}>Voltar para página inicial</ButtonReturn>
          </InfoConfirm>
        </CardConfirm>
      </ContainerConfirm>
    </Layout>

  )
}
