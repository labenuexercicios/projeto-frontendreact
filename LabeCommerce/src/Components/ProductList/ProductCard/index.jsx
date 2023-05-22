import React from "react";
import { CardContainer } from "./style";

export default function ProductCard() {
  return (
    <CardContainer>
      <img src="https://picsum.photos/300/335?a=3" alt="Imagem do Produto" />
      <p>Nome do Produto</p>
      <p>Valor</p>
      <button>Adicionar ao Carrinho</button>
    </CardContainer>
  );
}
