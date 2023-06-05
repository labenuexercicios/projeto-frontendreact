import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeArticle, HomeCards, OrdenacaoSection } from "./HomeStyle";
import { async } from "q";

function Home(props) {
  /** @type (Array) */
  const listaDeProdutos = props.listaDeProdutos;


    const [ordination, setOrdination] = useState("");
  

  const onChangeOrdemProdutos = (event) =>{
    setOrdination(event.target.value);
    // console.log(event.target.value)
    // console.log(ordination)

  }

  return (
    <HomeArticle>
      <OrdenacaoSection>
        <div>Quantidade de produtos: {listaDeProdutos.length}</div>
        <div>
          <label>Ordenação: </label>
          <select
          onChange={onChangeOrdemProdutos}
          >
            <option value=""></option>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </div>
      </OrdenacaoSection>

      <HomeCards>
        <ProductCard produto={listaDeProdutos[0]} />
        <ProductCard produto={listaDeProdutos[1]} />
        <ProductCard produto={listaDeProdutos[2]} />
      </HomeCards>
    </HomeArticle>
  );
}

export default Home;
