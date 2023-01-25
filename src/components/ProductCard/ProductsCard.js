import React from "react";
import { ProductContainer } from "./ProductCard.styled.";
import { getItem, setItem } from '../../services/LocalStorageFuncs.js';

const ProductCard = (props) => {

  const [cart, setCart] = React.useState( getItem('carrinhoYt') || [])

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id)
    if(element) {
        const arrFilter = cart.filter((e) => e.id !== obj.id)
        console.log(arrFilter)
        setCart(arrFilter)
        setItem('carrinhoYt', arrFilter)
    } else {
        setCart([...cart, obj])
        setItem('carrinhoYt', [...cart,obj])
    }
}

  return (
    <ProductContainer>

      <img src={props.url} />
      <button onClick={()=> handleClick ()}>+ CARRINHO</button>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>Preço: R${props.value},00</p>
      

    </ProductContainer>
  );
};
export default ProductCard;
