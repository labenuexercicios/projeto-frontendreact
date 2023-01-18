import React from "react";

export default function CartItem(props) {

  const {carrinho} = props;

  return(
    carrinho.map(e => <div key={e.id}>{e.name}</div>)
  )
}