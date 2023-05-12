import React from "react";
import { AsideStylerHome, TituloStyleHome, ButtonStyleHome } from "./CartStyle";
import { Items } from "../Items/Items";

export const Cart = () => {
  return (
    <>
      <AsideStylerHome>
        <TituloStyleHome>Carrinho</TituloStyleHome>
        <p>Nome do produto:</p>
        <p>valor total:</p>
        <ButtonStyleHome>Remover</ButtonStyleHome>
        <Items />
      </AsideStylerHome>
    </>
  );
};
