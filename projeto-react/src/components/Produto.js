import React from 'react'

export default function Produto(props) {
    const {onAdd} = props;
  return (
    <div>
      <img className="imagem" src={props.produto.image} alt={props.produto.name}></img>
      <h3>{props.produto.name}</h3>
      <div>R${props.produto.valor}</div>
      <div>
        <button onClick={() => onAdd(props.produto)} >Comprar</button>
      </div>
    </div>
  )
}
