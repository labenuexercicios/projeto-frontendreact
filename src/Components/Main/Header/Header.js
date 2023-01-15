import React from "react";
import { ButtonStyle, DivBotao, HeaderStyle, ImgStyle, Titulo1 } from "./styled";
import carrinho from "../../../Assets/Carrinho.png"

export function Header({
  abreCarrinho, setAbreCarrinho
}) {

  const abreFechaCarrinho = () => {
    if (abreCarrinho === 0) {
      setAbreCarrinho(1);
    } else {
      setAbreCarrinho(0);
    }
  };

  return (
    <HeaderStyle>
    <Titulo1>
      <h1>Dev Space</h1>
    </Titulo1>
    <DivBotao>
      <ButtonStyle onClick={abreFechaCarrinho}><ImgStyle src={carrinho}></ImgStyle></ButtonStyle>
    </DivBotao>
    </HeaderStyle>
  );
} 