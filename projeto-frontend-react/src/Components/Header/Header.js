import React from "react";
import { HeaderContainer, HeaderTitle, HeaderUl, HeaderLi, Search, Input } from "./styles";

export function Header(props) {
  
  return (
    <HeaderContainer>
      <HeaderTitle>Space Store</HeaderTitle>
      <Search>
        <Input 
        placeholder="Procurar.." 
        value={props.search}
        onChange={(e) => { props.setSearch(e.target.value) }}
        />
        <button>Buscar</button>
      </Search> 
      
      <HeaderUl>
        <HeaderLi>Cadastro</HeaderLi>
        <HeaderLi>Login</HeaderLi>
        <HeaderLi>Carrinho</HeaderLi>
      </HeaderUl>
    </HeaderContainer>
  )
}

