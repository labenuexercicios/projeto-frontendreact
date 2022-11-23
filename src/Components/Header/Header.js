import { HeaderContainer, HeaderUl } from "./styles";

export function Header(props) {

  return (
    <HeaderContainer>
      <h1>Space Store</h1>
        

      <HeaderUl>
        <li>Cadastro</li>
        <li>Login</li>
        <li>Carrinho</li>
      </HeaderUl>
    </HeaderContainer>
  )
}

