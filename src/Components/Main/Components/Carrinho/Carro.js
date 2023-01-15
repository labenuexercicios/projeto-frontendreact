import React, { useEffect, useState } from "react";
import {
  ButtonStyle,
  Carrinho,
  CarrinhoGap,
  ImgStyle,
  ListStyle,
  ItemStyle,
  ImgDiv,
} from "./styled";

export function Carro({ valorTotal, carrinho, setCarrinho }) {
  const toRemove = (valor) => {
    const copiaCarrinho = [...carrinho];
    const remover = copiaCarrinho.find((indice) => indice.id === valor.id);

    if (remover.qtd > 1) {
      remover.qtd = remover.qtd - 1;
      setCarrinho(copiaCarrinho);
    } else {
      const removeCarro = carrinho.filter((indice) => indice.id !== valor.id);
      setCarrinho(removeCarro);
    }
  };

  return (
    <>
      <Carrinho>
        <div>
        <h1>Carrinho</h1>
        </div>
        <CarrinhoGap>
          {carrinho.map((carro, index) => {
            return (
              <ItemStyle key={index}>
                <ImgStyle src={carro.imagem}></ImgStyle>
                <ListStyle>
                  <li> Produto: {carro.nome}</li>
                  <li> R$ {carro.preco},00</li>
                  <li> Quantidade: {carro.qtd}X</li>
                  <ButtonStyle onClick={() => toRemove(carro)}>
                    Remover
                  </ButtonStyle>
                </ListStyle>
              </ItemStyle>
            );
          })}
        </CarrinhoGap>
        <div>
          <h3>Total:</h3>
          <p>R${valorTotal},00</p>
        </div>
      </Carrinho>
    </>
  );
}
