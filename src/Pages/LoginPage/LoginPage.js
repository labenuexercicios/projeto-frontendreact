import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import { ContainerLogin } from './LoginPage.styled'
import {LoginCard} from '../../components/LoginCard/LoginCard'

export const LoginPage = () => {
  return (
    <Layout>
        <ContainerLogin>
        <LoginCard/>
        </ContainerLogin>
    </Layout>
  )
}
