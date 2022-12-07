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
import { useContext, useState } from "react"
import  './Card.css'
import { GlobalContext } from "../../context/GlobalContext"
import {priceFormatter} from '../../utils/priceFormatter'


export const Card = (props) => {
  const [style, setStyle] = useState("hideCard")

  const context = useContext(GlobalContext)
  const {listCart, setListCart} = context

  
  function addToCart(item) {
    const newListCart = [...listCart]
    
    const itemFound = newListCart.find((element) => element.id === item.id)     
    
    if (!itemFound) {
      newListCart.push(item)
      // setListCart(newListCart)
    }else {
      // const updateList = newListCart.filter((element)=> element.id !== item.id)
      itemFound.quantity++
      // updateList.push(itemFound)
      // setListCart(updateList)
    }
    setListCart(newListCart)
    
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
                <p>{priceFormatter.format(props.satellite.price)}</p>
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