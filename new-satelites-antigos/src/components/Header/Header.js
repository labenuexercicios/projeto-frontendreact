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

  let soma = 0
  for(let item of props.listCart){
    soma += item.quantity
  }

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
            <Carrinho show={props.listCart.length === 0 ? "none" : "flex"}>
              <div><p>{soma}</p></div>
              <img src={carrinho} onClick={() => props.setPage("cart")}/>
            </Carrinho>
          </Nav>
        </HeaderContent>
      </ContainerHeader>
    </>
  )
}