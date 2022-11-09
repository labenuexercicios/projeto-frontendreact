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
import coin from '../../img/coin.png'
import { useState } from "react"
import  './Card.css'


export const Card = (props) => {
  const [Style, setStyle] = useState("hideCard")

  const [itemCart, setItemCart] = useState({})

  function onClickButtonBuy() {
    setItemCart({props})
    props.setListCart([
      ...props.listCart,
      itemCart
    ])
    console.log(props.listCart)

  }

  return(
    <ContainerCard className={Style}>
        <Description>
          <p>{props.description}</p>
          <p><a href={props.link} target="_blank">&rarr; SAIBA MAIS</a></p>
        </Description>
        <ImgSatelite src={props.image} alt={props.name}/>
        <DivYear>
          <h3>{props.year}</h3>
          <div></div>
        </DivYear>
        <ContainerInformation>
          <Information>
            <InfoDiv>
              <h1>{props.name.toUpperCase()}</h1>
              <Price>
                <img src={coin}/>
                <p>{props.price}</p>
              </Price>
            </InfoDiv>
            <InfoDiv>
              <button onClick={() => setStyle("openCard")}>INFO</button>
              <button onClick={onClickButtonBuy}>BUY</button>
            </InfoDiv>
          </Information>
          <Detail1></Detail1>
          <Detail2></Detail2>
        </ContainerInformation>
        <HideButton onClick={() => setStyle("hideCard")}>&laquo;</HideButton>
    </ContainerCard>
  )
}