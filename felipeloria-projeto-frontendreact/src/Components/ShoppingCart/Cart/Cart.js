import Items from "../Items/Items"
import { CartContainer } from "./CartStyle"

export function Cart () {
    return (
        <CartContainer>
            <h1>Cart</h1>
            <Items></Items>
        </CartContainer>
    )
}

export default Cart