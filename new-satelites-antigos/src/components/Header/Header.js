import {ContainerHeader, 
        Login, 
        Carrinho, 
        HeaderContent, 
        ContainerLogo, 
        ContainerDiv,
        Nav} from './styled'
import textoLogo from '../../assets/space-collection.png'
import iconLogin from '../../assets/iconLogin.png'
import iconCarrinho from '../../assets/carrinho.png'
import { useNavigate } from 'react-router-dom'
import {goToHomePage, goToStorePage, goToLoginPage, goToCartPage} from '../../router/coordinator'
import { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export const Header = () => {
  const navigate = useNavigate()

  const context = useContext(GlobalContext)
  const {listCart} = context

  const [quantityCart, setQuantityCart] = useState(0);
  
  useEffect(()=>{
    let soma = 0
    for(let item of listCart){
      soma += item.quantity
    }
    setQuantityCart(soma)
  },[listCart])

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
            <div>
              <span onClick={() => goToHomePage(navigate)}>HOME</span>
              <span onClick={() => goToStorePage(navigate)}>STORE</span>
            </div>
            <div>
              <Login onClick={() => goToLoginPage(navigate)}>
                <p>Login </p>
                <img src={iconLogin}/>
              </Login>
              <Carrinho show={quantityCart === 0 ? "none" : "flex"}>
                <img src={iconCarrinho} onClick={() => goToCartPage(navigate)}/>
                <div><p>{quantityCart}</p></div>
              </Carrinho>
            </div>
          </Nav>
        </HeaderContent>
      </ContainerHeader>
    </>
  )
}