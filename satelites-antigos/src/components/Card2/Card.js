import { ContainerCard, InfoDiv, Button, Detail1, Detail2, ContainerInformation, ImgCoin, ImgSatelite, Description, Information, Name, Price } from "./styled"
import satelites from '../../Satellites/satellites.json'
import coin from '../../img/coin.png'

export const Card = (props) => {
  return(
    <ContainerCard>
        <Description>
          <p>Texto descrição</p>
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
              <Button>INFO</Button>
              <Button>BUY</Button>
            </InfoDiv>
          </Information>
          <Detail1></Detail1>
          <Detail2></Detail2>
        </ContainerInformation>
    </ContainerCard>
  )
}