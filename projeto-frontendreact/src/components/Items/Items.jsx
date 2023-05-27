import React from "react";
import { ItemsContainer, Item, ItemImage, ItemName, ItemInfo, ItemPrice, ItemQuantity, RemoveItemButton } from "./styled";

export function Items({ cart, setCart, amount, setAmount }) {

    const handleRemoveItem = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId)

        const itemToRemove = cart.find((item) => item.id === itemId)

        if (itemToRemove) {
            const itemTotal = itemToRemove.quantity * itemToRemove.value;
            setAmount(amount - itemTotal)
        }

        setCart(newCart)
    }
    return (
        <ItemsContainer>
            {cart.map((item) =>
                <Item key={item.id}>
                    <ItemInfo>
                            <ItemImage src={item.imageUrl} alt={item.name} />
                            <ItemName>{item.name}</ItemName>
                            <ItemPrice>R$ {item.value.toFixed(2)}</ItemPrice>                      
                            <ItemQuantity>
                                Quant: {item.quantity}
                            </ItemQuantity>                      
                            <RemoveItemButton onClick={() => handleRemoveItem(item.id)}>
                                Remover
                            </RemoveItemButton>                         
                    </ItemInfo>
                </Item>
            )}
        </ItemsContainer>
    )
}