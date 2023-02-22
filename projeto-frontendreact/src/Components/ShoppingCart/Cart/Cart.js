import Items from "../Items/Items"
import { CartStyle, Amount } from "./CartStyle"

export default function Cart() {
    return(
        <CartStyle>
        <h1>Carrinho</h1>
        <Items />
        <Amount>Valor total: R$</Amount>
        </CartStyle>
    )

}