import {ContainerHeader, ImgLogo, ImgLupa, ImgCarrinho, ContainerDiv, Div, Nav} from './styled'
import textoLogo from '../../img/space-collection.png'
import lupa from '../../img/lupa.png'
import carrinho from '../../img/carrinho.png'

export const Header = () => {
  return(
    <>
      <ContainerHeader>
        <ContainerDiv>
          <ImgLogo src={textoLogo}/>
          <Nav>
            <span>HOME</span>
            <span>STORE</span>
            <span>
              <ImgLupa src={lupa}/>
            </span>
            <span>
              <ImgCarrinho src={carrinho}/>
            </span>
          </Nav>
        </ContainerDiv>
      </ContainerHeader>
    </>
  )
}