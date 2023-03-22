import React from "react";
import { Card, Item, Image, Code, Title, Price, SendButton } from "./styles"

const ProductCard = (props) => {
  console.log(props)

  const addToCart = (index) => {
    const newProd = {
      code: props.cards[index].code,
      title: props.cards[index].title,
      price: props.currencyBrazil(props.cards[index].price, true),
      image: props.cards[index].image,
      amount: 1
    }
    props.setCartItems([...props.cartItems, newProd]);
  }
  return (
    <Card>
      {/*  {filterItem
        .filter((item) => {
         return item.title.toLowerCase().includes(query.toLowerCase())
       })
       .filter((item) => {

         return item ? item.price.includes(minValue) : item
       })
       .filter((item) => {

         return item ? item.price.includes(maxValue) : item
       }) */} 
       {props.cards.map((card,index)=> 
        <Item key={index}>
          <Image src={card.image} alt='Trage para Astronauta' />
          <Code>Código:{card.code}</Code>
          <Title>Nome: {card.title}</Title>
          <Price>{props.currencyBrazil(card.price,true)}</Price>
          <SendButton onClick={() => { addToCart(index) }}>Comprar</SendButton>
        </Item>)}
    </Card>
  )

}
export default ProductCard;