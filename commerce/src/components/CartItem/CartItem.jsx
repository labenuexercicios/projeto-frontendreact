import React from "react"

export default function CartItem(props) {
  const {item} = props
  return (
    <div>
      {item.name}
      {item.price}
      {/* Tratar esse botão */}
      <button onClick={props.removeProd}>Remover</button>
    </div>
  )
}