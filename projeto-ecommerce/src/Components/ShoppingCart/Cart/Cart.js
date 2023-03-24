import React from "react";
import Items from "../Items/Items";
import { CartContainer, } from "./cartStyle";


function Cart({
    cart,
    setCart,
    amount,
    setAmount, currencyBrazil
}) {

    return (

        <CartContainer>
            <h3>Carrinho</h3>
            <Items
                items={cart}
                setCart={setCart}
                amount={amount}
                setAmount={setAmount}
                currencyBrazil={currencyBrazil}
            />
        </CartContainer>

    )
}

export default Cart;