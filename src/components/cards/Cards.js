import React from "react";
import { Card, CardContent } from "./styled";

function Cards(props) {
  return (
    <>
      <Card>
        <img src={props.img} alt="game" />
        <CardContent>
          <span>{props.name}</span>
          <p>R$ {props.price}</p>
          <button onClick={() => props.addGameOnCart(props)}>
            Adicionar ao carrinho
          </button>
        </CardContent>
      </Card>
    </>
  );
}

export default Cards;
