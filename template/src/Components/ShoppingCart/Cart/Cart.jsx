import { Items } from "../Items/Items"
import { CartStyle, Background } from "./CartStyle"

export const Cart =({cart, amount, removeProduct,changeScreen})=>{
    const showHomepage = () => { changeScreen("Homepage")}
    return(
        <Background>
        <CartStyle>
        <button onClick={showHomepage}>+</button>
        <h2>Cart</h2>
        {cart.map((product)=>{return (<Items product={product} removeProduct={removeProduct}/>)})}
        <p>Valor Total: {amount.toFixed(2).replace(".",",")}</p>
        </CartStyle>
        </Background>
        
        
        
    )
}