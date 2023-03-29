import React from "react";
import {
  FooterStyled,
  NavBar,
  LogoDiv,
  OptionsList,
  InfoStore,
  Copyright,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  WeChatIcon,
} from "./styled";
import LogoFooter from "../../assets/imgs/logo-footer.png";
import Amex from "../../assets/imgs/amex.svg"
import Elo from "../../assets/imgs/elo.svg"
import Boleto from "../../assets/imgs/boleto.svg"
import Hipercard from "../../assets/imgs/hipercard.svg"
import Mastercard from "../../assets/imgs/mastercard.svg"
import Visa from "../../assets/imgs/visa.svg"

const Footer = ({
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
}) => {
  return (
    <FooterStyled>
      <InfoStore>
        <LogoDiv src={LogoFooter} alt="Logo Frontier" />
        <NavBar>
          <OptionsList>
            <p>
              <strong>Loja</strong>
            </p>
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
                setBiggestPrice(1000);
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
                setBiggestPrice(1000);
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
                setBiggestPrice(1000);
                setOrdination("");
              }}
            >
              Space Shuttles
            </li>
          </OptionsList>

          <OptionsList>
            <p>
              <strong>Ajuda</strong>
            </p>
            <li>Sobre nós</li>
            <li>Prazo de entrega</li>
            <li>Dúvidas frequentes</li>
            <li
              onClick={() => {
                handleScreen(3);
              }}
            >
              Contato
            </li>
          </OptionsList>

          <OptionsList>
            <p>
              <strong>Redes Sociais</strong>
            </p>
            <div>
              <li><FacebookIcon /></li>
              <li><InstagramIcon /></li>
              <li><TwitterIcon /></li>
              <li><YoutubeIcon /></li>
              <li><WeChatIcon /></li>
            </div>
          </OptionsList>

          <OptionsList>
            <p>
              <strong>Formas de Pagamento</strong>
            </p>
            <div>
              <li><img src={Amex} alt="cartão amex" /></li>
              <li><img src={Elo} alt="cartão elo"/></li>
              <li><img src={Hipercard} alt="cartão hipercard"/></li>
              <li><img src={Mastercard} alt="cartão mastercard"/></li>
              <li><img src={Visa} alt="cartão visa"/></li>
              <li><img src={Boleto} alt="boleto"/></li>
            </div>
          </OptionsList>
        </NavBar>
      </InfoStore>
      <Copyright>
        <p>Frontier Explorer 2023 © Caren Murai.</p>
        <div>
          <a href="https://github.com/suuzanemoura/" target={"blank"}>
          </a>
          <a href="https://linkedin.com/in/suuzanemoura/" target={"blank"}>
          </a>
        </div>
      </Copyright>
    </FooterStyled>
  );
};

export default Footer;