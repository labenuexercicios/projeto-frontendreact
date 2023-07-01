import React from "react";
import {
  GeralStyle,
  CardImagem,
  ButtonCard,
  NomeProduto,
  PrecoProdutos,
  TamanhoProdutos,
} from "./ProductCardStyle";
import { useState } from "react";

function ProductCard(props) {

  const [selectTamanho, setSelectTamanho] = useState("")

  const handleSelectTamanho = (event) => {
    setSelectTamanho(event.target.value);
  };
 

  return (
    <GeralStyle>
      <CardImagem src={props.produto.imageUrl} />

      <NomeProduto>{props.produto.name} </NomeProduto>
      {/* <TamanhoProdutos>{props.produto.tamanhos.join(" | ")} </TamanhoProdutos> */}

      <TamanhoProdutos value={selectTamanho} onChange={handleSelectTamanho} name="tamanho">
        <option value="">Selecione o tamanho</option>
        {props.produto.tamanhos.map((tamanho) =>{
          return(
        <option key={tamanho} value={tamanho}>{tamanho}</option>


          )
        })}
        
      </TamanhoProdutos>

      <PrecoProdutos>R$ {props.produto.value.toFixed(2)}</PrecoProdutos>

      <ButtonCard
        disabled={!selectTamanho}
        onClick={() => {
          props.callbackClick(props.produto,selectTamanho);
        }}
      >
        Adicionar ao Carrinho
      </ButtonCard>
    </GeralStyle>
  );
}

export default ProductCard;
