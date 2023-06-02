import React from "react";
import { GeralStyle, CardImagem, ButtonCard, NomeProduto, PrecoProdutos } from "./ProductCardStyle";

function ProductCard(props) {
  return (
    <GeralStyle>
      <CardImagem src={props.produto.imageUrl} />

      <NomeProduto>{props.produto.name}</NomeProduto>

      <PrecoProdutos>{props.produto.value}</PrecoProdutos>

      <ButtonCard>Adicionar ao Carrinho</ButtonCard>
      
    </GeralStyle>
  );
}

export default ProductCard;
