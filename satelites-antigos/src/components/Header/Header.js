import {ContainerHeader, 
        ImgLupa, 
        Carrinho, 
        HeaderContent, 
        ContainerLogo, 
        ContainerDiv,
        Nav} from './styled'
import textoLogo from '../../img/space-collection.png'
import lupa from '../../img/iconLogin.png'
import carrinho from '../../img/carrinho.png'

export const Header = (props) => {

  return(
    <>
      <ContainerHeader>
        <HeaderContent>
          <ContainerLogo>
            <ContainerDiv>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </ContainerDiv>
            <img src={textoLogo}/>
            <ContainerDiv>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </ContainerDiv>
          </ContainerLogo>
          <Nav>
            <span onClick={() => props.setPage("home")}>HOME</span>
            <span onClick={() => props.setPage("store")}>STORE</span>
            <ImgLupa src={lupa} onClick={() => props.setPage("login")}/>
            <Carrinho>
              <div>{props.listIdCart.length === 0 ? "" : props.listIdCart.length}</div>
              <img src={carrinho} onClick={() => props.setPage("cart")}/>
            </Carrinho>
          </Nav>
        </HeaderContent>
      </ContainerHeader>
    </>
  )
}