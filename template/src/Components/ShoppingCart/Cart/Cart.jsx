import { Items } from "../Items/Items"
import { CartStyle } from "./CartStyle"

export const Cart =()=>{
    return(
        <CartStyle>
        <h2>Cart</h2>
        <Items/>
        </CartStyle>
        
    )
}