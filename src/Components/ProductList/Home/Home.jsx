import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeArticle, HomeCards, OrdenacaoSection } from "./HomeStyle";

function Home({ listaDeProdutos, setAmount, cart, setCart }) {
  const [ordination, setOrdination] = useState("");

  const onChangeOrdemProdutos = (event) => {
    setOrdination(event.target.value);
    console.log(event.target.value)
      };

  const adicionaProduto = (produto) => {
    const carrinho = [...cart];

    if (cart.includes(produto)) {
      produto.quantity++;
    } else {
      produto.quantity = 1;
      carrinho.push(produto);
    }

    setCart(carrinho);
    valorTotal(carrinho);
  };

  const valorTotal = (carrinho) => {
    const amount = carrinho.reduce((total, mercadoria) => {
      const valorParcial = mercadoria.value * mercadoria.quantity;
      return total + valorParcial;
    }, 0);

    setAmount(amount);
  };

  return (
    <HomeArticle>
      <OrdenacaoSection>
        <div>Quantidade de produtos: {listaDeProdutos.length}</div>
        <div>
          <label>Ordenação: </label>
          <select value={ordination} onChange={onChangeOrdemProdutos}>
            <option disabled value=""></option>
            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>
          </select>
        </div>
      </OrdenacaoSection>

      <HomeCards>
        {listaDeProdutos
          .sort((produtoAtual, produtoAnterior) => {
            if (ordination === "asc"){
              return produtoAtual.value - produtoAnterior.value;
            } else if (ordination === "desc") {
              return produtoAnterior.value - produtoAtual.value
            } else {
              return 0
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

        {/* <ProductCard produto={listaDeProdutos[0]} /> */}
      </HomeCards>
    </HomeArticle>
  );
}

export default Home;
