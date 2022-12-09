import React from "react";
import { DivHeader } from "./headerStyled";
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <DivHeader>
      <img src={logo} width="700px" />
    </DivHeader>
  );
};

export default Header;
