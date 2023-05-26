import Item from "../items/Items"
import { CartBox } from "./cartStyle"

function Cart({ cart, amount, setCart, setAmount }) {
    return (
        <>
            <CartBox>
                <p>Cart</p>
                <Item />
            </CartBox>
        </>
    )
}
export default Cart