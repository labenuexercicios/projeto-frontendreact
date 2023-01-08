import React from "react";
import {
  CartContainer,
  CloseShoppingCart,
  CartTitle,
  TotalTxt,
  ClearShoppingCart,
} from "./styled";
import { Cart } from "../Cart";

export function ShoppingCart({
  cartProducts,
  setCartProducts,
  changeQty,
  showShoppingCart,
}) {
  // Function that removes itens from the shopping cart.
  const remove = (product) => {
    const cartFiltered = cartProducts.filter((item) => item !== product);
    setCartProducts(cartFiltered);
  };

  const totalCart = cartProducts.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);

  return (
    <CartContainer>
      <CartTitle>Carrinho</CartTitle>
      <CloseShoppingCart onClick={showShoppingCart}> X </CloseShoppingCart>
      {cartProducts.map((item) => {
        return (
          <Cart
            key={item.key}
            item={item}
            changeQty={changeQty}
            remove={remove}
            total={item.price * item.quantity}
          />
        );
      })}
      {cartProducts.length > 0 ? (
        <TotalTxt>Total do carrinho: R${totalCart.toFixed(3)}</TotalTxt>
      ) : (
        <CartTitle>Não há items no carrinho!</CartTitle>
      )}
      <ClearShoppingCart
        onClick={() => {
          setCartProducts([]);
        }}
      >
        Limpar
      </ClearShoppingCart>
    </CartContainer>
  );
}
