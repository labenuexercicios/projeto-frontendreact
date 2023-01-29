import React from "react";
import {
  HeaderContainer,
  LogoDiv,
  NavBar,
  OptionsList,
  Icons,
  Icon,
  Input,
  FormInput,
  SearchIcon,
} from "./styles";
import Logo from "../../imgs/SpaceKids_Logo.svg";
import { FiShoppingBag, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar>
        <a href="/">
          <LogoDiv src={Logo} alt="Logo Space Kids" />
        </a>

        <FormInput>
          <SearchIcon />
          <Input
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Buscar"
          />
        </FormInput>

        <OptionsList>
          <li>
            <a href="#">Brinquedos</a>
          </li>
          <li>
            <a href="#">Almofadas</a>
          </li>
          <li>
            <a href="#">Acessórios</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </OptionsList>

        <Icons>
          <Icon>
            <FiUser />
          </Icon>
          <Icon>
            <FiShoppingBag />
            <p>0</p>
          </Icon>
        </Icons>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
