import React, { useState, useEffect } from 'react'
import {
    CardPayment,
    ImagemProduto,
    DetalheProduto,
    PriceCard,
    QuantityProduct,
    DescricaoProduto,
    ChoosenSize,
    ContentProduct,
} from './PayCard.styled'
import { priceFormatter } from '../../utils/priceFormatter'



export const PayCard = (props) => {

    const { camiseta,
        increaseQuantityInCart,
        decreaseQuantityInCart,
    } = props


    const cardFromLocalStorage = JSON.parse(localStorage.getItem("card") || "[]")
    const [card, setCard] = useState(cardFromLocalStorage)

    useEffect(()=>{
        localStorage.setItem("card", JSON.stringify(card))
      }, [card])
  
      const addToCard = (cardToAdd, size) => {
        const newCard = [...card]
    
        const cardFound = newCard.find((cardInCard)=>cardInCard.id === cardToAdd.id && cardInCard.cartSize === size)
    
        if (!cardFound){
          const newCard = {...cardToAdd, cartSize: size, quantity: 1}
          newCard.push(newCard)
        } else {
          console.log(cardFound.cartSize)
          if(cardFound.cartSize === size){
            console.log("entrou")
            cardFound.quantity ++
          } else {
            console.log("entrou no else 2")
            const newCard = {...cardToAdd, cartSize: size, quantity: 1}
            newCard.push(newCard) 
          }}
          
          setCard(newCard)
          JSON.stringify(newCard)
          localStorage.setItem(card, newCard)
        }
          
          const removeProductCard = (cardToRemove) =>{
            const newCard = [...card]
            const productRemove = newCard.find ((cardInCard)=> cardInCard.id === cardToRemove.id)
            const productRemoveIndex = newCard.findIndex ((cardInCard)=> cardInCard.id === cardToRemove.id)
            console.log(productRemove)
            newCard.splice(productRemoveIndex, 1)
            setCard(newCard)
          }

   
    return (
        <>
            <CardPayment>
                <ContentProduct>
                    <ImagemProduto src={camiseta.image} alt="Imagem camiseta" />
                    <DetalheProduto>
                        <div>
                            <h3>{camiseta.title}</h3>
                            <p>***** {camiseta.rating}</p>
                            <ChoosenSize>Tamanho: {camiseta.cartSize}</ChoosenSize>
                        </div>
                        <DescricaoProduto>
                            <p>{camiseta.description}</p>
                        </DescricaoProduto>
                    </DetalheProduto>
                    <PriceCard>
                    <h2>{priceFormatter.format(camiseta.price)}</h2>
                        <QuantityProduct>
                            <button onClick={() => decreaseQuantityInCart(camiseta)}>-</button>
                            {camiseta.quantity}
                            <button onClick={() => increaseQuantityInCart(camiseta)}>+</button>
                        </QuantityProduct>
                </PriceCard>
                </ContentProduct>
            </CardPayment>
        </>
    )
}
