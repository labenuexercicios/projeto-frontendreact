import React from "react";
import {ConteinerCar,FormContainer, H1, Form, SetButton,RegisterButton,  } from "./styles"



const ShoppingCar = (props)=>{

  props.cards.amount=index
  const increaseQuantity = (index) => {
    const newCartItems = [...props.cartItems];
    newCartItems[index].quantity += 1;
    props.setCartItems(newCartItems);
  }
  const decreaseQuantity = (index) => {
    const newCartItems = [...props.cartItems];
    newCartItems[index].quantity -= 1;
    props.setCartItems(newCartItems);
  }
  const removeItem = (index) => {
    const newCartItems = [...props.cartItems];
    newCartItems.splice(index, 1);
    props.setCartItems(newCartItems);
  }
      
    return(
      
        <ConteinerCar>
            <FormContainer >
      <H1>Carrinho</H1>     
      {props.cartItems.map((item,index)=>{
        return (  
      <Form key={index}>
        <p>{item.name}</p >       
        <p>{item.price}</p >       
        <SetButton onClick={() => increaseQuantity(index)}>+</SetButton>
        <SetButton onClick={() => decreaseQuantity(index)}>-</SetButton>
        <SetButton onClick={() => removeItem(index)}>Remover</SetButton>         
        <RegisterButton onClick={() => props.changePage(1)}>Concluir Compra</RegisterButton>
        <RegisterButton onClick={() => props.changePage(1)}>Continuar Comprando</RegisterButton>
      </Form>)})}     
    </FormContainer>
        </ConteinerCar>        
    )    
}
export default ShoppingCar