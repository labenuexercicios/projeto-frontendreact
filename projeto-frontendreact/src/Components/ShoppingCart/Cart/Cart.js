import Items from "../Items/Items"
import { CartStyle, Amount } from "./CartStyle"

export default function Cart(props) {
    return(
        <CartStyle>
        <h1>Carrinho</h1>
        <Items />
        <Amount>Valor total: R${props.amount}</Amount>
        </CartStyle>
    )

}