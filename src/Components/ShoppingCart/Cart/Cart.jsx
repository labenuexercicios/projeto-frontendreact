import React from "react";
import { ConteinerCar, Carrinho, P, FormContainer, H1, Form, SetButton, RegisterButton, Bin } from "./styles"
import bin from "./bin.png"

const ShoppingCar = (props) => {
  
  const removeItem = (index) => {
    const newCartItems = [...props.cartItems];
    newCartItems.splice(index, 1);
    props.setCartItems(newCartItems);
  }

  const decreaseQuantity = (index, removeItem) => {
    const newCartItems = [...props.cartItems];
    if (newCartItems[index].amount === 1) {
      return removeItem(index)
    } else {
      newCartItems[index].amount -= 1;
    }
    props.setCartItems(newCartItems);
  }

  
  return (
    <ConteinerCar>
      <FormContainer >
        <H1>Carrinho</H1>
        {props.cartItems.map((item, index) => {
          return (
            <Form key={index}>
              <Carrinho>
                {/* <img src={item.image} width={55} /> */}
                <P>
                  <p>{item.title}</p >
                  <p>{item.amount===1?props.currencyBrazil(item.price,true): props.currencyBrazil(item.price*item.amount,true)}</p >
                  <p>Quantidade:{item.amount}</p>
                  <div>
                    <SetButton onClick={() => {props.addToCart(item)}}>+</SetButton>                   
                    <Bin onClick={() => decreaseQuantity(index, removeItem)}><img src={bin} alt="" width="16px" /></Bin>
                  </div>
                </P>
              </Carrinho>
              <div>
                <RegisterButton onClick={() => props.changePage(9)}>Concluir Compra</RegisterButton>
              </div>
             
            </Form>)
        })}
             

      </FormContainer>
      
    </ConteinerCar>
  )
}
export default ShoppingCar