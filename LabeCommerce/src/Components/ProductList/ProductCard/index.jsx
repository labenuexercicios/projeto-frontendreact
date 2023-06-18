/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { CardContainer } from "./style.jsx";

export default function ProductCard(props) {
  const { produto } = props;
  

  return ( 
      produto.map((item) =>  
    
      <CardContainer>
        <img key={item.id}src={item.imageUrl} alt="Imagem do Produto" />
        <p >{item.name}</p>
        <p>{item.value}</p>
        <button>Adicionar ao Carrinho</button>
      </CardContainer>
    )
  );
}
