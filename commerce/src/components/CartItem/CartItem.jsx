import React from "react"

export default function CartItem(props) {
  const {item} = props
  
  let totalItem = 0
  props.carrinho.map(e=> totalItem += e.amount)
  let totalValor = 0
  props.carrinho.map(e=> totalValor += e.price * e.amount)

  return (
    <div>
      <div>
      Produto: {item.name} <br />
      Preço: R$ {item.price.toFixed(2)} <br />
      Quantidade: {item.amount} <br />
      Total: R$ {(item.price * item.amount).toFixed(2)} <br />
      {/* Tratar esse botão */}
      <button onClick={() => props.removeProd(item)}>Remover</button>
      </div>
      Total de produtos: {totalItem} <br />
      Total: R$ {totalValor.toFixed(2)}
    </div>
  )
}