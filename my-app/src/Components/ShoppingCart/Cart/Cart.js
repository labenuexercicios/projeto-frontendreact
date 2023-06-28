import React from 'react'
import Items from './Items/Items'
import { CartStyle , Lista } from './CartStyle'
import ProductList from '../../../assets/ProductList'

const Cart = () => {
  return (
    <CartStyle>
      
      <Lista>
        <h4>Carrinho</h4>
        <Items 
        name={ProductList.name} 
        id={ProductList.id}
        price={ProductList.price}/>
        <Items />
        <Items />
        <Items />
        <h5>Total: </h5>
      </Lista>
        
    </CartStyle>
  )
}

export default Cart
