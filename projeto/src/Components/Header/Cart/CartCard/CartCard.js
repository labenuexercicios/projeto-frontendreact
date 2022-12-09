import React, { useState } from "react";
import { CardConatainer, CardImage, Input, TextContainer, ButtonContainer, ExcludeButton } from "./CartCard-Styled";

export const CartCard = (props) =>{
    console.log(props)

    const {name, price, image, quantity} = props.cart
   
    const [putQuantity,setPutQuantity]=useState(quantity)
    const totalItem = price * putQuantity

   
console.log(props.cart)

    return (
        <CardConatainer>
            <CardImage
            src={image}/>
            <TextContainer>
                <p>{name}</p>
                <h1>R${totalItem},00</h1>
                <p>{putQuantity} unidade(s) de R${price},00</p>
            </TextContainer>
            <ButtonContainer>
                <Input type="number"
                value={putQuantity}
                min={"1"}
                onChange={(e)=>{setPutQuantity(e.target.value); props.cartQuantity(props.cart,putQuantity)}}
               />
                <ExcludeButton onClick={()=>{props.deleteItem(props.cart)}}>Excluir Item</ExcludeButton>
            </ButtonContainer>
        </CardConatainer>
    )
}