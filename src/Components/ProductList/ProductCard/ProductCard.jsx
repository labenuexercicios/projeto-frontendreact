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

      <PrecoProdutos>R$ {props.produto.value.toFixed(2)}</PrecoProdutos>

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
