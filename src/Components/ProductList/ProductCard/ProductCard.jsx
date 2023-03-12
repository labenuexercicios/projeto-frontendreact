import React from "react";
import { Card, Item, Image, Code, Title, Price, SendButton } from "./styles"



const ShowCard = ({cards}) => { 
  
  const addToCart = (cards) => {
    setCartItems([...cartItems, cards]);
  }
    return (
      <Card>
        {                  
            <Item>
              <Image src={cards.image} alt='Trage para Astronauta' />
              <Code>Código:{cards.code}</Code>
              <Title>Nome: {cards.title}</Title>
              <Price>{cards.price}</Price>
              <SendButton onClick={addToCart}>Comprar</SendButton>
            </Item>          
        }
      </Card>
    )   
  }

export default ShowCard;