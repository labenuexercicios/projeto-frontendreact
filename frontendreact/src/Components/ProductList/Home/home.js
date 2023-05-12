import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { CardBox, HomeStyle, MenuBox } from "./HomeStyle";

export const Home = ({ productList }) => {

  let QuantidadeProdutos = 0;

  const listaDeProdutos = productList.map(item => {
    QuantidadeProdutos++;
    console.log(item)
    return <ProductCard produto={item} key={item.id}/>;
  })
  
  return (
    <HomeStyle>
      <MenuBox>
        <p>Quantidade de produtos: {QuantidadeProdutos}</p>
        <label>
          Ordenação:
          <select>
            <option value={"Crescente"}>Crescente</option>
            <option value={"Decrescente"}>Decrescente</option>
          </select>
        </label>
      </MenuBox>
      <CardBox>
        {listaDeProdutos}
      </CardBox>
    </HomeStyle>
  );
};

{/* <ProductCard produto={product}/> */}