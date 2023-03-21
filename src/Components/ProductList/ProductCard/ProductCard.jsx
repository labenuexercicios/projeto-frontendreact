import React from "react";
import { Card, Item, Image, Code, Title, Price, SendButton } from "./styles"

const ProductCard = (props) => { 

  const addToCart = (index) => {
    const newProd = {
      code: props.cards[index].code,
      name: props.cards[index].name,
      price: props.cards[index].price,
      amount: 1
    }
    props.setCartItems([...props.cartItems, newProd]);
  }
    return (
      <Card>
        {   props.cards.map((cards,index)=>               
            <Item key={index}>
              <Image src={cards.image} alt='Trage para Astronauta' />
              <Code>Código:{cards.code}</Code>
              <Title>Nome: {cards.title}</Title>
              <Price>{cards.price}</Price>
              <SendButton onClick={()=>{addToCart(index)}}>Comprar</SendButton>
            </Item>)          
        }
      </Card>
    )   
  }

export default ProductCard;