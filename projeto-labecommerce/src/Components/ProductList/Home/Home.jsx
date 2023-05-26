import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { HomeContainer, ProductCardContainer } from './HomeStyle'

const Home = (props) => {
  // console.log(props.produtos)
  const [ordination, setOrdination] = React.useState('')

  function handleOrdinationChange(event) {
    console.log(event.target.value)
    setOrdination(event.target.value)
  }

 
  
  return (
    <HomeContainer>
      <span>
      <p>Quantidade de produtos:{props.produtos.length}</p>
        <span>
        <p>Ordenacao:</p>
          <select 
            onChange={handleOrdinationChange}
            value={ordination}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

        </span>
      </span>
          <ProductCardContainer>
            <ProductCard 
              id={props.produtos[0].id} 
              name={props.produtos[0].name}
              value={props.produtos[0].value}
              imageUrl={props.produtos[0].imageUrl}
            />
            <ProductCard 
              id={props.produtos[1].id} 
              name={props.produtos[1].name}
              value={props.produtos[1].value}
              imageUrl={props.produtos[1].imageUrl}
            />
            <ProductCard 
              id={props.produtos[2].id} 
              name={props.produtos[2].name}
              value={props.produtos[2].value}
              imageUrl={props.produtos[2].imageUrl}
            />

          </ProductCardContainer>
    </HomeContainer>
  )
}

export default Home