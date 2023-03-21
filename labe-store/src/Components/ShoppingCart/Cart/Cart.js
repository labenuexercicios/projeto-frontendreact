import Items from "../Items/Items";
import { DivCart } from "./cartStyle";


export default function Cart(){
    return(
        <DivCart>
            <h2>Carrinho</h2>
            <Items/>
        </DivCart>
    )
}