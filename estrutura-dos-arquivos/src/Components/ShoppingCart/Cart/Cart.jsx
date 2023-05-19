
import Items from "../Items/Items"
import { Carts, Title} from "./CartStyle"
import { useState } from "react"


function Cart (){

    const [cart, setCart] = useState('hhyhy')
    const [amount, setAmount] = useState('5t5t5t')

    const onChangeCart = (e) => {
        setCart(e.target.value)
    }
    const onChangeAmount = (e) => {
        setAmount(e.target.value)
    }

    //console.log(cart, amount);
    
    return(
        <Carts>
            <Title>Cart</Title>
            <Items
            amount={amount} 
            onChangeAmount={onChangeAmount}
            cart={cart}
            onChangeCart={onChangeCart}
            />
        </Carts>
    )
}

export default Cart
