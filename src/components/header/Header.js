import React from "react";
import { NavHeader, NavLogo, NavSearch, Searchbar, NavContentWrapper  } from "./styled";

function Header() {
  return (
    <>
      <NavHeader>
        <NavContentWrapper>
          <NavLogo>
            <h1>Loja de Jogos</h1>
          </NavLogo>
          <NavSearch>
            <Searchbar>
              <input type="search" placeholder="Digite o produto desejado" />
            </Searchbar>
          </NavSearch>
        </NavContentWrapper>
      </NavHeader>
    </>
  );
}

export default Header;
