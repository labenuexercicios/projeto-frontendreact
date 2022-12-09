import React, { useState } from "react";

import {
  ButtonContainer,
  CartContainer,
  CartContent,
  CartWrapper,
  CloseButton,
  DisplayItems,
  EmptyCart,
  PriceContainer,
  Shop,
  MessageContainer,
} from "./Cart-Styled";
import { CartCard } from "./CartCard/CartCard";

export const Cart = (props) => {
  console.log(props);

  const subTotal = props.cart.reduce(
    (acc, product) => product.price * product.quantity + acc,
    0
  );

  const [message, setMessage] = useState(false);
  

  const shop = () => {
    if (props.cart.length >= 1) {
      setMessage(true);
      props.clearAllCart();
    } else {
      setMessage(false);
    }
  };

console.log (props.cart)
  return (
    <CartWrapper onClick={()=>props.setCartVisible(false)}>
      <CartContainer>
        <CloseButton
          onClick={() => {
            return (props.setCartVisible(false),
            props.setCartHiden(false),
            console.log(props.cartVisible))
          }}
        />
        <CartContent>
          <ButtonContainer>
            <h1>Seu Carrinho</h1>
            <EmptyCart
              onClick={() => {
                props.clearAllCart();
              }}
            >
              Esvaziar carrinho
            </EmptyCart>
          </ButtonContainer>

          <DisplayItems>
            {props.cart.map((product) => {
              return (
                <CartCard
                  cart={product}
                  key={product.id}
                  deleteItem={props.deleteItem}
                  cartQuantity={props.cartQuantity}
                  subTotal={subTotal}
                />
              );
            })}
            {message ? (
              <MessageContainer
                onClick={() => {
                  setMessage(false);
                }}
              >
                <h2>Compra efetuada com sucesso!</h2>
                <h4> Obrigado por comprar na SpaceLip, volte sempre.</h4>
              </MessageContainer>
            ) : null}
          </DisplayItems>
          <ButtonContainer>
            <PriceContainer>
              <p>Subtotal</p>
              <h1>R${subTotal},00</h1>
            </PriceContainer>
            <Shop
              onClick={() => {
                shop();
              }}
            >
              Finalizar compra
            </Shop>
          </ButtonContainer>
        </CartContent>
      </CartContainer>
    </CartWrapper>
  );
};
