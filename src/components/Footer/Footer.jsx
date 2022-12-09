import React from 'react'
import { DivImg, FooterStyled } from './footerStyled'
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";

const Footer = () => {
  return (
    <FooterStyled>
    <DivImg>
      <a href="https://instagram.com/heydearmaria/">
        <img src={instagram} />
      </a>
      <a href="https://linkedin.com/in/mariaconstance/">
        <img src={linkedin} />
      </a>
      <a href="https://github.com/constance03/">
        <img src={github} />
      </a>
    </DivImg>
    <p>Design por: Maria Constance</p>
  </FooterStyled>
  )
}

export default Footer