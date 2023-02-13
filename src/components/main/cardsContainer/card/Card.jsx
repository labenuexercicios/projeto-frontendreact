import { DescriptionStyled, CardStyled, ImgCardStyled, Div1, ButtonStyled } from "./CardStyled"

export default function Card ({toy, cart, setCart, incrementQuantity, handleClick}) {
    
    return (
        <CardStyled>
            <p>{toy.Name}</p>
            <Div1>
                <ImgCardStyled src={require(`../../../../assets/${toy.Image}`)} />
                <DescriptionStyled>{toy.Description}</DescriptionStyled>
            </Div1>
            <p>Brand: {toy.Brand}</p>
            <p>{toy.Price} Dollars</p>
            <p>PRODUCT ID: {toy.ID}</p>
            <ButtonStyled onClick={() => handleClick(toy, cart, setCart, incrementQuantity)}>
                Add Item to cart
            </ButtonStyled>
        </CardStyled>
    )
    
}