import { ContainerCard, ButtonBuy, InformSatelite, ButtonInfo, ImgCoin, ImgSatelite, Description, InformBuy, Name, Price } from "./styled"
import satelites from '../../satelites/satelites.json'
import coin from '../../img/coin.png'
export const Card = () => {
  return(
    <ContainerCard>
        <InformSatelite>
          <Name>{satelites[0].name.toUpperCase()}</Name>
          <ButtonInfo>+</ButtonInfo>
        </InformSatelite>
        <Description>
          <p>Texto descrição</p>
        </Description>
        <ImgSatelite src={satelites[0].image} alt={satelites[0].name}/>
        <InformBuy>
          <Price>
            <ImgCoin src={coin}/>
            <p>{satelites[0].price}</p>
          </Price>
          <ButtonBuy>COMPRAR</ButtonBuy>
        </InformBuy>
    </ContainerCard>
  )
}