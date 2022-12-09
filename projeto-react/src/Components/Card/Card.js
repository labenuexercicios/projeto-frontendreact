import React from "react";
import { Card, Legenda, Imagem } from "./style";
import { priceFormatter } from '../../utils/priceFormatter'
import { FaShoppingCart } from 'react-icons/fa'

function Cards(props) {
  const { product, addToCart } = props

  return (
      <Card>
        <Imagem src={props.product.image} alt={props.product.description}/>
        <Legenda>
          <div className="card-name">
            <h2>{props.product.name}</h2>
          </div>

          <div className="card-price">
            <h4>{priceFormatter.format(props.product.price)}</h4>
          </div>

          <div className="card-carting">
            <button onClick={() => addToCart(product)}><FaShoppingCart/>Adicionar ao Carrinho</button>
          </div>
        </Legenda>
      </Card>
  );
}

export default Cards;