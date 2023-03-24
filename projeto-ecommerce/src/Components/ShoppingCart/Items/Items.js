import React from "react";
import { ItemsImg, ItemsBox, HorizontalLine, ButtonContainer, RemoveButton, StyleButton } from "./itemsStyle";
import bin from "../../../assets/bin.png"


function Items({
    items, //<- cart
    currencyBrazil,
    setCart
}) {
   
    const decreaseQuantity = (index) => {
        const newCartItems = [...items];
        if (newCartItems[index].amount === 1) {
            return removeItem(index)
        } else {
            newCartItems[index].amount -= 1;
        }
        setCart(newCartItems);
    }
    const removeItem = (index) => {
        setCart(items.slice(0, index).concat(items.slice(index + 1)));
    }

    let totalValue = 0
    for (let prod of items){
       const multProds =  prod.value * prod.amount 
       totalValue = totalValue + multProds
    }
    const clearCart = () => {
        setCart([])
        alert("Compra finalizada com sucesso. Obrigdo pela preferência!")
    }

    return (
        <div>
            {items.map((item, index) => {
                return (
                    <ItemsBox key={index}>
                        <ItemsImg src={item.imageUrl} />
                        <p>{item.amount === 1 ? currencyBrazil(item.value, true) : currencyBrazil(item.value * item.amount, true) }</p>
                        <ButtonContainer>
                            <p>Qtd: {item.amount}</p>
                            <RemoveButton onClick={() => decreaseQuantity(index)}><img src={bin} alt="" width="20vw" height="18px" /></RemoveButton>
                        </ButtonContainer>
                        <HorizontalLine />
                    </ItemsBox>
                )
            })}
            <div>
                <h4>Total: {currencyBrazil(totalValue, true)}</h4>
                <StyleButton onClick={() => {clearCart()}}>Finalizar compra</StyleButton>
            </div>
        </div>
    )
}
export default Items;