import React from "react";
import { Card, Item, Image, Code, Title, Price, SendButton } from "./styles"

const ProductCard = (props) => {
  return (  
    <Card>     
      {props.cards
        .filter((item) => {
          return item.title.toLowerCase().includes(props.query.toLowerCase())
        })
        .filter((item) => {

          return props.minValue ? item.price >= props.minValue : item

        })
        .filter((item) => {

          return props.maxValue ? item.price <= props.maxValue : item
        })
        .sort((a, b) => {
          if (props.ordenacao === "crescente") {
            return a.title < b.title ? -1 : 1
          }
          else if (props.ordenacao === "decrescente") {
            return a.title > b.title ? -1 : 1
          }
        })
        .map((item) =>
          <Item key={item.id}>
            <Image src={item.image} alt='Trage para Astronauta' />
            <Code>Código:{item.code}</Code>
            <Title>Nome: {item.title}</Title>
            <Price>{props.currencyBrazil(item.price, true)}</Price>
            <SendButton onClick={() =>  props.addToCart(item) }>Comprar</SendButton>
          </Item>)}
    </Card>
  )

}
export default ProductCard;