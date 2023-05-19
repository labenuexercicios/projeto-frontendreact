import { Items } from "../Items/Items";
import {HiShoppingCart} from "react-icons/hi"

export function Cart({amount, setAmount, cart, setCart}){
    console.log(amount, setAmount, cart, setCart,)
    return(
        <div className="containerCart"> 
            <div className="first">
               <h1>Carrinho</h1>
               <HiShoppingCart src={HiShoppingCart} alt="Carinho de Compras" className="img" />
            </div>
            <div className="second">
               <Items/>
            </div>
            
        </div>
    )
}