import { useState } from "react";
import { Button, ButtonContainer, CardDescriptionContainer, CardImage, CardSubTitle, CardText, CardTitle, CardWrapper, Input, Price, PriceContainer } from "./Card-Styled";


export const Card = (props) => {

    const {name, show, price, description, image} = props.product
    const [quantity,setQuantity] = useState(1)

    return (
        <CardWrapper>
            <CardImage
            src={image}/>
            <CardText>
                <CardTitle> {name} </CardTitle>
                <CardSubTitle>{show}</CardSubTitle>
                <CardDescriptionContainer>
                    <p>{description}</p>
                </CardDescriptionContainer>
            </CardText>
            <PriceContainer>
                    <Price>R$ {price},00</Price>
                    <ButtonContainer>
                    <Input type="number"
                    min="1"
                    value={quantity}
                    onChange={(e)=>setQuantity(Number(e.target.value))}/>
                    <Button onClick={()=>{props.addToCart(props.product,quantity)}}>+</Button>
                    </ButtonContainer>
                </PriceContainer>
        </CardWrapper>
    )
} 