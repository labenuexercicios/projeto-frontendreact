import React from 'react'
import{Container} from './productCardStyle'

const ProductCard = () => {
  return (
  <>
      <Container>
        <p>ProductCard</p>
        <div className= "cards">
          <img src="https://img.elo7.com.br/product/original/3464BAA/camiseta-disco-voador-camisa-extraterrestre-nave-espacial-et-camiseta-disco-voador.jpg"/>
        </div> 
        <div className= "description">
          <p>Nome:</p>
            <p>Descrição:</p>
            <p>Preço:</p>
            <button>Adicionar ao carrinho</button>
        </div>
    </Container>
  </>
  )
}

export default ProductCard
