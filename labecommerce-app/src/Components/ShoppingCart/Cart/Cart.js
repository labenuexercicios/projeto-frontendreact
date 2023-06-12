import Itens from "../Itens/Itens";
import { CartStyle } from './CartStyle'

function Cart() {

  
    
  
    return (
        <CartStyle>
            <h1>Cart</h1>
            <Itens/>
            <Itens/>
            <p>Valor total</p>
        </CartStyle>
    )
}

export default Cart;