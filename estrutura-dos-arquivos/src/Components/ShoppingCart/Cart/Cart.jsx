
import Items from "../Items/Items"
import { Carts, Title} from "./CartStyle"


function Cart (){
    return(
        <Carts>
            <Title>Cart</Title>
            <Items/>
        </Carts>
    )
}

export default Cart
