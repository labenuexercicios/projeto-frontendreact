import React from "react";
import { HeaderContainer, HeaderUl, Search } from "./styles";
import searchIcon from "../../assets/search.svg"

export function Header(props) {

  return (
    <HeaderContainer>
      <h1>Space Store</h1>
      <Search>
        <input
          placeholder="Procurar.."
          value={props.search}
          onChange={(e) => { props.setSearch(e.target.value) }}
        />
        <button>
          <img value={searchIcon} alt="Search icon" />
        </button>
      </Search>

      <HeaderUl>
        <li>Cadastro</li>
        <li>Login</li>
        <li>Carrinho</li>
      </HeaderUl>
    </HeaderContainer>
  )
}

