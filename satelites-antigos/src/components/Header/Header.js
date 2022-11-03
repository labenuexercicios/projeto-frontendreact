import {ContainerHeader, ImgLogo, ImgLupa, ImgCarrinho, HeaderContent, ContainerLogo, ContainerDiv, Div, Nav} from './styled'
import textoLogo from '../../img/space-collection.png'
import lupa from '../../img/lupa.png'
import carrinho from '../../img/carrinho.png'

export const Header = () => {
  return(
    <>
      <ContainerHeader>
        <HeaderContent>
          <ContainerLogo>
            <ContainerDiv>
              <Div></Div>
              <Div></Div>
              <Div></Div>
              <Div></Div>
            </ContainerDiv>
            <ImgLogo src={textoLogo}/>
            <ContainerDiv>
              <Div></Div>
              <Div></Div>
              <Div></Div>
              <Div></Div>
            </ContainerDiv>
          </ContainerLogo>
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
        </HeaderContent>
      </ContainerHeader>
    </>
  )
}