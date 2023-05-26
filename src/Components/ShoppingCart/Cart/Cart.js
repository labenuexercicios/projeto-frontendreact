import { CarrinhoCaixa } from "./CartSyle";
import Items from "../Items/Items";

function Cart({
  cart,
  setCart,
  amount, 
  setAmount
}) {
  
  return (
    <CarrinhoCaixa>
      <p>Carrinho</p>
      <Items />
    </CarrinhoCaixa>

  );
}

export default Cart;
