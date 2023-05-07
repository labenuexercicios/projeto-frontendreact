import { Items } from "../Items/Items";
import {HiShoppingCart} from "react-icons/hi"

export function Cart(){
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