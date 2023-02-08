import CountItem from "../CountItem/CountItem";
import { CarrinhoContainer, ItemCarrinho } from "./Styled";

export default function Carrinho({ sacola }) {
    const {
        carrinho,
        totalCarrinho,

        removeItemCarrinho,

        editQuantCarrinho,

    } = sacola
    function imprimirTotal() {
        if (totalCarrinho() > 0) {
            return <p>Total Carrinho: R${totalCarrinho().toFixed(2)}</p>
        }
    }

    return <CarrinhoContainer width={carrinho.length === 0 ? "" : "350px"}>

        {imprimirTotal()}


        {carrinho.map((item) => {
            return <ItemCarrinho>
                <ul>
                    <li>Nome: {item.nome}</li>
                    <li>Qtd: {item.quant}</li>
                    <li>Total item: R${item.valorTotal.toFixed(2)}</li>
                    <li><CountItem editQuantCarrinho={editQuantCarrinho} produtoId={item.id} quantItem={item.quant} /></li>
                    <li><button onClick={() => removeItemCarrinho(item.id)}>Remover</button></li>
                </ul>

            </ItemCarrinho>
        })}
    </CarrinhoContainer>
}