import Items from "../Items/Items";
import { CartContainer } from "./CartStyle";

const Cart = ({amount, setAmount, cart , setCart}) => {
    return (
        <CartContainer>
            <h1>Carrinho</h1>
            <Items />
        </CartContainer>
    )
}

export default Cart;