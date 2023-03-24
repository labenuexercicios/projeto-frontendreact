import React from "react";
import CartItem from "../CartItem";
import {
  Moon,
  Button,
  CartItens,
  CartWithItens,
  CloseIcon,
  EmptyCart,
  HeaderCart,
  SidebarCart,
  TotalAmount,
} from "./styled";
import Overlay from "../Overlay";
import MoonCart from "../../assets/imgs/moon-cart.png";

const ShoppingCart = ({
  handleScreen,
  cartIsOpen,
  setCartIsOpen,
  cart,
  setCart,
  total,
  addProductCart,
}) => {
  const removeCartProduct = (product) => {
    const filteredList = cart.filter((item) => item !== product);
    setCart(filteredList);
  };

  const removeCartItem = (product) => {
    if (product.amount > 1) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (product.amount < 2) {
      removeCartProduct(product);
    }
  };

  const cartItemRender = () =>
    cart.map((product) => {
      return (
        <CartItem
          key={product.id}
          product={product}
          addProductCart={addProductCart}
          removeCartItem={removeCartItem}
          removeCartProduct={removeCartProduct}
        />
      );
    });
  return (
    <div>
      <SidebarCart cartIsOpen={cartIsOpen}>
        <HeaderCart>
          <CloseIcon onClick={() => setCartIsOpen("-120%")} />
          <h2>Carrinho de Compras</h2>
        </HeaderCart>
        <EmptyCart cart={cart}>
          <p>Carrinho vazio</p>
          <Moon
            src={MoonCart}
            alt="Lua"
          />
        </EmptyCart>

        <CartWithItens cart={cart}>
          <CartItens>{cartItemRender()}</CartItens>
          <TotalAmount>
            <h1>Total:</h1> <h1>R${total.toFixed(2).replace(".", ",")}</h1>
          </TotalAmount>
          <Button
            type="button"
            onClick={() => {
              handleScreen(7);
              setCartIsOpen("-120%");
              setCart([]);
            }}
          >
            Finalizar compra
          </Button>
          <p onClick={() => setCartIsOpen("-120%")}>Ver mais produtos</p>
        </CartWithItens>
      </SidebarCart>

      <Overlay cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
    </div>
  );
};

export default ShoppingCart;