import { CartStyle, Amount, Title, CartDiv } from "./CartStyle"

export default function Cart(props) {

    const totalValue = Number(props.amount)

    return (
        <CartStyle>
            <Title>
                Carrinho
            </Title>
            
            <CartDiv>
                {props.itemsCart}
            </CartDiv>
            
            <Amount>
                Valor total: R${totalValue.toFixed(2)}
            </Amount>
        </CartStyle>
    )

}