import React from "react";
import Logo from "../../assets/imgs/logo.png";
import { FiShoppingBag, FiMenu } from "react-icons/fi";
import {
  LogoDiv,
  NavBar,
  Icons,
  Icon,
  Input,
  FormInput,
  SearchIcon,
} from "./styled";

const NavMobile = ({
  products,
  handleArrayProducts,
  handleScreen,
  handleTitleCategory,
  search,
  filteredProductsBySearch,
  setSearch,
  handleSearch,
  searchByEnter,
  setLowestPrice,
  setBiggestPrice,
  setOrdination,
  setCartIsOpen,
  itemAmount,
  setMenuMobileIsOpen,
}) => {
  return (
    <NavBar>
      <LogoDiv
        src={Logo}
        alt="Logo Frontier"
        onClick={() => {
          handleArrayProducts(products);
          handleScreen(1);
          handleTitleCategory("Produtos");
          setLowestPrice(0);
          setBiggestPrice(1000);
          setOrdination("");
        }}
      />

      <FormInput>
        <SearchIcon
          onClick={() => {
            handleTitleCategory("Resultado da pesquisa");
            handleArrayProducts(filteredProductsBySearch);
            handleScreen(2);
            setSearch("");
            setLowestPrice(0);
            setBiggestPrice(1000);
            setOrdination("");
          }}
        />
        <Input
          autoComplete="off"
          type="search"
          name="search"
          placeholder="Buscar"
          value={search}
          onChange={handleSearch}
          onKeyUp={searchByEnter}
        />
      </FormInput>

      <Icons>
        <Icon onClick={() => setCartIsOpen("0")}>
          <FiShoppingBag />
          <p>{itemAmount}</p>
        </Icon>
        <Icon>
          <FiMenu onClick={() => setMenuMobileIsOpen("0")} />
        </Icon>
      </Icons>
    </NavBar>
  );
};

export default NavMobile;