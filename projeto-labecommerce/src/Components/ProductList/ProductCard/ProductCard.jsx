import React from 'react'
import styled from 'styled-components'

const ProductCard = () => {
  const CardContainer = styled.div`
    border: 1px solid black;
    height: 500px;
    padding: 1em;
    width: 300px;

    div {
      height: 70%;
    }

  `

  return (
    <CardContainer>
      <div>
       <p>ProductCard</p> 
      </div>
      <p>Nome do Produto</p>
      <p>valor</p>
      <button>Adicionar ao carrinho</button>
    
    </CardContainer>
    
  )
}

export default ProductCard