import { Itens } from "../Items/Items"
import {CarrinhoContainer} from "./style"

export function Carrinho(props) {
    return (
        <CarrinhoContainer>
            <h2>Carrinho</h2>
            <Itens carrinho={props.carrinho} subCarrinho={props.subCarrinho} />
            <p>Valor Total: R$ {props.montante.toFixed(2)}</p>
        </CarrinhoContainer>
    )
}