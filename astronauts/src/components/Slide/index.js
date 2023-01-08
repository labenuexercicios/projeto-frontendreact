import React from "react";
import { LinePromo, SlideContainer, SlidePromo, TxtPromo } from "./styled";

export function Slide() {
  return (
    <SlideContainer>
      <SlidePromo></SlidePromo>
      <LinePromo>
        <TxtPromo>5% off no pix ou 3x sem juros</TxtPromo>
        <TxtPromo>Desconto na 1ª Compra</TxtPromo>
        <TxtPromo>Frete grátis para toda Via Láctea</TxtPromo>
        <TxtPromo>Troca na velocidade da luz</TxtPromo>
      </LinePromo>
    </SlideContainer>
  );
}
