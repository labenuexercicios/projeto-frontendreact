import { Items } from "../Items/Items";
import { CartCaixa } from "./cartStyle";

export function Cart() {
  return (
    <>
      <CartCaixa>
        <p>Cart</p>
        <Items />
      </CartCaixa>
    </>
  );
}
