import React from "react";

export default function ProductCard({ amount, setAmount, cart, setCart, addToCart }) {

    return (
        <>
            <button onClick={addToCart}>Adicionar ao Carrinho</button>
        </>
    )

}