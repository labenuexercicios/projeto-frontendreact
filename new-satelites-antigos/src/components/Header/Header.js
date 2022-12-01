import {ContainerHeader, 
        ImgLupa, 
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
import { useEffect, useState } from 'react'

export const Header = () => {
  const navigate = useNavigate()

  const itemsCart = JSON.parse(localStorage.getItem("itemsCart"))
  const [quantityCart, setQuantityCart] = useState(itemsCart);

  useEffect(()=>{
    // window.dispatchEvent(new Event("storage"));
  },[quantityCart])
  
  
  window.addEventListener("storage", () => {
    setQuantityCart(itemsCart)
  });

  let soma = 0
  for(let item of quantityCart){
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
            <span onClick={() => goToHomePage(navigate)}>HOME</span>
            <span onClick={() => goToStorePage(navigate)}>STORE</span>
            <ImgLupa src={iconLogin} onClick={() => goToLoginPage(navigate)}/>
            <Carrinho show={soma === 0 ? "none" : "flex"}>
              <img src={iconCarrinho} onClick={() => goToCartPage(navigate)}/>
              <div><p>{soma}</p></div>
            </Carrinho>
          </Nav>
        </HeaderContent>
      </ContainerHeader>
    </>
  )
}