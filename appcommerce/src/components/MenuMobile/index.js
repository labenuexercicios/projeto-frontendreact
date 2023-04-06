import React from "react";
import {
  ArrowIcon,
  ButtonLogin,
  ButtonRegister,
  CloseIcon,
  HeaderMenu,
  Icon,
  Login,
  LogoDiv,
  OptionsList,
  SidebarMenu,
  UserArea,
  UserIcon,
} from "./styled";
import Overlay from "../Overlay";
import Logo from "../../assets/imgs/logo.png";

const MenuMobile = ({
  products,
  handleArrayProducts,
  handleScreen,
  handleTitleCategory,
  rocketsCategory,
  spaceshipsCategory,
  shuttlesCategory,
  setLowestPrice,
  setBiggestPrice,
  setOrdination,
  menuMobileIsOpen,
  setMenuMobileIsOpen,
}) => {
  return (
    <div>
      <SidebarMenu menuMobileIsOpen={menuMobileIsOpen}>
        <CloseIcon onClick={() => setMenuMobileIsOpen("-120%")} />
        <HeaderMenu>
          <LogoDiv
            src={Logo}
            alt="Logo Frontier"
            onClick={() => {
              handleScreen(1);
              setMenuMobileIsOpen("-120%");
            }}
          />
        </HeaderMenu>
        <UserArea>
          <Icon>
            <UserIcon />
          </Icon>
          <Login>
            <p>Olá, faça login ou cadastra-se.</p>
            <small>
              Encontre os produtos mais procurados da galáxia em um só lugar!
            </small>
          </Login>
          <ButtonLogin
            type="button"
            onClick={() => {
              handleScreen(4);
              setMenuMobileIsOpen("-120%");
            }}
          >
            Login
          </ButtonLogin>
          <ButtonRegister
            type="button"
            onClick={() => {
              handleScreen(5);
              setMenuMobileIsOpen("-120%");
            }}
          >
            Cadastre-se
          </ButtonRegister>
        </UserArea>
        <OptionsList>
          <li
            onClick={() => {
              setMenuMobileIsOpen("-120%");
              handleScreen(1);
              handleArrayProducts(products);
              handleTitleCategory("Produtos");
              setLowestPrice(0);
              setBiggestPrice(10000);
              setOrdination("");
            }}
          >
            Início <ArrowIcon />
          </li>
          <li
            onClick={() => {
              handleArrayProducts(rocketsCategory);
              handleScreen(2);
              handleTitleCategory("Foguetes");
              setLowestPrice(0);
              setBiggestPrice(10000);
              setOrdination("");
              setMenuMobileIsOpen("-120%");
            }}
          >
            Foguetes <ArrowIcon />
          </li>
          <li
            onClick={() => {
              handleArrayProducts(spaceshipsCategory);
              handleScreen(2);
              handleTitleCategory("Naves Espacias");
              setLowestPrice(0);
              setBiggestPrice(10000);
              setOrdination("");
              setMenuMobileIsOpen("-120%");
            }}
          >
            Naves Espaciais <ArrowIcon />
          </li>
          <li
            onClick={() => {
              handleArrayProducts(shuttlesCategory);
              handleScreen(2);
              handleTitleCategory("Space Shuttle");
              setMenuMobileIsOpen("-120%");
              setLowestPrice(0);
              setBiggestPrice(10000);
              setOrdination("");
            }}
          >
            Space Shuttles <ArrowIcon />
          </li>
          <li
            onClick={() => {
              handleScreen(3);
              setMenuMobileIsOpen("-120%");
            }}
          >
            Contato <ArrowIcon />
          </li>
        </OptionsList>
      </SidebarMenu>
      <Overlay
        menuMobileIsOpen={menuMobileIsOpen}
        setMenuMobileIsOpen={setMenuMobileIsOpen}
      />
    </div>
  );
};

export default MenuMobile;