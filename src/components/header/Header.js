import React from "react";
import { NavHeader, NavLogo, NavSearch, Searchbar, NavFilters } from './styled';

function Header() {
  return (
        <>
            <NavHeader>
                <NavLogo>
                    <h1>Loja de Jogos</h1>
                </NavLogo>
                <NavSearch>
                    <Searchbar>
                        <input type="search" placeholder="Digite o produto desejado" />
                    </Searchbar>
                    <NavFilters>
                        <label>
                            Valor mínimo:
                            <input type="number" />
                        </label>
                        <label>
                            Valor máximo:
                            <input type="number" />
                        </label>
                        <label>
                            Busca por nome:
                            <input type="text" />
                        </label>
                    </NavFilters>
                </NavSearch>
            </NavHeader>
        </>
    )
};

export default Header;
