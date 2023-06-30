import { CartContainer, ItensContainer, TotalCart } from "./style.jsx";
import Items from "../Items";
import { BaggageClaim } from "lucide-react";

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
      <div>
        <h1>Bag</h1>
      </div>
      <ItensContainer>
        <Items cart={cart} setCart={setCart} />
      </ItensContainer>
      <TotalCart>
        <BaggageClaim />
        <p>
          Valor Total :{' '}
          {amount.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </TotalCart>
    </CartContainer>
  );
}
