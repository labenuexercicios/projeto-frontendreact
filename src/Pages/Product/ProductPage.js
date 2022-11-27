import React from 'react'
import { Card } from '../../components/Card/Card'
import { CardsContainer } from './ProductPage.styled'


const ProductPage = (props) => {

  const {camisetas, 
    inputHeader, 
    inputMaxPrice, 
    inputMinPrice, 
    sortByPrice
  } = props

  return (
    <>
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
              } else{
                return a.price > b.price ? -1 : 1
              }
              
            })
            .map ((camiseta) => {
              return <Card key={camiseta.id} camiseta={camiseta} />
            })}
    </CardsContainer>
    </>
  )
}

export default ProductPage