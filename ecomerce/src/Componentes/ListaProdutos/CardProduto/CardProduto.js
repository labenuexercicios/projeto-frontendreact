import { Produto } from "./style"

export function CardProduto(props) {

    return (
        props.listaProdutos.map((produto) => {
            return (
                <Produto key={produto.id}>
                    <img src={produto.img} />
                    <p>{produto.nome}</p>
                    <p>R$ {produto.valor.toFixed(2)}</p>
                    <button onClick={() => props.addCarrinho(produto)}>Adicionar ao Carrinho</button>
                </Produto>
            )
        })
    )
}