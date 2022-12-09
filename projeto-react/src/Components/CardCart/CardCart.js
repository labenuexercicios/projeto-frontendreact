import React from "react";
import { Card, Imagem } from "./style";
import { priceFormatter } from '../../utils/priceFormatter'
import { FaTrash } from "react-icons/fa";

function CardCart(props) {
  const { product, increaseQuantityInCart, decreaseQuantityInCart, deleteFromCart } = props

  return (
      <Card>
        <Imagem src={props.product.image} alt={props.product.description}/>
          <div className="card-name">
            <h2>{props.product.name}</h2>
          </div>

          <div className="card-price">
            <h4>{priceFormatter.format(props.product.price)}</h4>
          </div>

          <div className="card-quantity-button">
            {
              product.quantity > 1 && <button onClick={() => decreaseQuantityInCart(product)}>-</button>
            }
            <span>{product.quantity}</span>
            <button onClick={() => increaseQuantityInCart(product)}>+</button>
          </div>

          <div className="card-delete-button">
            <button onClick={() => deleteFromCart(product)}><FaTrash/></button>
          </div>
      </Card>
  );
}

export default CardCart;