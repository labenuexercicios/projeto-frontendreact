import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import {HomeArticle, HomeCards, OptionHome, OrdenacaoSection } from "./HomeStyle";

function Home({ listaDeProdutos, cart, setCart }) {
  const [ordination, setOrdination] = useState("");

  const onChangeOrdemProdutos = (event) => {
    setOrdination(event.target.value);
    console.log(event.target.value);
  };

  const adicionaProduto = (produto,tamanho) => {
    // console.log(tamanho)
    const carrinho = [...cart];
    const produtoExistente = carrinho.find(item => item.id === produto.id && item.tamanhoSelecionado === tamanho);

    if (produtoExistente) {
      produtoExistente.quantity++;
      // console.log(produtoExistente)

    } else {
      
      const novoProduto = {
        ...produto,
        quantity : 1,
        tamanhoSelecionado: tamanho
      }
      console.log(produto)
      console.log(novoProduto)
      
      carrinho.push(novoProduto);
    }

    setCart(carrinho);
  };

  return (
    <HomeArticle>
      <OrdenacaoSection>
        <div>QUANTIDADE DE PRODUTOS: {listaDeProdutos.length}</div>
        <div>
          <OptionHome id="ordenacao" value={ordination} onChange={onChangeOrdemProdutos}>
            <option disabled value="">ORDENAÇÃO</option>
            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>
          </OptionHome>
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
