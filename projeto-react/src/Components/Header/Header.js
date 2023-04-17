import React from "react";
import { HeaderContainer, Logo } from "./style";
import { FaUserAlt, FaShoppingCart, FaQuestionCircle } from 'react-icons/fa'
import { IoRocketSharp } from "react-icons/io5";

function Header(props) {
  const { goToCartScreen, itemsInCart } = props;


  return (
    <HeaderContainer>
      <div className="logo-header">
        <Logo>
          <h1>Space</h1>
          <h1>Land</h1>
        </Logo>
        <IoRocketSharp size="70px" color="#4299e1"/>
      </div>

      <div className="nav-bar">
        <button>
          <FaUserAlt size="25px"/>
          <p>Login</p>
        </button>
        <button>
          <FaQuestionCircle size="25px"/>
          <p>Ajuda</p>
        </button>
        <button onClick={goToCartScreen}>
          <FaShoppingCart size="25px"/>
          <span className="cart-badge">{itemsInCart > 0 && itemsInCart}</span>
          <p>Carrinho</p>
        </button>
      </div>
    </HeaderContainer>
  );
}

export default Header;