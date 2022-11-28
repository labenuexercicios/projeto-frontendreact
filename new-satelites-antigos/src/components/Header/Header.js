import {ContainerHeader, 
        ImgLupa, 
        Carrinho, 
        HeaderContent, 
        ContainerLogo, 
        ContainerDiv,
        Nav} from './styled'
import textoLogo from '../../assets/space-collection.png'
import lupa from '../../assets/iconLogin.png'
import carrinho from '../../assets/carrinho.png'
import { useNavigate } from 'react-router-dom'
import {goToHomePage, goToStorePage, goToLoginPage, goToCartPage} from '../../router/coordinator'

export const Header = (props) => {
  const navigate = useNavigate()

  // let soma = 0
  // for(let item of props.listCart){
  //   soma += item.quantity
  // }

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
            <span onClick={() => goToHomePage(navigate)}>HOME</span>
            <span onClick={() => goToStorePage(navigate)}>STORE</span>
            <ImgLupa src={lupa} onClick={() => goToLoginPage(navigate)}/>
            <Carrinho>
              <img src={carrinho} onClick={() => goToCartPage(navigate)}/>
            </Carrinho>
            {/* <span onClick={() => props.setPage("store")}>STORE</span> */}
            {/* <ImgLupa src={lupa} onClick={() => props.setPage("login")}/> */}
            {/* <Carrinho show={props.listCart.length === 0 ? "none" : "flex"}>
              <div><p>{soma}</p></div>
              <img src={carrinho} onClick={() => props.setPage("cart")}/>
            </Carrinho> */}
          </Nav>
        </HeaderContent>
      </ContainerHeader>
    </>
  )
}