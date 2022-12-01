import React from 'react'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { CardsContainer } from './ProductPage.styled'
import {Layout} from '../../components/Layout/Layout'


const ProductPage = (props) => {

  const {camisetas, 
    inputHeader, 
    inputMaxPrice, 
    inputMinPrice, 
    sortByPrice,
    addToCart,
    setInputHeader,
    setInputMaxPrice,
    setInputMinPrice,
    setCart,
    setSortByPrice,
    cart
  } = props

  return (
    <Layout
    inputHeader={inputHeader}
    setInputHeader={setInputHeader}
    inputMinPrice = {inputMinPrice}
    setInputMinPrice = {setInputMinPrice}
    inputMaxPrice = {inputMaxPrice}
    setInputMaxPrice = {setInputMaxPrice}    
    sortByPrice = {sortByPrice}
    setSortByPrice = {setSortByPrice}
    itensInCart = {cart.length}
    cart={cart}
    setCart={setCart}
    >
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