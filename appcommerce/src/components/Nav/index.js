import React from "react";
import Logo from "../../assets/imgs/logo.png";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import {
  LogoDiv,
  NavBar,
  OptionsList,
  Icons,
  Icon,
  Input,
  FormInput,
  SearchIcon,
} from "./styled";

const Nav = ({
  products,
  handleArrayProducts,
  handleScreen,
  handleTitleCategory,
  rocketsCategory,
  spaceshipsCategory,
  shuttlesCategory,
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
          setBiggestPrice(10000);
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

      <OptionsList>
        <li
          onClick={() => {
            handleArrayProducts(products);
            handleScreen(1);
            handleTitleCategory("Produtos");
            setLowestPrice(0);
            setBiggestPrice(10000);
            setOrdination("");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            handleArrayProducts(rocketsCategory);
            handleScreen(2);
            handleTitleCategory("Foguetes");
            setLowestPrice(0);
            setBiggestPrice(10000);
            setOrdination("");
          }}
        >
          Foguetes
        </li>
        <li
          onClick={() => {
            handleArrayProducts(spaceshipsCategory);
            handleScreen(2);
            handleTitleCategory("Naves Espaciais");
            setLowestPrice(0);
            setBiggestPrice(10000);
            setOrdination("");
          }}
        >
          Naves Espaciais
        </li>
        <li
          onClick={() => {
            handleArrayProducts(shuttlesCategory);
            handleScreen(2);
            handleTitleCategory("Space Shuttles");
            setLowestPrice(0);
            setBiggestPrice(10000);
            setOrdination("");
          }}
        >
          Space Shuttles
        </li>
      </OptionsList>

      <Icons>
        <Icon
          onClick={() => {
            handleScreen(4);
          }}
        >
          <FiUser />
        </Icon>
        <Icon onClick={() => setCartIsOpen("0")}>
          <FiShoppingBag />
          <p>{itemAmount}</p>
        </Icon>
      </Icons>
    </NavBar>
  );
};

export default Nav;