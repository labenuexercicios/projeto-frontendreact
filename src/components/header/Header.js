import React from "react";
import {
  NavHeader,
  NavLogo,
  NavSearch,
  Searchbar,
  NavContentWrapper,
} from "./styled";

function Header(props) {
  const onChangeSearchByName = (e) => {
    props.setSearchByName(e.target.value);
  };
  return (
    <>
      <NavHeader>
        <NavContentWrapper>
          <NavLogo>
            <h1>Loja de Jogos</h1>
          </NavLogo>
          <NavSearch>
            <Searchbar>
              <input
                type="text"
                placeholder="Digite o produto desejado"
                onChange={onChangeSearchByName}
                value={props.searchByName}
              />
              <button type="submit">
                <img
                  src="https://icons.veryicon.com/png/128/application/alipay-library/search-509.png"
                  alt="search button"
                />
              </button>
            </Searchbar>
          </NavSearch>
        </NavContentWrapper>
      </NavHeader>
    </>
  );
}

export default Header;
