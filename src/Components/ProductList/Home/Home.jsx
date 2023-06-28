import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import {HomeArticle, HomeCards, OptionHome, OrdenacaoSection } from "./HomeStyle";

function Home({ listaDeProdutos, cart, setCart }) {
  const [ordination, setOrdination] = useState("");

  const onChangeOrdemProdutos = (event) => {
    setOrdination(event.target.value);
    console.log(event.target.value);
  };

  const adicionaProduto = (produto) => {
    const carrinho = [...cart];
    const produtoExistente = carrinho.find(item => item.id === produto.id);

    if (produtoExistente) {
      produtoExistente.quantity++;
    } else {
      produto.quantity = 1;
      carrinho.push(produto);
    }

    setCart(carrinho);
  };

  return (
    <HomeArticle>
      <OrdenacaoSection>
        <div>Quantidade de produtos: {listaDeProdutos.length}</div>
        <div>
          <label>Ordenação: </label>
          <select value={ordination} onChange={onChangeOrdemProdutos}>
            <OptionHome disabled value=""></OptionHome>
            <OptionHome value="asc">Crescente</OptionHome>
            <OptionHome value="desc">Decrescente</OptionHome>
          </select>
        </div>
      </OrdenacaoSection>

      <HomeCards>
        {listaDeProdutos
          .sort((produtoAtual, produtoAnterior) => {
            if (ordination === "asc") {
              return produtoAtual.value - produtoAnterior.value;
            } else if (ordination === "desc") {
              return produtoAnterior.value - produtoAtual.value;
            } else {
              return 0;
            }
          })
          .map((produto) => {
            return (
              <ProductCard
                key={produto.id}
                produto={produto}
                callbackClick={adicionaProduto}
              />
            );
          })}
      </HomeCards>
    </HomeArticle>
  );
}


export default Home;
