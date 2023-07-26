import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import {ContainerHome}  from './HomeStyle'

export const Home = ({renderProduct}) => {
 
  return (
    <ContainerHome>
    {renderProduct}
    </ContainerHome>
  )
}

