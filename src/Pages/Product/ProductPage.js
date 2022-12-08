import React, { useContext } from 'react'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { CardsContainer } from './ProductPage.styled'
import {Layout} from '../../components/Layout/Layout'
import { GlobalContext } from '../../contexts/GlobalContext'


const ProductPage = () => {

  const context = useContext(GlobalContext)

  const {camisetas, 
    inputHeader, 
    inputMaxPrice, 
    inputMinPrice, 
    sortByPrice,
    addToCart
  } = context

  return (
    <Layout>
    <CardsContainer>
            {camisetas
            .filter((camiseta)=>{
              
              return inputHeader ? camiseta.title.includes(inputHeader) : camisetas
            })
            .filter((camiseta)=>{
              console.log(camiseta.price >= inputMinPrice)
              return camiseta.price >= inputMinPrice
              
            })
            .filter ((camiseta) =>{
              return camiseta.price <= inputMaxPrice
            })
            .sort((a, b)=>{
              if (sortByPrice === "crescente"){
                return a.price < b.price ? -1 : 1
              } else if (sortByPrice === "decrescente") {
                return a.price > b.price ? -1 : 1
              } else {
                console.log('Deu errado algo na busca.')
              }
            })
            .map ((camiseta) => {
              return <ProductCard key={camiseta.id} 
              camiseta={camiseta} 
              addToCart={addToCart}
              />
            })}
    </CardsContainer>
    </Layout>
  )
}

export default ProductPage