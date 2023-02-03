import { Items } from "../Items/Items"
import {CarrinhoContainer} from "./style"

export function Carrinho() {
    return (
        <CarrinhoContainer>
            <h2>Carrinho</h2>
            <button>Remover</button>
            <Items />
        </CarrinhoContainer>
    )
}