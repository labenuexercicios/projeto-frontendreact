import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import { ContainerConfirm,
CardConfirm,
ImageConfirm,
HeadConfirm,
ButtonReturn,
InfoConfirm } from './ConfirmPage.styled'
import astroconfirm from '../../assets/astroconfirm.png'
import { goToProductPage } from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'

export const CofirmPage = () => {

    const navigate = useNavigate()

  return (
    <Layout>
        <ContainerConfirm>
        <CardConfirm>
            <ImageConfirm src={astroconfirm} alt="Astronauta de Cadastrando"/>
            <InfoConfirm>
                <HeadConfirm>Sua compra está sendo preparada e sairá como um foguete direto para sua casa!</HeadConfirm>
                <ButtonReturn onClick={()=>goToProductPage(navigate)}>Voltar para página inicial</ButtonReturn>
            </InfoConfirm>
        </CardConfirm>
        </ContainerConfirm>
    </Layout>
    
  )
}
