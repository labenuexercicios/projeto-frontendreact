import {Card} from "./style"

export function Items(props) {

    return (
        props.carrinho.map((item, index) => {
            return (
                <Card key={index}>
                    <p>{item.quantidade}x {item.nome}</p>
                    <button onClick={() => props.subCarrinho(item)}>Remover</button>
                </Card>
            )
        })
    )
}