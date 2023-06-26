import { CartContainer } from "./style.jsx";
import Items from "../Items";

export default function Cart(props) {
  const { cart, setCart, amount, setAmount } = props;

  const calculateTotal = cart.map(
    (cartItem) => cartItem.value * cartItem.quantity
  );
  

let calculateTotalArray =calculateTotal.reduce((calculateTotalArray,calculateTotal )=> calculateTotalArray+calculateTotal,0)
//lembrar de utilizar o Amount para atualizar as alterações de valor 



  
  return (
    <CartContainer>
      <h1>Cart</h1>

      <Items cart={cart} setCart={setCart} />

      <h4>Valor Total: {calculateTotalArray.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
    </CartContainer>
  );
}
