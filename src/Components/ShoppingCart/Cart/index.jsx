import {
  CartContainer,
  ItensContainer,
  TopBagContainer,
  TotalCart,
} from "./style.js";
import Items from "../Items";
import { BaggageClaim, Store,ArrowBigRightDash } from "lucide-react";

import { useEffect } from "react";

export default function Cart(props) {
  const { cart, setCart, amount, setAmount } = props;

  const calculateTotal = cart.map(
    (cartItem) => cartItem.value * cartItem.quantity
  );

  const saveCartLocalStorage = () =>
    localStorage.setItem("CartItems", JSON.stringify(cart));
  const getCartLocalStorage = localStorage.getItem("CartItems");
  useEffect(() => {
    saveCartLocalStorage();

    let sumArray = calculateTotal.reduce(
      (calculateTotalArray, calculateTotal) =>
        calculateTotalArray + calculateTotal,
      0
    );
    setAmount(sumArray);
  }, [cart]);

  useEffect(() => {
    setCart(JSON.parse(getCartLocalStorage));
  }, []);

  return (
    <CartContainer>
      <TopBagContainer>
        <Store color="var(--ui-success)" size={50} strokeWidth={1.5} />
        <h1>Bag</h1>
      </TopBagContainer>

      <ItensContainer>
        <Items cart={cart} setCart={setCart} />
      </ItensContainer>

      <TotalCart>
        <BaggageClaim color="var(--ui-placeholder)" size={40} strokeWidth={1.5} />
        <ArrowBigRightDash size={30} strokeWidth={2.0}/>
        <p>
           {" "}
          {amount.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </TotalCart>
    </CartContainer>
  );
}
