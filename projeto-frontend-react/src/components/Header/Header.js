import { useState } from "react";
import { GlobalStyle } from "../../GlobalStyle";
import { HeaderCabecalho, HeaderContainer,  } from "./HeaderStyle";
import SearchBar from "../SearchBar/SearchBar";
import CartButton from "../CartButton/CartButton";

export function Header(props) {
  
  const { productsList } = props;

  return (
    <HeaderContainer>
      <HeaderCabecalho className="container">
        <h2>Blue Moon Jewerly .</h2>
        <SearchBar
        productsList={productsList}
        />
        <CartButton/>
      </HeaderCabecalho>
    </HeaderContainer>
  );
}
