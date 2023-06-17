import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeArticle, HomeCards, OrdenacaoSection } from "./HomeStyle";

function Home({ listaDeProdutos, amount, setAmount, cart, setCart }) {
  const [ordination, setOrdination] = useState("");

  const onChangeOrdemProdutos = (event) => {
    setOrdination(event.target.value);
    // console.log(event.target.value)
    // console.log(ordination)
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
    valorTotal(carrinho)
  };

  const valorTotal = (carrinho) =>{
    const amount = carrinho.reduce((total, mercadoria)=>{
        const valorParcial = mercadoria.value * mercadoria.quantity
        return total+valorParcial
    },0)

    setAmount(amount)
  }

  return (
    <HomeArticle>
      <OrdenacaoSection>
        <div>Quantidade de produtos: {listaDeProdutos.length}</div>
        <div>
          <label>Ordenação: </label>
          <select onChange={onChangeOrdemProdutos}>
            <option value=""></option>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </div>
      </OrdenacaoSection>

      <HomeCards>
        {listaDeProdutos.map((produto) => {
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
