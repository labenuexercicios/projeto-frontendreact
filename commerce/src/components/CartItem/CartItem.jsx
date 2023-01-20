import React from "react"

export default function CartItem(props) {
  const {item} = props
  
  return (
    <div>

      Produto: {item.name} <br />
      Preço: R$ {item.price.toFixed(2)} <br />
      Quantidade: {item.amount} <br />
      Total: R$ {(item.price * item.amount).toFixed(2)} <br />
      {/* Tratar esse botão */}
      <button onClick={() => props.removeProd(item)}>Remover</button>

    </div>

  )
}