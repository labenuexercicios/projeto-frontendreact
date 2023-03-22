import React from "react";
import {ConteinerCar,Carrinho,P,FormContainer, H1, Form, SetButton,RegisterButton,Bin  } from "./styles"
import bin from "./bin.png"

const ShoppingCar = (props)=>{
  
  const increaseQuantity = (index) => {
    const newCartItems = [...props.cartItems];    
    newCartItems[index].amount += 1;    
    props.setCartItems(newCartItems);
  }
  const removeItem = (index) => {
    const newCartItems = [...props.cartItems];
    newCartItems.splice(index, 1);
    props.setCartItems(newCartItems);
  }   

  const decreaseQuantity = (index, removeItem) => {
    const newCartItems = [...props.cartItems];
    if(newCartItems[index].amount === 0){
    removeItem(index)    
    }else{ 
    newCartItems[index].amount -= 1;
  }
    props.setCartItems(newCartItems);
  }

  // usar for para fazer o total
       
    return(      
        <ConteinerCar>
            <FormContainer >
      <H1>Carrinho</H1>     
      {props.cartItems.map((item,index)=>{
        return (  
      <Form key={index}>
        <Carrinho>
        <img src={item.image} width={55}/>
        <P>
        <p>{item.title}</p >       
        <p>{props.currencyBrazil(item.price, true)}</p >
        <p>Quantidade:{item.amount}</p>
        <div> 
       <SetButton onClick={() => increaseQuantity(index)}>+</SetButton>
        <SetButton onClick={() => decreaseQuantity(index)}>-</SetButton>
        <Bin onClick={() => removeItem(index)}><img src={bin} alt="" width="16px" /></Bin>
        </div>         
        </P> 
       </Carrinho>
       <div>      
        <RegisterButton onClick={() => props.changePage(1)}>Concluir Compra</RegisterButton>       
        </div> 
      </Form>)})}     
    </FormContainer>
        </ConteinerCar>        
    )    
}
export default ShoppingCar