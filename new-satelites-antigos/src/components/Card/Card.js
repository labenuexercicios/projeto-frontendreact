import {ContainerCard, 
        InfoDiv, 
        HideButton, 
        Detail1, 
        Detail2, 
        ContainerInformation, 
        ImgSatelite,
        DivYear,
        Description, 
        Information, 
        Price } from "./styled"
import coin from '../../assets/coin.png'
import { useState } from "react"
import  './Card.css'


export const Card = (props) => {
  const [style, setStyle] = useState("hideCard")

  const newListCart = [...props.listCart]
  // console.log(newListCart)

  
  function addToCart(item) {
    const itemFound = newListCart.find((element) => element.id === item.id)     
    if (!itemFound) {
      newListCart.push(item)
    }else {
      item.quantity++
    }
    props.setListCart(newListCart)
  }
  

  return(
    <ContainerCard className={style}>
        <Description>
          <p>{props.satellite.description}</p>
          <p><a href={props.satellite.link} target="_blank">&rarr; SAIBA MAIS</a></p>
        </Description>
        <ImgSatelite src={props.satellite.image} alt={props.satellite.name}/>
        <DivYear>
          <h3>{props.satellite.year}</h3>
          <div></div>
        </DivYear>
        <ContainerInformation>
          <Information>
            <InfoDiv>
              <h1>{props.satellite.name.toUpperCase()}</h1>
              <Price>
                <img src={coin}/>
                <p>{props.satellite.price}</p>
              </Price>
            </InfoDiv>
            <InfoDiv>
              <button onClick={() => setStyle("openCard")}>INFO</button>
              <button onClick={() => addToCart(props.satellite)}>BUY</button>
            </InfoDiv>
          </Information>
          <Detail1></Detail1>
          <Detail2></Detail2>
        </ContainerInformation>
        <HideButton onClick={() => setStyle("hideCard")}>
          <p>&laquo;</p>
        </HideButton>
    </ContainerCard>
  )
}