import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import { HomeStyle , HomeHeader, HomeGalery } from './Home.styled'

const Home = () => {
  return (
    <>
      <HomeStyle>
        <HomeHeader>
          <h4>Galeria de produtos:</h4>
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </HomeGalery>
      </HomeStyle>
    </>
  )
}

export default Home
