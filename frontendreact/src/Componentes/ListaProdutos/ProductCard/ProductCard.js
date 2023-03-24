import React, { useState } from "react";
import {CardContainer, Button} from "./styled"
import { lista } from "./ProductsList"


  const ProductCard = (props) => {
  
  const { product } = props
  const { lista } = props

  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
  const updatedCart = [...cartItems, product];
  setCartItems(updatedCart);
  };

  return (
    <CardContainer>
        <img src={props.imageUrl} alt={props.name}/>
        <h2>{props.name}</h2>
        <p>R$ {props.value},00</p>
        <Button onClick={() =>addToCart(product)}>Adicionar ao carrinho</Button>
    </CardContainer>
  )
}

export default ProductCard;
  



