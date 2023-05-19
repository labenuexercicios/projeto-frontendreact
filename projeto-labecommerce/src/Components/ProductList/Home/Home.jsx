import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styled from 'styled-components'

const Home = () => {
  const HomeContainer = styled.div`
    width: 60vw;
    
    span{
      display: flex;
      justify-content: space-between;

    }

  `
  const ProductCardContainer = styled.div`
    display:flex;
    margin: 10px 100px;


  `
  
  return (
    <HomeContainer>
      <span>
      <p>Quantidade de produtos:</p>
        <span>
        <p>Ordenacao:</p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

        </span>
      </span>
          <ProductCardContainer>
            <ProductCard />
            <ProductCard />
            <ProductCard />

          </ProductCardContainer>
    </HomeContainer>
  )
}

export default Home