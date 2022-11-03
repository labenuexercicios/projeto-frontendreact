import { ContainerCard, InfoDiv, Button, HideButton, Detail1, Detail2, Anchor, ContainerInformation, ImgCoin, ImgSatelite, Description, Information, Name, Price } from "./styled"
// import satelites from '../../Satellites/satellites.json'
import coin from '../../img/coin.png'
import satellites from '../../Satellites/satellites.json'
import { useState } from "react"
import  './Card.css'

export const Card = (props) => {
  const [Style, setStyle] = useState("hideCard")

  function OpenCard() {
    setStyle("openCard")
  }

  function HideCard() {
    setStyle("hideCard")
  }

  return(
    <ContainerCard className={Style}>
        <Description>
          <p>{props.description}</p>
          <p><Anchor href={props.link} target="_blank">&rarr; SAIBA MAIS</Anchor></p>
        </Description>
        <ImgSatelite src={props.image} alt={props.name}/>
        <ContainerInformation>
          <Information>
            <InfoDiv>
              <Name>{props.name.toUpperCase()}</Name>
              <Price>
                <ImgCoin src={coin}/>
                <p>{props.price}</p>
              </Price>
            </InfoDiv>
            <InfoDiv>
              <Button onClick={OpenCard}>INFO</Button>
              <Button>BUY</Button>
            </InfoDiv>
          </Information>
          <Detail1></Detail1>
          <Detail2></Detail2>
        </ContainerInformation>
        <HideButton onClick={HideCard}>&laquo;</HideButton>
    </ContainerCard>
  )
}