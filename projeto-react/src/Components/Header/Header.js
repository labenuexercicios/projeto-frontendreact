import React from "react";
import { HeaderContainer, Logo } from "./style";
import searchIcon from '../../assets/search.svg'
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
        <IoRocketSharp size="70px" color="#ffd100"/>
      </div>

      <div className="search-group">
        <input
          placeholder="Busque por brinquedos e produtos infantis"
          value={props.search}
          onChange={(event) => props.setSearch(event.target.value)}
          className="search-input"
        />
        <img src={searchIcon} alt="search icon" />
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