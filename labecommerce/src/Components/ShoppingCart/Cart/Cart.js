import React from 'react'
import{Carts} from './cartStyle'
import productsList from '../../../assents/productsList'


const Cart = ({productsList, productsCart}) => {
  
 
  return (
    <Carts>
      
      <h2>Cart</h2>
      <p>Quatidade:0</p>
      <p>Valor Total:0</p> 
      <p>Nome do produto </p> <button >Remover</button> 
      
    </Carts>
  )
}

export default Cart
