import React from 'react'

const CartItem = (props) => {
  const excluirProduto = (id) => {
    const produto = props.cart.find((item) => item.id === id);

    if (produto.quantidade > 1) {
      const newCart = props.cart.map((item) => {
        if (item.id === id) {
          return { ...produto, quantidade: produto.quantidade - 1 };
        } else {
          return item;
        }
      });

      props.setCart(newCart);
    } else {
      const novoCarro = props.cart.filter((item) => item.id !== id);
      props.setCart(novoCarro);
    }
  }
  return (
    <div>
      <p>Total: R${props.soma}</p>
      <p>Produto: {props.nome}</p>
      <p>Preço: R$ {props.preco}</p>
      <p>Qnt: {props.quantidade}</p>
      <button onClick={() => excluirProduto(props.id)}>Remover</button>
    </div>
  )
}

export default CartItem