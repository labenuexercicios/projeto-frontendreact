import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import { HomeStyle , HomeHeader, HomeGalery } from './Home.styled'
import { quantidade } from '../../../assets/ProductList'

const Home = () => {
  return (
    <>
      <HomeStyle>
        <HomeHeader>
          <h4>Galeria de produtos: {quantidade} produtos</h4>
          <label>
            Ordernar por:
            <select name="" id="">
                <option value="">Selecione ordem</option>
                <option value="">Crescente</option>
                <option value="">Descrescente</option>
            </select>
          </label>
        </HomeHeader>
        <HomeGalery>
          <ProductCard />
        </HomeGalery>
      </HomeStyle>
    </>
  )
}

export default Home
