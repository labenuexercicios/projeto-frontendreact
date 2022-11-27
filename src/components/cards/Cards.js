import React from "react";
import { Card, CardContent } from "./styled";

function Cards(props) {
  return (
    <>
      <Card>
        <img src={props.img} alt="game" />
        <CardContent>
          <p>{props.name}</p>
          <p>R$ {props.price}</p>
          <button>Adicionar ao carrinho</button>
        </CardContent>
      </Card>
    </>
  );
}

export default Cards;
