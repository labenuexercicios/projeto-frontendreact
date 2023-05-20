import { Items } from "../Items/Items"
import { CartStyle } from "./CartStyle"

export const Cart =({cart, amount, removeProduct})=>{
    return(
        <CartStyle>
        <h2>Cart</h2>
        {cart.map((product)=>{return (<Items product={product} removeProduct={removeProduct}/>)})}
        <p>Valor Total: {amount.toFixed(2)}</p>
        </CartStyle>
        
        
    )
}