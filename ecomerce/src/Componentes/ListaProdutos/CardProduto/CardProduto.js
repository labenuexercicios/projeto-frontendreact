import { Produto } from "./style"

export function CardProduto(props) {

    return (
        props.listaProdutos
            .filter((produto) => {
                if (produto.valor >= props.filtroMin) {
                    return produto
                }
            })
            .filter((produto) => {
                if (produto.valor <= props.filtroMax) {
                    console.log(props.filtroMax)
                    return produto
                } else if (!props.filtroMax) {
                    return produto
                }
            })
            .filter((produto) => {
                return produto.nome.toLowerCase().includes(props.filtroBusca.toLowerCase());
            })
            .sort((atual, proximo) => {
                if (props.ordem === "crescente") {
                    if (atual.nome < proximo.nome) {
                        return -1
                    } if (atual.nome > proximo.nome) {
                        return 1
                    } else {
                        return 0
                    }
                }
                if (props.ordem === "decrescente") {
                    if (atual.nome > proximo.nome) {
                        return -1
                    } if (atual.nome < proximo.nome) {
                        return 1
                    } else {
                        return 0
                    }
                }
            })
            .map((produto) => {
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