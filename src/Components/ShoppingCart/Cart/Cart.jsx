import React from "react";
import {ConteinerCar,FormContainer, H1, Form, SetButton,RegisterButton,  } from "./styles"

const [cartItems, setCartItems] = useState([]);


const ShoppingCar = (props)=>{

  props.cards.amount=index
  const increaseQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  }
  const decreaseQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity -= 1;
    setCartItems(newCartItems);
  }
  const removeItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  }
      
    return(
        <ConteinerCar>
            <FormContainer >
      <H1>Carrinho</H1>
      <Form>   
        

        <SetButton onClick={() => increaseQuantity(index)}>+</SetButton>
        <SetButton onClick={() => decreaseQuantity(index)}>-</SetButton>
        <SetButton onClick={() => removeItem(index)}>Remover</SetButton>         
        <RegisterButton onClick={() => props.changePage(1)}>Concluir Compra</RegisterButton>
        <RegisterButton onClick={() => props.changePage(1)}>Continuar Comprando</RegisterButton>
      </Form>
    </FormContainer>
        </ConteinerCar>
    )
}
export default ShoppingCar