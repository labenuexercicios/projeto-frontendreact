import React from "react";
import {
  GeralStyle,
  CardImagem,
  ButtonCard,
  NomeProduto,
  PrecoProdutos,
} from "./ProductCardStyle";
import Cart from "../../ShoppingCart/Cart/Cart";

function ProductCard(props) {
 

  return (
    <GeralStyle>
      <CardImagem src={props.produto.imageUrl} />

      <NomeProduto>{props.produto.name}</NomeProduto>

      <PrecoProdutos>{props.produto.value}</PrecoProdutos>

      <ButtonCard
        onClick={() => {
          props.callbackClick(props.produto);
        }}
      >
        Adicionar ao Carrinho
      </ButtonCard>
    </GeralStyle>
  );
}

export default ProductCard;
