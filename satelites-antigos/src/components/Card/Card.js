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
import satellites from '../../Satellites/satellites.json'


export const Card = (props) => {
  const [Style, setStyle] = useState("hideCard")

  // function onClickButtonBuy(e) {
  //   const clickedSatellite = satellites.filter((satellite) => {
  //     return satellite.id === e.currentTarget.id
  //   })
  //   props.setClickedItems([...props.clickedItems, clickedSatellite[0].id])
  //   props.updateCart()
  // }
  // const [clickedItemId, setClickedItemId] = useState(Number)
  function addToCart(itemId) {
    const newListIdCart = [...props.listIdCart]
    
    const idFound = newListIdCart.includes(itemId) 
    
    if (!idFound) {
      // const newProduct = {...productToAdd, quantity: 1}
      // newCart.push(newProduct)
      newListIdCart.push(itemId)
    }
      
    props.setListIdCart(newListIdCart)
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
              <button onClick={() => addToCart(props.id)}>BUY</button>
            </InfoDiv>
          </Information>
          <Detail1></Detail1>
          <Detail2></Detail2>
        </ContainerInformation>
        <HideButton onClick={() => setStyle("hideCard")}>&laquo;</HideButton>
    </ContainerCard>
  )
}