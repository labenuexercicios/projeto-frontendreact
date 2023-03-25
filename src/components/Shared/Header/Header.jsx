import {HeaderContainer} from "./styles.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
  return (
    <HeaderContainer>
      <div className="login"></div>
      <div className="center">
      <img src="./images/moon.svg" alt="logo"></img>
      <h1>Cosmonauta</h1>
      <p className="sub-title">Store</p>
      </div>
      <div className="login">
      <FontAwesomeIcon icon="fa-solid fa-user-astronaut" />
      
      <a onClick={props.close}>Faça seu <span>Login</span></a>
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
      <p className="qtd-carrinho">{props.cart}</p>
      </div>
    </HeaderContainer>
  )
}
