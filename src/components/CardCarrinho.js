import React from "react";
import styled from "styled-components";

export default function CardCarrinho({
  id,
  img,
  name,
  amount,
  price,
  deleteItem
}) {
  //------------------------------

  return (
    <CardContainer>
      <Image src={img} />
      <p>{name}</p>
      <p>
        Qtd <b>{amount}</b>
      </p>
      <p>R${price},00</p>
      <DeleteButton onClick={()=> deleteItem(id)}>X</DeleteButton>
    </CardContainer>
  );
}
const Image = styled.img`
  width: 30%;
`;
const DeleteButton = styled.button`
  background-color: red;
  border: none;
  text-align: center;
`;
const CardContainer = styled.section`
  width: 350px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgb(194, 184, 184);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 10px;
`;
