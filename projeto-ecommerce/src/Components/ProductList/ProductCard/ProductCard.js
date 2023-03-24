import React from "react";
import { Card, StyleButton, StyleImage } from "./productCardStyle";
import { ProductsList } from "../../Assents/ProductsList";

function ProductCard({ name,
    image,
    value,
    cart,
    setCart,
    amount,
    setAmount,
    id,
    index, currencyBrazil, prod
}) {
    const addCart = (id) => {

        const existeItem = cart.find((item) => {
            return item.id === id
        })
        if (existeItem) {
            const newCart = cart.map((item) => {
                if (item.id === existeItem.id) {
                    return { ...item, amount: item.amount + 1 }
                }
                return item
            })
            setCart(newCart)
        } else {
            setCart([...cart, prod])
        }
    }
    return (
        <Card>
            <StyleImage src={image} width="125vw" height="135vh" />
            <p><b>{name}</b></p>
            <p>{currencyBrazil(value, true)}</p>
            <StyleButton onClick={() => addCart(id)}>Adicionar ao carrinho</StyleButton>
        </Card>
    )
}

export default ProductCard;