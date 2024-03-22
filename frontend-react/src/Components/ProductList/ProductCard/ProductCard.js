import React from "react";

export default function ProductCard({ amount, setAmount, cart, setCart, addToCart }) {
    console.log('Rendering ProductCard');
    return (
        <>
            <button onClick={addToCart}>Add to Cart </button>
        </>
    )

}