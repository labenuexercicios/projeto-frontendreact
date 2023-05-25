import Item from "../items/Items"
import { CartBox } from "./cartStyle"

function Cart() {
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