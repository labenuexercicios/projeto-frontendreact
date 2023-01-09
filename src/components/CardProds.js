import React from "react";
import styled from "styled-components";

export default function CardProds({ image, name, price, id, comprar }) {
  return (
    <CardContainer>
      <Image src={image} alt={name} />
      <p>{name}</p>
      <p>R${price}</p>
      <button onClick={()=>comprar(id)}>Comprar</button>
    </CardContainer>
  );
}

const Image = styled.img`
  width: 100%;
  height: 180px;
`;
const CardContainer = styled.section`
  width: 150px;
  border: 1px solid whitesmoke;
  box-shadow: 2px 2px 2px 2px rgb(194, 184, 184);
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  gap: 10px;
`;
