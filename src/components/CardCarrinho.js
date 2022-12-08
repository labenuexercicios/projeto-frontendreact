import React from "react";
import styled from "styled-components";

export default function CardCarrinho({
  id,
  url,
  name,
  amount,
  price,
  deleteItem
}) {
  //------------------------------

  return (
    <CardContainer>
      <Image src={url} />
      <p>{name}</p>
      <p>
        Qtd {amount} <b>{1}</b>
      </p>
      <p>R${price}</p>
      <DeleteButton onClick={()=> deleteItem(id)}>x</DeleteButton>
    </CardContainer>
  );
}
const Image = styled.img`
  width: 30%;
`;
const DeleteButton = styled.button`
  background-color: tomato;
  border: none;
`;
const CardContainer = styled.section`
  width: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 10px;
`;
