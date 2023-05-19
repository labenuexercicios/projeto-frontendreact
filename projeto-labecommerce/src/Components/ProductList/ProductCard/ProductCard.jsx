import React from 'react'
import styled from 'styled-components'

const ProductCard = (props) => {

  const CardContainer = styled.div`
    border: 1px solid black;
    height: 500px;
    padding: 1em;
    width: 300px;

    div {
      height: 70%;
    }
    img {
      width: 100%;
    }

  `

  return (
    <CardContainer>
      <div>
       <img src={props.imageUrl} />
      </div>
      <p>{props.name}</p>
      <p>{props.value}</p>
      <button>Adicionar ao carrinho</button>
    
    </CardContainer>
    
  )
}

export default ProductCard