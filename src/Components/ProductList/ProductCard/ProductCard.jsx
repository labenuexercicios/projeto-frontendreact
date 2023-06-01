import React from "react";
import { GeralStyle, CardImagem, ButtonCard, NomeProduto, PrecoProdutos } from "./ProductCardStyle";

function ProductCard(props) {
  return (
    <GeralStyle>
      <CardImagem src={props.image} />

      <NomeProduto>{props.nomeDoProduto}</NomeProduto>

      <PrecoProdutos>{props.valor}</PrecoProdutos>

      <ButtonCard>Adicionar ao Carrinho</ButtonCard>
      
    </GeralStyle>
  );
}

export default ProductCard;
