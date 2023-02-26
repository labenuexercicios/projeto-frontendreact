import React from "react";
import { Card, Item, Image, Code, Title, Price, SendButton } from "./styles"



const ShowCard = ({ cards }) => {

  return (
    <>       
      <Card>        
        {
          cards.map(element =>(
          <Item>
            <Image src={element.image} alt='Trage para Astronauta'/>
            <Code>Código:{element.code}</Code>
            <Title>{element.title}</Title>
            <Price>{element.price}</Price>
            <SendButton>Comprar</SendButton>
          </Item>
          ))
        }
      </Card>      
    </>
  )

}
export default ShowCard;